import { useSelector } from "react-redux";

import { HomeContent } from "../components/organisms/homeContent";

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
      <HomeContent />

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
