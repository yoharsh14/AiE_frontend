import "./globals.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
export const metadata = {
  title: "AiE WebApp",
  description: "Generated by Harsh Dambhare",
  icnos: {
    icon: "/logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col justify-between min-h-screen">
        <div className="fixed w-full top-0 left-0 z-10">
          <NavBar />
        </div>
        <div className="flex-grow">{children}</div>
        <div className="">
          <Footer />
        </div>
      </body>
    </html>
  );
}
