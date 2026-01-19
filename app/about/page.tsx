import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "About | Elite Model Agency",
  description:
    "Learn about our high-fashion model agency philosophy and approach.",
};

export default function AboutPage() {
  return (
    <>
      <Navigation />

      <main className="min-h-screen pt-24">
        {/* Hero */}
        <section className="relative py-32 px-6 bg-gradient-red overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-red-light rounded-full blur-[120px] animate-pulse-red" />
          </div>
          <div className="relative max-w-4xl mx-auto text-center">
            <h1 className="mb-6">About Elite</h1>
            <p className="text-2xl text-gray-light">
              Bold representation for bold talent
            </p>
          </div>
        </section>

        {/* Philosophy */}
        <section className="py-20 px-6">
          <div className="max-w-3xl mx-auto space-y-8">
            <div>
              <h2 className="mb-6">Our Philosophy</h2>
              <p className="text-xl text-gray-light leading-relaxed">
                We don't represent models. We represent presence. Power.
                Unforgettable impact.
              </p>
            </div>

            <p className="text-lg text-gray-light leading-relaxed">
              Elite Model Agency was founded on the belief that true talent
              transcends measurements and portfolios. We seek individuals who
              command attention, who embody confidence, and who redefine what it
              means to be a professional model in the modern era.
            </p>

            <p className="text-lg text-gray-light leading-relaxed">
              Our approach is unapologetically bold. We connect the world's most
              compelling models with brands that share our vision for
              excellence. From high-fashion runways in Paris and Milan to
              commercial campaigns that shape global culture, our talent doesn't
              just participate—they lead.
            </p>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 px-6 bg-black-graphite">
          <div className="max-w-5xl mx-auto">
            <h2 className="mb-16 text-center">What We Stand For</h2>
            <div className="grid md:grid-cols-3 gap-12">
              <div className="text-center">
                <h3 className="mb-4 text-red-light">Excellence</h3>
                <p className="text-gray-light">
                  We represent only the best, and we demand excellence in every
                  partnership and project
                </p>
              </div>
              <div className="text-center">
                <h3 className="mb-4 text-red-light">Innovation</h3>
                <p className="text-gray-light">
                  Breaking boundaries and setting new standards in fashion and
                  commercial modeling
                </p>
              </div>
              <div className="text-center">
                <h3 className="mb-4 text-red-light">Integrity</h3>
                <p className="text-gray-light">
                  Professional, transparent, and committed to the success of our
                  models and clients
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Global Reach */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="mb-6">Global Presence</h2>
            <p className="text-xl text-gray-light mb-12">
              Our models work with the world's most prestigious brands across
              fashion capitals
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-gray-light">
              <div>
                <h4 className="text-white-off mb-2">New York</h4>
                <p className="text-sm">Fashion Week • Commercial</p>
              </div>
              <div>
                <h4 className="text-white-off mb-2">Paris</h4>
                <p className="text-sm">Haute Couture • Editorial</p>
              </div>
              <div>
                <h4 className="text-white-off mb-2">Milan</h4>
                <p className="text-sm">Fashion Week • Campaigns</p>
              </div>
              <div>
                <h4 className="text-white-off mb-2">London</h4>
                <p className="text-sm">Contemporary • Commercial</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
