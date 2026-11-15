import React, { useState } from "react";

const PHONE = "7448676376";
const phoneDisplay = "74486 76376";
const emailAddress = "gsmwizard0@gmail.com";
const emailHref = `mailto:${emailAddress}`;
const address = "1/44E, 60 Feet Main Road, Velliyankadu, Tiruppur - 641604";
const instagram = "https://www.instagram.com/x_mobiles_tirupur/";
const branches = [
  {
    name: "X MOBILES — Velliyankadu",
    address,
    mapUrl: "https://maps.google.com/maps?q=11.0835268%2C77.3541591&z=17",
    embedUrl: "https://maps.google.com/maps?q=11.0835268%2C77.3541591&z=17&hl=en&output=embed",
    message: "Hello X MOBILES, I have an enquiry for the Velliyankadu branch.",
    description: "Mobile and technology sales, accessories and service.",
    note: `Main X MOBILES contact line: ${phoneDisplay}`,
  },
  {
    name: "Retail & Dealer Service",
    address: "Xmobiles X2, 298/1, Iduvampalayam Rd, Valai Tottam, Periyandipalayam, Andipalayam, Tiruppur, Tamil Nadu 641687",
    mapUrl: "https://maps.app.goo.gl/4UBBdW66wt7d5wWs9",
    embedUrl: "https://maps.google.com/maps?q=Xmobiles%20X2%2C%20298%2F1%2C%20Iduvampalayam%20Rd%2C%20Valai%20Tottam%2C%20Periyandipalayam%2C%20Andipalayam%2C%20Tiruppur%2C%20Tamil%20Nadu%20641687&z=17&hl=en&output=embed",
    message: "Hello X MOBILES, I have an enquiry for the Retail & Dealer Service branch.",
    description: "Mobile, laptop and tablet repair service with free pickup and delivery.",
    note: "No separate phone number is shown on the supplied card; this uses the main contact line.",
  },
];
const services = [
  {
    icon: "▯",
    title: "Mobile Sales",
    description: "Explore new smartphones and get help choosing a model that fits your needs and budget.",
    tamil: "உங்கள் தேவைக்கும் பட்ஜெட்டுக்கும் ஏற்ற புதிய ஸ்மார்ட்போனைத் தேர்வு செய்ய எங்களிடம் ஆலோசனை பெறுங்கள்.",
  },
  {
    icon: "⚒",
    title: "Mobile Repair & Service",
    description: "Get practical help with mobile diagnostics, repairs and dependable servicing.",
    tamil: "மொபைல் கோளாறுகளை கண்டறிதல், பழுது பார்த்தல் மற்றும் சேவைக்கு எங்களை அணுகுங்கள்.",
  },
  {
    icon: "⌁",
    title: "Mobile Accessories",
    description: "Find useful accessories for your phone, from everyday essentials to add-ons.",
    tamil: "உங்கள் மொபைலுக்கான அன்றாடத் தேவைகள் மற்றும் பயனுள்ள துணைப் பொருட்களைத் தேர்ந்தெடுங்கள்.",
  },
  {
    icon: "▱",
    title: "Laptop Sales & Service",
    description: "Ask about laptops and support for study, work and everyday use.",
    tamil: "படிப்பு, வேலை மற்றும் அன்றாட பயன்பாட்டிற்கான லேப்டாப் விற்பனை மற்றும் சேவை உதவி.",
  },
  {
    icon: "↻",
    title: "Mobile Exchange",
    description: "Ask our team about exchanging your current phone when upgrading.",
    tamil: "புதிய மொபைலுக்கு மாறும்போது, உங்கள் பழைய மொபைல் பரிமாற்ற வாய்ப்புகளை விசாரிக்கவும்.",
  },
  {
    icon: "⌘",
    title: "Software & Technical Support",
    description: "Get assistance with software setup and everyday technical questions.",
    tamil: "மென்பொருள் அமைப்பு மற்றும் அன்றாட தொழில்நுட்ப உதவிக்கு எங்களை அணுகுங்கள்.",
  },
  {
    icon: "⌬",
    title: "Gadgets & Electronics",
    description: "Discover useful gadgets and electronics for home, work and on the go.",
    tamil: "வீடு, வேலை மற்றும் பயணங்களுக்கு உதவும் கேஜெட்கள் மற்றும் மின்னணு சாதனங்களைப் பற்றி கேளுங்கள்.",
  },
];

