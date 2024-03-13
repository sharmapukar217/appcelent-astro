import HeaderOne from "@/layouts/headers/HeaderOne";
import ListingDetailsOneArea from "./ListingDetailsArea";
import FancyBanner from "@/components/common/FancyBanner";
import FooterFour from "@/layouts/footers/FooterFour";
import type { Property } from "@/@types/property";

const ListingDetails = ({data} : {data: Property['data'][0]}) => {
  return (
    <>
      <HeaderOne style={true} />
      <ListingDetailsOneArea data={data}/>
      <FancyBanner />
      <FooterFour />
    </>
  );
};

export default ListingDetails;
