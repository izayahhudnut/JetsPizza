// action.tsx

import "server-only";

import {
  createAI,
  createStreamableValue,
  getAIState,
  getMutableAIState,
  streamUI,
} from "ai/rsc";

import { openai } from "@ai-sdk/openai";
import { z } from "zod";
import { Chat, Message } from "@/lib/types";
import {
  BotCard,
  BotMessage,
  SpinnerMessage,
  UserMessage,
} from "@/components/Messages";
import { nanoid } from "@/lib/utils";

// Import UI components
import SalesAnalysisDisplay from "@/components/SalesAnalysisDisplay";
import InventoryDisplay from "@/components/InventoryDisplay";
import CostAnalysisDisplay from "@/components/CostAnalysisDisplay";
import ProfitMarginDisplay from "@/components/ProfitMarginDisplay";
import ExpenseManagementDisplay from "@/components/ExpenseManagementDisplay";
import MarketShareDisplay from "@/components/MarketShareDisplay"; // Import MarketShareDisplay
import COGSProjectionDisplay from "@/components/COGSProjectionDisplay"; // Import COGSProjectionDisplay

// Import specific spinners
import SalesDataSpinner from "@/components/SalesDataSpinner";
import CostAnalysisSpinner from "@/components/CostAnalysisSpinner";
import ProfitMarginSpinner from "@/components/ProfitMarginSpinner";
import ExpenseManagementSpinner from "@/components/ExpenseManagementSpinner";
import InventorySpinner from "@/components/InventorySpinner";
import MarketShareSpinner from "@/components/MarketShareSpinner";
import COGSProjectionSpinner from "@/components/COGSProjectionSpinner"; // Spinner for COGS projection

// Define the InventoryData interface
interface InventoryData {
  currentInventory: { [item: string]: number };
  projectedNeeds: { [item: string]: number };
  historicalComparison: { [item: string]: number };
}

// Create the data object
const inventoryData: InventoryData = {
  currentInventory: {
    Cheese: 115,
    Dough: 250,
    "Tomato Sauce": 180,
    Pepperoni: 100,
    Mushrooms: 70,
    Onions: 60,
    "Bell Peppers": 55,
    Olives: 45,
    Sausage: 85,
    "Garlic Butter": 40,
  },
  projectedNeeds: {
    Cheese: 120,
    Dough: 220,
    "Tomato Sauce": 160,
    Pepperoni: 90,
    Mushrooms: 60,
    Onions: 50,
    "Bell Peppers": 45,
    Olives: 40,
    Sausage: 75,
    "Garlic Butter": 35,
  },
  historicalComparison: {
    Cheese: 118,
    Dough: 235,
    "Tomato Sauce": 170,
    Pepperoni: 95,
    Mushrooms: 65,
    Onions: 55,
    "Bell Peppers": 50,
    Olives: 42,
    Sausage: 80,
    "Garlic Butter": 38,
  },
};

