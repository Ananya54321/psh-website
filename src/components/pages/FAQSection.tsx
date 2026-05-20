import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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

  return (
    <section className="py-12 md:py-20 px-4 sm:px-6 bg-gray-50 scroll-mt-20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
            <span className="hospital-blue">Frequently Asked</span>{" "}
            <span className="hospital-green">Questions</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600">
            Find answers to common questions about our services and facilities.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-white rounded-lg border border-gray-200 px-6"
            >
              <AccordionTrigger className="text-left font-semibold text-hospital-blue hover:text-hospital-green transition-colors">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
