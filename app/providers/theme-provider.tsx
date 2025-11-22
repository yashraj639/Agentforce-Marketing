"use client";
import {
  ThemeProvider as NextThemeProvider,
  ThemeProviderProps,
} from "next-themes";

const Themeprovider = ({ children, ...props }: ThemeProviderProps) => {
  return <NextThemeProvider {...props}>{children}</NextThemeProvider>;
};

export default Themeprovider;
