import React, { useState } from "react";
import { Box, Typography } from "@mui/material";

function Faqs() {
  const faqsData = [
    {
      question: "What are the major services ERS delivers?",
      answer:
        "ERS delivers multiple services for its clients, which are as follows.\n" +
        "Mobile App Development\n" +
        "Web App Development\n" +
        "Quality Assurance\n" +
        "UI/UX Design\n" +
        "Software Development",
    },
    {
      question: "What types of technologies does ERS support?",
      answer:
        "ERS caters for the following technologies:\n" +
        "PHP/Laraval\n" +
        "Blockchain\n" +
        "JavaScript\n" +
        "Node Js\n" +
        "iOS & Android\n" +
        "ReactJS\n" +
        "React-Native"
    },
    {
      question: "What are the major products developed by ERS?",
      answer:
      "ERS has developed a diverse number of products, which are as follows.\n" +
      "Quikipay\n" +
      "CardHolder\n" +
      "FocusMonk\n" +
      "Salharo\n" +
      "LiftSplit\n" +
      "Wise1ne\n" +
      "Mukaf"
    },
    {
      question: "How do you manage communication with clients?",
      answer: "Hire an expert team of developers through ERS Tech; our resources can accommodate themselves according to the client’s time zone. We rely on modern communication gateways like Slack, Jira, Skype, etc.",
    },
    {
      question: "How is ERS different from other development companies?",
      answer:
      "You’ll experience the following perks and benefits.\n" +
      "Diverse source of expert developers\n" +
      "Simple and sleek hiring process\n" +
      "Shortlisting of talent under 24 hours\n" +
      "Dedicated talent specialist\n" +
      "Catering payments, legal and admin issues\n" +
      "Talent management and performance reporting throughout the collaboration" 
    },
  ];
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <>
      <Box className="container sm:max-w-full xsm:max-w-full xxs:max-w-full xxxs:max-w-full">
        <Box className="block text-center pb-6">
          <Typography
            className="capitalize !text-3xl !font-poppins !font-[500] text-center"
            variant="h2"
            component={"h2"}
            gutterBottom
          >
            Want To <span className="text-ersPrimary">Know More?</span>
          </Typography>
        </Box>
        <Box className="xl:w-[80%] lg:w-[80%] md:w-[80%] sm:w-[90%] xsm:w-[95%] xxs:w-[95%] xxxs:w-[95%] max-w-full mx-auto h-full min-h-full mb-[3rem]">
          {faqsData.map((faq, index) => (
            <div
              key={index}
              className={`faq-item ${activeIndex === index ? "open" : ""}`}
            >
              <div className="faq-question" onClick={() => toggleFAQ(index)}>
                <span className="accordian-counter text-ersPrimary">
                  0{index + 1}
                </span>
                <Typography
                  variant="h6"
                  component={"h6"}
                  className="!text-base !font-[400] !font-[poppins] xl:!mr-0 lg:!mr-0 md:!mr-0 sm:!mr-4 xsm:!mr-4 xxs:!mr-4 xxxs:!mr-4"
                >
                  {faq.question}
                </Typography>
                <span className="toggle-icon">
                  {activeIndex === index ? (
                    <Box className="text-ersPrimary h-[25px] !text-xl w-[25px] border-[1px] border-[#707070] rounded-[50%] flex items-center justify-center">
                      -
                    </Box>
                  ) : (
                    <Box className="text-ersPrimary h-[25px] w-[25px] !text-xl border-[1px] border-[#707070] rounded-[50%] flex items-center justify-center">
                      +
                    </Box>
                  )}
                </span>
              </div>
              <div className="faq-answer">
                {faq.answer.includes("\n") ? (
                  <ul className="custom-list">
                    {faq.answer.split("\n").map((item, i) =>
                      i === 0 ? (
                        <Typography
                          variant="h6"
                          component={"h6"}
                          className="!text-[14px] !font-[400] !font-[poppins]"
                        >
                          {item}
                        </Typography>
                      ) : (
                        <li key={i}>
                          <Typography
                    variant="h6"
                    component={"h6"}
                    className="!text-[13px] !font-[400] !font-[poppins]"
                  >
                    {item}
                  </Typography>
                        </li>
                      )
                    )}
                  </ul>
                ) : (
                  <Typography
                    variant="h6"
                    component={"h6"}
                    className="!text-[13px] !font-[400] !font-[poppins]"
                  >
                    {faq.answer}
                  </Typography>
                )}
              </div>
            </div>
          ))}
        </Box>
      </Box>
    </>
  );
}

export default Faqs;
