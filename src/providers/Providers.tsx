'use client';
import { StyleProvider } from "@ant-design/cssinjs";
import '@ant-design/v5-patch-for-react-19';
import ThemeProvider from "./ThemeProvider";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <StyleProvider hashPriority="high">
      {children}
    </StyleProvider>
  );
};

export default Providers;
