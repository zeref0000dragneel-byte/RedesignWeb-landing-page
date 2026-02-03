import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How long does a redesign take?",
    answer:
      "Most redesign projects take 2-4 weeks depending on the scope. Basic redesigns typically complete in 2 weeks, Standard in 3 weeks, and Premium projects in 4 weeks. We'll provide a specific timeline during our initial consultation.",
  },
  {
    question: "Will my SEO rankings be affected?",
    answer:
      "We take great care to preserve and improve your SEO during the redesign. We implement proper 301 redirects, maintain your URL structure where possible, and optimize all new pages for search engines. Most clients see improved rankings after their redesign.",
  },
  {
    question: "Can I keep my current content?",
    answer:
      "Absolutely! We can migrate all your existing content to the new design. We'll also help you identify content that could be improved or updated during the redesign process to maximize the impact of your new website.",
  },
  {
    question: "Do you provide ongoing support?",
    answer:
      "Yes, all our plans include post-launch support. Basic includes 1 month, Standard includes 3 months, and Premium includes 6 months of support. We also offer extended maintenance packages for clients who need ongoing assistance.",
  },
  {
    question: "What if I'm not satisfied with the design?",
    answer:
      "Your satisfaction is our priority. We include multiple revision rounds in every package (2-unlimited depending on your plan). We work closely with you throughout the design process to ensure the final result exceeds your expectations.",
  },
  {
    question: "What technologies do you use?",
    answer:
      "We use modern, proven technologies including React, Next.js, and Tailwind CSS for the frontend. For content management, we work with headless CMS solutions like Sanity, Strapi, or WordPress depending on your needs. All our sites are optimized for speed and security.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="section-padding">
      <div className="container-narrow mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-medium text-primary uppercase tracking-wider">
              FAQ
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
              Frequently Asked{" "}
              <span className="gradient-text">Questions</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Got questions? We've got answers. If you don't find what you're
              looking for, feel free to reach out to us directly.
            </p>
            <div className="glass-card p-6 inline-block">
              <p className="text-sm text-muted-foreground mb-2">
                Still have questions?
              </p>
              <a
                href="#contact"
                className="text-primary font-medium hover:underline"
              >
                Contact us →
              </a>
            </div>
          </motion.div>

          {/* Right Content - Accordion */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="glass-card px-6 border-none"
                >
                  <AccordionTrigger className="text-left hover:no-underline py-4">
                    <span className="font-semibold text-sm md:text-base">
                      {faq.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-sm pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
