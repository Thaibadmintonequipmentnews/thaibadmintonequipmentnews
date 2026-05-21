import { beginnerGuides } from "./data";

export const metadata = {
  title: "คู่มือแบดมินตันสำหรับมือใหม่ | Thai Badminton Equipment News",
  description:
    "รวมบทความแยกหน้า 15 เรื่องสำหรับมือใหม่ เลือกไม้แบด เอ็น กริป รองเท้า ถุงเท้า ซัพพอร์ต กระเป๋า และลูกแบด",
};

export default function BeginnerGuidesPage() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="/" aria-label="Thai Badminton Equipment News">
          <span className="brand-mark" aria-hidden="true">
            <img src="/images/reviews/logo-file.jpg" alt="" />
          </span>
          <span>Thai Badminton Equipment News</span>
        </a>
        <nav aria-label="เมนูคู่มือมือใหม่">
          <a href="/">หน้าแรก</a>
          <a href="#list">บทความ</a>
        </nav>
      </header>

      <article className="beginner-page">
        <section className="beginner-hero">
          <p className="eyebrow">Beginner guide</p>
          <h1>คู่มืออุปกรณ์แบดมินตันสำหรับมือใหม่</h1>
          <p className="lead">
            รวม 15 บทความเริ่มต้นแบบแยกหน้า อ่านทีละเรื่องได้ง่าย ตั้งแต่เลือกไม้แรก
            น้ำหนักไม้ เอ็น กริป รองเท้า ไปจนถึงของที่ควรมีในกระเป๋าแบด
          </p>
        </section>

        <section id="list" className="beginner-index">
          {beginnerGuides.map((guide, index) => (
            <a href={`/beginner-guides/${guide.slug}`} key={guide.slug}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{guide.title}</strong>
              <small>{guide.summary}</small>
            </a>
          ))}
        </section>
      </article>
    </main>
  );
}
