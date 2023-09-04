import { memo } from "react";
import { TermsComponent } from "../../components/organisms/termsItem";

const Terms = () => {
  return (
    <div>
      <TermsComponent />
    </div>
  );
};

export default memo(Terms);
