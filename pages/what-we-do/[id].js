import { memo } from "react";
import  WhatWeDoComponent  from "../../components/organisms/whatWeDoItem/WhatWeDoItem";

const WhatWeDo = () => {
  return (
    <div>
      <WhatWeDoComponent />
    </div>
  );
};

export default memo(WhatWeDo);
