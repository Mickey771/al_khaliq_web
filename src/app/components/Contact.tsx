import React from 'react';
import ContactForm from './ContactForm';

const Contact = () => {
  return (
    <section className="relative py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
          Get in Touch
        </h2>
        
        <p className="text-xl text-purple-200 mb-12">
          Have questions or feedback? We'd love to hear from you.
        </p>
        
        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;
