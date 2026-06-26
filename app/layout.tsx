import "./globals.css";
import Navbar from "./components/Navbar/page";
import Footer from "./components/Footer/page";

export const metadata = {
  title: "NextGenAI",
  description: "AI Powered Automation Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
          <Footer />
      </body>
    </html>
  );
}