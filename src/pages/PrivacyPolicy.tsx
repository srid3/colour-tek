const PrivacyPolicy = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="relative h-[300px] mb-16">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="relative h-full max-w-7xl mx-auto px-4 flex items-center">
          <div className="text-white">
            <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-xl max-w-2xl">
              Learn how we protect your data and respect your privacy.
            </p>
          </div>
        </div>
      </div>

      {/* Privacy Policy Content Section */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="mb-4">
            Colour-Tek is committed to protecting your privacy. 
            This Privacy Policy explains how we collect, use, disclose, and safeguard your 
            information when you visit our website or use our painting services.
            Please read this policy carefully to understand our views and practices regarding your 
            personal information and how we will treat it.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-2">Information We Collect</h3>
          <p className="mb-4">
            We collect information to provide and improve our services, as well as to communicate effectively with you.
            The types of information we may collect include:
          </p>

          <h4 className="font-semibold mt-4">1. Personal Information</h4>
          <ul className="list-disc pl-5 space-y-2 mb-6">
            <li>
              <strong>Contact Information:</strong> Name, email address, phone number, and mailing address.
            </li>
            <li>
              <strong>Service Details:</strong> Specifics about your painting project, such as the address of the property, preferred dates, and other relevant details.
            </li>
          </ul>

          <h4 className="font-semibold mt-4">2. Non-Personal Information</h4>
          <ul className="list-disc pl-5 space-y-2 mb-6">
            <li>
              <strong>Website Usage Data:</strong> IP address, browser type, operating system, and pages you visit on our Website.
            </li>
            <li>
              <strong>Cookies and Tracking Technologies:</strong> To improve your user experience and analyze how the Website is used.
            </li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-2">How We Use Your Information</h3>
          <ul className="list-disc pl-5 space-y-2 mb-6">
            <li>To provide you with our painting services.</li>
            <li>To process payments and send invoices.</li>
            <li>To communicate with you regarding your inquiries, appointments, or projects.</li>
            <li>To improve and optimize our Website.</li>
            <li>To comply with legal obligations.</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-2">Sharing Your Information</h3>
          <p className="mb-4">
            We do not sell your personal information. However, we may share your information with trusted third parties in the following circumstances:
          </p>
          <ul className="list-disc pl-5 space-y-2 mb-6">
            <li>
              <strong>Service Providers:</strong> Third parties who assist us in providing services, such as payment processors, marketing platforms, or customer support.
            </li>
            <li>
              <strong>Legal Obligations:</strong> When required to comply with applicable laws, regulations, or legal processes.
            </li>
            <li>
              <strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of all or a portion of our business.
            </li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-2">Cookies and Tracking Technologies</h3>
          <p className="mb-4">
            We use cookies to enhance your browsing experience. Cookies are small data files stored on your device. You can control or disable cookies through your browser settings. Note that some features of our Website may not function properly if you disable cookies.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-2">Data Security</h3>
          <p className="mb-4">
            We implement industry-standard security measures to protect your personal information from unauthorized access, use, or disclosure. However, no method of transmission over the internet or electronic storage is 100% secure.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-2">Your Rights</h3>
          <p className="mb-4">
            Depending on your location, you may have certain rights regarding your personal information, including:
          </p>
          <ul className="list-disc pl-5 space-y-2 mb-6">
            <li>Accessing, correcting, or deleting your personal information.</li>
            <li>Opting out of marketing communications.</li>
            <li>Restricting or objecting to the processing of your personal information.</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-2">Third-Party Links</h3>
          <p className="mb-4">
            Our Website may contain links to third-party websites. We are not responsible for the privacy practices of these third-party websites. We encourage you to review their privacy policies.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-2">Updates to This Privacy Policy</h3>
          <p className="mb-4">
            We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any significant changes by posting the updated policy on our Website and updating the "Effective Date."
          </p>

          {/* <h3 className="text-xl font-semibold mt-6 mb-2">Contact Us</h3>
          <p>
            If you have any questions about this Privacy Policy or our practices, please contact us:
          </p>
          <ul className="list-disc pl-5 mt-4 space-y-2">
            <li><strong>Email:</strong> [your email address]</li>
            <li><strong>Phone:</strong> [your phone number]</li>
            <li><strong>Address:</strong> [your business address]</li>
          </ul> */}
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
