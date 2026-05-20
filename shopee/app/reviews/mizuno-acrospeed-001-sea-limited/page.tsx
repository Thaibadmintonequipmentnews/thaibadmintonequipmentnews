export const metadata = {
  title: "Mizuno Acrospeed 001 SEA Limited | Thai Badminton Equipment News",
  description:
    "เจาะลึก Mizuno Acrospeed 001 SEA Limited ไม้แบด Made in Japan สำหรับตลาด Southeast Asia ความต่างจาก Acrospeed 0 BDSS คาแรกเตอร์ และผู้เล่นที่เหมาะ",
};

const images = [
  { src: "/images/reviews/as1.jpg", alt: "Mizuno Acrospeed 001 SEA Limited ภาพที่ 1" },
  { src: "/images/reviews/as2.jpg", alt: "Mizuno Acrospeed 001 SEA Limited ภาพที่ 2" },
  { src: "/images/reviews/as3.jpg", alt: "Mizuno Acrospeed 001 SEA Limited ภาพที่ 3" },
];

const highlights = [
  ["รุ่น", "Mizuno Acrospeed 001 SEA Limited"],
  ["โซนจำหน่าย", "Southeast Asia"],
  ["จุดยืน", "ไม้สปีดที่ให้ฟีลหนักแน่นและสวนกลับรุนแรง"],
  ["ราคา", "ราคาป้าย 8,690 บาท / สมาชิก Mizuno 6,990 บาท"],
  ["เหมาะกับ", "ผู้เล่นระดับกลางค่อนข้างสูงถึงระดับสูง"],
  ["ช่องทาง", "Mizuno Flagship Store Thailand / Stadium One"],
];

