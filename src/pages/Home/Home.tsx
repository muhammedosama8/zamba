import React from 'react';
import Hero from '../../components/sections/Hero/Hero';
import Brands from '../../components/sections/Brands/Brands';
import Stats from '../../components/sections/Stats/Stats';
import Features from '../../components/sections/Features/Features';
import LaunchApps from '../../components/sections/LaunchApps/LaunchApps';
import TeamWork from '../../components/sections/TeamWork/TeamWork';
import Pricing from '../../components/sections/Pricing/Pricing';
import Testimonials from '../../components/sections/Testimonials/Testimonials';
import Partners from '../../components/sections/Partners/Partners';
import Newsletter from '../../components/sections/Newsletter/Newsletter';

const Home: React.FC = () => {
  return (
    <main>
      <Hero />
      <Brands />
      <Stats />
      <Features />
      <LaunchApps />
      <TeamWork />
      <Pricing />
      <Testimonials />
      <Partners />
      <Newsletter />
    </main>
  );
};

export default Home;
