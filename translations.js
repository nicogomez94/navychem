const translations = [
  ['.site-header nav a[href="#nosotros"], .mobile-nav a[href="#nosotros"]', 'ABOUT US', 'ΣΧΕΤΙΚΑ ΜΕ ΕΜΑΣ'],
  ['.site-header nav a[href="#soluciones"], .mobile-nav a[href="#soluciones"]', 'SOLUTIONS', 'ΛΥΣΕΙΣ'],
  ['.site-header nav a[href="#productos"], .mobile-nav a[href="#productos"]', 'PRODUCTS', 'ΠΡΟΪΟΝΤΑ'],
  ['.nav-contact', 'CONTACT <span>↗</span>', 'ΕΠΙΚΟΙΝΩΝΙΑ <span>↗</span>'],
  ['.mobile-nav a[href="#contacto"]', 'CONTACT', 'ΕΠΙΚΟΙΝΩΝΙΑ'],
  ['.hero__eyebrow span:first-child', 'MARITIME INDUSTRY / ARGENTINA', 'ΝΑΥΤΙΛΙΑΚΗ ΒΙΟΜΗΧΑΝΙΑ / ΑΡΓΕΝΤΙΝΗ'],
  ['.hero__eyebrow span:last-child', 'FROM BUENOS AIRES', 'ΑΠΟ ΤΟ ΜΠΟΥΕΝΟΣ ΑΪΡΕΣ'],
  ['.hero__pretitle', 'FOR THE CHALLENGES OF EVERY PORT', 'ΓΙΑ ΤΙΣ ΠΡΟΚΛΗΣΕΙΣ ΚΑΘΕ ΛΙΜΑΝΙΟΥ'],
  ['.hero h1', 'THE SEA<br /><em>MOVES US.</em>', 'Η ΘΑΛΑΣΣΑ<br /><em>ΜΑΣ ΚΙΝΕΙ.</em>'],
  ['.hero__description', 'Marine chemicals, equipment and solutions to support every operation on board.', 'Ναυτιλιακά χημικά, εξοπλισμός και λύσεις για κάθε εργασία επί του πλοίου.'],
  ['.hero .button', 'EXPLORE SOLUTIONS <span>↗</span>', 'ΔΕΙΤΕ ΤΙΣ ΛΥΣΕΙΣ <span>↗</span>'],
  ['.hero__foot > span', 'A NEW DIRECTION', 'ΜΙΑ ΝΕΑ ΠΟΡΕΙΑ'],
  ['.hero__foot a', 'SCROLL TO EXPLORE <span>↓</span>', 'ΚΥΛΗΣΤΕ ΓΙΑ ΝΑ ΜΑΘΕΤΕ <span>↓</span>'],
  ['.hero-slide[data-slide="0"] .hero-slide__label span', 'OPERATIONS IN MOTION', 'ΕΡΓΑΣΙΕΣ ΣΕ ΚΙΝΗΣΗ'],
  ['.hero-slide[data-slide="0"] .hero-slide__label strong', 'CARGO VESSEL', 'ΦΟΡΤΗΓΟ ΠΛΟΙΟ'],
  ['.hero-slide[data-slide="1"] .hero-slide__label span', 'ALONGSIDE EVERY OPERATION', 'ΔΙΠΛΑ ΣΕ ΚΑΘΕ ΕΡΓΑΣΙΑ'],
  ['.hero-slide[data-slide="1"] .hero-slide__label strong', 'SUPPORT VESSEL', 'ΠΛΟΙΟ ΥΠΟΣΤΗΡΙΞΗΣ'],
  ['.ticker__track span', 'MARINE CHEMICALS <i>✳</i> EQUIPMENT <i>✳</i> MARITIME SOLUTIONS <i>✳</i>', 'ΝΑΥΤΙΛΙΑΚΑ ΧΗΜΙΚΑ <i>✳</i> ΕΞΟΠΛΙΣΜΟΣ <i>✳</i> ΝΑΥΤΙΛΙΑΚΕΣ ΛΥΣΕΙΣ <i>✳</i>'],
  ['.intro .section-tag', 'WHO WE ARE', 'ΠΟΙΟΙ ΕΙΜΑΣΤΕ'],
  ['.intro__aside', 'NAVYCHEM S.A.<br />BUENOS AIRES, ARGENTINA', 'NAVYCHEM S.A.<br />ΜΠΟΥΕΝΟΣ ΑΪΡΕΣ, ΑΡΓΕΝΤΙΝΗ'],
  ['.intro h2', 'SUPPORT THAT<br />GOES <em>ON BOARD.</em>', 'ΥΠΟΣΤΗΡΙΞΗ<br /><em>ΕΠΙ ΤΟΥ ΠΛΟΙΟΥ.</em>'],
  ['.intro__grid > div > p', 'At Navychem, we focus on the real needs of people working at sea. We bring together chemical solutions and equipment for vessel care, cleaning and operation.', 'Στη Navychem κατανοούμε τις πραγματικές ανάγκες όσων εργάζονται στη θάλασσα. Προσφέρουμε χημικές λύσεις και εξοπλισμό για τη φροντίδα, τον καθαρισμό και τη λειτουργία των πλοίων.'],
  ['.intro .text-link', 'LET’S TALK ABOUT YOUR OPERATION <span>↗</span>', 'ΑΣ ΜΙΛΗΣΟΥΜΕ ΓΙΑ ΤΙΣ ΑΝΑΓΚΕΣ ΣΑΣ <span>↗</span>'],
  ['.solutions .section-tag', 'WHAT WE DO', 'ΤΙ ΚΑΝΟΥΜΕ'],
  ['.solutions h2', 'SOLUTIONS<br /><em>FOR EVERY COURSE.</em>', 'ΛΥΣΕΙΣ<br /><em>ΓΙΑ ΚΑΘΕ ΠΟΡΕΙΑ.</em>'],
  ['.solutions__heading > p', 'A range designed for everyday work on board, from maintenance to the supply of technical products.', 'Μια γκάμα σχεδιασμένη για την καθημερινή εργασία επί του πλοίου, από τη συντήρηση έως την προμήθεια τεχνικών προϊόντων.'],
  ['.solution-row:nth-child(1) h3', 'MARINE CHEMICALS', 'ΝΑΥΤΙΛΙΑΚΑ ΧΗΜΙΚΑ'],
  ['.solution-row:nth-child(1) p', 'Products for cleaning, maintenance and treatment.', 'Προϊόντα καθαρισμού, συντήρησης και επεξεργασίας.'],
  ['.solution-row:nth-child(2) h3', 'VESSEL CLEANING', 'ΚΑΘΑΡΙΣΜΟΣ ΠΛΟΙΩΝ'],
  ['.solution-row:nth-child(2) p', 'Solutions for surfaces, holds and tanks.', 'Λύσεις για επιφάνειες, αμπάρια και δεξαμενές.'],
  ['.solution-row:nth-child(3) h3', 'TREATMENT & TESTING', 'ΕΠΕΞΕΡΓΑΣΙΑ & ΕΛΕΓΧΟΣ'],
  ['.solution-row:nth-child(3) p', 'Supplies for water and onboard system monitoring.', 'Υλικά για τον έλεγχο νερού και συστημάτων επί του πλοίου.'],
  ['.solution-row:nth-child(4) h3', 'MARINE EQUIPMENT', 'ΝΑΥΤΙΛΙΑΚΟΣ ΕΞΟΠΛΙΣΜΟΣ'],
  ['.solution-row:nth-child(4) p', 'Tools and supplies for maritime operations.', 'Εργαλεία και υλικά για ναυτιλιακές εργασίες.'],
  ['.products .section-tag', 'PRODUCT LINES', 'ΚΑΤΗΓΟΡΙΕΣ ΠΡΟΪΟΝΤΩΝ'],
  ['.products h2', 'EVERYTHING THAT<br />KEEPS A VESSEL<br /><em>MOVING.</em>', 'ΟΛΑ ΟΣΑ<br />ΚΡΑΤΟΥΝ ΕΝΑ ΠΛΟΙΟ<br /><em>ΣΕ ΚΙΝΗΣΗ.</em>'],
  ['.products__intro > p', 'Ask us about products, specifications and availability for your operation.', 'Ρωτήστε μας για προϊόντα, προδιαγραφές και διαθεσιμότητα για την εργασία σας.'],
  ['.product-card--chemicals .product-card__details > span', 'MAINTENANCE', 'ΣΥΝΤΗΡΗΣΗ'],
  ['.product-card--chemicals h3', 'MARINE<br />CHEMICALS', 'ΝΑΥΤΙΛΙΑΚΑ<br />ΧΗΜΙΚΑ'],
  ['.product-card--chemicals p', 'Technical cleaning, surface care and treatments for maritime systems.', 'Τεχνικός καθαρισμός, φροντίδα επιφανειών και επεξεργασία ναυτιλιακών συστημάτων.'],
  ['.product-card--testing .product-card__details > span', 'MONITORING', 'ΕΛΕΓΧΟΣ'],
  ['.product-card--testing h3', 'TESTING &<br />TREATMENT', 'ΕΛΕΓΧΟΣ &<br />ΕΠΕΞΕΡΓΑΣΙΑ'],
  ['.product-card--testing p', 'Supplies to monitor and maintain onboard water conditions.', 'Υλικά για τον έλεγχο και τη διατήρηση της ποιότητας του νερού επί του πλοίου.'],
  ['.product-card--equipment .product-card__details > span', 'OPERATIONS', 'ΛΕΙΤΟΥΡΓΙΑ'],
  ['.product-card--equipment h3', 'MARINE<br />EQUIPMENT', 'ΝΑΥΤΙΛΙΑΚΟΣ<br />ΕΞΟΠΛΙΣΜΟΣ'],
  ['.product-card--equipment p', 'Equipment for cleaning, maintenance and operational tasks.', 'Εξοπλισμός για εργασίες καθαρισμού, συντήρησης και λειτουργίας.'],
  ['.statement .section-tag', 'OUR APPROACH', 'Η ΠΡΟΣΕΓΓΙΣΗ ΜΑΣ'],
  ['.statement p', 'OPERATIONS NEVER STOP.<br /><em>NEITHER DOES OUR COMMITMENT TO THEM.</em>', 'ΟΙ ΕΡΓΑΣΙΕΣ ΔΕΝ ΣΤΑΜΑΤΟΥΝ.<br /><em>ΟΥΤΕ Η ΔΙΚΗ ΜΑΣ ΑΦΟΣΙΩΣΗ ΣΕ ΑΥΤΕΣ.</em>'],
  ['.statement .text-link', 'SEE HOW WE CAN HELP <span>↗</span>', 'ΔΕΙΤΕ ΠΩΣ ΜΠΟΡΟΥΜΕ ΝΑ ΒΟΗΘΗΣΟΥΜΕ <span>↗</span>'],
  ['.contact .section-tag', 'CONTACT', 'ΕΠΙΚΟΙΝΩΝΙΑ'],
  ['.contact h2', 'WHERE DO WE<br /><em>GO NEXT?</em>', 'ΠΟΙΑ ΕΙΝΑΙ Η<br /><em>ΕΠΟΜΕΝΗ ΠΟΡΕΙΑ;</em>'],
  ['.contact__intro > p', 'Tell us what your vessel or operation needs. The Navychem team is based in Buenos Aires, Argentina.', 'Πείτε μας τι χρειάζεται το πλοίο ή η επιχείρησή σας. Η ομάδα της Navychem βρίσκεται στο Μπουένος Άιρες της Αργεντινής.'],
  ['.contact-form h3', 'TELL US ABOUT YOUR OPERATION', 'ΠΕΙΤΕ ΜΑΣ ΓΙΑ ΤΙΣ ΑΝΑΓΚΕΣ ΣΑΣ'],
  ['.contact-form__fields label:nth-child(1) span', 'FULL NAME', 'ΟΝΟΜΑΤΕΠΩΝΥΜΟ'],
  ['.contact-form__fields label:nth-child(2) span', 'EMAIL ADDRESS', 'ΔΙΕΥΘΥΝΣΗ EMAIL'],
  ['.contact-form__fields label:nth-child(3) span', 'COUNTRY', 'ΧΩΡΑ'],
  ['.contact-form__fields label:nth-child(4) span', 'SUBJECT', 'ΘΕΜΑ'],
  ['.contact-form__fields label:nth-child(5) span', 'MESSAGE', 'ΜΗΝΥΜΑ'],
  ['.contact-form__footer p', 'The submission confirmation will open in a new tab.', 'Η επιβεβαίωση αποστολής θα ανοίξει σε νέα καρτέλα.'],
  ['.contact-form__footer button', '<span>SEND INQUIRY</span><span aria-hidden="true">↗</span>', '<span>ΑΠΟΣΤΟΛΗ ΜΗΝΥΜΑΤΟΣ</span><span aria-hidden="true">↗</span>'],
  ['.contact__phone > span', 'CALL US', 'ΚΑΛΕΣΤΕ ΜΑΣ'],
  ['.site-footer__main p', 'SOLUTIONS FOR EVERY VOYAGE.<br />BUENOS AIRES, ARGENTINA.', 'ΛΥΣΕΙΣ ΓΙΑ ΚΑΘΕ ΤΑΞΙΔΙ.<br />ΜΠΟΥΕΝΟΣ ΑΪΡΕΣ, ΑΡΓΕΝΤΙΝΗ.'],
  ['.site-footer__main > a:last-child', 'BACK TO TOP ↑', 'ΠΙΣΩ ΣΤΗΝ ΑΡΧΗ ↑'],
  ['.site-footer__bottom > span', 'Made by <a href="https://zigodev.com.ar" target="_blank" rel="noopener noreferrer">zigodev</a>', 'Κατασκευή από <a href="https://zigodev.com.ar" target="_blank" rel="noopener noreferrer">zigodev</a>'],
  ['.site-footer__bottom > small:last-child', 'MARITIME INDUSTRY / ARGENTINA', 'ΝΑΥΤΙΛΙΑΚΗ ΒΙΟΜΗΧΑΝΙΑ / ΑΡΓΕΝΤΙΝΗ']
];

