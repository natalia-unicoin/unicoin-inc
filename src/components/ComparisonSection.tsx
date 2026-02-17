'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useStyles } from './ComparisonSection.styles';

const ComparisonSection = () => {
    const { classes } = useStyles();

    const comparisonData = [
        {
            feature: "Financial Risk",
            traditional: "High leverage and substantial debt",
            transparentBusiness: "100% Debt-Free"
        },
        {
            feature: "Asset Strategy",
            traditional: "Buying assets at market prices",
            transparentBusiness: "Holding issued assets and strategic swaps"
        },
        {
            feature: "Management",
            traditional: "Passive \"HODL\" approach",
            transparentBusiness: "AI-powered active trading"
        },
        {
            feature: "Growth Goal",
            traditional: "High-growth proxy for Bitcoin",
            transparentBusiness: "Diversified digital asset growth"
        }
    ];

    return (
        <section id="comparison" className={classes.section}>
            <div className={classes.container}>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className={classes.title}
                >
                    A Smarter Way to<br />Build Digital Asset Value
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className={classes.subtitle}
                >
                    Comparing traditional leveraged models with TransparentBusiness’s debt-free, AI-driven strategy.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className={classes.tableWrapper}
                >
                    <table className={classes.table}>
                        <thead>
                            <tr>
                                <th className={classes.th}>Feature</th>
                                <th className={classes.th}>Traditional DAT Model</th>
                                <th className={`${classes.th} ${classes.thBrand}`}>The TransparentBusiness Strategy</th>
                            </tr>
                        </thead>
                        <tbody>
                            {comparisonData.map((row, index) => (
                                <tr key={index} className={classes.highlightRow}>
                                    <td className={`${classes.td} ${classes.featureName}`}>{row.feature}</td>
                                    <td className={`${classes.td} ${classes.traditional}`}>{row.traditional}</td>
                                    <td className={`${classes.td} ${classes.brandHighlight} ${index === comparisonData.length - 1 ? classes.lastTdBrand : ''}`}>
                                        {row.transparentBusiness}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </motion.div>
            </div>
        </section>
    );
};

export default ComparisonSection;
