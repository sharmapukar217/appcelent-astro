import FooterFour from "@/layouts/footers/FooterFour"
import Header from "@/layouts/headers/HeaderOne"
import FancyBanner from "@/components/common/FancyBanner"
import ListingArea from "./ListingArea"
import { Provider } from "react-redux"
import store from "@/redux/store"

const ListingPage = () => {
   return (
      <Provider store={store}>
         <Header />
         <ListingArea />
         <FancyBanner />
         <FooterFour />
      </Provider>
   )
}

export default ListingPage;