const interfaceCopy = {
  es: {
    language: 'Idioma', openMenu: 'Abrir menú', closeMenu: 'Cerrar menú',
    mainNav: 'Navegación principal', mobileNav: 'Navegación móvil',
    hero: 'Presentación de Navychem', visual: 'Barcos de carga y apoyo marítimo',
    previous: 'Imagen anterior', next: 'Imagen siguiente', choose: 'Elegir imagen',
    cargo: 'Ver buque de carga', support: 'Ver buque de apoyo',
    cargoAlt: 'Buque portacontenedores de casco azul',
    supportAlt: 'Buque de apoyo marítimo de casco azul',
    discover: 'Descubrir más sobre Navychem', approach: 'Nuestro enfoque',
    home: 'Navychem, ir al inicio', top: 'Navychem, volver al inicio',
    title: 'Navychem — Soluciones para cada travesía',
    description: 'Navychem S.A. Soluciones para la operación marítima: químicos navales, limpieza, tratamiento de aguas y equipamiento. Buenos Aires, Argentina.',
    ogDescription: 'Productos y soluciones para el trabajo en el mar.'
  },
  en: {
    language: 'Language', openMenu: 'Open menu', closeMenu: 'Close menu',
    mainNav: 'Main navigation', mobileNav: 'Mobile navigation',
    hero: 'Introducing Navychem', visual: 'Cargo and maritime support vessels',
    previous: 'Previous image', next: 'Next image', choose: 'Choose image',
    cargo: 'View cargo vessel', support: 'View support vessel',
    cargoAlt: 'Blue-hulled container ship', supportAlt: 'Blue-hulled maritime support vessel',
    discover: 'Discover more about Navychem', approach: 'Our approach',
    home: 'Navychem, go to home', top: 'Navychem, back to top',
    title: 'Navychem — Solutions for every voyage',
    description: 'Navychem S.A. Maritime solutions: marine chemicals, cleaning, water treatment and equipment. Buenos Aires, Argentina.',
    ogDescription: 'Products and solutions for work at sea.'
  },
  el: {
    language: 'Γλώσσα', openMenu: 'Άνοιγμα μενού', closeMenu: 'Κλείσιμο μενού',
    mainNav: 'Κύρια πλοήγηση', mobileNav: 'Πλοήγηση κινητού',
    hero: 'Παρουσίαση της Navychem', visual: 'Φορτηγά και βοηθητικά πλοία',
    previous: 'Προηγούμενη εικόνα', next: 'Επόμενη εικόνα', choose: 'Επιλογή εικόνας',
    cargo: 'Προβολή φορτηγού πλοίου', support: 'Προβολή πλοίου υποστήριξης',
    cargoAlt: 'Πλοίο μεταφοράς εμπορευματοκιβωτίων με μπλε κύτος',
    supportAlt: 'Πλοίο ναυτιλιακής υποστήριξης με μπλε κύτος',
    discover: 'Μάθετε περισσότερα για τη Navychem', approach: 'Η προσέγγισή μας',
    home: 'Navychem, μετάβαση στην αρχή', top: 'Navychem, επιστροφή στην αρχή',
    title: 'Navychem — Λύσεις για κάθε ταξίδι',
    description: 'Navychem S.A. Ναυτιλιακές λύσεις: χημικά, καθαρισμός, επεξεργασία νερού και εξοπλισμός. Μπουένος Άιρες, Αργεντινή.',
    ogDescription: 'Προϊόντα και λύσεις για την εργασία στη θάλασσα.'
  }
};

