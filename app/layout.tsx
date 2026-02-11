import { Orbitron, Quantico } from "next/font/google";
import "./globals.css";
import NavBar from "./_components/navbar";

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
});

const quantico = Quantico({
  variable: "--font-quantico",
  subsets: ["latin"],
  weight: ["400", "700"],
});

function AnimatedBackground() {
return (
    <div className="pointer-events-none fixed inset-0 -z-50 overflow-hidden">
      {/* your normal background */}
      <div className="absolute inset-0 bg-background" />

      {/* soft light areas */}
      <div className="absolute top-[-20%] left-[10%] h-[40rem] w-[40rem]
        rounded-full bg-foreground/5 blur-3xl animate-drift" />

      <div className="absolute bottom-[-25%] right-[5%] h-[35rem] w-[35rem]
        rounded-full bg-foreground/4 blur-3xl animate-drift-slow" />

      <div className="absolute top-[30%] right-[30%] h-[25rem] w-[25rem]
        rounded-full bg-primary/5 blur-3xl animate-drift-reverse" />
    </div>
  );}

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
