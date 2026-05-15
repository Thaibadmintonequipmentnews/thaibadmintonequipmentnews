import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Badminton Gear Thai | คู่มือเลือกอุปกรณ์แบดมินตัน",
  description:
    "คู่มือเลือกไม้แบด รองเท้า ลูกแบด เอ็น และกริป สำหรับมือใหม่ถึงคนเล่นจริง พร้อมลิงก์ดูราคาที่ Shopee",
  keywords: [
    "ไม้แบด",
    "อุปกรณ์แบดมินตัน",
    "รองเท้าแบดมินตัน",
    "ลูกแบด",
    "Shopee Affiliate",
  ],
  openGraph: {
    title: "Badminton Gear Thai",
    description: "เลือกอุปกรณ์แบดมินตันให้เข้ากับสไตล์การเล่นและงบประมาณ",
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
