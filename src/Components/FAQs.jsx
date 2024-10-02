import React from "react";
import "./stylesheets/FAQ_style.css";
import Button from "../micro_components/Button";
import Question from "../micro_components/Question";
function FAQs() {
  return (
    <>
      <div className="FAQ_container">
        <div className="FAQ_title">
          <div className="line"></div>
          <div className="FAQ_title_text">FREQUENTLY ASKED QUESTIONS</div>
        </div>

        <div className="FAQ_main">
          <div className="FAQ_left">
            <div className="FAQ_left_title">Want to know more?</div>
            <Button text="Book an appointment" width={200} />
          </div>
          <div className="FAQ_right">
            <Question
              text="What is Prompt Engineering, and how can it benefit my business?"
              answer="Prompt Engineering is the skill of designing and
                      refining inputs (prompts) to get the most effective
                      and accurate outputs from Al models. This is
                      crucial in optimizing Al interactions, ensuring your
                      Al applications communicate effectively and
                      deliver value to your business."
            />
            <Question text="Can you provide a custom AI solution for a niche industry?"
            answer="Absolutely. Our expertise lies in tailoring AI solutions to fit specific industry needs, no matter how niche. We analyze your unique challenges and design AI tools that are perfectly aligned with your business objectives."
            />
            <Question text="How does your AI model Audit process work ?"
            answer="Our AI Audit involves a thorough analysis of your business processes to identify areas where AI can bring improvements. We look at potential automation, efficiency gains, and innovative applications of AI in your specific context."
            />
            <Question text="What makes your LLM Security Program unique?"
            answer="Our LLM Security Program utilizes advanced language models to enhance cybersecurity measures. It's unique in its ability to understand and predict security threats in a sophisticated and evolving digital landscape."
            />
            <Question text="Can AI really help small businesses, or is it just for large corporations?"
            answer="AI is not just for large corporations; it's increasingly becoming a valuable tool for small businesses. Our services are designed to make AI accessible and beneficial for businesses of all sizes, helping them to scale and innovate."
            />
            <Question text="How do you ensure the confidentiality of our data?"
            answer="We take confidentiality seriously. All client data and information are handled with the utmost care, following strict confidentiality agreements and employing robust data security measures."
            />
            <Question text="What does a typical AI solution development process involve?"
            answer="Our development process begins with understanding your business needs, followed by designing a tailored AI solution. We then move to development, testing, and implementation, ensuring the solution integrates seamlessly into your business operations."
            />
            <Question text="How can I measure the impact of your AI solutions on my business?"
            answer="We provide clear metrics and KPIs to measure the impact of our AI solutions. This includes improvements in efficiency, cost savings, increased revenue, customer satisfaction, and other relevant business metrics."
            />
            <Question text="Are there ongoing support and updates for the AI solutions you provide?"
            answer="Yes, we offer ongoing support and updates to ensure that the AI solutions remain effective and are adapted to any new challenges or changes in your business environment."
            />
            <Question text="How can I get started with implementing AI in my business?"
            answer="Getting started is easy. Just contact us, and we'll arrange a consultation to discuss your business needs and how AI can be integrated to meet those needs."
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default FAQs;

{
  /* <a className="">
              <button type="submit">
                <div className="">Book an appointment</div>
                <div className="icon-embed-xxsmall z-index-2 w-embed">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100%"
                  height="100%"
                  viewBox="0 0 19 18"
                  fill="currentColor"
                  preserveAspectRatio="xMidYMid meet"
                  aria-hidden="true"
                  role="img"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M19 9.00096C19 9.45999 18.8178 9.90026 18.4934 10.225L11.9619 16.7589C11.801 16.9198 11.61 17.0474 11.3997 17.1345C11.1895 17.2216 10.9642 17.2664 10.7367 17.2664C10.5091 17.2664 10.2838 17.2216 10.0736 17.1345C9.86333 17.0474 9.67231 16.9198 9.51141 16.7589C9.35051 16.598 9.22288 16.407 9.1358 16.1967C9.04872 15.9865 9.0039 15.7612 9.0039 15.5336C9.0039 15.3061 9.04872 15.0808 9.1358 14.8705C9.22288 14.6603 9.35051 14.4693 9.51141 14.3084L13.0867 10.7332L5.72205e-06 10.7332V7.26877L13.0867 7.26877L9.51141 3.69236C9.18646 3.36741 9.0039 2.92668 9.0039 2.46712C9.0039 2.00757 9.18646 1.56684 9.51141 1.24189C9.83636 0.916932 10.2771 0.734375 10.7367 0.734375C11.1962 0.734375 11.6369 0.916932 11.9619 1.24189L18.4934 7.77688C18.8178 8.10166 19 8.54193 19 9.00096Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
              </button>
              </a> */
}
