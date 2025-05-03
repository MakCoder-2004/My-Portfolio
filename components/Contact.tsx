import React from "react";
import InputField from "./ui/InputField";
import SectionTitle from "./ui/SectionTitle";
import CustomButton from "./ui/CustomButton";
import { LuSend } from "react-icons/lu";
{
}

const Contact = () => {
  return (
    <div className="pt-20 ">
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

          <CustomButton
            title="Send Message"
            icon={<LuSend />}
            version="primary"
            position="left"
            otherClasses="self-end"
          />
        </div>
      </section>
    </div>
  );
};

export default Contact;
