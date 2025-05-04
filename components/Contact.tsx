import React from "react";
import InputField from "./ui/InputField";
import SectionTitle from "./ui/SectionTitle";
import { LuSend } from "react-icons/lu";

const Contact = () => {
  return (
    <div className="pt-20">
      <section
        id="Contact"
        className="container mx-auto px-4 py-16 flex flex-col items-center justify-center"
      >
        <div className="flex flex-col md:flex-row items-center justify-center">
          <SectionTitle
            title="Contact Me"
            subtitle="Let's connect! Send me a message and I'll get back to you soon."
          />
        </div>

        <div className="flex flex-col gap-6 w-full max-w-2xl mx-auto mt-8 px-4">
          <div className="flex flex-col md:flex-row gap-6 w-full">
            <InputField
              placeholder="Email Address"
              type="email"
              name="email"
              className="w-full md:flex-1"
            />
            <InputField
              placeholder="Title"
              type="text"
              name="title"
              className="w-full md:flex-1"
            />
          </div>
          <InputField
            placeholder="Message"
            type="text"
            name="message"
            className="w-full min-h-[200px]"
            inputType="textarea"
          />

          {/* Custom Send Button */}
          <div className="flex justify-center w-full mt-4">
            <button
              type="submit"
              className="relative group flex items-center justify-center gap-2 w-full max-w-[220px] px-6 py-3 font-medium rounded-lg overflow-hidden transition-all duration-300"
            >
              {/* Gradient background */}
              <span className="absolute inset-0 bg-gradient-to-r from-purple-500 to-[#818cf8] group-hover:from-purple-600 group-hover:to-[#818cf8] transition duration-300"></span>

              {/* Button content */}
              <span className="relative z-10 text-white text-sm md:text-base font-semibold tracking-wide">
                Send Message
              </span>
              <LuSend className="relative z-10 text-white text-lg transition-transform duration-300 group-hover:translate-x-1" />

            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
