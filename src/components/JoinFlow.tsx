'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { getImagePath } from '@/utils/image';
import { useModal } from '@/context/ModalContext';
import { useStyles } from './JoinFlow.styles';

const JoinFlow = () => {
    const { classes } = useStyles();
    const { openJoinModal } = useModal();
    return (
        <section className={classes.section}>
            {/* Background Image */}
            <div className={classes.bgWrapper}>
                <img
                    src={getImagePath("assets/unicoin-cta.png")}
                    alt="TransparentBusiness"
                    className={classes.bgImage}
                />
                {/* Gradient Overlay for Text Readability - Lighter */}
                <div className={classes.gradientOverlay} />
            </div>

            <div className={classes.container}>
                <div className={classes.contentWrapper}>
                    <motion.h2
                        className={classes.title}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        Join Us in Shaping<br />
                        the Future of Finance
                    </motion.h2>

                    <motion.p
                        className={classes.description}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </motion.p>

                    <motion.div
                        className={classes.buttonGroup}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <button
                            onClick={() => window.open("https://unicoin.com", "_blank")}
                            className={classes.primaryButton}
                        >
                            Invest
                        </button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default JoinFlow;
