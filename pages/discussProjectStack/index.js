import { memo } from "react";
import { DiscussProjectStack } from "../../components/organisms/discussProjectStack";

const Project = () => {
  return (
    <div>
      <DiscussProjectStack />
    </div>
  );
};

export default memo(Project);
