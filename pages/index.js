import { useSelector } from "react-redux";

import { HomeMain } from "../components/organisms/homeMain";
import { Services } from "../components/organisms/ourServices";
import { About } from "../components/organisms/about";
import { Projects } from "../components/organisms/projects";
import { Offer } from "../components/organisms/offer";
import { Testimonials } from "../components/organisms/testimonials";
import { ContactForm } from "../components/organisms/contactForm";
import { Loading } from "../components/atoms";
import Image from "next/image";
import { HomeMainWithImage } from "../components/organisms/HomeMainWithImage";

const Home = () => {
  const mainInfoData = useSelector(
    (state) => state?.postsApi?.queries?.["posts(undefined)"]?.data
  );
  const servicesData = useSelector(
    (state) => state?.ourServicesApi?.queries?.["ourServices(undefined)"]?.data
  );

  const aboutData = useSelector(
    (state) => state?.aboutApi?.queries?.["about(undefined)"]?.data
  );
  return (
    <>
      {/* {!mainInfoData || !servicesData ? (
        <Loading />
      ) : ( */}
        <HomeMainWithImage />
        
          {/* <HomeMain data={mainInfoData?.[0]} /> */}
          {/* <Services data={servicesData} />
          <About data={aboutData} />
          <Projects />
          <Offer />
          <Testimonials />
          <ContactForm title="Let’s Contact for Great" />
        </>
      {/* // )/} */}
    </>
  );
};

export default Home;
