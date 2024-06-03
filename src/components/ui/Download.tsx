import Image from "next/image";
import mobile from "../../assets/app.png";
import { AppleFilled, AppleOutlined } from "@ant-design/icons";

const Download = () => {
  return (
    <div className="container mx-auto my-40 bg-black text-white rounded-lg px-6 py-10">
      <div className="md:flex space-x-2 space-y-2 justify-center items-center align-middle">
        <div className="space-y-4">
          <h2 className="text-5xl font-bold capitalize">
            ready to get started?
          </h2>
          <h2 className="text-lg font-medium  uppercase">
            Risus habitant leo egestas mauris diam eget morbi tempus vulputate.
          </h2>
          <button className="bg-white text-black font-medium text-lg px-12 py-4 rounded">
            Get Started
            <AppleFilled style={{ fontSize: "24px", marginLeft: "12px" }} />
          </button>
        </div>
        <div>
          <Image src={mobile} alt="mobile" />
        </div>
      </div>
    </div>
  );
};

export default Download;
