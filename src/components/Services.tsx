import React from 'react';
import { ChefHat, Calendar, ShoppingBag } from 'lucide-react';

const services = [
  {
    icon: <ChefHat className="h-8 w-8" />,
    title: "Premium Catering",
    description: "Elevate your events with our professional catering services. Custom menus tailored to your needs.",
    price: "Starting from $35/person",
    features: ["Custom menu planning", "Professional staff", "Full setup & cleanup", "Premium tableware"]
  },
  {
    icon: <Calendar className="h-8 w-8" />,
    title: "Weekly Meal Plans",
    description: "Nutritious and delicious meals delivered to your doorstep. 3 meals a day, 7 days a week.",
    price: "$249/week",
    features: ["21 meals per week", "Customizable menu", "Dietary options", "Fresh ingredients"]
  },
  {
    icon: <ShoppingBag className="h-8 w-8" />,
    title: "Gourmet Products",
    description: "Shop our selection of premium ingredients and ready-to-heat meals.",
    price: "Products from $12",
    features: ["Artisanal products", "Ready-made meals", "Specialty ingredients", "Gift packages"]
  }
];

export default function Services() {
  return (
    <section id="services" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-primary-600 mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <p className="text-lg font-semibold text-primary-600 mb-4">{service.price}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="text-gray-600 flex items-center">
                    <span className="w-2 h-2 bg-primary-600 rounded-full mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="w-full mt-6 bg-primary-600 text-white py-2 rounded-full hover:bg-primary-700">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}