"use client";

import { ArrowRightOutlined, PlayCircleOutlined } from "@ant-design/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import hero from "../../assets/hero-right.png";
import style from "../../assets/hero-bottom.png";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="container mx-auto mb-16 px-2">
      <div className="flex justify-center items-center align-middle">
        <div className="space-y-6">
          <>
            <h2 className="text-6xl font-bold">
              Make The Best <br /> Financial Decisions
            </h2>
          </>
          <>
            <h2 className="text-lg font-medium text-neutral-500">
              Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
              faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
            </h2>
          </>
          <div className="space-x-10 md:flex justify-start align-middle items-center">
            <button className="bg-black text-white text-lg px-12 py-4 rounded">
              Get Started
              <ArrowRightOutlined style={{ fontSize: "18px" }} />
            </button>
            <div className="space-x-3  mt-10 md:mt-0">
              <PlayCircleOutlined style={{ fontSize: "18px" }} />
              <button className="bg-transparent border-0 text-lg">
                <h2>Watch Video</h2>
              </button>
            </div>
          </div>
          <div>
            <Image className="my-2" src={style} alt="style.png" />
          </div>
        </div>
        <div>
          <Image
            className="my-2 hidden lg:block"
            width={1200}
            src={hero}
            alt="hero.png"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
