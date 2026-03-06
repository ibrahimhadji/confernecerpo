import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "WICC26 | Workshop on Intelligent Computing and Cybernetics",
  description:
    "Official page for WICC26 featuring speakers, conference subjects, chairs, and sponsors.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
