import FooterFour from "@/layouts/footers/FooterFour";
import Header from "@/layouts/headers/HeaderOne";
import FancyBanner from "@/components/common/FancyBanner";
import ListingArea from "./ListingArea";
import { Provider } from "react-redux";
import store from "@/redux/store";
import featureIcon_1 from "@/assets/images/icon/icon_32.svg";
import featureIcon_2 from "@/assets/images/icon/icon_33.svg";
import featureIcon_3 from "@/assets/images/icon/icon_34.svg";
import type { Property } from "@/@types/property";

const ListingPage = ({ properties }: { properties: Property }) => {
  return (
    <Provider store={store}>
      <Header />
      <ListingArea>
        <div className="row gx-xxl-5">
          {properties?.data?.map((property) => (
            <Listings property={property} />
          ))}
        </div>
      </ListingArea>
      <FancyBanner />
      <FooterFour />
    </Provider>
  );
};

const Listings = ({ property }: { property: Property["data"][0] }) => {
  return (
    <div
      key={property.id}
      className="col-xxl-4 col-md-6 d-flex mb-80 lg-mb-50 wow fadeInUp"
    >
      <div className="listing-card-one style-two shadow-none h-100 w-100">
        <div className="img-gallery">
          <div className="position-relative overflow-hidden">
            <div className="tag fw-500">{property.attributes.type}</div>
            <a href="#" className="fav-btn tran3s">
              <i className="fa-light fa-heart"></i>
            </a>
            <div id={`carousel${property.id}`} className="carousel slide">
              <div className="carousel-indicators">
                <button
                  type="button"
                  data-bs-target={`#carousel1`}
                  data-bs-slide-to="0"
                  className="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target={`#carousel2}`}
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target={`#carousel3`}
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
              </div>
              <div className="carousel-inner">
                {property.attributes.images.data.map((item, i: any) => (
                  <div
                    key={i}
                    className={`carousel-item ${i === 0 ? "active" : ""}`}
                    data-bs-interval="1000000"
                  >
                    <a href="/listing_details_01" className="d-block">
                      <img
                        src={`${import.meta.env.STRAPI_URL}${item.attributes.url}`}
                        className="w-100"
                        alt={item?.attributes?.alternativeText || item.attributes.name}
                      />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="property-info pt-20">
          <a href="#" className="title tran3s">
            {property.attributes.name}
          </a>
          <div className="address">{property.attributes.address.address}</div>
          <ul className="style-none feature d-flex flex-wrap align-items-center justify-content-between pb-15 pt-5">
            <li className="d-flex align-items-center">
              <img
                src={featureIcon_1.src}
                alt=""
                className="lazy-img icon me-2"
              />
              <span className="fs-16">
                <span className="color-dark">
                  {property.attributes.features.living_space}
                </span>{" "}
                sqft
              </span>
            </li>
            <li className="d-flex align-items-center">
              <img
                src={featureIcon_2.src}
                alt=""
                className="lazy-img icon me-2"
              />
              <span className="fs-16">
                <span className="color-dark">
                  {property.attributes.features.total_rooms}
                </span>{" "}
                bed
              </span>
            </li>
            <li className="d-flex align-items-center">
              <img
                src={featureIcon_3.src}
                alt=""
                className="lazy-img icon me-2"
              />
              <span className="fs-16">
                <span className="color-dark">
                  {property.attributes.features.total_bathrooms}
                </span>{" "}
                bath
              </span>
            </li>
          </ul>
          <div className="pl-footer top-border bottom-border d-flex align-items-center justify-content-between">
            <strong className="price fw-500 color-dark">
              $
              {property.attributes.price.toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}{" "}
              {property.attributes.type.toLowerCase() === "rent" && (
                <>
                  / <sub>m</sub>
                </>
              )}
            </strong>
            <a href="#" className="btn-four">
              <i className="bi bi-arrow-up-right"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingPage;
