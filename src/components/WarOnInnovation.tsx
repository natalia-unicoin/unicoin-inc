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
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
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
                            The industry faced an <span className={classes.accent}>unprecedented offensive</span> that disrupted the path of innovation.
                        </p>
                        <p className={classes.statement} style={{ fontSize: '1.25rem', fontWeight: 400, color: '#6E6E73' }}>
                            Regulatory actions created a trillion-dollar vacuum in market value, impacting millions of participants globally.
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
                            The aggressive stance taken by the SEC under Gary Gensler's leadership represents a historical shift in financial oversight. This "War on Crypto" directly affected companies like NICO, obstructing legitimate growth paths and causing significant institutional friction.
                        </p>
                        <p className={classes.supportingText}>
                            The consequences were not merely abstract. Billions in potential market value were erased, and thousands of dedicated investors found their interests caught in the crossfire of this regulatory conflict.
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