export default function MizunoAcrospeed001Review() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="/" aria-label="Thai Badminton Equipment News">
          <span className="brand-mark" aria-hidden="true">
            <img src="/images/reviews/logo-file.jpg" alt="" />
          </span>
          <span>Thai Badminton Equipment News</span>
        </a>
        <nav aria-label="เมนูรีวิว">
          <a href="/">หน้าแรก</a>
          <a href="#story">ที่มา</a>
          <a href="#character">คาแรกเตอร์</a>
          <a href="#fit">เหมาะกับใคร</a>
        </nav>
      </header>

      <article className="review-article">
        <section
          className="review-hero mizuno-hero"
          style={{
            backgroundImage:
              "linear-gradient(90deg, rgba(6, 20, 15, 0.42), rgba(6, 20, 15, 0.18)), url('/images/reviews/headline.png')",
          }}
        >
          <div>
            <p className="eyebrow">Equipment news</p>
            <h1>Mizuno Acrospeed 001 SEA Limited ต่างจาก Acrospeed 0 อย่างไร</h1>
            <p className="lead">
              คำตอบสั้น ๆ คือแทบเหมือนกันในเชิงสเปกและคาแรกเตอร์ แต่ Acrospeed 001
              คือเวอร์ชันที่ Mizuno ตั้งใจทำเพื่อจำหน่ายในตลาด Southeast Asia โดยเฉพาะ
            </p>
            <div className="review-actions">
              <a
                className="primary-button"
                href="https://shopee.co.th/search?keyword=Mizuno%20Acrospeed%20001"
                target="_blank"
                rel="noreferrer"
              >
                ดูราคาที่ Shopee
              </a>
              <a
                className="secondary-button"
                href="https://www.youtube.com/@plearnplearn"
                target="_blank"
                rel="noreferrer"
              >
                ดูวิดีโอจาก plearn
              </a>
            </div>
          </div>
          <aside className="score-card">
            <span>Quick take</span>
            <strong>Speed + Power</strong>
            <p>
              ไม้สายสปีดที่ไม่ใช่หัวเบา แต่ให้ฟีลหน่วง หนักแน่น และสวนกลับได้แรง
              เหมาะกับคนตีเป็นจังหวะและคุมหน้าไม้ได้ดี
            </p>
          </aside>
        </section>

        <section className="review-image-section">
          <div className="image-gallery">
            {images.map((image) => (
              <img src={image.src} alt={image.alt} key={image.src} />
            ))}
          </div>
        </section>

        <section id="story" className="review-section">
          <h2>ที่มาของ Acrospeed 001 SEA Limited</h2>
          <p>
            หลังจาก Mizuno Made in Japan เข้าช็อป มีคำถามจากแฟนเพจว่า Acrospeed 0 กับ
            Acrospeed 001 ต่างกันอย่างไร คำตอบแบบสั้นคือคาแรกเตอร์หลักใกล้กันมาก
            แต่ Acrospeed 001 ถูกทำเป็นรุ่นเฉพาะสำหรับ Southeast Asia
          </p>
          <p>
            รายได้ของ Mizuno ในเอเชียตะวันออกเฉียงใต้ โดยเฉพาะเวียดนามและประเทศไทย
            เติบโตขึ้นชัดเจน ตลาดภูมิภาคนี้จึงกลายเป็นพื้นที่ที่แบรนด์ต้องโฟกัสจริงจัง
            และเป็นจุดเริ่มต้นของไม้แบดมินตันซีรีส์พิเศษอย่าง Acrospeed 001 SEA Limited
          </p>
          <p>
            เดิมทีไม้แบดมินตันสเปก Made in Japan ของ Mizuno มักวางขายเฉพาะในญี่ปุ่น
            ส่วนตลาดต่างประเทศจะใช้ไลน์สินค้าแบบ Asia Collections เช่น JPX, Fortius, Altius หรือ Prototype
            แต่ช่วงหลัง Mizuno เริ่มขยายไม้ Made in Japan ออกสู่ตลาดโลกมากขึ้น พร้อมจัดกลุ่มซีรีส์ใหม่ให้ชัดเจน:
            Acroforce สำหรับสายบุก, Acrospeed สำหรับสายสปีด และ Altius สำหรับสายออลราวด์
          </p>
        </section>

        <section className="review-section">
          <h2>ทำไมต้องเปลี่ยนจาก Acrospeed 0 BDSS เป็น 001</h2>
          <p>
            การใช้ชื่อ 001 เป็นความตั้งใจของ Mizuno เพื่อทดลองตลาดใหม่
            แบรนด์ต้องการประเมินว่าถ้านำไม้สเปก Made in Japan ออกมาขายนอกญี่ปุ่น
            โดยไม่ใช้ชื่อโมเดลเดียวกับตลาดญี่ปุ่น ผู้บริโภคจะตอบรับอย่างไร
          </p>
          <p>
            อีกเหตุผลคือการบริหารตลาดไม่ให้ทับซ้อนกัน การใช้รหัส 001 ช่วยแยกสินค้าที่จำหน่ายใน SEA
            ออกจากตลาดแบดมินตันในประเทศญี่ปุ่น โดยยังคงภาพลักษณ์ความพิเศษของไม้ Made in Japan ไว้
          </p>
          <p>
            ด้านสีสัน Mizuno เลือกออกแบบใหม่ทั้งหมด โทนสีน้ำเงินเข้มตัดสีทองให้ความรู้สึกพรีเมียม
            และยืนยันว่าเป็นรุ่นลิมิเต็ดที่ตั้งใจทำให้ผู้เล่นในภูมิภาคนี้
          </p>
        </section>

        <section className="review-section">
          <h2>ข้อมูลสำคัญ</h2>
          <div className="spec-grid">
            {highlights.map(([label, value]) => (
              <div key={label}>
                <span>{label}</span>
                <strong>{value}</strong>
              </div>
            ))}
          </div>
        </section>

        <section id="character" className="review-section">
          <h2>คาแรกเตอร์ของซีรีส์ Acrospeed</h2>
          <p>
            แนวคิดหลักของ Acrospeed คือการฉีกภาพจำของไม้สายสปีดแบบเดิม ๆ
            เพราะไม้รุ่นนี้ไม่ได้ให้ฟีลไวแบบหัวเบาหวิว แต่มีความหน่วงมือและน้ำหนักหัวที่ชัดเจน
            Mizuno วางตำแหน่งให้เป็นไม้สปีดเจเนอเรชันใหม่ที่ผสมความเร็วเข้ากับพลังบุก
          </p>
          <h3>1. รวดเร็วและหนักหน่วง</h3>
          <p>
            ปกติไม้สายความเร็วจะเด่นเรื่องความคล่องตัว หน้าไม้ไว และรับดี
            แต่หลายรุ่นจะเสียเรื่องพลังตบหรือการกดลูก Mizuno จึงสร้าง Acrospeed ให้มีสมดุลระหว่างความเร็วในการตี
            และพลังที่ส่งออกไป เหมาะกับเกมยุคใหม่ที่ต้องการทั้งสปีดและการทำแต้มที่เด็ดขาด
          </p>
          <h3>2. เหนียวแน่น ควบคุมง่าย และสวนกลับรุนแรง</h3>
          <p>
            จุดยืนของไม้คือ Counter-Attacking Speed ตั้งรับเหนียวแล้วเปลี่ยนเป็นเกมบุกทันที
            เทคโนโลยีหลักอย่าง Energy Frame, Maxi Zone Face, Torque Technology และ Aero Groove
            ช่วยให้เฟรมมีความยืดหยุ่นขณะกระทบลูก หน้าไม้อมลูกนานขึ้นเล็กน้อย คุมทิศทางได้ดี
            แต่ยังดีดลูกออกไปได้เร็วและคม
          </p>
        </section>

        <section id="fit" className="review-section two-column">
          <div>
            <h2>เหมาะกับใคร</h2>
            <ul>
              <li>ผู้เล่นระดับกลางค่อนข้างสูงถึงระดับสูง</li>
              <li>คนที่มีเบสิกหน้าไม้แม่น และชอบตีจังหวะสั้นด้วยข้อมือ</li>
              <li>ผู้เล่นที่ชอบรับแล้วสวนกลับเร็ว เปลี่ยนจังหวะ และคุมเกมหน้าเน็ต</li>
              <li>คนที่อยากได้ไม้สปีด แต่ยังต้องการฟีลหัวหนักและแรงปะทะที่แน่น</li>
            </ul>
          </div>
          <div>
            <h2>อาจไม่เหมาะกับใคร</h2>
            <ul>
              <li>ผู้เล่นมือใหม่ที่ยังคุมหน้าไม้ไม่แม่น</li>
              <li>คนที่ชอบไม้เบา หัวไวแบบสปีดเพียว ๆ</li>
              <li>คนที่ต้องการไม้ช่วยผ่อนแรงมาก ๆ ในทุกจังหวะ</li>
              <li>ผู้เล่นที่ถนัดง้างเต็มวงและเน้นฟาดแรงอย่างเดียว</li>
            </ul>
          </div>
        </section>

        <section className="review-section">
          <h2>จุดเด่นที่หลายรีวิวพูดตรงกัน</h2>
          <ul className="article-points">
            <li>
              <strong>เป็นไม้สปีดที่หัวหนักจริง:</strong> Acrospeed 0/001 ให้ฟีลแปลกกว่าไม้สปีดทั่วไป
              เพราะมีแรงดีดและความเร็ว แต่ยังได้ฟีลปะทะแบบไม้หัวหนัก
            </li>
            <li>
              <strong>ฟีลคือสปีด + พาวเวอร์:</strong> เหมาะกับการใช้จังหวะข้อมือสั้น ๆ
              ถ้าจับจังหวะการดีด การงอ และการบิดของไม้ได้ ลูกจะออกไปคมโดยไม่ต้องตีเต็มแรงตลอด
            </li>
            <li>
              <strong>เกมหน้าเน็ต รับ สวน และเปลี่ยนจังหวะเด่น:</strong> เหมาะกับผู้เล่นที่ชอบคุมจังหวะให้คู่ต่อสู้เสียเปรียบ
              เล่นรับแล้วพลิกเกม หรือเปลี่ยนหน้าไม้ด้วยวงสวิงสั้น
            </li>
          </ul>
        </section>

        <section className="review-section">
          <h2>แนะนำเอ็นที่เข้ากับไม้</h2>
          <p>
            ถ้าต้องการชูจุดเด่นเรื่องความเร็วและการดีดตัว แนะนำให้จับคู่กับเอ็นเส้นเล็กประมาณ 0.63-0.65 มม.
            แต่ถ้าต้องการเพิ่มการอุ้มลูกและคุมหน้าไม้ อาจเลือกเอ็นเส้นใหญ่ขึ้น เช่น 0.68 มม.
            ส่วนแบรนด์เอ็นเลือกตามฟีลที่ชอบได้เลย
          </p>
        </section>

        <section className="review-section verdict-box">
          <p className="eyebrow">Verdict</p>
          <h2>สรุป: Acrospeed 001 SEA Limited น่าสนใจตรงไหน</h2>
          <p>
            Mizuno Acrospeed 001 SEA Limited คือสัญญาณว่า Mizuno ให้ความสำคัญกับตลาด Southeast Asia มากขึ้น
            มันเป็นไม้ Made in Japan ที่ตั้งใจทำให้ภูมิภาคนี้โดยเฉพาะ พร้อมคาแรกเตอร์ที่ผสมสปีด ความหน่วง
            และพลังสวนกลับไว้ในไม้เดียว
          </p>
          <p>
            ถ้าคุณเป็นผู้เล่นที่คุมหน้าไม้ได้ดี ชอบตีจังหวะเร็ว เล่นรับแล้วสวนกลับ และอยากได้ไม้สปีดที่มีฟีลหัวหนัก
            รุ่นนี้เป็นหนึ่งในตัวเลือกที่ควรลอง แต่ถ้ายังเป็นมือใหม่ อาจต้องข้ามไปเริ่มจากไม้ที่เป็นมิตรกว่านี้ก่อน
          </p>
          <a
            className="primary-button"
            href="https://shopee.co.th/search?keyword=Mizuno%20Acrospeed%20001"
            target="_blank"
            rel="noreferrer"
          >
            ดูราคาที่ Shopee
          </a>
        </section>
      </article>
    </main>
  );
}
