/* =====================================================
   VASILEIOS KARAGIANNIDIS — PORTFOLIO SCRIPT
   ===================================================== */

const translations = {
  el: {
    // Nav
    "nav.about": "Σχετικά",
    "nav.experience": "Εμπειρία",
    "nav.skills": "Δεξιότητες",
    "nav.projects": "Έργα",
    "nav.contact": "Επικοινωνία",

    // Hero
    "hero.badge": "Διαθέσιμος για ευκαιρίες",
    "hero.title1": "ΒΑΣΙΛΕΙΟΣ",
    "hero.title2": "ΚΑΡΑΓΙΑΝΝΙΔΗΣ",
    "hero.role": "Junior Software / Embedded Engineer · Robotics Researcher",
    "hero.desc": "Τελειόφοιτος Μηχανικός Πληροφορικής με εμπειρία σε Python, embedded systems (ESP32, Raspberry Pi) και έρευνα σε computer vision με το ρομπότ Spot της Boston Dynamics. Αντιπρόεδρος IEEE — αναζητώ θέση πρακτικής ή Junior σε Software, Embedded, Robotics ή IoT.",
    "hero.cta1": "Δες τα έργα μου",
    "hero.cta2": "Κατέβασε το CV",
    "hero.scroll": "scroll",

    // About
    "about.title": "Σχετικά με μένα",
    "about.p1": "Είμαι τελειόφοιτος <strong>Μηχανικός Πληροφορικής & Ηλεκτρονικών Συστημάτων</strong> στο Διεθνές Πανεπιστήμιο της Ελλάδος. Δουλεύω καθημερινά με <strong>Python, embedded systems και ρομποτική</strong>.",
    "about.p2": "Στο ερευνητικό μου έργο επεξεργάζομαι το <strong>vision system του Spot</strong> (Boston Dynamics) στο NVIDIA Isaac Sim και υλοποιώ tasks <strong>mobile manipulation</strong> — αυτόνομη πλοήγηση και pick & place αντικειμένων. Παράλληλα είμαι <strong>αντιπρόεδρος του IEEE IHU Student Branch</strong>, συν-διοργανωτής του διήμερου IEEEtcon 2026, του διαγωνισμού IEEE Extreme και πολλαπλών τεχνικών workshops.",
    "about.p3": "Πέντε χρόνια ως <strong>Coach Κουζίνας στα KFC</strong> με δίδαξαν ηγεσία, οργάνωση και διαχείριση πίεσης — δεξιότητες που εφαρμόζω και στην τεχνική μου δουλειά. Σύντομα ξεκινώ εθελοντισμό για τον οργανισμό <strong>TechSaloniki</strong>.",
    "about.stat1": "χρόνια ηγετικού ρόλου",
    "about.stat2": "δημόσια projects στο GitHub",
    "about.stat3": "γλώσσες προγραμματισμού",
    "about.stat4": "IEEEtcon συνέδρια",

    // Experience
    "exp.title": "Εμπειρία & Σπουδές",
    "exp.tag.research": "ΕΡΕΥΝΑ",
    "exp.tag.lead": "ΗΓΕΣΙΑ",
    "exp.tag.work": "ΕΡΓΑΣΙΑ",
    "exp.tag.edu": "ΣΠΟΥΔΕΣ",
    "exp.now": "Σήμερα",
    "exp.now2": "Σήμερα",
    "exp.r1.title": "Ερευνητής — Robotic Simulation & Vision",
    "exp.r1.b1": "Επεξεργασία του vision system του Spot — άντληση & ανάλυση οπτικών δεδομένων",
    "exp.r1.b2": "Mobile manipulation: αυτόνομη πλοήγηση και pick & place αντικειμένων",
    "exp.r1.b3": "Ανάπτυξη χώρου προσομοίωσης σε NVIDIA Isaac Sim για το Spot της Boston Dynamics",
    "exp.r2.title": "Αντιπρόεδρος — IEEE IHU Student Branch",
    "exp.r2.b1": "Συν-διοργανωτής του διήμερου συνεδρίου IEEEtcon 2026 — ομιλητές, εταιρείες, χορηγοί",
    "exp.r2.b2": "Συμμετοχή στον διεθνή διαγωνισμό IEEE Extreme (Οκτ. 2025) με υψηλή κατάταξη",
    "exp.r2.b3": "Διοργάνωση τεχνικών workshops: «Μικροελεγκτές» & «Μικροελεγκτές + Ρομποτική»",
    "exp.r3.title": "Coach Κουζίνας",
    "exp.r3.b1": "Εκπαίδευση και καθοδήγηση προσωπικού κουζίνας",
    "exp.r3.b2": "Διαχείριση βαρδιών και ροής εργασιών υπό πίεση",
    "exp.r3.b3": "Διασφάλιση τήρησης προτύπων Food Safety",
    "exp.r4.title": "Μηχανικός Πληροφορικής & Ηλεκτρονικών Συστημάτων",
    "exp.r4.b1": "Εξειδίκευση: Πληροφορική και Προγραμματισμός",

    // Skills
    "skills.title": "Δεξιότητες & Tech Stack",
    "skills.c1.title": "Γλώσσες Προγραμματισμού",
    "skills.c2.title": "Python Stack",
    "skills.c2.l4": "Automation scripts",
    "skills.c3.title": "Embedded & Hardware",
    "skills.c3.l3": "Μικροελεγκτές",
    "skills.c3.l4": "Σχεδίαση Κυκλωμάτων",
    "skills.c4.title": "Ρομποτική & Vision",
    "skills.c5.title": "Εργαλεία & Πλατφόρμες",
    "skills.c6.title": "Soft Skills",
    "skills.c6.l1": "Ηγεσία",
    "skills.c6.l2": "Ομαδική εργασία",
    "skills.c6.l3": "Διαχείριση πίεσης",
    "skills.c6.l4": "Επικοινωνία",
    "skills.c7.title": "Γλώσσες",
    "skills.c7.l1": "Ελληνικά — Μητρική",
    "skills.c7.l2": "Αγγλικά — B2",
    "skills.c8.title": "Τομείς Ενδιαφέροντος",
    "skills.certs": "Πιστοποιήσεις",

     // Thesis
    "thesis.badge": "ΠΤΥΧΙΑΚΗ ΕΡΓΑΣΙΑ · ΣΕ ΕΞΕΛΙΞΗ",
    "thesis.title": "DIY Ρομποτικός Βραχίονας",
    "thesis.subtitle": "Σχεδίαση & ανάπτυξη DIY robotic arm με σταθερό χειρισμό αντικειμένων — από αυγό έως 2kg",
    "thesis.desc": "Αναπτύσσω έναν <strong>DIY ρομποτικό βραχίονα</strong> ικανό να σηκώνει σταθερά <strong>αντικείμενα από 500g έως 2kg</strong> με την απαραίτητη ευαισθησία ώστε να μπορεί να πιάσει <strong>ακόμα και ένα αυγό χωρίς να σπάσει</strong>. Δουλεύω πάνω στην <strong>κινηματική</strong> του και αναζητώ τη βέλτιστη προσέγγιση για ομαλή και ακριβή κίνηση.",
    "thesis.pillar1.title": "Κινηματική",
    "thesis.pillar1.desc": "Forward / Inverse Kinematics — αναζήτηση βέλτιστου αλγορίθμου",
    "thesis.pillar2.title": "Hardware",
    "thesis.pillar2.desc": "Πολλαπλά stepper motors, Raspberry Pi 5 + 2× Raspberry Pi Pico",
    "thesis.pillar3.title": "Software",
    "thesis.pillar3.desc": "Ανάπτυξη control software & συντονισμός controllers",
    "thesis.pillar4.title": "Στόχος",
    "thesis.pillar4.desc": "Σταθερότητα + ευαισθησία: από αυγό μέχρι 2kg",

    // Projects
    "proj.title": "Έργα",
    "proj.intro": "Επιλεγμένα projects από το GitHub μου — embedded systems, Python automation, ρομποτική και front-end.",
    "proj.p1.title": "Security System with ESP32",
    "proj.p1.desc": "Σύστημα ασφαλείας βασισμένο σε ESP32 — αισθητήρες, ειδοποιήσεις σε πραγματικό χρόνο και έλεγχος.",
    "proj.p2.title": "automailforieee",
    "proj.p2.desc": "Αυτοματοποιημένη αποστολή email για το συνέδριο IEEEtcon — ομιλητές, χορηγοί, συμμετέχοντες.",
    "proj.p3.title": "automailtech",
    "proj.p3.desc": "Αυτόματη αποστολή email προς λίστα tech εταιρειών — εργαλείο cold outreach.",
    "proj.p4.title": "YouTube → MP3 Downloader",
    "proj.p4.desc": "Επιτραπέζια εφαρμογή για γρήγορη μετατροπή YouTube βίντεο σε MP3, με καθαρό GUI.",
    "proj.p5.title": "Movie Planner",
    "proj.p5.desc": "Online real-time λίστα με ταινίες προς παρακολούθηση — προσωπικό watchlist.",
    "proj.p6.title": "ItsMyBirthday",
    "proj.p6.desc": "Προσωπική ιστοσελίδα-πρόσκληση γενεθλίων — interactive front-end project.",
    "proj.p7.title": "Fast-Food App",
    "proj.p7.desc": "Εφαρμογή διαχείρισης παραγγελιών για κατάστημα fast food — εμπνευσμένη από τα KFC.",
    "proj.p8.title": "Spot — Vision & Mobile Manipulation",
    "proj.p8.desc": "Ερευνητικό έργο: επεξεργασία vision data του Spot, αυτόνομη πλοήγηση και pick & place στο Isaac Sim.",
    "proj.more": "Όλα τα έργα στο GitHub",

    // Contact
    "contact.title": "Επικοινωνία",
    "contact.heading": "Ας συνδεθούμε.",
    "contact.desc": "Είμαι ανοιχτός σε ευκαιρίες πρακτικής, Junior θέσεις σε Software/Embedded/Robotics, ερευνητικές συνεργασίες και ενδιαφέρουσες συζητήσεις γύρω από tech.",
    "contact.location": "Θεσσαλονίκη, Ελλάδα",
    "form.name": "Όνομα",
    "form.subject": "Θέμα",
    "form.message": "Μήνυμα",
    "form.submit": "Αποστολή Μηνύματος",
    "form.success": "Το μήνυμα στάλθηκε! Θα σου απαντήσω σύντομα.",
    "form.error": "Κάτι πήγε στραβά. Δοκίμασε ξανά ή στείλε email απευθείας.",
    "form.sending": "Αποστολή...",

    // Footer
    "footer.tagline": "Engineer · Researcher · Always learning",
    "footer.built": "Built with HTML, CSS & ♥",
  },

  en: {
    "nav.about": "About",
    "nav.experience": "Experience",
    "nav.skills": "Skills",
    "nav.projects": "Projects",
    "nav.contact": "Contact",

    "hero.badge": "Available for opportunities",
    "hero.title1": "VASILEIOS",
    "hero.title2": "KARAGIANNIDIS",
    "hero.role": "Junior Software / Embedded Engineer · Robotics Researcher",
    "hero.desc": "Final-year Computer Engineering student with experience in Python, embedded systems (ESP32, Raspberry Pi) and research in computer vision with the Boston Dynamics Spot robot. IEEE Vice President — seeking internship or Junior position in Software, Embedded, Robotics or IoT.",
    "hero.cta1": "View my work",
    "hero.cta2": "Download CV",
    "hero.scroll": "scroll",

    "about.title": "About Me",
    "about.p1": "I am a final-year <strong>Computer & Electronic Systems Engineering</strong> student at the International Hellenic University. I work daily with <strong>Python, embedded systems and robotics</strong>.",
    "about.p2": "In my research I work on the <strong>Spot vision system</strong> (Boston Dynamics) in NVIDIA Isaac Sim and implement <strong>mobile manipulation</strong> tasks — autonomous navigation and object pick & place. I'm also <strong>Vice President of the IEEE IHU Student Branch</strong>, co-organizer of the two-day IEEEtcon 2026 conference, the IEEE Extreme competition, and multiple technical workshops.",
    "about.p3": "Five years as a <strong>Kitchen Coach at KFC</strong> taught me leadership, organization and pressure management — skills I apply to my technical work too. I'm soon starting volunteer work with the <strong>TechSaloniki</strong> organization.",
    "about.stat1": "years in a leadership role",
    "about.stat2": "public GitHub projects",
    "about.stat3": "programming languages",
    "about.stat4": "IEEEtcon conferences",

    "exp.title": "Experience & Education",
    "exp.tag.research": "RESEARCH",
    "exp.tag.lead": "LEADERSHIP",
    "exp.tag.work": "WORK",
    "exp.tag.edu": "EDUCATION",
    "exp.now": "Present",
    "exp.now2": "Present",
    "exp.r1.title": "Researcher — Robotic Simulation & Vision",
    "exp.r1.b1": "Working on the Spot vision system — extracting & processing visual data",
    "exp.r1.b2": "Mobile manipulation: autonomous navigation and object pick & place",
    "exp.r1.b3": "Simulation environment development in NVIDIA Isaac Sim for the Boston Dynamics Spot",
    "exp.r2.title": "Vice President — IEEE IHU Student Branch",
    "exp.r2.b1": "Co-organizer of the two-day IEEEtcon 2026 conference — speakers, companies, sponsors",
    "exp.r2.b2": "Participation in the international IEEE Extreme competition (Oct. 2025) with a high ranking",
    "exp.r2.b3": "Organized technical workshops: 'Microcontrollers' & 'Microcontrollers + Robotics'",
    "exp.r3.title": "Kitchen Coach",
    "exp.r3.b1": "Training and mentoring of kitchen staff",
    "exp.r3.b2": "Shift management and workflow under pressure",
    "exp.r3.b3": "Enforcement of Food Safety standards",
    "exp.r4.title": "Computer & Electronic Systems Engineering",
    "exp.r4.b1": "Specialization: Computer Science & Programming",

    "skills.title": "Skills & Tech Stack",
    "skills.c1.title": "Programming Languages",
    "skills.c2.title": "Python Stack",
    "skills.c2.l4": "Automation scripts",
    "skills.c3.title": "Embedded & Hardware",
    "skills.c3.l3": "Microcontrollers",
    "skills.c3.l4": "Circuit Design",
    "skills.c4.title": "Robotics & Vision",
    "skills.c5.title": "Tools & Platforms",
    "skills.c6.title": "Soft Skills",
    "skills.c6.l1": "Leadership",
    "skills.c6.l2": "Teamwork",
    "skills.c6.l3": "Pressure Management",
    "skills.c6.l4": "Communication",
    "skills.c7.title": "Languages",
    "skills.c7.l1": "Greek — Native",
    "skills.c7.l2": "English — B2",
    "skills.c8.title": "Areas of Interest",
    "skills.certs": "Certifications",

     // Thesis
    "thesis.badge": "BACHELOR THESIS · IN PROGRESS",
    "thesis.title": "DIY Robotic Arm",
    "thesis.subtitle": "Design & development of a DIY robotic arm with stable object handling — from an egg up to 2kg",
    "thesis.desc": "I'm developing a <strong>DIY robotic arm</strong> capable of stably lifting <strong>objects from 500g up to 2kg</strong>, with the precision required to <strong>grip an egg without breaking it</strong>. Currently working on the <strong>kinematics</strong> and exploring the optimal approach for smooth, accurate motion.",
    "thesis.pillar1.title": "Kinematics",
    "thesis.pillar1.desc": "Forward / Inverse Kinematics — searching for the optimal algorithm",
    "thesis.pillar2.title": "Hardware",
    "thesis.pillar2.desc": "Multiple stepper motors, Raspberry Pi 5 + 2× Raspberry Pi Pico",
    "thesis.pillar3.title": "Software",
    "thesis.pillar3.desc": "Control software development & multi-controller coordination",
    "thesis.pillar4.title": "Goal",
    "thesis.pillar4.desc": "Stability + sensitivity: from an egg to 2kg",

    "proj.title": "Projects",
    "proj.intro": "Selected projects from my GitHub — embedded systems, Python automation, robotics and front-end.",
    "proj.p1.title": "Security System with ESP32",
    "proj.p1.desc": "ESP32-based security system — sensors, real-time alerts and control.",
    "proj.p2.title": "automailforieee",
    "proj.p2.desc": "Automated email sending for the IEEEtcon conference — speakers, sponsors, attendees.",
    "proj.p3.title": "automailtech",
    "proj.p3.desc": "Automated emails to a list of tech companies — cold outreach tool.",
    "proj.p4.title": "YouTube → MP3 Downloader",
    "proj.p4.desc": "Desktop app for quick YouTube video to MP3 conversion, with a clean GUI.",
    "proj.p5.title": "Movie Planner",
    "proj.p5.desc": "Online real-time movie watchlist — personal organization tool.",
    "proj.p6.title": "ItsMyBirthday",
    "proj.p6.desc": "Personal birthday invitation website — interactive front-end project.",
    "proj.p7.title": "Fast-Food App",
    "proj.p7.desc": "Order management application for a fast-food store — inspired by my KFC days.",
    "proj.p8.title": "Spot — Vision & Mobile Manipulation",
    "proj.p8.desc": "Research project: Spot vision data processing, autonomous navigation and pick & place in Isaac Sim.",
    "proj.more": "All projects on GitHub",

    "contact.title": "Contact",
    "contact.heading": "Let's connect.",
    "contact.desc": "I'm open to internship opportunities, Junior positions in Software/Embedded/Robotics, research collaborations and interesting tech discussions.",
    "contact.location": "Thessaloniki, Greece",
    "form.name": "Name",
    "form.subject": "Subject",
    "form.message": "Message",
    "form.submit": "Send Message",
    "form.success": "Message sent! I'll get back to you soon.",
    "form.error": "Something went wrong. Try again or email me directly.",
    "form.sending": "Sending...",

    "footer.tagline": "Engineer · Researcher · Always learning",
    "footer.built": "Built with HTML, CSS & ♥",
  },
};

