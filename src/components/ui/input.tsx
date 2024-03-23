import { ComponentProps, createContext, ReactNode, useContext } from "react";

import { tv, type VariantProps } from "tailwind-variants";

const input = tv({
  slots: {
    root: "",
    control: "placeholder-zinc-500 text-zinc-100",
  },

  variants: {
    variant: {
      default: {},
      filter: {
        root: "flex gap-2 rounded-md bg-slate-800 p-2.5",
        control: "bg-transparent flex-1 outline-none",
      },
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

const inputContext = createContext({} as VariantProps<typeof input>);

export function Input({
  children,
  variant,
}: { children: ReactNode } & VariantProps<typeof input>) {
  const { root } = input({ variant });

  return (
    <inputContext.Provider value={{ variant }}>
      <div className={root()}>{children}</div>
    </inputContext.Provider>
  );
}

export interface ControlProps extends ComponentProps<"input"> {}

export function Control({ className, ...props }: ControlProps) {
  const { variant } = useContext(inputContext);
  const { control } = input({ variant });

  return <input className={control({ className })} {...props} />;
}
