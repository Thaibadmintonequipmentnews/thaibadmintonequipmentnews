import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Thai Badminton Equipment News | คู่มือเลือกอุปกรณ์แบดมินตัน",
  description:
    "คู่มือเลือกไม้แบด รองเท้า ลูกแบด เอ็น และกริป สำหรับมือใหม่ถึงคนเล่นจริง รีวิว Youtube จากช่องเพลิน พร้อมช่องทางการสั่งซื้อง่ายๆ ที่ Shopee",
  keywords: [
    "ไม้แบด",
    "อุปกรณ์แบดมินตัน",
    "รองเท้าแบดมินตัน",
    "ลูกแบด",
    "ร้านค้าออนไลน์ใน Shopee ของแท้ 100%",
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
