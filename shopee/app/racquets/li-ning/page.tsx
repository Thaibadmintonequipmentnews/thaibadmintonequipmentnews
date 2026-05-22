type LiningRacquet = {
  name: string;
  series: "Attack" | "Speed" | "Control";
  family: string;
  image: string;
  sourceUrl: string;
  thaiPrice: string;
  shopeeUrl: string;
};

const yonexLogo =
  "https://www.yonex.com/static/version1778512191/frontend/Yonex/base/en_US/images/Yonex_Logo.svg";

const liNingRacquets: LiningRacquet[] = [
  {
    name: "Axforce 100",
    series: "Attack",
    family: "Axforce",
    image:
      "https://in.lining.studio/cdn/shop/files/1_379e72d6ad_7d5cd489-e18b-48c5-966b-d7c29b941212.jpg?v=1749897618&width=800",
    sourceUrl: "https://in.lining.studio/products/axforce-100-4u",
    thaiPrice: "รออัปเดตราคาไทย",
    shopeeUrl: "#",
  },
  {
    name: "Axforce 100 II",
    series: "Attack",
    family: "Axforce",
    image:
      "https://in.lining.studio/cdn/shop/files/1_379e72d6ad_7d5cd489-e18b-48c5-966b-d7c29b941212.jpg?v=1749897618&width=800",
    sourceUrl:
      "https://in.lining.studio/collections/badminton-rackets?sort_by=created-descending&filter.v.price.gte=&filter.v.price.lte=",
    thaiPrice: "รออัปเดตราคาไทย",
    shopeeUrl: "#",
  },
  {
    name: "Axforce 90 New",
    series: "Attack",
    family: "Axforce",
    image:
      "https://in.lining.studio/cdn/shop/files/MAIN_AX_FORCE_90_137201fc57_d975f9c3-ae95-40f0-ab3b-4dfccfe7e5cd.jpg?v=1749900212&width=800",
    sourceUrl: "https://in.lining.studio/products/axforce-90-4u",
    thaiPrice: "รออัปเดตราคาไทย",
    shopeeUrl: "#",
  },
  {
    name: "Axforce 80",
    series: "Attack",
    family: "Axforce",
    image:
      "https://in.lining.studio/cdn/shop/files/1_d982642d45_ab383919-a132-4674-b808-d95e6692e2fb.jpg?v=1749895182&width=800",
    sourceUrl: "https://in.lining.studio/products/axforce-80-4u-84-grams",
    thaiPrice: "รออัปเดตราคาไทย",
    shopeeUrl: "#",
  },
  {
    name: "Axforce 80 Light",
    series: "Attack",
    family: "Axforce",
    image:
      "https://in.lining.studio/cdn/shop/files/Template-01_7a58dce9-b37f-4bf3-877a-4f2420034689.jpg?v=1753186371&width=800",
    sourceUrl: "https://in.lining.studio/products/axforce-80-5u-80-grams",
    thaiPrice: "รออัปเดตราคาไทย",
    shopeeUrl: "#",
  },
  {
    name: "BladeX 900 New",
    series: "Speed",
    family: "BladeX",
    image:
      "https://in.lining.studio/cdn/shop/files/1_d213922d68.jpg?v=1749899726&width=650",
    sourceUrl: "https://in.lining.studio/products/bladex-900-4u",
    thaiPrice: "รออัปเดตราคาไทย",
    shopeeUrl: "#",
  },
  {
    name: "BladeX 800 Speed",
    series: "Speed",
    family: "BladeX",
    image:
      "https://in.lining.studio/cdn/shop/files/1_a0e0bdb2-906e-4256-a721-fdcbf7dbc3f7.jpg?v=1771327763&width=800",
    sourceUrl: "https://in.lining.studio/products/bladex-800-speed-5u",
    thaiPrice: "รออัปเดตราคาไทย",
    shopeeUrl: "#",
  },
  {
    name: "BladeX 800 Power",
    series: "Speed",
    family: "BladeX",
    image:
      "https://in.lining.studio/cdn/shop/files/1_01f46489-e2e2-4b95-beec-12c7e5965bac.jpg?v=1771327688&width=800",
    sourceUrl: "https://in.lining.studio/products/bladex-800-power-5u",
    thaiPrice: "รออัปเดตราคาไทย",
    shopeeUrl: "#",
  },
  {
    name: "BladeX 900 Max Sun",
    series: "Speed",
    family: "BladeX",
    image:
      "https://in.lining.studio/cdn/shop/files/01_5910827ac0_5c6b82ab-f375-40b6-a0f2-d1a9d2d78e13.jpg?v=1749897512&width=650",
    sourceUrl: "https://in.lining.studio/products/bladex-900-sun-max-set-4u/",
    thaiPrice: "รออัปเดตราคาไทย",
    shopeeUrl: "#",
  },
  {
    name: "BladeX 900 Max Moon",
    series: "Speed",
    family: "BladeX",
    image:
      "https://in.lining.studio/cdn/shop/files/01_0dbe3f4639_93d0210f-8637-4e34-a11c-5f3b35d15732.jpg?v=1749897669&width=650",
    sourceUrl: "https://in.lining.studio/products/bladex-900-moon-max-set-4u",
    thaiPrice: "รออัปเดตราคาไทย",
    shopeeUrl: "#",
  },
  {
    name: "Halbertec 9000 Power",
    series: "Control",
    family: "Halbertec",
    image:
      "https://in.lining.studio/cdn/shop/files/1_b727aad8-cdb5-4644-b39c-b9a4d11d0e68.jpg?v=1770023521&width=800",
    sourceUrl: "https://in.lining.studio/products/halbertec-9000-power-3u",
    thaiPrice: "รออัปเดตราคาไทย",
    shopeeUrl: "#",
  },
  {
    name: "Halbertec 9000",
    series: "Control",
    family: "Halbertec",
    image:
      "https://in.lining.studio/cdn/shop/files/Template_01_bb2b214ca4_23c26810-4911-447a-bee5-755fae29e1f7.jpg?v=1749898946&width=650",
    sourceUrl: "https://in.lining.studio/products/halbertec-9000-4u/",
    thaiPrice: "รออัปเดตราคาไทย",
    shopeeUrl: "#",
  },
  {
    name: "Halbertec 8000",
    series: "Control",
    family: "Halbertec",
    image:
      "https://in.lining.studio/cdn/shop/files/01_9b43c7875d_fd32f730-a7ce-40e1-9ae1-a9344a9df507.jpg?v=1749896645&width=650",
    sourceUrl: "https://in.lining.studio/products/halbertec-8000-4u",
    thaiPrice: "รออัปเดตราคาไทย",
    shopeeUrl: "#",
  },
  {
    name: "Halbertec 7000",
    series: "Control",
    family: "Halbertec",
    image:
      "https://in.lining.studio/cdn/shop/files/1_bb93bbb7a5_2b5ac5fb-0427-44e9-9589-7a41c433b9e8.jpg?v=1749898904&width=800",
    sourceUrl: "https://in.lining.studio/products/halbertec-7000-4u-g6",
    thaiPrice: "รออัปเดตราคาไทย",
    shopeeUrl: "#",
  },
  {
    name: "Halbertec 6000",
    series: "Control",
    family: "Halbertec",
    image: "https://in.lining.studio/cdn/shop/files/1_f823c0615f.jpg?v=1749899314&width=650",
    sourceUrl: "https://in.lining.studio/products/halbertec-6000-4u/",
    thaiPrice: "รออัปเดตราคาไทย",
    shopeeUrl: "#",
  },
];

