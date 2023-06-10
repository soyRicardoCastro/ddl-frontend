import { Inter } from "next/font/google";
// import dns from "node:dns";
import "./globals.css";
// dns.setDefaultResultOrder("ipv4first");

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dulcesdlissa",
  description: "Dulcedlissa",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
