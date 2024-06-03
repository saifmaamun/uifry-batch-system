import { MailFilled, PhoneFilled } from "@ant-design/icons";
import logo from "../../assets/logo.png";
import { Divider } from "antd";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="py-16 container mx-auto ">
      <div className="md:grid grid-cols-12 space-x-4 text-center py-16 capitalize">
        {/* 1st column */}

        <div className="col-span-2 space-y-4">
          <div className="flex justify-start items-center space-x-2">
            <Image className="my-2" src={logo} alt="logo.png" />
            <h2 className=" font-bold text-3xl">uifry</h2>
          </div>
          <div className="flex ms-2 justify-start items-center space-x-2">
            <MailFilled
              className="mr-2"
              style={{ fontSize: "24px", color: "rgba(255, 85, 85, 1)" }}
            />
            <h2 className=" font-bold text-lg">help@frybix.com</h2>
          </div>
          <div className="flex ms-2 justify-start items-center space-x-2">
            <PhoneFilled
              className="mr-2"
              style={{ fontSize: "24px", color: "rgba(255, 85, 85, 1)" }}
            />
            <h2 className=" font-bold text-lg">+1 234 456 678 89</h2>
          </div>
        </div>
        {/* 2nd column */}
        <div className="col-span-2 space-y-4 text-start">
          <div>
            <h2 className=" font-bold text-3xl capitalize">links</h2>
          </div>
          <div>
            <Link href="/" className="text-base font-medium text-start">
              Home
            </Link>
          </div>
          <div>
            <Link href="/aboutus" className="text-base font-medium text-start">
              About Us
            </Link>
          </div>
          <div>
            <Link href="/" className="text-base font-medium text-start">
              Bookings
            </Link>
          </div>
          <div>
            <Link href="/" className="text-base font-medium text-start">
              Blogs
            </Link>
          </div>
        </div>
        {/* 3rd column */}
        <div className="col-span-2 space-y-4 text-start">
          <div>
            <h2 className=" font-bold text-3xl capitalize">legal</h2>
          </div>
          <div>
            <Link href="/" className="text-base font-medium text-start">
              terms of use
            </Link>
          </div>
          <div>
            <Link href="/" className="text-base font-medium text-start">
              privacy policy
            </Link>
          </div>
          <div>
            <Link href="/" className="text-base font-medium text-start">
              cookie policy
            </Link>
          </div>
        </div>
        {/* 4th column */}
        <div className="col-span-2 space-y-4 text-start">
          <div>
            <h2 className=" font-bold text-3xl capitalize">product</h2>
          </div>
          <div>
            <Link href="/" className="text-base font-medium text-start">
              take tour
            </Link>
          </div>
          <div>
            <Link href="/aboutus" className="text-base font-medium text-start">
              live chat
            </Link>
          </div>
          <div>
            <Link href="/" className="text-base font-medium text-start">
              reveiws
            </Link>
          </div>
        </div>
        {/* 5th column */}
        <div className="col-span-2 space-y-4 text-start">
          <div>
            <h2 className=" font-bold text-3xl capitalize">Newsletter</h2>
          </div>
          <div>
            <Link href="/" className="text-base font-medium text-start">
              Stay up to date
            </Link>
          </div>
          <div className="flex ">
            <input
              className="p-2"
              type="email"
              name=""
              id=""
              placeholder="Your Email"
            />
            <button className="bg-black text-white font-medium text-lg px-12 py-4 rounded">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <Divider className="bg-neutral-700" />
    </div>
  );
};

export default Footer;
