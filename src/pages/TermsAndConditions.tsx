const TermsAndConditions = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="relative h-[300px] mb-16">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="relative h-full max-w-7xl mx-auto px-4 flex items-center">
          <div className="text-white">
            <h1 className="text-4xl font-bold mb-4">Terms and Conditions</h1>
            <p className="text-xl max-w-2xl">
              Review the rules and guidelines for using our services.
            </p>
          </div>
        </div>
      </div>

      {/* Terms and Conditions Content Section */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="mb-4">
            Welcome to Colour-Tek! These Terms and Conditions ("Terms") govern your use of our website and our painting services. By accessing or using our Website or services, you agree to be bound by these Terms. 
            If you do not agree to these Terms, please do not use our Website or services.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-2">Use of Our Services</h3>
          <ul className="list-disc pl-5 space-y-2 mb-6">
            <li>You must be at least 18 years old to use our services.</li>
            <li>
              You agree to provide accurate and complete information when scheduling or requesting services.
            </li>
            <li>
              Unauthorized use of our Website or services, including fraudulent activities, is strictly prohibited.
            </li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-2">Booking and Payments</h3>
          <ul className="list-disc pl-5 space-y-2 mb-6">
            <li>
              All bookings are subject to availability. We reserve the right to cancel or reschedule bookings in case of unforeseen circumstances.
            </li>
            <li>
              Payments must be made in accordance with the terms outlined in your invoice. Late payments may incur additional charges.
            </li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-2">Cancellations and Refunds</h3>
          <ul className="list-disc pl-5 space-y-2 mb-6">
            <li>
              You may cancel or reschedule your appointment by providing at least 48 hours' notice.
            </li>
            <li>
              Refunds will be issued in accordance with our refund policy. Certain fees may be non-refundable.
            </li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-2">Intellectual Property</h3>
          <p className="mb-4">
            All content on our Website, including text, images, logos, and designs, is the intellectual property of [Your Company Name] 
            or our licensors. You may not use, reproduce, or distribute our content without prior written permission.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-2">Limitation of Liability</h3>
          <p className="mb-4">
            To the fullest extent permitted by law, [Your Company Name] shall not be liable for any indirect, incidental, or consequential 
            damages arising from the use of our Website or services. Our liability is limited to the amount you paid for the specific service.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-2">User Responsibilities</h3>
          <ul className="list-disc pl-5 space-y-2 mb-6">
            <li>You are responsible for ensuring that your property is prepared for our painting services.</li>
            <li>
              Any delays caused by your failure to prepare the property may result in additional charges.
            </li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-2">Termination</h3>
          <p className="mb-4">
            We reserve the right to terminate or suspend your access to our Website or services at our sole discretion if you violate these 
            Terms or engage in unlawful activities.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-2">Changes to Terms</h3>
          <p className="mb-4">
            We may update these Terms from time to time to reflect changes in our services or legal requirements. We will notify you of 
            any significant changes by posting the updated Terms on our Website and updating the "Effective Date."
          </p>

          {/* <h3 className="text-xl font-semibold mt-6 mb-2">Governing Law</h3>
          <p className="mb-4">
            These Terms are governed by the laws of [Your Jurisdiction]. Any disputes arising from these Terms shall be resolved exclusively 
            in the courts of [Your Jurisdiction].
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
