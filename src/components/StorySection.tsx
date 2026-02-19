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
                        The Story Behind The Evolution
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

                <div className={classes.contentGrid}>
                    <motion.div
                        className={classes.card}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <h3 className={classes.cardTitle}>The Path to NYSE</h3>
                        <p className={classes.cardText}>
                            TransparentBusiness was engineered with a clear institutional objective: to become the first publicly traded digital asset company on the New York Stock Exchange (NYSE), establishing a high standard for transparency in emerging markets.
                        </p>
                    </motion.div>

                    <motion.div
                        className={classes.card}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <h3 className={classes.cardTitle}>Regulatory Realignment</h3>
                        <p className={classes.cardText}>
                            The intensification of the "War on Crypto" and specific targeting by the SEC forced a critical decision. Evolution was not a choice, but a strategic imperative to protect investor interests and maintain company integrity in a shifting landscape.
                        </p>
                    </motion.div>
                </div>

                <motion.div
                    className={classes.highlightRow}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                >
                    <span className={classes.imperativeLabel}>Strategic Imperative</span>
                    <h3 className={classes.imperativeTitle}>Protecting Value through Resilience</h3>
                    <p className={classes.imperativeDescription}>
                        TBIZ represents more than a name change; it is a structural pivot designed to lead with high-standard transparency in the next era of institutional digital asset management.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default StorySection;
