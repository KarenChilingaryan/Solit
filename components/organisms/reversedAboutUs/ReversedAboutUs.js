import { memo } from "react";
import dynamic from "next/dynamic";

const TeamMemberCard = dynamic(() =>
  import("../../molecules/teamMemberCard/TeamMemberCard")
);
const TitleWithDescription = dynamic(() =>
  import("../../molecules/titleWithDescription/TitleWithDescription")
);

// import TeamMemberCard from "../../molecules/teamMemberCard/TeamMemberCard";
// import TitleWithDescription from "../../molecules/titleWithDescription/TitleWithDescription";

import styles from "./ReversedAboutUs.module.scss";

const ReversedAboutUs = ({
  about,
  users,
  reversed,
  fromCareers = false,
  className,
  last,
}) => {
  return (
    <div
      className={`${styles.block} ${reversed && styles.blockReversed} ${
        styles[className + "_block"]
      } ${reversed && styles[className + "_blockReversed"]}`}
    >
      <TitleWithDescription
        title={about.title}
        description={about.description}
        fromCareers={fromCareers}
        reversed={reversed}
        className={className}
        last={last}
      />
      <div
        className={`${styles.users} ${fromCareers ? styles.fromCareers : ""}`}
      >
        {users?.map((user, index) => (
          <TeamMemberCard
            key={index}
            name={user.name}
            position={user.position}
            image={user.image}
            fromCareers={fromCareers}
            more={user?.more}
          />
        ))}
      </div>
    </div>
  );
};

export default memo(ReversedAboutUs);
