import React from "react";
import "./stylesheets/footer_style.css";
import Dynamic_link from "../micro_components/Dynamic_link";

function Footer() {
  const f_style = {
    backgroundColor: "rgb(29, 35, 57)",
    minheight: "50vh",
    color: "white"
  };
  return (
    <div className="foot_container" style={f_style}>
      <div className="f_div_1">
        <div className="f_div_1_child">
          <div className="f_div_1_left">
            <h2 className="">Intrested?</h2>
            <div className="">
              Sign up to get the latest news on our products
            </div>
            <div className="f_form">
              <form
                id="Newsletter-Form"
                name="wf-form-Newsletter-Form"
                className="footer1_form"
              >
                <input
                  className="form_input w-input"
                  maxLength={256}
                  name="Your-email"
                  data-name="Your email"
                  placeholder="Enter your email"
                  type="email"
                  id="Your-email-2"
                  required
                />
                <button
                  id="w-node-_5be8f1ea-eec6-8528-46e9-517ab0bbbf8a-2f05edac"
                  type="submit"
                  className="button is-alternate"
                >Submit</button>
              </form>
            </div>
            <div className="f_social">
              <a href="https://www.facebook.com/PromptAdvisers">
                <div style={{ height: "2.5rem" }}>
                  <svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22 12.0611C22 6.50451 17.5229 2 12 2C6.47715 2 2 6.50451 2 12.0611C2 17.0828 5.65684 21.2452 10.4375 22V14.9694H7.89844V12.0611H10.4375V9.84452C10.4375 7.32296 11.9305 5.93012 14.2146 5.93012C15.3088 5.93012 16.4531 6.12663 16.4531 6.12663V8.60261H15.1922C13.95 8.60261 13.5625 9.37822 13.5625 10.1739V12.0611H16.3359L15.8926 14.9694H13.5625V22C18.3432 21.2452 22 17.083 22 12.0611Z"
                      fill="#DCF0FA"
                    ></path>
                  </svg>
                </div>
              </a>
              <a href="https://twitter.com/promptadvisers">
                <div style={{ height: "2.5rem" }}>
                  <svg
                    color="white"
                    width="100%"
                    height="100%"
                    viewBox="0 0 24 24"
                    fill="white"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.1761 4H19.9362L13.9061 10.7774L21 20H15.4456L11.0951 14.4066L6.11723 20H3.35544L9.80517 12.7508L3 4H8.69545L12.6279 9.11262L17.1761 4ZM16.2073 18.3754H17.7368L7.86441 5.53928H6.2232L16.2073 18.3754Z"
                      fill="CurrentColor"
                    ></path>
                  </svg>
                </div>
              </a>
              <a href="https://www.linkedin.com/in/mkashef/">
                <div style={{ height: "2.5rem", }}>
                  <svg 
                    width="100%"
                    height="100%"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M4.5 3C3.67157 3 3 3.67157 3 4.5V19.5C3 20.3284 3.67157 21 4.5 21H19.5C20.3284 21 21 20.3284 21 19.5V4.5C21 3.67157 20.3284 3 19.5 3H4.5ZM8.52076 7.00272C8.52639 7.95897 7.81061 8.54819 6.96123 8.54397C6.16107 8.53975 5.46357 7.90272 5.46779 7.00413C5.47201 6.15897 6.13998 5.47975 7.00764 5.49944C7.88795 5.51913 8.52639 6.1646 8.52076 7.00272ZM12.2797 9.76176H9.75971H9.7583V18.3216H12.4217V18.1219C12.4217 17.742 12.4214 17.362 12.4211 16.9819V16.9818V16.9816V16.9815V16.9812C12.4203 15.9674 12.4194 14.9532 12.4246 13.9397C12.426 13.6936 12.4372 13.4377 12.5005 13.2028C12.7381 12.3253 13.5271 11.7586 14.4074 11.8979C14.9727 11.9864 15.3467 12.3141 15.5042 12.8471C15.6013 13.1803 15.6449 13.5389 15.6491 13.8863C15.6605 14.9339 15.6589 15.9815 15.6573 17.0292V17.0294C15.6567 17.3992 15.6561 17.769 15.6561 18.1388V18.3202H18.328V18.1149C18.328 17.6629 18.3278 17.211 18.3275 16.7591V16.759V16.7588C18.327 15.6293 18.3264 14.5001 18.3294 13.3702C18.3308 12.8597 18.276 12.3563 18.1508 11.8627C17.9638 11.1286 17.5771 10.5211 16.9485 10.0824C16.5027 9.77019 16.0133 9.5691 15.4663 9.5466C15.404 9.54401 15.3412 9.54062 15.2781 9.53721L15.2781 9.53721L15.2781 9.53721C14.9984 9.52209 14.7141 9.50673 14.4467 9.56066C13.6817 9.71394 13.0096 10.0641 12.5019 10.6814C12.4429 10.7522 12.3852 10.8241 12.2991 10.9314L12.2991 10.9315L12.2797 10.9557V9.76176ZM5.68164 18.3244H8.33242V9.76733H5.68164V18.3244Z"
                      fill="#DCF0FA"
                    ></path>
                  </svg>
                </div>
              </a>
              <a href="http://youtube.com/@mark_kashef">
                <div  style={{ height: "2.5rem" }}>
                  <svg 
                    width="100%"
                    height="100%"
                    viewBox="0 0 24 24"
                    fill="pink"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path 
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M20.5686 4.77345C21.5163 5.02692 22.2555 5.76903 22.5118 6.71673C23.1821 9.42042 23.1385 14.5321 22.5259 17.278C22.2724 18.2257 21.5303 18.965 20.5826 19.2213C17.9071 19.8831 5.92356 19.8015 3.40294 19.2213C2.45524 18.9678 1.71595 18.2257 1.45966 17.278C0.827391 14.7011 0.871044 9.25144 1.44558 6.73081C1.69905 5.78311 2.44116 5.04382 3.38886 4.78753C6.96561 4.0412 19.2956 4.282 20.5686 4.77345ZM9.86682 8.70227L15.6122 11.9974L9.86682 15.2925V8.70227Z"
                      // fill="pink"
                    ></path>
                  </svg>
                </div>
              </a>
            </div>
            <div className="">© 2024 Prompt Advisers. All rights reserved.</div>
          </div>

          <div className="f_div_1_right">
            <div className="f_div_1_rightL">
                <h3 className="">Menu</h3>
                <Dynamic_link name={"Home"} url={"https://www.promptadvisers.com/"}/>
                <Dynamic_link name={"Services"} url={"https://www.promptadvisers.com/services"}/>
                <Dynamic_link name={"About Us"} url={"https://www.promptadvisers.com/about-us"}/>
                <Dynamic_link name={"Inbound Agent"} url={"https://www.promptadvisers.com/inbound-agent"}/>
                <Dynamic_link name={"Careers"} url={"https://www.promptadvisers.com/careers"}/>
                <Dynamic_link name={"Media Centres"} url={"https://www.promptadvisers.com/media-centre"}/>
            </div>
            <div className="f_div_1_rightR">
            <h3 className="">Our Services</h3>
                <Dynamic_link name={"Consultations"} url={"https://www.promptadvisers.com/services#consultations"}/>
                <Dynamic_link name={"AI Audits"} url={"https://www.promptadvisers.com/services#ai-audit"}/>
                <Dynamic_link name={"AI Product Development"} url={"https://www.promptadvisers.com/services#custom-ai-product-development"}/>
            </div>
          </div>
        </div>
      </div>

      {/* bottom part of footer  */}
      <div className="f_div_2">
        <div className="f_div_2_child">
          <img
            className="footer_logo"
            src="https://cdn.prod.website-files.com/65bd194e45fe518c3d83f62d/66ddbdec3555ab75c6796de4_logo%20jasne.svg"
            alt="logo"
            loading="lazy"
          />
          <div className="footer-grid">
            <div className="">
              <a href="#">2164 Montreal RD, Ottawa</a>
            </div>
            <div className="">
              <a href="#" rel="noopener noreferrer">
                Canada
              </a>
            </div>
            <div className="">
              <a href="tel:+">800-961-9528</a>
            </div>
            <div className="">
              <a href="mailto:">mark@promptadvisers.com</a>
            </div>
            <div className="">
              <a href="https://www.promptadvisers.com/privacy-policy">
                Terms and Conditions
              </a>
            </div>
            <div className="">
              <a href="https://www.promptadvisers.com/terms-and-conditions">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
