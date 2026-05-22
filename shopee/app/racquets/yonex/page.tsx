type YonexRacquet = {
  name: string;
  series: "Attack" | "Speed" | "All-Round";
  image: string;
  yonexUrl: string;
  thaiPrice: string;
  shopeeUrl: string;
};

const yonexLogo =
  "https://www.yonex.com/static/version1778512191/frontend/Yonex/base/en_US/images/Yonex_Logo.svg";

const yonexRacquets: YonexRacquet[] = [
  {
    name: "ASTROX 100VA ZZ",
    series: "Attack",
    image:
      "https://www.yonex.com/media/catalog/product/a/l/all_ax100zva_452-1.png?quality=80&bg-color=248,248,248,0.75&fit=bounds&height=300&width=240&canvas=240:300",
    yonexUrl: "https://www.yonex.com/badminton/racquets/astrox-100va-zz",
    thaiPrice: "รออัปเดตราคาไทย",
    shopeeUrl: "#",
  },
  {
    name: "ASTROX 99 PRO",
    series: "Attack",
    image:
      "https://www.yonex.com/media/catalog/product/a/l/all_3ax99-p_530-1.png?quality=80&bg-color=248,248,248,0.75&fit=bounds&height=300&width=240&canvas=240:300",
    yonexUrl: "https://www.yonex.com/badminton/racquets/astrox-99-pro-3ax99-p",
    thaiPrice: "รออัปเดตราคาไทย",
    shopeeUrl: "#",
  },
  {
    name: "ASTROX 88 D PRO",
    series: "Attack",
    image:
      "https://www.yonex.com/media/catalog/product/3/a/3ax88d-p_076-1_02.png?quality=80&bg-color=248,248,248,0.75&fit=bounds&height=300&width=240&canvas=240:300",
    yonexUrl: "https://www.yonex.com/badminton/racquets/3ax88d-p",
    thaiPrice: "รออัปเดตราคาไทย",
    shopeeUrl: "#",
  },
  {
    name: "ASTROX 88 S PRO",
    series: "Attack",
    image:
      "https://www.yonex.com/media/catalog/product/3/a/3ax88s-p_417-1_02.png?quality=80&bg-color=248,248,248,0.75&fit=bounds&height=300&width=240&canvas=240:300",
    yonexUrl: "https://www.yonex.com/badminton/racquets/3ax88s-p",
    thaiPrice: "รออัปเดตราคาไทย",
    shopeeUrl: "#",
  },
  {
    name: "ASTROX 77 PRO",
    series: "Attack",
    image:
      "https://www.yonex.com/media/catalog/product/a/x/ax77-p_.png?quality=80&bg-color=248,248,248,0.75&fit=bounds&height=300&width=240&canvas=240:300",
    yonexUrl: "https://www.yonex.com/badminton/racquets/astrox-77-pro",
    thaiPrice: "รออัปเดตราคาไทย",
    shopeeUrl: "#",
  },
  {
    name: "NANOFLARE 1000 Z",
    series: "Speed",
    image:
      "https://www.yonex.com/media/catalog/product/n/a/nanoflare_1000_z.png?quality=80&bg-color=248,248,248,0.75&fit=bounds&height=300&width=240&canvas=240:300",
    yonexUrl: "https://www.yonex.com/badminton/racquets/nf-1000z",
    thaiPrice: "รออัปเดตราคาไทย",
    shopeeUrl: "#",
  },
  {
    name: "NANOFLARE 800 PRO",
    series: "Speed",
    image:
      "https://www.yonex.com/media/catalog/product/a/l/all_nf-800p_269-1.png?quality=80&bg-color=248,248,248,0.75&fit=bounds&height=300&width=240&canvas=240:300",
    yonexUrl: "https://www.yonex.com/badminton/racquets/nf-800pr",
    thaiPrice: "รออัปเดตราคาไทย",
    shopeeUrl: "#",
  },
  {
    name: "NANOFLARE 700 PRO",
    series: "Speed",
    image:
      "https://www.yonex.com/media/catalog/product/a/l/all_nf-700p_339-1_2.png?quality=80&bg-color=248,248,248,0.75&fit=bounds&height=300&width=240&canvas=240:300",
    yonexUrl: "https://www.yonex.com/badminton/racquets/nanoflare-700-pro",
    thaiPrice: "รออัปเดตราคาไทย",
    shopeeUrl: "#",
  },
  {
    name: "ARCSABER 11 PRO",
    series: "All-Round",
    image:
      "https://www.yonex.com/media/catalog/product/a/r/arc11-p.png?quality=80&bg-color=248,248,248,0.75&fit=bounds&height=300&width=240&canvas=240:300",
    yonexUrl: "https://www.yonex.com/badminton/racquets/arc11-p",
    thaiPrice: "รออัปเดตราคาไทย",
    shopeeUrl: "#",
  },
  {
    name: "ARCSABER 7 PRO",
    series: "All-Round",
    image:
      "https://www.yonex.com/media/catalog/product/a/r/arc7-p.png?quality=80&bg-color=248,248,248,0.75&fit=bounds&height=300&width=240&canvas=240:300",
    yonexUrl: "https://www.yonex.com/badminton/racquets/arc7-p",
    thaiPrice: "รออัปเดตราคาไทย",
    shopeeUrl: "#",
  },
  {
    name: "DUORA Z-STRIKE",
    series: "All-Round",
    image:
      "https://www.yonex.com/media/catalog/product/d/u/duo-zs.png?quality=80&bg-color=248,248,248,0.75&fit=bounds&height=300&width=240&canvas=240:300",
    yonexUrl: "https://www.yonex.com/badminton/racquets/duo-zs",
    thaiPrice: "รออัปเดตราคาไทย",
    shopeeUrl: "#",
  },
];

