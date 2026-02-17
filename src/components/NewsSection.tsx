'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useStyles } from './NewsSection.styles';
import { getImagePath } from '@/utils/image';

const NewsSection = () => {
    const { classes } = useStyles();

    const news = [
        {
            title: "Silvina Moschini teaches us the tools for entrepreneurship with AI",
            excerpt: "In an exclusive with Sale el Sol, Silvina Moschini shares her recommendations for launching a business with AI. \"We must not forget the role of social media as a product,\" the entrepreneur suggested.",
            tag: "Interview",
            date: "February 03, 2026",
            image: getImagePath("assets/news-1.png")
        },
        {
            title: "The Argentine PR Pro Strikes Back with a New AI Tool",
            excerpt: "The mockumentary, as a PR offensive tactic, could soon become a major trend, and the case of Moschini's crypto company might serve as a prime example.",
            tag: "Insight",
            date: "January 30, 2026",
            image: getImagePath("assets/news-2.jpg")
        },
        {
            title: "Crypto exchanges vs banks: what's at stake in the new digital asset regulation",
            excerpt: "The bill had initial backing from the crypto industry, but the latest modifications caused divisions within the ecosystem due to increased restrictions.",
            tag: "Regulation",
            date: "January 29, 2026",
            image: getImagePath("assets/news-3.jpg")
        }
    ];

    return (
        <section id="news" className={classes.section}>
            <div className={classes.container}>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className={classes.title}
                >
                    Latest from<br />TransparentBusiness
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className={classes.subtitle}
                >
                    Stay updated with our newest developments, strategic insights, and milestones in the evolution of digital asset treasury.
                </motion.p>

                <div className={classes.grid}>
                    {news.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={classes.newsCard}
                        >
                            <div className={classes.imageWrapper}>
                                <img src={item.image} alt={item.title} className={classes.image} />
                            </div>
                            <div className={classes.content}>
                                <span className={classes.tag}>{item.tag}</span>
                                <h3 className={classes.newsTitle}>{item.title}</h3>
                                <p className={classes.excerpt}>{item.excerpt}</p>
                                <span className={classes.date}>{item.date}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className={classes.buttonWrapper}
                >
                    <a
                        href="https://transparentbusiness.com/news"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={classes.learnMoreButton}
                    >
                        Learn More
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default NewsSection;
