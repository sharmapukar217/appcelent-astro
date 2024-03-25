// import BlogComment from "../common-blog/BlogComment";
// import BlogForm from "@/components/forms/BlogForm";

import BlogSidebar from "../blogs-page/BlogSidebar";
import type { BlogResponse } from "@/@types/blog";
import { formatDate } from "@/utils/format-date";




const BlogDetailsArea = ({ blog }: { blog: BlogResponse["data"][0] }) => {
  return (
    <div className="blog-details border-top pt-200 xl-mt-100 xl-pt-80 mb-150 xl-mb-100">
      <div className="container">
        <div className="row gx-xl-5">
          <div className="col-lg-8">
            <div className="blog-post-meta mb-60 lg-mb-40">
              <div className="post-info">{blog.attributes.author}</div>
              <h3 className="blog-title">{blog.attributes.Title}</h3>
            </div>
          </div>
        </div>
        <div className="row gx-xl-5">
          <div className="col-lg-8">
            <article className="blog-post-meta">
              <figure
                className="post-img position-relative m0"
                style={{
                  backgroundImage: `url(${
                    import.meta.env.STRAPI_URL +
                    blog.attributes.image.data.attributes.url
                  })`,
                }}
              >
                <div className="fw-500 date d-inline-block">
                  {" "}
                  {formatDate(blog.attributes.publishedAt)}{" "}
                </div>
              </figure>
              <div className="post-data pt-50 md-pt-30">
                <p>{blog.attributes.Content}</p>
                <div className="quote-wrapper">
                  <div className="row">
                    <div className="col-xxl-10 col-xl-11 col-lg-12 col-md-9 m-auto">
                      <h4>{blog.attributes.Content}</h4>
                    </div>
                  </div>
                  <h6>
                    {blog.attributes.author}
                  </h6>
                </div>
                {/* <h5>{title_2}</h5>
                <p>{desc_4}</p>
                <ul className="style-none list-item">
                  {blog_details_list.map((list, i) => (
                    <li key={i}>{list}</li>
                  ))}
                </ul>
                <p>{desc_5}</p>
                <div className="img-meta">
                  <img
                    src={blogDetailsThumb_1.src}
                    alt=""
                    className="lazy-img w-100"
                  />
                </div>
                <div className="img-caption">
                  Buy or rent properties with no commission
                </div>
                <p>{desc_6}</p>
              </div>
              <div className="bottom-widget d-sm-flex align-items-center justify-content-between">
                <ul className="d-flex align-items-center tags style-none pt-20">
                  <li>Tag:</li>
                  <li>
                    <a href="#">Apartments,</a>
                  </li>
                  <li>
                    <a href="#">loan,</a>
                  </li>
                  <li>
                    <a href="#">Sale</a>
                  </li>
                </ul>
                <ul className="d-flex share-icon align-items-center style-none pt-20">
                  <li>Share:</li>
                  {icon.map((icon, index) => (
                    <li key={index}>
                      <a href="#">
                        <i className={icon}></i>
                      </a>
                    </li>
                  ))}
                  </ul> */}
               </div> 
            </article>

            {/* <BlogComment />
                  <BlogForm /> */}
          </div>
          <BlogSidebar style={true} />
        </div>
      </div>
    </div>
  );
};

export default BlogDetailsArea;
