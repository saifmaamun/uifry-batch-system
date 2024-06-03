import Image from "next/image";
import React from "react";
import features from "../../assets/features.png";
import {
  CodepenOutlined,
  CompressOutlined,
  RadarChartOutlined,
} from "@ant-design/icons";

const FeatureSection = () => {
  return (
    <div className="container mx-auto mb-16">
      <div className="md:flex justify-center space-x-2 items-center align-middle">
        <div className="">
          <Image src={features} alt="features" />
        </div>
        <div className="space-y-8">
          <div>
            <h2 className="text-lg font-medium text-red-600 uppercase">
              features
            </h2>
            <h2 className="text-5xl font-bold capitalize">uifry premium</h2>
          </div>

          <div>
            <h2 className="text-lg mb-3 font-semibold  capitalize">
              <CompressOutlined
                className="mr-2"
                style={{ color: "rgba(255, 85, 85, 1)" }}
              />
              budgeting intervals
            </h2>
            <h2 className="text-lg font-medium text-neutral-500 capitalize ">
              Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
              <br />
              faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
            </h2>
          </div>
          <div>
            <h2 className="text-lg mb-3 font-semibold  capitalize">
              <CodepenOutlined
                className="mr-2"
                style={{ color: "rgba(255, 85, 85, 1)" }}
              />
              budgeting intervals
            </h2>
            <h2 className="text-lg font-medium text-neutral-500 capitalize ">
              Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet{" "}
              <br />
              faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
            </h2>
          </div>
          <div>
            <h2 className="text-lg mb-3 font-semibold  capitalize">
              <RadarChartOutlined
                className="mr-2"
                style={{ color: "rgba(255, 85, 85, 1)" }}
              />
              budgeting intervals
            </h2>
            <h2 className="text-lg font-medium text-neutral-500 capitalize ">
              Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet{" "}
              <br />
              faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
