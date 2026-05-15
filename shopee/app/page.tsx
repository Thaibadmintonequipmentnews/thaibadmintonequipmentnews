const categories = [
  {
    title: "ไม้แบด",
    desc: "ดูน้ำหนัก ก้าน สมดุลหัว และสไตล์การเล่นก่อนซื้อ",
    image:
      "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?auto=format&fit=crop&w=900&q=80",
    href: "https://shopee.co.th/search?keyword=%E0%B9%84%E0%B8%A1%E0%B9%89%E0%B9%81%E0%B8%9A%E0%B8%94",
  },
  {
    title: "รองเท้าแบด",
    desc: "พื้นยึดเกาะดี ซัพพอร์ตข้อเท้า และรับแรงกระแทกได้จริง",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80",
    href: "https://shopee.co.th/search?keyword=%E0%B8%A3%E0%B8%AD%E0%B8%87%E0%B9%80%E0%B8%97%E0%B9%89%E0%B8%B2%E0%B9%81%E0%B8%9A%E0%B8%94",
  },
  {
    title: "ลูกแบด",
    desc: "เลือกลูกขนไก่หรือลูกพลาสติกตามสนาม งบ และความถี่ที่เล่น",
    image:
      "https://images.unsplash.com/photo-1613918431703-aa50889e3be1?auto=format&fit=crop&w=900&q=80",
    href: "https://shopee.co.th/search?keyword=%E0%B8%A5%E0%B8%B9%E0%B8%81%E0%B9%81%E0%B8%9A%E0%B8%94",
  },
  {
    title: "เอ็นและกริป",
    desc: "ปรับฟีลการตีได้ชัด ทั้งแรงตบ การคุมลูก และความสบายมือ",
    image:
      "https://images.unsplash.com/photo-1599474924187-334a4ae5bd3c?auto=format&fit=crop&w=900&q=80",
    href: "https://shopee.co.th/search?keyword=%E0%B9%80%E0%B8%AD%E0%B9%87%E0%B8%99%E0%B9%81%E0%B8%9A%E0%B8%94",
  },
];

const picks = [
  {
    name: "มือใหม่เล่นสัปดาห์ละครั้ง",
    racket: "ไม้ 4U ก้านกลาง สมดุลกลาง",
    shoe: "รองเท้าพื้นยางดิบ ซัพพอร์ตกลาง",
    budget: "1,500-3,500 บาท",
  },
  {
    name: "สายบุก ชอบตบหนัก",
    racket: "ไม้หัวหนัก ก้านกลางถึงแข็ง",
    shoe: "รองเท้านิ่ง หน้าเท้ากระชับ",
    budget: "3,000-7,000 บาท",
  },
  {
    name: "สายรับ เล่นเร็วหน้าเน็ต",
    racket: "ไม้หัวเบา 4U/5U ก้านกลาง",
    shoe: "รองเท้าเบา เปลี่ยนทิศไว",
    budget: "2,500-6,000 บาท",
  },
];

