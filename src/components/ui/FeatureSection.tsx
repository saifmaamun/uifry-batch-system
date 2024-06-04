import Image from "next/image";
import featureImage from "../../assets/features.png";
import { CodepenOutlined } from "@ant-design/icons";

const FeatureSection = async () => {
  // const res = await fetch(`${process.env.SERVER_URL}/features`, {
  //   cache: "force-cache",
  // });
  // const features = await res.json();
  // console.log(features);

  return (
    <div className="container mx-auto mb-16 px-4">
      <div className="md:flex justify-around space-x-2 items-center align-middle">
        <div className="">
          <Image src={featureImage} alt="features" />
        </div>
        <div className="space-y-8">
          <div>
            <h2 className="text-lg font-medium text-red-600 uppercase">
              features
            </h2>
            <h2 className="text-5xl font-bold capitalize">uifry premium</h2>
          </div>

          {/* {features.map((feature: TFeatures) => (
            <div key={feature._id}>
              <h2 className="text-lg mb-3 font-semibold  capitalize">
                <CodepenOutlined
                  className="mr-2"
                  style={{ color: "rgba(255, 85, 85, 1)" }}
                />
                {feature.title}
              </h2>
              <h2 className="text-lg font-medium text-neutral-500 capitalize ">
                {feature.description}
              </h2>
            </div>
          ))} */}
          <div>
            <h2 className="text-lg mb-3 font-semibold  capitalize">
              <CodepenOutlined
                className="mr-2"
                style={{ color: "rgba(255, 85, 85, 1)" }}
              />
              Budget Tracking
            </h2>
            <h2 className="text-lg font-medium text-neutral-500 capitalize ">
              Easily monitor and categorize your spending to stay on budget.
            </h2>
          </div>
          <div>
            <h2 className="text-lg mb-3 font-semibold  capitalize">
              <CodepenOutlined
                className="mr-2"
                style={{ color: "rgba(255, 85, 85, 1)" }}
              />
              Savings Goals
            </h2>
            <h2 className="text-lg font-medium text-neutral-500 capitalize ">
              Set and track your savings goals to achieve financial milestones
              faster.
            </h2>
          </div>
          <div>
            <h2 className="text-lg mb-3 font-semibold  capitalize">
              <CodepenOutlined
                className="mr-2"
                style={{ color: "rgba(255, 85, 85, 1)" }}
              />
              Investment Insights
            </h2>
            <h2 className="text-lg font-medium text-neutral-500 capitalize ">
              Get personalized investment advice to grow your wealth.
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
