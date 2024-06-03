import Image from "next/image";
import user from "../../assets/testimonial.png";
import user1 from "../../assets/user1.png";

const Testimonial = () => {
  return (
    <div className="container mx-auto mb-16">
      <div className="text-center">
        <h2 className="text-lg font-medium text-red-600 uppercase">
          testimonial
        </h2>
        <h2 className="text-5xl font-bold capitalize">
          what our users <br /> say about us?
        </h2>
      </div>
      <div className="md:grid md:grid-cols-2 flex justify-center md:space-x-2 space-y-2 items-center align-middle">
        <div className="hidden md:block">
          <Image src={user} alt="users" />{" "}
        </div>
        <div className="mx-auto space-y-4">
          <h2 className="text-3xl mb-3 font-semibold  capitalize">
            the best financial accounting app ever!
          </h2>
          <h2 className="text-lg font-medium   text-neutral-500 capitalize ">
            Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies.
            In ultrices malesuada elit mauris etiam odio. Duis tristique lacus,
            et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse
            sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien,
            suspendisse aliquam.
          </h2>
          <div className="flex justify-start items-center align-middle">
            <Image width={80} height={80} src={user1} alt="" />
          </div>
          <h2 className="text-lg mb-3 font-bold  capitalize">Nick Jones</h2>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
