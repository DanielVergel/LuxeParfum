import type { Metadata } from "next";
import { DM_Sans, Playfair_Display} from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";

const dmSans = DM_Sans({
   variable: "--font-dm-sans",
  subsets: ["latin"],
});

const playFair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Luxe Parfum",
  description: "Welcome to Luxe Parfum",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${dmSans.variable}  ${playFair.variable}`} >

        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >

          <Navbar/>
          {children}
          <Footer/>

        </ThemeProvider>

      </body>
    </html>
  );
}
