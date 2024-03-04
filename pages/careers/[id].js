import { memo } from "react";
import  CareersComponent  from "../../components/organisms/careersItem/CareersItem"

const Careers = () => {
  return (
    <div>
      <CareersComponent />
    </div>
  );
};

export default memo(Careers);
