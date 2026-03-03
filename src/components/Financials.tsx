'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useStyles } from './Financials.styles';

const Financials = () => {
    const { classes } = useStyles();

    const dataCards = [
        {
            value: "$1.2B",
            label: "Total Assets Value",
            title: "Treasury Performance Overview",
            actionText: "Access Data"
        },
        {
            value: "100%",
            label: "Debt-Free Ratio",
            title: "Capital Structure Summary",
            actionText: "Review Structure"
        },
        {
            value: "Q4",
            label: "FY 2025 Release",
            title: "Quarterly Reports",
            actionText: "View Reports"
        },
        {
            value: "SEC",
            label: "Regulatory Alignment",
            title: "Disclosure Statements",
            actionText: "Read Statements"
        }
    ];

    return (
        <section id="financials" className={classes.section}>
            <div className={classes.container}>
                <motion.div
                    className={classes.header}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className={classes.title}>
                        Financials
                    </h2>
                </motion.div>

                <div className={classes.grid}>
                    {dataCards.map((card, index) => (
                        <motion.div
                            key={index}
                            className={classes.card}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: 0.1 * index }}
                        >
                            <div className="flex flex-col">
                                <span className={classes.statValue}>{card.value}</span>
                                <span className={classes.statLabel}>{card.label}</span>
                                <h3 className={classes.cardTitle}>{card.title}</h3>
                            </div>
                            <a href="#" className={classes.cardAction}>
                                {card.actionText}
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Financials;
