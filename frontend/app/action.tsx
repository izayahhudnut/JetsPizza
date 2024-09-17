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

// Import new UI components
import SalesAnalysisDisplay from "@/components/SalesAnalysisDisplay";
import InventoryDisplay from "@/components/InventoryDisplay";
import StaffingForecastDisplay from "@/components/StaffingForecastDisplay";
import CostAnalysisDisplay from "@/components/CostAnalysisDisplay";
import GeneralOperationsDisplay from "@/components/GeneralOperationsDisplay";

// Import specific spinners
import { SalesDataSpinner } from "@/components/SalesDataSpinner";
import { InventorySpinner } from "@/components/InventorySpinner";
import StaffingSpinner from "@/components/StaffingSpinner";
import CostAnalysisSpinner from "@/components/CostAnalysisSpinner";
import GeneralOperationsSpinner from "@/components/GeneralOperationsSpinner";

// Type definitions
type SalesData = {
  currentWeekSales: number;
  lastYearSameWeekSales: number;
  weeklySalesRange: [number, number];
  annualSalesLastYear: number;
  factorsImpactingSales: string[];
  projectedSales: { [week: string]: number };
};

type InventoryData = {
  currentInventory: { [item: string]: number };
  projectedNeeds: { [item: string]: number };
  historicalComparison: { [item: string]: number };
};

// action.tsx
type StaffingData = {
    averageWeeklyHours: number;
    predictedIncreasePercentage: number;
    forecastForNextWeek: number;
    historicalHours: number[]; // Added this line
  };
  
  

type COGSData = {
  year1: number;
  year2: number;
  year3: number;
};

type GeneralOperationsData = {
  recommendations: string[];
};

// Data fetching functions (using improved dummy data)
async function fetchSalesData(): Promise<SalesData> {
  // Simulate API call
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return {
    currentWeekSales: 38764.92,
    lastYearSameWeekSales: 42342.76,
    weeklySalesRange: [25764.92, 45987.63],
    annualSalesLastYear: 152422.78,
    factorsImpactingSales: [
      "School session started 1 week earlier",
      "Current week temperature: 10 degrees hotter",
    ],
    projectedSales: {
      "Week 1": 40000,
      "Week 2": 41000,
      "Week 3": 42000,
      "Week 4": 43000,
      "Week 5": 44000,
      "Week 6": 45000,
      "Week 7": 46000,
      "Week 8": 47000,
    },
  };
}

async function fetchInventoryData(): Promise<InventoryData> {
  // Simulate API call
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return {
    currentInventory: {
      Tomato: 722,
      Flour: 3561.5,
      Cheese: 973.25,
      Pepperoni: 449.75,
      Dough: 2973,
      Sausage: 532,
      Chicken: 860.5,
      Onion: 455.5,
      Mushroom: 358,
      Oil: 108.25,
    },
    projectedNeeds: {
        Tomato: 622,
        Flour: 1561.5,
        Cheese: 1973.25,
        Pepperoni: 349.75,
        Dough: 2373,
        Sausage: 332,
        Chicken: 460.5,
        Onion: 155.5,
        Mushroom: 158,
        Oil: 98.25,
    },
    historicalComparison: {
      Cheese: 980.45,
      Dough: 2380.1,
      Tomato: 630.32,
    },
  };
}

async function fetchStaffingData(): Promise<StaffingData> {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
  
    return {
      averageWeeklyHours: 400.42,
      predictedIncreasePercentage: 15.5,
      forecastForNextWeek: 462.48,
      historicalHours: [380, 395, 410, 400, 405, 412], // Example data for the past 6 weeks
    };
  }
  

async function fetchCOGSData(): Promise<COGSData> {
  // Simulate API call
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return {
    year1: 28056.34,
    year2: 27234.87,
    year3: 26509.24,
  };
}

