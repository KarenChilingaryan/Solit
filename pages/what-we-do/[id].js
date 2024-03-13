import { memo } from "react";
import { WhatWeDoComponent } from "../../components/organisms/whatWeDoItem";

const WhatWeDo = () => {
  return (
    <div>
      <WhatWeDoComponent />
    </div>
  );
};

export default memo(WhatWeDo);
