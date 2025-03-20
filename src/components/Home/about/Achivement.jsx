import { motion, useAnimation, useInView } from "framer-motion";
import React, { useEffect, useRef } from "react";

import styles from "@/styles/home.module.css";

const Achivement = ({ data }) => {
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
      className={styles["home-achivement"]}
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: 75 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={mainControls}
      transition={{ duration: 0.5, delay: data.id * 0.1 }}
    >
      <span className={styles["home-achivement__count"]}>{data.count}</span>
      <span className={styles["home-achivement__type"]}>{data.type}</span>
      <span className={styles["home-achivement__text"]}>{data.text}</span>
    </motion.div>
  );
};

export default Achivement;
