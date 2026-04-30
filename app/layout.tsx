import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600"]
});

export const metadata: Metadata = {
  title: "Dr. Zulqarnain Haider Khan | Doctor, Teacher, Poet",
  description:
    "A clean, modern portfolio for a doctor, teacher, poet, and YouTube creator."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} scroll-smooth`}>
      <body>{children}</body>
    </html>
  );
}
