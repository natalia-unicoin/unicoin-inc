import type { Metadata } from "next";
// import "./globals.css"; // Commented out for MUI migration
import ThemeRegistry from "@/theme/ThemeRegistry";
import { ModalProvider } from "@/context/ModalContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JoinModal from "@/components/JoinModal";
import ManifestoModal from "@/components/ManifestoModal";

export const metadata: Metadata = {
  title: "Unicoin: The Debt-Free Evolution of Digital Asset Treasury",
  description: "A smarter way to build digital asset value. Unicoin rejection of high-liability approach ensures growth is built on a sustainable financial foundation rather than borrowed capital.",
  keywords: "unicoin, cryptocurrency, digital asset treasury, debt-free crypto, AI-driven finance",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased selection:bg-[#EBE563] selection:text-black">
        <ThemeRegistry>
          <ModalProvider>
            <Navbar />
            {children}
            <Footer />
            <JoinModal />
            <ManifestoModal />
          </ModalProvider>
        </ThemeRegistry>
      </body>
    </html>
  );
}

