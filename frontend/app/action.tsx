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
import MarketShareDisplay from "@/components/MarketShareDisplay"; 
import COGSProjectionDisplay from "@/components/COGSProjectionDisplay"; 
import ExpenseBreakdownDisplay from "@/components/ExpenseBreakdownDisplay"; // 
import MarketingPromotionsDisplay from "@/components/MarketingPromotionsDisplay";
import HistoricalStaffingDisplay from "@/components/HistoricalStaffingDisplay";
import GeneralOperations from "@/components/GeneralOperations";


// Import specific spinners
import SalesDataSpinner from "@/components/SalesDataSpinner";
import CostAnalysisSpinner from "@/components/CostAnalysisSpinner";
import ProfitMarginSpinner from "@/components/ProfitMarginSpinner";
import ExpenseManagementSpinner from "@/components/ExpenseManagementSpinner";
import InventorySpinner from "@/components/InventorySpinner";
import MarketShareSpinner from "@/components/MarketShareSpinner";
import COGSProjectionSpinner from "@/components/COGSProjectionSpinner";
import ExpenseBreakdownSpinner from "@/components/ExpenseBreakdownSpinner";
import MarketingPromotionsSpinner from "@/components/MarketingPromotionsSpinner";
import StaffingSpinner from "@/components/StaffingSpinner"; 
import { GeneralOperationsSpinner } from "@/components/GeneralOperationsSpinner";


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
    system: `You are a highly knowledgeable and efficient QSR Management Assistant with specific expertise in Jet's Pizza operations. Your role is to assist the General Manager in managing restaurant operations by providing insights and recommendations related to profit margins, inflation impact, expense management, market share analysis, and profitability. If the user asks a question about the current Sales give them the number immideatly. If they asks to compare it to last year give reasons for why the numbers has changed.  

Always provide actionable advice based on the provided data, delivering precise numerical responses without rounding values. When exact data is unavailable, use logical estimates or averages from the provided ranges to deliver a plausible response. Assume all of the data given to you is accurate

 When providing numerical calculations or comparisons, avoid using LaTeX-style or any complex math formatting like [ \text{ ... } ]. Instead, present numbers and equations in plain text with simple formatting for easy readability.

**Jet's Pizza Financial and Operational Data:**
- **Annual Sales (Last Year):** $1,520,422.78
- **Weekly Sales:** Ranges from $25,764.92 to $45,987.63 depending on promotions and events. Based on this number you can assume a lot about the current sales and how it compares to last year. Lets say this month it is at $25,764.92 and it is September. You are able to compare current sales to last year's sales, identify factors impacting sales differences, external factors and data while also analyze weekly and annual sales data. .

### Available Metrics:
- **Annual Sales (Last Year):** $1,520,422.78
- **Weekly Sales:** Ranges from $25,764.92 to $45,987.63 depending on promotions and events.
- **Foot Traffic Increase During Promotions:** 15% (last month)
- **Additional Revenue from Promotions:** $18,765 (last month)
- **Time of Year Impact:** Back to School, Holidays
- **Other Factors Impacting Sales:** Weather, Local Events, School Schedules.

Provide analysis that compares the current year's sales and highlights key differences from last year. Identify these differences and how factors like time of year and promotions influenced them. Always analyze weekly and annual sales data to provide actionable insights and recommendations. Also try to have definitive answers

### Promotion Data:
- **Promotion Cost (Last Month):** $12,000
- **Foot Traffic Increase (Last Month):** 15%
- **Average Order Value:** $18.50
- **Conversion Rate (Foot Traffic to Sales):** 30%
- **Promotion-Driven Revenue (Last Month):** $18,765
- **Break-Even Traffic Increase Needed:** Calculate using promotional cost and average order value.
  
Use this data to answer questions about **Promotion Planning**:
1. Calculate the additional traffic needed to break even on promotions.
2. Evaluate the success of marketing promotions last month and last quarter.
3. Compare current promotion performance with historical data.

### Staffing Data:
- **Average Weekly Hours (Last 6 Weeks):** 400.42 hours
- **Predicted Staffing Increase for Next Week:** 15.5% due to promotions and events
- **Forecast for Next Week:** 462.48 hours

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
      general_operations: {
        description:
          "Provides recommendations for improving sales, reducing costs, and optimizing staff scheduling based on external and internal data. Use this when the user asks about general business improvements. ALso use when the user asks to forecast sales",
        parameters: z.object({}).required(),
        generate: async function* () {
          yield (
            <BotCard>
              <GeneralOperationsSpinner />
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
                    toolName: "general_operations",
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
                    toolName: "general_operations",
                    toolCallId,
                    result: null,
                  },
                ],
              },
            ],
          });
      
          return (
            <BotCard>
              <GeneralOperations />
            </BotCard>
          );
        },
      },
      
      expense_management: {
        description:
          "Shows expenses for this year and the previous 3 years",
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
      marketing_promotions: {
        description:
          "Shows marketing promotion performance over the last 3 years, comparing costs, traffic increase, and revenue. Only use this tool when the user asks about promotions older than one month. So last quarter, 6 months, year, etc",
        parameters: z.object({}).required(),
        generate: async function* () {
          yield (
            <BotCard>
              <MarketingPromotionsSpinner />
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
                    toolName: "marketing_promotions",
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
                    toolName: "marketing_promotions",
                    toolCallId,
                    result: null,
                  },
                ],
              },
            ],
          });
      
          return (
            <BotCard>
              <MarketingPromotionsDisplay />
            </BotCard>
          );
        },
      },

      staffing_insights: {
        description:
          "Displays historical staffing data and provides insights into long-term staffing trends. Only use this when the user asks for staffing data over a long period, or historical staffing requests.",
        parameters: z.object({}).required(),
        generate: async function* () {
          yield (
            <BotCard>
              <StaffingSpinner />
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
                    toolName: "staffing_insights",
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
                    toolName: "staffing_insights",
                    toolCallId,
                    result: null,
                  },
                ],
              },
            ],
          });
      
          return (
            <BotCard>
              <HistoricalStaffingDisplay />
            </BotCard>
          );
        },
      },
      
      
      expense_breakdown: {
        description:
          "Breaks down all expenses and allows for adjusting individual expenses to see how they affect the overall business. Call this when the user wants to play out a scenerio like what if i fired 10 people or what if i stoped spending money on marketing",
        parameters: z.object({}).required(),
        generate: async function* () {
          yield (
            <BotCard>
              <ExpenseBreakdownSpinner />
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
                    toolName: "expense_breakdown",
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
                    toolName: "expense_breakdown",
                    toolCallId,
                    result: null,
                  },
                ],
              },
            ],
          });

          return (
            <BotCard>
              <ExpenseBreakdownDisplay />
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
              case "expense_breakdown":
                return (
                  <BotCard key={tool.toolCallId}>
                    <ExpenseBreakdownDisplay />
                  </BotCard>
                );
              case "marketing_promotions":
                return (
                  <BotCard key={tool.toolCallId}>
                    <MarketingPromotionsDisplay />
                  </BotCard>
                );
              case "general_operations": // Add this case
                return (
                  <BotCard key={tool.toolCallId}>
                    <GeneralOperations />
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