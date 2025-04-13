import React from 'react';
import TopCompnentHero from '../components/TopCompnentHero';
import Teams from '../components/Team';
import Eligibilityform from '../components/Eligibilityform';

const Eligibility = () => {
  return (
    <div>
      <TopCompnentHero
        title="ECO4 Eligibility"
        description="Find out if you qualify for free energy efficiency improvements through the ECO4 scheme. Check your eligibility and learn about the qualifying criteria."
        value1="Check Eligibility"
        value2="Learn More"
        image="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80"
        onClick2="#eligibility-criteria"
        onClick1="#application-form"
      />

      <div className="">
      <Eligibilityform />
        {/* Eligibility Criteria Section */}
        <Teams />
      </div>
    </div>
  );
};

export default Eligibility; 