import { html, LitElement, nothing } from "lit";
import { property, state } from "lit/decorators.js";
import { storefrontStyles } from "./styles";

type FinderMode = "vehicle" | "engine";
type StorefrontConfig = {
  announcement?: string; hero_badge?: string; hero_title?: string; hero_description?: string;
  primary_button?: string; primary_url?: string; whatsapp_url?: string;
  support_email?: string; commercial_registration?: string;
};

const engineFamilies = [
  { code: "HEMI", name: "هيمي 5.7 و6.4", note: "2009+" },
  { code: "LS", name: "GM LS", note: "Gen III / IV" },
  { code: "LT", name: "GM LT", note: "Gen V" },
  { code: "1FZ", name: "Toyota 1FZ", note: "Performance" },
  { code: "COYOTE", name: "Ford Coyote", note: "5.0L" },
  { code: "+", name: "محركات أخرى", note: "تصفح الكل" },
];

const partCategories = [
  { icon: "intake", title: "سحب الهواء", subtitle: "Intakes & Filters" },
  { icon: "cam", title: "كامات ورافعات", subtitle: "Cams & Lifters" },
  { icon: "spark", title: "الإشعال والبواجي", subtitle: "Ignition" },
  { icon: "gear", title: "أجزاء التايمن", subtitle: "Timing" },
  { icon: "oil", title: "التزييت والتبريد", subtitle: "Oiling & Cooling" },
  { icon: "suspension", title: "التعليق", subtitle: "Suspension" },
];

const brands = ["aFe POWER", "BTR", "Texas Speed", "Melling", "McLeod", "NGK", "ARP", "SuperPro"];

export default class PmpStorefront extends LitElement {
  @property({ type: Object }) config?: StorefrontConfig;
  @state() private finderMode: FinderMode = "vehicle";
  @state() private make = "";
  @state() private model = "";
  @state() private year = "";
  @state() private engine = "";
  static styles = storefrontStyles;

  private icon(name: string) {
    const icons: Record<string, unknown> = {
      search: html`<svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/></svg>`,
      account: html`<svg viewBox="0 0 24 24"><circle cx="12" cy="8" r="4"/><path d="M4.8 21a7.4 7.4 0 0 1 14.4 0"/></svg>`,
      cart: html`<svg viewBox="0 0 24 24"><path d="M3 4h2l2.2 10.2a2 2 0 0 0 2 1.6h7.7a2 2 0 0 0 2-1.6L20 8H7"/><circle cx="10" cy="20" r="1"/><circle cx="17" cy="20" r="1"/></svg>`,
      car: html`<svg viewBox="0 0 24 24"><path d="m4 14 2-6h12l2 6M3 14h18v5h-2v-2H5v2H3z"/><circle cx="7" cy="14" r="1"/><circle cx="17" cy="14" r="1"/></svg>`,
      intake: html`<svg viewBox="0 0 24 24"><path d="M3 7h9v4H8v6h13"/><path d="m16 13 5 4-5 4"/></svg>`,
      cam: html`<svg viewBox="0 0 24 24"><path d="M4 12h16"/><circle cx="8" cy="12" r="3"/><circle cx="16" cy="12" r="3"/></svg>`,
      spark: html`<svg viewBox="0 0 24 24"><path d="m13 2-6 11h5l-1 9 6-12h-5z"/></svg>`,
      gear: html`<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M12 2v3m0 14v3M2 12h3m14 0h3M5 5l2 2m10 10 2 2M19 5l-2 2M7 17l-2 2"/></svg>`,
      oil: html`<svg viewBox="0 0 24 24"><path d="M5 8h12l3 4v5H7a4 4 0 0 1-2-7.5z"/><path d="M9 8V5h6v3m6 2 1-2"/></svg>`,
      suspension: html`<svg viewBox="0 0 24 24"><path d="M8 2v4L6 8l4 4-4 4 4 4-2 2M16 2v4l2 2-4 4 4 4-4 4 2 2"/></svg>`,
      shield: html`<svg viewBox="0 0 24 24"><path d="M12 2 4 5v6c0 5.2 3.4 9.3 8 11 4.6-1.7 8-5.8 8-11V5z"/><path d="m8.5 12 2.2 2.2 4.8-5"/></svg>`,
      truck: html`<svg viewBox="0 0 24 24"><path d="M3 6h11v11H3zM14 10h4l3 3v4h-7z"/><circle cx="7" cy="19" r="2"/><circle cx="18" cy="19" r="2"/></svg>`,
      headset: html`<svg viewBox="0 0 24 24"><path d="M4 14v-3a8 8 0 0 1 16 0v3"/><path d="M4 14h3v6H5a1 1 0 0 1-1-1zm16 0h-3v6h2a1 1 0 0 0 1-1z"/></svg>`,
      lock: html`<svg viewBox="0 0 24 24"><rect x="5" y="10" width="14" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/></svg>`,
    };
    return icons[name] ?? nothing;
  }