function whatsappLink(message, phone = PHONE) {
  return `https://wa.me/91${phone}?text=${encodeURIComponent(message)}`;
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", interest: "Mobile enquiry", message: "" });
  const [feedback, setFeedback] = useState({ name: "", rating: "5", message: "" });

  const submitEnquiry = (e) => {
    e.preventDefault();
    const msg = `Hello X MOBILES, I have an enquiry.\nName: ${form.name}\nPhone: ${form.phone}\nInterested in: ${form.interest}\nMessage: ${form.message}`;
    window.open(whatsappLink(msg), "_blank", "noopener,noreferrer");
  };

  const submitFeedback = (e) => {
    e.preventDefault();
    const msg = `Hello X MOBILES, my feedback:\nName: ${feedback.name}\nRating: ${feedback.rating}/5\nFeedback: ${feedback.message}`;
    window.open(whatsappLink(msg), "_blank", "noopener,noreferrer");
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <div className="top-strip">
        <span>SALES</span><i /> <span>SERVICE</span><i /> <span>ACCESSORIES</span>
        <span className="top-right">TIRUPPUR · TAMIL NADU</span>
      </div>

      <header className="header">
        <a className="brand" href="#home" onClick={closeMenu} aria-label="X Mobiles home">
          <img src="/images/x-mobiles-logo.jpeg" alt="X Mobiles logo" />
        </a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">☰</button>
        <nav className={menuOpen ? "nav nav-open" : "nav"}>
          {[["Home", "home"], ["About", "about"], ["Products", "products"], ["Services", "services"], ["Locations", "locations"], ["Contact", "contact"]].map(([item, id]) =>
            <a key={item} href={`#${id}`} onClick={closeMenu}>{item}</a>
          )}
          <a className="nav-cta" href={whatsappLink("Hello X MOBILES, I would like to know more.")} target="_blank" rel="noreferrer">WhatsApp us ↗</a>
        </nav>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-copy">
            <p className="eyebrow"><span className="eyebrow-line" /> YOUR LOCAL MOBILE & TECH STORE</p>
            <h1>More than just<br /><em>mobiles.</em></h1>
            <p className="hero-text">Mobiles, laptops, accessories and reliable service — all in one place at Tiruppur.</p>
            <div className="hero-actions">
              <a className="btn btn-yellow" href="#products">Explore what we offer <span>↗</span></a>
              <a className="btn btn-outline" href={whatsappLink("Hello X MOBILES, I need assistance.")} target="_blank" rel="noreferrer">Chat on WhatsApp</a>
            </div>
            <div className="hero-meta"><span className="pulse" /> VISIT US IN VELLIYANKADU, TIRUPPUR</div>
          </div>
          <div className="hero-art">
            <div className="hero-glow" />
            <img src="/images/x-mobiles-square-logo.jpeg" alt="X Mobiles emblem" />
            <div className="hero-stamp"><b>X</b><span>MOBILES</span><small>SALES · SERVICE · ACCESSORIES</small></div>
          </div>
          <div className="hero-bottom">X MOBILES <span>—</span> YOUR EVERYDAY TECH PARTNER</div>
        </section>

        <section className="promo-wrap">
          <div className="promo-banner-frame">
            <img className="promo-banner" src="/images/x-mobiles-promo-banner.jpeg" alt="X Mobiles sales, service, accessories and contact details" />
            <a className="banner-contact" href={`tel:+91${PHONE}`} aria-label={`Call X MOBILES at ${phoneDisplay}`}>{phoneDisplay}</a>
          </div>
        </section>

        <section className="location-section section" id="locations">
          <div className="section-kicker">FIND US IN TIRUPPUR</div>
          <div className="location-heading">
            <h2>Our shop <em>locations.</em></h2>
            <p>Visit a branch or contact our team for assistance.</p>
          </div>
          <div className="branch-grid">
            {branches.map((branch, index) => (
              <article className="branch-card" key={branch.name}>
                <div className="branch-card-heading">
                  <span className="branch-label">BRANCH 0{index + 1}</span>
                  <h3>{branch.name}</h3>
                </div>
                <div className="branch-address">
                  <span className="branch-pin" aria-hidden="true">⌖</span>
                  <p>{branch.address}</p>
                </div>
                <p className="branch-description">{branch.description}</p>
                <div className="branch-actions">
                  <a className="btn btn-yellow" href={`tel:+91${PHONE}`}>Call Now <span>↗</span></a>
                  <a className="btn btn-outline-dark" href={whatsappLink(branch.message)} target="_blank" rel="noreferrer">WhatsApp <span>↗</span></a>
                  <a className="branch-directions" href={branch.mapUrl} target="_blank" rel="noreferrer">Get Directions ↗</a>
                </div>
                <p className="branch-note">{branch.note}</p>
                <div className="map-frame branch-map">
                  <iframe
                    title={`${branch.name} location map`}
                    src={branch.embedUrl}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="intro section" id="about">
          <div className="section-kicker">01 / ABOUT X MOBILES</div>
          <div className="intro-grid">
            <h2>Good tech.<br /><em>Good guidance.</em></h2>
            <div>
              <p className="intro-text">Welcome to X MOBILES, your neighbourhood destination for mobile phones, laptops, accessories and hardware and software services in Tiruppur.</p>
              <p className="muted">Drop by our store or contact us to discuss what you need. Our team will help you find the right next step.</p>
            </div>
          </div>
        </section>

        <section className="section dark-section" id="products">
          <div className="section-head">
            <div><div className="section-kicker">02 / WHAT YOU'LL FIND</div><h2>Explore our <em>range.</em></h2></div>
            <p className="muted">Talk to us for current models, availability and details.</p>
          </div>
          <div className="cards three">
            <article className="service-card product-card">
              <div className="card-number">01</div><div className="card-icon">▯</div>
              <h3>Mobile Phones</h3><p>Explore smartphones and get help choosing a device that fits your needs.</p>
              <a href={whatsappLink("Hello, I am enquiring about mobile phones.")} target="_blank" rel="noreferrer">Enquire now ↗</a>
            </article>
            <article className="service-card product-card">
              <div className="card-number">02</div><div className="card-icon">▱</div>
              <h3>Laptops</h3><p>Ask us about laptops for everyday use, study, work and more.</p>
              <a href={whatsappLink("Hello, I am enquiring about laptops.")} target="_blank" rel="noreferrer">Enquire now ↗</a>
            </article>
            <article className="service-card product-card">
              <div className="card-number">03</div><div className="card-icon">⌁</div>
              <h3>Accessories</h3><p>Get in touch about mobile and computer accessories.</p>
              <a href={whatsappLink("Hello, I am enquiring about mobile and computer accessories.")} target="_blank" rel="noreferrer">Enquire now ↗</a>
            </article>
          </div>
        </section>

        <section className="section services-section" id="services">
          <div className="section-kicker">03 / HOW WE CAN HELP</div>
          <div className="section-head"><h2>More than just <em>mobiles.</em></h2><p className="muted">Everyday technology, sales and service — with friendly guidance in English and Tamil.</p></div>
          <div className="service-grid">
            {services.map((service, index) => (
              <article className="service-card bilingual-card" key={service.title}>
                <div className="card-number">{String(index + 1).padStart(2, "0")}</div>
                <div className="card-icon" aria-hidden="true">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <p className="tamil-copy" lang="ta">{service.tamil}</p>
                <a href={whatsappLink(`Hello X MOBILES, I am enquiring about ${service.title}.`)} target="_blank" rel="noreferrer">Ask us ↗</a>
              </article>
            ))}
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="contact-left">
            <div className="section-kicker">04 / GET IN TOUCH</div>
            <h2>Let's talk<br /><em>technology.</em></h2>
            <p>Have a question or looking for something specific? Send us an enquiry on WhatsApp or visit our store.</p>
            <div className="contact-details">
              <div><small>CALL US</small><a href={`tel:+91${PHONE}`}>{phoneDisplay}</a></div>
              <div><small>EMAIL US</small><a href={emailHref}>{emailAddress}</a></div>
              <div><small>VISIT OUR STORE</small><a href="https://www.google.com/maps/search/?api=1&query=1%2F44E%2C%2060%20Feet%20Main%20Road%2C%20Velliyankadu%2C%20Tiruppur%20641604" target="_blank" rel="noreferrer">{address} ↗</a></div>
              <div><small>FOLLOW US</small><a href={instagram} target="_blank" rel="noreferrer">@x_mobiles_tirupur ↗</a></div>
            </div>
          </div>
          <div className="form-panel">
            <div className="form-title"><span>ENQUIRY FORM</span><span className="form-star">✳</span></div>
            <form onSubmit={submitEnquiry}>
              <label>Your name<input required value={form.name} onChange={e => setForm({...form, name:e.target.value})} placeholder="Enter your name" /></label>
              <label>Phone number<input required type="tel" pattern="[0-9 \x2B\x2D]{8,15}" value={form.phone} onChange={e => setForm({...form, phone:e.target.value})} placeholder="Your contact number" /></label>
              <label>What are you looking for?
                <select value={form.interest} onChange={e => setForm({...form, interest:e.target.value})}>
                  <option>Mobile enquiry</option><option>Laptop enquiry</option><option>Accessories</option><option>Mobile service</option><option>Hardware / software service</option><option>Other</option>
                </select>
              </label>
              <label>Message<textarea rows="3" value={form.message} onChange={e => setForm({...form, message:e.target.value})} placeholder="Tell us how we can help" /></label>
              <button className="btn btn-yellow submit-btn" type="submit">Send enquiry on WhatsApp <span>↗</span></button>
              <small className="form-note">Your message will open in WhatsApp so you can review and send it.</small>
            </form>
          </div>
        </section>

        <section className="feedback section">
          <div><div className="section-kicker">05 / YOUR WORDS MATTER</div><h2>Share your <em>feedback.</em></h2><p className="muted">Tell us about your experience at X MOBILES.</p></div>
          <form className="feedback-form" onSubmit={submitFeedback}>
            <label>Name<input required value={feedback.name} onChange={e => setFeedback({...feedback,name:e.target.value})} placeholder="Your name" /></label>
            <label>Rating<select value={feedback.rating} onChange={e => setFeedback({...feedback,rating:e.target.value})}><option value="5">★★★★★ — Excellent</option><option value="4">★★★★ — Good</option><option value="3">★★★ — Average</option><option value="2">★★ — Needs improvement</option><option value="1">★ — Poor</option></select></label>
            <label className="full-field">Feedback<textarea required rows="3" value={feedback.message} onChange={e => setFeedback({...feedback,message:e.target.value})} placeholder="Write your feedback" /></label>
            <button className="btn btn-dark" type="submit">Send feedback ↗</button>
          </form>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-brand"><img src="/images/x-mobiles-logo.jpeg" alt="X Mobiles" /><p>Sales · Service · Accessories</p></div>
        <div className="footer-links"><a href="#home">Back to top ↑</a><a href={instagram} target="_blank" rel="noreferrer">Instagram ↗</a><a href={whatsappLink("Hello X MOBILES.")} target="_blank" rel="noreferrer">WhatsApp ↗</a><a href={emailHref}>Email ↗</a></div>
        <div className="footer-contact"><a href={`tel:+91${PHONE}`}>{phoneDisplay}</a><a href={emailHref}>{emailAddress}</a></div>
        <div className="copyright">© {new Date().getFullYear()} X MOBILES, Tiruppur. All rights reserved.</div>
      </footer>

      <a className="floating-wa" href={whatsappLink("Hello X MOBILES, I need some information.")} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp">☏</a>
    </div>
  );
}

export default App;