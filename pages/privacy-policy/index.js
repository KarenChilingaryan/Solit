import { memo } from "react";
import { PrivacyPolicyComponent } from "../../components/organisms/privacyPolicyItem";

const PrivacyPolicy = () => {
  return (
    <div>
      <PrivacyPolicyComponent />
    </div>
  );
};

export default memo(PrivacyPolicy);
