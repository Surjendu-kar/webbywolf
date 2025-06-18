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
    <section className="my-20 bg-[#FBFBFB] py-16">
      <div className="container mx-auto px-4">
        <h1 className="font-roboto-condensed text-3xl font-bold uppercase text-brand-text lg:text-5xl">
          Frequently Asked Questions (FAQs)
        </h1>
        <Accordion
          type="single"
          collapsible
          className="mt-28 w-full border-t border-gray-200"
        >
          {faqData.map((faq) => (
            <AccordionItem
              key={faq.value}
              value={faq.value}
              className="border-b border-gray-200 px-10 py-8"
            >
              <AccordionTrigger className="group flex w-full items-center justify-between py-0 text-left hover:no-underline [&>svg]:hidden">
                <span className="text-lg  text-brand-text">{faq.question}</span>
                <div className="relative flex h-5 w-5 shrink-0 cursor-pointer items-center justify-center">
                  <Plus className="absolute transition-all duration-200 group-data-[state=open]:opacity-0" />
                  <Minus className="absolute opacity-0 transition-all duration-200 group-data-[state=open]:opacity-100" />
                </div>
              </AccordionTrigger>
              <AccordionContent className="max-w-xl  pt-4 text-gray-600">
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