const translatedElements = translations.map(([selector, en, el]) => ({
  elements: [...document.querySelectorAll(selector)],
  es: [...document.querySelectorAll(selector)].map((element) => element.innerHTML),
  en,
  el
}));

function setLanguage(language) {
  const selected = interfaceCopy[language] ? language : 'es';
  const ui = interfaceCopy[selected];

  translatedElements.forEach((entry) => {
    entry.elements.forEach((element, index) => {
      element.innerHTML = selected === 'es' ? entry.es[index] : entry[selected];
    });
  });

  document.documentElement.lang = selected;
  document.title = ui.title;
  document.querySelector('meta[name="description"]').content = ui.description;
  document.querySelector('meta[property="og:title"]').content = ui.title;
  document.querySelector('meta[property="og:description"]').content = ui.ogDescription;
  document.querySelector('.language-select .sr-only').textContent = ui.language;
  document.querySelector('#language').ariaLabel = ui.language;
  document.querySelector('.site-header .brand').ariaLabel = ui.home;
  document.querySelector('.site-footer .brand').ariaLabel = ui.top;
  document.querySelector('.site-header nav').ariaLabel = ui.mainNav;
  document.querySelector('.mobile-nav').ariaLabel = ui.mobileNav;
  document.querySelector('.hero').ariaLabel = ui.hero;
  document.querySelector('.hero__visual').ariaLabel = ui.visual;
  document.querySelector('.hero__foot a').ariaLabel = ui.discover;
  document.querySelector('.statement').ariaLabel = ui.approach;
  document.querySelector('.hero-slide__ship--cargo').alt = ui.cargoAlt;
  document.querySelector('.hero-slide__ship--support').alt = ui.supportAlt;
  document.querySelector('.hero__controls').ariaLabel = ui.choose;
  document.querySelector('.slide-dots').ariaLabel = ui.choose;
  document.querySelector('[data-direction="-1"]').ariaLabel = ui.previous;
  document.querySelector('[data-direction="1"]').ariaLabel = ui.next;
  document.querySelector('[data-goto="0"]').ariaLabel = ui.cargo;
  document.querySelector('[data-goto="1"]').ariaLabel = ui.support;
  document.querySelector('.menu-toggle').ariaLabel = document.querySelector('.menu-toggle').getAttribute('aria-expanded') === 'true' ? ui.closeMenu : ui.openMenu;
  document.querySelector('#language').value = selected;

  try {
    localStorage.setItem('navychem-language', selected);
  } catch (_) {
    // The language still changes if storage is unavailable.
  }
}

let initialLanguage = 'es';
try {
  initialLanguage = localStorage.getItem('navychem-language') || 'es';
} catch (_) {
  // Use Spanish when storage is unavailable.
}

setLanguage(initialLanguage);
document.querySelector('#language').addEventListener('change', (event) => setLanguage(event.target.value));
window.siteI18n = { t: (key) => interfaceCopy[document.documentElement.lang][key] };
