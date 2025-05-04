"use client";
import { cn } from "@/lib/utils";
import { IconLayoutNavbarCollapse } from "@tabler/icons-react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { useRef, useState } from "react";

export const FloatingDock = ({ items, desktopClassName, mobileClassName }) => {
  return (
    <>
      <FloatingDockDesktop items={items} className={desktopClassName} />
      <FloatingDockMobile items={items} className={mobileClassName} />
    </>
  );
};

const FloatingDockMobile = ({ items, className }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={cn("relative block md:hidden z-100", className)}>
      <AnimatePresence>
        {open && (
          <motion.div
            layoutId="nav"
            className="absolute inset-x-0 bottom-full mb-2 flex flex-col gap-2"
          >
            {items.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 10 }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: 10,
                  transition: {
                    delay: idx * 0.05,
                  },
                }}
                
              >
                <a
                  href={item.href}
                  key={item.title}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-900 hover:bg-gradient-to-r hover:from-purple-500 hover:to-purple-700 transition-colors"
                >
                  <div className="h-4 w-4 text-neutral-00">{item.icon}</div>
                </a>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      <button
        onClick={() => setOpen(!open)}
        className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-900 hover:hover:bg-gradient-to-r hover:from-purple-500 hover:to-purple-700 transition-colors"
      >
        <IconLayoutNavbarCollapse className="h-5 w-5 text-neutral-200" />
      </button>
    </div>
  );
};

const FloatingDockDesktop = ({ items, className }) => {
  let mouseY = useMotionValue(Infinity);
  return (
    <motion.div
      onMouseMove={(e) => mouseY.set(e.pageY)}
      onMouseLeave={() => mouseY.set(Infinity)}
      className={cn(
        "fixed left-4 top-1/2 -translate-y-1/2 hidden h-auto flex-col items-center gap-4 rounded-2xl bg-neutral-900/10 backdrop-blur-sm p-4 md:flex",
        "border border-neutral-700 shadow-lg",
        className
      )}
    >
      {items.map((item) => (
        <VerticalIconContainer mouseY={mouseY} key={item.title} {...item} />
      ))}
    </motion.div>
  );
};

function VerticalIconContainer({ mouseY, title, icon, href }) {
  let ref = useRef(null);

  let distance = useTransform(mouseY, (val) => {
    let bounds = ref.current?.getBoundingClientRect() ?? { y: 0, height: 0 };
    return val - bounds.y - bounds.height / 2;
  });

  let widthTransform = useTransform(distance, [-150, 0, 150], [44, 60, 44]);
  let heightTransform = useTransform(distance, [-150, 0, 150], [44, 60, 44]);

  let widthTransformIcon = useTransform(distance, [-150, 0, 150], [20, 28, 20]);
  let heightTransformIcon = useTransform(
    distance,
    [-150, 0, 150],
    [20, 28, 20]
  );

  let width = useSpring(widthTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  let height = useSpring(heightTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  let widthIcon = useSpring(widthTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  let heightIcon = useSpring(heightTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const [hovered, setHovered] = useState(false);

  return (
    <a href={href} className="relative flex items-center">
      <motion.div
        ref={ref}
        style={{ width, height }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="flex aspect-square items-center justify-center rounded-full bg-neutral-800 hover:hover:bg-gradient-to-r hover:from-purple-500 hover:to-purple-700  transition-colors"
      >
        <motion.div
          style={{ width: widthIcon, height: heightIcon }}
          className="flex items-center justify-center text-gray-200"
        >
          {icon}
        </motion.div>
      </motion.div>

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 20 }}
            exit={{ opacity: 0, x: -2 }}
            className="absolute left-full ml-2 whitespace-nowrap rounded-md bg-neutral-800 px-3 py-1 text-sm text-gray-200 shadow-md"
          >
            {title}
          </motion.div>
        )}
      </AnimatePresence>
    </a>
  );
}
