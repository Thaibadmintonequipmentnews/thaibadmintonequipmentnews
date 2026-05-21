import { peeratchaiImage } from "./peeratchaiImage";

export const metadata = {
  title:
    "\"พี\" พีรัชชัย สุขพันธ์ ตบหนักที่สุดในไทยที่ Thailand Open 2026 | Thai Badminton Equipment News",
  description:
    "บทความนักกีฬา พีรัชชัย สุขพันธ์ กับสถิติลูกตบ 456.3 km/h ใน Thailand Open 2026 และประเด็นไม้ Victor Auraspeed ที่ใช้ในการแข่งขัน",
};

export default function PeeratchaiThailandOpenSmashArticle() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="/" aria-label="Thai Badminton Equipment News">
          <span className="brand-mark" aria-hidden="true">
            <img src="/images/reviews/logo-file.jpg" alt="" />
          </span>
          <span>Thai Badminton Equipment News</span>
        </a>
        <nav aria-label="เมนูบทความ">
          <a href="/">หน้าแรก</a>
          <a href="#article">บทความ</a>
          <a href="https://www.facebook.com/ThaiBadmintonNews/" target="_blank" rel="noreferrer">
            Facebook
          </a>
        </nav>
      </header>

      <article id="article" className="news-article">
        <header className="news-header">
          <p className="eyebrow">Athlete gear</p>
          <h1>&quot;พี&quot; พีรัชชัย สุขพันธ์ ตบหนักที่สุดในไทยที่ Thailand Open 2026</h1>
          <p className="news-meta">Thai Badminton Equipment News</p>
        </header>

        <figure className="news-hero-image">
          <img
            src={peeratchaiImage}
            alt="พี พีรัชชัย สุขพันธ์ กับสถิติความเร็วลูกตบ Thailand Open 2026"
          />
        </figure>

        <div className="news-body">
          <p>
            &quot;พี&quot; พีรัชชัย สุขพันธ์ เป็นนักแบดไทยที่ตบหนักที่สุดในรายการ
            Thailand Open 2026 ครับ
          </p>

          <p>
            จากที่เห็นในสนาม เขาได้ใช้ Auraspeed Fantome หรือไม่ก็ 100X Ultra นี่แหละ
            เพราะเราเห็นเขาสลับใช้สองไม้ในการแข่งขัน จุดนี้น่าสนใจมาก เพราะทั้งสองรุ่นอยู่ในสายสปีด
            แต่พออยู่ในมือผู้เล่นที่รีดไม้เป็น ก็ยังสร้างความเร็วลูกตบได้โหดมาก
          </p>

          <p>
            ไฮไลต์คือในประเภทชายคู่ พีติดอันดับถึงสองอันดับด้วยกัน
            เขาตบทำความเร็วได้ถึง 456.3 km/h ตามมาด้วย 449 km/h เลยทีเดียวครับ
          </p>

          <p>
            และอันดับ 1 ก็ไม่ใช่ใคร อิซูดินจากมาเลเซียที่ทำความเร็วไปได้ถึง 460 km/h
            ส่วนของพีถือว่าน่าภูมิใจมาก เพราะเป็นตัวเลขที่ทำให้เห็นชัดว่าแรงตบของนักกีฬาไทย
            อยู่ในระดับที่น่าจับตาจริง ๆ
          </p>

          <p>
            ประเด็นที่ผมชอบคือเรื่องไม้สายสปีด หลายคนมักคิดว่าไม้สปีดต้องเด่นแค่เรื่องความไว
            รับง่าย เปลี่ยนหน้าไม้เร็ว แต่ตบอาจไม่หนักเท่าไม้สายพาวเวอร์
            เคสนี้เป็นตัวอย่างที่ดีมากว่า ถ้าใช้เป็น จังหวะถึง และออกแรงถูก
            ไม้สายสปีดก็ตบได้หนักเหมือนกันครับ
          </p>

          <p>ไม้สายสปีด ถ้าใช้เป็น ยังไงก็ตบได้หนักครับ</p>
        </div>
      </article>
    </main>
  );
}
