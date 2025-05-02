import React from "react";

interface PrimaryLipUpButtonProps {
  title: string | React.ReactNode;
  icon?: React.ReactNode;
  position?: "left" | "right";
  handleClick?: () => void;
  otherClasses?: string;
  version?: "primary" | "secondary";
}

const CustomButton = ({
  title,
  icon,
  position = "right",
  handleClick,
  otherClasses = "",
  version = "primary",
}: PrimaryLipUpButtonProps) => {
  return version === "primary" ? (
    <div className="inline-block">
      <button
        className={`p-[3px] relative group cursor-pointer w-full`}
        onClick={handleClick}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-btn-secondary)] to-purple-500 rounded-lg transition-all duration-300 group-hover:opacity-80" />
        <div
          className={`${otherClasses} px-5 py-2 font-secondary bg-[var(--color-bg-main)] rounded-[6px] relative transition-all duration-200 text-[var(--color-text-main)] group-hover:text-white group-hover:bg-transparent flex items-center justify-center gap-2`}
        >
          {position === "left" && icon}
          {title}
          {position === "right" && icon}
        </div>
      </button>
    </div>
  ) : (
    <button
      className={`${otherClasses} flex items-center justify-center gap-2 cursor-pointer px-6 py-2 text-white rounded-lg font-bold transform transition duration-400 border border-white/20 hover:bg-white/10`}
      onClick={handleClick}
    >
      {position === "left" && icon}
      {title}
      {position === "right" && icon}
    </button>
  );
};

export default CustomButton;