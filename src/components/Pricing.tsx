import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, Star } from "lucide-react";

const plans = [
  {
    name: "Basic Redesign",
    price: "$100",
    description: "Perfect for small businesses",
    pages: "Up to 5 pages",
    popular: false,
    features: [
      "Modern, responsive design",
      "Mobile optimization",
      "Basic SEO setup",
      "Contact form integration",
      "2 rounds of revisions",
      "1 month support",
    ],
  },
  {
    name: "Standard Redesign",
    price: "$250",
    description: "Most popular choice",
    pages: "Up to 10 pages",
    popular: true,
    features: [
      "Everything in Basic",
      "Advanced animations",
      "Blog/News section",
      "Social media integration",
      "Analytics setup",
      "Speed optimization",
      "5 rounds of revisions",
      "3 months support",
    ],
  },
  {
    name: "Premium Redesign",
    price: "$400",
    description: "For growing businesses",
    pages: "15+ pages + custom features",
    popular: false,
    features: [
      "Everything in Standard",
      "E-commerce functionality",
      "Custom integrations",
      "Advanced SEO package",
      "Performance monitoring",
      "Priority support",
      "Unlimited revisions",
      "6 months support",
    ],
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />
      
      <div className="container-narrow mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            Pricing
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Simple, <span className="gradient-text">Transparent Pricing</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the plan that fits your needs. All plans include our quality guarantee.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative ${plan.popular ? "md:-mt-4 md:mb-4" : ""}`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <div className="flex items-center gap-1 px-4 py-1.5 rounded-full gradient-bg text-sm font-medium text-primary-foreground">
                    <Star className="w-4 h-4" />
                    Most Popular
                  </div>
                </div>
              )}

              <div
                className={`glass-card p-6 md:p-8 h-full flex flex-col ${
                  plan.popular
                    ? "border-primary/50 shadow-lg shadow-primary/10"
                    : ""
                }`}
              >
                {/* Plan Info */}
                <div className="mb-6">
                  <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {plan.description}
                  </p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold">{plan.price}</span>
                  </div>
                  <p className="text-sm text-primary mt-2">{plan.pages}</p>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8 flex-grow">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-success shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button
                  variant={plan.popular ? "gradient" : "outline"}
                  className="w-full"
                >
                  Start My Redesign
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
