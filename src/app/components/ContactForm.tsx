import React, { useState } from 'react';
import { User, Mail, MessageSquare } from 'lucide-react';

// Contact Form Component
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      setTimeout(() => setSubmitStatus(''), 3000);
    }, 2000);
  };

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-6">
      <div className="relative">
        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-400 w-5 h-5" />
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          required
          className="w-full pl-12 pr-4 py-3 bg-white/10 backdrop-blur-sm border border-purple-300/30 rounded-xl text-white placeholder-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-300"
        />
      </div>
      
      <div className="relative">
        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-400 w-5 h-5" />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          required
          className="w-full pl-12 pr-4 py-3 bg-white/10 backdrop-blur-sm border border-purple-300/30 rounded-xl text-white placeholder-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-300"
        />
      </div>
      
      <div className="relative">
        <MessageSquare className="absolute left-3 top-4 text-purple-400 w-5 h-5" />
        <select
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="w-full pl-12 pr-4 py-3 bg-white/10 backdrop-blur-sm border border-purple-300/30 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-300"
        >
          <option value="" className="bg-gray-800">Select Subject</option>
          <option value="support" className="bg-gray-800">Technical Support</option>
          <option value="feedback" className="bg-gray-800">Feedback</option>
          <option value="partnership" className="bg-gray-800">Partnership</option>
          <option value="delete" className="bg-gray-800">Delete Account</option>
          <option value="other" className="bg-gray-800">Other</option>
        </select>
      </div>
      
      <div className="relative">
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          rows={4}
          required
          className="w-full pl-4 pr-4 py-3 bg-white/10 backdrop-blur-sm border border-purple-300/30 rounded-xl text-white placeholder-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-300 resize-none"
        />
      </div>
      
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <div className="flex items-center justify-center gap-2">
            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
            Sending...
          </div>
        ) : (
          'Send Message'
        )}
      </button>
      
      {submitStatus === 'success' && (
        <div className="text-center text-green-300 bg-green-900/30 backdrop-blur-sm py-2 px-4 rounded-lg">
          Message sent successfully! We&apos;ll get back to you soon.
        </div>
      )}
    </form>
  );
};

export default ContactForm;