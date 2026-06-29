"use client";

import { motion, type HTMLMotionProps, type Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.25, 0.4, 0.25, 1] as const },
  },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};

type DivProps = HTMLMotionProps<"div">;

export function ScrollReveal({
  delay = 0,
  ...props
}: DivProps & { delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, ease: [0.25, 0.4, 0.25, 1], delay }}
      {...props}
    />
  );
}

export function StaggerContainer({ ...props }: DivProps) {
  return (
    <motion.div
      variants={stagger}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
      {...props}
    />
  );
}

export function StaggerItem({ ...props }: DivProps) {
  return <motion.div variants={fadeUp} {...props} />;
}
