import React, { FormEvent } from 'react';
import { Phone, Mail, MapPin, Instagram, Facebook } from 'lucide-react';
import FloatingButton from './common/FloatingButton';

export default function Contact() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const subject = encodeURIComponent('Contact Form Submission');
    const body = encodeURIComponent(`
Name: ${formData.get('name')}
Email: ${formData.get('email')}
Message: ${formData.get('message')}
    `);
    window.location.href = `mailto:komalathangavelu1980@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-16 relative">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-forest-800 to-forest-600">
              Get in Touch
            </h2>
            <div className="space-y-4 font-serif backdrop-blur-md bg-white/95 rounded-2xl border border-forest-200/20 p-8 shadow-lg">
              <div className="flex items-center space-x-3">
                <Phone className="text-forest-600" />
                <span className="text-forest-700">+91 9994908899</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="text-forest-600" />
                <a
                  href="mailto:komalathangavelu1980@gmail.com"
                  className="text-forest-700 hover:text-forest-800"
                >
                  komalathangavelu1980@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="text-forest-600" />
                <span className="text-forest-700">No 6 SRV Nagar Main Street, Madurai</span>
              </div>
              <div className="pt-4">
                <h3 className="text-xl font-bold mb-4 text-forest-800">Follow Us</h3>
                <div className="flex space-x-4">
                  <a
                    href="https://www.instagram.com/mumi.catering?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                    className="text-forest-600 hover:text-forest-700 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Instagram />
                  </a>
                  <a
                    href="https://www.facebook.com/share/Qu9VjZWTLukCm9Db/"
                    className="text-forest-600 hover:text-forest-700 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Facebook />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div>
            <form onSubmit={handleSubmit} className="backdrop-blur-md bg-white/95 rounded-2xl border border-forest-200/20 p-8 shadow-lg space-y-4">
              <div>
                <label className="block text-sm font-medium text-forest-700 mb-1">Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full rounded-full border-forest-200 focus:border-forest-500 focus:ring focus:ring-forest-200 focus:ring-opacity-50"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-forest-700 mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full rounded-full border-forest-200 focus:border-forest-500 focus:ring focus:ring-forest-200 focus:ring-opacity-50"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-forest-700 mb-1">Message</label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  className="w-full rounded-2xl border-forest-200 focus:border-forest-500 focus:ring focus:ring-forest-200 focus:ring-opacity-50"
                ></textarea>
              </div>
              <FloatingButton type="submit" variant="forest" className="w-full">
                Send Message
              </FloatingButton>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}