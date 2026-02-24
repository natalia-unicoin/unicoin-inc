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

                <div className={classes.contentWrapper}>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <p className={classes.statement}>
                            The <span className={classes.accent}>regulatory environment</span> created significant volatility across the global digital asset ecosystem, contributing to trillions in market value disruption and heightened uncertainty for investors and emerging companies alike.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <p className={classes.supportingText}>
                            For many participants, this period represented not only financial instability but also a loss of strategic momentum. Our response was guided by one priority: protecting stakeholders while preserving long-term institutional viability.
                        </p>
                    </motion.div>

                    <motion.div
                        className={classes.metricGrid}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
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
