import { notFound } from "next/navigation";
import { beginnerGuides, customLinkHref } from "../data";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return beginnerGuides.map((guide) => ({
    slug: guide.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const guide = beginnerGuides.find((item) => item.slug === slug);

  if (!guide) {
    return {
      title: "ไม่พบบทความ | Thai Badminton Equipment News",
    };
  }

  return {
    title: `${guide.title} | Thai Badminton Equipment News`,
    description: guide.summary,
  };
}

export default async function BeginnerGuideArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const guide = beginnerGuides.find((item) => item.slug === slug);

  if (!guide) {
    notFound();
  }

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="/" aria-label="Thai Badminton Equipment News">
          <span className="brand-mark" aria-hidden="true">
            <img src="/images/reviews/logo-file.jpg" alt="" />
          </span>
          <span>Thai Badminton Equipment News</span>
        </a>
        <nav aria-label="เมนูบทความมือใหม่">
          <a href="/">หน้าแรก</a>
          <a href="/beginner-guides">คู่มือมือใหม่</a>
          <a href="#affiliate">ดูสินค้า</a>
        </nav>
      </header>

      <article className="beginner-detail-page">
        <section className="beginner-detail-hero">
          <div>
            <p className="eyebrow">{guide.kicker}</p>
            <h1>{guide.title}</h1>
            <p className="lead">{guide.summary}</p>
          </div>
          <aside id="affiliate" className="affiliate-card">
            <span>Shopee affiliate</span>
            <h2>{guide.product}</h2>
            <p>Sub ID: {guide.subId}</p>
            <a
              className="shopee-button"
              href={customLinkHref(guide.shopeeTarget, guide.subId)}
              target="_blank"
              rel="noreferrer"
            >
              ดูสินค้าที่ Shopee
            </a>
          </aside>
        </section>

        <figure className="beginner-detail-image">
          <img src={guide.image} alt={guide.title} />
          <figcaption>ภาพประกอบจาก {guide.imageCredit}</figcaption>
        </figure>

        <section className="beginner-detail-body">
          {guide.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </section>

        <nav className="article-footer-nav" aria-label="กลับไปหน้ารวมคู่มือ">
          <a className="secondary-button" href="/beginner-guides">
            อ่านบทความมือใหม่ทั้งหมด
          </a>
          <a
            className="shopee-button"
            href={customLinkHref(guide.shopeeTarget, guide.subId)}
            target="_blank"
            rel="noreferrer"
          >
            ดูสินค้าที่ Shopee
          </a>
        </nav>
      </article>
    </main>
  );
}
