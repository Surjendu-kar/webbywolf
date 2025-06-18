import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

interface TabData {
  id: string;
  label: string;
  content: string;
}

const ProcessSection = () => {
  const [activeTab, setActiveTab] = useState<string>("research");

  const tabs: TabData[] = [
    {
      id: "research",
      label: "Research",
      content:
        "Egestas fringilla aliquam leo, habitasse arcu varius lorem elit. Neque pellentesque donec et tellus ac varius tortor, bibendum. Nulla felis ac turpis at amet.",
    },
    {
      id: "plan",
      label: "Plan",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    },
    {
      id: "design",
      label: "Design",
      content:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
    },
  ];

  return (
    <section className="container mx-auto my-20 flex flex-col gap-8 px-4 lg:flex-row lg:items-center lg:gap-16">
      {/* Left Content */}
      <div className="flex-1 space-y-6 lg:space-y-8">
        <h1 className="font-roboto-condensed text-3xl font-bold text-brand-text sm:text-4xl lg:text-5xl">
          LOREM IPSUM DOLOR SIT AMET
        </h1>

        {/* Tabs Navigation */}
        <div className="flex h-12 w-full lg:w-[600px]">
          {tabs.map((tab, index) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "flex h-full flex-1 items-center justify-center border border-gray-200 text-center text-sm font-medium transition-colors",
                index === 0 ? "rounded-l-sm" : "-ml-[1px]",
                index === tabs.length - 1 ? "rounded-r-sm" : "",
                activeTab === tab.id
                  ? "relative z-10 bg-[#F8F8F8] text-brand-text"
                  : "text-gray-600 hover:bg-gray-100"
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="">
          {tabs.map((tab) => (
            <div
              key={tab.id}
              className={cn(
                "transition-opacity duration-200",
                activeTab === tab.id ? "block opacity-100" : "hidden opacity-0"
              )}
            >
              <p className="text-lg leading-relaxed text-gray-700">
                {tab.content}
              </p>
            </div>
          ))}
          <Button
            variant="ghost"
            className="mt-6 cursor-pointer p-0 text-brand-primary transition-all duration-300 hover:-translate-y-0.5 hover:bg-transparent hover:text-brand-secondary"
          >
            Check tools
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Right Content - Image */}
      <div className="relative flex-1">
        <div className="relative h-[300px] w-full lg:h-[400px]">
          <Image
            src="/process/handshake.webp"
            alt="Business handshake"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
