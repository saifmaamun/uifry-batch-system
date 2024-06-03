"use client";

import { Button, Layout, Menu, Typography } from "antd";
import Image from "next/image";
import logo from "../../assets/logo.png";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
// for mobile
import { useState } from "react";

const { Header, Content } = Layout;
const { Title } = Typography;

const items = [
  { key: "1", label: "Home", href: "/" },
  { key: "2", label: "About Us", href: "/aboutus" },
  { key: "3", label: "Pricing", href: "/pricing" },
  { key: "4", label: "Features", href: "/features" },
];

const Navbar = () => {
  // for mobile
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(!show);
  };
  console.log(show);
  const items = [
    { key: "1", label: "Home", href: "/" },
    { key: "2", label: "About Us", href: "/aboutus" },
    { key: "3", label: "Pricing", href: "/pricing" },
    { key: "4", label: "Features", href: "/features" },
  ];

  const pathname = usePathname();
  const router = useRouter();

  return (
    <div className="container mx-auto my-10">
      <div className="flex justify-between items-center align-middle">
        <div className="flex justify-center space-x-16 align-middle items-center">
          <div className="flex justify-center items-center space-x-2">
            <Image className="my-2" src={logo} alt="logo.png" />
            <h2 className=" font-bold text-xl">uifry</h2>
          </div>
          <div className="space-x-2 ">
            <Menu
              className="lg:block hidden"
              disabledOverflow
              mode="horizontal"
              selectedKeys={[pathname]}
            >
              {items?.map((item) => (
                <Menu.Item key={item.href} className="text-white font-bold">
                  <Link href={item.href}>{item.label}</Link>
                </Menu.Item>
              ))}
            </Menu>
          </div>
        </div>
        <div className="">
          <div className="lg:block hidden">
            <button className="bg-black text-white px-12 py-4 rounded">
              Download
            </button>
          </div>

          <button
            onClick={handleShow}
            className="lg:hidden border rounded-lg px-4 py-2 mr-4"
          >
            Menu
          </button>
          {show && (
            <div className="relative z-50">
              <Menu className=" absolute top-4 right-4 lg:hidden sm:block">
                {items?.map((item) => (
                  <Menu.Item key={item.href}>
                    <Link onClick={handleShow} href={item.href}>
                      {item.label}
                    </Link>
                  </Menu.Item>
                ))}
                <Button className="bg-black">Download</Button>
              </Menu>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
