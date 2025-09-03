import { motion, AnimatePresence } from "framer-motion";
import { createPortal } from "react-dom";
import MobileLinks from "../MobileLinks";

const Slide = ({ position = "right", Close }) => {
  if (typeof document === "undefined") return null;

  const variants = {
    hidden: {
      opacity: 0,
      x: position === "right" ? "100%" : "-100%",
    },

    visible: {
      opacity: 1,
      x: "0",
    },

    exit: {
      opacity: 0,
      x: position === "right" ? "100%" : "-100%",
    },
  };
  return createPortal(
    <>
      <AnimatePresence>
        <motion.div
          key="slider"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={variants}
          transition={{ type: "tween", duration: 0.4 }}
          className={` absolute top-10 ${position}-0 flex flex-col gap-4 px-6 py-2 w-64`}
        >
          <MobileLinks Close={Close} />
        </motion.div>
      </AnimatePresence>
    </>,
    document.body
  );
};

export default Slide;