// The submitUserMessage function
async function submitUserMessage(userInput: string) {
  "use server";
  const aiState = getMutableAIState<typeof AI>();

  aiState.update({
    ...aiState.get(),
    messages: [
      ...aiState.get().messages,
      {
        id: nanoid(),
        role: "user",
        content: userInput,
      },
    ],
  });

  let textStream:
    | ReturnType<typeof createStreamableValue<string>>
    | undefined;
  let textNode: React.ReactNode | undefined;

  const ui = await streamUI({
    model: openai("gpt-4o"),
    initial: <SpinnerMessage />,
    system: `You are a highly knowledgeable and efficient QSR Management Assistant with specific expertise in Jet's Pizza operations. Your role is to assist the General Manager in managing restaurant operations by providing insights and recommendations related to profit margins, inflation impact, expense management, market share analysis, COGS projections, and profitability.

Always provide actionable advice based on the provided data, delivering precise numerical responses without rounding values. When exact data is unavailable, use logical estimates or averages from the provided ranges to deliver a plausible response.
`,

    messages: [
      ...aiState.get().messages.map((message: any) => ({
        role: message.role,
        content: message.content,
        name: message.name,
      })),
    ],
    text: ({ content, done, delta }) => {
      if (!textStream) {
        textStream = createStreamableValue("");
        textNode = <BotMessage content={textStream.value} />;
      }

      if (done) {
        textStream.done();
        aiState.done({
          ...aiState.get(),
          messages: [
            ...aiState.get().messages,
            {
              id: nanoid(),
              role: "assistant",
              content,
            },
          ],
        });
      } else {
        textStream.update(delta);
      }

      return textNode;
    },

    tools: {
      sales_analysis: {
        description:
          "Provides sales analysis comparing current sales to last year's sales, including projections.",
        parameters: z.object({}).required(),
        generate: async function* () {
          yield (
            <BotCard>
              <SalesDataSpinner />
            </BotCard>
          );

          const toolCallId = nanoid();

          aiState.done({
            ...aiState.get(),
            messages: [
              ...aiState.get().messages,
              {
                id: nanoid(),
                role: "assistant",
                content: [
                  {
                    type: "tool-call",
                    toolName: "sales_analysis",
                    toolCallId,
                    args: {},
                  },
                ],
              },
              {
                id: nanoid(),
                role: "tool",
                content: [
                  {
                    type: "tool-result",
                    toolName: "sales_analysis",
                    toolCallId,
                    result: null,
                  },
                ],
              },
            ],
          });

          return (
            <BotCard>
              <SalesAnalysisDisplay />
            </BotCard>
          );
        },
      },
      cost_analysis: {
        description:
          "Provides insights on COGS over the past few years, including inflation impact.",
        parameters: z.object({}).required(),
        generate: async function* () {
          yield (
            <BotCard>
              <CostAnalysisSpinner />
            </BotCard>
          );

          const toolCallId = nanoid();

          aiState.done({
            ...aiState.get(),
            messages: [
              ...aiState.get().messages,
              {
                id: nanoid(),
                role: "assistant",
                content: [
                  {
                    type: "tool-call",
                    toolName: "cost_analysis",
                    toolCallId,
                    args: {},
                  },
                ],
              },
              {
                id: nanoid(),
                role: "tool",
                content: [
                  {
                    type: "tool-result",
                    toolName: "cost_analysis",
                    toolCallId,
                    result: null,
                  },
                ],
              },
            ],
          });

          return (
            <BotCard>
              <CostAnalysisDisplay />
            </BotCard>
          );
        },
      },
      profit_margin_analysis: {
        description:
          "Analyzes how projections in revenue, staffing, expenses, or inventory affect profit margins and provides recommendations.",
        parameters: z.object({}).required(),
        generate: async function* () {
          yield (
            <BotCard>
              <ProfitMarginSpinner />
            </BotCard>
          );

          const toolCallId = nanoid();

          aiState.done({
            ...aiState.get(),
            messages: [
              ...aiState.get().messages,
              {
                id: nanoid(),
                role: "assistant",
                content: [
                  {
                    type: "tool-call",
                    toolName: "profit_margin_analysis",
                    toolCallId,
                    args: {},
                  },
                ],
              },
              {
                id: nanoid(),
                role: "tool",
                content: [
                  {
                    type: "tool-result",
                    toolName: "profit_margin_analysis",
                    toolCallId,
                    result: null,
                  },
                ],
              },
            ],
          });

          return (
            <BotCard>
              <ProfitMarginDisplay />
            </BotCard>
          );
        },
      },
      expense_management: {
        description:
          "Provides insights and recommendations on managing expenses.",
        parameters: z.object({}).required(),
        generate: async function* () {
          yield (
            <BotCard>
              <ExpenseManagementSpinner />
            </BotCard>
          );

          const toolCallId = nanoid();

          aiState.done({
            ...aiState.get(),
            messages: [
              ...aiState.get().messages,
              {
                id: nanoid(),
                role: "assistant",
                content: [
                  {
                    type: "tool-call",
                    toolName: "expense_management",
                    toolCallId,
                    args: {},
                  },
                ],
              },
              {
                id: nanoid(),
                role: "tool",
                content: [
                  {
                    type: "tool-result",
                    toolName: "expense_management",
                    toolCallId,
                    result: null,
                  },
                ],
              },
            ],
          });

          return (
            <BotCard>
              <ExpenseManagementDisplay />
            </BotCard>
          );
        },
      },
      inventory_ordering: {
        description:
          "Recommends inventory ordering quantities based on data, considering projections. Call this when the user asks to see the inventory",
        parameters: z.object({}).required(),
        generate: async function* () {
          yield (
            <BotCard>
              <InventorySpinner />
            </BotCard>
          );

          const toolCallId = nanoid();

          aiState.done({
            ...aiState.get(),
            messages: [
              ...aiState.get().messages,
              {
                id: nanoid(),
                role: "assistant",
                content: [
                  {
                    type: "tool-call",
                    toolName: "inventory_ordering",
                    toolCallId,
                    args: {},
                  },
                ],
              },
              {
                id: nanoid(),
                role: "tool",
                content: [
                  {
                    type: "tool-result",
                    toolName: "inventory_ordering",
                    toolCallId,
                    result: null,
                  },
                ],
              },
            ],
          });

          return (
            <BotCard>
              <InventoryDisplay data={inventoryData} />
            </BotCard>
          );
        },
      },
      market_share_analysis: {
        description:
          "Analyzes market share trends and provides strategies to increase market share.",
        parameters: z.object({}).required(),
        generate: async function* () {
          yield (
            <BotCard>
              <MarketShareSpinner />
            </BotCard>
          );

          const toolCallId = nanoid();

          aiState.done({
            ...aiState.get(),
            messages: [
              ...aiState.get().messages,
              {
                id: nanoid(),
                role: "assistant",
                content: [
                  {
                    type: "tool-call",
                    toolName: "market_share_analysis",
                    toolCallId,
                    args: {},
                  },
                ],
              },
              {
                id: nanoid(),
                role: "tool",
                content: [
                  {
                    type: "tool-result",
                    toolName: "market_share_analysis",
                    toolCallId,
                    result: null,
                  },
                ],
              },
            ],
          });

          return (
            <BotCard>
              <MarketShareDisplay />
            </BotCard>
          );
        },
      },
      cogs_projection: {
        description:
          "Provides a projection of COGS (Cost of Goods Sold) for the next five years based on inflation and steady sales growth.",
        parameters: z.object({}).required(),
        generate: async function* () {
          yield (
            <BotCard>
              <COGSProjectionSpinner />
            </BotCard>
          );

          const toolCallId = nanoid();

          aiState.done({
            ...aiState.get(),
            messages: [
              ...aiState.get().messages,
              {
                id: nanoid(),
                role: "assistant",
                content: [
                  {
                    type: "tool-call",
                    toolName: "cogs_projection",
                    toolCallId,
                    args: {},
                  },
                ],
              },
              {
                id: nanoid(),
                role: "tool",
                content: [
                  {
                    type: "tool-result",
                    toolName: "cogs_projection",
                    toolCallId,
                    result: null,
                  },
                ],
              },
            ],
          });

          return (
            <BotCard>
              <COGSProjectionDisplay />
            </BotCard>
          );
        },
      },
    },
  });

  return { id: Date.now(), display: ui.value, role: "assistant" };
}

