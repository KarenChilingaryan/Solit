import dynamic from "next/dynamic";
import { memo } from "react";
const Services = dynamic(() =>
  import("../../components/organisms/services/Services")
);

const Service = () => {
  return (
    <div>
      <Services />
    </div>
  );
};

export default memo(Service);
