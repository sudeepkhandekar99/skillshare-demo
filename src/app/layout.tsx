import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "Skillshare",
  description: "Skillshare Clone",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-100">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
