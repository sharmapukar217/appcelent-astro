"use client";
import Slider from "react-slick";
import { useRef } from "react";

import feature_data from "@/data/home-data/FeatureData";
import titleShape from "@/assets/images/shape/title_shape_02.svg";
import UseMounted from "@/hooks/UseMount";

const setting = {
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  centerMode: true,
  centerPadding: "0",
  dots: false,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const BLockFeatureThree = () => {
  const mounted = UseMounted();
  const sliderRef = useRef<Slider | null>(null);

  const handlePrevClick = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const handleNextClick = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  return (
    <div className="block-feature-three mt-150 xl-mt-120">
      <div className="container">
        <div className="title-one text-center mb-75 xl-mb-50 md-mb-30 wow fadeInUp">
          <h3>
            Explore Popular{" "}
            <span>
              Location <img src={titleShape.src} alt="" className="lazy-img" />
            </span>
          </h3>
          <p className="fs-22">
            Explore the latest listings & projects in diverse areas
          </p>
        </div>

        {mounted && (
          <Slider
            {...setting}
            ref={sliderRef}
            className="property-location-slider-one"
          >
            {feature_data
              .filter((items) => items.page === "home_1_feature_2")
              .map((item) => (
                <div key={item.id} className="item-first">
                  <div
                    className={`location-card-one position-relative z-1 d-flex align-items-end ${item.item_bg}`}
                  >
                    <div className="content text-center w-100 tran3s">
                      <h5 className="text-white fw-normal">{item.title}</h5>
                      <p className="text-white fw-light">{item.desc}</p>
                    </div>
                    <a href="/listing_01" className="stretched-link"></a>
                  </div>
                </div>
              ))}
          </Slider>
        )}

        <ul className="slider-arrows slick-arrow-one d-flex justify-content-between style-none position-relative">
          <li onClick={handlePrevClick} className="prev_a slick-arrow">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-chevron-compact-left"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M9.224 1.553a.5.5 0 0 1 .223.67L6.56 8l2.888 5.776a.5.5 0 1 1-.894.448l-3-6a.5.5 0 0 1 0-.448l3-6a.5.5 0 0 1 .67-.223"
              />
            </svg>
          </li>
          <li onClick={handleNextClick} className="next_a slick-arrow">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-chevron-compact-right"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M6.776 1.553a.5.5 0 0 1 .671.223l3 6a.5.5 0 0 1 0 .448l-3 6a.5.5 0 1 1-.894-.448L9.44 8 6.553 2.224a.5.5 0 0 1 .223-.671"
              />
            </svg>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BLockFeatureThree;
