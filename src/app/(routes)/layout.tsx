import { Roboto } from "@next/font/google";

import { Header } from "../_common/components";
import Footer from "../_common/components/Footer";
import "./globals.css";

export const metadata = {
  title: "Nhan Luong",
  description: "Blogs by Nhan Luong",
};

const roboto = Roboto({
  weight: ["400"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`bg-zinc-50 ${roboto.className}}`}>
      <body className="container mx-auto py-12 sm:px-12 md:px-16 min-h-screen">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
