import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { 
  ChakraProvider,
  DarkMode,
} from "@chakra-ui/react";
import NavBar from "@/components/layout/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GigEasy Insurances",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <ChakraProvider>
          <DarkMode>
            <NavBar />
            {children}
          </DarkMode>
        </ChakraProvider>
      </body>
    </html>
  );
}
