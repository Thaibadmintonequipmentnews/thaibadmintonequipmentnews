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
  "ไม้แบด 4U กับ 5U ต่างกันยังไง เลือกแบบไหนดีสำหรับมือใหม่",
  "รองเท้าแบดมินตันจำเป็นไหม หรือใช้รองเท้าวิ่งแทนได้",
  "เอ็นแบดตึงกี่ปอนด์ดี สำหรับคนเริ่มเล่นถึงเล่นจริงจัง",
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Badminton Gear Thai">
          <span className="brand-mark">BG</span>
          <span>Badminton Gear Thai</span>
        </a>
        <nav aria-label="เมนูหลัก">
          <a href="#categories">หมวดสินค้า</a>
          <a href="#guide">เลือกยังไง</a>
          <a href="#articles">บทความ</a>
          <a href="#disclosure">Affiliate</a>
        </nav>
      </header>

      <section id="top" className="hero">
        <div className="hero-copy">
          <p className="eyebrow">คู่มืออุปกรณ์แบดมินตันสำหรับคนไทย</p>
          <h1>เลือกไม้แบด รองเท้า และอุปกรณ์ให้เข้ากับเกมของคุณ</h1>
          <p className="lead">
            เว็บนี้ออกแบบมาเพื่อรีวิว เปรียบเทียบ และคัดอุปกรณ์แบดมินตันแบบอ่านง่าย
            พร้อมปุ่มดูราคาที่ Shopee สำหรับต่อยอดเป็นเว็บ Affiliate ระยะยาว
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
            <article key={article}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{article}</h3>
              <p>โครงบทความ: ปัญหาของผู้อ่าน, วิธีเลือก, รุ่นที่แนะนำ, ตารางเปรียบเทียบ, ปุ่มดูราคา</p>
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
        <span>Badminton Gear Thai</span>
        <span>สร้างเพื่อรีวิวและเปรียบเทียบอุปกรณ์แบดมินตัน</span>
      </footer>
    </main>
  );
}
