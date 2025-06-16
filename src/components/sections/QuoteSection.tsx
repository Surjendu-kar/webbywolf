"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { yupResolver } from "@hookform/resolvers/yup";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import * as yup from "yup";

// Form validation schema
const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup
    .string()
    .email("Please enter a valid email")
    .required("Email is required"),
  phone: yup
    .string()
    .matches(/^[0-9]{10}$/, "Please enter a valid 10-digit phone number")
    .required("Phone number is required"),
  timeFrame: yup.string().required("Time frame is required"),
  size: yup.string().required("Size is required"),
  quantity: yup.string().required("Quantity is required"),
  description: yup
    .string()
    .min(20, "Description must be at least 20 characters")
    .required("Project description is required"),
});

type FormData = yup.InferType<typeof schema>;

const QuoteSection = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      // Simulate API call with timeout
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log("Form data:", data);
      toast.success("Form submitted successfully!");
      reset();
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          {/* Section Title */}
          <h2 className="mb-6 text-center font-roboto-condensed text-3xl font-bold text-brand-text md:text-5xl lg:mb-12">
            REQUEST A QUOTE
          </h2>

          {/* Form */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-4 md:space-y-6"
          >
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
                  {...register("name")}
                  type="text"
                  id="name"
                  className={`border-gray-200 bg-gray-50 py-2 font-inter ${
                    errors.name ? "border-red-500" : ""
                  }`}
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.name.message}
                  </p>
                )}
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block font-inter text-sm text-gray-700"
                >
                  E-mail
                </label>
                <Input
                  {...register("email")}
                  type="email"
                  id="email"
                  className={`border-gray-200 bg-gray-50 py-2 font-inter ${
                    errors.email ? "border-red-500" : ""
                  }`}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.email.message}
                  </p>
                )}
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
                  {...register("phone")}
                  type="tel"
                  id="phone"
                  className={`border-gray-200 bg-gray-50 py-2 font-inter ${
                    errors.phone ? "border-red-500" : ""
                  }`}
                />
                {errors.phone && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.phone.message}
                  </p>
                )}
              </div>
              <div>
                <label
                  htmlFor="timeFrame"
                  className="mb-2 block font-inter text-sm text-gray-700"
                >
                  Time Frame*
                </label>
                <select
                  {...register("timeFrame")}
                  id="timeFrame"
                  className={`w-full rounded-md border border-gray-200 bg-gray-50 px-4 py-2 font-inter text-gray-900 outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary ${
                    errors.timeFrame ? "border-red-500" : ""
                  }`}
                >
                  <option value="">Choose Time Frame</option>
                  <option value="1-2weeks">1-2 Weeks</option>
                  <option value="2-4weeks">2-4 Weeks</option>
                  <option value="1-2months">1-2 Months</option>
                  <option value="2-3months">2-3 Months</option>
                </select>
                {errors.timeFrame && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.timeFrame.message}
                  </p>
                )}
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
                  {...register("size")}
                  id="size"
                  className={`w-full rounded-md border border-gray-200 bg-gray-50 px-4 py-2 font-inter text-gray-900 outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary ${
                    errors.size ? "border-red-500" : ""
                  }`}
                >
                  <option value="">Choose Size</option>
                  <option value="small">Small</option>
                  <option value="medium">Medium</option>
                  <option value="large">Large</option>
                </select>
                {errors.size && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.size.message}
                  </p>
                )}
              </div>
              <div>
                <label
                  htmlFor="quantity"
                  className="mb-2 block font-inter text-sm text-gray-700"
                >
                  Quantity*
                </label>
                <select
                  {...register("quantity")}
                  id="quantity"
                  className={`w-full rounded-md border border-gray-200 bg-gray-50 px-4 py-2 font-inter text-gray-900 outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary ${
                    errors.quantity ? "border-red-500" : ""
                  }`}
                >
                  <option value="">Choose Quantity</option>
                  <option value="1-10">1-10</option>
                  <option value="11-50">11-50</option>
                  <option value="51-100">51-100</option>
                  <option value="100+">100+</option>
                </select>
                {errors.quantity && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.quantity.message}
                  </p>
                )}
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
                {...register("description")}
                id="description"
                rows={6}
                className={`w-full rounded-md border border-gray-200 bg-gray-50 px-4 py-2 font-inter text-gray-900 outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary ${
                  errors.description ? "border-red-500" : ""
                }`}
                placeholder="Choose a project type"
              ></textarea>
              {errors.description && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.description.message}
                </p>
              )}
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
                disabled={isSubmitting}
                className="bg-brand-primary px-8 py-2 font-inter font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-secondary hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-50"
              >
                {isSubmitting ? "Submitting..." : "Leorum Ipsum"}
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
