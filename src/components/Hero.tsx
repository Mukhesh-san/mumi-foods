import React from 'react';
import FloatingButton from './common/FloatingButton';
import { ChefHat, Award, Clock } from 'lucide-react';
import AnimatedSection from './common/AnimatedSection';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-16 overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-forest-900/40 backdrop-blur-sm z-10"></div>
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source
            src="https://player.vimeo.com/external/492994419.sd.mp4?s=f53f56d83b9c4b8a2e3ff7a5e9c5f0b6b5d4a06f&profile_id=165&oauth2_token_id=57447761"
            type="video/mp4"
          />
        </video>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column */}
          <div className="space-y-8">
            <AnimatedSection className="backdrop-blur-md bg-white/95 rounded-3xl border border-forest-200/20 p-8 space-y-6 shadow-xl">
              <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-forest-800 to-forest-600 leading-tight">
                Authentic South Indian Cuisine
              </h1>
              <p className="text-xl text-forest-700 font-serif">
                Experience the rich flavors of traditional South Indian dishes, 
                from premium catering services to personalized meal plans.
              </p>
              <div className="flex flex-wrap gap-4">
                <FloatingButton variant="forest" href="#menu">
                  View Menu
                </FloatingButton>
                <FloatingButton variant="outline" href="#contact">
                  Book Catering
                </FloatingButton>
              </div>
            </AnimatedSection>

            {/* Features Grid */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { icon: <ChefHat className="h-6 w-6" />, text: "Traditional Recipes", delay: 200 },
                { icon: <Award className="h-6 w-6" />, text: "Authentic Taste", delay: 400 },
                { icon: <Clock className="h-6 w-6" />, text: "Fresh & Hot", delay: 600 }
              ].map((feature, index) => (
                <AnimatedSection 
                  key={index} 
                  delay={feature.delay}
                  className="backdrop-blur-md bg-white/95 rounded-2xl border border-forest-200/20 p-4 text-center shadow-lg"
                >
                  <div className="text-forest-700 mb-2 flex justify-center">
                    {feature.icon}
                  </div>
                  <p className="text-forest-600 text-sm font-medium font-serif">
                    {feature.text}
                  </p>
                </AnimatedSection>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <AnimatedSection delay={400} className="relative">
            <div className="absolute inset-0 backdrop-blur-sm rounded-3xl"></div>
            <img 
              src="https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=1200&q=80" 
              alt="Traditional South Indian Thali" 
              className="rounded-3xl shadow-xl relative z-10 w-full h-full object-cover"
            />
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}