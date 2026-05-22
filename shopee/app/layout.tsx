import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Thai Badminton Equipment News | ข่าวและรีวิวอุปกรณ์แบดมินตัน",
  description:
    "อัปเดตข่าวอุปกรณ์แบดมินตัน รีวิวไม้แบด รองเท้า ลูกแบด เอ็น และกริป ผ่านบทความและวิดีโอสำหรับคนไทย",
  keywords: [
    "ไม้แบด",
    "อุปกรณ์แบดมินตัน",
    "รองเท้าแบดมินตัน",
    "ลูกแบด",
    "Thai Badminton Equipment News",
  ],
  openGraph: {
    title: "Thai Badminton Equipment News",
    description: "ข่าวและรีวิวอุปกรณ์แบดมินตันสำหรับคนไทย",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th">
      <body>{children}</body>
    </html>
  );
}
