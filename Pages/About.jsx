import React from 'react';
import TopCompnentHero from '../components/TopCompnentHero';
import PageTitle from '../components/PageTitle';

const About = () => {
  return (
    <div>
      <PageTitle title="About Retro Smart" />
      <TopCompnentHero
        title="About Us"
        description="Learn about our mission to make homes more energy-efficient and comfortable through professional retrofit services and ECO4 grant assistance."
        value1="Our Services"
        value2="Our Team"
        image="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80"
        onClick2="#team"
        onClick1="#services"
      />
      // ... rest of the component
    </div>
  );
};

export default About; 