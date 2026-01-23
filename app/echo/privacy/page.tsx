import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - Echo",
  description: "Privacy Policy for Echo, the daily reflection app by Stage5",
};

export default function EchoPrivacyPolicy() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <div className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold mb-2">Privacy Policy</h1>
        <p className="text-gray-500 mb-8">Echo - Daily Reflection App</p>
        <p className="text-sm text-gray-400 mb-12">Last updated: January 23, 2026</p>

        <div className="prose prose-gray max-w-none">
          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
            <p className="mb-4">
              Echo (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is operated by Stage5. This Privacy Policy explains how we collect,
              use, disclose, and safeguard your information when you use our mobile application. Please read
              this privacy policy carefully. By using Echo, you agree to the collection and use of information
              in accordance with this policy.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>

            <h3 className="text-xl font-medium mt-6 mb-3">Account Information</h3>
            <p className="mb-4">When you create an account, we collect:</p>
            <ul className="list-disc pl-6 mb-4 space-y-1">
              <li>Email address</li>
              <li>Username and display name</li>
              <li>Password (securely hashed - we never store plain text passwords)</li>
              <li>Profile picture (optional)</li>
              <li>Bio (optional)</li>
              <li>Apple ID or Google ID (if you sign in via OAuth)</li>
            </ul>

            <h3 className="text-xl font-medium mt-6 mb-3">Reflection Content</h3>
            <p className="mb-4">As part of the core app experience, we collect:</p>
            <ul className="list-disc pl-6 mb-4 space-y-1">
              <li>Daily questions presented to you</li>
              <li>Your written responses</li>
              <li>AI-generated grades and feedback</li>
              <li>Streak and completion data</li>
              <li>Submission timestamps</li>
            </ul>

            <h3 className="text-xl font-medium mt-6 mb-3">Profile Insights</h3>
            <p className="mb-4">
              To personalize your experience, our AI analyzes your reflections to extract:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-1">
              <li>Interests and topics you write about</li>
              <li>Personal traits and values</li>
            </ul>
            <p className="mb-4">
              This data is used solely to tailor questions and improve your reflection experience.
            </p>

            <h3 className="text-xl font-medium mt-6 mb-3">Typing Metadata</h3>
            <p className="mb-4">
              To maintain the integrity of the reflection experience and prevent copy-pasting, we collect:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-1">
              <li>Keystroke count</li>
              <li>Typing timing patterns</li>
            </ul>
            <p className="mb-4">
              This metadata is used only for anti-cheat verification and is not shared with third parties.
            </p>

            <h3 className="text-xl font-medium mt-6 mb-3">Device & Preferences</h3>
            <ul className="list-disc pl-6 mb-4 space-y-1">
              <li>Push notification tokens (for daily reminders)</li>
              <li>Timezone (to deliver questions at appropriate times)</li>
              <li>Theme preference (stored locally on your device)</li>
            </ul>

            <h3 className="text-xl font-medium mt-6 mb-3">Subscription Information</h3>
            <ul className="list-disc pl-6 mb-4 space-y-1">
              <li>Subscription tier (free or pro)</li>
              <li>Subscription expiration dates</li>
              <li>Transaction identifiers (via RevenueCat)</li>
            </ul>
            <p className="mb-4">
              We do not store or have access to your payment card details. All payment processing
              is handled securely by Apple&apos;s App Store and RevenueCat.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
            <p className="mb-4">We use the information we collect to:</p>
            <ul className="list-disc pl-6 mb-4 space-y-1">
              <li>Provide and maintain the Echo service</li>
              <li>Generate personalized daily reflection questions</li>
              <li>Grade your responses and provide AI feedback</li>
              <li>Track your streaks and progress</li>
              <li>Send push notifications (daily reminders, streak alerts)</li>
              <li>Send transactional emails (password resets, account notifications)</li>
              <li>Process and manage subscriptions</li>
              <li>Enable the public feed feature (only for content you choose to share)</li>
              <li>Improve and optimize the app experience</li>
              <li>Prevent fraud and enforce our terms of service</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">Public Feed & Shared Content</h2>
            <p className="mb-4">
              Echo includes an optional public feed where you can share polished versions of your reflections.
              When you choose to share a response:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-1">
              <li>Your display name and profile picture will be visible</li>
              <li>The shared reflection will be visible to other Echo users</li>
              <li>You can delete shared content at any time</li>
            </ul>
            <p className="mb-4">
              Sharing is always optional. Your private reflections are never shared unless you explicitly choose to publish them.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">Third-Party Services</h2>
            <p className="mb-4">We use the following third-party services to operate Echo:</p>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-200 my-4">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border border-gray-200 px-4 py-2 text-left">Service</th>
                    <th className="border border-gray-200 px-4 py-2 text-left">Purpose</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-200 px-4 py-2">Anthropic (Claude)</td>
                    <td className="border border-gray-200 px-4 py-2">AI question generation, response grading, and content polishing</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-2">RevenueCat</td>
                    <td className="border border-gray-200 px-4 py-2">In-app subscription management</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-2">Apple Sign-In</td>
                    <td className="border border-gray-200 px-4 py-2">Authentication (OAuth)</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-2">Google Sign-In</td>
                    <td className="border border-gray-200 px-4 py-2">Authentication (OAuth)</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-2">SendGrid</td>
                    <td className="border border-gray-200 px-4 py-2">Transactional emails (password reset, account notifications)</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-2">Expo Push Notifications</td>
                    <td className="border border-gray-200 px-4 py-2">Daily reminders and streak alerts</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="mb-4">
              Each third-party service has its own privacy policy governing its use of your data.
              We encourage you to review their policies.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
            <p className="mb-4">
              We implement appropriate technical and organizational security measures to protect your
              personal information, including:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-1">
              <li>Encryption of data in transit (TLS/SSL)</li>
              <li>Secure password hashing</li>
              <li>JWT-based session management</li>
              <li>Regular security assessments</li>
            </ul>
            <p className="mb-4">
              However, no method of transmission over the Internet or electronic storage is 100% secure.
              While we strive to protect your personal information, we cannot guarantee absolute security.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">Data Retention</h2>
            <p className="mb-4">
              We retain your personal information for as long as your account is active or as needed to
              provide you services. You can request deletion of your account and associated data at any time.
            </p>
            <p className="mb-4">
              Upon account deletion:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-1">
              <li>Your profile information will be permanently deleted</li>
              <li>Your private reflections will be permanently deleted</li>
              <li>Any publicly shared content will be removed from the feed</li>
              <li>Some anonymized, aggregated data may be retained for analytics purposes</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
            <p className="mb-4">Depending on your location, you may have the right to:</p>
            <ul className="list-disc pl-6 mb-4 space-y-1">
              <li>Access the personal data we hold about you</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Export your data in a portable format</li>
              <li>Opt out of certain data processing activities</li>
              <li>Withdraw consent where processing is based on consent</li>
            </ul>
            <p className="mb-4">
              To exercise any of these rights, please contact us at the email address below.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">Children&apos;s Privacy</h2>
            <p className="mb-4">
              Echo is not intended for children under the age of 13. We do not knowingly collect personal
              information from children under 13. If you are a parent or guardian and believe your child
              has provided us with personal information, please contact us so we can delete such information.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">Changes to This Policy</h2>
            <p className="mb-4">
              We may update this Privacy Policy from time to time. We will notify you of any changes by
              posting the new Privacy Policy on this page and updating the &quot;Last updated&quot; date. You are
              advised to review this Privacy Policy periodically for any changes.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p className="mb-4">
              If you have any questions about this Privacy Policy or our data practices, please contact us at:
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
