import React from "react";
import InputField from "./ui/InputField";
import SectionTitle from "./ui/SectionTitle";
import { LuSend } from "react-icons/lu";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-20 mx-auto px-4 flex flex-col items-center justify-center"
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
            className="relative cursor-pointer group flex items-center justify-center gap-2 w-full max-w-[220px] px-6 py-3 font-medium rounded-lg overflow-hidden transition-all duration-300"
          >
            {/* Gradient background */}
            <span className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:from-pink-500 group-hover:to-purple-500 transition duration-300 flex items-center justify-center"></span>

            {/* Button content */}
            <span className="relative z-10 text-white text-sm font-primary transition-transform duration-300 group-hover:translate-x-1 font-medium uppercase">
              Send Message
            </span>
            <LuSend className="size-4 relative z-10 text-white text-lg transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
