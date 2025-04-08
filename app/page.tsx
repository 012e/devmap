"use client"
import { TrendingDownIcon, TrendingUpIcon } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { toast } from "sonner";

function SectionCards() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <Card className="@container/card">
        <CardHeader className="relative">
          <CardDescription>Total Revenue</CardDescription>
          <CardTitle className="@[250px]/card:text-3xl text-2xl font-semibold tabular-nums">
            $1,250.00
          </CardTitle>
          <div className="absolute top-4 right-4">
            <Badge variant="outline" className="flex gap-1 text-xs rounded-lg">
              <TrendingUpIcon className="size-3" />
              +12.5%
            </Badge>
          </div>
        </CardHeader>
        <CardFooter className="flex-col gap-1 items-start text-sm">
          <div className="flex gap-2 font-medium line-clamp-1">
            Trending up this month <TrendingUpIcon className="size-4" />
          </div>
          <div className="text-muted-foreground">
            Visitors for the last 6 months
          </div>
        </CardFooter>
      </Card>
      <Card className="@container/card">
        <CardHeader className="relative">
          <CardDescription>New Customers</CardDescription>
          <CardTitle className="@[250px]/card:text-3xl text-2xl font-semibold tabular-nums">
            1,234
          </CardTitle>
          <div className="absolute top-4 right-4">
            <Badge variant="outline" className="flex gap-1 text-xs rounded-lg">
              <TrendingDownIcon className="size-3" />
              -20%
            </Badge>
          </div>
        </CardHeader>
        <CardFooter className="flex-col gap-1 items-start text-sm">
          <div className="flex gap-2 font-medium line-clamp-1">
            Down 20% this period <TrendingDownIcon className="size-4" />
          </div>
          <div className="text-muted-foreground">
            Acquisition needs attention
          </div>
        </CardFooter>
      </Card>
      <Card className="@container/card">
        <CardHeader className="relative">
          <CardDescription>Active Accounts</CardDescription>
          <CardTitle className="@[250px]/card:text-3xl text-2xl font-semibold tabular-nums">
            45,678
          </CardTitle>
          <div className="absolute top-4 right-4">
            <Badge variant="outline" className="flex gap-1 text-xs rounded-lg">
              <TrendingUpIcon className="size-3" />
              +12.5%
            </Badge>
          </div>
        </CardHeader>
        <CardFooter className="flex-col gap-1 items-start text-sm">
          <div className="flex gap-2 font-medium line-clamp-1">
            Strong user retention <TrendingUpIcon className="size-4" />
          </div>
          <div className="text-muted-foreground">Engagement exceed targets</div>
        </CardFooter>
      </Card>
      <Card className="@container/card">
        <CardHeader className="relative">
          <CardDescription>Growth Rate</CardDescription>
          <CardTitle className="@[250px]/card:text-3xl text-2xl font-semibold tabular-nums">
            4.5%
          </CardTitle>
          <div className="absolute top-4 right-4">
            <Badge variant="outline" className="flex gap-1 text-xs rounded-lg">
              <TrendingUpIcon className="size-3" />
              +4.5%
            </Badge>
          </div>
        </CardHeader>
        <CardFooter className="flex-col gap-1 items-start text-sm">
          <div className="flex gap-2 font-medium line-clamp-1">
            Steady performance <TrendingUpIcon className="size-4" />
          </div>
          <div className="text-muted-foreground">Meets growth projections</div>
        </CardFooter>
      </Card>
    </div>
  );
}

export default function Pornhub() {
  function notify() {
    toast("Event has been created", {
      description: "Sunday, December 03, 2023 at 9:00 AM",
      action: {
        label: "Undo",
        onClick: () => console.log("Undo"),
      },
    });
  }
  return (
    <div>
      <div className="flex flex-col gap-10 justify-center items-center w-full h-full p-30">
        <div
          className="inline-flex items-center p-2 text-4xl font-bold bg-black rounded-lg cursor-pointer"
          onClick={notify}
        >
          <span className="py-1 px-2 text-white bg-black rounded">Porn</span>
          <span className="py-1 px-2 text-black bg-orange-400 rounded">
            hub
          </span>
        </div>
      </div>
      <div className="px-20">
        <SectionCards />
      </div>
    </div>
  );
}
