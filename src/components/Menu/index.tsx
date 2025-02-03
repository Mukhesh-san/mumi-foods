import React from 'react';
import CateringMenu from './CateringMenu';
import PricingCard from './PricingCard';
import ArabianMenu from './ArabianMenu';
import AnimatedSection from '../common/AnimatedSection';

const normalPricing = {
  breakfast: { monthly: 3250, weekly: 900 },
  lunch: { monthly: 3600, weekly: 1050 }
};

const dietPricing = {
  breakfast: { monthly: 3500, weekly: 1150 },
  lunch: { monthly: 3800, weekly: 1250 }
};

export default function Menu() {
  return (
    <section id="menu" className="py-16 relative">
      <div className="container mx-auto px-4">
        <div className="space-y-16">
          {/* Weekly Menu Section */}
          <div>
            <AnimatedSection className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-forest-800 to-forest-600">
                Weekly Catering Menu
              </h2>
              <p className="text-forest-600 font-serif max-w-2xl mx-auto">
                Our carefully crafted weekly menu offers a perfect blend of traditional and modern dishes, 
                ensuring variety and nutrition in every meal.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <CateringMenu />
            </AnimatedSection>
          </div>

          {/* Pricing Section */}
          <div>
            <AnimatedSection className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-forest-800 to-forest-600">
                Subscription Plans
              </h2>
              <p className="text-forest-600 font-serif max-w-2xl mx-auto">
                Choose from our flexible subscription plans for regular meal delivery.
              </p>
            </AnimatedSection>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Normal Breakfast", pricing: normalPricing.breakfast, type: "normal", delay: 200 },
                { title: "Normal Lunch", pricing: normalPricing.lunch, type: "normal", delay: 400 },
                { title: "Diet Breakfast", pricing: dietPricing.breakfast, type: "diet", delay: 600 },
                { title: "Diet Lunch", pricing: dietPricing.lunch, type: "diet", delay: 800 }
              ].map((plan) => (
                <AnimatedSection key={plan.title} delay={plan.delay}>
                  <PricingCard {...plan} />
                </AnimatedSection>
              ))}
            </div>
          </div>

          {/* Arabian Menu Section */}
          <AnimatedSection delay={400}>
            <ArabianMenu />
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}