
import footerLogo from "@/assets/images/logo/logo_06.svg"
import footerShape from "@/assets/images/assets/ils_06.svg"
import footer_data from "@/data/home-data/FooterData"

const FooterFour = () => {
   return (
      <div className="footer-four position-relative z-1">
         <div className="container container-large">
            <div className="bg-wrapper position-relative z-1">
               <div className="row">
                  <div className="col-xxl-3 col-lg-4 mb-60">
                     <div className="footer-intro">
                        <div className="logo mb-20">
                           <a href="/">
                              <img src={footerLogo} alt="" />
                           </a>
                        </div>
                        <p className="mb-30 xs-mb-20">11910 Clyde Rapid Suite 210, Willyand, Virginia, United States</p>
                        <a href="#" className="email tran3s mb-60 md-mb-30">homyreal@demo.com</a>
                        <ul className="style-none d-flex align-items-center social-icon">
                           <li><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
                           <li><a href="#"><i className="fa-brands fa-twitter"></i></a></li>
                           <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
                        </ul>
                     </div>
                  </div>

                  {footer_data.filter((items) => items.page === "home_5").map((item) => (
                     <div key={item.id} className={`col-sm-4 mb-30 ${item.widget_class}`}>
                        <div className={`footer-nav ${item.widget_class2}`}>
                           <h5 className="footer-title">{item.widget_title}</h5>
                           <ul className="footer-nav-link style-none">
                              {item.footer_link.map((li, i) => (
                                 <li key={i}><a href={li.link}>{li.link_title}</a></li>))}
                           </ul>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
            <div className="bottom-footer">
               <p className="m0 text-center fs-16">Copyright @2024 Homy inc.</p>
            </div>
         </div>
         <img src={footerShape} alt="" className="lazy-img shapes shape_01" />
      </div>
   )
}

export default FooterFour
