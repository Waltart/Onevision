import { Text, Heading, Img } from "./..";
import React from "react";

interface Props {
  className?: string;
}

export default function Footer({ ...props }: Props) {
  return (
    <footer {...props} className={`${props.className} flex flex-col gap-3.5`}>
      <div className="mx-auto flex w-full max-w-[1334px] items-start justify-between gap-5 self-stretch md:flex-col md:px-5">
        <div className="flex w-[36%] flex-col items-start gap-[18px] md:w-full">
          <Heading
            size="headings"
            as="h1"
            className="text-[40px] font-bold text-[#e4794b] md:text-[38px] sm:text-[36px]"
          >
            <span className="text-[#c1272d]">One</span>
            <span className="text-[#2b2b2b]">Vision</span>
          </Heading>
          <Text as="p" className="w-full text-[24px] font-normal leading-[29px] text-[#2b2b2b99] md:text-[22px]">
            Bring brands to life through innovative design and impactful visuals. We aim to inspire
          </Text>
          <div className="flex w-[46%] justify-between gap-5 md:w-full">
            <Img src="images/img_social_icons_fa.svg" alt="Facebook Icon" className="h-[28px] w-[28px]" />
            <Img src="images/img_social_icons_in.svg" alt="Linkedin Icon" className="h-[28px] w-[28px]" />
            <Img src="images/img_link.svg" alt="Link Icon" className="h-[28px] w-[28px]" />
            <Img src="images/img_social_icons_youtube_negative.svg" alt="Youtube Icon" className="h-[28px] w-[28px]" />
          </div>
        </div>
        <div className="flex w-[46%] items-start justify-between gap-5 self-center md:w-full md:flex-col">
          <div className="flex w-[60%] flex-col items-start gap-9 self-center md:w-full">
            <Heading as="h2" className="text-[32px] font-bold text-[#2b2b2b] md:text-[30px] sm:text-[28px]">
              Company
            </Heading>
            <ul className="flex flex-col items-start gap-[38px]">
              <li>
                <a href="Home" target="_blank" rel="noreferrer" className="md:text-[22px]">
                  <Text as="p" className="text-[24px] font-normal text-[#2b2b2b99]">
                    Home
                  </Text>
                </a>
              </li>
              <li>
                <a href="#" className="md:text-[22px]">
                  <Text as="p" className="text-[24px] font-normal text-[#2b2b2b99]">
                    Why trust us
                  </Text>
                </a>
              </li>
              <li>
                <a href="#" className="md:text-[22px]">
                  <Text as="p" className="text-[24px] font-normal text-[#2b2b2b99]">
                    Our team
                  </Text>
                </a>
              </li>
              <li>
                <a href="FAQ" target="_blank" rel="noreferrer" className="md:text-[22px]">
                  <Text as="p" className="text-[24px] font-normal text-[#2b2b2b99]">
                    FAQ
                  </Text>
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-start gap-9">
            <Heading as="h2" className="text-[32px] font-bold text-[#2b2b2b] md:text-[30px] sm:text-[28px]">
              Ressource
            </Heading>
            <ul className="flex flex-col items-start gap-[38px]">
              <li>
                <a href="Program" target="_blank" rel="noreferrer" className="md:text-[22px]">
                  <Text as="p" className="text-[24px] font-normal text-[#2b2b2b99]">
                    Program
                  </Text>
                </a>
              </li>
              <li>
                <a href="API" target="_blank" rel="noreferrer" className="md:text-[22px]">
                  <Text as="p" className="text-[24px] font-normal text-[#2b2b2b99]">
                    API
                  </Text>
                </a>
              </li>
              <li>
                <a href="Blog" target="_blank" rel="noreferrer" className="md:text-[22px]">
                  <Text as="p" className="text-[24px] font-normal text-[#2b2b2b99]">
                    Blog
                  </Text>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-[34px] self-stretch">
        <div className="h-px w-full self-stretch bg-[#2b2b2b]" />
        <div className="mx-auto flex w-full max-w-[1304px] justify-between gap-5 self-stretch md:flex-col md:px-5">
          <div className="flex flex-wrap gap-2.5">
            <a href="Privacy" target="_blank" rel="noreferrer" className="md:text-[22px]">
              <Text as="p" className="text-[24px] font-normal text-[#2b2b2b99]">
                Privacy
              </Text>
            </a>
            <a href="policy" target="_blank" rel="noreferrer" className="md:text-[22px]">
              <Text as="p" className="text-[24px] font-normal text-[#2b2b2b99]">
                policy
              </Text>
            </a>
            <a href="Terms" target="_blank" rel="noreferrer" className="md:text-[22px]">
              <Text as="p" className="text-[24px] font-normal text-[#2b2b2b99]">
                Terms
              </Text>
            </a>
            <a href="&" target="_blank" rel="noreferrer" className="md:text-[22px]">
              <Text as="p" className="text-[24px] font-normal text-[#2b2b2b99]">
                &
              </Text>
            </a>
            <a href="conditions" target="_blank" rel="noreferrer" className="md:text-[22px]">
              <Text as="p" className="text-[24px] font-normal text-[#2b2b2b99]">
                conditions
              </Text>
            </a>
          </div>
          <Text as="p" className="text-[24px] font-normal text-[#2b2b2b99] md:text-[22px]">
            @2024 All right reserved
          </Text>
        </div>
      </div>
    </footer>
  );
}
