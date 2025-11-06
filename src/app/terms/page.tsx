import React from "react";

const TermsOfService = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-2">
          TERMS AND CONDITIONS
        </h1>
        <p className="text-sm text-gray-500 mb-8">Last updated May 24, 2024</p>
        
        <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-800 border-b pb-2">
                1. AGREEMENT TO OUR LEGAL TERMS
            </h2>
            <p className="mb-4 text-gray-700">
                We are Company Name ("Company," "we," "us," "our"). These Legal Terms constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you"), and Company Name, concerning your access to and use of the Services. You agree that by accessing the Services, you have read, understood, and agreed to be bound by all of these Legal Terms. IF YOU DO NOT AGREE WITH ALL OF THESE LEGAL TERMS, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE SERVICES AND YOU MUST DISCONTINUE USE IMMEDIATELY.
            </p>
        </section>

        <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-800 border-b pb-2">
                2. OUR SERVICES
            </h2>
            <p className="mb-4 text-gray-700">
                The information provided when using the Services is not intended for distribution to or use by any person or entity in any jurisdiction or country where such distribution or use would be contrary to law or regulation or which would subject us to any registration requirement within such jurisdiction or country. Accordingly, those persons who choose to access the Services from other locations do so on their own initiative and are solely responsible for compliance with local laws, if and to the extent local laws are applicable.
            </p>
        </section>

        <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-800 border-b pb-2">
                3. INTELLECTUAL PROPERTY RIGHTS
            </h2>
            <p className="mb-4 text-gray-700">
                We are the owner or the licensee of all intellectual property rights in our Services, including all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics in the Services (collectively, the "Content"), as well as the trademarks, service marks, and logos contained therein (the "Marks").
            </p>
        </section>

        <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-800 border-b pb-2">
                4. USER REPRESENTATIONS
            </h2>
            <p className="mb-4 text-gray-700">
                By using the Services, you represent and warrant that: (1) you have the legal capacity and you agree to comply with these Legal Terms; (2) you are not a minor in the jurisdiction in which you reside; (3) you will not access the Services through automated or non-human means, whether through a bot, script or otherwise; (4) you will not use the Services for any illegal or unauthorized purpose; and (5) your use of the Services will not violate any applicable law or regulation.
            </p>
        </section>

        <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-800 border-b pb-2">
                5. PROHIBITED ACTIVITIES
            </h2>
            <p className="mb-4 text-gray-700">
                You may not access or use the Services for any purpose other than that for which we make the Services available. The Services may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.
            </p>
        </section>

        <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-800 border-b pb-2">
                6. TERM AND TERMINATION
            </h2>
            <p className="mb-4 text-gray-700">
                These Legal Terms shall remain in full force and effect while you use the Services. WITHOUT LIMITING ANY OTHER PROVISION OF THESE LEGAL TERMS, WE RESERVE THE RIGHT TO, IN OUR SOLE DISCRETION AND WITHOUT NOTICE OR LIABILITY, DENY ACCESS TO AND USE OF THE SERVICES (INCLUDING BLOCKING CERTAIN IP ADDRESSES), TO ANY PERSON FOR ANY REASON OR FOR NO REASON.
            </p>
        </section>

        <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-800 border-b pb-2">
                7. MODIFICATIONS AND INTERRUPTIONS
            </h2>
            <p className="mb-4 text-gray-700">
                We reserve the right to change, modify, or remove the contents of the Services at any time or for any reason at our sole discretion without notice. However, we have no obligation to update any information on our Services. We will not be liable to you or any third party for any modification, price change, suspension, or discontinuance of the Services.
            </p>
        </section>

        <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-800 border-b pb-2">
                8. GOVERNING LAW
            </h2>
            <p className="mb-4 text-gray-700">
                These Legal Terms shall be governed by and defined following the laws of the country. Company Name and yourself irrevocably consent that the courts of the country shall have exclusive jurisdiction to resolve any dispute which may arise in connection with these Legal Terms.
            </p>
        </section>

        <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-800 border-b pb-2">
                9. CONTACT US
            </h2>
            <p className="mb-4 text-gray-700">
                In order to resolve a complaint regarding the Services or to receive further information regarding use of the Services, please contact us at:
            </p>
            <p className="mb-4 text-gray-700">
                 Micro Statik LLC
                {/* <br />
                Street Address
                <br />
                City, State, Zip */}
                <br />
                Country
            </p>
        </section>
      </div>
    </div>
  );
};

export default TermsOfService;
