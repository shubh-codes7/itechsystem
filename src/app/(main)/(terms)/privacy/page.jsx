"use client";

import React from "react";
import Head from "next/head";

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Privacy Policy | I-Tech System</title>
        <meta
          name="description"
          content="I-Tech System Privacy Policy – Learn how we collect, use, and protect your data for coaching and software development services."
        />
      </Head>

      <section className="max-w-4xl mx-auto py-16 px-6 text-gray-800">
        <h1 className="text-4xl font-bold mb-6 text-center">Privacy Policy</h1>
        <p className="mb-6">
          Welcome to <strong>I-Tech System</strong>. We value your privacy and
          are committed to protecting your personal information. This Privacy
          Policy explains how we collect, use, and safeguard your data when you
          interact with our website, coaching classes, and software development
          services.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">1. Information We Collect</h2>
        <p className="mb-4">
          We collect personal details you voluntarily provide — such as your
          name, email, phone number, and payment information — during enrollment
          or inquiry. Additionally, we gather non-personal data such as browser
          type, IP address, and site usage analytics to improve your experience.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">2. How We Use Your Information</h2>
        <ul className="list-disc list-inside mb-4">
          <li>To register and manage coaching course enrollments</li>
          <li>To deliver software development services and client projects</li>
          <li>To communicate updates, support, and notifications</li>
          <li>To analyze user activity and improve our website</li>
          <li>To comply with legal obligations</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-3">3. Data Security</h2>
        <p className="mb-4">
          We employ industry-standard security practices including encrypted
          storage, SSL protection, and limited data access to ensure your
          information remains safe. However, no online platform is entirely
          secure, and we cannot guarantee absolute data protection.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">4. Sharing of Information</h2>
        <p className="mb-4">
          We do not sell or rent your personal data. We may share information
          only with trusted third-party providers such as payment gateways,
          analytics tools, or hosting partners necessary to operate our
          services. These providers are bound by confidentiality agreements.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">5. Your Rights</h2>
        <p className="mb-4">
          You may request access, correction, or deletion of your personal data
          at any time by contacting us. You can also opt out of marketing
          communications by following unsubscribe links in emails.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">6. Cookies</h2>
        <p className="mb-4">
          Our site uses cookies to enhance user experience and analyze traffic.
          You can disable cookies in your browser, though some features may not
          function correctly.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">7. Updates to This Policy</h2>
        <p className="mb-4">
          We may update this Privacy Policy periodically. Updated versions will
          be posted on this page with a revised effective date.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">8. Contact Us</h2>
        <p>
          For any privacy concerns or requests, contact us at:
          <br />
          <strong>Email:</strong> info@itechsystem.in
          <br />
          <strong>Address:</strong> Sumangal Luxuria, 3rd Floor, Beside Westside Mall, College Road, Nashik-422005
        </p>
      </section>
    </>
  );
}