export type AIState = {
  chatId: string;
  messages: Message[];
};

export type UIState = {
  id: string;
  display: React.ReactNode;
}[];

export const AI = createAI<AIState, UIState, any>({
  actions: { submitUserMessage },
  initialUIState: [],
  initialAIState: { chatId: nanoid(), messages: [] },
  onGetUIState: async () => {
    "use server";

    const aiState = getAIState();

    if (aiState) {
      const uiState = getUIStateFromAIState(aiState);
      return uiState;
    }
  },
});

export const getUIStateFromAIState = (aiState: Chat) => {
  return aiState.messages
    .filter((message) => message.role !== "system")
    .map((message, index) => ({
      id: `${aiState.chatId}-${index}`,
      display:
        message.role === "tool" ? (
          message.content.map((tool: any) => {
            switch (tool.toolName) {
              case "sales_analysis":
                return (
                  <BotCard key={tool.toolCallId}>
                    <SalesAnalysisDisplay />
                  </BotCard>
                );
              case "cost_analysis":
                return (
                  <BotCard key={tool.toolCallId}>
                    <CostAnalysisDisplay />
                  </BotCard>
                );
              case "profit_margin_analysis":
                return (
                  <BotCard key={tool.toolCallId}>
                    <ProfitMarginDisplay />
                  </BotCard>
                );
              case "expense_management":
                return (
                  <BotCard key={tool.toolCallId}>
                    <ExpenseManagementDisplay />
                  </BotCard>
                );
              case "inventory_ordering":
                return (
                  <BotCard key={tool.toolCallId}>
                    <InventoryDisplay data={inventoryData} />
                  </BotCard>
                );
              case "market_share_analysis":
                return (
                  <BotCard key={tool.toolCallId}>
                    <MarketShareDisplay />
                  </BotCard>
                );
              case "cogs_projection":
                return (
                  <BotCard key={tool.toolCallId}>
                    <COGSProjectionDisplay />
                  </BotCard>
                );
              default:
                return null;
            }
          })
        ) : message.role === "user" ? (
          <UserMessage>{message.content as string}</UserMessage>
        ) : message.role === "assistant" &&
          typeof message.content === "string" ? (
          <BotMessage content={message.content} />
        ) : null,
    }));
};
