'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useStyles } from './StorySection.styles';

const StorySection = () => {
    const { classes } = useStyles();

    return (
        <section id="story" className={classes.section}>
            <div className={classes.container}>
                <div className={classes.header}>
                    <motion.h2
                        className={classes.title}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        The Story Behind the Evolution
                    </motion.h2>
                    <motion.p
                        className={classes.subtitle}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                    >
                        Navigating the transition from Unicoin to TBIZ through transparency and strategic resilience.
                    </motion.p>
                </div>

                <div className={classes.grid}>
                    <motion.div
                        className={classes.box}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <h4 className={classes.boxTitle}>The Path to NYSE</h4>
                        <p className={classes.boxText}>
                            Engineered with a clear institutional objective to become the first publicly traded digital asset company on the New York Stock Exchange, establishing a standard for transparency.
                        </p>
                    </motion.div>

                    <motion.div
                        className={classes.box}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <h4 className={classes.boxTitle}>Strategic Realignment</h4>
                        <p className={classes.boxText}>
                            Evolving to protect value, ensure regulatory clarity, and maintain integrity in a shifting landscape. A structural pivot designed to lead in the next era of digital asset management.
                        </p>
                    </motion.div>

                    <motion.div
                        className={classes.box}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <h4 className={classes.boxTitle}>Institutional Discipline</h4>
                        <p className={classes.boxText}>
                            Our evolution reinforces a commitment to clear governance frameworks, long-term sustainability, responsible capital management, and proactive regulatory alignment.
                        </p>
                    </motion.div>

                    <motion.div
                        className={classes.box}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <h4 className={classes.boxTitle}>A Commitment to Transparency</h4>
                        <p className={classes.boxText}>
                            Transparency is not a narrative device; it is an operational principle structured around clear governance standards, financial controls, and measurable accountability.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default StorySection;
