import React from "react";

const shapes = {
  round: "rounded-[10px]",
} as const;

const variants = {
  fill: {
    blue_gray_100_51: "bg-[#d9d9d951] text-[#00000044]",
  },
} as const;

const sizes = {
  xs: "h-[58px] px-3 text-[20px]",
} as const;

type InputProps = Omit<React.ComponentPropsWithoutRef<"input">, "prefix" | "size"> &
  Partial<{
    label: string;
    prefix: React.ReactNode;
    suffix: React.ReactNode;
    shape: keyof typeof shapes;
    variant: keyof typeof variants | null;
    size: keyof typeof sizes;
    color: string;
  }>;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className = "",
      name = "",
      placeholder = "",
      type = "text",
      label = "",
      prefix,
      suffix,
      onChange,
      shape,
      variant = "fill",
      size = "xs",
      color = "blue_gray_100_51",
      ...restProps
    },
    ref,
  ) => {
    return (
      <label
        className={`${className} flex items-center justify-center cursor-text text-[#00000044] text-[20px] bg-[#d9d9d951] flex-grow rounded-[10px]  ${shape && shapes[shape]} ${variant && (variants[variant]?.[color as keyof (typeof variants)[typeof variant]] || variants[variant])} ${size && sizes[size]}`}
      >
        {!!label && label}
        {!!prefix && prefix}
        <input ref={ref} type={type} name={name} placeholder={placeholder} onChange={onChange} {...restProps} />
        {!!suffix && suffix}
      </label>
    );
  },
);

export { Input };
