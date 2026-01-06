import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/HomeComponents/header";
import Footer from "./components/HomeComponents/footer";
import StoreInitializer from "./components/StoreInitializer";
// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// export const metadata = {
//   title: "Islamic Charity & Online Donation Welfare | Baitussalam USA",
//   description: "Support Baitussalam USA, a trusted Islamic charity US. Donate online for Zakat, Sadqah, and welfare causes. Join us in spreading hope and compassion globally.",
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`antialiased min-h-screen`} suppressHydrationWarning>
        <StoreInitializer />
        <Header /> {children} <Footer />
      </body>
    </html>
  );
}
