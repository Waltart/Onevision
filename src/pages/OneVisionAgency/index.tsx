import { Helmet } from "react-helmet";
import { Img, Button, Input, Text, Heading } from "../../components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import OurServicesSection from "./OurServicesSection";
import React from "react";

export default function OneVisionAgencyPage() {
  return (
    <>
      <Helmet>
        <title>Creative Agency Services - OneVision</title>
        <meta
          name="description"
          content="Discover OneVision Agency's innovative design and creative solutions. Specializing in graphic design, photography, and filmmaking, we bring brands to life and inspire engagement. Explore our services and sign up for special offers."
        />
      </Helmet>
      <div className="w-full border border-solid border-[#000000] bg-[#ffffff]">
        <div className="mb-1 flex flex-col items-center">
          <div className="relative h-[1694px] content-center self-stretch lg:h-auto md:h-auto">
            <div className="mx-auto flex-1">
              <div className="relative z-[1] flex h-[1116px] items-start justify-center bg-[url(/public/images/img_group_3.png)] bg-cover bg-no-repeat py-[88px] lg:h-auto lg:py-8 md:h-auto md:py-5 sm:py-4">
                <div className="container-xs mb-[162px] flex justify-center px-14 lg:px-5 md:px-5">
                  <div className="flex w-full flex-col gap-[214px] lg:gap-40 md:gap-40 sm:gap-[107px]">
                    <Header />
                    <div className="flex flex-col">
                      <Heading
                        size="headingxl"
                        as="h1"
                        className="text-[80px] font-bold leading-[96px] text-[#2b2b2b] lg:text-[48px] md:text-[48px]"
                      >
                        <>
                          The multiverse
                          <br />
                          of creatives
                        </>
                      </Heading>
                      <Heading
                        size="textlg"
                        as="h2"
                        className="mt-6 text-[48px] font-medium leading-[58px] text-[#ffffff] lg:text-[40px] md:text-[32px] sm:text-[26px]"
                      >
                        <>
                          Explore endless possibilities in the Multiverse
                          <br />
                          of Creatives where imagination knows no bounds.
                        </>
                      </Heading>
                      <div className="mt-[68px] flex gap-[70px]">
                        <Button
                          color="red_800"
                          shape="round"
                          className="min-w-[328px] rounded-[40px] px-[34px] font-medium sm:px-4"
                        >
                          Start with us
                        </Button>
                        <Button
                          variant="outline"
                          shape="round"
                          className="min-w-[410px] rounded-[40px] !border-2 px-8 font-medium sm:px-4"
                        >
                          Get more information
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative mt-[-4px] flex flex-col items-center justify-center bg-[#f3f3f3] py-[110px] lg:py-8 md:py-5 sm:py-4">
                <div className="container-xs mt-[30px] flex flex-col items-end gap-8 pl-14 pr-[90px] lg:px-5 md:px-5">
                  <Heading
                    size="headinglg"
                    as="h3"
                    className="mr-[478px] text-[50px] font-bold text-[#2b2b2b] lg:text-[42px] md:mr-0 md:text-[34px] sm:text-[28px]"
                  >
                    Our Goals
                  </Heading>
                  <Text
                    size="textmd"
                    as="p"
                    className="w-[50%] text-[32px] font-normal leading-[38px] text-[#2b2b2bb2] lg:w-full lg:text-[27px] md:w-full md:text-[26px] sm:text-[24px]"
                  >
                    Bring brands to life through innovative design and impactful visuals. We aim to inspire, engage, and
                    create unforgettable experiences for our clients by delivering creative solutions that align with
                    their vision and values.
                  </Text>
                </div>
              </div>
            </div>
            <Img
              src="images/img_sdfsqfdfff_01_1.png"
              alt="Main Image"
              className="absolute bottom-[2%] left-0 z-[2] m-auto h-[712px] w-[46%] object-contain"
            />
          </div>
          <div className="relative h-[1912px] self-stretch">
            <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max flex-1 flex-col items-center">
              <div className="h-[1550px] self-stretch bg-[url(/public/images/img_group_4.png)] bg-cover bg-no-repeat py-[74px] lg:h-auto lg:py-8 md:h-auto md:py-5 sm:py-4">
                {/* our services section */}
                <OurServicesSection />
              </div>
              <div className="container-xs relative mt-[-24px] flex flex-col items-start pl-[450px] pr-14 lg:px-5 md:px-5">
                <div className="h-[342px] w-[342px] rounded-[170px] bg-[#d9d9d94c]" />
              </div>
            </div>
            <div className="container-xs absolute bottom-px left-0 right-0 my-auto flex lg:px-5 md:px-5">
              <div className="flex w-full items-start justify-between gap-5 rounded-[30px] bg-[#2b2b2b] px-[72px] py-[116px] lg:p-8 md:flex-col md:p-5 sm:p-4">
                <Heading
                  size="headingmd"
                  as="h3"
                  className="ml-[38px] mt-12 w-[22%] text-[48px] font-bold leading-[58px] text-[#ffffff] lg:ml-0 lg:w-[22%] lg:text-[40px] md:ml-0 md:w-full md:text-[32px] sm:text-[26px]"
                >
                  <>
                    Sign up for
                    <br />
                    special offer
                  </>
                </Heading>
                <div className="mt-1.5 flex w-[32%] flex-col items-center self-end md:w-full md:self-auto">
                  <Heading
                    as="h4"
                    className="self-start text-[32px] font-bold text-[#ffffff] lg:text-[27px] md:text-[26px] sm:text-[24px]"
                  >
                    The universe
                  </Heading>
                  <Text
                    as="p"
                    className="mt-3 w-[94%] text-[24px] font-normal leading-[29px] text-[#ffffff] lg:w-full lg:text-[20px] md:w-full"
                  >
                    Bring brands to life through innovative design and impactful visuals. We aim to inspire
                  </Text>
                  <div className="relative ml-1 mt-7 h-[58px] content-center self-stretch lg:h-auto md:ml-0 md:h-auto">
                    <Input
                      shape="round"
                      name="Message Field"
                      placeholder={`Send us a message`}
                      className="mx-auto rounded-[10px] px-3"
                    />
                    <Button
                      size="xs"
                      className="absolute bottom-0 right-3 top-0 my-auto min-w-[106px] rounded-lg px-8 sm:px-4"
                    >
                      Send
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <Img
              src="images/img_pngegg_3_1.png"
              alt="Product Image"
              className="absolute bottom-px left-0 right-0 m-auto h-[654px] w-[38%] object-contain"
            />
          </div>
          <div className="container-xs mt-[142px] px-14 lg:px-5 md:px-5">
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}
