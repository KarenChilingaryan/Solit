import { memo } from "react";
import DiscussProjectStack from "../../components/organisms/discussProjectStack/DiscussProjectStack";

const Project = () => {
  return (
    <div>
      <DiscussProjectStack />
    </div>
  );
};

export default memo(Project);
