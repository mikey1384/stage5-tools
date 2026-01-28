import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Support - Echo",
  description: "Get help with Echo, the daily reflection app by Stage5",
};

export default function EchoSupportPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <div className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold mb-2">Support</h1>
        <p className="text-gray-500 mb-8">Echo - Daily Reflection App</p>

        <div className="prose prose-gray max-w-none">
          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">Need Help?</h2>
            <p className="mb-4">
              We&apos;re here to help you get the most out of Echo. Whether you have questions
              about the app, your subscription, or need technical assistance, please reach out.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p className="mb-4">
              For all support inquiries, please email us at:
            </p>
            <p className="mb-4">
              <a
                href="mailto:mikey@stage5.tools"
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                mikey@stage5.tools
              </a>
            </p>
            <p className="mb-4 text-gray-600">
              We typically respond within 24-48 hours.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">Common Topics</h2>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Account issues (login, password reset)</li>
              <li>Subscription and billing questions</li>
              <li>Feature requests and feedback</li>
              <li>Bug reports</li>
              <li>Data and privacy inquiries</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">Manage Your Subscription</h2>
            <p className="mb-4">
              Echo Pro subscriptions are managed through your Apple ID. To cancel or modify
              your subscription:
            </p>
            <ol className="list-decimal pl-6 mb-4 space-y-2">
              <li>Open the Settings app on your iPhone or iPad</li>
              <li>Tap your name at the top</li>
              <li>Tap &quot;Subscriptions&quot;</li>
              <li>Select Echo to manage or cancel</li>
            </ol>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">Company Address</h2>
            <p className="mb-4">
              Stage5<br />
              30 N Gould St Ste N<br />
              Sheridan, WY 82801<br />
              United States
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
