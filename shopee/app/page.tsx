const articles = [
  {
    title: "Mizuno Acrospeed 001 SEA Limited ต่างจาก Acrospeed 0 อย่างไร",
    heroTitle: "Mizuno Acrospeed 001 SEA Limited",
    desc: "เจาะที่มาไม้ Made in Japan สำหรับ Southeast Asia คาแรกเตอร์สปีดที่หัวหนัก และกลุ่มผู้เล่นที่เหมาะ",
    href: "/reviews/mizuno-acrospeed-001-sea-limited",
    image: "/images/reviews/headline.png",
    label: "Equipment news",
  },
  {
    title: "18 ปี เมย์ รัชนก อินทนนท์ กับเส้นทาง Thailand Open",
    desc: "บทความนักกีฬา: เส้นทางยืนระยะของเมย์ในรายการไทยแลนด์ โอเพ่น ตั้งแต่ดาวรุ่ง แชมป์เก่า จนถึงรุ่นพี่ในเวทีใหญ่",
    href: "/athletes/ratchanok-thailand-open-18-years",
    image: "/images/reviews/mayy.jpg",
    label: "Athlete story",
  },
  {
    title: "รีวิว Victor AuraSpeed 99 จากผู้ใช้จริง",
    desc: "ไม้สายบุกเฟรมตัดอากาศ ก้านแข็ง ตอบสนองไว และเป็นมิตรกับผู้เล่นกว่า ARS-HS+",
    href: "/reviews/victor-auraspeed-99",
    image: "/images/reviews/ARS-997_1000x.webp",
    label: "Review",
  },
  {
    title: "คู่มืออุปกรณ์แบดมินตันสำหรับมือใหม่ 15 บทความ",
    desc: "เริ่มตั้งแต่ไม้แรก น้ำหนัก 3U/4U เอ็น กริป รองเท้า ถุงเท้า ซัพพอร์ต กระเป๋า และลูกแบด",
    href: "/beginner-guides",
    image: "/images/reviews/badminton101.jpg",
    label: "Beginner guide",
  },
];

const youtubeVideos = [
  {
    id: "jlYBieluI3Q",
    title: "วิดีโอล่าสุดจาก plearn",
  },
  {
    id: "ykKNA5sysas",
    title: "พรีวิวอุปกรณ์จาก plearn",
  },
  {
    id: "NnWP1A3qYfY",
    title: "อัปเดตแบดมินตันจาก plearn",
  },
  {
    id: "zGP1AZMR98g",
    title: "รีวิวและพรีวิวจาก plearn",
  },
  {
    id: "i9uMGjElWgY",
    title: "คลิปใหม่จากช่อง plearn",
  },
];