async function fetchGeneralOperationsData(): Promise<GeneralOperationsData> {
  // Simulate API call
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return {
    recommendations: [
      "Implement targeted promotions during peak hours.",
      "Optimize supplier contracts to reduce COGS.",
      "Adjust staffing schedules to align with predicted traffic.",
    ],
  };
}

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
    system: `You are a highly knowledgeable and efficient QSR Management Assistant with specific expertise in Jet's Pizza operations. Your role is to assist the General Manager in managing restaurant operations by providing insights and recommendations related to staffing, inventory, sales, promotions, cost analysis, and profitability. Always provide actionable advice based on the provided data, delivering precise numerical responses without rounding values. Use data points like $38,764.92 for sales and $152,422.78 for yearly totals when requested.

When exact data is unavailable, use logical estimates or averages from the provided ranges to deliver a plausible response. Do not indicate that the data is missing; instead, perform calculations or make assumptions as needed to provide a confident answer. Don't explain the calculations, just provide the final answer.

You are well-versed in Jet's Pizza, known for its Detroit-style deep-dish pizza and signature Turbo Crust. Jet's Pizza operates within a highly competitive pizza industry, with factors like franchise fees, economies of scale, labor costs, and real estate significantly impacting profit margins. The general gross margin for pizza restaurants ranges from 60% to 75%, and net profit margins typically range from 5% to 15%, with franchises like Jet's benefiting from bulk purchasing and brand loyalty.

Always ensure that your responses are based on exact figures when possible, but if exact data is not available, use reasonable estimates based on averages and provided ranges.

**Jet's Pizza Financial and Operational Data:**

- **Annual Sales (Last Year):** $152,422.78
- **Weekly Sales:** Ranges from $25,764.92 to $45,987.63 depending on promotions and events
- **Gross Margin (Pizza Industry Standard):** 60% to 75%
- **Net Profit Margin (Pizza Industry Standard):** 5% to 15%
- **Franchise Fees:** Typically 4% to 8% of gross sales

1. **Staffing Forecast:**
   - Average weekly hours (last 6 weeks): 400.42 hours
   - Predicted increase for next week: 15.5% due to promotions and events
   - Forecast for next week: 462.48 hours

2. **Sales Estimation and Inventory Management:**
   - **Sales Estimation:** Calculate based on the provided range of $25,764.92 to $45,987.63 per week. Use the average if no specific data is given.
   - Always provide a plausible sales figure without asking for additional input or stating that data is missing.

3. **Advanced Inventory Management (Jet's Pizza Specific):**
   - Inventory is tracked weekly and monthly with historical data for comparison.
   - Use the provided data to offer accurate inventory levels, projections, and ordering recommendations.

4. **Sales Comparison (Jet's Pizza):**
   - Last year’s sales during this period: $42,342.76/week
   - Current sales: $38,764.92/week
   - Key differences:
     - School session started 1 week earlier
     - Current week temperature: 10 degrees hotter

5. **COGS Pricing Chart (Last 3 Years):**
   - Year 1: Average COGS price: $28,056.34/month
   - Year 2: Average COGS price: $27,234.87/month
   - Year 3: Average COGS price: $26,509.24/month

**Behavior:**
- For sales questions, estimate based on provided ranges or trends.
- For inventory, refer to current levels or projections.
- Use historical data for comparisons.
- Provide legitimate responses based on data, making reasonable assumptions without stating data is missing.`,

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

          const salesData = await fetchSalesData();
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
                    result: salesData,
                  },
                ],
              },
            ],
          });

          return (
            <BotCard>
              <SalesAnalysisDisplay data={salesData} />
            </BotCard>
          );
        },
      },
      cost_analysis: {
        description: "Provides insights on COGS over the past few years.",
        parameters: z.object({}).required(),
        generate: async function* () {
          yield (
            <BotCard>
              <CostAnalysisSpinner />
            </BotCard>
          );

          const cogsData = await fetchCOGSData();
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
                    result: cogsData,
                  },
                ],
              },
            ],
          });

          return (
            <BotCard>
              <CostAnalysisDisplay data={cogsData} />
            </BotCard>
          );
        },
      },
      inventory_ordering: {
        description: "Recommends inventory ordering quantities based on data.",
        parameters: z.object({}).required(),
        generate: async function* () {
          yield (
            <BotCard>
              <InventorySpinner />
            </BotCard>
          );

          const inventoryData = await fetchInventoryData();
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
                    result: inventoryData,
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
      staffing_forecast: {
        description: "Forecasts staffing needs for upcoming weeks.",
        parameters: z.object({}).required(),
        generate: async function* () {
          yield (
            <BotCard>
              <StaffingSpinner />
            </BotCard>
          );

          const staffingData = await fetchStaffingData();
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
                    toolName: "staffing_forecast",
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
                    toolName: "staffing_forecast",
                    toolCallId,
                    result: staffingData,
                  },
                ],
              },
            ],
          });

          return (
            <BotCard>
              <StaffingForecastDisplay data={staffingData} />
            </BotCard>
          );
        },
      },
      general_operations: {
        description: "Provides general recommendations for operations.",
        parameters: z.object({}).required(),
        generate: async function* () {
          yield (
            <BotCard>
              <GeneralOperationsSpinner />
            </BotCard>
          );

          const operationsData = await fetchGeneralOperationsData();
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
                    result: operationsData,
                  },
                ],
              },
            ],
          });

          return (
            <BotCard>
              <GeneralOperationsDisplay data={operationsData} />
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
                    <SalesAnalysisDisplay data={tool.result} />
                  </BotCard>
                );
              case "cost_analysis":
                return (
                  <BotCard key={tool.toolCallId}>
                    <CostAnalysisDisplay data={tool.result} />
                  </BotCard>
                );
              case "inventory_ordering":
                return (
                  <BotCard key={tool.toolCallId}>
                    <InventoryDisplay data={tool.result} />
                  </BotCard>
                );
              case "staffing_forecast":
                return (
                  <BotCard key={tool.toolCallId}>
                    <StaffingForecastDisplay data={tool.result} />
                  </BotCard>
                );
              case "general_operations":
                return (
                  <BotCard key={tool.toolCallId}>
                    <GeneralOperationsDisplay data={tool.result} />
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
