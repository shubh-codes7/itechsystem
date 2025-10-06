"use client";

import React from "react";
import Head from "next/head";

export default function TermsAndConditions() {
  return (
    <>
      <Head>
        <title>Terms & Conditions | I-Tech System</title>
        <meta
          name="description"
          content="Terms and Conditions for I-Tech System coaching and software development services."
        />
      </Head>

      <section className="max-w-4xl mx-auto py-16 px-6 text-gray-800">
        <h1 className="text-4xl font-bold mb-6 text-center">
          Terms & Conditions
        </h1>
        

        <p className="mb-6">
          Welcome to <strong>I-Tech System</strong>. These Terms & Conditions
          govern your use of our website, coaching classes, and software
          development services. By accessing or using our website or services,
          you agree to comply with and be bound by these terms.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">1. Definitions</h2>
        <p className="mb-4">
          <strong>“Company,” “we,” “our,”</strong> refers to I-Tech System.{" "}
          <strong>“User,” “you,” or “Client”</strong> means anyone accessing our
          website, enrolling in courses, or engaging our software development
          services. <strong>“Services”</strong> includes all educational,
          technical, and consulting activities provided by I-Tech System.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">2. Acceptance of Terms</h2>
        <p className="mb-4">
          By using this website or engaging with our services, you confirm that
          you are legally eligible to enter a binding contract. If you disagree
          with these Terms, please discontinue the use of our website and
          services immediately.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">3. Services Offered</h2>
        <ul className="list-disc list-inside mb-4">
          <li>Professional coaching in programming, IT, and technology.</li>
          <li>Custom software design, development, and consultancy.</li>
          <li>Corporate and institutional training programs.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-3">4. User Obligations</h2>
        <ul className="list-disc list-inside mb-4">
          <li>Provide accurate information during registration or enrollment.</li>
          <li>Refrain from misusing, copying, or redistributing course materials.</li>
          <li>
            Use the website and services only for lawful purposes and in
            accordance with these Terms.
          </li>
          <li>
            Maintain confidentiality of login credentials or student access
            details.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-3">5. Payment & Fees</h2>
        <p className="mb-4">
          All fees must be paid as per the communicated structure at the time of
          enrollment or project initiation. Non-payment may result in suspension
          or termination of services. Refunds and cancellations are subject to
          our{" "}
          <a
            href="/refund-policy"
            className="text-blue-600 hover:underline"
          >
            Refund & Cancellation Policy
          </a>
          .
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">6. Intellectual Property Rights</h2>
        <p className="mb-4">
          All course content, software, designs, graphics, and educational
          material provided by I-Tech System are our intellectual property.
          Unauthorized reproduction, distribution, or modification is strictly
          prohibited. Users receive a limited, non-transferable license for
          personal and educational use only.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">7. Prohibited Activities</h2>
        <ul className="list-disc list-inside mb-4">
          <li>Engaging in any activity that disrupts website functionality.</li>
          <li>
            Attempting to hack, reverse engineer, or access restricted areas of
            our systems.
          </li>
          <li>Sharing or reselling educational materials without consent.</li>
          <li>Spreading false information or impersonating I-Tech System.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-3">8. Limitation of Liability</h2>
        <p className="mb-4">
          I-Tech System shall not be held liable for any direct, indirect, or
          consequential damages resulting from the use or inability to use our
          website or services. We do not guarantee uninterrupted access or error
         -free content.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">9. Indemnification</h2>
        <p className="mb-4">
          You agree to indemnify and hold harmless I-Tech System, its employees,
          partners, and affiliates from any claims, damages, losses, or expenses
          arising out of your violation of these Terms or misuse of our
          services.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">10. Termination</h2>
        <p className="mb-4">
          We reserve the right to suspend or terminate your access to services
          if we believe you have violated any part of these Terms. Upon
          termination, any licenses granted to you will immediately end.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">11. Third-Party Links</h2>
        <p className="mb-4">
          Our website may contain links to external websites. I-Tech System is
          not responsible for the content or privacy practices of third-party
          sites and disclaims any liability associated with their use.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">12. Updates to Terms</h2>
        <p className="mb-4">
          I-Tech System may modify these Terms & Conditions periodically.
          Updated versions will be posted here with a revised effective date.
          Continued use of the website after updates constitutes acceptance of
          the new Terms.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">13. Governing Law</h2>
        <p className="mb-4">
          These Terms shall be governed by and construed in accordance with the
          laws of Nashik/Maharashtra. Any disputes arising shall be subject
          to the exclusive jurisdiction of the courts in Nashik/Maharashtra.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">14. Contact Information</h2>
        <p>
          For any questions or concerns about these Terms & Conditions, please
          contact:
          <br />
          <strong>Email:</strong> info@itechsystem.in
          <br />
          <strong>Address:</strong> Sumangal Luxuria, 3rd Floor,
Beside Westside Mall, College Road, Nashik-422005
        </p>
      </section>
    </>
  );
}
