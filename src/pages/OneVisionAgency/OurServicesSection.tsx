import { Text, Heading } from "../../components";
import UserProfile from "../../components/UserProfile";
import React, { Suspense } from "react";

const creativeDesignList = [
  {
    userImage: "images/img_image_1.png",
    userTitle: "Graphic Designer",
    userDescription: "Bring brands to life through innovative design and impactful visuals. We aim to inspire",
  },
  {
    userImage: "images/img_image_1.png",
    userTitle: "Graphic Designer",
    userDescription: "Bring brands to life through innovative design and impactful visuals. We aim to inspire",
  },
  {
    userImage: "images/img_image_3.png",
    userTitle: "Filmmaking",
    userDescription: "Bring brands to life through innovative design and impactful visuals. We aim to inspire",
  },
];

export default function OurServicesSection() {
  return (
    <>
      {/* our services section */}
      <div className="mb-[364px] flex flex-col items-center">
        <div className="container-xs flex flex-col gap-28 lg:gap-28 lg:px-5 md:gap-[84px] md:px-5 sm:gap-14">
          <div className="mx-[110px] flex flex-col items-center gap-5 md:mx-0">
            <Heading
              size="headinglg"
              as="h2"
              className="text-[50px] font-bold text-[#2b2b2b] lg:text-[42px] md:text-[34px] sm:text-[28px]"
            >
              Our services
            </Heading>
            <Text
              size="textmd"
              as="p"
              className="self-stretch text-center text-[32px] font-normal leading-[38px] text-[#2b2b2b] lg:text-[27px] md:text-[26px] sm:text-[24px]"
            >
              Bring brands to life through innovative design and impactful visuals. We aim to inspire, engage, and
              create unforgettable experiences for our clients by delivering creative{" "}
            </Text>
          </div>
          <div className="flex gap-[54px] md:flex-col">
            <Suspense fallback={<div>Loading feed...</div>}>
              {creativeDesignList.map((d, index) => (
                <UserProfile {...d} key={"visionList" + index} className="rounded-[30px] bg-[#f3f3f3]" />
              ))}
            </Suspense>
          </div>
        </div>
      </div>
    </>
  );
}
