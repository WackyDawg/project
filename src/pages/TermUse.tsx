import React from "react";

function TermUse() {
  return (
    <>
      <main className="min-h-screen p-8">
        <h1 className="text-3xl font-bold mb-6">Tikdown Terms of Use</h1>

        <section className="max-w-3xl text-gray-300 space-y-6">
          <div>
            <h2 className="text-2xl font-semibold mb-2">Acceptance of Terms</h2>
            <p>
              By accessing and using Tikdown App ("we", "our", "us"), you agree
              to comply with and be bound by these Terms of Use. If you do not
              agree to these terms, please do not use Tikdown or any of its
              services.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">Use of Our Services</h2>
            <p>
              Tikdown provides tools that allow users to download videos from
              TikTok for personal and non-commercial use only. You agree not to
              use Tikdown for any illegal activities or to violate any
              third-party rights, including copyright laws.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">
              User Responsibilities
            </h2>
            <p>
              You are solely responsible for the content you download using
              Tikdown. We do not host or store any TikTok videos on our servers.
              Ensure that you have permission to download and use any content in
              accordance with the applicable laws and TikTok's terms.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">
              Intellectual Property
            </h2>
            <p>
              All branding, logos, and intellectual property associated with
              Tikdown are owned by us and protected by law. You may not use our
              branding without prior written consent.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">
              Disclaimer of Warranties
            </h2>
            <p>
              Tikdown is provided on an "as is" and "as available" basis. We
              make no warranties, express or implied, regarding the reliability,
              availability, or suitability of our services for any purpose.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">
              Limitation of Liability
            </h2>
            <p>
              In no event shall Tikdown, its affiliates, or its partners be
              liable for any indirect, incidental, special, consequential, or
              punitive damages arising out of your use of our services.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">
              Changes to These Terms
            </h2>
            <p>
              We may update these Terms of Use from time to time. We encourage
              you to review this page periodically to stay informed of any
              changes. Your continued use of Tikdown after any updates
              constitutes acceptance of those changes.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">Contact Us</h2>
            <p>
              If you have any questions about these Terms of Use, please contact
              us at{" "}
              <a
                href="mailto:support@downtik.to"
                className="text-blue-400 underline"
              >
                support@downtik.to
              </a>
              .
            </p>
          </div>
        </section>
      </main>
    </>
  );
}

export default TermUse;
