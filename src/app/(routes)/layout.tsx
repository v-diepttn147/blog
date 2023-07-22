import { Header } from "../_common/components";
import "./globals.css";

export const metadata = {
  title: "Nhan Luong",
  description: "Blogs by Nhan Luong",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-zinc-50">
      <body className="container mx-auto py-12 sm:px-12 md:px-16 bg-white min-h-screen">
        <Header />
        {children}
      </body>
    </html>
  );
}
