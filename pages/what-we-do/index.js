import { memo } from "react";
import dynamic from "next/dynamic";
const WhatWeDo = dynamic(() =>
  import("../../components/organisms/whatWeDo/WhatWeDo")
);

const WhatWeDoPage = () => {
  return <WhatWeDo />;
};

export default memo(WhatWeDoPage);
