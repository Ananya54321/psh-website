"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";

export function FAQSection() {
  const faqs = [
    {
      question: "What are your visiting hours?",
      answer:
        "Our general visiting hours are from 10:00 AM to 8:00 PM. ICU visiting hours are from 11:00 AM to 1:00 PM and 5:00 PM to 7:00 PM.",
    },
    {
      question: "Do you accept insurance?",
      answer: (
        <span>
          Yes, we accept most major insurance plans. You can view our list of
          accepted insurances on our{" "}
          <a
            href="/insurance"
            className="text-hospital-blue hover:underline font-semibold"
          >
            Insurance Partners page
          </a>
          .
        </span>
      ),
    },
    {
      question: "How can I book an appointment?",
      answer:
        "You can book an appointment by calling our helpline (+91 8801719855), or visiting the hospital reception.",
    },
    {
      question: "What emergency services do you provide?",
      answer:
        "We provide 24/7 emergency services including trauma care, cardiac emergencies, stroke care, and critical care.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 bg-gray-50 scroll-mt-20">
      <div className="max-w-3xl mx-auto">
        <ScrollReveal className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
            <span className="hospital-blue">Frequently Asked</span>{" "}
            <span className="hospital-green">QUESTIONS</span>
          </h2>
          <p className="text-base md:text-lg text-gray-500 dark:text-gray-400">
            Find answers to common questions about our services and facilities.
          </p>
        </ScrollReveal>

        <StaggerContainer className="w-full flex flex-col gap-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <StaggerItem key={faq.question}>
              <motion.div
                layout
                className={cn(
                  "w-full rounded-2xl transition-all duration-300 border border-transparent bg-white",
                  isOpen ? " p-6 shadow-xs" : " p-4 shadow-xs px-6"
                )}
              >
                <div className="flex items-start gap-4 text-left w-full">
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="mt-0.5 flex-shrink-0 focus:outline-none cursor-pointer transition-transform duration-200 hover:scale-110"
                    style={{ color: "var(--hospital-blue)" }}
                    aria-expanded={isOpen}
                  >
                    {isOpen ? (
                      // Circle Minus SVG
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <line x1="8" y1="12" x2="16" y2="12" />
                      </svg>
                    ) : (
                      // Circle Plus SVG
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <line x1="12" y1="8" x2="12" y2="16" />
                        <line x1="8" y1="12" x2="16" y2="12" />
                      </svg>
                    )}
                  </button>
                  <div className="flex-1 text-left">
                    <button
                      type="button"
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      className="w-full text-left font-semibold text-gray-900 dark:text-white text-sm md:text-base cursor-pointer focus:outline-none"
                    >
                      {faq.question}
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0, marginTop: 0 }}
                          animate={{ height: "auto", opacity: 1, marginTop: 8 }}
                          exit={{ height: 0, opacity: 0, marginTop: 0 }}
                          transition={{ duration: 0.25, ease: "easeInOut" }}
                          className="overflow-hidden text-gray-500 dark:text-gray-400 text-sm md:text-base leading-relaxed"
                        >
                          {faq.answer}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </motion.div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
