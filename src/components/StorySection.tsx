'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useStyles } from './StorySection.styles';

const StorySection = () => {
    const { classes } = useStyles();

    return (
        <section id="story" className={classes.section}>
            <div className={classes.container}>
                <motion.h2
                    className={classes.title}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                    The Story Behind the Evolution
                </motion.h2>

                <div className={classes.contentGrid}>
                    <motion.div
                        className={classes.textBlock}
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <p>
                            TransparentBusiness was conceived with a clear mission: to bring absolute financial transparency to the world of emerging assets. Our roadmap was ambitious, targeting a historic listing on the New York Stock Exchange to become the first publicly traded digital asset company on a major platform.
                        </p>
                    </motion.div>

                    <motion.div
                        className={classes.textBlock}
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <p>
                            However, the landscape shifted. The intensifying regulatory offensive, often described as the "War on Crypto," targeted industry innovators, creating an environment of unprecedented uncertainty. In this context, defending investor value and the company's integrity required a definitive structural evolution.
                        </p>
                    </motion.div>
                </div>

                <motion.div
                    className={classes.highlightRow}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                >
                    <div>
                        <span className={classes.imperativeLabel}>Strategic Imperative</span>
                        <p style={{ fontSize: '1.5rem', fontWeight: 500, marginTop: '8px' }}>
                            Protecting Value through Resilience.
                        </p>
                    </div>
                    <div style={{ maxWidth: '400px' }}>
                        <p style={{ color: '#6B7280', fontSize: '1rem' }}>
                            The transition to TBIZ is not merely a name change, but a strategic repositioning designed to navigate regulatory challenges while maintaining our leadership in transparent finance.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default StorySection;
