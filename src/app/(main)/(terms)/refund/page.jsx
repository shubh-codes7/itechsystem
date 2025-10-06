"use client";

import React from "react";
import Head from "next/head";

export default function RefundPolicy() {
  return (
    <>
      <Head>
        <title>Refund & Cancellation Policy | I-Tech System</title>
        <meta
          name="description"
          content="I-Tech System refund and cancellation policy for coaching and software development services."
        />
      </Head>

      <section className="max-w-4xl mx-auto py-16 px-6 text-gray-800">
        <h1 className="text-4xl font-bold mb-6 text-center">
          Refund & Cancellation Policy
        </h1>
        

        <p className="mb-6">
          At <strong>I-Tech System</strong>, we aim to ensure satisfaction with
          every course enrollment and software service. This policy outlines our
          refund and cancellation terms for students and clients.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">1. Coaching & Training Services</h2>
        <ul className="list-disc list-inside mb-4">
          <li>
            Refunds are available only before the commencement of the selected
            course batch.
          </li>
          <li>
            Once a class or batch has started, fees are non-refundable under all
            circumstances.
          </li>
          <li>
            Students may request transfer to another batch or course upon
            approval and subject to availability.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-3">2. Software Development Services</h2>
        <ul className="list-disc list-inside mb-4">
          <li>
            For project cancellations requested before development begins, 50%
            of the advance payment will be refunded.
          </li>
          <li>
            Once the project has started or deliverables have been shared, no
            refund will be issued.
          </li>
          <li>
            Any changes or modifications in project scope will be handled
            through mutual agreement and may affect cost and delivery timeline.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-3">3. Refund Procedure</h2>
        <p className="mb-4">
          To request a refund, please contact us at{" "}
          <a href="mailto:info@itechsystem.in" className="text-blue-600">
            info@itechsystem.in
          </a>{" "}
          with your payment details, reason for refund, and proof of purchase.
          Approved refunds will be processed within 15-30 working days via the
          original payment method.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">4. Non-Refundable Cases</h2>
        <ul className="list-disc list-inside mb-4">
          <li>Failure to attend scheduled classes or sessions</li>
          <li>Change of mind after services have commenced</li>
          <li>Delays caused by client in providing information or approvals</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-3">5. Contact Us</h2>
        <p>
          For questions about this policy, reach out to us at:
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