const seriesOrder: YonexRacquet["series"][] = ["Attack", "Speed", "All-Round"];

const seriesCopy: Record<YonexRacquet["series"], string> = {
  Attack: "ตระกูลเน้นพลังบุก แรงกด และเกมท้ายคอร์ต",
  Speed: "ตระกูลเน้นหน้าไม้ไว เกมรับเร็ว และการสวนกลับต่อเนื่อง",
  "All-Round": "ตระกูลบาลานซ์ เน้นคุมลูกและเล่นได้หลายสถานการณ์",
};

export default function YonexRacquetsPage() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="/" aria-label="Thai Badminton Equipment News">
          <span className="brand-mark" aria-hidden="true">
            <img src="/images/reviews/logo-file.jpg" alt="" />
          </span>
          <span>Thai Badminton Equipment News</span>
        </a>
        <nav aria-label="เมนูหลัก">
          <div className="nav-dropdown">
            <a href="/racquets/yonex">ไม้แบดมินตัน</a>
            <div className="brand-menu">
              <a className="brand-menu-card" href="/racquets/yonex">
                <img src={yonexLogo} alt="Yonex" />
                <span>ไม้แบดมินตัน Yonex</span>
              </a>
            </div>
          </div>
          <a href="/">หน้าแรก</a>
          <a href="/beginner-guides">คู่มือมือใหม่</a>
        </nav>
      </header>

      <section className="racquet-brand-hero">
        <div>
          <p className="eyebrow">Racquet database</p>
          <h1>ไม้แบดมินตัน Yonex รุ่นโปรและรุ่น Z</h1>
          <p>
            รวมรุ่นท็อปจากหน้า Yonex Badminton Racquets โดยคัดรุ่นที่มีคำว่า PRO, Z หรือ ZZ
            แล้วจัดกลุ่มตามคาแรกเตอร์ Attack, Speed และ All-Round เพื่อใช้เป็นฐานข้อมูลราคาไทยและลิงก์ Shopee ต่อไป
          </p>
        </div>
        <div className="racquet-brand-mark">
          <img src={yonexLogo} alt="Yonex" />
          <span>ข้อมูลรุ่นและรูปภาพอ้างอิงจาก Yonex.com</span>
        </div>
      </section>

      <section className="racquet-index">
        {seriesOrder.map((series) => {
          const racquets = yonexRacquets.filter((item) => item.series === series);

          return (
            <div className="racquet-series" key={series}>
              <div className="racquet-series-heading">
                <span>{series}</span>
                <h2>{series === "All-Round" ? "All-Round" : series}</h2>
                <p>{seriesCopy[series]}</p>
              </div>
              <div className="racquet-grid">
                {racquets.map((racquet) => (
                  <article className="racquet-card" key={racquet.name}>
                    <a className="racquet-image" href={racquet.yonexUrl} target="_blank" rel="noreferrer">
                      <img src={racquet.image} alt={racquet.name} />
                    </a>
                    <div className="racquet-card-body">
                      <span>{racquet.series}</span>
                      <h3>{racquet.name}</h3>
                      <dl>
                        <div>
                          <dt>ราคาไทย</dt>
                          <dd>{racquet.thaiPrice}</dd>
                        </div>
                      </dl>
                      <div className="racquet-actions">
                        <a className="shopee-cta pending" href={racquet.shopeeUrl} aria-disabled="true">
                          ซื้อใน Shopee
                        </a>
                        <a className="source-link" href={racquet.yonexUrl} target="_blank" rel="noreferrer">
                          ดูข้อมูลจาก Yonex
                        </a>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          );
        })}
      </section>
    </main>
  );
}
