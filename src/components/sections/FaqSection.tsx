"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Minus, Plus } from "lucide-react";

const faqData = [
  {
    value: "item-1",
    question: "Lorem ipsum dolor sit amet consectetur?",
    answer:
      "Lorem ipsum dolor sit amet consectetur. Vulputate amet aliquet morbi suspendisse convallis. Urna a urna lectus donec felis risus duis pellentesque. Pellentesque ultricies ipsum.",
  },
  {
    value: "item-2",
    question: "Lorem ipsum dolor sit amet consectetur?",
    answer:
      "Lorem ipsum dolor sit amet consectetur. Vulputate amet aliquet morbi suspendisse convallis. Urna a urna lectus donec felis risus duis pellentesque. Pellentesque ultricies ipsum.",
  },
  {
    value: "item-3",
    question: "Lorem ipsum dolor sit amet consectetur?",
    answer:
      "Lorem ipsum dolor sit amet consectetur. Vulputate amet aliquet morbi suspendisse convallis. Urna a urna lectus donec felis risus duis pellentesque. Pellentesque ultricies ipsum.",
  },
  {
    value: "item-4",
    question: "Lorem ipsum dolor sit amet consectetur?",
    answer:
      "Lorem ipsum dolor sit amet consectetur. Vulputate amet aliquet morbi suspendisse convallis. Urna a urna lectus donec felis risus duis pellentesque. Pellentesque ultricies ipsum.",
  },
  {
    value: "item-5",
    question: "Lorem ipsum dolor sit amet consectetur?",
    answer:
      "Lorem ipsum dolor sit amet consectetur. Vulputate amet aliquet morbi suspendisse convallis. Urna a urna lectus donec felis risus duis pellentesque. Pellentesque ultricies ipsum.",
  },
];

const FaqSection = () => {
  return (
    <section className="my-10 bg-[#FBFBFB] py-10 lg:my-20 lg:py-16">
      <div className="container mx-auto px-4">
        <h1 className="font-roboto-condensed text-3xl font-bold uppercase text-brand-text lg:text-5xl">
          Frequently Asked Questions (FAQs)
        </h1>
        <Accordion
          type="single"
          collapsible
          className="mt-10 w-full border-t border-gray-200 lg:mt-28"
        >
          {faqData.map((faq) => (
            <AccordionItem
              key={faq.value}
              value={faq.value}
              className="border-b border-gray-200 px-2 py-4 lg:px-10 lg:py-8"
            >
              <AccordionTrigger className="group flex w-full items-center justify-between py-0 text-left hover:no-underline [&>svg]:hidden">
                <span className="text-base text-brand-text lg:text-lg">
                  {faq.question}
                </span>
                <div className="relative flex  shrink-0 cursor-pointer items-center justify-center ">
                  <Plus className="absolute h-4 w-4 transition-all duration-200 group-data-[state=open]:opacity-0 lg:h-5 lg:w-5" />
                  <Minus className="absolute h-4 w-4 opacity-0 transition-all duration-200 group-data-[state=open]:opacity-100 lg:h-5 lg:w-5" />
                </div>
              </AccordionTrigger>
              <AccordionContent className="lg:text-md max-w-xl  pt-4 text-sm text-gray-600">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FaqSection;
