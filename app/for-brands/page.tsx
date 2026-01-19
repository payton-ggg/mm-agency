import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Input, Textarea } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";

export const metadata = {
  title: "For Brands | Elite Model Agency",
  description:
    "Book elite models for your campaigns, runway shows, and commercial projects.",
};

export default function ForBrandsPage() {
  return (
    <>
      <Navigation />

      <main className="min-h-screen pt-24">
        {/* Hero */}
        <section className="py-20 px-6 bg-gradient-red">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="mb-6">Partner With Elite Talent</h1>
            <p className="text-xl text-gray-light">
              Access our roster of world-class models for your next campaign
            </p>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-center mb-16">How It Works</h2>
            <div className="grid md:grid-cols-3 gap-12">
              <div className="text-center group">
                <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center text-4xl font-bold text-red-light border-2 border-red-glow group-hover:shadow-[0_0_30px_hsla(0,100%,50%,0.5)] transition-all duration-300">
                  1
                </div>
                <h3 className="mb-4">Browse Our Models</h3>
                <p className="text-gray-light">
                  Explore our diverse roster of fashion, commercial, and
                  editorial models
                </p>
              </div>
              <div className="text-center group">
                <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center text-4xl font-bold text-red-light border-2 border-red-glow group-hover:shadow-[0_0_30px_hsla(0,100%,50%,0.5)] transition-all duration-300">
                  2
                </div>
                <h3 className="mb-4">Submit Your Request</h3>
                <p className="text-gray-light">
                  Fill out our booking form with your project details and
                  requirements
                </p>
              </div>
              <div className="text-center group">
                <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center text-4xl font-bold text-red-light border-2 border-red-glow group-hover:shadow-[0_0_30px_hsla(0,100%,50%,0.5)] transition-all duration-300">
                  3
                </div>
                <h3 className="mb-4">We Connect You</h3>
                <p className="text-gray-light">
                  Our team facilitates the booking and manages all professional
                  details
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Booking Form */}
        <section className="py-20 px-6 bg-black-graphite">
          <div className="max-w-2xl mx-auto">
            <h2 className="mb-8">Request a Booking</h2>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <Input label="Company Name" type="text" required />
                <Input label="Contact Name" type="text" required />
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <Input label="Email" type="email" required />
                <Input label="Phone" type="tel" />
              </div>
              <Input
                label="Project Type"
                type="text"
                placeholder="e.g., Fashion Campaign, Runway, Editorial"
              />
              <Textarea
                label="Project Details"
                placeholder="Tell us about your project, dates, and requirements..."
                rows={6}
              />
              <Button
                variant="primary"
                type="submit"
                className="w-full md:w-auto"
              >
                Submit Request
              </Button>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
