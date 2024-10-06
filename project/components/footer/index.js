import React from "react";
import footer from "@/styles/footer.module.css";
import Image from "next/image";
import Link from "next/link";
const Index = () => {
  return (
    <div className={footer.footer_main_body}>
      <div className={`${footer.footer_container} container`}>
        {/* <div className={`${footer.footer_content} `}>
          <div className={`${footer.footer_content_data_logo_sec} `}>
            <div className={`${footer.footer_content_data_logo} `}>
              <Image
                src={"/images/verified.png"}
                height={150}
                width={150}
                alt=""
              />
            </div>
            <p>
              Young Urban Project offers unparalleled resources and support to
              professionals and business owners striving for career advancement.
              With our Mentor-Led Programs, On-demand courses, and Live
              workshops, you&apos;ll gain cutting-edge skills and knowledge to
              thrive in competitive industries.
            </p>
          </div>
          <div className={`${footer.footer_content_uls} `}>
            <div className={`${footer.footer_content_data} `}>
              <h3>Explore</h3>
              <ul>
                <li>
                  <Link href={"/"}>Live Courses</Link>
                </li>
                <li>
                  <Link href={"/"}>Self-Placed Courses</Link>
                </li>
                <li>
                  <Link href={"/"}>Workshops</Link>
                </li>
              </ul>
            </div>
            <div className={`${footer.footer_content_data} `}>
              <h3>More</h3>
              <ul>
                <li>
                  <Link href={"/"}>Blog</Link>
                </li>
                <li>
                  <Link href={"/"}>About </Link>
                </li>
                <li>
                  <Link href={"/"}>Contact</Link>
                </li>
                <li>
                  <Link href={"/"}>Careers</Link>
                </li>
                <li>
                  <Link href={"/"}>Become a Mentor</Link>
                </li>
                <li>
                  <Link href={"/"}>Privacy Policy</Link>
                </li>
                <li>
                  <Link href={"/"}>Terms Of Use</Link>
                </li>
                <li>
                  <Link href={"/"}>Refund Policy</Link>
                </li>
              </ul>
            </div>
            <div className={`${footer.footer_content_data} `}>
              <h3>Social</h3>
              <ul>
                <li>
                  <Link href={"/"}>Instagram</Link>
                </li>
                <li>
                  <Link href={"/"}>Youtube</Link>
                </li>
                <li>
                  <Link href={"/"}>LinkedIn</Link>
                </li>
                <li>
                  <Link href={"/"}>Facebook</Link>
                </li>
                <li>
                  <Link href={"/"}>X</Link>
                </li>
              </ul>
            </div>
          </div>
        </div> */}
        {/* <ul className={`${footer.footer_content2} `}>
          <li>
            <Link href={"/"}>Digital Marketing Strategy</Link>
          </li>
          <li>
            <Link href={"/"}>Product Management Guide</Link>
          </li>
          <li>
            <Link href={"/"}>Product Marketing Strategies</Link>
          </li>
          <li>
            <Link href={"/"}>Performance Marketing Guide</Link>
          </li>
        </ul> */}
        <div className={footer.footer_follow_us_body}>
          <h5>Follow for More</h5>
          <ul>
            <li>
              <Link href={"/"}>
                <div className={footer.footer_follow_us_logo}>
                  <Image
                    src="/images/instagram.svg"
                    height={50}
                    width={50}
                    alt=""
                  />
                </div>
              </Link>
            </li>
            <li>
              <div className={footer.footer_follow_us_logo}>
                {" "}
                <Link href={"/"}>
                  <Image
                    src="/images/linkedin.svg"
                    height={50}
                    width={50}
                    alt=""
                  />
                </Link>
              </div>{" "}
            </li>
          </ul>
        </div>
        <span>Copyright © 2024 Digital Marketing Mastery</span>
      </div>
    </div>
  );
};

export default Index;
