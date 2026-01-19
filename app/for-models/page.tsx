"use client";

import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Input, Textarea } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { useState } from "react";

export default function ForModelsPage() {
  const [files, setFiles] = useState<FileList | null>(null);

  return (
    <>
      <Navigation />

      <main className="min-h-screen pt-24">
        {/* Hero */}
        <section className="py-20 px-6 bg-gradient-red">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="mb-6">Join Our Agency</h1>
            <p className="text-xl text-gray-light">
              Elevate your modeling career with elite representation
            </p>
          </div>
        </section>

        {/* Requirements */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-12">Requirements</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="mb-4 text-red-light">Female Models</h3>
                <ul className="space-y-3 text-gray-light">
                  <li className="flex items-start">
                    <span className="text-red-light mr-2">•</span>
                    Height: 172-180 cm
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-light mr-2">•</span>
                    Age: 16-28 years
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-light mr-2">•</span>
                    Professional attitude
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-light mr-2">•</span>
                    Portfolio preferred but not required
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="mb-4 text-red-light">Male Models</h3>
                <ul className="space-y-3 text-gray-light">
                  <li className="flex items-start">
                    <span className="text-red-light mr-2">•</span>
                    Height: 183-193 cm
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-light mr-2">•</span>
                    Age: 18-32 years
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-light mr-2">•</span>
                    Professional attitude
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-light mr-2">•</span>
                    Portfolio preferred but not required
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 px-6 bg-black-graphite">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-12">Why Join Elite</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h4 className="mb-3 text-red-light">Professional Management</h4>
                <p className="text-gray-light">
                  Dedicated agents managing your bookings, contracts, and career
                  growth
                </p>
              </div>
              <div>
                <h4 className="mb-3 text-red-light">Global Exposure</h4>
                <p className="text-gray-light">
                  Access to international fashion weeks, campaigns, and
                  editorial work
                </p>
              </div>
              <div>
                <h4 className="mb-3 text-red-light">Industry Connections</h4>
                <p className="text-gray-light">
                  Direct relationships with top brands, photographers, and
                  casting directors
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Application Form */}
        <section className="py-20 px-6">
          <div className="max-w-2xl mx-auto">
            <h2 className="mb-8">Apply Now</h2>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <Input label="Full Name" type="text" required />
                <Input label="Email" type="email" required />
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                <Input label="Age" type="number" required />
                <Input label="Height (cm)" type="number" required />
                <Input label="Phone" type="tel" />
              </div>
              <Input
                label="Instagram Handle"
                type="text"
                placeholder="@yourhandle"
              />

              <div className="flex flex-col gap-2 w-full">
                <label className="text-sm font-medium text-gray-light uppercase tracking-wider">
                  Upload Photos (Max 5)
                </label>
                <input
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={(e) => setFiles(e.target.files)}
                  className="w-full px-4 py-3 bg-black-graphite border border-gray-mid text-white-off text-base
                    file:mr-4 file:py-2 file:px-4 file:border-0 file:bg-black-soft file:text-white-off
                    file:cursor-pointer hover:file:bg-gray-mid transition-all"
                />
                {files && (
                  <p className="text-sm text-gray-light">
                    {files.length} file(s) selected
                  </p>
                )}
              </div>

              <Textarea
                label="Tell Us About Yourself"
                placeholder="Previous experience, interests, goals..."
                rows={5}
              />

              <Button
                variant="primary"
                type="submit"
                className="w-full md:w-auto"
              >
                Submit Application
              </Button>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
