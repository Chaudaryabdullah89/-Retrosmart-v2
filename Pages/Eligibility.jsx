import React from 'react';
import TopCompnentHero from '../components/TopCompnentHero';
import Teams from '../components/Team';
import Eligibilityform from '../components/Eligibilityform';
import PageTitle from '../components/PageTitle';

const Eligibility = () => {
  return (
    <div>
      <PageTitle title="ECO4 Grant Eligibility Checker" />
      <TopCompnentHero
        title="Check Your ECO4 Grant Eligibility"
        description="Discover if you qualify for free home energy improvements. Our quick eligibility checker helps you determine if you can benefit from the ECO4 scheme's funding for insulation, heating, and renewable energy systems."
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