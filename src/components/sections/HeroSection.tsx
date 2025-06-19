"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { yupResolver } from "@hookform/resolvers/yup";
import { Check } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import * as yup from "yup";

// Form validation schema
const schema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter a valid email")
    .required("Email is required"),
});

type FormData = yup.InferType<typeof schema>;

const HeroSection = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

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
      console.log("Newsletter signup:", data.email);
      toast.success("Successfully subscribed");
      setIsSubmitted(true);
      reset();
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    } catch {
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <section className="relative flex items-center justify-center overflow-hidden bg-white">
      {/* Content */}
      <div className="relative z-10 w-full pt-20 lg:pt-0">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-20">
          {/* Left Content */}
          <div className="space-y-8 px-4 text-center lg:pl-28 lg:text-left">
            <div className="space-y-6">
              <h1 className="animate-fade-in font-roboto-condensed text-3xl font-bold leading-tight tracking-tight-2 text-brand-text sm:text-4xl md:text-5xl lg:text-[56px]">
                Lorem ipsum dolor sit amet
              </h1>

              <p className="animate-slide-up mx-auto max-w-2xl font-inter text-base leading-relaxed text-gray-700 sm:text-lg md:text-xl lg:mx-0">
                Lorem ipsum dolor sit amet consectetur. Enim metus cras congue
                quis elit sociis. Sed mi rhoncus id habitant. In urna tellus
                nisl platea morbi libero imperdiet neque. Justo suspendisse
                tristique posuere quis eget viterra. Nunc euismod ultrices etiam
                nulla habitasse.
              </p>
            </div>

            {/* Newsletter Form */}
            <div className="animate-slide-up space-y-4">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="mx-auto flex max-w-md flex-col gap-4 sm:flex-row lg:mx-0"
              >
                <div className="flex-1">
                  <Input
                    {...register("email")}
                    type="email"
                    placeholder="Enter your email"
                    className={`h-12 border-gray-300 bg-white text-brand-text placeholder:text-gray-500 focus:border-brand-primary ${
                      errors.email ? "border-red-500" : ""
                    }`}
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.email.message}
                    </p>
                  )}
                </div>
                <Button
                  type="submit"
                  disabled={isSubmitting || isSubmitted}
                  className="h-12 bg-brand-primary px-8 font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-secondary hover:shadow-lg disabled:opacity-50"
                >
                  {isSubmitted ? (
                    <span className="flex items-center gap-2">
                      {/* <Check className="h-4 w-4" /> */}
                      Submitted
                    </span>
                  ) : isSubmitting ? (
                    "Submitting..."
                  ) : (
                    "Submit"
                  )}
                </Button>
              </form>

              {/* No Credit Card Required */}
              <div className="flex items-center justify-center gap-2 text-gray-600 lg:justify-start">
                <div className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-brand-primary">
                  <Check className="h-3 w-3 text-white" />
                </div>
                <span className="font-inter text-sm">
                  No credit card required!
                </span>
              </div>
            </div>
          </div>

          {/* Right Content - Motorcycle Image */}
          <div className="relative h-full w-full">
            <div className="relative h-[400px] w-full sm:h-[500px] md:h-[600px] lg:h-screen lg:max-h-[900px]">
              <Image
                src="/motorcycles/night-riders.webp"
                alt="Motorcycle rider"
                fill
                priority
                className="animate-fade-in object-cover shadow-2xl lg:[clip-path:polygon(20%_0,100%_0,100%_100%,0%_100%)]"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {/* Bottom blur gradient overlay */}
              <div className="absolute inset-x-0 bottom-0 h-3 bg-gradient-to-t from-white/100 to-transparent backdrop-blur-sm lg:[clip-path:polygon(0.35%_0,100%_0,100%_100%,0%_100%)]"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden lg:flex">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div> */}
    </section>
  );
};

export default HeroSection;
