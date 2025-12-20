import './Footer.css';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaCreativeCommonsSa, FaChevronUp } from 'react-icons/fa';

function Footer(){
    return <>
    


      <section className='footer'>
        <section className='main-footer'>
          <div>
            <h1 className='anchor'>
            
            </h1>
            <p>Subscribe to our Email alerts to receive early</p>
            <input type="text" placeholder='Email Address*' className='footer-inp' /><br />
            <button className='foot-but'>Subscribe</button>
          </div>
          <div>
            <h1>Devlop</h1>
            <p>Build</p>
             <p>Features</p>
             <p>Pricing</p>
             <p>Anvil X</p>
            <p>Track Order</p>
           
          </div>
          <div>
            <h1>Support</h1>
            <p>Docs</p>
            <p>Forum</p>
            <p>Tutorials</p>
            <p>Privacy Policy</p>
            <p>Terms & Conditions</p>
          </div>
          <div>
            <h1>Company</h1>
            <p>About Us</p>
            <p>Contact Us</p>
            <p>Service Centres</p>
            <p>Careers</p>
            <p>Affiliates</p>
          </div>
        </section>
        <hr />
        <section className='sub-footer2'>
          <div>
            <h1 className='foot-head2'>companiesDirectory<FaCreativeCommonsSa />.</h1>
          </div>
          <div className='icon-foot'>
            <span className='footer-icons'><FaFacebookF /></span>
            <span className='footer-icons'><FaTwitter /></span>
            <span className='footer-icons'><FaInstagram /></span>
            <span className='footer-icons'><FaLinkedinIn /></span>
           
          </div>
        </section>
      </section>
    
    </>
}
export default Footer;