const seriesOrder: LiningRacquet["series"][] = ["Attack", "Speed", "Control"];

const seriesCopy: Record<LiningRacquet["series"], string> = {
  Attack: "ตระกูล Axforce สำหรับเกมบุก เน้นพลังส่ง ความหนัก และจังหวะกดจากท้ายคอร์ต",
  Speed: "ตระกูล BladeX สำหรับเกมสปีด เน้นหน้าไม้ไว การรับสวน และการเปลี่ยนจังหวะเร็ว",
  Control: "ตระกูล Halbertec สำหรับสายคุม เน้นความนิ่ง ความแม่น และการครองจังหวะเกม",
};

const seriesMeta: Record<LiningRacquet["series"], { label: string; title: string }> = {
  Attack: {
    label: "ATTACK / ไม้สายบุก",
    title: "Axforce",
  },
  Speed: {
    label: "SPEED / ไม้สายความเร็ว",
    title: "BladeX",
  },
  Control: {
    label: "CONTROL / ไม้สายคุม",
    title: "Halbertec",
  },
};

export default function LiNingRacquetsPage() {
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
            <a href="/racquets/li-ning">ไม้แบดมินตัน</a>
            <div className="brand-menu">
              <a className="brand-menu-card" href="/racquets/yonex">
                <img src={yonexLogo} alt="Yonex" />
                <span>ไม้แบดมินตัน Yonex</span>
              </a>
              <a className="brand-menu-card" href="/racquets/li-ning">
                <strong className="brand-menu-wordmark">LI-NING</strong>
                <span>ไม้แบดมินตัน Li-Ning</span>
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
          <h1>ไม้แบดมินตัน Li-Ning รุ่นนิยมในไทย</h1>
          <p>
            รวมรุ่นหลักจากตระกูล Axforce, BladeX และ Halbertec เพื่อใช้เป็นฐานข้อมูลราคาไทยและลิงก์ Shopee ต่อไป
          </p>
        </div>
        <div className="racquet-brand-mark">
          <div className="brand-history-media">
            <img src="/images/reviews/liningfounder.avif" alt="Li Ning ผู้ก่อตั้งแบรนด์ Li-Ning" />
          </div>
          <div className="brand-history-copy">
            <strong className="brand-history-wordmark">LI-NING</strong>
            <p>
              ก่อตั้งแบรนด์ในปี 1990 แต่เริ่มเข้ามาสร้างจุดเปลี่ยนสำคัญในวงการแบดมินตันอย่างแท้จริงในปี 2009
              ด้วยการทุ่มทุนก้าวขึ้นมาเป็นผู้สนับสนุนหลักอย่างเป็นทางการให้กับทีมชาติจีน ในยุคโอลิมปิกที่จัดขึ้นที่ปักกิ่ง
            </p>
            <p>
              ตั้งแต่นั้นเป็นต้นมา Li-Ning ได้พัฒนานวัตกรรมอุปกรณ์และไม้แบดมินตันอย่างก้าวกระโดด
              พร้อมขยายการสนับสนุนไปสู่นักกีฬาระดับท็อปทั่วโลก จนก้าวขึ้นมาเป็น 1 ใน 3
              แบรนด์มหาอำนาจของวงการแบดมินตันในปัจจุบันครับ
            </p>
          </div>
        </div>
      </section>

      <section className="racquet-index">
        {seriesOrder.map((series) => {
          const racquets = liNingRacquets.filter((item) => item.series === series);

          return (
            <div className="racquet-series" key={series}>
              <div className="racquet-series-heading">
                <span>{seriesMeta[series].label}</span>
                <div className="series-logo-frame series-wordmark">
                  <span>{seriesMeta[series].title}</span>
                </div>
                <p>{seriesCopy[series]}</p>
              </div>
              <div className="racquet-grid">
                {racquets.map((racquet) => (
                  <article className="racquet-card" key={racquet.name}>
                    <a className="racquet-image" href={racquet.sourceUrl} target="_blank" rel="noreferrer">
                      <img src={racquet.image} alt={racquet.name} />
                    </a>
                    <div className="racquet-card-body">
                      <span>{racquet.family}</span>
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
                        <a className="source-link" href={racquet.sourceUrl} target="_blank" rel="noreferrer">
                          ดูข้อมูลจาก Li-Ning
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
