import dynamic from "next/dynamic";
import { memo } from "react";
const AboutPage = dynamic(() => import("../../components/organisms/aboutPage/AboutPage"));

const AboutUs = () => {
  return <AboutPage />;
};

export default memo(AboutUs);
