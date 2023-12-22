import { memo } from "react";
import dynamic from "next/dynamic";
const WhatWeDo = dynamic(() =>
  import("../../components/organisms/whatWeDo/WhatWeDo")
);

// import { WhatWeDo } from "../../components/organisms/whatWeDo";

const WhatWeDoPage = () => {
  return <WhatWeDo />;
};

export default memo(WhatWeDoPage);
