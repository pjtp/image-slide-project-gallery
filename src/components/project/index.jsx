"use client";

import styles from "./style.module.scss";
import { motion } from "framer-motion";
import { useState } from "react";

const anim = {
    initial: { width: 0 },
    open: { width: "auto", transition: { duration: 0.4, ease: [0.23, 1, 0.32, 1] } },
    closed: { width: 0 },
};

export default function index({ project }) {
    const [isActive, setIsActive] = useState(false);
    const { title1, title2, src } = project;
    return (
        <div
            onMouseEnter={() => {
                setIsActive(true);
            }}
            onMouseLeave={() => {
                setIsActive(false);
            }}
            className={styles.project}
        >
            <p>{title1}</p>
            <motion.div
                variants={anim}
                animate={isActive ? "open" : "closed"}
                className={styles.imgContainer}
            >
                <img
                    src="https://images.unsplash.com/photo-1734375119887-460f4b97dfaa?q=80&w=2831&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                    srcSet=""
                />
            </motion.div>
            <p>{title2}</p>
        </div>
    );
}
