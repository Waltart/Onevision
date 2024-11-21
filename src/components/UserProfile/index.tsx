import { Text, Heading, Img } from "./..";
import React from "react";

interface Props {
  className?: string;
  userImage?: string;
  userTitle?: React.ReactNode;
  userDescription?: React.ReactNode;
}

export default function UserProfile({
  userImage = "images/img_image_1.png",
  userTitle = "Graphic Designer",
  userDescription = "Bring brands to life through innovative design and impactful visuals. We aim to inspire",
  ...props
}: Props) {
  return (
    <div {...props} className={`${props.className} flex flex-col items-center w-[32%] md:w-full gap-8 p-[22px] sm:p-4`}>
      <Img src={userImage} alt="Image" className="h-[276px] w-full rounded-[20px] object-cover" />
      <div className="mx-11 flex flex-col items-start gap-3.5 self-stretch">
        <Heading as="h2" className="text-[32px] font-bold text-[#2b2b2b]">
          {userTitle}
        </Heading>
        <div className="h-[6px] w-[32%] bg-[#c1272d]" />
      </div>
      <Text size="textmd" as="p" className="mb-[52px] w-[80%] text-[32px] font-normal leading-[38px] text-[#2b2b2b99]">
        {userDescription}
      </Text>
    </div>
  );
}
