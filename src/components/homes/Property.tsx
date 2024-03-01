import property_data from "@/data/home-data/PropertyData";
import titleShape from "@/assets/images/shape/title_shape_03.svg";

const Property = () => {
  return (
    <div className="property-listing-one bg-pink-two mt-150 xl-mt-120 pt-140 xl-pt-120 lg-pt-80 pb-180 xl-pb-120 lg-pb-100">
      <div className="container">
        <div className="position-relative">
          <div className="title-one text-center text-lg-start mb-45 xl-mb-30 lg-mb-20 wow fadeInUp">
            <h3>
              New{" "}
              <span>
                Listings{" "}
                <img src={titleShape.src} alt="" className="lazy-img" />
              </span>
            </h3>
            <p className="fs-22 mt-xs">
              Explore latest & featured properties for sale.
            </p>
          </div>

          <div className="row gx-xxl-5">
            {property_data
              .filter((items) => items.page === "home_1")
              .map((item) => (
                <div
                  key={item.id}
                  className="col-lg-4 col-md-6 d-flex mt-40 wow fadeInUp"
                  data-wow-delay={item.data_delay_time}
                >
                  <div className="listing-card-one border-25 h-100 w-100">
                    <div className="img-gallery p-15">
                      <div className="position-relative border-25 overflow-hidden">
                        <div className={`tag border-25 ${item.tag_bg}`}>
                          {item.tag}
                        </div>
                        <div
                          id={`carousel${item.carousel}`}
                          className="carousel slide"
                        >
                          <div className="carousel-indicators">
                            <button
                              type="button"
                              data-bs-target={`#carousel${item.carousel}`}
                              data-bs-slide-to="0"
                              className="active"
                              aria-current="true"
                              aria-label="Slide 1"
                            ></button>
                            <button
                              type="button"
                              data-bs-target={`#carousel${item.carousel}`}
                              data-bs-slide-to="1"
                              aria-label="Slide 2"
                            ></button>
                            <button
                              type="button"
                              data-bs-target={`#carousel${item.carousel}`}
                              data-bs-slide-to="2"
                              aria-label="Slide 3"
                            ></button>
                          </div>
                          <div className="carousel-inner">
                            {item.carousel_thumb.map((item, i) => (
                              <div
                                key={i}
                                className={`carousel-item ${item.active}`}
                                data-bs-interval="1000000"
                              >
                                <a
                                  href="/listing_details_01"
                                  className="d-block"
                                >
                                  <img
                                    src={item.img.src}
                                    className="w-100"
                                    alt="..."
                                  />
                                </a>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="property-info p-25">
                      <a href="/listing_details_01" className="title tran3s">
                        {item.title}
                      </a>
                      <div className="address">{item.address}</div>
                      <ul className="style-none feature d-flex flex-wrap align-items-center justify-content-between">
                        {item.property_info.map((info, index) => (
                          <li key={index} className="d-flex align-items-center">
                            <img
                              src={info.icon.src}
                              alt=""
                              className="lazy-img icon me-2"
                            />
                            <span className="fs-16">
                              {info.total_feature} {info.feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                      <div className="pl-footer top-border d-flex align-items-center justify-content-between">
                        <strong className="price fw-500 color-dark">
                          $
                          {item.price.toLocaleString(undefined, {
                            minimumFractionDigits: item.price_text ? 0 : 2,
                            maximumFractionDigits: 2,
                          })}
                          {item.price_text && (
                            <>
                              /<sub>m</sub>
                            </>
                          )}
                        </strong>
                        <a
                          href="/listing_details_01"
                          className="btn-four rounded-circle"
                        >
                          <i className="bi bi-arrow-up-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Property;
