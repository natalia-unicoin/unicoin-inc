'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { getImagePath } from '@/utils/image';
import { useStyles } from './HowItWorks.styles';

const HowItWorks = () => {
    const { classes } = useStyles();
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const scrollContainerRef = React.useRef<HTMLDivElement>(null);

    const steps = [
        {
            id: "01",
            title: <>A Debt-Free<br />Foundation</>,
            description: "Traditional models rely on issuing debt. Unicoin rejects this high-liability approach, ensuring growth is built on a sustainable financial foundation rather than borrowed capital.",
            color: "#000000",
            backgroundColor: "#f9f9f9"
        },
        {
            id: "02",
            title: <>Strategic Value<br />Creation</>,
            description: "Instead of buying external assets at market highs, we hold our issued unicoins and actively swap them for new cryptocurrencies with strong growth potential.",
            color: "#fcd144",
            backgroundColor: "#000000"
        },
        {
            id: "03",
            title: <>AI-Powered<br />Intelligence</>,
            description: "We utilize an affiliated AI-powered Collective Intelligence engine to trade cryptocurrencies, allowing for precise and active management that traditional models lack.",
            color: "#000000",
            backgroundColor: "#ffffff"
        },
        {
            id: "04",
            title: <>Modern Investor<br />Optimized</>,
            description: "We offer asymmetric upside and an inflation hedge without the volatility associated with massive debt obligations found in early DAT pioneers.",
            color: "#000000",
            backgroundColor: "#fcd144"
        }
    ];

    const handleScroll = () => {
        if (scrollContainerRef.current) {
            const scrollLeft = scrollContainerRef.current.scrollLeft;
            const width = scrollContainerRef.current.offsetWidth;
            const index = Math.round(scrollLeft / width);
            setActiveIndex(index);
        }
    };

    return (
        <section id="how-it-works" className={classes.section}>
            <div className={classes.container}>
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className={classes.title}
                >
                    Why Unicoin Is <br /><span className={classes.highlight}>Different.</span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 40px auto', fontSize: '1.25rem' }}
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
                    Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </motion.p>

                {/* Responsive Layout: Horizontal Scroll on Mobile, Grid on Desktop */}
                <div
                    ref={scrollContainerRef}
                    onScroll={handleScroll}
                    className={classes.scrollContainer}
                >
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className={classes.cardWrapper}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            onClick={() => {
                                // For mobile tap to flip
                                setHoveredIndex(hoveredIndex === index ? null : index);
                            }}
                        >
                            <div className={`${classes.cardInner} group`}>
                                <motion.div
                                    className={classes.cardFlipper}
                                    style={{
                                        transform: hoveredIndex === index ? "rotateY(180deg)" : "rotateY(0deg)",
                                    }}
                                >
                                    {/* Front Side */}
                                    <div className={classes.cardFront} style={{ backgroundColor: step.backgroundColor }}>
                                        {/* Large Number Overlay */}
                                        <span
                                            className={classes.stepIdLarge}
                                            style={{ color: step.backgroundColor === '#000000' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)' }}
                                        >
                                            {step.id}
                                        </span>

                                        <div className={classes.frontTitleWrapper}>
                                            <h3 className={classes.frontTitle} style={{ color: step.backgroundColor === '#000000' ? '#ffffff' : '#000000' }}>
                                                {step.title}
                                            </h3>
                                        </div>
                                    </div>

                                    {/* Back Side */}
                                    <div
                                        className={classes.cardBack}
                                        style={{ borderColor: step.color }}
                                    >
                                        <h3
                                            className={classes.backTitle}
                                            style={{ color: step.backgroundColor === '#000000' ? '#ffffff' : step.color }}
                                        >
                                            {step.title}
                                        </h3>
                                        <p className={classes.backDescription}>
                                            {step.description}
                                        </p>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Mobile Scroll Indicator */}
                <div className={classes.mobileIndicators}>
                    {steps.map((_, index) => (
                        <div
                            key={index}
                            className={classes.indicatorDot}
                            style={{
                                width: activeIndex === index ? '32px' : '8px',
                                backgroundColor: activeIndex === index ? 'black' : '#e0e0e0'
                            }}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
