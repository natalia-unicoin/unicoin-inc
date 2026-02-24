'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useStyles } from './WarOnInnovation.styles';

const WarOnInnovation = () => {
    const { classes } = useStyles();
    const containerRef = useRef<HTMLElement>(null);

    // Track scroll progress strictly within this section's bounds
    // offset "start end" means animation starts when top of container hits bottom of viewport
    // offset "end start" means animation ends when bottom of container hits top of viewport
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    // --- Title Animation ---
    // Fades in early, fades out as we leave
    const titleOpacity = useTransform(scrollYProgress, [0.1, 0.2, 0.8, 0.9], [0, 1, 1, 0]);

    // --- Main Statement Animation ---
    // Moves down slightly (parallax) and fades out quickly as we reach the middle
    const statementY = useTransform(scrollYProgress, [0.2, 0.5], [0, 100]);
    const statementOpacity = useTransform(scrollYProgress, [0.2, 0.4, 0.5], [0, 1, 0]);

    // --- Supporting Text Animation ---
    // Appears right after the statement starts fading out
    const supportY = useTransform(scrollYProgress, [0.4, 0.6], [50, 0]);
    const supportOpacity = useTransform(scrollYProgress, [0.3, 0.45, 0.6, 0.7], [0, 1, 1, 0]);

    // --- Metrics Grid Animation ---
    // Surges up from the bottom rapidly in the second half of the section
    const metricsY = useTransform(scrollYProgress, [0.55, 0.8], [150, 0]);
    const metricsOpacity = useTransform(scrollYProgress, [0.5, 0.7, 0.9], [0, 1, 1]);
    const metricsScale = useTransform(scrollYProgress, [0.5, 0.7], [0.8, 1]);

    return (
        <section id="conflict" className={classes.section} ref={containerRef}>
            <div className={classes.container}>
                <motion.h2
                    className={classes.title}
                    style={{ opacity: titleOpacity }}
                >
                    The War on Innovation
                </motion.h2>

                <div className={classes.contentWrapper}>
                    {/* Main Statement fades out as you scroll down */}
                    <motion.div
                        className={classes.statementContainer}
                        style={{
                            opacity: statementOpacity,
                            y: statementY
                        }}
                    >
                        <p className={classes.statement}>
                            The <span className={classes.accent}>regulatory environment</span> created significant volatility across the global digital asset ecosystem, contributing to trillions in market value disruption and heightened uncertainty for investors and emerging companies alike.
                        </p>
                    </motion.div>

                    {/* Supporting Text smoothly replaces main text */}
                    <motion.div
                        className={classes.supportContainer}
                        style={{
                            opacity: supportOpacity,
                            y: supportY
                        }}
                    >
                        <p className={classes.supportingText}>
                            For many participants, this period represented not only financial instability but also a loss of strategic momentum. Our response was guided by one priority: protecting stakeholders while preserving long-term institutional viability.
                        </p>
                    </motion.div>

                    {/* Massive Metrics fly up from bottom to anchor the climax */}
                    <motion.div
                        className={classes.metricGrid}
                        style={{
                            opacity: metricsOpacity,
                            y: metricsY,
                            scale: metricsScale
                        }}
                    >
                        <div className={classes.metricItem}>
                            <span className={classes.metricValue}>$1T+</span>
                            <span className={classes.metricLabel}>Market Value Impact</span>
                        </div>
                        <div className={classes.metricDivider} />
                        <div className={classes.metricItem}>
                            <span className={classes.metricValue}>Thousands</span>
                            <span className={classes.metricLabel}>Investors Impacted</span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default WarOnInnovation;
