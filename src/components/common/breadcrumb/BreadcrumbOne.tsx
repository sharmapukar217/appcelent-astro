import breadcrumbImg from "@/assets/images/assets/ils_07.svg"

const BreadcrumbOne = ({ title, sub_title, style, link, link_title }: any) => {
   return (
      <div className="inner-banner-one inner-banner bg-pink text-center z-1 pt-160 lg-pt-130 pb-160 xl-pb-120 md-pb-80 position-relative">
         <div className="container">
            <h3 className="mb-35 xl-mb-20 pt-15">{title}</h3>
            <ul className="theme-breadcrumb style-none d-inline-flex align-items-center justify-content-center position-relative z-1 bottom-line">
               <li><a href="/">Home</a></li>
               <li>/</li>
               {style && <>
                  <li><a href={link}>{link_title}</a></li>
                  <li>/</li>
               </>}
               <li>{sub_title}</li>
            </ul>
         </div>
         <img src={breadcrumbImg.src} alt="" className="lazy-img shapes w-100 illustration" />
      </div>
   )
}

export default BreadcrumbOne;
