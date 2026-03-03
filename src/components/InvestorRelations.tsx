'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useStyles } from './InvestorRelations.styles';

const InvestorRelations = () => {
    const { classes } = useStyles();

    const dataCards = [
        {
            title: "Investor Deck",
            actionText: "Download Deck"
        },
        {
            title: "Contact IR",
            actionText: "Get in Touch"
        },
        {
            title: "Institutional FAQs",
            actionText: "View FAQs"
        },
        {
            title: "Analyst Inquiry Form",
            actionText: "Submit Inquiry"
        }
    ];

    return (
        <section id="investors" className={classes.section}>
            <div className={classes.container}>
                <motion.div
                    className={classes.header}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className={classes.title}>
                        Investor Relations
                    </h2>
                </motion.div>

                <div className={classes.grid}>
                    {dataCards.map((card, index) => (
                        <motion.div
                            key={index}
                            className={classes.card}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: 0.1 * index }}
                        >
                            <h3 className={classes.cardTitle}>{card.title}</h3>
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

export default InvestorRelations;
