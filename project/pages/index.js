import React, { useEffect, useState } from "react";
import home from "@/styles/Home.module.css";
import Image from "next/image";
import AOS from "aos";
import CountUp from "react-countup";
import "aos/dist/aos.css";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination } from "swiper/modules";
import Link from "next/link";
//https://www.youngurbanproject.com/facebook-instagram-ads-course-online/

const Index = () => {
  useEffect(() => {
    AOS.init({
      delay: 100,
      duration: 1000,
    });
  }, []);

  const [faq, setFaq] = useState([
    {
      id: 1,
      properties: [
        {
          questions: "What is Digital Marketing, and why should I learn it?",
          answer:
            "Digital marketing is the art of promoting products, services, or brands through online platforms like social media, Google, and websites. It’s everywhere—from the ads you see on Instagram to the search results on Google. Learning digital marketing opens doors to exciting career opportunities, whether you want to work for a big company, start your own business, or freelance. It’s a skill set in high demand as businesses around the world move online!",
        },
        {
          questions:
            "Do I need any prior experience or a specific degree to learn Digital Marketing?",
          answer:
            "Not at all! You don’t need any previous experience or a specific degree to start learning digital marketing. Our courses are designed to guide you step-by-step, from the basics to more advanced strategies. Whether you're a complete beginner or have some knowledge, you'll find everything you need to master the subject. Passion and a willingness to learn are the only prerequisites!",
        },
        {
          questions:
            "What kind of jobs can I get after learning Digital Marketing? ",
          answer:
            "The job opportunities in digital marketing are endless! You could become a Social Media Manager, SEO Specialist, Google Ads Expert, Content Marketer, or even start your own online business. Companies of all sizes—startups, global brands, and agencies—are always on the lookout for digital marketing experts. Plus, you can freelance or offer your skills as a consultant. The digital world is growing, and so are the opportunities!",
        },
      ],
    },

    {
      id: 2,
      properties: [
        {
          questions: " How will a Digital Marketing course benefit my career?",
          answer:
            "Taking a digital marketing course can supercharge your career by equipping you with skills that are in high demand. You’ll learn how to build websites, run successful ad campaigns, optimize content for Google, and create strategies for social media. These skills can land you a job in top companies, allow you to freelance, or even help you launch your own business. With a certification, you stand out from the competition and increase your earning potential!",
        },
        {
          questions:
            "Can I get hands-on experience while learning Digital Marketing?",
          answer:
            "Absolutely! Our courses are designed to give you real-world experience. You’ll work on live projects, practice with industry tools like Google Analytics, and run mock campaigns to understand how everything works. By the end of the course, you’ll have a portfolio to showcase your skills, making you job-ready from day one!",
        },
        {
          questions:
            "Will learning Digital Marketing help me if I want to start my own business?",
          answer:
            "Yes, 100%! Digital marketing is essential for building and promoting any business online. You’ll learn how to create a strong online presence, reach your target audience, and convert visitors into loyal customers—all without spending a fortune on traditional advertising. With the strategies you master, you’ll be able to grow your business faster and smarter!",
        },
      ],
    },
    {
      id: 3,
      properties: [
        {
          questions: "Is Digital Marketing really a growing field?",
          answer:
            "Yes, digital marketing is booming! As more businesses move online, the demand for skilled digital marketers is skyrocketing. Every industry, from fashion to finance, needs digital marketing experts to build their online presence, attract customers, and grow their brand. Whether you want to work locally or globally, digital marketing offers endless growth opportunities as the industry keeps expanding.",
        },
        {
          questions: "What is the future scope of Digital Marketing?",
          answer:
            "The future of digital marketing is bright and evolving. With new technologies like artificial intelligence (AI), automation, and data-driven marketing, the field is only getting more innovative. Plus, with social media, e-commerce, and mobile users increasing, businesses will always need experts to manage their online strategies. Learning digital marketing now sets you up for a future-proof career that’s filled with possibilities!",
        },
        {
          questions: "What career growth can I expect in Digital Marketing?",
          answer:
            "Digital marketing offers rapid career growth! You can start as an intern or junior marketer and quickly climb the ladder to roles like Digital Marketing Manager, SEO Expert, Social Media Strategist, or even become a consultant.Plus, with experience, you can specialize in high- paying areas like performance marketing, email automation, or content strategy.Since the industry is growing, there’s always room to advance and take on exciting new challenges!",
        },
      ],
    },
  ]);
  const [selectedFaq, setSelectedFaq] = useState(faq[0]);

  const faqSelector = (id) => {
    const selectedFaq = faq.find((data) => data.id === id);
    setSelectedFaq(selectedFaq);
  };

  const faqClick = (id) => {
    faqSelector(id);
  };
  // console.log(selectedFaq.id);

  return (
    <div>
      <div className={home.mainbody}>
        {/* -----------Digital Marketing Mastery----------------- */}
        <div className={`${home.p1_main_body} container`}>
          <div className={`${home.p1_body1} `}>
            <h1>
              Digital Marketing Mastery
              {/* FaceBook & Instagram <br /> Ads Course */}
            </h1>
            <p>
              Get a High-Paying Job, Grow Your Business, or Start a Freelancing
              Career! Even if you&apos;re new to digital marketing, this course
              covers everything—Facebook & Instagram Ads, SEO, Google Ads, and
              more. With 150 hours of content, weekly live sessions, and monthly
              1-to-1 guidance, you&apos;ll never need another digital marketing
              course. <br />
              <b>🎯100% Job Assurance or 100% Money-Back Guarantee!</b>
            </p>
            <h3>📣 Mega Sale: 50% + Extra 20% Off </h3>
            <Link
              href={"https://nas.io/performance-growth-academy/products/ftpd"}
              className={`${home.p1_body1_button} `}
            >
              <div className={`${home.p1_body1_button_img} `}>
                <Image
                  src={"/images/verified.png"}
                  height={30}
                  width={30}
                  alt=""
                />{" "}
              </div>
              Get it now for ₹5999 (Actual Price ₹19999)
            </Link>
            <span>Rated 4.9/5⭐ on Google</span>
          </div>
          <div className={`${home.p1_body2} `}>
            <div className={`${home.p1_body2_video_sec} `}>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/OhdUTbH9T-U?si=tduoAKOo9EkxdAw4&amp;controls=0"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
            <div className={`${home.p1_body2_card_sec} `}>
              <div className={`${home.p1_body2_card_sec_profile} `}>
                <Image
                  src={"/images/profile.jpg"}
                  height={110}
                  width={110}
                  alt=""
                />
              </div>
              {/**/}
              <div className={`${home.p1_body2_card_content} `}>
                <h3>Mentor: Rohith Sasanken</h3>
                <p>Founder - Performance Growth Academy</p>
                <ul className={`${home.p1_body2_card_content_list} `}>
                  <li>✅ Managed over ₹100 Cr in Ad Spends</li>
                  <li>✅ 10+ Years of Industry Experience</li>
                  <li>✅ Worked with 300+ Clients </li>
                  <li>
                    {" "}
                    ✅ Expert in Scaling Businesses through Data-Driven
                    Strategies{" "}
                  </li>
                  <li>✅ Trained 5000+ Students in Digital Marketing </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* --------GOOGLE RATING Card---------- */}
        <div
          className={`${home.p2_main_body} `}
          style={{
            background: `url(/images/lines.svg) no-repeat top/cover`,
          }}
        >
          <div className={`${home.p2_main_body_rating_sec} container`}>
            <div
              className={`${home.p2_main_body_rating_card}`}
              data-aos="fade-up"
            >
              <span>4.9⭐</span>
              GOOGLE RATING
            </div>
            <div
              className={`${home.p2_main_body_rating_card}`}
              data-aos="fade-up"
              data-aos-delay="300"
            >
              {/* <span>70+</span> */}
              <span>
                <CountUp start={0} end={250} duration={3} />+
              </span>
              VIDEO LESSON{" "}
            </div>
            <div
              className={`${home.p2_main_body_rating_card}`}
              data-aos="fade-up"
              data-aos-delay="600"
            >
              {/* <span>24+</span> */}
              <span>
                <CountUp start={0} end={150} duration={4} />+
              </span>
              HOURS CONTENT{" "}
            </div>
            <div
              className={`${home.p2_main_body_rating_card}`}
              data-aos="fade-up"
              data-aos-delay="900"
            >
              <span>Lifetime</span>
              SUPPORT{" "}
            </div>
          </div>
        </div>

        {/* ------------- Master Digital Marketing Across && Who should enroll-----------------*/}

        <div className={`${home.p3_body} `}>
          <div className={`${home.p3_body_content_sec} container`}>
            <h3>
              Master Digital Marketing Across Leading Industries! 100% Job
              Assurance or Money-Back Guarantee!
            </h3>
            <p>
              Become an industry-focused digital marketing expert with our
              Digital Marketing Mastery course! Whether your goal is to land a
              high-paying job, grow your business, or start freelancing, this
              course provides you with specialized training in top industries
              like SAAS, FMCG, Real Estate, Retail, Healthcare, Education, Food,
              and more. You&apos;ll create and implement powerful strategies
              tailored to each industry, ensuring you&apos;re prepared for
              real-world marketing challenges.
            </p>
            <p>
              Not only that, but you&apos;ll also learn how to build successful
              online businesses through Dropshipping, Affiliate Marketing, and
              Print On Demand, turning your skills into profitable ventures.
            </p>
            <p>
              With 150 hours of content, weekly live sessions, and monthly
              1-to-1 sessions, you&apos;ll gain the skills and confidence to
              excel in digital marketing. Plus, enjoy 100% Job Assurance or your
              money back if you don&apos;t secure a job.
            </p>
            <p>
              Enroll now for just ₹5999 (Actual Price ₹19999) during our Mega
              Sale! Take control of your future in digital marketing today.
            </p>
            <div className={`${home.p3_body_content_card_container} `}>
              <h3>
                <span>Who should enroll</span> for this course
              </h3>
              <ul className={`${home.p3_body_content_card_sec} `}>
                <li className={`${home.p3_body_content_card} `}>
                  <div className={`${home.p3_body_content_card_img} `}>
                    <Image
                      src={"/images/tick.png"}
                      height={20}
                      width={25}
                      alt=""
                    />
                  </div>
                  Marketers
                </li>
                <li className={`${home.p3_body_content_card} `}>
                  <div className={`${home.p3_body_content_card_img} `}>
                    <Image
                      src={"/images/tick.png"}
                      height={20}
                      width={25}
                      alt=""
                    />
                  </div>
                  Business Owners{" "}
                </li>
                <li className={`${home.p3_body_content_card} `}>
                  <div className={`${home.p3_body_content_card_img} `}>
                    <Image
                      src={"/images/tick.png"}
                      height={20}
                      width={25}
                      alt=""
                    />
                  </div>
                  Agency Owners{" "}
                </li>
                <li className={`${home.p3_body_content_card} `}>
                  <div className={`${home.p3_body_content_card_img} `}>
                    <Image
                      src={"/images/tick.png"}
                      height={20}
                      width={25}
                      alt=""
                    />
                  </div>
                  Social Media Marketers{" "}
                </li>
                <li className={`${home.p3_body_content_card} `}>
                  <div className={`${home.p3_body_content_card_img} `}>
                    <Image
                      src={"/images/tick.png"}
                      height={20}
                      width={25}
                      alt=""
                    />
                  </div>
                  Freelancers{" "}
                </li>
                <li className={`${home.p3_body_content_card} `}>
                  <div className={`${home.p3_body_content_card_img} `}>
                    <Image
                      src={"/images/tick.png"}
                      height={20}
                      width={25}
                      alt=""
                    />
                  </div>
                  E-Com Founders{" "}
                </li>
                <li className={`${home.p3_body_content_card} `}>
                  <div className={`${home.p3_body_content_card_img} `}>
                    <Image
                      src={"/images/tick.png"}
                      height={20}
                      width={25}
                      alt=""
                    />
                  </div>
                  Professionals{" "}
                </li>
                <li className={`${home.p3_body_content_card} `}>
                  <div className={`${home.p3_body_content_card_img} `}>
                    <Image
                      src={"/images/tick.png"}
                      height={20}
                      width={25}
                      alt=""
                    />
                  </div>
                  Freshers
                </li>
              </ul>
              <p>
                Digital Marketing is one of the Highest Paying Jobs in 2024.
                This course will prepare you to Get a High-Paying Job, get
                Freelance Clients, Grow Your Business or Start Your E-commerce
                Business
              </p>
            </div>
          </div>
        </div>

        {/* ----------- Digital Marketing is one of the---------------- */}

        <div className={`${home.p5_body} `}>
          <div className={`${home.p5_body_container} container`}>
            <h3>
              Digital Marketing is one of the <br />
              <span>Highest Paying </span> Digital
              <br /> Skills in 2024.
            </h3>
            <div className={home.p5_body_btn_paragraph_sec}>
              <p>
                This course will prepare you to get a high-paying job, acquire
                freelance clients, or grow your business.
              </p>
              <Link
                href={"https://nas.io/performance-growth-academy/products/ftpd"}
                className={`${home.p5_body_button} `}
              >
                <div className={`${home.p5_body_button_img} `}>
                  <Image
                    src={"/images/verified.png"}
                    height={30}
                    width={30}
                    alt=""
                  />{" "}
                </div>
                Get it now for ₹5999 (Actual Price ₹19999)
              </Link>
            </div>

            <div className={`${home.p5_body_card_sec} `}>
              <div className={`${home.p5_body_card} `}>
                <Image
                  src={"/images/opportunity-card1.jpg"}
                  height={380}
                  width={1600}
                  alt=""
                />

                <div className={`${home.p5_body_card_salary_icon} `}>
                  INR 15,00,000 / Year
                </div>
              </div>
              <div className={`${home.p5_body_card} `}>
                <Image
                  src={"/images/opportunity-card2.jpg"}
                  height={380}
                  width={1600}
                  alt=""
                />

                <div className={`${home.p5_body_card_salary_icon} `}>
                  INR 1,86,404 / Month
                </div>
              </div>
              <div className={`${home.p5_body_card} `}>
                <Image
                  src={"/images/opportunity-card3.jpg"}
                  height={380}
                  width={1600}
                  alt=""
                />

                <div className={`${home.p5_body_card_salary_icon} `}>
                  INR 20,41,000 / Year
                </div>
              </div>
              <div className={`${home.p5_body_card} `}>
                <Image
                  src={"/images/opportunity-card4.jpg"}
                  height={380}
                  width={1600}
                  alt=""
                />

                <div className={`${home.p5_body_card_salary_icon} `}>
                  INR 2,17,443 / Month
                </div>
              </div>
              <div className={`${home.p5_body_card} `}>
                <Image
                  src={"/images/opportunity-card5.jpg"}
                  height={380}
                  width={1600}
                  alt=""
                />

                <div className={`${home.p5_body_card_salary_icon} `}>
                  INR 35,00,000 / Year
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*---------Course Curriculum--------------  */}

        <div className={`${home.p6_body} `}>
          <div className={`${home.p6_body_container} container`}>
            <h3> Social Media Marketing Course Curriculum</h3>
            <p>
              Learn <b> Beginner-to-Advanced</b> Level Social Media Marketing
              with 70+ video lessons
            </p>
            {/* <div className={`${home.p6_body_card_sec} `}> */}
            {/* --------Social Media Curriculam start -------------- */}
            <Swiper
              pagination={{ type: "fraction" }}
              spaceBetween={40}
              slidesPerView={1}
              loop={true}
              breakpoints={{
                600: {
                  slidesPerView: 2,
                },
              }}
              navigation={{
                nextEl: "#swiper_next_btn",
                prevEl: "#swiper_prev_btn",
              }}
              modules={[Pagination, Navigation]}
              className={`mySwiper ${home.p6_body_card_sec} `}
            >
              <SwiperSlide>
                <div className={`${home.p6_body_card} `}>
                  <h3>Introduction to Social Media Marketing</h3>{" "}
                  <ul>
                    <li> Overview of Social Media Marketing SMM</li>
                    <li>Importance of SMM in the Digital Landscape</li>
                    <li>Understanding Different Social Media Platforms</li>
                    <li>Defining Goals and KPIs for SMM Campaigns</li>
                  </ul>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={`${home.p6_body_card} `}>
                  <h3> Understanding Meta Ads</h3>{" "}
                  <ul>
                    <li>Overview of Facebook and Instagram Ads</li>
                    <li>Ad Formats, Placements, and Objectives</li>
                    <li>Meta Business Suite and Ads Manager</li>
                  </ul>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={`${home.p6_body_card} `}>
                  <h3> Creating Effective Ad Campaigns</h3>{" "}
                  <ul>
                    <li>Audience Targeting and Custom Audiences</li>
                    <li>Ad Creative: Copywriting, Visuals, and Videos</li>
                    <li>AB Testing and Ad Optimization</li>
                  </ul>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={`${home.p6_body_card} `}>
                  <h3> Advanced Strategies</h3>{" "}
                  <ul>
                    <li>Retargeting and Lookalike Audiences</li>
                    <li>Measuring ROI and Advanced Analytics</li>
                    <li>Meta Pixel and Conversion Tracking</li>
                  </ul>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={`${home.p6_body_card} `}>
                  <h3> LinkedIn Fundamentals</h3>{" "}
                  <ul>
                    <li>Understanding LinkedIn for B2B Marketing</li>
                    <li>Profile Optimization and Personal Branding</li>
                    <li>Company Pages and Content Strategies</li>
                  </ul>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={`${home.p6_body_card} `}>
                  <h3> LinkedIn Ads</h3>{" "}
                  <ul>
                    <li>Ad Types: Sponsored Content, InMail, and Text Ads</li>
                    <li>Targeting Options and Campaign Setup</li>
                    <li>Lead Generation and Sales Funnel Strategies</li>
                  </ul>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={`${home.p6_body_card} `}>
                  <h3> Engagement and Growth</h3>{" "}
                  <ul>
                    <li>Building a Professional Network</li>
                    <li>LinkedIn Analytics and Performance Measurement</li>
                  </ul>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={`${home.p6_body_card} `}>
                  <h3> Twitter Basics</h3>{" "}
                  <ul>
                    <li> Twitter &apos;s Role in Real-Time Marketing</li>
                    <li>Profile and Content Optimization</li>
                    <li>Understanding Twitter Ads and Ad Types</li>
                  </ul>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={`${home.p6_body_card} `}>
                  <h3> Twitter Ad Campaigns</h3>{" "}
                  <ul>
                    <li>Audience Targeting and Campaign Setup</li>
                    <li>Best Practices for Promoted Tweets and Trends</li>
                    <li>Utilizing Twitter Analytics for Insights</li>
                  </ul>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={`${home.p6_body_card} `}>
                  <h3> Advanced Strategies</h3>{" "}
                  <ul>
                    <li>Real-time Engagement and Influencer Outreach</li>
                    <li>Crisis Management and Customer Service via Twitter</li>
                  </ul>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={`${home.p6_body_card} `}>
                  <h3> Twitter Ad Campaigns</h3>{" "}
                  <ul>
                    <li>Audience Targeting and Campaign Setup</li>
                    <li>Best Practices for Promoted Tweets and Trends</li>
                    <li>Utilizing Twitter Analytics for Insights</li>
                  </ul>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={`${home.p6_body_card} `}>
                  <h3> Snapchat Overview</h3>{" "}
                  <ul>
                    <li>Understanding Snapchat&apos;s Unique Audience</li>
                    <li>Profile Creation and Content Strategy</li>
                  </ul>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={`${home.p6_body_card} `}>
                  <h3> Snapchat Ads</h3>{" "}
                  <ul>
                    <li>
                      Ad Types: Snap Ads, Collection Ads, Story Ads, Filters,
                      and Lenses
                    </li>
                    <li>Targeting and Retargeting on Snapchat</li>
                    <li>
                      Measuring Campaign Performance with Snapchat Insights
                    </li>
                  </ul>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={`${home.p6_body_card} `}>
                  <h3>Content Strategies</h3>{" "}
                  <ul>
                    <li>Creating Engaging and Interactive Content</li>
                    <li>
                      Leveraging AR Augmented Reality and Lenses for Branding
                    </li>
                  </ul>
                </div>{" "}
              </SwiperSlide>
              <SwiperSlide>
                <div className={`${home.p6_body_card} `}>
                  <h3> Understanding TikTok</h3>{" "}
                  <ul>
                    <li>TikTok&apos;s User Demographics and Algorithm</li>
                    <li>Profile Optimization and Content Planning</li>
                  </ul>
                </div>{" "}
              </SwiperSlide>
              <SwiperSlide>
                <div className={`${home.p6_body_card} `}>
                  <h3>TikTok Ads</h3>{" "}
                  <ul>
                    <li>
                      Ad Formats: In-Feed Ads, Branded Hashtags, Effects, and
                      TopView Ads
                    </li>
                    <li>Targeting, Budgeting, and Bidding Strategies</li>
                    <li>Influencer Marketing and Collaborations</li>
                  </ul>
                </div>{" "}
              </SwiperSlide>
              <SwiperSlide>
                <div className={`${home.p6_body_card} `}>
                  <h3>Viral Content Creation</h3>{" "}
                  <ul>
                    <li>Trends, Challenges, and Content Strategy</li>
                    <li>Analyzing TikTok Analytics and Metrics</li>
                  </ul>
                </div>{" "}
              </SwiperSlide>
              <SwiperSlide>
                <div className={`${home.p6_body_card} `}>
                  <h3>Creating a Multi-Platform Strategy</h3>{" "}
                  <ul>
                    <li>Aligning Campaigns Across Platforms</li>
                    <li>Cross-Channel Analytics and Performance Tracking</li>
                    <li>Case Studies and Best Practices</li>
                  </ul>
                </div>{" "}
              </SwiperSlide>
              <SwiperSlide>
                <div className={`${home.p6_body_card} `}>
                  <h3> Tools and Automation</h3>{" "}
                  <ul>
                    <li>
                      Social Media Management Tools (e.g., Hootsuite, Buffer)
                    </li>
                    <li>Scheduling, Automation, and Monitoring</li>
                    <li>Analyzing Data and Making Data-Driven Decisions</li>
                  </ul>
                </div>{" "}
              </SwiperSlide>
              <SwiperSlide>
                <div className={`${home.p6_body_card} `}>
                  <h3>Current Trends and Innovations</h3>{" "}
                  <ul>
                    <li>Leveraging AI and Machine Learning in SMM</li>
                    <li>Video and Live Streaming Strategies</li>
                    <li>
                      The Rise of Short-form Content and Micro-Influencers
                    </li>
                  </ul>
                </div>{" "}
              </SwiperSlide>
              <SwiperSlide>
                <div className={`${home.p6_body_card} `}>
                  <h3>Future of Social Media Marketing</h3>{" "}
                  <ul>
                    <li>Exploring New and Emerging Platforms</li>
                    <li>Preparing for Privacy Changes and Platform Updates</li>
                  </ul>
                </div>{" "}
              </SwiperSlide>
              <SwiperSlide>
                <div className={`${home.p6_body_card} `}>
                  <h3> Social Media Marketing Capstone Project</h3>{" "}
                  <ul>
                    <li>Real-life Scenario Based Projects</li>
                    <li>Developing a Comprehensive Social Media Strategy</li>
                    <li>Presenting the Strategy and Receiving Feedback</li>
                  </ul>
                </div>
              </SwiperSlide>
              <div className="swiper-arrow-icon-sec">
                <div className="swiper-arrow-icon " id="swiper_prev_btn">
                  <Image
                    src={"/images/swiper-arrow-left.png"}
                    height={100}
                    width={100}
                    alt=""
                  />{" "}
                </div>
                <div className="swiper-arrow-icon " id="swiper_next_btn">
                  <Image
                    src={"/images/swiper-arrow.png"}
                    height={100}
                    width={100}
                    alt=""
                  />{" "}
                </div>
              </div>{" "}
            </Swiper>
            {/* --------Social Media Curriculam End -------------- */}
            {/* --------SEO Curriculam start -------------- */}
            <h3>SEO Curriculum</h3>
            <p>
              Learn <b> Beginner-to-Advanced</b> Level Search Engine
              Optimisation with 100+ video lessons
            </p>
            <Swiper
              pagination={{ type: "fraction" }}
              spaceBetween={30}
              slidesPerView={1}
              loop={true}
              navigation={{
                nextEl: "#swiper_next_btn",
                prevEl: "#swiper_prev_btn",
              }}
              breakpoints={{
                600: {
                  slidesPerView: 2,
                },
              }}
              modules={[Pagination, Navigation]}
              className={`mySwiper ${home.p6_body_card_sec} `}
            >
              <SwiperSlide>
                <div className={`${home.p6_body_card} `}>
                  <h3>Introduction to SEO</h3>{" "}
                  <ul>
                    <li> What is SEO Understanding Its Importance </li>
                    <li>
                      Key Components of SEO On-Page, Off-Page, and Technical SEO{" "}
                    </li>
                    <li>Understanding Search Engines and How They Work </li>
                    <li>SEO Terminology and Concepts </li>
                  </ul>
                </div>{" "}
              </SwiperSlide>
              <SwiperSlide>
                <div className={`${home.p6_body_card} `}>
                  {" "}
                  <h3>Keyword Research and Analysis</h3>{" "}
                  <ul>
                    <li>Importance of Keywords in SEO</li>
                    <li>Types of Keywords Short-Tail, Long-Tail, LSI</li>
                    <li>Tools for Keyword Research </li>
                    <li>
                      Competitor Analysis and Finding High-Intent Keywords{" "}
                    </li>
                    <li>
                      Creating a Keyword Strategy and Mapping Keywords to
                      Content
                    </li>
                  </ul>
                </div>{" "}
              </SwiperSlide>
              <SwiperSlide>
                <div className={`${home.p6_body_card} `}>
                  {" "}
                  <h3> On-Page SEO Optimization </h3>{" "}
                  <ul>
                    <li>Understanding On-Page SEO Factors </li>
                    <li>Title Tags, Meta Descriptions, and Header Tags </li>
                    <li>URL Structure and Internal Linking </li>
                    <li>Image Optimization and Alt Text </li>
                    <li>
                      Creating SEO-Friendly Content and the Importance of User
                      Intent{" "}
                    </li>
                  </ul>
                </div>{" "}
              </SwiperSlide>
              <SwiperSlide>
                <div className={`${home.p6_body_card} `}>
                  {" "}
                  <h3> Technical SEO </h3>{" "}
                  <ul>
                    <li>
                      Understanding Website Architecture and Its Impact on SEO{" "}
                    </li>
                    <li>Site Speed Optimization and Mobile-Friendliness </li>
                    <li>HTTP vs HTTPS and SSL Certificates</li>
                    <li> XML Sitemaps and Robots txt </li>
                    <li>Canonical Tags, Redirections, and 404 Errors </li>
                    <li>Structured Data, Schema Markup, and Rich Snippets</li>
                  </ul>
                </div>{" "}
              </SwiperSlide>
              <SwiperSlide>
                <div className={`${home.p6_body_card} `}>
                  {" "}
                  <h3>Off-Page SEO Optimization</h3>{" "}
                  <ul>
                    <li> Importance of Off-Page SEO and Link Building </li>
                    <li>
                      {" "}
                      Types of Backlinks Natural, Manually Built, and
                      Self-Created{" "}
                    </li>
                    <li>Strategies for Acquiring High-Quality Backlinks </li>
                    <li>
                      Guest Posting, Influencer Outreach, and Content
                      Syndication
                    </li>
                    <li>Social Signals and Their Impact on SEO </li>
                    <li>Monitoring and Disavowing Toxic Backlinks</li>
                  </ul>
                </div>{" "}
              </SwiperSlide>
              <SwiperSlide>
                <div className={`${home.p6_body_card} `}>
                  {" "}
                  <h3> Local SEO </h3>{" "}
                  <ul>
                    <li>
                      Understanding Local SEO and Its Importance for Businesses{" "}
                    </li>
                    <li> Optimizing Google My Business Profile </li>
                    <li>Local Citations, Reviews, and Local Link Building </li>
                    <li>Geo-Targeted Keywords and Local Content Strategies </li>
                    <li>Tracking and Measuring Local SEO Performance </li>
                  </ul>
                </div>{" "}
              </SwiperSlide>
              <SwiperSlide>
                <div className={`${home.p6_body_card} `}>
                  {" "}
                  <h3> SEO for E-Commerce </h3>{" "}
                  <ul>
                    <li>Unique SEO Challenges for E-Commerce Sites </li>
                    <li>
                      Product Page Optimization and Category Page Structure
                    </li>
                    <li>Using Structured Data for E-Commerce SEO </li>
                    <li>
                      Creating an SEO-Friendly URL Structure for E-Commerce{" "}
                    </li>
                    <li>Managing Duplicate Content and Canonical Issues </li>
                  </ul>
                </div>{" "}
              </SwiperSlide>
              <SwiperSlide>
                <div className={`${home.p6_body_card} `}>
                  {" "}
                  <h3>Content Marketing and SEO </h3>{" "}
                  <ul>
                    <li> Role of Content in SEO Strategy </li>
                    <li>
                      Creating High-Quality, Engaging, and Shareable Content
                    </li>
                    <li>
                      Content Types Blogs, Articles, Infographics, Videos, and
                      More
                    </li>
                    <li>Content Calendar Creation and Management </li>
                    <li>Content Promotion Strategies to Improve SEO</li>
                  </ul>
                </div>{" "}
              </SwiperSlide>
              <SwiperSlide>
                <div className={`${home.p6_body_card} `}>
                  {" "}
                  <h3>Analytics and SEO Performance Measurement </h3>{" "}
                  <ul>
                    <li>
                      Setting Up Google Analytics and Google Search Console{" "}
                    </li>
                    <li>
                      Tracking Key SEO Metrics Traffic, Bounce Rate, Conversions{" "}
                    </li>
                    <li>
                      Using Tools for Advanced SEO Analysis eg Ahrefs, SEMrush{" "}
                    </li>
                    <li>
                      Interpreting Data and Making Data-Driven SEO Decisions{" "}
                    </li>
                    <li>Reporting SEO Performance to Stakeholders </li>
                  </ul>
                </div>{" "}
              </SwiperSlide>
              <SwiperSlide>
                <div className={`${home.p6_body_card} `}>
                  {" "}
                  <h3>Advanced SEO Strategies </h3>{" "}
                  <ul>
                    <li>
                      Voice Search Optimization and Preparing for the Future
                    </li>
                    <li>Mobile SEO and Accelerated Mobile Pages AMP </li>
                    <li>International SEO Strategies for Global Reach </li>
                    <li>SEO for Video and Image Search </li>
                    <li>Leveraging AI and Machine Learning for SEO </li>
                  </ul>
                </div>{" "}
              </SwiperSlide>
              <SwiperSlide>
                <div className={`${home.p6_body_card} `}>
                  {" "}
                  <h3>SEO Auditing</h3>{" "}
                  <ul>
                    <li>Conducting a Comprehensive SEO Audit </li>
                    <li>
                      Identifying Technical Issues, Content Gaps, and Backlink
                      Profiles
                    </li>
                    <li>
                      Creating an SEO Action Plan Based on Audit Findings{" "}
                    </li>
                    <li>Tools and Techniques for SEO Auditing </li>
                  </ul>
                </div>{" "}
              </SwiperSlide>
              <SwiperSlide>
                <div className={`${home.p6_body_card} `}>
                  {" "}
                  <h3>SEO Capstone Project</h3>{" "}
                  <ul>
                    <li>
                      {" "}
                      Developing a Comprehensive SEO Strategy for a Real-World
                      Business{" "}
                    </li>
                    <li>Implementing SEO Best Practices and Techniques </li>
                    <li>Analyzing and Presenting Results </li>
                    <li>Receiving Feedback and Suggestions for Improvement</li>
                  </ul>
                </div>
              </SwiperSlide>
              <div className="swiper-arrow-icon-sec">
                <div className="swiper-arrow-icon " id="swiper_prev_btn">
                  <Image
                    src={"/images/swiper-arrow-left.png"}
                    height={100}
                    width={100}
                    alt=""
                  />{" "}
                </div>
                <div className="swiper-arrow-icon " id="swiper_next_btn">
                  <Image
                    src={"/images/swiper-arrow.png"}
                    height={100}
                    width={100}
                    alt=""
                  />{" "}
                </div>
              </div>{" "}
            </Swiper>
            {/* --------SEO Curriculam ends -------------- */}

            {/* --------Google Ads Curriculam start -------------- */}
            <h3>Google Ads Curriculum</h3>
            <p>
              Learn <b> Beginner-to-Advanced</b> Level Google Ads
            </p>
            <Swiper
              pagination={{ type: "fraction" }}
              spaceBetween={30}
              slidesPerView={1}
              loop={true}
              navigation={{
                nextEl: "#swiper_next_btn",
                prevEl: "#swiper_prev_btn",
              }}
              breakpoints={{
                600: {
                  slidesPerView: 2,
                },
              }}
              modules={[Pagination, Navigation]}
              className={`mySwiper ${home.p6_body_card_sec} `}
            >
              <SwiperSlide>
                <div className={`${home.p6_body_card} `}>
                  <h3>Introduction to Google Ads </h3>{" "}
                  <ul>
                    <li>
                      Understanding Google Ads and Its Importance in Digital
                      Marketing
                    </li>{" "}
                    <li>
                      Overview of the Google Ads Ecosystem Search, Display,
                      Video, Shopping, and App Campaigns{" "}
                    </li>{" "}
                    <li>
                      Key Terminology in Google Ads CPC, CTR, Quality Score, Ad
                      Rank
                    </li>{" "}
                    <li>Setting Goals and KPIs for Google Ads Campaigns </li>{" "}
                  </ul>
                </div>{" "}
              </SwiperSlide>
              <SwiperSlide>
                <div className={`${home.p6_body_card} `}>
                  <h3>Google Ads Account Setup </h3>{" "}
                  <ul>
                    <li>Creating and Structuring a Google Ads Account </li>{" "}
                    <li>Setting Up Billing and Payment Options </li>{" "}
                    <li>Navigating Google Ads Interface and Tools </li>{" "}
                    <li>
                      Linking Google Ads to Google Analytics and Other Tools{" "}
                    </li>{" "}
                  </ul>
                </div>{" "}
              </SwiperSlide>
              <SwiperSlide>
                <div className={`${home.p6_body_card} `}>
                  <h3> Keyword Research and Campaign Planning </h3>{" "}
                  <ul>
                    <li>Importance of Keyword Research for Google Ads</li>{" "}
                    <li> Using Google Keyword Planner and Other Tools </li>{" "}
                    <li>
                      Creating a Keyword Strategy Match Types, Negative
                      Keywords, and Long-Tail Keywords{" "}
                    </li>{" "}
                    <li>Organizing Keywords into Ad Groups and Campaigns </li>{" "}
                  </ul>
                </div>{" "}
              </SwiperSlide>
              <SwiperSlide>
                <div className={`${home.p6_body_card} `}>
                  <h3> Search Campaigns</h3>{" "}
                  <ul>
                    <li>
                      Understanding Search Campaigns and Their Objectives{" "}
                    </li>{" "}
                    <li>
                      Structuring a Search Campaign Ad Groups, Ads, and Keywords{" "}
                    </li>{" "}
                    <li>
                      Writing Effective Text Ads Headlines, Descriptions, and
                      Display URLs{" "}
                    </li>{" "}
                    <li>Dynamic Search Ads and Responsive Search Ads </li>{" "}
                    <li>Setting Bids and Budget for Search Campaigns </li>{" "}
                  </ul>
                </div>{" "}
              </SwiperSlide>
              <SwiperSlide>
                <div className={`${home.p6_body_card} `}>
                  <h3>Display Campaigns </h3>{" "}
                  <ul>
                    <li>Understanding Display Campaigns and Their Benefits</li>{" "}
                    <li>
                      Setting Up Display Campaigns Audience Targeting and
                      Placements{" "}
                    </li>{" "}
                    <li>
                      Creating Effective Display Ads Image, Responsive, and
                      Video Ads{" "}
                    </li>{" "}
                    <li>
                      Using Display Planner and Targeting Options Demographics,
                      Affinity, and In-Market Audiences{" "}
                    </li>{" "}
                    <li>
                      Measuring Performance and Optimizing Display Campaigns{" "}
                    </li>{" "}
                  </ul>
                </div>{" "}
              </SwiperSlide>
              <SwiperSlide>
                <div className={`${home.p6_body_card} `}>
                  <h3>Video Campaigns </h3>{" "}
                  <ul>
                    <li> Introduction to Video Ads and YouTube Advertising</li>{" "}
                    <li>
                      Types of Video Ads Skippable, Non-Skippable, Bumper Ads,
                      and Outstream Ads
                    </li>{" "}
                    <li>
                      Types of Video Ads Skippable, Non-Skippable, Bumper Ads,
                      and Outstream Ads
                    </li>{" "}
                    <li>
                      Setting Up a Video Campaign Targeting, Bidding, and
                      Budgeting
                    </li>{" "}
                    <li> Creating Engaging Video Ads and Best Practices </li>{" "}
                    <li>
                      {" "}
                      YouTube Analytics and Measuring Video Campaign Performance{" "}
                    </li>{" "}
                  </ul>
                </div>{" "}
              </SwiperSlide>
              <SwiperSlide>
                <div className={`${home.p6_body_card} `}>
                  <h3>Shopping Campaigns </h3>{" "}
                  <ul>
                    <li>
                      {" "}
                      Understanding Google Shopping Ads and Merchant Center
                    </li>{" "}
                    <li>
                      Setting Up and Optimizing a Merchant Center Account{" "}
                    </li>{" "}
                    <li> Creating and Managing Shopping Campaigns </li>{" "}
                    <li>
                      {" "}
                      Using Smart Shopping Campaigns and Showcase Shopping Ads{" "}
                    </li>{" "}
                    <li>
                      Optimizing Product Feed for Better Performance{" "}
                    </li>{" "}
                  </ul>
                </div>{" "}
              </SwiperSlide>
              <SwiperSlide>
                <div className={`${home.p6_body_card} `}>
                  <h3>App Campaigns </h3>{" "}
                  <ul>
                    <li>Introduction to Google App Campaigns </li>{" "}
                    <li>Setting Up Universal App Campaigns </li>{" "}
                    <li>
                      Targeting, Bidding, and Budgeting for App Campaigns{" "}
                    </li>{" "}
                    <li>Tracking App Installs and In-App Conversions </li>{" "}
                    <li>Best Practices for App Promotion and Measurement</li>{" "}
                  </ul>
                </div>{" "}
              </SwiperSlide>
              <SwiperSlide>
                <div className={`${home.p6_body_card} `}>
                  <h3> Advanced Google Ads Strategies </h3>{" "}
                  <ul>
                    <li>Remarketing Strategies with Google Ads </li>{" "}
                    <li>
                      {" "}
                      Setting Up and Optimizing Remarketing Lists for Search Ads
                      RLSA{" "}
                    </li>{" "}
                    <li>
                      Creating Display Remarketing and Dynamic Remarketing
                      Campaigns{" "}
                    </li>{" "}
                    <li>
                      {" "}
                      Implementing Audience Targeting and Advanced Segmentation{" "}
                    </li>{" "}
                    <li>
                      Using Automated Bidding Strategies Target CPA, Target
                      ROAS, and Maximize Conversions{" "}
                    </li>{" "}
                  </ul>
                </div>{" "}
              </SwiperSlide>
              <SwiperSlide>
                <div className={`${home.p6_body_card} `}>
                  <h3>Conversion Tracking and Analytics </h3>{" "}
                  <ul>
                    <li> Setting Up Conversion Tracking in Google Ads</li>{" "}
                    <li>
                      Understanding Different Types of Conversions and Their
                      Importance{" "}
                    </li>{" "}
                    <li>
                      Linking Google Ads with Google Analytics for Advanced
                      Insights{" "}
                    </li>{" "}
                    <li>
                      Measuring Key Metrics Quality Score, CTR, Conversion Rate,
                      and Cost per Acquisition{" "}
                    </li>{" "}
                    <li>
                      Creating Custom Reports and Analyzing Campaign Performance
                    </li>{" "}
                  </ul>
                </div>{" "}
              </SwiperSlide>
              <SwiperSlide>
                <div className={`${home.p6_body_card} `}>
                  <h3>Campaign Optimization and Management </h3>{" "}
                  <ul>
                    <li>
                      Analyzing Campaign Performance and Identifying Areas for
                      Improvement{" "}
                    </li>{" "}
                    <li>
                      Using Google Ads Editor for Bulk Edits and Management
                    </li>{" "}
                    <li>AB Testing for Ads and Landing Pages </li>{" "}
                    <li>Budget Management and Bid Adjustments </li>{" "}
                    <li>
                      Continuous Optimization Techniques Ad Extensions, Quality
                      Score Improvement, and Competitor Analysis{" "}
                    </li>{" "}
                  </ul>
                </div>{" "}
              </SwiperSlide>
              <SwiperSlide>
                <div className={`${home.p6_body_card} `}>
                  <h3>Google Ads Policy and Compliance </h3>{" "}
                  <ul>
                    <li>Understanding Google Ads Policies and Guidelines </li>{" "}
                    <li>Navigating Policy Violations and Appeals </li>{" "}
                    <li>
                      Avoiding Common Policy Mistakes and Ensuring Compliance{" "}
                    </li>{" "}
                  </ul>
                </div>{" "}
              </SwiperSlide>
              <SwiperSlide>
                <div className={`${home.p6_body_card} `}>
                  <h3>Advanced Tools and Integrations </h3>{" "}
                  <ul>
                    <li>Utilizing Google Ads Scripts and Automated Rules </li>{" "}
                    <li>
                      Integrating Google Ads with CRM and Third-Party Tools{" "}
                    </li>{" "}
                    <li>Exploring Google Ads API for Automation </li>{" "}
                  </ul>
                </div>{" "}
              </SwiperSlide>
              <SwiperSlide>
                <div className={`${home.p6_body_card} `}>
                  <h3>Google Ads Capstone Project</h3>{" "}
                  <ul>
                    <li>
                      {" "}
                      Developing a Full-Funnel Google Ads Strategy for a Real
                      Business{" "}
                    </li>{" "}
                    <li>
                      Implementing Campaigns Across Search, Display, Video, and
                      Shopping Networks{" "}
                    </li>{" "}
                    <li>
                      Analyzing Results, Presenting Findings, and
                      Receiving Feedback
                    </li>{" "}
                  </ul>
                </div>{" "}
              </SwiperSlide>
              <div className="swiper-arrow-icon-sec">
                <div className="swiper-arrow-icon " id="swiper_prev_btn">
                  <Image
                    src={"/images/swiper-arrow-left.png"}
                    height={100}
                    width={100}
                    alt=""
                  />{" "}
                </div>
                <div className="swiper-arrow-icon " id="swiper_next_btn">
                  <Image
                    src={"/images/swiper-arrow.png"}
                    height={100}
                    width={100}
                    alt=""
                  />{" "}
                </div>
              </div>{" "}
            </Swiper>
            {/* --------Googl Ads Curriculam ends -------------- */}

            {/* -------- Content Marketing Curriculum start -------------- */}
            <h3> Content Marketing Curriculum</h3>
            <p>
              Learn <b> Beginner-to-Advanced</b> Level Content Marketing
            </p>
            <Swiper
              pagination={{ type: "fraction" }}
              spaceBetween={30}
              slidesPerView={1}
              loop={true}
              navigation={{
                nextEl: "#swiper_next_btn",
                prevEl: "#swiper_prev_btn",
              }}
              breakpoints={{
                600: {
                  slidesPerView: 2,
                },
              }}
              modules={[Pagination, Navigation]}
              className={`mySwiper ${home.p6_body_card_sec} `}
            >
              <SwiperSlide>
                <div className={`${home.p6_body_card} `}>
                  <h3>Introduction to Content Marketing </h3>{" "}
                  <ul>
                    <li>Understanding Content Marketing and Its Importance </li>{" "}
                    <li>Key Elements of a Content Marketing Strategy</li>{" "}
                    <li>
                      Types of Content Formats Blogs, Videos, Infographics,
                      Podcasts, etc.{" "}
                    </li>{" "}
                    <li>
                      Aligning Content with Business Goals and Audience Needs{" "}
                    </li>{" "}
                    <li>
                      Understanding the Buyer’s Journey and Content Mapping{" "}
                    </li>{" "}
                  </ul>
                </div>{" "}
              </SwiperSlide>
              <SwiperSlide>
                <div className={`${home.p6_body_card} `}>
                  <h3>Audience Research and Persona Development </h3>{" "}
                  <ul>
                    <li> Identifying and Understanding Target Audience </li>{" "}
                    <li>Creating Buyer Personas and Segmentation </li>{" "}
                    <li>Tools and Techniques for Audience Research </li>{" "}
                    <li>Developing a Customer Journey Map </li>{" "}
                    <li>
                      {" "}
                      Using Data to Tailor Content to Audience Preferences{" "}
                    </li>{" "}
                  </ul>
                </div>{" "}
              </SwiperSlide>
              <SwiperSlide>
                <div className={`${home.p6_body_card} `}>
                  <h3>Content Strategy and Planning </h3>{" "}
                  <ul>
                    <li>Developing a Content Marketing Strategy </li>{" "}
                    <li>
                      Setting Goals, Objectives, and KPIs for Content Marketing{" "}
                    </li>{" "}
                    <li>
                      {" "}
                      Building a Content Calendar and Planning Content Themes{" "}
                    </li>{" "}
                    <li>Content Ideation Techniques and Tools </li>{" "}
                    <li>
                      Integrating Content Strategy Across Multiple Channels{" "}
                    </li>{" "}
                  </ul>
                </div>{" "}
              </SwiperSlide>
              <SwiperSlide>
                <div className={`${home.p6_body_card} `}>
                  <h3>Content Creation </h3>{" "}
                  <ul>
                    <li>Writing Engaging and SEO-Friendly Content </li>{" "}
                    <li>Storytelling Techniques for Content Marketing</li>{" "}
                    <li>
                      {" "}
                      Designing Visual Content Graphics, Videos, Infographics{" "}
                    </li>{" "}
                    <li>
                      Creating Content for Different Formats Blogs, Emails,
                      Social Media{" "}
                    </li>{" "}
                    <li>Tools for Content Creation and Collaboration </li>{" "}
                  </ul>
                </div>{" "}
              </SwiperSlide>
              <SwiperSlide>
                <div className={`${home.p6_body_card} `}>
                  <h3> Content Optimization </h3>{" "}
                  <ul>
                    <li>Understanding SEO for Content Marketing </li>{" "}
                    <li>
                      {" "}
                      Optimizing Content for Search Engines Keywords, Meta Tags,
                      Alt Text{" "}
                    </li>{" "}
                    <li>
                      {" "}
                      Techniques for Improving Content Readability and
                      Engagement{" "}
                    </li>{" "}
                    <li>
                      {" "}
                      Using Analytics to Identify Content Performance Gaps{" "}
                    </li>{" "}
                    <li>
                      Updating and Repurposing Content for Extended Reach
                    </li>{" "}
                  </ul>
                </div>{" "}
              </SwiperSlide>
              <SwiperSlide>
                <div className={`${home.p6_body_card} `}>
                  <h3>Content Distribution </h3>{" "}
                  <ul>
                    <li>Understanding Content Distribution Channels </li>{" "}
                    <li>Owned, Earned, and Paid Media Strategies </li>{" "}
                    <li>
                      Leveraging Social Media, Email Marketing, and Influencers
                      for Distribution{" "}
                    </li>{" "}
                    <li>Developing a Content Syndication Strategy </li>{" "}
                    <li>
                      Tools and Platforms for Effective Content Distribution{" "}
                    </li>{" "}
                  </ul>
                </div>{" "}
              </SwiperSlide>
              <SwiperSlide>
                <div className={`${home.p6_body_card} `}>
                  <h3> Content Promotion and Amplification </h3>{" "}
                  <ul>
                    <li> Paid Promotion Strategies for Content Marketing </li>{" "}
                    <li>
                      {" "}
                      Using Google Ads, Social Media Ads, and Native Ads for
                      Content Promotion{" "}
                    </li>{" "}
                    <li>
                      Building Relationships with Influencers and Partnerships{" "}
                    </li>{" "}
                    <li>Leveraging PR and Media Outreach </li>{" "}
                    <li>Organic Content Amplification Techniques </li>{" "}
                  </ul>
                </div>{" "}
              </SwiperSlide>
              <SwiperSlide>
                <div className={`${home.p6_body_card} `}>
                  <h3>Content Performance Measurement </h3>{" "}
                  <ul>
                    <li>Key Metrics for Measuring Content Marketing Success</li>{" "}
                    <li>
                      {" "}
                      Setting Up Google Analytics and Other Tracking Tools{" "}
                    </li>{" "}
                    <li>
                      Analyzing Content Performance Data CTR, Time on Page,
                      Bounce Rate{" "}
                    </li>{" "}
                    <li>Measuring ROI of Content Marketing Efforts</li>{" "}
                    <li>
                      Creating Reports and Presenting Results to Stakeholders{" "}
                    </li>{" "}
                  </ul>
                </div>{" "}
              </SwiperSlide>
              <SwiperSlide>
                <div className={`${home.p6_body_card} `}>
                  <h3>Content Marketing for Different Platforms </h3>{" "}
                  <ul>
                    <li>
                      Best Practices for Content on Various Platforms Blogs,
                      Social Media, Video, Email{" "}
                    </li>{" "}
                    <li>Content Marketing for B2B vs. B2C Audiences</li>{" "}
                    <li>
                      Platform-Specific Content Strategies Facebook, LinkedIn,
                      Twitter, YouTube, etc.{" "}
                    </li>{" "}
                    <li>Adapting Content for Mobile Users </li>{" "}
                    <li>Emerging Platforms and Content Formats </li>{" "}
                  </ul>
                </div>{" "}
              </SwiperSlide>
              <SwiperSlide>
                <div className={`${home.p6_body_card} `}>
                  <h3>Advanced Content Marketing Techniques </h3>{" "}
                  <ul>
                    <li>Content Personalization Strategies </li>{" "}
                    <li>
                      Interactive Content Polls, Quizzes, Contests, Calculators{" "}
                    </li>{" "}
                    <li>
                      {" "}
                      Leveraging User-Generated Content Reviews, Testimonials,
                      Social Proof{" "}
                    </li>{" "}
                    <li>
                      Using AI and Machine Learning in Content Creation and
                      Curation{" "}
                    </li>{" "}
                    <li>
                      {" "}
                      Building a Content Community and Engaging with Your
                      Audience
                    </li>{" "}
                  </ul>
                </div>{" "}
              </SwiperSlide>
              <SwiperSlide>
                <div className={`${home.p6_body_card} `}>
                  <h3>Content Governance and Compliance </h3>{" "}
                  <ul>
                    <li>Developing a Content Governance Framework </li>{" "}
                    <li>Legal Considerations Copyright, GDPR, CCPA </li>{" "}
                    <li>Ensuring Brand Consistency and Voice </li>{" "}
                    <li>Content Review, Approval, and Archiving Processes </li>{" "}
                    <li> Handling Content Crises and Negative Publicity </li>{" "}
                  </ul>
                </div>{" "}
              </SwiperSlide>
              <SwiperSlide>
                <div className={`${home.p6_body_card} `}>
                  <h3>Content Marketing Trends and Future Outlook </h3>{" "}
                  <ul>
                    <li>Exploring Current Trends in Content Marketing </li>{" "}
                    <li>
                      Understanding the Impact of AI, AR, and VR on Content{" "}
                    </li>{" "}
                    <li>
                      Preparing for Voice Search and New Content Technologies{" "}
                    </li>{" "}
                    <li>
                      {" "}
                      Future of Content Marketing Personalization,
                      Interactivity, and Automation{" "}
                    </li>{" "}
                  </ul>
                </div>{" "}
              </SwiperSlide>
              <SwiperSlide>
                <div className={`${home.p6_body_card} `}>
                  <h3>Content Marketing Capstone Project </h3>{" "}
                  <ul>
                    <li>
                      Developing a Comprehensive Content Marketing Strategy for
                      a Real Business{" "}
                    </li>{" "}
                    <li>
                      Creating, Distributing, and Promoting Content Across
                      Multiple Channels{" "}
                    </li>{" "}
                    <li>
                      {" "}
                      Measuring Content Performance and Presenting Insights{" "}
                    </li>{" "}
                    <li>
                      Receiving Feedback and Making Data-Driven Adjustments
                    </li>{" "}
                  </ul>
                </div>{" "}
              </SwiperSlide>
              <div className="swiper-arrow-icon-sec">
                <div className="swiper-arrow-icon " id="swiper_prev_btn">
                  <Image
                    src={"/images/swiper-arrow-left.png"}
                    height={100}
                    width={100}
                    alt=""
                  />{" "}
                </div>
                <div className="swiper-arrow-icon " id="swiper_next_btn">
                  <Image
                    src={"/images/swiper-arrow.png"}
                    height={100}
                    width={100}
                    alt=""
                  />{" "}
                </div>
              </div>{" "}
            </Swiper>
            {/* --------Content Marketing Curriculum ends -------------- */}

            {/* -------- Dropshipping Curriculum Curriculum start -------------- */}
            <h3> Dropshipping Curriculum </h3>
            <p>
              Learn <b> Beginner-to-Advanced</b> Level Dropshipping
            </p>
            <Swiper
              pagination={{ type: "fraction" }}
              spaceBetween={30}
              slidesPerView={1}
              loop={true}
              navigation={{
                nextEl: "#swiper_next_btn",
                prevEl: "#swiper_prev_btn",
              }}
              breakpoints={{
                600: {
                  slidesPerView: 2,
                },
              }}
              modules={[Pagination, Navigation]}
              className={`mySwiper ${home.p6_body_card_sec} `}
            >
              <SwiperSlide>
                <div className={`${home.p6_body_card} `}>
                  <h3>Introduction to Dropshipping </h3>{" "}
                  <ul>
                    <li>Understanding Dropshipping and How It Works </li>{" "}
                    <li>Advantages and Disadvantages of Dropshipping </li>{" "}
                    <li>The Dropshipping Business Model Overview </li>{" "}
                    <li>
                      Key Players in Dropshipping Suppliers, Retailers, and
                      Customers{" "}
                    </li>{" "}
                    <li>
                      Common Misconceptions and Challenges in Dropshipping
                    </li>{" "}
                  </ul>
                </div>{" "}
              </SwiperSlide>
              <SwiperSlide>
                <div className={`${home.p6_body_card} `}>
                  <h3>Market Research and Niche Selection </h3>{" "}
                  <ul>
                    <li>Tools and Techniques for Market Research </li>{" "}
                    <li>Importance of Niche Selection in Dropshipping </li>{" "}
                    <li>Analyzing Market Demand, Trends, and Competition </li>{" "}
                    <li>Identifying Profitable Niches and Products </li>{" "}
                    <li>
                      {" "}
                      Evaluating Niche Profitability, Scalability, and
                      Sustainability{" "}
                    </li>{" "}
                  </ul>
                </div>{" "}
              </SwiperSlide>
              <SwiperSlide>
                <div className={`${home.p6_body_card} `}>
                  <h3>Setting Up Your Dropshipping Business </h3>{" "}
                  <ul>
                    <li>
                      Choosing a Business Name and Registering Your Business{" "}
                    </li>{" "}
                    <li>Setting Up Legal Structures and Tax Compliance </li>{" "}
                    <li>
                      {" "}
                      Selecting the Right E-commerce Platform Shopify,
                      WooCommerce, etc.{" "}
                    </li>{" "}
                    <li> Creating a Professional Website and Branding </li>{" "}
                    <li>
                      Integrating Payment Gateways and Securing Your Store{" "}
                    </li>{" "}
                  </ul>
                </div>{" "}
              </SwiperSlide>
              <SwiperSlide>
                <div className={`${home.p6_body_card} `}>
                  <h3>Finding and Partnering with Suppliers </h3>{" "}
                  <ul>
                    <li>How to Find Reliable Suppliers for Dropshipping </li>{" "}
                    <li>
                      Evaluating Suppliers&apos; Credibility, Quality, and Terms{" "}
                    </li>{" "}
                    <li>
                      Building Relationships with Suppliers and Negotiating
                      Terms{" "}
                    </li>{" "}
                    <li> Understanding Shipping and Fulfillment Processes </li>{" "}
                    <li>
                      Platforms for Dropshipping Suppliers AliExpress, Oberlo,
                      SaleHoo, etc.{" "}
                    </li>{" "}
                  </ul>
                </div>{" "}
              </SwiperSlide>
              <SwiperSlide>
                <div className={`${home.p6_body_card} `}>
                  <h3>Product Listing and Store Management </h3>{" "}
                  <ul>
                    <li>Creating Product Listings and Optimizing for SEO </li>{" "}
                    <li>Writing Compelling Product Descriptions and Titles </li>{" "}
                    <li>
                      {" "}
                      Using High-Quality Images and Videos for Product Pages{" "}
                    </li>{" "}
                    <li>
                      {" "}
                      Managing Inventory and Automating Stock Updates{" "}
                    </li>{" "}
                    <li>
                      Setting Competitive Pricing and Profit Margins{" "}
                    </li>{" "}
                  </ul>
                </div>{" "}
              </SwiperSlide>
              <SwiperSlide>
                <div className={`${home.p6_body_card} `}>
                  <h3>Marketing and Customer Acquisition </h3>{" "}
                  <ul>
                    <li>
                      Developing a Marketing Strategy for Your Dropshipping
                      Store{" "}
                    </li>{" "}
                    <li>
                      Utilizing Social Media Marketing Facebook, Instagram,
                      Pinterest{" "}
                    </li>{" "}
                    <li>
                      {" "}
                      Running Paid Advertising Campaigns Google Ads, Facebook
                      Ads{" "}
                    </li>{" "}
                    <li>Email Marketing and Retargeting Strategies </li>{" "}
                    <li>
                      Influencer Marketing and Affiliate Programs for
                      Dropshipping{" "}
                    </li>{" "}
                  </ul>
                </div>{" "}
              </SwiperSlide>
              <SwiperSlide>
                <div className={`${home.p6_body_card} `}>
                  <h3>Conversion Rate Optimization and Sales </h3>{" "}
                  <ul>
                    <li>
                      Understanding the Customer Journey and Sales Funnel{" "}
                    </li>{" "}
                    <li>Optimizing Your Website for Conversions </li>{" "}
                    <li>AB Testing and Analytics for Improved Performance </li>{" "}
                    <li> Upselling and Cross-Selling Techniques </li>{" "}
                    <li>Strategies for Reducing Cart Abandonment </li>{" "}
                  </ul>
                </div>{" "}
              </SwiperSlide>
              <SwiperSlide>
                <div className={`${home.p6_body_card} `}>
                  <h3>Order Fulfillment and Customer Service </h3>{" "}
                  <ul>
                    <li>Managing Orders and Ensuring Timely Fulfillment </li>{" "}
                    <li>Communicating with Suppliers and Handling Returns </li>{" "}
                    <li>Providing Excellent Customer Service and Support </li>{" "}
                    <li>Handling Customer Complaints and Negative Feedback </li>{" "}
                    <li>Building Customer Loyalty and Retention Programs </li>{" "}
                  </ul>
                </div>{" "}
              </SwiperSlide>
              <SwiperSlide>
                <div className={`${home.p6_body_card} `}>
                  <h3>Managing Finances and Scaling Your Business </h3>{" "}
                  <ul>
                    <li>Budgeting and Financial Planning for Dropshipping </li>{" "}
                    <li> Managing Cash Flow, Taxes, and Accounting </li>{" "}
                    <li>
                      Tools for Monitoring and Analyzing Business Performance
                    </li>{" "}
                    <li>Identifying Opportunities for Scaling and Growth </li>{" "}
                    <li>
                      Expanding Product Lines, Targeting New Markets, and
                      Building a Brand{" "}
                    </li>{" "}
                  </ul>
                </div>{" "}
              </SwiperSlide>
              <SwiperSlide>
                <div className={`${home.p6_body_card} `}>
                  <h3>Advanced Dropshipping Strategies </h3>{" "}
                  <ul>
                    <li>
                      Utilizing Automation Tools and Software for Efficiency{" "}
                    </li>{" "}
                    <li>
                      Leveraging Data and Analytics for Informed Decisions{" "}
                    </li>{" "}
                    <li>
                      Diversifying Marketing Channels and Revenue Streams{" "}
                    </li>{" "}
                    <li>
                      Building a Brand and Differentiating from Competitors{" "}
                    </li>{" "}
                    <li>Exploring Private Labeling and Custom Packaging </li>{" "}
                  </ul>
                </div>{" "}
              </SwiperSlide>
              <SwiperSlide>
                <div className={`${home.p6_body_card} `}>
                  <h3>Dropshipping Compliance and Legal Considerations </h3>{" "}
                  <ul>
                    <li>
                      Understanding Legal Requirements for Dropshipping
                      Businesses{" "}
                    </li>{" "}
                    <li>
                      Consumer Protection, Refund Policies, and GDPR Compliance{" "}
                    </li>{" "}
                    <li>
                      Protecting Your Intellectual Property and Avoiding Legal
                      Pitfalls{" "}
                    </li>{" "}
                    <li>
                      {" "}
                      Ensuring Supplier Compliance and Quality Standards{" "}
                    </li>{" "}
                    <li>
                      Handling International Shipping and Customs Regulations{" "}
                    </li>{" "}
                  </ul>
                </div>{" "}
              </SwiperSlide>
              <SwiperSlide>
                <div className={`${home.p6_body_card} `}>
                  <h3>Case Studies and Real-Life Success Stories </h3>{" "}
                  <ul>
                    <li>Analyzing Successful Dropshipping Businesses </li>{" "}
                    <li>
                      Key Takeaways from Real-Life Dropshipping Experiences{" "}
                    </li>{" "}
                    <li> Lessons from Common Failures and Mistakes </li>{" "}
                  </ul>
                </div>{" "}
              </SwiperSlide>
              <SwiperSlide>
                <div className={`${home.p6_body_card} `}>
                  <h3>Dropshipping Capstone Project </h3>{" "}
                  <ul>
                    <li>Developing a Complete Dropshipping Business Plan </li>{" "}
                    <li>Setting Up a Real Dropshipping Store from Scratch </li>{" "}
                    <li>
                      Implementing Marketing Strategies and Acquiring Customers{" "}
                    </li>{" "}
                    <li>
                      Analyzing Results, Optimizing Performance, and
                      Presenting Findings
                    </li>{" "}
                  </ul>
                </div>{" "}
              </SwiperSlide>
              <div className="swiper-arrow-icon-sec">
                <div className="swiper-arrow-icon " id="swiper_prev_btn">
                  <Image
                    src={"/images/swiper-arrow-left.png"}
                    height={100}
                    width={100}
                    alt=""
                  />{" "}
                </div>
                <div className="swiper-arrow-icon " id="swiper_next_btn">
                  <Image
                    src={"/images/swiper-arrow.png"}
                    height={100}
                    width={100}
                    alt=""
                  />{" "}
                </div>
              </div>{" "}
            </Swiper>
            {/* --------Dropshipping Curriculum  Curriculum ends -------------- */}

            {/* --------Print On Demand Curriculum  start -------------- */}
            <h3>Print On Demand Curriculum </h3>
            <p>
              Learn <b> Beginner-to-Advanced</b> Level Print On Demand
            </p>
            <Swiper
              pagination={{ type: "fraction" }}
              spaceBetween={30}
              slidesPerView={1}
              loop={true}
              navigation={{
                nextEl: "#swiper_next_btn",
                prevEl: "#swiper_prev_btn",
              }}
              breakpoints={{
                600: {
                  slidesPerView: 2,
                },
              }}
              modules={[Pagination, Navigation]}
              className={`mySwiper ${home.p6_body_card_sec} `}
            >
              <SwiperSlide>
                <div className={`${home.p6_body_card} `}>
                  <h3>Introduction to Print On Demand </h3>{" "}
                  <ul>
                    <li>Understanding Print On Demand and How It Works </li>{" "}
                    <li>Advantages and Disadvantages of Print On Demand </li>{" "}
                    <li>The Print On Demand Business Model Overview </li>{" "}
                    <li>
                      {" "}
                      Key Components of a Print On Demand Business Products,
                      Suppliers, Platforms{" "}
                    </li>{" "}
                    <li>
                      Common Misconceptions and Challenges in Print On Demand{" "}
                    </li>{" "}
                  </ul>
                </div>{" "}
              </SwiperSlide>
              <SwiperSlide>
                <div className={`${home.p6_body_card} `}>
                  <h3>Market Research and Niche Selection </h3>{" "}
                  <ul>
                    <li>Importance of Niche Selection in Print On Demand </li>{" "}
                    <li>Tools and Techniques for Market Research </li>{" "}
                    <li>Analyzing Market Demand, Trends, and Competition</li>{" "}
                    <li>Identifying Profitable Niches and Product Ideas </li>{" "}
                    <li>
                      Evaluating Niche Profitability, Scalability, and
                      Sustainability{" "}
                    </li>{" "}
                  </ul>
                </div>{" "}
              </SwiperSlide>
              <SwiperSlide>
                <div className={`${home.p6_body_card} `}>
                  <h3>Setting Up Your Print On Demand Business </h3>{" "}
                  <ul>
                    <li>
                      Choosing a Business Name and Registering Your Business{" "}
                    </li>{" "}
                    <li>Setting Up Legal Structures and Tax Compliance </li>{" "}
                    <li>
                      Selecting the Right E-commerce Platform Shopify,
                      WooCommerce, etc.{" "}
                    </li>{" "}
                    <li>
                      Integrating Print On Demand Services with Your Store{" "}
                    </li>{" "}
                    <li> Creating a Professional Website and Branding </li>{" "}
                  </ul>
                </div>{" "}
              </SwiperSlide>
              <SwiperSlide>
                <div className={`${home.p6_body_card} `}>
                  <h3>
                    {" "}
                    Finding and Partnering with Print On Demand Suppliers
                  </h3>{" "}
                  <ul>
                    <li> How to Find Reliable Print On Demand Suppliers </li>{" "}
                    <li>
                      Evaluating Suppliers &apos; Quality, Pricing, and
                      Fulfillment Times{" "}
                    </li>{" "}
                    <li>
                      Building Relationships with Suppliers and Negotiating
                      Terms{" "}
                    </li>{" "}
                    <li>Understanding Product Mockups and Sample Orders </li>{" "}
                    <li>
                      Platforms for Print On Demand Suppliers Printful,
                      Teespring, Redbubble, etc.{" "}
                    </li>{" "}
                  </ul>
                </div>{" "}
              </SwiperSlide>
              <SwiperSlide>
                <div className={`${home.p6_body_card} `}>
                  <h3>Designing Products and Creating Listings </h3>{" "}
                  <ul>
                    <li>Designing Custom Products for Print On Demand </li>{" "}
                    <li>
                      Tools for Product Design Canva, Adobe Illustrator, etc.{" "}
                    </li>{" "}
                    <li>
                      {" "}
                      Creating and Uploading Product Designs to Your Store{" "}
                    </li>{" "}
                    <li>
                      Writing Compelling Product Descriptions and Titles{" "}
                    </li>{" "}
                    <li>
                      Using High-Quality Images and Videos for Product Pages{" "}
                    </li>{" "}
                  </ul>
                </div>{" "}
              </SwiperSlide>
              <SwiperSlide>
                <div className={`${home.p6_body_card} `}>
                  <h3>Marketing and Customer Acquisition </h3>{" "}
                  <ul>
                    <li>
                      Developing a Marketing Strategy for Your Print On Demand
                      Store{" "}
                    </li>{" "}
                    <li>
                      Utilizing Social Media Marketing Facebook, Instagram,
                      Pinterest{" "}
                    </li>{" "}
                    <li>
                      Running Paid Advertising Campaigns Google Ads, Facebook
                      Ads{" "}
                    </li>{" "}
                    <li> Email Marketing and Retargeting Strategies </li>{" "}
                    <li>
                      Influencer Marketing and Affiliate Programs for Print On
                      Demand{" "}
                    </li>{" "}
                  </ul>
                </div>{" "}
              </SwiperSlide>
              <SwiperSlide>
                <div className={`${home.p6_body_card} `}>
                  <h3>Conversion Rate Optimization and Sales </h3>{" "}
                  <ul>
                    <li>
                      Understanding the Customer Journey and Sales Funnel{" "}
                    </li>{" "}
                    <li> Optimizing Your Website for Conversions </li>{" "}
                    <li>AB Testing and Analytics for Improved Performance </li>{" "}
                    <li>Upselling and Cross-Selling Techniques </li>{" "}
                    <li>Strategies for Reducing Cart Abandonment </li>{" "}
                  </ul>
                </div>{" "}
              </SwiperSlide>
              <SwiperSlide>
                <div className={`${home.p6_body_card} `}>
                  <h3>Order Fulfillment and Customer Service </h3>{" "}
                  <ul>
                    <li>Managing Orders and Ensuring Timely Fulfillment </li>{" "}
                    <li>
                      Communicating with Print On Demand Suppliers and Handling
                      Returns{" "}
                    </li>{" "}
                    <li> Providing Excellent Customer Service and Support </li>{" "}
                    <li>Handling Customer Complaints and Negative Feedback </li>{" "}
                    <li>Building Customer Loyalty and Retention Programs </li>{" "}
                  </ul>
                </div>{" "}
              </SwiperSlide>
              <SwiperSlide>
                <div className={`${home.p6_body_card} `}>
                  <h3>Managing Finances and Scaling Your Business </h3>{" "}
                  <ul>
                    <li>
                      {" "}
                      Budgeting and Financial Planning for Print On Demand{" "}
                    </li>{" "}
                    <li>Managing Cash Flow, Taxes, and Accounting </li>{" "}
                    <li>
                      Tools for Monitoring and Analyzing Business Performance{" "}
                    </li>{" "}
                    <li>Identifying Opportunities for Scaling and Growth </li>{" "}
                    <li>
                      Expanding Product Lines, Targeting New Markets, and
                      Building a Brand{" "}
                    </li>{" "}
                  </ul>
                </div>{" "}
              </SwiperSlide>
              <SwiperSlide>
                <div className={`${home.p6_body_card} `}>
                  <h3>Advanced Print On Demand Strategies </h3>{" "}
                  <ul>
                    <li>
                      Utilizing Automation Tools and Software for Efficiency{" "}
                    </li>{" "}
                    <li>
                      Leveraging Data and Analytics for Informed Decisions{" "}
                    </li>{" "}
                    <li>
                      Diversifying Marketing Channels and Revenue Streams{" "}
                    </li>{" "}
                    <li>
                      Building a Brand and Differentiating from Competitors{" "}
                    </li>{" "}
                    <li>Exploring Custom Packaging and Private Labeling </li>{" "}
                  </ul>
                </div>{" "}
              </SwiperSlide>
              <SwiperSlide>
                <div className={`${home.p6_body_card} `}>
                  <h3>Print On Demand Compliance and Legal Considerations </h3>{" "}
                  <ul>
                    <li>
                      Understanding Legal Requirements for Print On Demand
                      Businesses{" "}
                    </li>{" "}
                    <li>Intellectual Property Rights and Copyright Issues </li>{" "}
                    <li>Ensuring Supplier Compliance and Quality Standards </li>{" "}
                    <li>
                      {" "}
                      Handling International Shipping and Customs Regulations{" "}
                    </li>{" "}
                    <li>
                      Managing Returns, Refunds, and Customer Service Policies{" "}
                    </li>{" "}
                  </ul>
                </div>{" "}
              </SwiperSlide>
              <SwiperSlide>
                <div className={`${home.p6_body_card} `}>
                  <h3>Case Studies and Real-Life Success Stories </h3>{" "}
                  <ul>
                    <li>Analyzing Successful Print On Demand Businesses </li>{" "}
                    <li>
                      Key Takeaways from Real-Life Print On Demand Experiences{" "}
                    </li>{" "}
                    <li>Lessons from Common Failures and Mistakes </li>{" "}
                  </ul>
                </div>{" "}
              </SwiperSlide>
              <SwiperSlide>
                <div className={`${home.p6_body_card} `}>
                  <h3>Print On Demand Capstone Project </h3>{" "}
                  <ul>
                    <li>
                      Developing a Complete Print On Demand Business Plan{" "}
                    </li>{" "}
                    <li>
                      Setting Up a Real Print On Demand Store from Scratch{" "}
                    </li>{" "}
                    <li>
                      Implementing Marketing Strategies and Acquiring Customers{" "}
                    </li>{" "}
                    <li>
                      Analyzing Results, Optimizing Performance, and
                      Presenting Findings
                    </li>{" "}
                  </ul>
                </div>{" "}
              </SwiperSlide>
              <div className="swiper-arrow-icon-sec">
                <div className="swiper-arrow-icon " id="swiper_prev_btn">
                  <Image
                    src={"/images/swiper-arrow-left.png"}
                    height={100}
                    width={100}
                    alt=""
                  />{" "}
                </div>
                <div className="swiper-arrow-icon " id="swiper_next_btn">
                  <Image
                    src={"/images/swiper-arrow.png"}
                    height={100}
                    width={100}
                    alt=""
                  />{" "}
                </div>
              </div>{" "}
            </Swiper>
            {/* --------Print On Demand Curriculum  ends -------------- */}

            {/* --------Affiliate Marketing Curriculum start -------------- */}
            <h3>Affiliate Marketing Curriculum</h3>
            <p>
              Learn <b> Beginner-to-Advanced</b> Level Print On Demand
            </p>
            <Swiper
              pagination={{ type: "fraction" }}
              spaceBetween={30}
              slidesPerView={1}
              loop={true}
              navigation={{
                nextEl: "#swiper_next_btn",
                prevEl: "#swiper_prev_btn",
              }}
              breakpoints={{
                600: {
                  slidesPerView: 2,
                },
              }}
              modules={[Pagination, Navigation]}
              className={`mySwiper ${home.p6_body_card_sec} `}
            >
              {" "}
              <SwiperSlide>
                <div className={`${home.p6_body_card} `}>
                  <h3>Introduction to Affiliate Marketing </h3>{" "}
                  <ul>
                    <li>Understanding Affiliate Marketing and How It Works </li>{" "}
                    <li>Key Components of Affiliate Marketing Programs </li>{" "}
                    <li>Benefits and Challenges of Affiliate Marketing </li>{" "}
                    <li>
                      Overview of Affiliate Marketing Business Models
                      Pay-per-Click, Pay-per-Sale, Pay-per-Lead{" "}
                    </li>{" "}
                    <li>
                      Common Misconceptions and Pitfalls in Affiliate Marketing{" "}
                    </li>{" "}
                  </ul>
                </div>{" "}
              </SwiperSlide>
              <SwiperSlide>
                <div className={`${home.p6_body_card} `}>
                  <h3> Finding Your Niche and Target Audience </h3>{" "}
                  <ul>
                    <li>Identifying Profitable Niches and Market Demand </li>{" "}
                    <li>Analyzing Trends and Competition in Your Niche </li>{" "}
                    <li>
                      Creating Buyer Personas and Understanding Audience Needs{" "}
                    </li>{" "}
                    <li>Tools and Techniques for Market Research </li>{" "}
                    <li>
                      Evaluating Niche Profitability and Growth Potential{" "}
                    </li>{" "}
                  </ul>
                </div>{" "}
              </SwiperSlide>
              <SwiperSlide>
                <div className={`${home.p6_body_card} `}>
                  <h3>Choosing and Joining Affiliate Programs </h3>{" "}
                  <ul>
                    <li>
                      How to Find and Evaluate Affiliate Programs and Networks{" "}
                    </li>{" "}
                    <li>
                      {" "}
                      Criteria for Selecting the Right Affiliate Programs{" "}
                    </li>{" "}
                    <li>
                      Understanding Commission Structures and Payment Models{" "}
                    </li>{" "}
                    <li>
                      Joining Affiliate Networks Amazon Associates, ClickBank,
                      CJ Affiliate, etc.{" "}
                    </li>{" "}
                    <li>Reviewing and Negotiating Affiliate Agreements </li>{" "}
                  </ul>
                </div>{" "}
              </SwiperSlide>
              <SwiperSlide>
                <div className={`${home.p6_body_card} `}>
                  <h3>
                    {" "}
                    Building and Optimizing Your Affiliate Marketing Platform{" "}
                  </h3>{" "}
                  <ul>
                    <li>
                      Setting Up a Website or Blog for Affiliate Marketing{" "}
                    </li>{" "}
                    <li>Choosing a Domain Name and Hosting Provider </li>{" "}
                    <li>Creating High-Quality Content and Landing Pages </li>{" "}
                    <li>SEO Best Practices for Affiliate Sites </li>{" "}
                    <li>Optimizing User Experience and Site Performance</li>{" "}
                  </ul>
                </div>{" "}
              </SwiperSlide>
              <SwiperSlide>
                <div className={`${home.p6_body_card} `}>
                  <h3>Content Creation and Promotion </h3>{" "}
                  <ul>
                    <li>
                      Developing a Content Strategy for Affiliate Marketing{" "}
                    </li>{" "}
                    <li>
                      Creating Valuable and Engaging Content for Your Audience{" "}
                    </li>{" "}
                    <li>
                      Using Various Content Formats Blogs, Reviews, Comparisons,
                      Videos{" "}
                    </li>{" "}
                    <li>Implementing Content Promotion Techniques </li>{" "}
                    <li>
                      Leveraging Social Media and Other Channels for Content
                      Distribution{" "}
                    </li>{" "}
                  </ul>
                </div>{" "}
              </SwiperSlide>
              <SwiperSlide>
                <div className={`${home.p6_body_card} `}>
                  <h3>Driving Traffic to Your Affiliate Links </h3>{" "}
                  <ul>
                    <li>
                      Techniques for Increasing Organic Traffic SEO, Blogging{" "}
                    </li>{" "}
                    <li>
                      Running Paid Advertising Campaigns Google Ads, Facebook
                      Ads{" "}
                    </li>{" "}
                    <li>
                      Utilizing Email Marketing and List Building Strategies{" "}
                    </li>{" "}
                    <li>Leveraging Influencer Marketing and Partnerships </li>{" "}
                    <li>
                      Exploring Other Traffic Sources Social Media, Forums,
                      Communities
                    </li>{" "}
                  </ul>
                </div>{" "}
              </SwiperSlide>
              <SwiperSlide>
                <div className={`${home.p6_body_card} `}>
                  <h3>Tracking and Analyzing Performance </h3>{" "}
                  <ul>
                    <li>
                      Setting Up Tracking and Analytics Tools Google Analytics,
                      Affiliate Dashboards{" "}
                    </li>{" "}
                    <li>
                      Key Metrics for Measuring Affiliate Marketing Success
                      Click-through Rate, Conversion Rate, EPC{" "}
                    </li>{" "}
                    <li>Analyzing Data to Improve Campaign Performance </li>{" "}
                    <li>Implementing AB Testing for Better Results </li>{" "}
                    <li> Creating Reports and Analyzing ROI </li>{" "}
                  </ul>
                </div>{" "}
              </SwiperSlide>
              <SwiperSlide>
                <div className={`${home.p6_body_card} `}>
                  <h3> Scaling Your Affiliate Marketing Efforts </h3>{" "}
                  <ul>
                    <li>
                      Strategies for Scaling and Growing Your Affiliate Business{" "}
                    </li>{" "}
                    <li> Expanding to New Niches and Markets </li>{" "}
                    <li> Building and Managing Multiple Affiliate Sites </li>{" "}
                    <li>
                      Automating Processes and Using Tools for Efficiency{" "}
                    </li>{" "}
                    <li>
                      Increasing Revenue through Advanced Techniques Upsells,
                      Cross-sells{" "}
                    </li>{" "}
                  </ul>
                </div>{" "}
              </SwiperSlide>
              <SwiperSlide>
                <div className={`${home.p6_body_card} `}>
                  <h3> Compliance and Legal Considerations </h3>{" "}
                  <ul>
                    <li>
                      {" "}
                      Understanding Legal Requirements and Regulations for
                      Affiliate Marketing{" "}
                    </li>{" "}
                    <li> Disclosures and Transparency Best Practices </li>{" "}
                    <li>
                      {" "}
                      Avoiding Common Affiliate Marketing Compliance Issues{" "}
                    </li>{" "}
                    <li>
                      {" "}
                      Managing Affiliate Link Cloaking and Tracking{" "}
                    </li>{" "}
                    <li> Handling Copyright and Trademark Issues </li>{" "}
                  </ul>
                </div>{" "}
              </SwiperSlide>
              <SwiperSlide>
                <div className={`${home.p6_body_card} `}>
                  <h3> Advanced Affiliate Marketing Strategies </h3>{" "}
                  <ul>
                    <li>
                      {" "}
                      Utilizing Advanced SEO Techniques for Affiliate Sites{" "}
                    </li>{" "}
                    <li>
                      {" "}
                      Leveraging Data and Analytics for Optimization{" "}
                    </li>{" "}
                    <li>
                      {" "}
                      Exploring Influencer and Partnership Opportunities{" "}
                    </li>{" "}
                    <li>
                      {" "}
                      Implementing Retargeting and Remarketing Strategies{" "}
                    </li>{" "}
                    <li>Using Affiliate Marketing Tools and Software </li>{" "}
                  </ul>
                </div>{" "}
              </SwiperSlide>
              <SwiperSlide>
                <div className={`${home.p6_body_card} `}>
                  <h3>Case Studies and Real-Life Success Stories </h3>{" "}
                  <ul>
                    <li>Analyzing Successful Affiliate Marketing Campaigns </li>{" "}
                    <li>Key Takeaways from Real-Life Affiliate Marketers </li>{" "}
                    <li> Lessons from Common Mistakes and Failures </li>{" "}
                  </ul>
                </div>{" "}
              </SwiperSlide>
              <SwiperSlide>
                <div className={`${home.p6_body_card} `}>
                  <h3> Affiliate Marketing Capstone Project </h3>{" "}
                  <ul>
                    <li>
                      Developing a Comprehensive Affiliate Marketing Plan{" "}
                    </li>{" "}
                    <li>
                      Setting Up and Launching an Affiliate Marketing Campaign{" "}
                    </li>{" "}
                    <li>
                      Implementing Traffic Strategies and Content Promotion{" "}
                    </li>{" "}
                    <li>
                      Measuring Performance, Optimizing Results, and
                      Presenting Insights
                    </li>{" "}
                  </ul>
                </div>{" "}
              </SwiperSlide>
              <div className="swiper-arrow-icon-sec">
                <div className="swiper-arrow-icon " id="swiper_prev_btn">
                  <Image
                    src={"/images/swiper-arrow-left.png"}
                    height={100}
                    width={100}
                    alt=""
                  />{" "}
                </div>
                <div className="swiper-arrow-icon " id="swiper_next_btn">
                  <Image
                    src={"/images/swiper-arrow.png"}
                    height={100}
                    width={100}
                    alt=""
                  />{" "}
                </div>
              </div>{" "}
            </Swiper>

            {/* --------Affiliate Marketing Curriculum ends -------------- */}

            {/* --------Digital Marketing Strategy Building Curriculum start -------------- */}
            <h3>Digital Marketing Strategy Building Curriculum</h3>
            <p>
              Learn <b> Beginner-to-Advanced</b> Level PrDigital Marketing
              Strategy Building
            </p>
            <Swiper
              pagination={{ type: "fraction" }}
              spaceBetween={30}
              slidesPerView={1}
              loop={true}
              navigation={{
                nextEl: "#swiper_next_btn",
                prevEl: "#swiper_prev_btn",
              }}
              breakpoints={{
                600: {
                  slidesPerView: 2,
                },
              }}
              modules={[Pagination, Navigation]}
              className={`mySwiper ${home.p6_body_card_sec} `}
            >
              {" "}
              <SwiperSlide>
                <div className={`${home.p6_body_card} `}>
                  <h3>Introduction to Digital Marketing Strategy </h3>{" "}
                  <ul>
                    <li>
                      {" "}
                      Understanding Digital Marketing and Its Components{" "}
                    </li>{" "}
                    <li>
                      {" "}
                      The Importance of a Digital Marketing Strategy{" "}
                    </li>{" "}
                    <li> Key Elements of a Digital Marketing Strategy </li>{" "}
                    <li>Setting Goals and Objectives for Your Strategy </li>{" "}
                    <li>Overview of Different Digital Marketing Channels </li>{" "}
                  </ul>
                </div>{" "}
              </SwiperSlide>
              <SwiperSlide>
                <div className={`${home.p6_body_card} `}>
                  <h3> Market Research and Audience Analysis </h3>{" "}
                  <ul>
                    <li>Conducting Market Research and Competitor Analysis </li>{" "}
                    <li>Identifying and Understanding Target Audience </li>{" "}
                    <li>Creating Buyer Personas and Customer Segmentation </li>{" "}
                    <li> Tools and Techniques for Audience Research </li>{" "}
                    <li>Analyzing Market Trends and Consumer Behavior </li>{" "}
                  </ul>
                </div>{" "}
              </SwiperSlide>
              <SwiperSlide>
                <div className={`${home.p6_body_card} `}>
                  <h3>Setting Goals and KPIs </h3>{" "}
                  <ul>
                    <li>
                      Defining SMART Goals for Your Digital Marketing Strategy{" "}
                    </li>{" "}
                    <li>Establishing Key Performance Indicators (KPIs) </li>{" "}
                    <li>Aligning Goals with Business Objectives </li>{" "}
                    <li>Setting Benchmarks and Performance Metrics </li>{" "}
                    <li>Tools for Tracking and Measuring Success </li>{" "}
                  </ul>
                </div>{" "}
              </SwiperSlide>
              <SwiperSlide>
                <div className={`${home.p6_body_card} `}>
                  <h3> Developing a Content Strategy </h3>{" "}
                  <ul>
                    <li> Importance of Content in Digital Marketing </li>{" "}
                    <li>Creating a Content Strategy Aligned with Goals </li>{" "}
                    <li>Planning Content Types and Distribution Channels </li>{" "}
                    <li> Developing a Content Calendar and Editorial Plan </li>{" "}
                    <li>Content Creation and Optimization Best Practices</li>{" "}
                  </ul>
                </div>{" "}
              </SwiperSlide>
              <SwiperSlide>
                <div className={`${home.p6_body_card} `}>
                  <h3>Digital Marketing Channels and Tactics </h3>{" "}
                  <ul>
                    <li>
                      {" "}
                      Overview of Key Digital Marketing Channels SEO, PPC,
                      Social Media, Email, Content Marketing{" "}
                    </li>{" "}
                    <li>Choosing the Right Channels for Your Business </li>{" "}
                    <li>Integrating Multiple Channels into Your Strategy </li>{" "}
                    <li>Developing Tactics for Each Channel </li>{" "}
                    <li>Best Practices for Channel-Specific Strategies </li>{" "}
                  </ul>
                </div>{" "}
              </SwiperSlide>
              <SwiperSlide>
                <div className={`${home.p6_body_card} `}>
                  <h3> Budgeting and Resource Allocation </h3>{" "}
                  <ul>
                    <li>Creating a Digital Marketing Budget </li>{" "}
                    <li>Allocating Resources for Different Channels </li>{" "}
                    <li> Managing Advertising Spend and ROI </li>{" "}
                    <li> Tools for Budgeting and Financial Planning </li>{" "}
                    <li>Adjusting Budget Based on Performance and Needs </li>{" "}
                  </ul>
                </div>{" "}
              </SwiperSlide>
              <SwiperSlide>
                <div className={`${home.p6_body_card} `}>
                  <h3>Campaign Planning and Execution </h3>{" "}
                  <ul>
                    <li>
                      Developing and Planning Digital Marketing Campaigns{" "}
                    </li>{" "}
                    <li>Creating Campaign Objectives and Timelines </li>{" "}
                    <li>Coordinating Across Channels and Teams </li>{" "}
                    <li>Executing Campaigns and Monitoring Progress </li>{" "}
                    <li>Tools for Campaign Management and Execution </li>{" "}
                  </ul>
                </div>{" "}
              </SwiperSlide>
              <SwiperSlide>
                <div className={`${home.p6_body_card} `}>
                  <h3>Tracking and Analytics </h3>{" "}
                  <ul>
                    <li>
                      Setting Up Tracking and Analytics Tools Google Analytics,
                      Social Media Insights, etc.{" "}
                    </li>{" "}
                    <li>Monitoring Campaign Performance and Metrics </li>{" "}
                    <li>Analyzing Data and Extracting Insights </li>{" "}
                    <li> Making Data-Driven Decisions and Adjustments </li>{" "}
                    <li>Reporting and Presenting Performance Results </li>{" "}
                  </ul>
                </div>{" "}
              </SwiperSlide>
              <SwiperSlide>
                <div className={`${home.p6_body_card} `}>
                  <h3>Optimization and Improvement </h3>{" "}
                  <ul>
                    <li>
                      Techniques for Optimizing Digital Marketing Campaigns{" "}
                    </li>{" "}
                    <li>Using AB Testing and Other Testing Methods </li>{" "}
                    <li>
                      Analyzing Performance Data to Identify Areas for
                      Improvement{" "}
                    </li>{" "}
                    <li>Implementing Changes and Measuring Impact </li>{" "}
                    <li>Continuous Improvement and Strategy Refinement</li>{" "}
                  </ul>
                </div>{" "}
              </SwiperSlide>
              <SwiperSlide>
                <div className={`${home.p6_body_card} `}>
                  <h3>Scaling Your Digital Marketing Strategy </h3>{" "}
                  <ul>
                    <li>
                      Strategies for Scaling and Growing Your Digital Marketing
                      Efforts{" "}
                    </li>{" "}
                    <li>Expanding to New Markets and Audiences </li>{" "}
                    <li>Increasing Budget and Resource Allocation </li>{" "}
                    <li> Leveraging Advanced Techniques and Technologies </li>{" "}
                    <li>
                      Case Studies of Scaled Digital Marketing Strategies{" "}
                    </li>{" "}
                  </ul>
                </div>{" "}
              </SwiperSlide>
              <SwiperSlide>
                <div className={`${home.p6_body_card} `}>
                  <h3>Compliance and Best Practices </h3>{" "}
                  <ul>
                    <li>
                      {" "}
                      Understanding Legal and Ethical Considerations in Digital
                      Marketing{" "}
                    </li>{" "}
                    <li>
                      Ensuring Compliance with Regulations and Standards{" "}
                    </li>{" "}
                    <li>
                      Implementing Best Practices for Data Privacy and Security{" "}
                    </li>{" "}
                    <li>Managing Brand Reputation and Online Presence </li>{" "}
                    <li>Handling Negative Feedback and Crisis Management </li>{" "}
                  </ul>
                </div>{" "}
              </SwiperSlide>
              <SwiperSlide>
                <div className={`${home.p6_body_card} `}>
                  <h3>Case Studies and Real-Life Examples </h3>{" "}
                  <ul>
                    <li>Analyzing Successful Digital Marketing Strategies </li>{" "}
                    <li>Learning from Real-Life Examples and Case Studies </li>{" "}
                    <li>
                      Identifying Key Success Factors and Lessons Learned{" "}
                    </li>{" "}
                    <li>Applying Insights to Your Own Strategy </li>{" "}
                  </ul>
                </div>{" "}
              </SwiperSlide>
              <SwiperSlide>
                <div className={`${home.p6_body_card} `}>
                  <h3>Capstone Project </h3>{" "}
                  <ul>
                    <li>
                      Developing a Comprehensive Digital Marketing Strategy for
                      a Real Business{" "}
                    </li>{" "}
                    <li>
                      {" "}
                      Conducting Market Research, Setting Goals, and Creating a
                      Plan{" "}
                    </li>{" "}
                    <li>
                      Executing Campaigns, Tracking Performance, and Making
                      Adjustments{" "}
                    </li>{" "}
                    <li>Presenting Results and Analyzing Outcomes </li>{" "}
                    <li>Receiving Feedback and Refining Strategy</li>{" "}
                  </ul>
                </div>{" "}
              </SwiperSlide>
              <div className="swiper-arrow-icon-sec">
                <div className="swiper-arrow-icon " id="swiper_prev_btn">
                  <Image
                    src={"/images/swiper-arrow-left.png"}
                    height={100}
                    width={100}
                    alt=""
                  />{" "}
                </div>
                <div className="swiper-arrow-icon " id="swiper_next_btn">
                  <Image
                    src={"/images/swiper-arrow.png"}
                    height={100}
                    width={100}
                    alt=""
                  />{" "}
                </div>
              </div>{" "}
            </Swiper>
            {/* --------Digital Marketing Strategy Building Curriculum ends -------------- */}

            {/* --------Sales Pitching and Cold Calling Curriculum start -------------- */}
            <h3>Sales Pitching and Cold Calling Curriculum</h3>
            <p>
              Learn <b> Beginner-to-Advanced</b> Level PrDigital Marketing
              Strategy Building
            </p>
            <Swiper
              pagination={{ type: "fraction" }}
              spaceBetween={30}
              slidesPerView={1}
              loop={true}
              navigation={{
                nextEl: "#swiper_next_btn",
                prevEl: "#swiper_prev_btn",
              }}
              breakpoints={{
                600: {
                  slidesPerView: 2,
                },
              }}
              modules={[Pagination, Navigation]}
              className={`mySwiper ${home.p6_body_card_sec} `}
            >
              {" "}
              <SwiperSlide>
                <div className={`${home.p6_body_card} `}>
                  <h3> Introduction to Sales Pitching and Cold Calling </h3>{" "}
                  <ul>
                    <li>Understanding Sales Pitching and Cold Calling </li>{" "}
                    <li>
                      {" "}
                      The Role of Sales Pitching and Cold Calling in Sales{" "}
                    </li>{" "}
                    <li>
                      {" "}
                      Key Differences Between Warm and Cold Outreach{" "}
                    </li>{" "}
                    <li>Overview of Effective Sales Techniques </li>{" "}
                    <li>Common Challenges and Misconceptions </li>{" "}
                  </ul>
                </div>{" "}
              </SwiperSlide>
              <SwiperSlide>
                <div className={`${home.p6_body_card} `}>
                  <h3>Preparing for Sales Pitching and Cold Calling </h3>{" "}
                  <ul>
                    <li>Identifying Your Target Audience and Ideal Clients </li>{" "}
                    <li>
                      Researching Prospects and Understanding Their Needs{" "}
                    </li>{" "}
                    <li>Crafting a Value Proposition and Key Messages </li>{" "}
                    <li>Setting Clear Objectives for Your Sales Calls </li>{" "}
                    <li>Developing a Sales Pitch Outline and Script </li>{" "}
                  </ul>
                </div>{" "}
              </SwiperSlide>
              <SwiperSlide>
                <div className={`${home.p6_body_card} `}>
                  <h3>Sales Pitching Techniques </h3>{" "}
                  <ul>
                    <li>Structuring an Effective Sales Pitch </li>{" "}
                    <li>Engaging Prospects with a Strong Opening </li>{" "}
                    <li>Presenting Benefits and Addressing Pain Points </li>{" "}
                    <li>Handling Objections and Overcoming Resistance </li>{" "}
                    <li>Closing Techniques and Call-to-Action Strategies </li>{" "}
                  </ul>
                </div>{" "}
              </SwiperSlide>
              <SwiperSlide>
                <div className={`${home.p6_body_card} `}>
                  <h3>Cold Calling Best Practices </h3>{" "}
                  <ul>
                    <li>Developing a Cold Calling Strategy and Plan </li>{" "}
                    <li>
                      Creating a Cold Calling Script and Personalizing It{" "}
                    </li>{" "}
                    <li>
                      Techniques for Effective Cold Calling and Engagement{" "}
                    </li>{" "}
                    <li>Overcoming Rejection and Staying Motivated </li>{" "}
                    <li>
                      {" "}
                      Best Practices for Following Up and Nurturing Leads{" "}
                    </li>{" "}
                  </ul>
                </div>{" "}
              </SwiperSlide>
              <SwiperSlide>
                <div className={`${home.p6_body_card} `}>
                  <h3>Building Rapport and Trust </h3>{" "}
                  <ul>
                    <li>Techniques for Building Rapport with Prospects </li>{" "}
                    <li>
                      Understanding and Mirroring Prospect Communication Styles{" "}
                    </li>{" "}
                    <li>
                      Establishing Credibility and Trust Early in the
                      Conversation{" "}
                    </li>{" "}
                    <li> Asking Questions to Understand Prospect Needs </li>{" "}
                    <li>
                      Using Active Listening to Build Strong Relationships{" "}
                    </li>{" "}
                  </ul>
                </div>{" "}
              </SwiperSlide>
              <SwiperSlide>
                <div className={`${home.p6_body_card} `}>
                  <h3> Advanced Sales Pitching Strategies </h3>{" "}
                  <ul>
                    <li>
                      Tailoring Your Pitch to Different Prospect Segments{" "}
                    </li>{" "}
                    <li> Leveraging Case Studies and Success Stories </li>{" "}
                    <li>Utilizing Data and Personalization in Your Pitch </li>{" "}
                    <li>
                      Implementing Advanced Selling Techniques and Strategies{" "}
                    </li>{" "}
                    <li>Measuring and Analyzing Pitch Effectiveness </li>{" "}
                  </ul>
                </div>{" "}
              </SwiperSlide>
              <SwiperSlide>
                <div className={`${home.p6_body_card} `}>
                  <h3>Handling Objections and Negotiations </h3>{" "}
                  <ul>
                    <li>
                      {" "}
                      Common Types of Objections and How to Address Them{" "}
                    </li>{" "}
                    <li>
                      Techniques for Negotiating and Finding Win-Win Solutions{" "}
                    </li>{" "}
                    <li>
                      Handling Difficult Conversations and Conflict Resolution{" "}
                    </li>{" "}
                    <li>
                      Building Resilience and Maintaining a Positive Attitude{" "}
                    </li>{" "}
                    <li>Practicing Objection Handling Through Role-Playing </li>{" "}
                  </ul>
                </div>{" "}
              </SwiperSlide>
              <SwiperSlide>
                <div className={`${home.p6_body_card} `}>
                  <h3>Technology and Tools for Sales </h3>{" "}
                  <ul>
                    <li>
                      {" "}
                      Tools for Enhancing Sales Pitching and Cold Calling{" "}
                    </li>{" "}
                    <li> CRM Systems and Sales Automation Tools </li>{" "}
                    <li> Utilizing Sales Analytics and Reporting Tools </li>{" "}
                    <li>Integrating Technology into Your Sales Strategy </li>{" "}
                    <li>Leveraging Communication and Collaboration Tools </li>{" "}
                  </ul>
                </div>{" "}
              </SwiperSlide>
              <SwiperSlide>
                <div className={`${home.p6_body_card} `}>
                  <h3>Tracking and Analyzing Performance </h3>{" "}
                  <ul>
                    <li>
                      Setting Metrics and KPIs for Sales Pitching and Cold
                      Calling{" "}
                    </li>{" "}
                    <li>Tracking Performance and Analyzing Results </li>{" "}
                    <li>
                      Using Data to Improve Pitching and Calling Techniques{" "}
                    </li>{" "}
                    <li>Conducting Regular Reviews and Adjustments </li>{" "}
                    <li>Creating Reports and Sharing Insights with Teams </li>{" "}
                  </ul>
                </div>{" "}
              </SwiperSlide>
              <SwiperSlide>
                <div className={`${home.p6_body_card} `}>
                  <h3> Developing a Sales Pitching and Cold Calling Plan </h3>{" "}
                  <ul>
                    <li>Creating a Comprehensive Sales Plan and Strategy </li>{" "}
                    <li>Setting Goals and Objectives for Sales Activities </li>{" "}
                    <li>
                      Developing a Training and Development Plan for Sales Teams{" "}
                    </li>{" "}
                    <li>Implementing and Monitoring the Sales Plan </li>{" "}
                    <li>
                      Reviewing and Refining Strategies Based on Performance{" "}
                    </li>{" "}
                  </ul>
                </div>{" "}
              </SwiperSlide>
              <SwiperSlide>
                <div className={`${home.p6_body_card} `}>
                  <h3>Case Studies and Real-Life Examples </h3>{" "}
                  <ul>
                    <li>
                      {" "}
                      Analyzing Successful Sales Pitching and Cold Calling
                      Examples{" "}
                    </li>{" "}
                    <li>
                      Learning from Real-Life Sales Experiences and Case Studies{" "}
                    </li>{" "}
                    <li>Identifying Key Success Factors and Best Practices </li>{" "}
                    <li>Applying Lessons Learned to Your Sales Approach </li>{" "}
                  </ul>
                </div>{" "}
              </SwiperSlide>
              <SwiperSlide>
                <div className={`${home.p6_body_card} `}>
                  <h3>Capstone Project </h3>{" "}
                  <ul>
                    <li>
                      Developing and Presenting a Sales Pitch and Cold Calling
                      Plan{" "}
                    </li>{" "}
                    <li> Conducting Practice Calls and Receiving Feedback </li>{" "}
                    <li>
                      Implementing Strategies and Measuring Effectiveness{" "}
                    </li>{" "}
                    <li>Analyzing Results and Making Improvements </li>{" "}
                    <li>Final Presentation and Review</li>{" "}
                  </ul>
                </div>{" "}
              </SwiperSlide>
              <div className="swiper-arrow-icon-sec">
                <div className="swiper-arrow-icon " id="swiper_prev_btn">
                  <Image
                    src={"/images/swiper-arrow-left.png"}
                    height={100}
                    width={100}
                    alt=""
                  />{" "}
                </div>
                <div className="swiper-arrow-icon " id="swiper_next_btn">
                  <Image
                    src={"/images/swiper-arrow.png"}
                    height={100}
                    width={100}
                    alt=""
                  />{" "}
                </div>
              </div>{" "}
            </Swiper>
            {/* --------Sales Pitching and Cold Calling Curriculum ends -------------- */}

            {/* ----------------Curricculam bottom Section------------------------------ */}
            <Link
              href={"https://nas.io/performance-growth-academy/products/ftpd"}
              className={`${home.p6_body_button} `}
            >
              <div className={`${home.p6_body_button_img} `}>
                <Image
                  src={"/images/verified.png"}
                  height={30}
                  width={30}
                  alt=""
                />{" "}
              </div>
              Get it now for ₹5999 (Actual Price ₹19999)
            </Link>
            <span className={`${home.p6_body_offer_msg} `}>
              🎉 80% + Extra 20% off only for today
            </span>
          </div>
        </div>

        {/* -----------  Enroll before August 20,-------------- */}

        {/* <div className={`${home.p7_body} `}>
          <div className={`${home.p7_body_container} container`}>
            <h3>
              Enroll before August 20, 2024 11:59 PM & Get Premium <br />{" "}
              Bonuses worth ₹40,000
            </h3>
            <p>
              Supercharge your Meta Ads <b> immediately</b> with these
              Done-For-You Bonuses
            </p>
            <div className={`${home.p7_body_card_sec} `}>
              <div className={`${home.p7_body_card} `}>
                <div className={`${home.p7_body_card_content} `}>
                  <div className={`${home.p7_body_card_content_img} `}>
                    <Image
                      src={"/images/card-img1.png"}
                      height={400}
                      width={380}
                      alt=""
                    />
                  </div>
                  <h3>Meta Ads Winning Checklist</h3>
                  <p>
                    Take the guesswork out of your Ad Campaigns. Follow this
                    checklist to set up, run, and scale campaigns profitably.
                  </p>
                  <span>WORTH ₹7,999</span>
                </div>
              </div>
              <div className={`${home.p7_body_card} `}>
                <div className={`${home.p7_body_card_content} `}>
                  <div className={`${home.p7_body_card_content_img} `}>
                    <Image
                      src={"/images/card-img2.png"}
                      height={400}
                      width={380}
                      alt=""
                    />
                  </div>
                  <h3>Facebook & Instagram Ad Copies (Swipe File)</h3>
                  <p>
                    Take the guesswork out of your Ad Campaigns. Follow this
                    checklist to set up, run, and scale campaigns profitably.
                  </p>
                  <span>WORTH ₹7,999</span>
                </div>
              </div>
              <div className={`${home.p7_body_card} `}>
                <div className={`${home.p7_body_card_content} `}>
                  <div className={`${home.p7_body_card_content_img} `}>
                    <Image
                      src={"/images/card-img3.png"}
                      height={400}
                      width={380}
                      alt=""
                    />
                  </div>
                  <h3>Meta Ad Metrics to Measure ROI (E-Book)</h3>
                  <p>
                    Take the guesswork out of your Ad Campaigns. Follow this
                    checklist to set up, run, and scale campaigns profitably.
                  </p>
                  <span>WORTH ₹7,999</span>
                </div>
              </div>
              <div className={`${home.p7_body_card} `}>
                <div className={`${home.p7_body_card_content} `}>
                  <div className={`${home.p7_body_card_content_img} `}>
                    <Image
                      src={"/images/card-img4.png"}
                      height={400}
                      width={380}
                      alt=""
                    />
                  </div>
                  <h3>Meta Ad Metrics to Measure ROI (E-Book)</h3>
                  <p>
                    Take the guesswork out of your Ad Campaigns. Follow this
                    checklist to set up, run, and scale campaigns profitably.
                  </p>
                  <span>WORTH ₹7,999</span>
                </div>
              </div>
              <div className={`${home.p7_body_card} `}>
                <div
                  className={`${home.p7_body_card_content} ${home.p7_body_card_content_margin} `}
                >
                  <div className={`${home.p7_body_card_content_img} `}>
                    <Image
                      src={"/images/card-img5.png"}
                      height={400}
                      width={380}
                      alt=""
                    />
                  </div>
                  <h3>Meta Ad Metrics to Measure ROI (E-Book)</h3>
                  <p>
                    Take the guesswork out of your Ad Campaigns. Follow this
                    checklist to set up, run, and scale campaigns profitably.
                  </p>
                  <span>WORTH ₹7,999</span>
                </div>
              </div>
              <div
                className={`${home.p7_body_card} ${home.p7_body_card_special_bonus}  `}
              >
                <div
                  className={`${home.p7_body_card_content} ${home.p7_body_card_special_bonus_data} `}
                >
                  <h3>Secret Bonus</h3>
                  <p>
                    Unlock this special bonus inside the course. Massive value
                    inside.
                  </p>
                  <span>Worth ₹4,999</span>
                </div>
              </div>
            </div>

            <Link
              href={"https://nas.io/performance-growth-academy/products/ftpd"}
              className={`${home.p7_body_button} `}
            >
              <div className={`${home.p7_body_button_img} `}>
                <Image
                  src={"/images/verified.png"}
                  height={30}
                  width={30}
                  alt=""
                />{" "}
              </div>
              Get it now for ₹5999 (Actual Price ₹19999)
            </Link>
            <p>🎉 Year End Mega Sale - Get 80% + Extra 20% discount today</p>
          </div>
        </div> */}

        {/* -----------Why learn Facebook & Instagram Ads in 2024?------------- */}

        <div className={`${home.p8_body} `}>
          <div className={`${home.p8_body_container} container`}>
            <h3>Why learn Digital Marketing in 2024?</h3>{" "}
            <ul className={`${home.p8_body_list_sec} `}>
              <li> High demand for digital skills.</li>
              <li>Cost-effective marketing solutions.</li>
              <li>Flexible career opportunities.</li>
              <li>Trackable and measurable results. </li>
              <li>Continuous learning and growth. </li>
              <li>Reach global audiences easily.</li>
            </ul>
          </div>
        </div>

        {/* ----------Meet Your Mentor-------------- */}
        <div className={`${home.p9_body} `}>
          <div className={`${home.p9_body_container} container`}>
            <h3>
              Meet Your <span>Mentor</span>
            </h3>
            <div className={`${home.p9_body_profile_sec} `}>
              <div className={`${home.p9_body_profile_photo} `}>
                <Image
                  src={"/images/profile.jpg"}
                  height={300}
                  width={300}
                  alt=""
                />
              </div>
              <div className={`${home.p9_body_profile_data} `}>
                <h3>Rohith Sasankan</h3>
                <p>Founder – Young Urban Project</p>
                <ul className={`${home.p9_body_profile_data_list} `}>
                  <li> Managed over ₹100 Cr in Ad Spends</li>
                  <li> 10+ Years of Industry Experience</li>
                  <li> Worked with 300+ Clients </li>
                  <li>
                    {" "}
                    Expert in Scaling Businesses through Data-Driven Strategies{" "}
                  </li>
                  <li> Trained 5000+ Students in Digital Marketing </li>{" "}
                </ul>
              </div>
            </div>
            {/* <span>AS SEEN ON</span>
            <div className={`${home.p9_body_company_sec} `}>
              <div className={`${home.p9_body_company_logo} `}>
                <Image
                  src={"/images/company.png"}
                  height={200}
                  width={1500}
                  alt=""
                />
              </div>
            </div> */}
          </div>
        </div>

        {/* -----------Get Certified--------------- */}
        <div className={`${home.p10_body} `}>
          <div className={`${home.p10_body_container} container`}>
            <div className={`${home.p10_body_text_content} `}>
              <h3>
                Get <span>Certified</span>
              </h3>
              <p>
                Complete all modules successfully and receive an Advanced
                certificate. This certificate is:
              </p>
              <ul>
                <li>Official & Verified by Rohith Sasanken</li>
                <li>9+ Google Certifications,Hubspot Certification</li>
                <li>Useful to enhance professional credibility</li>
              </ul>
              <Link
                href={"https://nas.io/performance-growth-academy/products/ftpd"}
                className={`${home.p10_body_button} `}
              >
                <div className={`${home.p10_body_button_img} `}>
                  <Image
                    src={"/images/verified.png"}
                    height={30}
                    width={30}
                    alt=""
                  />{" "}
                </div>
                GET INSTANT ACCESS
              </Link>
            </div>
            <div className={`${home.p10_body_img_content} `}>
              <div className={`${home.p10_body_img_content_image} `}>
                <Image
                  src={"/images/certificate.png"}
                  height={300}
                  width={400}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        {/* ------------Hear what 4,000+ students have to say--------------- */}
        <div className={`${home.p11_body} `}>
          <div className={`${home.p11_body_container} container`}>
            <h3>
              Hear what 4,000+ students have <br /> to say about our course 😊 →
            </h3>
            <Swiper
              spaceBetween={0}
              slidesPerView={1}
              navigation={{
                nextEl: "#swiper_next_btn",
                prevEl: "#swiper_prev_btn",
              }}
              breakpoints={{
              
                
                550: {
                  spaceBetween: 30,
                  slidesPerView: 2,
                },
                830: {
                  spaceBetween: 30,
                  slidesPerView: 3,
                },
              }}
              pagination={{
                type: "fraction",
              }}
              modules={[Pagination, Navigation]}
              className={` mySwiper ${home.p11_body_slider_container} `}
            >
              <SwiperSlide>
                <div className={`${home.p11_body_slider_card} `}>
                  <Image
                    src={"/images/review1.png"}
                    height={604}
                    width={560}
                    alt=""
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={`${home.p11_body_slider_card} `}>
                  <Image
                    src={"/images/review2.png"}
                    height={604}
                    width={560}
                    alt=""
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={`${home.p11_body_slider_card} `}>
                  <Image
                    src={"/images/review3.png"}
                    height={604}
                    width={560}
                    alt=""
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={`${home.p11_body_slider_card} `}>
                  <Image
                    src={"/images/review4.png"}
                    height={604}
                    width={560}
                    alt=""
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={`${home.p11_body_slider_card} `}>
                  <Image
                    src={"/images/review5.png"}
                    height={604}
                    width={560}
                    alt=""
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={`${home.p11_body_slider_card} `}>
                  <Image
                    src={"/images/review6.png"}
                    height={604}
                    width={560}
                    alt=""
                  />
                </div>
              </SwiperSlide>
              <div className="swiper-arrow-icon-sec">
                <div className="swiper-arrow-icon " id="swiper_prev_btn">
                  <Image
                    src={"/images/swiper-arrow-left.png"}
                    height={100}
                    width={100}
                    alt=""
                  />{" "}
                </div>
                <div className="swiper-arrow-icon " id="swiper_next_btn">
                  <Image
                    src={"/images/swiper-arrow.png"}
                    height={100}
                    width={100}
                    alt=""
                  />{" "}
                </div>
              </div>{" "}
            </Swiper>
          </div>
        </div>
        {/* -----------Get Support Anytime Lifetime.------------------- */}
        <div className={`${home.p12_body} `}>
          <div className={`${home.p12_body_container} container`}>
            <div className={`${home.p12_body_img_content} `}>
              <div className={`${home.p12_body_img_content_img} `}>
                <Image
                  // src={"/images/vip.png"}
                  src={"/images/card-img5.png"}

                  height={500}
                  width={500}
                  alt=""
                />
              </div>
            </div>
            <div className={`${home.p12_body_text_content} `}>
              <h3>
                <span>Get Support</span> <b />
                Anytime.Lifetime.
              </h3>
              <p>
                You are not alone in your learning journey. If you get stuck
                anywhere in the course, just ask for help in our Private
                Community anytime. And you will get help!
              </p>
              <ul>
                <li>VIP Group for our learners</li>
                <li>TOP industry professionals</li>
                <li>Queries answered by PGA Team and community</li>
              </ul>
              <Link
                href={"https://nas.io/performance-growth-academy/products/ftpd"}
                className={`${home.p12_body_button} `}
              >
                <div className={`${home.p12_body_button_img} `}>
                  <Image
                    src={"/images/verified.png"}
                    height={30}
                    width={30}
                    alt=""
                  />{" "}
                </div>
                GET INSTANT ACCESS
              </Link>
            </div>
          </div>
        </div>
        {/* ----------Learn the inside out of Meta----------- */}
        <div className={`${home.p13_body} `}>
          <div className={`${home.p13_body_container} container`}>
            <h3>
              Learn the inside out of Digital Marketing with our Digital
              Marketing Mentorship Program!
            </h3>
            <Link
              href={"https://nas.io/performance-growth-academy/products/ftpd"}
              className={`${home.p13_body_button} `}
            >
              Get Instant Access
            </Link>
          </div>
        </div>

        {/* --------FAQ Section----------- */}
        <div className={`${home.p14_body} `}>
          <div className={`${home.p14_body_container} container`}>
            <h3>Frequently Asked Questions</h3>
            <div className={`${home.p14_faq_container} `}>
              <ul className={`${home.p14_faq_titles} `}>
                <li
                  onClick={() => faqClick(1)}
                  className={
                    selectedFaq.id == 1 ? `${home.p14_faq_titles_active}` : ""
                  }
                >
                  Digital Marketing FAQs
                </li>
                <li
                  onClick={() => faqClick(2)}
                  className={
                    selectedFaq.id == 2 ? `${home.p14_faq_titles_active}` : ""
                  }
                >
                  Digital Marketing Course Benefits
                </li>
                <li
                  onClick={() => faqClick(3)}
                  className={
                    selectedFaq.id == 3 ? `${home.p14_faq_titles_active}` : ""
                  }
                >
                  Digital Marketing Growth and Scope
                </li>
             
             
              </ul>
              {selectedFaq && (
                <ul className={`${home.p14_faq_question_sec} `}>
                  {selectedFaq.properties.map((data, index) => (
                    <li key={index}>
                      <span>Q: {data.questions}</span>
                      <p>{data.answer}</p>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>

        {/* ---------Start Your Success Journey------------ */}
        <div className={`${home.p15_body} `}>
          <div className={`${home.p15_body_container} container`}>
            <h3>
              Start your success journey & <br /> become a master at Digital
              <br />Markeing
            </h3>
            <Link
              href={"https://nas.io/performance-growth-academy/products/ftpd"}
              className={`${home.p15_body_button} `}
            >
              Get Instant Access
            </Link>
            <p>Limited time offer. Enroll now before price increases.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
