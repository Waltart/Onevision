import { Button, Text, Img } from "./..";
import React from "react";

interface Props {
  className?: string;
}

export default function Header({ ...props }: Props) {
  return (
    <header
      {...props}
      className={`${props.className} flex sm:flex-col justify-between items-center mr-3 gap-5 md:mr-0`}
    >
      <Img
        src="images/img_header_logo.png"
        alt="Logo Image"
        className="h-[60px] w-[252px] self-end object-contain sm:self-auto"
      />
      <div className="flex w-[68%] items-center justify-between gap-5 md:w-full md:flex-col">
        <ul className="!mb-2.5 flex flex-wrap gap-[58px] self-end md:gap-5 md:self-auto">
          <li>
            <a href="#" className="md:text-[28px] sm:text-[26px]">
              <Text size="texts" as="p" className="text-[30px] font-normal text-[#2b2b2b]">
                Home
              </Text>
            </a>
          </li>
          <li>
            <a href="#" className="md:text-[28px] sm:text-[26px]">
              <Text size="texts" as="p" className="text-[30px] font-normal text-[#2b2b2b]">
                Why trust us
              </Text>
            </a>
          </li>
          <li>
            <a href="#" className="md:text-[28px] sm:text-[26px]">
              <Text size="texts" as="p" className="text-[30px] font-normal text-[#2b2b2b]">
                Our Services
              </Text>
            </a>
          </li>
          <li>
            <a href="#" className="md:text-[28px] sm:text-[26px]">
              <Text size="texts" as="p" className="text-[30px] font-normal text-[#2b2b2b]">
                FAQ
              </Text>
            </a>
          </li>
        </ul>
        <Button color="red_800_01" className="min-w-[192px] rounded-[20px] px-[34px] sm:px-5">
          Get Infos
        </Button>
      </div>
    </header>
  );
}
