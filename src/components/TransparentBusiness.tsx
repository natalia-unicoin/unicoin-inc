'use client';

import React from 'react';
import Hero from '@/components/Hero';
import StorySection from '@/components/StorySection';
import WarOnInnovation from '@/components/WarOnInnovation';
import StrategicResponse from '@/components/StrategicResponse';
import LeadershipPositioning from '@/components/LeadershipPositioning';
import InTheMedia from '@/components/InTheMedia';

const TransparentBusiness = () => {
    return (
        <>
            <Hero />
            <StorySection />
            <WarOnInnovation />
            <StrategicResponse />
            <LeadershipPositioning />
            <InTheMedia />
            {/* Additional sections will be added here as provided by the user */}
        </>
    );
};

export default TransparentBusiness;
