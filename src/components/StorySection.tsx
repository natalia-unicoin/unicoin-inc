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
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
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

                <div className={classes.contentGrid}>
                    <motion.div
                        className={classes.card}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <h3 className={classes.cardTitle}>Vision Meets Reality</h3>
                        <p className={classes.cardText}>
                            TransparentBusiness began with an ambitious roadmap: to become the first publicly traded digital asset company on the NYSE, bringing absolute transparency to emerging markets.
                        </p>
                    </motion.div>

                    <motion.div
                        className={classes.card}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <h3 className={classes.cardTitle}>The Regulatory Shift</h3>
                        <p className={classes.cardText}>
                            The emergence of a global "War on Crypto" created an environment of unprecedented uncertainty. Defensive evolution became a strategic necessity to protect company integrity and investor value.
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
