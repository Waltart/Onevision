import React from "react";

const shapes = {
  round: "rounded-[40px]",
} as const;
const variants = {
  fill: {
    red_800_01: "bg-[#c1272d] text-[#ffffff]",
    red_800: "bg-[#c0272d] text-[#ffffff]",
    white_A700: "bg-[#ffffff] text-[#0000007a]",
  },
  outline: {
    white_A700: "border-[#ffffff] border-2 border-solid text-[#ffffff]",
  },
} as const;
const sizes = {
  xs: "h-[36px] px-8 text-[16px]",
  sm: "h-[78px] px-[34px] text-[24px]",
} as const;

type ButtonProps = Omit<
  React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
  "onClick"
> &
  Partial<{
    className: string;
    leftIcon: React.ReactNode;
    rightIcon: React.ReactNode;
    onClick: () => void;
    shape: keyof typeof shapes;
    variant: keyof typeof variants | null;
    size: keyof typeof sizes;
    color: string;
  }>;
const Button: React.FC<React.PropsWithChildren<ButtonProps>> = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant = "fill",
  size = "sm",
  color = "white_A700",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex flex-row items-center justify-center text-center cursor-pointer whitespace-nowrap ${shape && shapes[shape]} ${size && sizes[size]} ${variant && variants[variant]?.[color as keyof (typeof variants)[typeof variant]]}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

export { Button };
