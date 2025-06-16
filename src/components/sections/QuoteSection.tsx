import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const QuoteSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          {/* Section Title */}
          <h2 className="mb-6 text-center font-roboto-condensed text-3xl font-bold text-brand-text md:text-5xl lg:mb-12">
            REQUEST A QUOTE
          </h2>

          {/* Form */}
          <form className="space-y-4 md:space-y-6">
            {/* Name and Email Row */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block font-inter text-sm text-gray-700"
                >
                  Name
                </label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="border-gray-200 bg-gray-50 py-2 font-inter"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block font-inter text-sm text-gray-700"
                >
                  E-mail
                </label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="border-gray-200 bg-gray-50 py-2 font-inter"
                />
              </div>
            </div>

            {/* Phone and Time Frame Row */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <label
                  htmlFor="phone"
                  className="mb-2 block font-inter text-sm text-gray-700"
                >
                  Phone Number
                </label>
                <Input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  className="border-gray-200 bg-gray-50 py-2 font-inter"
                />
              </div>
              <div>
                <label
                  htmlFor="timeFrame"
                  className="mb-2 block font-inter text-sm text-gray-700"
                >
                  Time Frame*
                </label>
                <select
                  id="timeFrame"
                  name="timeFrame"
                  required
                  className="w-full rounded-md border border-gray-200 bg-gray-50 px-4 py-2 font-inter text-gray-900 outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary"
                >
                  <option value="">Choose Time Frame</option>
                  <option value="1-2weeks">1-2 Weeks</option>
                  <option value="2-4weeks">2-4 Weeks</option>
                  <option value="1-2months">1-2 Months</option>
                  <option value="2-3months">2-3 Months</option>
                </select>
              </div>
            </div>

            {/* Size and Quantity Row */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <label
                  htmlFor="size"
                  className="mb-2 block font-inter text-sm text-gray-700"
                >
                  Size*
                </label>
                <select
                  id="size"
                  name="size"
                  required
                  className="w-full rounded-md border border-gray-200 bg-gray-50 px-4 py-2 font-inter text-gray-900 outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary"
                >
                  <option value="">Choose Size</option>
                  <option value="small">Small</option>
                  <option value="medium">Medium</option>
                  <option value="large">Large</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="quantity"
                  className="mb-2 block font-inter text-sm text-gray-700"
                >
                  Quantity*
                </label>
                <select
                  id="quantity"
                  name="quantity"
                  required
                  className="w-full rounded-md border border-gray-200 bg-gray-50 px-4 py-2 font-inter text-gray-900 outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary"
                >
                  <option value="">Choose Quantity</option>
                  <option value="1-10">1-10</option>
                  <option value="11-50">11-50</option>
                  <option value="51-100">51-100</option>
                  <option value="100+">100+</option>
                </select>
              </div>
            </div>

            {/* Project Description */}
            <div>
              <label
                htmlFor="description"
                className="mb-2 block font-inter text-sm text-gray-700"
              >
                Please Describe Your Project*
              </label>
              <textarea
                id="description"
                name="description"
                rows={6}
                required
                className="w-full rounded-md border border-gray-200 bg-gray-50 px-4 py-2 font-inter text-gray-900 outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary"
                placeholder="Choose a project type"
              ></textarea>
            </div>

            {/* Terms and Privacy */}
            <div className="text-center text-sm text-[#3C3C3C]">
              By submitting this form you agree to our{" "}
              <Link
                href="/terms"
                className="font-semibold text-[#3C3C3C] underline hover:text-[#2b2b2b]"
              >
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link
                href="/privacy"
                className="font-semibold text-[#3C3C3C] underline hover:text-[#2b2b2b]"
              >
                Privacy Policy
              </Link>
              .
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <Button
                type="submit"
                className="bg-brand-primary px-8 py-2 font-inter font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-secondary hover:shadow-lg"
              >
                Leorum Ipsum
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default QuoteSection;
