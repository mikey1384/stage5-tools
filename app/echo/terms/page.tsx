import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service - Echo",
  description: "Terms of Service for Echo, the daily reflection app by Stage5",
};

export default function EchoTermsOfService() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <div className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold mb-2">Terms of Service</h1>
        <p className="text-gray-500 mb-8">Echo - Daily Reflection App</p>
        <p className="text-sm text-gray-400 mb-12">Last updated: January 28, 2026</p>

        <div className="prose prose-gray max-w-none">
          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">Agreement to Terms</h2>
            <p className="mb-4">
              By downloading, installing, or using Echo (&quot;the App&quot;), you agree to be bound
              by these Terms of Service (&quot;Terms&quot;). If you do not agree to these Terms, do not
              use the App. Echo is operated by Stage5 (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;).
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">Description of Service</h2>
            <p className="mb-4">
              Echo is a daily reflection app that presents personalized questions, allows you to
              write responses, and provides AI-powered feedback to support personal growth and
              self-reflection.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">User Accounts</h2>
            <p className="mb-4">
              To use Echo, you must create an account. You are responsible for:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-1">
              <li>Maintaining the confidentiality of your account credentials</li>
              <li>All activities that occur under your account</li>
              <li>Notifying us immediately of any unauthorized use</li>
            </ul>
            <p className="mb-4">
              You must be at least 13 years old to create an account and use Echo.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">Echo Pro Subscription</h2>
            <p className="mb-4">
              Echo offers a premium subscription (&quot;Echo Pro&quot;) that unlocks additional features.
            </p>

            <h3 className="text-xl font-medium mt-6 mb-3">What Pro Includes</h3>
            <ul className="list-disc pl-6 mb-4 space-y-1">
              <li>Unlimited daily reflections</li>
              <li>Access to advanced AI-powered insights</li>
              <li>Extended reflection history</li>
              <li>Priority support</li>
              <li>Additional personalization features</li>
            </ul>

            <h3 className="text-xl font-medium mt-6 mb-3">Subscription Terms</h3>
            <ul className="list-disc pl-6 mb-4 space-y-1">
              <li>Subscriptions are billed through your Apple ID account</li>
              <li>Payment is charged at confirmation of purchase</li>
              <li>Subscriptions automatically renew unless auto-renew is turned off at least 24 hours before the end of the current period</li>
              <li>Your account will be charged for renewal within 24 hours prior to the end of the current period</li>
              <li>Subscription prices may vary by region and are displayed in your local currency at purchase</li>
            </ul>

            <h3 className="text-xl font-medium mt-6 mb-3">Auto-Renewal</h3>
            <p className="mb-4">
              Echo Pro subscriptions automatically renew at the end of each billing period (monthly
              or annually, depending on your chosen plan) unless you cancel. The renewal charge will
              be the same as your original subscription price unless we notify you of a price change
              in advance.
            </p>

            <h3 className="text-xl font-medium mt-6 mb-3">Cancellation</h3>
            <p className="mb-4">
              You can cancel your Echo Pro subscription at any time through your Apple ID settings:
            </p>
            <ol className="list-decimal pl-6 mb-4 space-y-1">
              <li>Open Settings on your device</li>
              <li>Tap your name, then tap &quot;Subscriptions&quot;</li>
              <li>Select Echo</li>
              <li>Tap &quot;Cancel Subscription&quot;</li>
            </ol>
            <p className="mb-4">
              Upon cancellation, you will retain access to Pro features until the end of your current
              billing period. No refunds are provided for partial subscription periods.
            </p>

            <h3 className="text-xl font-medium mt-6 mb-3">Free Trial</h3>
            <p className="mb-4">
              If you start a free trial, you will not be charged until the trial period ends. If you
              do not cancel before the trial ends, your subscription will automatically begin and you
              will be charged. Any unused portion of a free trial period will be forfeited when you
              purchase a subscription.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">User Content</h2>
            <p className="mb-4">
              You retain ownership of the content you create within Echo (your reflections and responses).
              By using the App, you grant us a limited license to process your content for the purpose of
              providing the service, including AI analysis and feedback.
            </p>
            <p className="mb-4">
              If you choose to share content publicly on the Echo feed, you grant other users permission
              to view that content. You can remove shared content at any time.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">Acceptable Use</h2>
            <p className="mb-4">You agree not to:</p>
            <ul className="list-disc pl-6 mb-4 space-y-1">
              <li>Use the App for any unlawful purpose</li>
              <li>Share harmful, offensive, or inappropriate content</li>
              <li>Attempt to circumvent any security features</li>
              <li>Use automated systems to access the App</li>
              <li>Impersonate others or misrepresent your identity</li>
              <li>Interfere with or disrupt the service</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">Account Deletion</h2>
            <p className="mb-4">
              You have the right to delete your account at any time. To request account deletion:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-1">
              <li>Use the account deletion feature within the App settings, or</li>
              <li>Email us at mikey@stage5.tools with your deletion request</li>
            </ul>
            <p className="mb-4">
              Upon deletion, all your personal data and reflection content will be permanently removed
              from our systems within 30 days, except where we are required to retain data for legal
              compliance purposes.
            </p>
            <p className="mb-4">
              Deleting your account does not automatically cancel any active subscription. Please cancel
              your subscription through Apple before or after deleting your account to avoid future charges.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">Intellectual Property</h2>
            <p className="mb-4">
              Echo and its original content, features, and functionality are owned by Stage5 and are
              protected by copyright, trademark, and other intellectual property laws. You may not copy,
              modify, distribute, or create derivative works based on the App without our written permission.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">Disclaimer of Warranties</h2>
            <p className="mb-4">
              Echo is provided &quot;as is&quot; and &quot;as available&quot; without warranties of any kind, either
              express or implied. We do not warrant that the App will be uninterrupted, error-free,
              or secure.
            </p>
            <p className="mb-4">
              The AI-generated feedback and insights provided by Echo are for personal reflection
              purposes only and do not constitute professional advice (medical, psychological, or otherwise).
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">Limitation of Liability</h2>
            <p className="mb-4">
              To the fullest extent permitted by law, Stage5 shall not be liable for any indirect,
              incidental, special, consequential, or punitive damages, or any loss of profits or revenues,
              whether incurred directly or indirectly, or any loss of data, use, or goodwill, arising
              from your use of Echo.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">Changes to Terms</h2>
            <p className="mb-4">
              We may update these Terms from time to time. We will notify you of significant changes
              by posting a notice in the App or by other means. Your continued use of Echo after
              changes take effect constitutes acceptance of the new Terms.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">Governing Law</h2>
            <p className="mb-4">
              These Terms shall be governed by and construed in accordance with the laws of the
              State of Wyoming, United States, without regard to its conflict of law provisions.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p className="mb-4">
              If you have any questions about these Terms, please contact us at:
            </p>
            <p className="mb-4">
              <strong>Email:</strong> mikey@stage5.tools
            </p>
            <p className="mb-4">
              <strong>Address:</strong><br />
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
