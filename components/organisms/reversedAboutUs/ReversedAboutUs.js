import { memo } from "react";
import TeamMemberCard from "../../molecules/teamMemberCard/TeamMemberCard";
import TitleWithDescription from "../../molecules/titleWithDescription/TitleWithDescription";

import styles from "./ReversedAboutUs.module.scss";

const ReversedAboutUs = ({ about, users, reversed, fromCareers = false }) => {

  return (
    <div className={`${styles.block} ${reversed && styles.blockReversed}`}>
      <TitleWithDescription title={about.title} description={about.description}  fromCareers={fromCareers} reversed={reversed}/>
      <div className={`${styles.users} ${fromCareers ? styles.fromCareers : ''}`}>
        {
          users.map((user, index) => <TeamMemberCard key={index} name={user.name} position={user.position} image={user.image} fromCareers={fromCareers} />)
        }
      </div>
    </div>
  );
};

export default memo(ReversedAboutUs);
