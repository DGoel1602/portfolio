import { Orbitron, Quantico } from "next/font/google";
import "./globals.css";
import NavBar from "./_components/navbar";
import AnimatedBackground from "./_components/bg";

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
});

const quantico = Quantico({
  variable: "--font-quantico",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${orbitron.variable} ${quantico.variable} antialiased`}>
        <AnimatedBackground />
        <NavBar />
        {children}
      </body>
    </html>
  );
}
