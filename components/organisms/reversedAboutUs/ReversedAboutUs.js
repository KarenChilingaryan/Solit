import { memo } from "react";
import TeamMemberCard from "../../molecules/teamMemberCard/TeamMemberCard";
import TitleWithDescription from "../../molecules/titleWithDescription/TitleWithDescription";

import styles from "./ReversedAboutUs.module.scss";

const ReversedAboutUs = ({ about, users , reversed}) => {

  return (
    <div className={`${styles.block} ${reversed && styles.blockReversed}`}>
      <TitleWithDescription title={about.title} description={about.description}/>
      <div className={styles.users}>
        {
          users.map(user => <TeamMemberCard name={user.name} position={user.position} image={user.image}/>)
        }
      </div>
    </div>
  );
};

export default memo(ReversedAboutUs);
