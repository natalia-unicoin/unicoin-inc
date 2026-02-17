'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { getImagePath } from '@/utils/image';
import { useModal } from '@/context/ModalContext';
import { useStyles } from './Hero.styles';

const Hero = () => {
    const { classes } = useStyles();
    const { openJoinModal } = useModal();
    return (
        <section className={classes.section}>
            {/* Background Video */}
            <div className={classes.bgWrapper}>
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className={classes.bgImage}
                >
                    <source src={getImagePath("AdobeStock_1661291666.mp4")} type="video/mp4" />
                </video>
                {/* Gradient Overlay for Text Readability */}
                <div className={classes.overlay} />
            </div>

            {/* Content */}
            <div className={classes.content}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                    <p className={classes.subtitle}>Redefining the Future of Corporate Reserves</p>
                </motion.div>

                <motion.h1
                    className={classes.title}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                >
                    TransparentBusiness:<br />
                    The Debt-Free Evolution<br />
                    of Digital Asset Treasury
                </motion.h1>


                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className={classes.ctaContainer}
                >
                    <button
                        onClick={openJoinModal}
                        className={classes.ctaButton}
                    >
                        Learn More
                    </button>
                </motion.div>
            </div>

            {/* Beta Watermark */}
            <div className={classes.watermark}>
                <div className={classes.watermarkBadge}>
                    <span className={classes.watermarkText}>
                        Beta v1.0
                    </span>
                </div>
            </div>
        </section>
    );
};

export default Hero;
