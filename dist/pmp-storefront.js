import { LitElement as s, css as l, html as a } from "lit";
import "lit/decorators.js";
const r = [
  { id: "hemi-57", label: "HEMI 5.7L", years: "2003–الآن", query: "HEMI 5.7" },
  { id: "hemi-64", label: "HEMI 6.4L / 392", years: "2011–الآن", query: "HEMI 6.4" },
  { id: "ls-gen3", label: "GM LS Gen III", years: "1997–2007", query: "LS Gen III" },
  { id: "ls-gen4", label: "GM LS Gen IV", years: "2005–2017", query: "LS Gen IV" },
  { id: "lt-gen5", label: "GM LT Gen V", years: "2014–الآن", query: "LT Gen V" },
  { id: "coyote", label: "Ford Coyote 5.0L", years: "2011–الآن", query: "Coyote 5.0" },
  { id: "godzilla", label: "Ford Godzilla 7.3L", years: "2020–الآن", query: "Godzilla 7.3" },
  { id: "toyota-1fz", label: "Toyota 1FZ-FE", years: "1993–2007", query: "1FZ-FE" },
  { id: "toyota-2jz", label: "Toyota 2JZ", years: "1991–2007", query: "2JZ" }
], n = [
  { make: "Dodge / Ram / Jeep", models: ["Charger", "Challenger", "Ram 1500", "Ram 2500", "Durango", "Grand Cherokee"] },
  { make: "Chevrolet / GMC", models: ["Silverado", "Sierra", "Tahoe", "Yukon", "Camaro", "Corvette", "Caprice"] },
  { make: "Ford", models: ["Mustang", "F-150", "Raptor", "Super Duty"] },
  { make: "Toyota / Lexus", models: ["Land Cruiser", "Supra", "Lexus IS / GS"] }
], d = [
  { icon: "⚙", title: "كامات ورافعات", subtitle: "Camshafts & Lifters", query: "camshaft lifters" },
  { icon: "▦", title: "أطقم إلغاء MDS / AFM", subtitle: "Delete Kits", query: "MDS AFM delete kit" },
  { icon: "◉", title: "رؤوس المحركات", subtitle: "Cylinder Heads", query: "cylinder heads" },
  { icon: "⌁", title: "السحب والهواء", subtitle: "Intakes & Filters", query: "cold air intake" },
  { icon: "✦", title: "التيربو والسوبرتشارجر", subtitle: "Forced Induction", query: "turbo supercharger" },
  { icon: "⛓", title: "التايمن والمحركات", subtitle: "Timing & Engine Parts", query: "timing engine parts" },
  { icon: "⬡", title: "البساتم والكرنك", subtitle: "Rotating Assembly", query: "pistons rotating assembly" },
  { icon: "ϟ", title: "الوقود والاشتعال", subtitle: "Fuel & Ignition", query: "fuel ignition" },
  { icon: "≈", title: "العادم والهدرز", subtitle: "Exhaust", query: "exhaust headers" },
  { icon: "◫", title: "القير ونقل الحركة", subtitle: "Transmission", query: "transmission" },
  { icon: "⌖", title: "التعليق والثبات", subtitle: "Suspension", query: "suspension" },
  { icon: "⌕", title: "البرمجة والعدادات", subtitle: "Tuning & Gauges", query: "tuning gauges" }
], p = [
  "AFE Power",
  "Air Lift",
  "ARP",
  "Brian Tooley Racing",
  "Comp Cams",
  "Dart Machinery",
  "DiabloSport",
  "Eagle",
  "Enginetech",
  "FAST",
  "Fuel Injector Clinic",
  "Holley",
  "Melling",
  "Mopar",
  "NOS",
  "PAC Racing Springs",
  "Point One",
  "Stainless Works",
  "Texas Speed",
  "VCM Performance"
], o = class o extends s {
  constructor() {
    super(...arguments), this.config = {}, this.searchMode = "engine", this.selectedEngine = "", this.selectedMake = "", this.selectedModel = "", this.query = "";
  }
  routeSearch(i) {
    const e = new URL(this.config.catalog_url || "/search", window.location.origin);
    e.searchParams.set("q", i), window.location.href = e.toString();
  }
  submitFinder() {
    const i = this.searchMode === "engine" ? r.find((e) => e.id === this.selectedEngine)?.query : [this.selectedMake, this.selectedModel].filter(Boolean).join(" ");
    i && this.routeSearch(i);
  }
  render() {
    const i = n.find((e) => e.make === this.selectedMake);
    return a`
      <main class="shell">
        <div class="topbar"><div class="wrap"><span><b>PMP Performance</b> — قطع أداء مختارة للسوق السعودي</span><div class="trusted"><span><span class="dot">●</span> منتجات أصلية</span><span>شحن لجميع مناطق المملكة</span><span>دعم فني قبل الشراء</span></div></div></div>
        <nav class="nav"><div class="wrap">
          <a class="brand" href="/"><span class="mark">PMP</span><span class="brandcopy"><strong>POWER MATCH PERFORMANCE</strong><small>AUTHORIZED PERFORMANCE PARTS</small></span></a>
          <form class="quicksearch" @submit=${(e) => {
      e.preventDefault(), this.query.trim() && this.routeSearch(this.query.trim());
    }}><input aria-label="البحث" placeholder="ابحث باسم القطعة أو رقمها أو المحرك..." .value=${this.query} @input=${(e) => this.query = e.target.value}><button aria-label="بحث">⌕</button></form>
          <div class="navlinks"><a href="#categories">الأقسام</a><a href="#brands">الشركات</a><a href="/offers">العروض</a><a class="cart" href="/cart">السلة</a></div>
        </div></nav>

        <header class="hero">${this.config.hero_image ? a`<img class="heroimg" src=${this.config.hero_image} alt="قطع أداء ومحرك V8">` : ""}<div class="wrap"><div class="herocontent"><span class="eyebrow">● شركات التعديل الأمريكية</span><h1>قوة محسوبة.<em>قطع تُطابق مشروعك.</em></h1><p>قطع أداء أصلية لمحركات HEMI وLS وLT وCoyote و1FZ، مع اختيار فني وتسعير واضح وشحن إلى المملكة.</p><div class="actions"><a class="btn primary" href="#finder">ابحث عن قطع سيارتك</a><a class="btn" href="#categories">تصفح الأقسام</a></div></div></div></header>

        <div class="fitment" id="finder"><div class="wrap"><div class="finder"><div class="finderhead"><div><h2>ابحث حسب المحرك أو المركبة</h2><p>اختر التطابق أولًا لتظهر لك القطع المناسبة فقط</p></div><div class="tabs"><button class=${this.searchMode === "engine" ? "active" : ""} @click=${() => this.searchMode = "engine"}>حسب المحرك</button><button class=${this.searchMode === "vehicle" ? "active" : ""} @click=${() => this.searchMode = "vehicle"}>حسب المركبة</button></div></div>
          ${this.searchMode === "engine" ? a`<div class="fields"><select .value=${this.selectedEngine} @change=${(e) => this.selectedEngine = e.target.value}><option value="">اختر عائلة المحرك</option>${r.map((e) => a`<option value=${e.id}>${e.label} — ${e.years}</option>`)}</select><input placeholder="رقم القطعة (اختياري)" @input=${(e) => this.query = e.target.value}><input placeholder="كلمة بحث إضافية (اختياري)"><button class="go" @click=${this.submitFinder}>عرض القطع ←</button></div>` : a`<div class="fields"><select .value=${this.selectedMake} @change=${(e) => {
      this.selectedMake = e.target.value, this.selectedModel = "";
    }}><option value="">اختر الشركة</option>${n.map((e) => a`<option value=${e.make}>${e.make}</option>`)}</select><select .value=${this.selectedModel} @change=${(e) => this.selectedModel = e.target.value}><option value="">اختر الموديل</option>${i?.models.map((e) => a`<option value=${e}>${e}</option>`)}</select><input placeholder="السنة / سعة المحرك"><button class="go" @click=${this.submitFinder}>عرض القطع ←</button></div>`}
          <p class="hint">تنبيه: التوافق النهائي يعتمد على سنة المركبة ورمز المحرك ورقم الشاصي عند الحاجة.</p></div></div></div>

        <section id="categories"><div class="wrap"><div class="sectionhead"><div><h2>تصفح حسب نوع القطعة</h2><p>كل ما تحتاجه لبناء محرك شارع أو حلبة موثوق</p></div><a href="/categories">جميع الأقسام</a></div><div class="categorygrid">${d.map((e) => a`<a class="category" href=${`/search?q=${encodeURIComponent(e.query)}`}><span class="icon">${e.icon}</span><b>${e.title}</b><small>${e.subtitle}</small></a>`)}</div></div></section>

        <section class="engines"><div class="wrap"><div class="sectionhead"><div><h2>تسوق حسب عائلة المحرك</h2><p>الأقسام الأكثر طلبًا في مشاريع الأداء المحلية</p></div></div><div class="enginegrid">${r.map((e) => a`<a class="engine" href=${`/search?q=${encodeURIComponent(e.query)}`}><span><strong>${e.label}</strong><small>${e.years}</small></span><i>←</i></a>`)}</div></div></section>

        <section><div class="wrap"><div class="promos"><article class="promo">${this.config.hemi_banner ? a`<img src=${this.config.hemi_banner} alt="قطع أداء HEMI">` : ""}<div class="promotext"><span>HEMI PERFORMANCE</span><h3>مشروع HEMI يبدأ من التطابق الصحيح</h3><p>كامات، يايات، أطقم MDS، طرمبات زيت وقطع بناء المحرك.</p><a class="btn primary" href="/search?q=HEMI">تسوق HEMI</a></div></article><article class="promo">${this.config.ls_banner ? a`<img src=${this.config.ls_banner} alt="قطع أداء LS وLT">` : ""}<div class="promotext"><span>LS / LT PERFORMANCE</span><h3>حلول GM من الشارع إلى الحلبة</h3><p>AFM/DFM Delete، كامات، رؤوس، سحب، وقود وقطع داخلية.</p><a class="btn primary" href="/search?q=LS%20LT">تسوق LS / LT</a></div></article></div></div></section>

        <section id="brands"><div class="wrap"><div class="sectionhead"><div><h2>الشركات</h2><p>علامات أمريكية وعالمية موثوقة لقطع الأداء</p></div><a href="/brands">جميع الشركات</a></div><div class="brandgrid">${p.map((e) => a`<a class="brandcard" href=${`/search?q=${encodeURIComponent(e)}`}>${e}</a>`)}</div></div></section>

        <div class="assurance"><div class="wrap assurancegrid"><div class="assuranceitem"><b><i>✓</i>ضمان الأصالة</b><small>مصادر معتمدة وفواتير واضحة</small></div><div class="assuranceitem"><b><i>⌖</i>اختيار فني</b><small>مراجعة التوافق قبل الطلب</small></div><div class="assuranceitem"><b><i>◫</i>شحن داخل المملكة</b><small>تغليف وتتبع للشحنات</small></div><div class="assuranceitem"><b><i>↻</i>دعم ما بعد البيع</b><small>سياسة واضحة وخدمة مباشرة</small></div></div></div>

        <footer class="foot"><div class="wrap"><div class="footgrid"><div><a class="brand" href="/"><span class="mark">PMP</span><span class="brandcopy"><strong>POWER MATCH PERFORMANCE</strong><small>PERFORMANCE PARTS • SAUDI ARABIA</small></span></a><p>متجر سعودي متخصص في قطع تعديل وأداء المحركات، مدعوم بخبرة ورشة واختيار فني يناسب استخدامك.</p></div><div><h3>روابط مهمة</h3><a href="/pages/about-us">من نحن</a><a href="/pages/shipping-and-payment">الشحن والدفع</a><a href="/pages/returns">الاستبدال والاسترجاع</a><a href="/pages/contact-us">تواصل معنا</a></div><div><h3>خدمة العملاء</h3>${this.config.support_email ? a`<a href=${`mailto:${this.config.support_email}`}>${this.config.support_email}</a>` : ""}${this.config.whatsapp ? a`<a href=${`https://wa.me/${this.config.whatsapp}`}>تواصل عبر واتساب</a>` : ""}${this.config.commercial_registration ? a`<p>السجل التجاري: ${this.config.commercial_registration}</p>` : ""}</div></div><div class="legal"><span>© ${(/* @__PURE__ */ new Date()).getFullYear()} PMP Performance. جميع الحقوق محفوظة.</span><span>الأسعار النهائية تشمل ضريبة القيمة المضافة عند عرضها في المتجر.</span></div></div></footer>
      </main>`;
  }
};
o.styles = l`
    :host{display:block;direction:rtl;background:#08090b;color:#f7f7f8;font-family:"DIN Next Arabic","Tajawal",Arial,sans-serif;--red:#e10600;--red2:#ff2d24;--panel:#111318;--line:#292c33;--muted:#9da1aa}
    *{box-sizing:border-box}.shell{overflow:hidden;background:radial-gradient(circle at 15% 0,#240504 0,transparent 34%),#08090b}.wrap{width:min(1440px,calc(100% - 32px));margin:auto}
    .topbar{border-bottom:1px solid #24262d;background:#0d0f12;color:#c9cbd0;font-size:12px}.topbar .wrap{display:flex;justify-content:space-between;gap:16px;padding:9px 0}.trusted{display:flex;gap:18px;flex-wrap:wrap}.trusted b{color:#fff}.dot{color:var(--red)}
    .nav{position:relative;z-index:4;background:rgba(8,9,11,.94);backdrop-filter:blur(16px);border-bottom:1px solid #24262d}.nav .wrap{display:grid;grid-template-columns:auto minmax(260px,1fr) auto;align-items:center;gap:24px;padding:16px 0}.brand{display:flex;align-items:center;gap:11px;text-decoration:none;color:#fff}.mark{width:52px;height:52px;display:grid;place-items:center;background:linear-gradient(145deg,var(--red),#890000);font-weight:1000;font-style:italic;font-size:22px;clip-path:polygon(10% 0,100% 0,90% 100%,0 100%);letter-spacing:-2px}.brandcopy strong{display:block;font-size:17px;letter-spacing:.5px}.brandcopy small{display:block;color:#9da1aa;font-size:9px;letter-spacing:1.8px}.quicksearch{display:flex;border:1px solid #30333b;background:#15171b;border-radius:4px;overflow:hidden}.quicksearch input{flex:1;min-width:0;border:0;background:transparent;color:#fff;padding:13px 15px;outline:0;font:inherit}.quicksearch button{border:0;background:var(--red);color:#fff;width:50px;font-size:20px;cursor:pointer}.navlinks{display:flex;gap:18px;align-items:center}.navlinks a{color:#fff;text-decoration:none;font-size:13px;font-weight:800}.navlinks .cart{background:#fff;color:#090a0c;padding:10px 13px;border-radius:3px}
    .hero{position:relative;min-height:470px;display:grid;align-items:center;background:#08090b}.heroimg{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:.72}.hero::after{content:"";position:absolute;inset:0;background:linear-gradient(90deg,rgba(8,9,11,.08),rgba(8,9,11,.35) 42%,#08090b 82%)}.herocontent{position:relative;z-index:2;width:min(680px,100%);padding:68px 0 120px;margin-inline-start:auto}.eyebrow{display:inline-flex;gap:8px;align-items:center;border:1px solid rgba(255,45,36,.45);background:rgba(225,6,0,.1);color:#ff6b65;padding:7px 11px;font-size:12px;font-weight:900;letter-spacing:1px}.hero h1{font-size:clamp(38px,6vw,76px);line-height:.98;margin:18px 0 16px;letter-spacing:-2px}.hero h1 em{display:block;color:var(--red2);font-style:normal}.hero p{color:#c9cbd1;font-size:18px;line-height:1.8;margin:0 0 25px;max-width:570px}.actions{display:flex;gap:10px;flex-wrap:wrap}.btn{appearance:none;border:1px solid #3b3e46;border-radius:3px;padding:13px 22px;background:#15171b;color:#fff;text-decoration:none;font:800 14px inherit;cursor:pointer}.btn.primary{background:var(--red);border-color:var(--red)}
    .fitment{position:relative;z-index:3;margin-top:-72px;padding-bottom:38px}.finder{border:1px solid #2d3037;background:linear-gradient(145deg,#15171b,#0e1013);box-shadow:0 24px 60px rgba(0,0,0,.42);padding:22px}.finderhead{display:flex;align-items:center;justify-content:space-between;gap:16px;margin-bottom:18px}.finderhead h2{font-size:22px;margin:0}.finderhead p{margin:4px 0 0;color:var(--muted);font-size:12px}.tabs{display:flex;border:1px solid #31343b;border-radius:3px;overflow:hidden}.tabs button{border:0;background:#0b0c0f;color:#aeb1b8;padding:10px 15px;font-weight:800;cursor:pointer}.tabs button.active{background:var(--red);color:#fff}.fields{display:grid;grid-template-columns:repeat(3,minmax(0,1fr)) auto;gap:10px}.fields select,.fields input{width:100%;border:1px solid #363941;background:#0b0c0f;color:#fff;padding:13px;border-radius:3px;font:inherit;outline:0}.fields .go{border:0;background:#fff;color:#090a0c;padding:0 24px;font-weight:950;cursor:pointer;border-radius:3px}.hint{margin:12px 0 0;color:#777c86;font-size:11px}
    section{padding:54px 0}.sectionhead{display:flex;justify-content:space-between;align-items:end;gap:20px;margin-bottom:23px}.sectionhead h2{margin:0;font-size:29px}.sectionhead p{margin:6px 0 0;color:var(--muted)}.sectionhead a{color:#fff;text-decoration:none;border-bottom:2px solid var(--red);padding-bottom:4px;font-size:13px;font-weight:800}
    .categorygrid{display:grid;grid-template-columns:repeat(6,1fr);border-top:1px solid var(--line);border-inline-start:1px solid var(--line)}.category{min-height:145px;padding:22px 14px;border-inline-end:1px solid var(--line);border-bottom:1px solid var(--line);text-decoration:none;color:#fff;background:#0e1013;transition:.25s}.category:hover{background:#17191e;transform:translateY(-3px);box-shadow:inset 0 -3px var(--red)}.category .icon{font-size:28px;color:var(--red);display:block;margin-bottom:16px}.category b{display:block;font-size:14px}.category small{display:block;color:#747984;margin-top:6px;font-size:10px;direction:ltr;text-align:right}
    .engines{background:#0c0d10;border-block:1px solid #202229}.enginegrid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}.engine{display:flex;justify-content:space-between;align-items:center;gap:12px;background:#14161a;border:1px solid #2a2d34;padding:17px;text-decoration:none;color:#fff}.engine:hover{border-color:var(--red)}.engine strong{display:block}.engine small{color:#818690}.engine i{color:var(--red);font-style:normal;font-size:22px}
    .promos{display:grid;grid-template-columns:1fr 1fr;gap:18px}.promo{position:relative;min-height:290px;overflow:hidden;border:1px solid #2a2c32;background:#101216}.promo img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}.promo::after{content:"";position:absolute;inset:0;background:linear-gradient(90deg,#090a0c 2%,rgba(9,10,12,.8) 46%,rgba(9,10,12,.1))}.promo:nth-child(2)::after{background:linear-gradient(-90deg,#090a0c 2%,rgba(9,10,12,.82) 48%,rgba(9,10,12,.08))}.promotext{position:relative;z-index:2;width:58%;padding:40px}.promo:nth-child(2) .promotext{margin-inline-start:auto}.promotext span{color:#ff706a;font-size:11px;font-weight:900;letter-spacing:1px}.promotext h3{font-size:30px;margin:10px 0}.promotext p{color:#b8bbc2;line-height:1.7;font-size:13px}
    .brandgrid{display:grid;grid-template-columns:repeat(5,1fr);gap:8px}.brandcard{display:grid;place-items:center;min-height:88px;border:1px solid #2a2d34;background:#111318;color:#dfe1e5;text-decoration:none;text-align:center;font-weight:900;font-size:13px;padding:10px}.brandcard:hover{color:#fff;border-color:#5b5f69;box-shadow:inset 0 -2px var(--red)}
    .assurance{border-block:1px solid #292c32;background:linear-gradient(90deg,#16181d,#0c0d10)}.assurancegrid{display:grid;grid-template-columns:repeat(4,1fr)}.assuranceitem{padding:26px;border-inline-end:1px solid #292c32}.assuranceitem b{display:block;margin-bottom:5px}.assuranceitem small{color:#898e98}.assuranceitem i{color:var(--red);font-style:normal;margin-inline-end:7px}
    .foot{padding:42px 0 28px;background:#050607}.footgrid{display:grid;grid-template-columns:1.5fr 1fr 1fr;gap:50px}.foot h3{margin-top:0}.foot p,.foot a{color:#9398a2;line-height:1.8;font-size:13px}.foot a{display:block;text-decoration:none}.legal{display:flex;justify-content:space-between;gap:20px;border-top:1px solid #202227;margin-top:28px;padding-top:20px;color:#676c75;font-size:11px}
    @media(max-width:1050px){.categorygrid{grid-template-columns:repeat(4,1fr)}.nav{position:static}.nav .wrap{grid-template-columns:auto 1fr}.navlinks{display:none}.enginegrid{grid-template-columns:repeat(2,1fr)}.brandgrid{grid-template-columns:repeat(4,1fr)}}
    @media(max-width:720px){.wrap{width:min(100% - 20px,1440px)}.topbar .wrap{display:block;text-align:center}.trusted{justify-content:center}.nav .wrap{grid-template-columns:1fr}.brand{justify-content:center}.hero{min-height:530px}.heroimg{opacity:.45}.hero::after{background:linear-gradient(0deg,#08090b 0,rgba(8,9,11,.35) 100%)}.herocontent{padding:48px 0 135px}.hero h1{font-size:44px}.fitment{margin-top:-100px}.finderhead{display:block}.tabs{margin-top:14px}.fields{grid-template-columns:1fr}.fields .go{padding:14px}.categorygrid{grid-template-columns:repeat(2,1fr)}.enginegrid,.promos{grid-template-columns:1fr}.promo{min-height:310px}.promotext{width:75%;padding:26px}.brandgrid{grid-template-columns:repeat(2,1fr)}.assurancegrid{grid-template-columns:1fr 1fr}.assuranceitem{border-bottom:1px solid #292c32}.footgrid{grid-template-columns:1fr;gap:20px}.legal{display:block}.sectionhead{align-items:start}.quicksearch{display:none}}
  `;
let t = o;
typeof t < "u" && t.registerSallaComponent("salla-pmp-storefront");
export {
  t as default
};
