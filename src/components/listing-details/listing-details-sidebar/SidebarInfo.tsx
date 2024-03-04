
import infoAvatar from "@/assets/images/agent/img_06.jpg"

const SidebarInfo = () => {
   return (
      <>
         <img src={infoAvatar.src} alt=""
            className="lazy-img rounded-circle ms-auto me-auto mt-3 avatar" />
         <div className="text-center mt-25">
            <h6 className="name">Rashed Kabir</h6>
            <p className="fs-16">Property Agent & Broker</p>
            <ul className="style-none d-flex align-items-center justify-content-center social-icon">
               <li><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
               <li><a href="#"><i className="fa-brands fa-twitter"></i></a></li>
               <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
               <li><a href="#"><i className="fa-brands fa-linkedin"></i></a></li>
            </ul>
         </div>
         <div className="divider-line mt-40 mb-45 pt-20">
            <ul className="style-none">
               <li>Location: <span>Spain, Barcelona</span></li>
               <li>Email: <span><a href="mailto:akabirr770@gmail.com">akabirr770@gmail.com</a></span>
               </li>
               <li>Phone: <span><a href="tel:+12347687565">+12347687565</a></span></li>
            </ul>
         </div>
         <a href="/contact" className="btn-nine text-uppercase rounded-3 w-100 mb-10">CONTACT AGENT</a>
      </>
   )
}

export default SidebarInfo
