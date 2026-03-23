import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../ui/Accordian";
import {
  HelpCircle,
  Users,
  CreditCard,
  Shield,
  BookOpen,
  Headphones,
} from "lucide-react";

const faqData = [
  {
    question: "What is the best time to trek in Uttarakhand?",
    answer:
      "The ideal seasons are April–June (spring/summer) and September–November (autumn). Winter treks like Kedarkantha are great in December–February for snowy experiences.",
  },
  {
    question: "Which are the most popular treks in Uttarakhand?",
    answer:
      "Kedarkantha, Valley of Flowers, Har Ki Dun, Roopkund, Kuari Pass, Nag Tibba, Brahmatal, Panch Kedar, and Satopanth Lake are among the top treks.",
  },
  {
    question: "Do I need prior experience to trek in Uttarakhand?",
    answer:
      "Many treks (like Kedarkantha, Nag Tibba, Valley of Flowers) are beginner-friendly. Challenging treks (such as Roopkund or Kalindi Khal) require prior trekking experience.",
  },
  {
    question: "What is the average duration and altitude of Uttarakhand treks?",
    answer:
      "Treks range from 2 to 8 days; altitudes vary from 2,000m (Nag Tibba) to 5,000m (Roopkund, Satopanth Lake). Allow time to acclimatize, especially over 3,000m.",
  },
  {
    question: "What permits or registrations are required?",
    answer:
      "Permits are required for National Parks (e.g., Valley of Flowers). Foreign nationals may need extra registrations. Always check latest requirements with your operator.",
  },
  {
    question: "What should I pack for a Uttarakhand trek?",
    answer:
      "Layered clothing, rain jacket, trekking shoes, backpack, headlamp, water bottle, medicines, and ID proof. High-altitude/longer treks need extra gear like sleeping bags and trekking poles.",
  },
  {
    question: "Is it safe to trek solo in Uttarakhand?",
    answer:
      "Most trails are safe with precautions, but trekking in groups or with a registered operator is recommended due to unpredictable weather, wildlife, and trail navigation.",
  },
];

export default function FAQ() {
  return (
    <div className="w-full max-w-7xl mx-auto font-second px-3 py-10 ">
      {/* Header Section */}
      <div className="text-center mb-12">

        <p className="text-xs tracking-[0.2em] text-black mb-4">
          FAQ
        </p>
        <h1 className="md:text-[48px] text-xl font-main mb-4 font-bold text-gray-900">
          Frequently Asked Questions
        </h1>
      </div>

      {/* FAQ Accordion */}
      <div className="bg-white rounded-2xl  font-second border border-gray-100 overflow-hidden">
        <Accordion type="single" collapsible className="w-full">
          {faqData.map((faq, index) => (
            <AccordionItem
              key={faq.question}
              value={faq.question}
              className={`${index !== faqData.length - 1 ? "border-b border-gray-100" : ""
                }`}
            >
              <AccordionTrigger className="flex items-center gap-4 px-6 py-5 cursor-pointer hover:bg-gray-50 transition-colors duration-200 text-left [&[data-state=open]]:bg-blue-50">
                <div className="flex items-center gap-4 flex-1">
                  <span className="font-semibold text-gray-900 text-sm sm:text-base">
                    {faq.question}
                  </span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-2 pt-2">
                <div className=" pr-4">
                  <p className="text-gray-900  leading-relaxed text-sm sm:text-base">
                    {faq.answer}
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
