import * as React from 'react';
import PremiumSection from "@sections/premium/PremiumSection";
import PlansSection from "@sections/plans/PlansSection";
import FAQSection from "@sections/faq/FAQSection";
import SampleSection from "@sections/sample/SampleSection";
import CurriculumSection from "@sections/curriculum/CurriculumSection";

const Premium: React.FC = () => {
	return (
		<>
			<PlansSection />
			<PremiumSection />
			<CurriculumSection />
			<SampleSection />
			<FAQSection />
		</>
	)
}

export default Premium;
