import { memo } from "react";
import dynamic from "next/dynamic";

const TermsComponent = dynamic(() =>
  import("../../components/organisms/termsItem/TermsItem")
);

const Terms = () => {
  return (
    <div>
      <TermsComponent />
    </div>
  );
};

export default memo(Terms);
