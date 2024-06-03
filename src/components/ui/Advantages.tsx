import Image from "next/image";
import adv1 from "../../assets/adv1.png";
import adv2 from "../../assets/adv2.png";
import { BellFilled, ToolFilled } from "@ant-design/icons";

const Advantages = () => {
  return (
    <div className="container mx-auto mb-16">
      <div className="grid md:grid-cols-2 md:space-x-2 space-y-2 items-center align-middle">
        <div className="space-y-8">
          <div>
            <h2 className="text-lg font-medium text-red-600 uppercase">
              advatnages
            </h2>
            <h2 className="text-5xl font-bold capitalize">why choose Uifry?</h2>
          </div>

          <div>
            <h2 className="text-3xl mb-3 font-semibold  capitalize">
              <BellFilled
                className="mr-2"
                style={{ color: "rgba(255, 85, 85, 1)" }}
              />
              clever notifications
            </h2>
            <h2 className="text-lg font-medium  text-neutral-500 capitalize ">
              Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
              ultricies. In ultrices malesuada elit mauris etiam odio. Duis
              tristique lacus, et blandit viverra nisl velit. Sed mattis
              rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget
              ac dolor neque lorem sapien, suspendisse aliquam.
            </h2>
          </div>
        </div>
        <div className="">
          <Image src={adv1} alt="features" />
        </div>
        <div className="">
          <Image src={adv2} alt="features" />
        </div>
        <div className="space-y-8">
          <div>
            <h2 className="text-3xl mb-3 font-semibold  capitalize">
              <ToolFilled
                className="mr-2"
                style={{ color: "rgba(255, 85, 85, 1)" }}
              />
              fully customizable
            </h2>
            <h2 className="text-lg font-medium  text-neutral-500 capitalize ">
              Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
              ultricies. In ultrices malesuada elit mauris etiam odio. Duis
              tristique lacus, et blandit viverra nisl velit. Sed mattis
              rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget
              ac dolor neque lorem sapien, suspendisse aliquam.
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advantages;
