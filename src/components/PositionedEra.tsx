'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useStyles } from './PositionedEra.styles';

const PositionedEra = () => {
    const { classes } = useStyles();

    return (
        <section id="positioned-era" className={classes.section}>
            <div className={classes.container}>
                <motion.h2
                    className={classes.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    Positioned for the Next Era
                </motion.h2>

                <motion.p
                    className={classes.description}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                >
                    The transition to TBIZ marks a deliberate move toward institutional maturity. Built on a debt-free model, strategic asset alignment, and disciplined governance, TBIZ is structured to operate within evolving regulatory frameworks while maintaining strategic independence. This is not a reactionary shift, but a forward-looking institutional recalibration designed for longevity.
                </motion.p>
            </div>
        </section>
    );
};

export default PositionedEra;
