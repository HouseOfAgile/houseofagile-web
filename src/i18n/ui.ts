export type Lang = 'en' | 'de' | 'fr';

export const ui = {
  en: {
    // Navigation
    'nav.services': 'Services',
    'nav.caseStudies': 'Work',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'nav.cta': 'Get a Quote →',
    'nav.ctaPrefix': '',
    'nav.ctaShort': 'Get a Quote →',

    // Hero
    'home.hero.title': 'Modernize operations.',
    'home.hero.title2': 'Automate workflows.',
    'home.hero.title3': 'Build what matters.',
    'home.hero.description': 'House of Agile is a senior technology consultancy that helps businesses replace manual processes, disconnected tools, and legacy systems with practical, AI-enabled solutions that actually work.',
    'home.hero.ctaPrimary': 'Get a Quote',
    'home.hero.ctaSecondary': 'See How We Help',
    'home.hero.credibility': [
      '20 years of enterprise & startup delivery',
      'Platforms scaled to 30M+ users',
      'AI-enabled workflow automation',
      'Principal-led, hands-on execution',
    ],

    // Services section (homepage)
    'home.services.label': 'What We Do',
    'home.services.title': 'Senior consulting meets hands-on delivery',
    'home.services.subtitle': 'We help businesses that have outgrown spreadsheets, disconnected tools, or legacy systems - but aren\'t ready to hire a full technical team.',
    'home.services.learnMore': 'Learn more →',

    // Service cards (homepage) - 5 pillars
    'home.services.cto.title': 'Fractional CTO & Technical Leadership',
    'home.services.cto.desc': 'Strategic technology direction for businesses that need senior guidance without a full-time hire.',
    'home.services.cto.items': ['Technology strategy & roadmap', 'Team hiring and architecture decisions', 'Technical due diligence & vendor assessment'],
    'home.services.automation.title': 'AI-Enabled Workflow Automation',
    'home.services.automation.desc': 'Turn manual, repetitive business processes into reliable automated systems using practical AI.',
    'home.services.automation.items': ['Process mapping & automation design', 'AI integration for real business tasks', 'System integration & data pipelines'],
    'home.services.platforms.title': 'Internal Tools & Business Platforms',
    'home.services.platforms.desc': 'Custom platforms that replace the mess of spreadsheets, manual steps, and disconnected SaaS tools.',
    'home.services.platforms.items': ['Admin panels & operational dashboards', 'Booking, CRM, and workflow systems', 'API integrations with existing tools'],
    'home.services.modernization.title': 'Legacy Modernization & System Rescue',
    'home.services.modernization.desc': 'Stabilize, modernize, or replace aging systems without disrupting your business.',
    'home.services.modernization.items': ['Legacy code audit & stabilization', 'Incremental modernization strategy', 'Infrastructure & DevOps improvements'],
    'home.services.product.title': 'Product & Delivery Leadership',
    'home.services.product.desc': 'End-to-end product leadership for ambitious digital projects - from concept to production.',
    'home.services.product.items': ['MVP architecture & rapid validation', 'Technical product management', 'Team coordination & delivery oversight'],
    'home.services.devops.title': 'DevOps & Cloud Infrastructure',
    'home.services.devops.desc': 'CI/CD pipelines, cloud architecture, monitoring, and security - so your team ships fast and sleeps at night.',
    'home.services.devops.items': ['CI/CD pipeline design & automation', 'Cloud architecture (AWS, GCP, Azure)', 'Monitoring, security & cost optimization'],

    // How we help section
    'home.howWeHelp.label': 'Who This Is For',
    'home.howWeHelp.title': 'You probably need us if...',
    'home.howWeHelp.situations': [
      { title: 'Your operations run on spreadsheets and workarounds', desc: 'You know it\'s not sustainable, but you don\'t have the technical team to fix it.' },
      { title: 'You need a senior technical partner, not a coding factory', desc: 'You\'ve been burned by agencies that delivered code but didn\'t understand your business.' },
      { title: 'Your existing systems are holding you back', desc: 'Legacy software, technical debt, or disconnected tools are slowing your growth.' },
      { title: 'You\'re building something ambitious and need a strong technical lead', desc: 'A product, platform, or marketplace that requires real architecture thinking.' },
      { title: 'You want to use AI practically, not as a buzzword', desc: 'You need someone who can identify where AI actually helps and make it work in production.' },
      { title: 'Your infrastructure is fragile and deployments are stressful', desc: 'No CI/CD, manual deployments, mystery server configs - you need DevOps done right.' },
    ],

    // How we work section
    'home.howWeWork.label': 'How We Work',
    'home.howWeWork.title': 'Principal-led. Hands-on. No layers.',
    'home.howWeWork.description': 'You work directly with Jean-Christophe Meillaud - the founder and lead architect. No account managers, no juniors learning on your project. When specialized skills are needed, we bring in trusted experts from our vetted network.',
    'home.howWeWork.steps': [
      { title: 'Discovery', desc: 'We map your current situation, pain points, and goals. Usually a 1-2 week focused assessment.' },
      { title: 'Architecture & Plan', desc: 'A clear, honest plan - what to build, what to buy, what to leave alone. No unnecessary complexity.' },
      { title: 'Build & Deliver', desc: 'Hands-on implementation with regular checkpoints. You see working software early, not a slide deck.' },
      { title: 'Support & Evolve', desc: 'Ongoing advisory, maintenance, or iteration as your business needs change.' },
    ],

    // Case studies section (homepage)
    'home.caseStudies.label': 'Selected Work',
    'home.caseStudies.title': 'Real problems, real outcomes',
    'home.caseStudies.viewFull': 'View case study →',

    // About teaser (homepage)
    'home.about.label': 'Who We Are',
    'home.about.title': 'A senior consultant, not an agency',
    'home.about.text': 'House of Agile is led by Jean-Christophe Meillaud - 20 years across enterprise platforms (Universal Music, Vodafone), startup CTOs, and hands-on consulting. Based in France, Switzerland, and Germany, working with businesses across Europe.',
    'home.about.cta': 'More about our approach →',

    // CTA section
    'home.cta.title': 'Let\'s talk about what you\'re building',
    'home.cta.description': 'Tell us about your project and we\'ll get back within 24 hours with an honest assessment. No pitch, no pressure.',
    'home.cta.primary': 'Get a Quote',
    'home.cta.secondary': 'Or email jc@houseofagile.com',

    // Contact form
    'home.consultation.title': 'Start a Conversation',
    'home.consultation.subtitle': 'Tell us about your situation. We\'ll get back to you within 24 hours with an honest assessment of whether and how we can help.',
    'home.consultation.formTitle': 'Tell us about your project',
    'home.consultation.fullName': 'Your Name*',
    'home.consultation.company': 'Company',
    'home.consultation.email': 'Email*',
    'home.consultation.engagementType': 'What are you looking for?*',
    'home.consultation.description': 'Describe your situation*',
    'home.consultation.submit': 'Send Message',
    'home.consultation.privacy': 'No spam. GDPR compliant. We respond within 24 hours.',

    // Engagement type options
    'form.selectEngagement': 'Select...',
    'form.engagementCTO': 'Fractional CTO / Technical Leadership',
    'form.engagementAutomation': 'Workflow Automation / AI Integration',
    'form.engagementPlatform': 'Internal Tool / Business Platform',
    'form.engagementModernization': 'Legacy Modernization / System Rescue',
    'form.engagementProduct': 'Product / Delivery Leadership',
    'form.engagementAdvisory': 'Advisory / Technical Due Diligence',
    'form.engagementOther': 'Something Else',

    // Footer
    'footer.tagline': 'Senior technology consulting for businesses that need more than code.',
    'footer.services': 'Services',
    'footer.caseStudies': 'Work',
    'footer.about': 'About',
    'footer.contact': 'Contact',
    'footer.platforms': 'Platforms',
    'footer.copyright': '© 2025 House of Agile - France · Switzerland · Germany',

    // Case study page
    'cs.backLink': 'Back to Work',
    'cs.challenge': 'The Challenge',
    'cs.solution': 'The Solution',
    'cs.implementation': 'How We Did It',
    'cs.results': 'Results & Impact',
    'cs.cta.primary': 'Get a Quote',
    'cs.cta.secondary': 'See More Work',

    // Service page
    'svc.backLink': 'Back to Services',
    'svc.cta.consultation': 'Get a Quote',
    'svc.cta.allServices': 'All Services',

    // About page
    'about.hero.label': 'About',
    'about.hero.title': 'A senior partner, not an agency',
    'about.hero.description': 'House of Agile is a principal-led technology consultancy. That means you work directly with the person who architected platforms for 30M+ users, led 120+ engineer teams, and has been shipping production systems for 20 years.',
    'about.principal.title': 'Jean-Christophe Meillaud',
    'about.principal.role': 'Founder & Principal Consultant',
    'about.principal.bio': '20 years building and leading technology - from enterprise platforms at Universal Music and Vodafone, to co-founding startups, to consulting for SMEs and founder-led businesses across Europe. I combine architecture depth, product thinking, and business pragmatism.',
    'about.principal.highlights': [
      'Led 120+ engineers across 5 teams at Universal Music Group',
      'Built platforms handling 30M+ daily users at Vodafone',
      'Co-founded and served as CTO for venture-backed startups',
      'Hands-on architect: Symfony, Node.js, Python, AWS, AI/ML',
      'Based in France, Switzerland, and Germany',
    ],
    'about.model.title': 'How the practice works',
    'about.model.description': 'I lead every engagement directly. No account managers, no juniors, no bait-and-switch. When a project needs specialized skills - deep DevOps, advanced ML, frontend polish - I bring in trusted experts from a vetted network I\'ve built over years of collaboration.',
    'about.model.items': [
      { title: 'Principal-led delivery', desc: 'I\'m in every meeting, every architecture decision, every code review that matters.' },
      { title: 'Trusted expert network', desc: 'A small, curated group of senior specialists - not random freelancers from a platform.' },
      { title: 'Flexible engagement', desc: 'From a 2-week audit to a 12-month retainer. Structured around what your business actually needs.' },
    ],
    'about.why.title': 'Why clients work with us',
    'about.why.items': [
      'Senior judgment from day one - not escalation after things go wrong',
      'We understand business problems, not just technical requirements',
      'Honest about what to build, what to buy, and what to leave alone',
      'AI-enabled delivery that\'s practical, not performative',
      'Direct communication, no layers, no surprises',
    ],
  },

  de: {
    // Navigation
    'nav.services': 'Leistungen',
    'nav.caseStudies': 'Referenzen',
    'nav.about': 'Über uns',
    'nav.contact': 'Kontakt',
    'nav.cta': 'Angebot anfragen →',
    'nav.ctaPrefix': '',
    'nav.ctaShort': 'Angebot anfragen →',

    // Hero - placeholder, will be translated via DeepL
    'home.hero.title': 'Prozesse modernisieren.',
    'home.hero.title2': 'Workflows automatisieren.',
    'home.hero.title3': 'Das Richtige bauen.',
    'home.hero.description': 'House of Agile ist eine erfahrene Technologieberatung, die Unternehmen hilft, manuelle Prozesse, unverbundene Tools und veraltete Systeme durch praktische, KI-gestützte Lösungen zu ersetzen.',
    'home.hero.ctaPrimary': 'Angebot anfragen',
    'home.hero.ctaSecondary': 'Unsere Leistungen',
    'home.hero.credibility': [
      '20 Jahre Enterprise- und Startup-Erfahrung',
      'Plattformen für 30M+ Nutzer skaliert',
      'KI-gestützte Workflow-Automatisierung',
      'Principal-led, Hands-on Umsetzung',
    ],

    // Services section
    'home.services.label': 'Leistungen',
    'home.services.title': 'Senior-Beratung trifft auf Hands-on-Umsetzung',
    'home.services.subtitle': 'Wir helfen Unternehmen, die aus Tabellen, unverbundenen Tools oder Legacy-Systemen herausgewachsen sind - aber noch kein volles Technik-Team brauchen.',
    'home.services.learnMore': 'Mehr erfahren →',

    'home.services.cto.title': 'Fractional CTO & technische Führung',
    'home.services.cto.desc': 'Strategische technische Leitung für Unternehmen, die Senior-Expertise ohne Vollzeit-Einstellung brauchen.',
    'home.services.cto.items': ['Technologiestrategie & Roadmap', 'Team-Aufbau und Architekturentscheidungen', 'Technical Due Diligence & Vendorbewertung'],
    'home.services.automation.title': 'KI-gestützte Workflow-Automatisierung',
    'home.services.automation.desc': 'Manuelle, repetitive Geschäftsprozesse in zuverlässige automatisierte Systeme verwandeln.',
    'home.services.automation.items': ['Prozessanalyse & Automatisierungsdesign', 'KI-Integration für echte Geschäftsaufgaben', 'Systemintegration & Datenpipelines'],
    'home.services.platforms.title': 'Interne Tools & Geschäftsplattformen',
    'home.services.platforms.desc': 'Maßgeschneiderte Plattformen, die das Chaos aus Tabellen und unverbundenen SaaS-Tools ersetzen.',
    'home.services.platforms.items': ['Admin-Panels & operative Dashboards', 'Buchungs-, CRM- und Workflow-Systeme', 'API-Integrationen mit bestehenden Tools'],
    'home.services.modernization.title': 'Legacy-Modernisierung & System-Rettung',
    'home.services.modernization.desc': 'Veraltete Systeme stabilisieren, modernisieren oder ersetzen - ohne Ihr Geschäft zu stören.',
    'home.services.modernization.items': ['Legacy-Code-Audit & Stabilisierung', 'Inkrementelle Modernisierungsstrategie', 'Infrastruktur- & DevOps-Verbesserungen'],
    'home.services.product.title': 'Produkt- & Delivery-Leadership',
    'home.services.product.desc': 'End-to-End Produktführung für ambitionierte digitale Projekte - vom Konzept bis zur Produktion.',
    'home.services.product.items': ['MVP-Architektur & schnelle Validierung', 'Technisches Produktmanagement', 'Team-Koordination & Delivery-Oversight'],
    'home.services.devops.title': 'DevOps & Cloud-Infrastruktur',
    'home.services.devops.desc': 'CI/CD-Pipelines, Cloud-Architektur, Monitoring und Sicherheit - damit Ihr Team schnell liefert und ruhig schläft.',
    'home.services.devops.items': ['CI/CD-Pipeline-Design & Automatisierung', 'Cloud-Architektur (AWS, GCP, Azure)', 'Monitoring, Sicherheit & Kostenoptimierung'],

    // How we help
    'home.howWeHelp.label': 'Für wen',
    'home.howWeHelp.title': 'Sie brauchen uns wahrscheinlich, wenn...',
    'home.howWeHelp.situations': [
      { title: 'Ihre Abläufe auf Tabellen und Workarounds basieren', desc: 'Sie wissen, dass es nicht nachhaltig ist, aber Ihnen fehlt das technische Team.' },
      { title: 'Sie einen erfahrenen technischen Partner brauchen, keine Code-Fabrik', desc: 'Sie wurden von Agenturen enttäuscht, die Code geliefert, aber Ihr Geschäft nicht verstanden haben.' },
      { title: 'Ihre bestehenden Systeme Sie bremsen', desc: 'Legacy-Software, technische Schulden oder unverbundene Tools verlangsamen Ihr Wachstum.' },
      { title: 'Sie etwas Ambitioniertes aufbauen und eine starke technische Führung brauchen', desc: 'Ein Produkt, eine Plattform oder einen Marktplatz, der echtes Architekturdenken erfordert.' },
      { title: 'Sie KI praktisch nutzen wollen, nicht als Buzzword', desc: 'Sie brauchen jemanden, der erkennt, wo KI wirklich hilft, und sie zum Laufen bringt.' },
      { title: 'Ihre Infrastruktur fragil ist und Deployments stressig sind', desc: 'Kein CI/CD, manuelle Deployments, mysteriöse Server-Konfigurationen - Sie brauchen DevOps richtig gemacht.' },
    ],

    // How we work
    'home.howWeWork.label': 'Arbeitsweise',
    'home.howWeWork.title': 'Principal-led. Hands-on. Ohne Zwischenebenen.',
    'home.howWeWork.description': 'Sie arbeiten direkt mit Jean-Christophe Meillaud - dem Gründer und leitenden Architekten. Keine Account Manager, keine Junioren. Bei Bedarf bringen wir vertrauenswürdige Experten aus unserem geprüften Netzwerk ein.',
    'home.howWeWork.steps': [
      { title: 'Discovery', desc: 'Wir erfassen Ihre aktuelle Situation, Schmerzpunkte und Ziele. In der Regel ein fokussiertes 1-2 Wochen Assessment.' },
      { title: 'Architektur & Plan', desc: 'Ein klarer, ehrlicher Plan - was gebaut, was gekauft, was gelassen werden sollte.' },
      { title: 'Umsetzung', desc: 'Hands-on Implementierung mit regelmäßigen Checkpoints. Sie sehen früh funktionierende Software.' },
      { title: 'Support & Weiterentwicklung', desc: 'Laufende Beratung, Wartung oder Iteration, wenn sich Ihre Geschäftsanforderungen ändern.' },
    ],

    // Case studies
    'home.caseStudies.label': 'Ausgewählte Projekte',
    'home.caseStudies.title': 'Echte Probleme, echte Ergebnisse',
    'home.caseStudies.viewFull': 'Fallstudie ansehen →',

    // About teaser
    'home.about.label': 'Über uns',
    'home.about.title': 'Ein erfahrener Partner, keine Agentur',
    'home.about.text': 'House of Agile wird von Jean-Christophe Meillaud geleitet - 20 Jahre Erfahrung mit Enterprise-Plattformen (Universal Music, Vodafone), Startup-CTOs und Hands-on-Beratung. Standort in Frankreich, der Schweiz und Deutschland, tätig für Unternehmen in ganz Europa.',
    'home.about.cta': 'Mehr über unseren Ansatz →',

    // CTA
    'home.cta.title': 'Lassen Sie uns über Ihr Vorhaben sprechen',
    'home.cta.description': 'Erzählen Sie uns von Ihrem Projekt - wir melden uns innerhalb von 24 Stunden mit einer ehrlichen Einschätzung. Kein Pitch, kein Druck.',
    'home.cta.primary': 'Angebot anfragen',
    'home.cta.secondary': 'Oder E-Mail an jc@houseofagile.com',

    // Contact form
    'home.consultation.title': 'Gespräch starten',
    'home.consultation.subtitle': 'Erzählen Sie uns von Ihrer Situation. Wir melden uns innerhalb von 24 Stunden mit einer ehrlichen Einschätzung.',
    'home.consultation.formTitle': 'Erzählen Sie uns von Ihrem Projekt',
    'home.consultation.fullName': 'Ihr Name*',
    'home.consultation.company': 'Unternehmen',
    'home.consultation.email': 'E-Mail*',
    'home.consultation.engagementType': 'Wonach suchen Sie?*',
    'home.consultation.description': 'Beschreiben Sie Ihre Situation*',
    'home.consultation.submit': 'Nachricht senden',
    'home.consultation.privacy': 'Kein Spam. DSGVO-konform. Antwort innerhalb von 24 Stunden.',

    // Engagement options
    'form.selectEngagement': 'Auswählen...',
    'form.engagementCTO': 'Fractional CTO / Technische Führung',
    'form.engagementAutomation': 'Workflow-Automatisierung / KI-Integration',
    'form.engagementPlatform': 'Internes Tool / Geschäftsplattform',
    'form.engagementModernization': 'Legacy-Modernisierung / System-Rettung',
    'form.engagementProduct': 'Produkt- / Delivery-Leadership',
    'form.engagementAdvisory': 'Beratung / Technical Due Diligence',
    'form.engagementOther': 'Etwas Anderes',

    // Footer
    'footer.tagline': 'Senior-Technologieberatung für Unternehmen, die mehr als Code brauchen.',
    'footer.services': 'Leistungen',
    'footer.caseStudies': 'Referenzen',
    'footer.about': 'Über uns',
    'footer.contact': 'Kontakt',
    'footer.platforms': 'Plattformen',
    'footer.copyright': '© 2025 House of Agile - Frankreich · Schweiz · Deutschland',

    // Case study page
    'cs.backLink': 'Zurück zu Referenzen',
    'cs.challenge': 'Die Herausforderung',
    'cs.solution': 'Die Lösung',
    'cs.implementation': 'Umsetzung',
    'cs.results': 'Ergebnisse & Wirkung',
    'cs.cta.primary': 'Angebot anfragen',
    'cs.cta.secondary': 'Mehr Referenzen ansehen',

    // Service page
    'svc.backLink': 'Zurück zu Leistungen',
    'svc.cta.consultation': 'Angebot anfragen',
    'svc.cta.allServices': 'Alle Leistungen',

    // About page
    'about.hero.label': 'Über uns',
    'about.hero.title': 'Ein erfahrener Partner, keine Agentur',
    'about.hero.description': 'House of Agile ist eine Principal-led Technologieberatung. Das bedeutet: Sie arbeiten direkt mit der Person, die Plattformen für 30M+ Nutzer entworfen, 120+ Ingenieure geführt und seit 20 Jahren Produktionssysteme ausgeliefert hat.',
    'about.principal.title': 'Jean-Christophe Meillaud',
    'about.principal.role': 'Gründer & Principal Consultant',
    'about.principal.bio': '20 Jahre Technologie aufbauen und führen - von Enterprise-Plattformen bei Universal Music und Vodafone, über Startup-Gründungen bis zur Beratung für KMU und gründergeführte Unternehmen in ganz Europa.',
    'about.principal.highlights': [
      '120+ Ingenieure in 5 Teams bei Universal Music Group geleitet',
      'Plattformen mit 30M+ täglichen Nutzern bei Vodafone gebaut',
      'Mitgegründet und als CTO für VC-finanzierte Startups agiert',
      'Hands-on Architekt: Symfony, Node.js, Python, AWS, AI/ML',
      'Standort in Frankreich, der Schweiz und Deutschland',
    ],
    'about.model.title': 'So funktioniert die Zusammenarbeit',
    'about.model.description': 'Ich leite jedes Engagement direkt. Keine Account Manager, keine Junioren, kein Bait-and-Switch. Wenn ein Projekt spezialisierte Fähigkeiten erfordert, bringe ich vertrauenswürdige Experten aus meinem geprüften Netzwerk ein.',
    'about.model.items': [
      { title: 'Principal-led Delivery', desc: 'Ich bin in jedem Meeting, jeder Architekturentscheidung, jedem relevanten Code-Review.' },
      { title: 'Vertrauenswürdiges Expertennetzwerk', desc: 'Eine kleine, kuratierte Gruppe von Senior-Spezialisten - keine zufälligen Freelancer.' },
      { title: 'Flexible Zusammenarbeit', desc: 'Von einem 2-Wochen-Audit bis zu einem 12-Monats-Retainer. Strukturiert nach Ihrem tatsächlichen Bedarf.' },
    ],
    'about.why.title': 'Warum Kunden mit uns arbeiten',
    'about.why.items': [
      'Senior-Urteilsvermögen von Tag eins - nicht erst nach Eskalation',
      'Wir verstehen Geschäftsprobleme, nicht nur technische Anforderungen',
      'Ehrlich darüber, was gebaut, gekauft oder gelassen werden sollte',
      'KI-gestützte Delivery, die praktisch ist, nicht performativ',
      'Direkte Kommunikation, keine Zwischenebenen, keine Überraschungen',
    ],
  },

  fr: {
    // Navigation
    'nav.services': 'Services',
    'nav.caseStudies': 'Réalisations',
    'nav.about': 'À propos',
    'nav.contact': 'Contact',
    'nav.cta': 'Demander un devis →',
    'nav.ctaPrefix': '',
    'nav.ctaShort': 'Demander un devis →',

    // Hero - placeholder, will be polished via DeepL
    'home.hero.title': 'Moderniser les opérations.',
    'home.hero.title2': 'Automatiser les workflows.',
    'home.hero.title3': 'Construire ce qui compte.',
    'home.hero.description': 'House of Agile est un cabinet de conseil technologique senior qui aide les entreprises à remplacer les processus manuels, les outils déconnectés et les systèmes obsolètes par des solutions pratiques et augmentées par l\'IA.',
    'home.hero.ctaPrimary': 'Demander un devis',
    'home.hero.ctaSecondary': 'Nos services',
    'home.hero.credibility': [
      '20 ans d\'expérience enterprise et startup',
      'Plateformes à 30M+ utilisateurs',
      'Automatisation de workflows par l\'IA',
      'Direction par le fondateur, exécution hands-on',
    ],

    // Services section
    'home.services.label': 'Nos services',
    'home.services.title': 'Conseil senior et exécution concrète',
    'home.services.subtitle': 'Nous aidons les entreprises qui ont dépassé les tableurs, les outils déconnectés ou les systèmes legacy - mais qui ne sont pas prêtes à recruter une équipe technique complète.',
    'home.services.learnMore': 'En savoir plus →',

    'home.services.cto.title': 'CTO Fractionnel & Leadership Technique',
    'home.services.cto.desc': 'Direction technologique stratégique pour les entreprises qui ont besoin d\'expertise senior sans embauche à temps plein.',
    'home.services.cto.items': ['Stratégie technologique & roadmap', 'Recrutement et décisions d\'architecture', 'Due diligence technique & évaluation fournisseurs'],
    'home.services.automation.title': 'Automatisation de Workflows par l\'IA',
    'home.services.automation.desc': 'Transformer les processus manuels et répétitifs en systèmes automatisés fiables grâce à l\'IA pratique.',
    'home.services.automation.items': ['Cartographie des processus & conception d\'automatisation', 'Intégration IA pour des tâches métier réelles', 'Intégration de systèmes & pipelines de données'],
    'home.services.platforms.title': 'Outils Internes & Plateformes Métier',
    'home.services.platforms.desc': 'Des plateformes sur mesure qui remplacent le chaos des tableurs et des outils SaaS déconnectés.',
    'home.services.platforms.items': ['Panneaux d\'administration & tableaux de bord opérationnels', 'Systèmes de réservation, CRM et workflows', 'Intégrations API avec vos outils existants'],
    'home.services.modernization.title': 'Modernisation Legacy & Sauvetage Système',
    'home.services.modernization.desc': 'Stabiliser, moderniser ou remplacer les systèmes vieillissants sans perturber votre activité.',
    'home.services.modernization.items': ['Audit de code legacy & stabilisation', 'Stratégie de modernisation incrémentale', 'Améliorations infrastructure & DevOps'],
    'home.services.product.title': 'Leadership Produit & Delivery',
    'home.services.product.desc': 'Leadership produit de bout en bout pour des projets digitaux ambitieux - du concept à la production.',
    'home.services.product.items': ['Architecture MVP & validation rapide', 'Management produit technique', 'Coordination d\'équipe & supervision delivery'],
    'home.services.devops.title': 'DevOps & Infrastructure Cloud',
    'home.services.devops.desc': 'Pipelines CI/CD, architecture cloud, monitoring et sécurité - pour que votre équipe livre vite et dorme tranquille.',
    'home.services.devops.items': ['Conception & automatisation de pipelines CI/CD', 'Architecture cloud (AWS, GCP, Azure)', 'Monitoring, sécurité & optimisation des coûts'],

    // How we help
    'home.howWeHelp.label': 'Pour qui',
    'home.howWeHelp.title': 'Vous avez probablement besoin de nous si...',
    'home.howWeHelp.situations': [
      { title: 'Vos opérations tournent sur des tableurs et des solutions de fortune', desc: 'Vous savez que ce n\'est pas durable, mais vous n\'avez pas l\'équipe technique pour y remédier.' },
      { title: 'Vous cherchez un partenaire technique senior, pas une usine à code', desc: 'Vous avez été déçu par des agences qui livraient du code sans comprendre votre métier.' },
      { title: 'Vos systèmes actuels vous freinent', desc: 'Logiciels obsolètes, dette technique ou outils déconnectés ralentissent votre croissance.' },
      { title: 'Vous construisez quelque chose d\'ambitieux et avez besoin d\'un lead technique solide', desc: 'Un produit, une plateforme ou un marketplace qui nécessite une vraie réflexion d\'architecture.' },
      { title: 'Vous voulez utiliser l\'IA de manière pratique, pas comme un buzzword', desc: 'Vous avez besoin de quelqu\'un qui identifie où l\'IA aide vraiment et la fait fonctionner en production.' },
      { title: 'Votre infrastructure est fragile et les déploiements sont stressants', desc: 'Pas de CI/CD, déploiements manuels, configurations serveur mystérieuses - vous avez besoin de DevOps bien fait.' },
    ],

    // How we work
    'home.howWeWork.label': 'Notre approche',
    'home.howWeWork.title': 'Dirigé par le fondateur. Concret. Sans intermédiaires.',
    'home.howWeWork.description': 'Vous travaillez directement avec Jean-Christophe Meillaud - le fondateur et architecte principal. Pas de chargés de compte, pas de juniors. Quand des compétences spécialisées sont nécessaires, nous faisons appel à des experts de confiance de notre réseau vérifié.',
    'home.howWeWork.steps': [
      { title: 'Découverte', desc: 'Nous cartographions votre situation actuelle, vos points de douleur et vos objectifs. Généralement un assessment focalisé de 1-2 semaines.' },
      { title: 'Architecture & Plan', desc: 'Un plan clair et honnête - quoi construire, quoi acheter, quoi laisser en l\'état.' },
      { title: 'Construction & Livraison', desc: 'Implémentation hands-on avec des points de contrôle réguliers. Vous voyez du logiciel fonctionnel rapidement.' },
      { title: 'Support & Évolution', desc: 'Conseil continu, maintenance ou itération selon l\'évolution de vos besoins.' },
    ],

    // Case studies
    'home.caseStudies.label': 'Réalisations',
    'home.caseStudies.title': 'Vrais problèmes, vrais résultats',
    'home.caseStudies.viewFull': 'Voir l\'étude de cas →',

    // About teaser
    'home.about.label': 'Qui sommes-nous',
    'home.about.title': 'Un consultant senior, pas une agence',
    'home.about.text': 'House of Agile est dirigé par Jean-Christophe Meillaud - 20 ans d\'expérience avec des plateformes enterprise (Universal Music, Vodafone), des rôles de CTO startup, et du conseil hands-on. Basé en France, en Suisse et en Allemagne, au service d\'entreprises à travers l\'Europe.',
    'home.about.cta': 'En savoir plus sur notre approche →',

    // CTA
    'home.cta.title': 'Parlons de ce que vous construisez',
    'home.cta.description': 'Parlez-nous de votre projet - nous vous répondrons sous 24 heures avec une évaluation honnête. Pas de pitch, pas de pression.',
    'home.cta.primary': 'Demander un devis',
    'home.cta.secondary': 'Ou écrivez à jc@houseofagile.com',

    // Contact form
    'home.consultation.title': 'Démarrer une conversation',
    'home.consultation.subtitle': 'Parlez-nous de votre situation. Nous vous répondrons dans les 24 heures avec une évaluation honnête.',
    'home.consultation.formTitle': 'Parlez-nous de votre projet',
    'home.consultation.fullName': 'Votre nom*',
    'home.consultation.company': 'Entreprise',
    'home.consultation.email': 'Email*',
    'home.consultation.engagementType': 'Que recherchez-vous ?*',
    'home.consultation.description': 'Décrivez votre situation*',
    'home.consultation.submit': 'Envoyer le message',
    'home.consultation.privacy': 'Pas de spam. Conforme RGPD. Réponse sous 24 heures.',

    // Engagement options
    'form.selectEngagement': 'Sélectionner...',
    'form.engagementCTO': 'CTO Fractionnel / Leadership Technique',
    'form.engagementAutomation': 'Automatisation Workflows / Intégration IA',
    'form.engagementPlatform': 'Outil Interne / Plateforme Métier',
    'form.engagementModernization': 'Modernisation Legacy / Sauvetage Système',
    'form.engagementProduct': 'Leadership Produit / Delivery',
    'form.engagementAdvisory': 'Conseil / Due Diligence Technique',
    'form.engagementOther': 'Autre chose',

    // Footer
    'footer.tagline': 'Conseil technologique senior pour les entreprises qui ont besoin de plus que du code.',
    'footer.services': 'Services',
    'footer.caseStudies': 'Réalisations',
    'footer.about': 'À propos',
    'footer.contact': 'Contact',
    'footer.platforms': 'Plateformes',
    'footer.copyright': '© 2025 House of Agile - France · Suisse · Allemagne',

    // Case study page
    'cs.backLink': 'Retour aux réalisations',
    'cs.challenge': 'Le Défi',
    'cs.solution': 'La Solution',
    'cs.implementation': 'Comment nous l\'avons fait',
    'cs.results': 'Résultats & Impact',
    'cs.cta.primary': 'Demander un devis',
    'cs.cta.secondary': 'Voir plus de réalisations',

    // Service page
    'svc.backLink': 'Retour aux services',
    'svc.cta.consultation': 'Demander un devis',
    'svc.cta.allServices': 'Tous les services',

    // About page
    'about.hero.label': 'À propos',
    'about.hero.title': 'Un partenaire senior, pas une agence',
    'about.hero.description': 'House of Agile est un cabinet de conseil technologique dirigé par son fondateur. Cela signifie que vous travaillez directement avec la personne qui a conçu des plateformes pour 30M+ utilisateurs, dirigé des équipes de 120+ ingénieurs et livré des systèmes en production pendant 20 ans.',
    'about.principal.title': 'Jean-Christophe Meillaud',
    'about.principal.role': 'Fondateur & Consultant Principal',
    'about.principal.bio': '20 ans à construire et diriger la technologie - des plateformes enterprise chez Universal Music et Vodafone, à la co-fondation de startups, au conseil pour PME et entreprises dirigées par leurs fondateurs à travers l\'Europe.',
    'about.principal.highlights': [
      '120+ ingénieurs dirigés dans 5 équipes chez Universal Music Group',
      'Plateformes construites pour 30M+ utilisateurs quotidiens chez Vodafone',
      'Co-fondateur et CTO de startups financées par du capital-risque',
      'Architecte hands-on : Symfony, Node.js, Python, AWS, AI/ML',
      'Basé en France, en Suisse et en Allemagne',
    ],
    'about.model.title': 'Comment fonctionne le cabinet',
    'about.model.description': 'Je dirige chaque engagement directement. Pas de chargés de compte, pas de juniors, pas de bait-and-switch. Quand un projet nécessite des compétences spécialisées, je fais appel à des experts de confiance de mon réseau construit au fil des années.',
    'about.model.items': [
      { title: 'Delivery dirigé par le fondateur', desc: 'Je suis dans chaque réunion, chaque décision d\'architecture, chaque code review qui compte.' },
      { title: 'Réseau d\'experts de confiance', desc: 'Un petit groupe sélectionné de spécialistes seniors - pas des freelances aléatoires d\'une plateforme.' },
      { title: 'Engagement flexible', desc: 'D\'un audit de 2 semaines à un retainer de 12 mois. Structuré selon vos besoins réels.' },
    ],
    'about.why.title': 'Pourquoi les clients travaillent avec nous',
    'about.why.items': [
      'Un jugement senior dès le premier jour - pas une escalade après les problèmes',
      'Nous comprenons les problèmes métier, pas seulement les spécifications techniques',
      'Honnêtes sur ce qu\'il faut construire, acheter ou laisser en l\'état',
      'Delivery augmenté par l\'IA, pratique et non performatif',
      'Communication directe, pas d\'intermédiaires, pas de surprises',
    ],
  },
} as const;

export type UIKey = keyof typeof ui['en'];

export function useTranslations(lang: Lang) {
  return function t(key: UIKey): string {
    return (ui[lang] as Record<string, unknown>)[key] as string || (ui['en'] as Record<string, unknown>)[key] as string || key;
  };
}

export function getTranslationArray(lang: Lang, key: UIKey): string[] {
  const val = (ui[lang] as Record<string, unknown>)[key];
  if (Array.isArray(val)) return val as string[];
  return [];
}

export function getTranslationObjects(lang: Lang, key: UIKey): Array<{ title: string; desc: string }> {
  const val = (ui[lang] as Record<string, unknown>)[key];
  if (Array.isArray(val)) return val as Array<{ title: string; desc: string }>;
  return [];
}
