import React from "react";

const sizes = {
  textlg: "text-[48px] font-medium lg:text-[40px] md:text-[44px] sm:text-[38px]",
  headingxs: "text-[32px] font-bold lg:text-[27px] md:text-[30px] sm:text-[28px]",
  headings: "text-[40px] font-bold lg:text-[34px] md:text-[38px] sm:text-[36px]",
  headingmd: "text-[48px] font-bold lg:text-[40px] md:text-[44px] sm:text-[38px]",
  headinglg: "text-[50px] font-bold lg:text-[42px] md:text-[46px] sm:text-[40px]",
  headingxl: "text-[80px] font-bold lg:text-[80px] md:text-[48px]",
};

export type HeadingProps = Partial<{
  className: string;
  as: any;
  size: keyof typeof sizes;
}> &
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;

const Heading: React.FC<React.PropsWithChildren<HeadingProps>> = ({
  children,
  className = "",
  size = "headingxs",
  as,
  ...restProps
}) => {
  const Component = as || "h6";

  return (
    <Component className={`text-[#2b2b2b] font-['Inter'] ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