export default function Home() {
  const [headline, ...secondaryArticles] = articles;

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Thai Badminton Equipment News">
          <span className="brand-mark" aria-hidden="true">
            <img src="/images/reviews/logo-file.jpg" alt="" />
          </span>
          <span>Thai Badminton Equipment News</span>
        </a>
        <nav aria-label="เมนูหลัก">
          <a href="#top">Headline</a>
          <a href="#articles">บทความ</a>
          <a href="#youtube">YouTube</a>
          <a href="#facebook">Facebook</a>
          <a href="#disclosure">หมายเหตุ</a>
        </nav>
      </header>

      <section id="top" className="sport-home">
        <div className="promo-strip">
          <span>Thai Badminton Equipment News</span>
          <span>Reviews / Video / Buyer Guides</span>
          <span>Updated for Thai players</span>
        </div>

        <a className="sport-hero" href={headline.href}>
          <img src={headline.image} alt={headline.title} />
          <div className="sport-hero-copy">
            <span>{headline.label}</span>
            <h1>{headline.heroTitle ?? headline.title}</h1>
            <p>{headline.desc}</p>
            <strong>อ่านบทความ</strong>
          </div>
        </a>

        <section id="articles" className="hot-section" aria-label="บทความแนะนำ">
          <div className="hot-heading">
            <h2>WHAT&apos;S HOT</h2>
            <a href="/beginner-guides">ดูคู่มือทั้งหมด</a>
          </div>
          <div className="hot-grid">
            {secondaryArticles.slice(0, 3).map((article) => (
              <a className="hot-card" href={article.href} key={article.title}>
                <img src={article.image} alt={article.title} />
                <div>
                  <span>{article.label}</span>
                  <h3>{article.title}</h3>
                  <p>{article.desc}</p>
                </div>
              </a>
            ))}
          </div>
        </section>

        <div className="legacy-headline" hidden>
          <a className="headline-card" href={headline.href}>
            <img src={headline.image} alt={headline.title} />
            <div>
              <span>{headline.label}</span>
              <h2>{headline.title}</h2>
              <p>{headline.desc}</p>
            </div>
          </a>
          <div className="secondary-news-grid">
            {secondaryArticles.slice(0, 3).map((article) => (
              <a className="secondary-news-card" href={article.href} key={article.title}>
                <img src={article.image} alt={article.title} />
                <div>
                  <span>{article.label}</span>
                  <h3>{article.title}</h3>
                  <p>{article.desc}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="youtube" className="youtube-band">
        <div className="youtube-copy">
          <div className="plearn-heading">
            <img src="/images/reviews/plearnlogo2.png" alt="plearn" />
            <div>
              <p className="eyebrow">Video reviews</p>
              <h2>plearn</h2>
            </div>
          </div>
          <p>
            นอกจากบทความบนเว็บ เรายังสามารถต่อยอดรีวิวอุปกรณ์แบดมินตันเป็นวิดีโอได้
            เหมาะกับการโชว์ฟีลจับไม้ เสียงหน้าไม้ การลองรองเท้า และเปรียบเทียบอุปกรณ์จริงก่อนกดซื้อ
          </p>
          <div className="youtube-actions">
            <a
              className="primary-button"
              href="https://www.youtube.com/@plearnplearn"
              target="_blank"
              rel="noreferrer"
            >
              ไปที่ช่อง YouTube
            </a>
            <a className="secondary-button" href="#top">
              อ่าน Headline
            </a>
          </div>
        </div>
        <div className="review-panel">
          <span>Review workflow</span>
          <h3>บทความ + คลิป + ลิงก์ Shopee</h3>
          <p>
            สูตรหน้ารีวิวที่ควรใช้: สรุปเหมาะกับใคร, จุดเด่น, ข้อควรรู้,
            คลิปจาก YouTube, ตารางสเปก, แล้วปิดด้วยปุ่มดูราคาที่ Shopee
          </p>
        </div>
        <div className="video-rail" aria-label="วิดีโอล่าสุดจากช่อง plearn">
          {youtubeVideos.map((video) => (
            <a
              className="video-card"
              href={`https://www.youtube.com/watch?v=${video.id}`}
              target="_blank"
              rel="noreferrer"
              key={video.id}
            >
              <span className="video-thumb">
                <img
                  src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                  alt={video.title}
                />
                <span className="play-badge">Play</span>
              </span>
              <strong>{video.title}</strong>
              <small>เปิดดูบน YouTube</small>
            </a>
          ))}
        </div>
      </section>

      <section id="facebook" className="facebook-section">
        <div className="facebook-copy">
          <p className="eyebrow">Latest updates</p>
          <h2>ติดตามอัปเดตจากเพจ Thai Badminton Equipment News</h2>
          <p>
            เพจ Facebook จะใช้เป็นพื้นที่อัปเดตข่าวสั้น รูปอุปกรณ์ใหม่ โพสต์รีวิวเร็ว
            และพาผู้อ่านกลับมาอ่านบทความฉบับเต็มบนเว็บไซต์
          </p>
          <a
            className="secondary-button"
            href="https://www.facebook.com/ThaiBadmintonNews/"
            target="_blank"
            rel="noreferrer"
          >
            เปิดเพจ Facebook
          </a>
        </div>
        <div className="facebook-frame" aria-label="Facebook Page Thai Badminton Equipment News">
          <iframe
            title="Thai Badminton Equipment News Facebook Page"
            src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FThaiBadmintonNews%2F&tabs=timeline&width=420&height=560&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true"
            width="420"
            height="560"
            style={{ border: "none", overflow: "hidden" }}
            scrolling="no"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          />
        </div>
      </section>

      <section id="disclosure" className="disclosure">
        <p className="eyebrow">Disclosure</p>
        <h2>หมายเหตุเรื่องลิงก์ Shopee</h2>
        <p>
          บางลิงก์ในเว็บไซต์นี้อาจเป็นลิงก์แนะนำสินค้า หากผู้อ่านกดซื้อสินค้า
          เจ้าของเว็บไซต์อาจได้รับค่าคอมมิชชัน โดยไม่มีค่าใช้จ่ายเพิ่มเติมกับผู้อ่าน
        </p>
      </section>

      <footer>
        <span>Thai Badminton Equipment News</span>
        <span>ข่าว รีวิว และอัปเดตอุปกรณ์แบดมินตัน</span>
      </footer>
    </main>
  );
}
