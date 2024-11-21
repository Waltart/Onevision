import React from "react";

const sizes = {
  textxs: "text-[24px] font-normal not-italic lg:text-[20px] md:text-[22px]",
  texts: "text-[30px] font-normal not-italic lg:text-[25px] md:text-[28px] sm:text-[26px]",
  textmd: "text-[32px] font-normal not-italic lg:text-[27px] md:text-[30px] sm:text-[28px]",
};

export type TextProps = Partial<{
  className: string;
  as: any;
  size: keyof typeof sizes;
}> &
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;

const Text: React.FC<React.PropsWithChildren<TextProps>> = ({
  children,
  className = "",
  as,
  size = "textxs",
  ...restProps
}) => {
  const Component = as || "p";

  return (
    <Component className={`text-[#2b2b2b99] font-['Inter'] ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
