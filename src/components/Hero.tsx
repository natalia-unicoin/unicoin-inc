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
                <motion.h1
                    className={classes.title}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                >
                    TransparentBusiness<br />is Evolving.
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                >
                    <p className={classes.subtitle}>
                        From Unicoin to TBIZ.<br />
                        A new chapter built on transparency, resilience, and leadership.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                >
                    <p className={classes.description}>
                        Evolving Unicoin into TBIZ: A strategic shift toward absolute financial transparency and long-term institutional growth.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className={classes.ctaContainer}
                >
                    <button
                        onClick={openJoinModal}
                        className={classes.ctaButton}
                    >
                        DISCOVER THE TRANSITION
                    </button>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
