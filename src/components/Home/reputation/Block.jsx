import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import styles from "@/styles/home.module.css";

const Block = ({ data }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: 75 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={mainControls}
      transition={{ duration: 0.5, delay: data.id * 0.1 }}
    >
      <div className={styles["home-reputation__icon"]}>
        <img src={data.img} alt="иконка" />
      </div>
      <h4>{data.title}</h4>
      <p>{data.text}</p>
    </motion.div>
  );
};

export default Block;
