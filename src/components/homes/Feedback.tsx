import Slider from "react-slick";
import { Suspense, useEffect, useState } from "react";

import rating from "@/assets/images/assets/rating_01.png";
import feadbackImg_1 from "@/assets/images/media/img_01.jpg";
import feadbackImg_2 from "@/assets/images/media/img_02.jpg";
import feadbackImg_3 from "@/assets/images/media/img_03.jpg";

interface DataType {
  id: number;
  img: any;
  title: string;
  country: string;
  desc: string;
  rating_count: number;
  total_rating: number;
}

const feedback_data: DataType[] = [
  {
    id: 1,
    img: feadbackImg_1.src,
    title: "Jonathan Harry",
    country: "Milan, Itlay",
    desc: "Efficient, knowledgeable, & made our home search a smooth experience. Highly recommended agency!",
    rating_count: 4.7,
    total_rating: 13,
  },
  {
    id: 2,
    img: feadbackImg_2.src,
    title: "Sofia Rena",
    country: "New York, USA",
    desc: "Efficient, knowledgeable, & made our home search a smooth experience. Highly recommended agency!",
    rating_count: 4.5,
    total_rating: 10,
  },
  {
    id: 3,
    img: feadbackImg_3.src,
    title: "Rashed Kabir",
    country: "Dhaka, BD",
    desc: "Efficient, knowledgeable, & made our home search a smooth experience. Highly recommended agency!",
    rating_count: 4.8,
    total_rating: 11,
  },
];

const Feedback = () => {
  const [load, setLoad] = useState(false);
  useEffect(() => setLoad(true), []);

  const settings = {
    dots: true,
    arrows: false,
    centerPadding: "0px",
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    autoplay: true,
    autoplaySpeed: 300000,
  };

  return (
    <div className="feedback-section-one position-relative z-1 pt-70 md-pt-50 pb-80 md-pb-60">
      <div className="main-content m-auto">
        <Suspense fallback={<h1>Loading...</h1>}>
          {load && (
            <Slider
              {...settings}
              className="feedback-slider-one position-static"
            >
              {feedback_data.map((item) => (
                <div key={item.id} className="item">
                  <div className="feedback-block-one text-center">
                    <div className="row align-items-center">
                      <div className="col-md-3">
                        <img
                          src={item.img}
                          alt=""
                          className="rounded-circle m-auto avatar"
                        />
                        <h6 className="fs-20 m0 pt-10">{item.title}</h6>
                        <span className="fs-16">{item.country}</span>
                      </div>
                      <div className="col-md-6">
                        <blockquote>{item.desc}</blockquote>
                      </div>
                      <div className="col-md-3">
                        <img src={rating.src} alt="" className="lazy-img m-auto" />
                        <p className="text-center m0 pt-10">
                          <span className="fw-500 color-dark">
                            {item.total_rating}k rating
                          </span>{" "}
                          ({item.rating_count} Rating)
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          )}
        </Suspense>
      </div>
    </div>
  );
};

export default Feedback;
