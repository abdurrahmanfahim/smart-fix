import {
  Area,
  AreaChart,
  CartesianGrid,
  ReferenceLine,
  XAxis,
  YAxis,
} from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

import chartData from "./graphData";
import DropdownButton from "../Dropdown";
import { useState } from "react";

const chartConfig = {
  value: {
    color: "#3b82f6",
  },
};

const dropdownData = ["This Week", "This Month", "This Year"];

const Graph = () => {
  const [current, setCurrent] = useState("This Week");

  return (
    <section>
      <Card
        className={
          "min-w-full max-h-106.5 bg-[#0F172B50] border border-[#2B7FFF20] gap-2 sm:gap-6 py-4 sm:py-6 "
        }
      >
        <CardHeader className={"px-4 sm:px-6"}>
          <div className="flex justify-between ">
            <div>
              <CardTitle
                className={"mb-1 font-inter sm:leading-7  sm:text-xl "}
              >
                Call Trends - {current}
              </CardTitle>
              <CardDescription>Total: 472 calls</CardDescription>
            </div>
            <div>
              <DropdownButton
                setCurrent={setCurrent}
                className={"px-1"}
                items={dropdownData}
              />
            </div>
          </div>
        </CardHeader>

        <CardContent className={"min-w-full max-h-75 p-2 sm:p-6 "}>
          <ChartContainer
            className={"min-w-full max-h-75 "}
            config={chartConfig}
          >
            <AreaChart
              data={chartData}
              responsive
              margin={{ left: -20, right: 12 }}
            >
              <CartesianGrid strokeOpacity={0.2} strokeDasharray="4 4" />

              <XAxis
                dataKey="day"
                tickLine={true}
                tickMargin={8}
                tick={{ fill: "#fff", opacity: 1 }}
                axisLine={{ stroke: "#64748B" }}
              />

              <YAxis
                tickLine={true}
                tickMargin={8}
                tickCount={5}
                tick={{ fill: "#fff", opacity: 1 }}
                axisLine={{ stroke: "#64748B" }}
              />

              <ChartTooltip
                className="text-primary"
                cursor={false}
                content={<ChartTooltipContent />}
              />

              <defs>
                <linearGradient id="fillBlue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3b82f6" stopOpacity={1} />
                  <stop offset="95%" stopColor="#3b82f600" stopOpacity={1} />
                </linearGradient>
              </defs>

              <Area
                dataKey="value"
                type="natural"
                fill="url(#fillBlue)"
                stroke="#3b82f6"
                strokeWidth={2}
              />
            </AreaChart>
          </ChartContainer>
        </CardContent>
      </Card>
    </section>
  );
};

export default Graph;
