"use client";
import React, { useRef, useEffect, useState } from "react";

interface InputFieldProps {
  placeholder?: string;
  type?: string;
  name?: string;
  value?: string;
  onChange?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  className?: string;
  inputType?: "normal" | "textarea";
}

const InputField: React.FC<InputFieldProps> = ({
  placeholder = "Enter text",
  type = "text",
  name = "text",
  value,
  onChange,
  className = "",
  inputType = "normal",
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const cursorRef = useRef<HTMLSpanElement>(null);
  const [textareaHeight, setTextareaHeight] = useState("auto");

  useEffect(() => {
    const handleFocus = () => {
      if (cursorRef.current) {
        cursorRef.current.classList.remove("hidden");
        cursorRef.current.classList.add("animate-blink");
      }
    };

    const handleBlur = () => {
      if (cursorRef.current) {
        cursorRef.current.classList.add("hidden");
        cursorRef.current.classList.remove("animate-blink");
      }
    };

    const currentElement = inputRef.current || textareaRef.current;
    if (currentElement) {
      currentElement.addEventListener("focus", handleFocus);
      currentElement.addEventListener("blur", handleBlur);
    }

    return () => {
      if (currentElement) {
        currentElement.removeEventListener("focus", handleFocus);
        currentElement.removeEventListener("blur", handleBlur);
      }
    };
  }, []);

  // Auto-resize textarea based on content
  useEffect(() => {
    if (inputType === "textarea" && textareaRef.current) {
      const minHeight = parseInt(
        className.includes("min-h-")
          ? className.match(/min-h-\[(\d+)px\]/)?.[1] || "200"
          : "200"
      );

      textareaRef.current.style.height = "auto";
      const newHeight = Math.max(textareaRef.current.scrollHeight, minHeight);
      textareaRef.current.style.height = `${newHeight}px`;
      setTextareaHeight(`${newHeight}px`);
    }
  }, [value, inputType, className]);

  return (
    <div className="relative w-full">
      {inputType === "textarea" ? (
        <>
          <textarea
            ref={textareaRef}
            className={` 
              w-full px-4 py-3 text-md bg-main backdrop-blur-sm
              border-2 border-purple-500 rounded-lg outline-none transition-all duration-200 ease-in-out
              shadow-[0_4px_20px_-5px_rgba(168,85,247,0.3)] text-white resize-y
              hover:shadow-[0_8px_30px_-5px_rgba(168,85,247,0.4)] hover:-translate-y-0.5
              focus:bg-white/5 focus:text-white focus:border-purple-500 
              focus:shadow-[0_8px_40px_-5px_rgba(168,85,247,0.6)] focus:animate-shake
              placeholder:text-purple-200/70 focus:placeholder:text-purple-100 ${className}
              ${value ? "tracking-[0.5px]" : ""}
            `}
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            style={{
              height: textareaHeight,
              transition: "height 0.2s ease-in-out",
              minHeight: className.includes("min-h-")
                ? className.match(/min-h-\[(\d+)px\]/)?.[1] + "px"
                : "200px",
            }}
          />
  
        </>
      ) : (
        <>
          <input
            ref={inputRef}
            className={`
              w-full h-[60px] px-4 py-3 text-md bg-main backdrop-blur-sm
              border-2 border-purple-500 rounded-lg outline-none transition-all duration-300 ease-in-out
              shadow-[0_4px_20px_-5px_rgba(168,85,247,0.3)] text-white
              hover:shadow-[0_8px_30px_-5px_rgba(168,85,247,0.4)] hover:-translate-y-0.5
              focus:bg-white/5 focus:text-white focus:border-purple-500 
              focus:shadow-[0_8px_40px_-5px_rgba(168,85,247,0.6)] focus:animate-shake
              placeholder:text-purple-200/70 focus:placeholder:text-purple-100 ${className}
              ${value ? "font-medium tracking-[0.5px]" : ""}
            `}
            name={name}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
          />
          <span
            ref={cursorRef}
            className={`
              absolute right-4 top-1/2 -translate-y-1/2 text-purple-300 hidden
              ${value ? "text-white" : ""}
            `}
          >
            |
          </span>
        </>
      )}
    </div>
  );
};

export default InputField;