const articles = [
  {
    title: "รีวิว Victor AuraSpeed 99 จากผู้ใช้จริง",
    desc: "ไม้สายบุกเฟรมตัดอากาศ ก้านแข็ง ตอบสนองไว และเป็นมิตรกับผู้เล่นกว่า ARS-HS+",
    href: "/reviews/victor-auraspeed-99",
  },
  {
    title: "ไม้แบด 4U กับ 5U ต่างกันยังไง เลือกแบบไหนดีสำหรับมือใหม่",
    desc: "โครงบทความ: น้ำหนักไม้, ความเร็วหน้าไม้, แรงตบ, การคุมลูก และรุ่นที่เหมาะกับผู้เริ่มต้น",
    href: "#articles",
  },
  {
    title: "รองเท้าแบดมินตันจำเป็นไหม หรือใช้รองเท้าวิ่งแทนได้",
    desc: "โครงบทความ: การยึดเกาะ, การซัพพอร์ตข้อเท้า, พื้นสนาม และความเสี่ยงเวลาเปลี่ยนทิศทางเร็ว",
    href: "#articles",
  },
  {
    title: "เอ็นแบดตึงกี่ปอนด์ดี สำหรับคนเริ่มเล่นถึงเล่นจริงจัง",
    desc: "โครงบทความ: ฟีลหน้าไม้, ความเด้ง, ความคุมลูก และแรงที่ต้องใช้ตามระดับฝีมือ",
    href: "#articles",
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Thai Badminton Equipment News">
          <span className="brand-mark">TH</span>
          <span>Thai Badminton Equipment News</span>
        </a>
        <nav aria-label="เมนูหลัก">
          <a href="#categories">หมวดสินค้า</a>
          <a href="#guide">เลือกยังไง</a>
          <a href="#youtube">YouTube</a>
          <a href="#facebook">Facebook</a>
          <a href="#articles">บทความ</a>
          <a href="#disclosure">Affiliate</a>
        </nav>
      </header>

      <section id="top" className="hero">
        <div className="hero-copy">
          <p className="eyebrow">คู่มืออุปกรณ์แบดมินตันสำหรับคนไทย</p>
          <h1>Thai Badminton Equipment News</h1>
          <p className="lead">
            อัปเดตอุปกรณ์แบดมินตันรุ่นใหม่ รีวิวผ่านบทความและวิดีโอ
            พร้อมลิงก์ Shopee Affiliate เป็นทางเลือกให้คนอ่านเช็กราคาและตัดสินใจก่อนซื้อ
          </p>
          <div className="hero-actions">
            <a className="primary-button" href="#categories">
              เริ่มดูอุปกรณ์
            </a>
            <a className="secondary-button" href="#guide">
              ดูวิธีเลือก
            </a>
          </div>
        </div>
        <div className="hero-media" aria-label="ภาพสนามและอุปกรณ์แบดมินตัน">
          <img
            src="https://images.unsplash.com/photo-1613918431703-aa50889e3be1?auto=format&fit=crop&w=1200&q=82"
            alt="ลูกแบดบนสนามแบดมินตัน"
          />
        </div>
      </section>

      <section id="categories" className="section">
        <div className="section-heading">
          <p className="eyebrow">Shop by gear</p>
          <h2>หมวดสินค้าหลัก</h2>
          <p>
            เริ่มจากหมวดที่คนค้นหาบ่อยที่สุด แล้วค่อยขยายเป็นรีวิวรุ่นละเอียดในภายหลัง
          </p>
        </div>
        <div className="category-grid">
          {categories.map((item) => (
            <article className="category-card" key={item.title}>
              <img src={item.image} alt={item.title} />
              <div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <a href={item.href} target="_blank" rel="noreferrer">
                  ดูราคาที่ Shopee
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="guide" className="guide-band">
        <div className="section-heading">
          <p className="eyebrow">Buyer guide</p>
          <h2>เลือกตามสไตล์การเล่น</h2>
          <p>
            ตารางนี้คือแกนหลักของเว็บ ต่อไปสามารถแตกเป็นหน้าบทความและหน้าสินค้าแนะนำแต่ละกลุ่มได้
          </p>
        </div>
        <div className="comparison">
          <div className="comparison-row comparison-head">
            <span>ผู้เล่น</span>
            <span>ไม้ที่เหมาะ</span>
            <span>รองเท้าที่เหมาะ</span>
            <span>งบเริ่มต้น</span>
          </div>
          {picks.map((pick) => (
            <div className="comparison-row" key={pick.name}>
              <span>{pick.name}</span>
              <span>{pick.racket}</span>
              <span>{pick.shoe}</span>
              <span>{pick.budget}</span>
            </div>
          ))}
        </div>
      </section>

      <section id="youtube" className="youtube-band">
        <div className="youtube-copy">
          <p className="eyebrow">Video reviews</p>
          <h2>ดูรีวิวประกอบจากช่อง Plearn Plearn</h2>
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
            <a className="secondary-button" href="#articles">
              ดูไอเดียบทความรีวิว
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

      <section id="articles" className="section split">
        <div>
          <p className="eyebrow">SEO starter</p>
          <h2>บทความแรกที่ควรเขียน</h2>
          <p>
            บทความเหล่านี้เหมาะกับคนค้นหาก่อนซื้อ และสามารถแทรกลิงก์ Shopee Affiliate ได้อย่างเป็นธรรมชาติ
          </p>
        </div>
        <div className="article-list">
          {articles.map((article, index) => (
            <article key={article.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h3>
                  <a href={article.href}>{article.title}</a>
                </h3>
                <p>{article.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="disclosure" className="disclosure">
        <p className="eyebrow">Affiliate disclosure</p>
        <h2>หมายเหตุเรื่องลิงก์ Shopee</h2>
        <p>
          บางลิงก์ในเว็บไซต์นี้อาจเป็นลิงก์แอฟิลิเอท หากผู้อ่านกดซื้อสินค้า
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
