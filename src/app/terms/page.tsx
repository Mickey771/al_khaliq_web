import React from "react";

const TermsOfService = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Terms of Service</h1>
      <p className="mb-4">
        These are the terms of service for our application. By using our
        application, you agree to these terms.
      </p>
      <h2 className="text-2xl font-bold mb-2">Your Account</h2>
      <p className="mb-4">
        You are responsible for maintaining the confidentiality of your account
        and password.
      </p>
      <h2 className="text-2xl font-bold mb-2">Prohibited Activities</h2>
      <p className="mb-4">
        You may not use our application for any illegal or unauthorized purpose.
      </p>
      <h2 className="text-2xl font-bold mb-2">Changes to These Terms</h2>
      <p className="mb-4">
        We may update these terms of service from time to time. We will notify
        you of any changes by posting the new terms of service on this page.
      </p>
    </div>
  );
};

export default TermsOfService;
