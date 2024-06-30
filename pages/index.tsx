import React from 'react';
import Header from '../sections/header/Header';
import Hero from '../sections/hero/Hero';
import CurriculumSection from '../sections/curriculum/CurriculumSection';
import SampleSection from "../sections/sample/SampleSection";
import PremiumSection from "../sections/premium/PremiumSection";
import PlansSection from "../sections/plans/PlansSection";
import FAQSection from "../sections/faq/FAQSection";

const Home: React.FC = () => (
	<>
		<Header />
		<Hero />
		<CurriculumSection />
		<SampleSection />
		<PremiumSection />
		<PlansSection />
		<FAQSection />
	</>
);

export default Home;
