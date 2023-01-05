import { memo } from "react";
import { AboutMain } from "../components/organisms/aboutMain";
import { Values } from "../components/organisms/values";
import { Team } from "../components/organisms/team";
import ContactFormAbout from "../components/molecules/contactFormColoredTitles/ContactFormAbout";
import ContactForm from "../components/organisms/contactForm/ContactForm";
import axios from "axios";
import Head from "next/head";

export async function getServerSideProps(context) {
  const res = await axios.get(`https://jsonplaceholder.typicode.com/users/`);

  return {
    // will be passed to the page component as props
    props: {
      item: res.data,
    },
  };
}
const About = ({ item }) => {
  return (
    <>
      <Head>
        <meta name="keywords" content={item.map((el) => el.name).join(", ")} />
      </Head>
      <AboutMain />
      {/* <Values /> */}
      <Team />
      <ContactFormAbout background={"#DEF1FA"} />
      <ContactForm title={"Want a free consultation?"} />
    </>
  );
};

export default memo(About);
