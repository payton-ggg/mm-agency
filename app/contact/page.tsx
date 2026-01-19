import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Input, Textarea } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";

export const metadata = {
  title: "Contact | Elite Model Agency",
  description:
    "Get in touch with Elite Model Agency for bookings and inquiries.",
};

export default function ContactPage() {
  return (
    <>
      <Navigation />

      <main className="min-h-screen pt-20">
        {/* Hero */}
        <section className="py-16 px-6 bg-gradient-red">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="mb-4">Get In Touch</h1>
            <p className="text-lg md:text-xl text-gray-light">
              We're here to answer your questions and discuss opportunities
            </p>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="mb-6">Contact Information</h2>

              <div className="space-y-5 mb-10">
                <div>
                  <h4 className="text-sm uppercase text-gray-light mb-2">
                    Email
                  </h4>
                  <a
                    href="mailto:contact@elitemodels.com"
                    className="text-lg hover:text-red-light transition-colors"
                  >
                    contact@elitemodels.com
                  </a>
                </div>

                <div>
                  <h4 className="text-sm uppercase text-gray-light mb-2">
                    Phone
                  </h4>
                  <a
                    href="tel:+1234567890"
                    className="text-lg hover:text-red-light transition-colors"
                  >
                    +1 (234) 567-890
                  </a>
                </div>

                <div>
                  <h4 className="text-sm uppercase text-gray-light mb-2">
                    Office Hours
                  </h4>
                  <p className="text-white-off text-base">
                    Monday - Friday: 9:00 AM - 6:00 PM
                    <br />
                    Saturday: 10:00 AM - 2:00 PM
                  </p>
                </div>
              </div>

              <div>
                <h4 className="text-sm uppercase text-gray-light mb-3">
                  Follow Us
                </h4>
                <div className="flex gap-3">
                  <a
                    href="#"
                    className="w-12 h-12 flex items-center justify-center border border-gray-mid hover:border-red-glow hover:text-red-light transition-all"
                    aria-label="Instagram"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 flex items-center justify-center border border-gray-mid hover:border-red-glow hover:text-red-light transition-all"
                    aria-label="LinkedIn"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="mb-6">Send a Message</h2>
              <form className="space-y-5">
                <Input label="Name" type="text" required />
                <Input label="Email" type="email" required />
                <Input label="Subject" type="text" />
                <Textarea
                  label="Message"
                  placeholder="How can we help you?"
                  rows={5}
                  required
                />
                <div className="pt-2">
                  <Button variant="primary" type="submit">
                    Send Message
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
