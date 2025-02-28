import { JSX } from "react";

export type InputProps = {
  placeholder: string;
  suptitle: string;
  value: string;
  type?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  endAdornment?: JSX.Element | null;
};
