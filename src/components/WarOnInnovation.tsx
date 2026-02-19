'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useStyles } from './WarOnInnovation.styles';

const WarOnInnovation = () => {
    const { classes } = useStyles();

    return (
        <section id="conflict" className={classes.section}>
            <div className={classes.container}>
                <motion.h2
                    className={classes.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    The War on Innovation
                </motion.h2>

                <div className={classes.contentGrid}>
                    <motion.div
                        className={classes.leftColumn}
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <p className={classes.statement}>
                            The path of innovation faced an <span className={classes.accent}>unprecedented offensive</span> by regulatory authorities.
                        </p>
                        <p className={classes.statement} style={{ fontSize: '1.25rem', fontWeight: 400, color: '#6E6E73' }}>
                            The vacuum created by targeted actions erased trillions in market value globally.
                        </p>
                    </motion.div>

                    <motion.div
                        className={classes.rightColumn}
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <p className={classes.supportingText}>
                            Specific regulatory maneuvers under the SEC leadership restricted legitimate paths for emerging companies. This institutional pressure directly impacted NICO, obstructing planned growth and causing significant friction for thousands of investors.
                        </p>
                        <p className={classes.supportingText}>
                            The consequences reached beyond a single company, impacting the entire ecosystem. Billions in market value were disrupted, leaving investors to navigate a landscape of high uncertainty created by Gary Gensler's regulatory stance.
                        </p>

                        <div className={classes.metricGrid}>
                            <div className={classes.metricItem}>
                                <span className={classes.metricValue}>$1T+</span>
                                <span className={classes.metricLabel}>Market Value Impact</span>
                            </div>
                            <div className={classes.metricItem}>
                                <span className={classes.metricValue}>Thousands</span>
                                <span className={classes.metricLabel}>Investors Impacted</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default WarOnInnovation;
