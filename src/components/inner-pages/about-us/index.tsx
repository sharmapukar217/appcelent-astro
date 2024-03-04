import BreadcrumbOne from "@/components/common/breadcrumb/BreadcrumbOne";
import HeaderOne from "@/layouts/headers/HeaderOne";
import BLockFeatureOne from "./BlockFeatureOne";
import BLockFeatureFive from "@/components/homes/BLockFeatureFive";
import Feedback from "@/components/homes/Feedback";
import AgentArea from "@/components/homes/AgentArea";
import Brand from "./Brand";
import FooterFour from "@/layouts/footers/FooterFour";
import FancyBanner from "@/components/common/FancyBanner";

const AboutUsOne = () => {
  return (
    <>
      <HeaderOne style={true} />
      <BreadcrumbOne title="About Agency" sub_title="About us" style={false} />
      <BLockFeatureOne />
      <BLockFeatureFive style={true} />
      <Feedback />
      <AgentArea style={false} />
      <Brand />
      <FancyBanner style={false} />
      <FooterFour />
    </>
  );
};

export default AboutUsOne;