let currentLang = 'el';
try {
  const saved = localStorage.getItem('lang');
  if (saved === 'el' || saved === 'en') currentLang = saved;
} catch (e) {}

function applyTranslations(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;
  try { localStorage.setItem('lang', lang); } catch (e) {}

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    const txt = translations[lang][key];
    if (txt !== undefined) {
      if (txt.includes('<')) el.innerHTML = txt;
      else el.textContent = txt;
    }
  });

  const cvBtn = document.getElementById('cvDownload');
  if (cvBtn) {
    cvBtn.href = lang === 'el'
      ? 'cv/Karagiannidis_CV_EL.pdf'
      : 'cv/Karagiannidis_CV_EN.pdf';
  }

  document.querySelectorAll('.lang-toggle__option').forEach((opt) => {
    opt.classList.toggle('active', opt.getAttribute('data-lang') === lang);
  });

  document.title = lang === 'el'
    ? 'Βασίλειος Καραγιαννίδης — Junior Software / Embedded Engineer'
    : 'Vasileios Karagiannidis — Junior Software / Embedded Engineer';
}

const langToggle = document.getElementById('langToggle');
if (langToggle) {
  langToggle.addEventListener('click', (e) => {
    const clickedOption = e.target.closest('.lang-toggle__option');
    if (clickedOption) {
      const lang = clickedOption.getAttribute('data-lang');
      if (lang && lang !== currentLang) applyTranslations(lang);
    } else {
      applyTranslations(currentLang === 'el' ? 'en' : 'el');
    }
  });
}

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
);
document.querySelectorAll('.reveal-up').forEach((el) => revealObserver.observe(el));

