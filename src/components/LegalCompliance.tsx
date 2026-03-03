'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useStyles } from './LegalCompliance.styles';

const LegalCompliance = () => {
    const { classes } = useStyles();

    const legalLinks = [
        "Privacy Policy",
        "Terms of Use",
        "Forward-Looking Statements",
        "Risk Disclosures",
        "Compliance Statements"
    ];

    return (
        <section id="legal" className={classes.section}>
            <div className={classes.container}>
                <motion.div
                    className={classes.header}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className={classes.title}>
                        Legal & Compliance
                    </h2>
                </motion.div>

                <motion.div
                    className={classes.grid}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                >
                    {legalLinks.map((link, index) => (
                        <a key={index} href="#" className={classes.linkItem}>
                            {link}
                        </a>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default LegalCompliance;