  private finderSearch() {
    const terms = this.finderMode === "engine" ? [this.engine] : [this.make, this.model, this.year, this.engine];
    const query = terms.filter(Boolean).join(" ");
    if (query) window.location.href = `/search?q=${encodeURIComponent(query)}`;
  }

  private heroTitle(title?: string) {
    const value = title || "القطعة الصح. للأداء الصح.";
    const splitAt = value.indexOf(".");
    if (splitAt < 0) return html`${value}`;
    return html`${value.slice(0, splitAt + 1)}<br /><span>${value.slice(splitAt + 1).trim()}</span>`;
  }

  render() {
    const c = this.config ?? {};
    return html`
      <div class="announcement"><span class="dot"></span>${c.announcement || "شحن لجميع مناطق المملكة • قطع أداء أصلية ومختارة بعناية"}</div>
      <header class="header">
        <div class="header-main">
          <a class="logo" href="/" aria-label="Power Match Performance">
            <div class="mark"><span>P</span><span class="m">M</span><span>P</span></div>
            <div class="logo-copy"><strong>POWER MATCH</strong><small>PERFORMANCE</small></div>
          </a>
          <form class="site-search" action="/search">${this.icon("search")}<input name="q" type="search" placeholder="ابحث باسم القطعة، رقمها أو نوع المحرك..." aria-label="بحث المتجر" /></form>
          <div class="header-actions"><a class="icon-button account" href="/profile" aria-label="حسابي">${this.icon("account")}</a><a class="icon-button" href="/cart" aria-label="السلة">${this.icon("cart")}</a></div>
        </div>
        <nav class="nav" aria-label="التنقل الرئيسي"><div class="nav-inner">
          <a class="featured" href="#engine-families">تسوق حسب المحرك</a><a href="#part-categories">تسوق حسب القطعة</a><a href="#brands">الماركات</a><a href="/latest-products">وصل حديثًا</a><a href="/offers">العروض</a><a href="/pages/contact-us">تواصل معنا</a>
        </div></nav>
      </header>

      <section class="hero"><div class="hero-inner">
        <div class="eyebrow">${c.hero_badge || "POWER MATCH PERFORMANCE"}</div>
        <h1>${this.heroTitle(c.hero_title)}</h1>
        <p>${c.hero_description || "قطع أداء مختارة للمحركات الأمريكية واليابانية، مع توافق واضح ودعم فني يساعدك تختار من أول مرة."}</p>
        <div class="hero-actions"><a class="button primary" href=${c.primary_url || "#engine-families"}>${c.primary_button || "ابدأ حسب محركك"}</a>${c.whatsapp_url ? html`<a class="button ghost" href=${c.whatsapp_url}>اسأل مختص</a>` : nothing}</div>
      </div></section>

      <div class="finder-wrap"><section class="finder" aria-label="البحث عن القطع المتوافقة">
        <div class="finder-head"><div class="finder-title">${this.icon("car")} ابحث عن القطعة المناسبة</div><div class="tabs">
          <button class=${`tab ${this.finderMode === "vehicle" ? "active" : ""}`} @click=${() => this.finderMode = "vehicle"}>حسب المركبة</button>
          <button class=${`tab ${this.finderMode === "engine" ? "active" : ""}`} @click=${() => this.finderMode = "engine"}>حسب المحرك</button>
        </div></div>
        <div class=${`finder-body ${this.finderMode}`}>
          ${this.finderMode === "vehicle" ? html`
            <select aria-label="الشركة" @change=${(e: Event) => this.make = (e.target as HTMLSelectElement).value}><option value="">اختر الشركة</option><option>دودج</option><option>كرايسلر</option><option>جيب</option><option>شفروليه</option><option>جي إم سي</option><option>تويوتا</option><option>فورد</option></select>
            <select aria-label="المركبة" @change=${(e: Event) => this.model = (e.target as HTMLSelectElement).value}><option value="">اختر المركبة</option><option>Charger</option><option>Challenger</option><option>300</option><option>Silverado</option><option>Sierra</option><option>Land Cruiser</option><option>Mustang</option></select>
            <select aria-label="السنة" @change=${(e: Event) => this.year = (e.target as HTMLSelectElement).value}><option value="">اختر السنة</option>${Array.from({ length: 23 }, (_, i) => 2026 - i).map(y => html`<option>${y}</option>`)}</select>
          ` : nothing}
          <select aria-label="المحرك" @change=${(e: Event) => this.engine = (e.target as HTMLSelectElement).value}><option value="">اختر المحرك</option><option>HEMI 5.7</option><option>HEMI 6.4</option><option>GM LS</option><option>GM LT</option><option>Toyota 1FZ</option><option>Ford Coyote</option></select>
          <button class="search-button" @click=${this.finderSearch}>اعرض القطع</button>
        </div>
      </section></div>

      <section class="section" id="engine-families">
        <div class="section-heading"><div><div class="section-kicker">SHOP BY ENGINE</div><h2>اختر عائلة المحرك</h2></div><a class="view-all" href="/categories">عرض جميع التصنيفات</a></div>
        <div class="engines">${engineFamilies.map(item => html`<a class="engine-card" data-code=${item.code} href=${`/search?q=${encodeURIComponent(item.name)}`}><div class="engine-code">${item.code}</div><div class="engine-name">${item.name}</div><div class="engine-note">${item.note}</div></a>`)}</div>
      </section>

      <div class="parts-section" id="part-categories"><section class="section">
        <div class="section-heading"><div><div class="section-kicker">SHOP BY PART</div><h2>تسوق حسب نوع القطعة</h2></div><a class="view-all" href="/categories">جميع القطع</a></div>
        <div class="parts">${partCategories.map(item => html`<a class="part-card" href=${`/search?q=${encodeURIComponent(item.title)}`}><div class="part-icon">${this.icon(item.icon)}</div><div><div class="part-title">${item.title}</div><div class="part-subtitle">${item.subtitle}</div></div></a>`)}</div>
      </section></div>

      <section class="section"><div class="promo"><div class="promo-copy"><strong>مشروعك يبدأ<br />باختيار صحيح</strong><p>مو متأكد من التوافق؟ أعطنا بيانات سيارتك وتعديلاتك ونساعدك تختار القطع المناسبة.</p>${c.whatsapp_url ? html`<a class="button" href=${c.whatsapp_url}>تواصل عبر واتساب</a>` : html`<a class="button" href="/pages/contact-us">تواصل معنا</a>`}</div></div></section>

      <section class="section" id="brands">
        <div class="section-heading"><div><div class="section-kicker">TOP BRANDS</div><h2>ماركات نثق بها</h2></div><a class="view-all" href="/brands">كل الماركات</a></div>
        <div class="brands">${brands.map(brand => html`<a class="brand" href=${`/search?q=${encodeURIComponent(brand)}`}>${brand}</a>`)}</div>
      </section>

      <div class="trust"><div class="trust-inner">
        <div class="trust-item">${this.icon("shield")}<div><strong>منتجات موثوقة</strong><small>مصادر وماركات معتمدة</small></div></div>
        <div class="trust-item">${this.icon("truck")}<div><strong>شحن داخل المملكة</strong><small>خيارات توصيل متعددة</small></div></div>
        <div class="trust-item">${this.icon("headset")}<div><strong>دعم قبل الشراء</strong><small>نساعدك في التوافق</small></div></div>
        <div class="trust-item">${this.icon("lock")}<div><strong>دفع آمن</strong><small>عبر بوابات سلة</small></div></div>
      </div></div>
      <footer class="footer"><b>POWER MATCH PERFORMANCE</b>${c.support_email ? html`<br />${c.support_email}` : nothing}${c.commercial_registration ? html` • سجل تجاري ${c.commercial_registration}` : nothing}</footer>
    `;
  }
}