const nav = document.getElementById('nav');
function handleScroll() {
  if (!nav) return;
  nav.classList.toggle('scrolled', window.scrollY > 30);
}
window.addEventListener('scroll', handleScroll, { passive: true });

function animateCounter(el) {
  const target = parseInt(el.getAttribute('data-count'), 10) || 0;
  const suffix = el.getAttribute('data-suffix') || '';
  const duration = 1500;
  const start = performance.now();
  function tick(now) {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const value = Math.round(target * eased);
    el.textContent = value + (progress === 1 ? suffix : '');
    if (progress < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}
const counterObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        counterObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.5 }
);
document.querySelectorAll('.stat__num').forEach((el) => counterObserver.observe(el));

document.querySelectorAll('.skill-card').forEach((card) => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    card.style.setProperty('--mx', x + '%');
    card.style.setProperty('--my', y + '%');
  });
});

const form = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');
if (form) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const action = form.getAttribute('action');
    if (!action || action.includes('YOUR_FORM_ID')) {
      const name = encodeURIComponent(form.name.value);
      const email = encodeURIComponent(form.email.value);
      const subject = encodeURIComponent(form.subject.value);
      const message = encodeURIComponent(
        `${form.message.value}\n\n— ${form.name.value} (${form.email.value})`
      );
      window.location.href =
        `mailto:billykaragian1502@gmail.com?subject=${subject}&body=${message}`;
      formStatus.textContent = currentLang === 'el'
        ? 'Άνοιξε το email πρόγραμμα για να ολοκληρώσεις την αποστολή.'
        : 'Your email client has opened to send the message.';
      formStatus.className = 'form__status success';
      return;
    }
    const submitBtn = form.querySelector('.form__submit');
    const originalBtnText = submitBtn.querySelector('span').textContent;
    submitBtn.querySelector('span').textContent = translations[currentLang]['form.sending'];
    submitBtn.disabled = true;
    formStatus.textContent = '';
    formStatus.className = 'form__status';
    try {
      const response = await fetch(action, {
        method: 'POST',
        body: new FormData(form),
        headers: { 'Accept': 'application/json' },
      });
      if (response.ok) {
        formStatus.textContent = translations[currentLang]['form.success'];
        formStatus.className = 'form__status success';
        form.reset();
      } else { throw new Error('Submission failed'); }
    } catch (err) {
      formStatus.textContent = translations[currentLang]['form.error'];
      formStatus.className = 'form__status error';
    } finally {
      submitBtn.querySelector('span').textContent = originalBtnText;
      submitBtn.disabled = false;
    }
  });
}

const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

applyTranslations(currentLang);
handleScroll();

document.querySelectorAll('a[href^="#"]').forEach((a) => {
  a.addEventListener('click', (e) => {
    const id = a.getAttribute('href');
    if (id.length < 2) return;
    const target = document.querySelector(id);
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});
