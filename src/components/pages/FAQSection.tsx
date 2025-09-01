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
      answer: "Our general visiting hours are from 10:00 AM to 8:00 PM. ICU visiting hours are from 11:00 AM to 1:00 PM and 5:00 PM to 7:00 PM."
    },
    {
      question: "Do you accept insurance?",
      answer: "Yes, we accept most major insurance plans. Please contact our billing department for specific insurance verification."
    },
    {
      question: "How can I book an appointment?",
      answer: "You can book an appointment by calling our helpline, using our online portal, or visiting the hospital reception."
    },
    {
      question: "What emergency services do you provide?",
      answer: "We provide 24/7 emergency services including trauma care, cardiac emergencies, stroke care, and critical care."
    },
    {
      question: "Do you have parking facilities?",
      answer: "Yes, we have ample parking space available for patients and visitors free of charge."
    }
  ];

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="hospital-blue">Frequently Asked</span>{" "}
            <span className="hospital-green">Questions</span>
          </h2>
          <p className="text-xl text-gray-600">
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
