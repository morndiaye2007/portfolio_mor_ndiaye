export type Language = 'fr' | 'en';

export interface ProjectTranslation {
  id: string;
  title: string;
  subtitle: string;
  category: 'web' | 'mobile' | 'backend' | 'fullstack';
  categoryLabel: string;
  shortDescription: string;
  fullDescription: string;
  icon: string;
  colorGradient: string;
  accentColor: string;
  tags: string[];
  features: string[];
  architecture: string;
  githubUrl?: string;
  liveUrl?: string;
  repos?: { label: string; url: string }[];
  metrics?: { label: string; value: string }[];
}

export interface Translations {
  nav: {
    home: string;
    about: string;
    skills: string;
    services: string;
    projects: string;
    contact: string;
    cv: string;
    themeDarkTooltip: string;
    themeLightTooltip: string;
    langTooltip: string;
  };
  hero: {
    status: string;
    hello: string;
    name: string;
    role: string;
    subtitle: string;
    cvBtn: string;
    contactBtn: string;
    projectsBtn: string;
    highlightDegree: string;
    highlightProjects: string;
    highlightLocation: string;
  };
  about: {
    badge: string;
    titleMain: string;
    titleHighlight: string;
    subtitle: string;
    backendCardTitle: string;
    backendCardDesc: string;
    frontendCardTitle: string;
    frontendCardDesc: string;
    activeText: string;
    backendFocusBadge: string;
    backendFocusTitle: string;
    backendParagraphs: string[];
    backendStats: { num: string; label: string }[];
    frontendFocusBadge: string;
    frontendFocusTitle: string;
    frontendParagraphs: string[];
    frontendStats: { num: string; label: string }[];
    cursusTitle: string;
    cursusBacStep: string;
    cursusBacLevel: string;
    cursusBacTitle: string;
    cursusBacDesc: string;
    cursusL3Step: string;
    cursusL3Level: string;
    cursusL3Title: string;
    cursusL3Desc: string;
    cursusM1Step: string;
    cursusM1Level: string;
    cursusM1Title: string;
    cursusM1Desc: string;
  };
  skills: {
    badge: string;
    titleMain: string;
    titleHighlight: string;
    subtitle: string;
    catFrontend: string;
    catBackend: string;
    catArch: string;
    skillMonolithMicro: string;
    skillDatabases: string;
    skillSecurity: string;
    skillSpringData: string;
  };
  services: {
    badge: string;
    titleMain: string;
    titleHighlight: string;
    subtitle: string;
    webTitle: string;
    webDesc: string;
    webFeatures: string[];
    backendTitle: string;
    backendDesc: string;
    backendFeatures: string[];
    mobileTitle: string;
    mobileDesc: string;
    mobileFeatures: string[];
  };
  projects: {
    badge: string;
    titleMain: string;
    titleHighlight: string;
    subtitle: string;
    filterAll: string;
    filterWeb: string;
    filterMobile: string;
    filterBackend: string;
    viewDetails: string;
    viewDemo: string;
    gitlabRepo: string;
    githubRepo: string;
    items: ProjectTranslation[];
  };
  dialog: {
    overviewTitle: string;
    featuresTitle: string;
    archTitle: string;
    accessDemo: string;
    closeBtn: string;
    gitlabRepo: string;
    githubRepo: string;
  };
  contact: {
    badge: string;
    titleMain: string;
    titleHighlight: string;
    subtitle: string;
    cardTitle: string;
    cardDesc: string;
    emailLabel: string;
    locationLabel: string;
    locationValue: string;
    socialLabel: string;
    formTitle: string;
    formSubtitle: string;
    nameLabel: string;
    namePlaceholder: string;
    emailInputLabel: string;
    emailPlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    submitBtn: string;
    submittingBtn: string;
    successTitle: string;
    successDesc: string;
    activationTitle: string;
    activationDesc: string;
    errorTitle: string;
    errorDesc: string;
  };
  footer: {
    desc: string;
    status: string;
    navTitle: string;
    expertiseTitle: string;
    contactTitle: string;
    downloadCv: string;
    copyright: string;
    credits: string;
  };
}

export const TRANSLATIONS: Record<Language, Translations> = {
  fr: {
    nav: {
      home: 'Accueil',
      about: 'À propos',
      skills: 'Compétences',
      services: 'Services',
      projects: 'Projets',
      contact: 'Contact',
      cv: 'CV',
      themeDarkTooltip: 'Passer au mode sombre',
      themeLightTooltip: 'Passer au mode clair',
      langTooltip: 'Switch to English'
    },
    hero: {
      status: 'Disponible pour nouvelles missions & opportunités',
      hello: 'Hello, je suis',
      name: 'Mor Ndiaye',
      role: 'Développeur Full Stack & Mobile',
      subtitle: `Je conçois et déploie des applications web, mobiles et architectures microservices performantes (<strong>Spring Boot</strong>, <strong>Angular 17</strong>, <strong>Flutter</strong>), avec une solide expertise en solutions de santé, agritech et gestion d'entreprise.`,
      cvBtn: 'Consulter mon CV',
      contactBtn: 'Prendre RDV',
      projectsBtn: 'Voir mes projets',
      highlightDegree: 'Master 1 Génie Logiciel',
      highlightProjects: '5+ Projets Full Stack & Mobile',
      highlightLocation: 'Dakar & Remote'
    },
    about: {
      badge: 'Mon Parcours',
      titleMain: 'À Propos De',
      titleHighlight: 'Moi',
      subtitle: 'Une double compétence Backend et Frontend/Mobile pour bâtir des solutions logicielles de bout en bout.',
      backendCardTitle: 'Backend & Architecture Microservices',
      backendCardDesc: `Conception d'APIs RESTful sécurisées, streaming d'événements (Kafka) et modélisation de bases relationnelles (PostgreSQL/MySQL).`,
      frontendCardTitle: 'Frontend & Mobile Multiplateforme',
      frontendCardDesc: `Développement d'interfaces web réactives sous Angular et d'applications mobiles fluides avec Flutter (iOS & Android).`,
      activeText: 'Actif',
      backendFocusBadge: 'Expertise Backend & Microservices',
      backendFocusTitle: 'Architectures Microservices & Systèmes Robustes',
      backendParagraphs: [
        `Ingénieur backend spécialisé en <strong>Java & Spring Boot</strong>, je conçois des architectures microservices modulaires et sécurisées (<strong>OAuth2, JWT</strong>), avec streaming d'événements <strong>Apache Kafka</strong> et bases de données relationnelles (<strong>PostgreSQL, MySQL</strong>).`,
        `J'ai notamment développé le socle backend du <strong>Portail Don de Sang</strong> (gestion de flux critiques en temps réel) et l'ERP de gestion pharmaceutique <strong>PharmaGest</strong> avec des APIs RESTful hautement optimisées.`
      ],
      backendStats: [
        { num: '2+', label: "Années d'Expérience" },
        { num: '5+', label: 'APIs & Microservices' },
        { num: '100%', label: 'Disponibilité & Sécurité' }
      ],
      frontendFocusBadge: 'Expertise Frontend & Mobile',
      frontendFocusTitle: 'Interfaces Web Réactives & Applications Multiplateformes',
      frontendParagraphs: [
        `Développeur d'expériences numériques sous <strong>Angular 17+</strong> (Angular Material, animations soignées) et d'applications mobiles cross-platform réactives et fluides avec <strong>Flutter</strong> (iOS & Android).`,
        `J'ai réalisé l'application mobile <strong>Smart Poulailler</strong> (monitoring avicole complet), la marketplace agricole <strong>AgriConnect</strong> et la solution mobile de prévisions en temps réel <strong>MétéoLive</strong>.`
      ],
      frontendStats: [
        { num: 'iOS & Android', label: 'Support Multiplateforme' },
        { num: '60 FPS', label: 'Fluidité & Performance' },
        { num: '100%', label: 'Responsive Design' }
      ],
      cursusTitle: 'Cursus & Formation Académique',
      cursusBacStep: 'Obtenu',
      cursusBacLevel: 'Enseignement Secondaire',
      cursusBacTitle: 'Baccalauréat',
      cursusBacDesc: `Diplôme d'accès à l'enseignement supérieur, marquant l'entrée dans le cursus académique scientifique.`,
      cursusL3Step: 'Diplômé (Bac+3)',
      cursusL3Level: 'Cycle Licence',
      cursusL3Title: 'Licence 3 — Génie Logiciel',
      cursusL3Desc: `Fondations de l'ingénierie logicielle : algorithmique avancée, modélisation UML, bases de données relationnelles et développement fullstack web & mobile.`,
      cursusM1Step: 'Actuellement (M1)',
      cursusM1Level: 'Cycle Master (Bac+4)',
      cursusM1Title: 'Master 1 — Génie Logiciel',
      cursusM1Desc: `Spécialisation avancée : architectures microservices distribuées, streaming d'événements, sécurité logicielle, cloud native et conception de systèmes complexes.`
    },
    skills: {
      badge: 'Expertise Technique',
      titleMain: 'Mes',
      titleHighlight: 'Compétences',
      subtitle: 'Maîtrise des technologies modernes pour concevoir des architectures fiables, scalables et maintenables.',
      catFrontend: 'Frontend & Mobile',
      catBackend: 'Backend & Microservices',
      catArch: 'Architecture & Données',
      skillMonolithMicro: 'Monolithique / Microservices',
      skillDatabases: 'MySQL / PostgreSQL',
      skillSecurity: 'APIs RESTful & Sécurité (JWT)',
      skillSpringData: 'Spring Data JPA & Hibernate'
    },
    services: {
      badge: 'Offre de Services',
      titleMain: 'Mes',
      titleHighlight: 'Services',
      subtitle: 'Des prestations sur mesure, de la conception d\'architecture au déploiement en production.',
      webTitle: 'Développement Web',
      webDesc: `Conception d'applications web modernes et performantes avec Angular, optimisées pour tous les supports.`,
      webFeatures: [
        'Single Page Applications',
        'SEO Friendly & Accessible',
        'UX/UI Moderne & Ergonomique'
      ],
      backendTitle: 'Architecture Backend',
      backendDesc: `Mise en place de systèmes robustes et scalables en Java/Spring Boot ou Laravel, maîtrisant les architectures monolithiques et microservices.`,
      backendFeatures: [
        'APIs RESTful Haute Performance',
        'Architectures Microservices',
        'Sécurité & Auth (JWT/OAuth2)'
      ],
      mobileTitle: 'Applications Mobiles',
      mobileDesc: `Développement d'applications mobiles cross-platform avec Flutter pour une expérience native sur iOS et Android.`,
      mobileFeatures: [
        'iOS & Android Cross-Platform',
        'Fluidité & Performance Native',
        'Intégration APIs & Temps Réel'
      ]
    },
    projects: {
      badge: 'Portfolio de Réalisations',
      titleMain: 'Mes',
      titleHighlight: 'Projets Majeurs',
      subtitle: 'Découvrez une sélection de solutions web, mobiles et architectures backend conçues avec rigueur, performance et sens du détail.',
      filterAll: 'Tous',
      filterWeb: 'Web & Portails',
      filterMobile: 'Mobile & Flutter',
      filterBackend: 'Backend',
      viewDetails: 'Voir Détails',
      viewDemo: 'Voir la démo',
      gitlabRepo: 'Dépôt GitLab',
      githubRepo: 'Dépôt GitHub',
      items: [
        {
          id: 'don-sang',
          title: 'Don de Sang',
          subtitle: 'Écosystème Complet : Portail Hôpitaux, Plateforme Citoyenne & App Mobile',
          category: 'fullstack',
          categoryLabel: 'Écosystème Web & Mobile',
          shortDescription: 'Écosystème complet de gestion des dons de sang : portail administratif temps réel pour hôpitaux, plateforme citoyenne web et application mobile Flutter avec alertes d\'urgence géolocalisées.',
          fullDescription: 'Une solution complète conçue pour fluidifier toute la chaîne du don de sang. Le portail d\'administration offre aux centres de transfusion et hôpitaux un tableau de bord temps réel pour anticiper les pénuries et sécuriser la traçabilité des poches. La plateforme citoyenne web permet aux volontaires de tester leur éligibilité et de prendre rendez-vous. L\'application mobile Flutter géolocalise les centres de collecte et envoie des notifications push d\'urgence ciblées par groupe sanguin.',
          icon: 'bx-donate-blood',
          colorGradient: 'linear-gradient(135deg, #8B5CF6 0%, #6D28D9 100%)',
          accentColor: '#8B5CF6',
          tags: ['Angular 17', 'Spring Boot', 'PostgreSQL', 'JWT Security', 'Flutter', 'Dart', 'Google Maps API', 'Push Notifications', 'REST API'],
          features: [
            'Tableau de bord temps réel des stocks par groupe sanguin (A, B, AB, O +/-) pour hôpitaux et centres de collecte',
            'Espace citoyen : prise de rendez-vous en ligne, test d\'éligibilité et localisation des collectes fixes et mobiles',
            'Application mobile avec géolocalisation des centres et carnet de don digitalisé',
            'Notifications push d\'urgence ciblées par groupe sanguin et rayon kilométrique',
            'Système d\'alerte automatique en cas de seuil critique ou pénurie vitale',
            'Gestion sécurisée des dossiers donneurs (OAuth2/JWT) et traçabilité des poches de la collecte à la transfusion'
          ],
          architecture: 'Écosystème composé de trois briques connectées à une API REST Spring Boot commune sécurisée par JWT : un portail d\'administration Angular 17 pour les hôpitaux, une plateforme web citoyenne, et une application mobile Flutter (architecture BLoC) pour les donneurs, le tout appuyé sur PostgreSQL.',
          githubUrl: 'https://gitlab.com/ndiaye_tech/sene-sang-portail',
          liveUrl: '#',
          repos: [
            { label: 'Portail Hôpitaux (GitLab)', url: 'https://gitlab.com/ndiaye_tech/sene-sang-portail' },
            { label: 'Web Citoyen & Mobile (GitLab)', url: 'https://gitlab.com/ndiaye_tech/sene-sang' }
          ],
          metrics: [
            { label: 'Gestion', value: 'Temps réel' },
            { label: 'Sécurité', value: 'OAuth2 / JWT' },
            { label: 'Plateformes', value: 'Web & Mobile' }
          ]
        },
        {
          id: 'agriconnect',
          title: 'AgriConnect',
          subtitle: 'Écosystème Numérique Agricole & Marketplace Intelligente',
          category: 'fullstack',
          categoryLabel: 'Full Stack & Web/Mobile',
          shortDescription: 'Plateforme innovante reliant directement les agriculteurs aux acheteurs, avec suivi des récoltes, cours du marché et conseils agrométéorologiques.',
          fullDescription: 'AgriConnect est une solution technologique à fort impact socio-économique conçue pour valoriser la production agricole locale. Elle offre aux producteurs un espace de vente directe sans intermédiaires abusifs, un suivi en temps réel du cours des denrées sur les marchés régionaux et des prévisions agro-climatiques pour optimiser les périodes de semis et de récolte.',
          icon: 'bx-leaf',
          colorGradient: 'linear-gradient(135deg, #A855F7 0%, #7E22CE 100%)',
          accentColor: '#A855F7',
          tags: ['Angular', 'Spring Boot', 'Flutter', 'MySQL', 'OpenWeather API', 'Chart.js'],
          features: [
            'Marketplace B2B/B2C pour la commercialisation directe des récoltes',
            'Tableau de bord dynamique d\'analyse des cours et fluctuations des prix du marché',
            'Module de conseils agronomiques personnalisés et calendrier cultural',
            'Alertes météo ciblées pour protéger les cultures contre les intempéries',
            'Espace logistique pour coordonner le transport et la livraison des commandes'
          ],
          architecture: 'Écosystème complet avec Backend Spring Boot, portail web Angular pour la gestion et app mobile Flutter pour les agriculteurs sur le terrain.',
          githubUrl: 'https://gitlab.com/ndiaye_tech/agri_connect',
          liveUrl: '#',
          metrics: [
            { label: 'Circuit Court', value: '100% Direct' },
            { label: 'Données Marché', value: 'Quotidiennes' },
            { label: 'Plateforme', value: 'GitLab' }
          ]
        },
        {
          id: 'gestion-pharmacie',
          title: 'PharmaGest - Gestion de Pharmacie',
          subtitle: 'ERP Complet d\'Officine, Stocks & Traçabilité des Médicaments',
          category: 'web',
          categoryLabel: 'Système ERP / Gestion',
          shortDescription: 'Logiciel robuste de gestion officinale : contrôle des stocks avec alertes péremption, délivrance d\'ordonnances, caisse et suivi fournisseurs.',
          fullDescription: 'PharmaGest est une solution de gestion pharmaceutique conçue pour fiabiliser et fluidifier le travail quotidien des pharmaciens. Le système assure un contrôle rigoureux des entrées/sorties de stocks, déclenche des alertes intelligentes sur les dates de péremption et ruptures imminentes, gère la facturation multi-paiements et édite des rapports statistiques complets de rentabilité.',
          icon: 'bx-capsule',
          colorGradient: 'linear-gradient(135deg, #3B82F6 0%, #1D4ED8 100%)',
          accentColor: '#3B82F6',
          tags: ['Spring Boot', 'Angular', 'PostgreSQL', 'JasperReports', 'Spring Security', 'REST API'],
          features: [
            'Gestion avancée des stocks avec suivi des lots, dosages et dates limites d\'utilisation',
            'Système d\'alerte proactif : ruptures de stock et médicaments proches de la péremption',
            'Point de vente (POS) rapide avec scanner code-barres et impression tickets de caisse',
            'Gestion des ordonnances médicales et des tiers-payants / mutuelles',
            'Génération automatisée des commandes fournisseurs et bons de livraison',
            'Rapports financiers et d\'inventaire exportables en PDF (JasperReports) et Excel'
          ],
          architecture: 'Architecture sécurisée en couches (N-Tiers) propulsée par Spring Boot, PostgreSQL pour l\'intégrité transactionnelle (ACID) et Angular pour l\'IHM.',
          githubUrl: 'https://github.com/morndiaye2007',
          liveUrl: '#',
          metrics: [
            { label: 'Intégrité', value: '100% ACID' },
            { label: 'Alertes', value: 'Automatisées' },
            { label: 'Rapports', value: 'PDF / Excel' }
          ]
        },
        {
          id: 'smart-poulailler',
          title: 'Smart Poulailler - App Mobile',
          subtitle: 'Application Mobile de Suivi & Gestion d\'Élevage Avicole',
          category: 'mobile',
          categoryLabel: 'Application Mobile',
          shortDescription: 'Application mobile intuitive pour la gestion et le pilotage d\'élevages avicoles : suivi des bandes, ponte, alimentation, dépenses et rentabilité.',
          fullDescription: 'Smart Poulailler est une application mobile développée sous Flutter conçue pour digitaliser et simplifier le pilotage quotidien des élevages de volailles directement sur smartphone. Elle permet aux éleveurs de suivre avec précision chaque bande de volailles (poussins, poulets de chair, pondeuses), d\'enregistrer les consommations d\'aliments et soins, de surveiller les courbes de ponte et de mortalité, et de calculer automatiquement la rentabilité financière de chaque lot.',
          icon: 'bx-mobile-alt',
          colorGradient: 'linear-gradient(135deg, #00D2FF 0%, #0284C7 100%)',
          accentColor: '#00D2FF',
          tags: ['Flutter', 'Dart', 'Spring Boot', 'PostgreSQL', 'REST API', 'Charts / Graphiques'],
          features: [
            'Suivi mobile complet des bandes avicoles (âge, effectifs, taux de ponte, mortalité)',
            'Gestion des stocks d\'aliments, consommations journalières et traitements vétérinaires',
            'Graphiques d\'analyse de ponte et suivi des performances de production',
            'Enregistrement direct des ventes d\'œufs et de poulets avec carnet clients',
            'Calcul automatique instantané des marges et de la rentabilité nette par lot'
          ],
          architecture: 'Application mobile Flutter avec gestion d\'état performante, connectée à une API REST sécurisée Spring Boot et base de données PostgreSQL.',
          githubUrl: 'https://github.com/morndiaye2007/Smart-Poulailler',
          liveUrl: '#',
          metrics: [
            { label: 'Plateforme', value: 'Mobile Flutter' },
            { label: 'Dépôt', value: 'GitHub Public' },
            { label: 'Analytique', value: 'Graphiques' }
          ]
        },
        {
          id: 'meteo-mobile',
          title: 'MétéoLive Mobile',
          subtitle: 'Application Météo Interactive & Prévisions en Temps Réel',
          category: 'mobile',
          categoryLabel: 'Application Mobile',
          shortDescription: 'Application mobile élégante proposant des prévisions météorologiques ultra précises, animations climatiques dynamiques et radar interactif.',
          fullDescription: 'Application mobile météo alliant esthétique épurée et précision météorologique. Elle exploite l\'API OpenWeather pour restituer en temps réel les données climatiques (température ressentie, humidité, vent, indice UV, prévisions heure par heure et à 7 jours) accompagnées d\'animations visuelles immersives.',
          icon: 'bx-cloud-lightning',
          colorGradient: 'linear-gradient(135deg, #22D3EE 0%, #0E7490 100%)',
          accentColor: '#22D3EE',
          tags: ['Flutter', 'Dart', 'OpenWeather API', 'Lottie Animations', 'Geolocator'],
          features: [
            'Détection automatique de la position géographique avec mise à jour météo instantanée',
            'Prévisions détaillées heure par heure et tendances climatiques sur 7 jours',
            'Arrière-plans et micro-animations réactifs aux conditions météorologiques réelles',
            'Recherche et mise en favoris de villes internationales',
            'Mode hors-ligne avec cache local des dernières données relevées'
          ],
          architecture: 'Flutter avec gestion d\'état Provider, animations Lottie haute performance et gestion de cache persistant.',
          githubUrl: 'https://github.com/morndiaye2007',
          liveUrl: '#',
          metrics: [
            { label: 'Données', value: 'Temps réel' },
            { label: 'Précision', value: 'Heure / Heure' },
            { label: 'Animations', value: 'Fluides 60fps' }
          ]
        }
      ]
    },
    dialog: {
      overviewTitle: 'Présentation & Contexte',
      featuresTitle: 'Fonctionnalités Clés & Valeur Métier',
      archTitle: 'Architecture & Stack Technique',
      accessDemo: 'Accéder à la Démo',
      closeBtn: 'Fermer',
      gitlabRepo: 'Dépôt GitLab',
      githubRepo: 'Dépôt GitHub'
    },
    contact: {
      badge: 'Collaboration',
      titleMain: 'Parlons De',
      titleHighlight: 'Votre Projet',
      subtitle: 'Un besoin d\'architecture, de développement web ou d\'application mobile ? Échangeons sur vos objectifs.',
      cardTitle: 'Contactez-moi',
      cardDesc: `Vous avez un projet web, mobile ou microservices à concevoir ? Je suis disponible pour échanger sur vos besoins techniques et donner vie à vos idées.`,
      emailLabel: 'Email Direct',
      locationLabel: 'Localisation',
      locationValue: 'Dakar, Sénégal (Disponible en remote)',
      socialLabel: 'Réseaux Professionnels & Code',
      formTitle: 'Envoyez-moi un message',
      formSubtitle: 'Je réponds rapidement pour discuter de vos projets et opportunités.',
      nameLabel: 'Nom complet',
      namePlaceholder: 'Ex: Amadou Diallo',
      emailInputLabel: 'Adresse Email',
      emailPlaceholder: 'Ex: amadou@example.com',
      messageLabel: 'Description du projet',
      messagePlaceholder: 'Parlez-moi de votre besoin, objectifs, calendrier ou technologies souhaitées...',
      submitBtn: 'Envoyer le Message',
      submittingBtn: 'Transmission en cours...',
      successTitle: 'Message transmis avec succès !',
      successDesc: `Votre message a été envoyé directement dans ma boîte mail (<strong>ndiaye.mor0409@gmail.com</strong>). Je vous répondrai dans les plus brefs délais.`,
      activationTitle: 'Confirmation d\'activation requise',
      activationDesc: `Un email de validation vient d'être envoyé à <strong>ndiaye.mor0409@gmail.com</strong>. Cliquez sur « Activate Form » dans votre boîte Gmail pour activer la réception immédiate !`,
      errorTitle: 'Transmission directe indisponible',
      errorDesc: `Vous pouvez m'écrire directement par email à`
    },
    footer: {
      desc: 'Développeur Full Stack & Mobile passionné par la conception de solutions logicielles scalables, ergonomiques et à fort impact.',
      status: 'Disponible pour nouveaux projets & CDI',
      navTitle: 'Navigation',
      expertiseTitle: 'Expertise',
      contactTitle: 'Contact Direct',
      downloadCv: 'Télécharger mon CV',
      copyright: '© 2026 Mor Ndiaye. Tous droits réservés.',
      credits: 'Conçu avec passion • Angular 17 & Material Design'
    }
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      skills: 'Skills',
      services: 'Services',
      projects: 'Projects',
      contact: 'Contact',
      cv: 'CV',
      themeDarkTooltip: 'Switch to dark mode',
      themeLightTooltip: 'Switch to light mode',
      langTooltip: 'Passer en Français'
    },
    hero: {
      status: 'Available for new opportunities & freelance missions',
      hello: 'Hello, I am',
      name: 'Mor Ndiaye',
      role: 'Full Stack & Mobile Engineer',
      subtitle: `I design and build high-performance web applications, mobile platforms, and microservices architectures (<strong>Spring Boot</strong>, <strong>Angular 17</strong>, <strong>Flutter</strong>), with proven expertise in healthcare, agritech, and enterprise ERP systems.`,
      cvBtn: 'View my Resume',
      contactBtn: 'Schedule a Call',
      projectsBtn: 'Explore Projects',
      highlightDegree: 'Master 1 in Software Engineering',
      highlightProjects: '5+ Full Stack & Mobile Projects',
      highlightLocation: 'Dakar & Remote Worldwide'
    },
    about: {
      badge: 'My Background',
      titleMain: 'About',
      titleHighlight: 'Me',
      subtitle: 'A dual backend and frontend/mobile skill set to build end-to-end robust software solutions.',
      backendCardTitle: 'Backend & Microservices Architecture',
      backendCardDesc: 'Designing secure RESTful APIs, event streaming (Kafka), and relational database modeling (PostgreSQL/MySQL).',
      frontendCardTitle: 'Frontend & Cross-Platform Mobile',
      frontendCardDesc: 'Developing responsive web apps with Angular and fluid cross-platform mobile apps with Flutter (iOS & Android).',
      activeText: 'Active',
      backendFocusBadge: 'Backend & Microservices Expertise',
      backendFocusTitle: 'Microservices Architectures & Resilient Systems',
      backendParagraphs: [
        `As a backend engineer specialized in <strong>Java & Spring Boot</strong>, I design modular, secure microservices architectures (<strong>OAuth2, JWT</strong>), with <strong>Apache Kafka</strong> event streaming and relational databases (<strong>PostgreSQL, MySQL</strong>).`,
        `I architected the backend core of the <strong>Blood Donation Portal</strong> (handling mission-critical real-time flows) and the <strong>PharmaGest</strong> pharmacy ERP with highly optimized RESTful APIs.`
      ],
      backendStats: [
        { num: '2+', label: 'Years of Experience' },
        { num: '5+', label: 'APIs & Microservices' },
        { num: '100%', label: 'Uptime & Security' }
      ],
      frontendFocusBadge: 'Frontend & Mobile Expertise',
      frontendFocusTitle: 'Responsive Web Interfaces & Fluid Mobile Apps',
      frontendParagraphs: [
        `Crafting rich digital experiences with <strong>Angular 17+</strong> (Angular Material, polished micro-interactions) and fluid, reactive cross-platform mobile apps using <strong>Flutter</strong> (iOS & Android).`,
        `I engineered the <strong>Smart Poultry</strong> mobile app (comprehensive poultry farm monitoring), the <strong>AgriConnect</strong> agricultural marketplace, and the <strong>LiveWeather</strong> real-time forecast mobile app.`
      ],
      frontendStats: [
        { num: 'iOS & Android', label: 'Cross-Platform Support' },
        { num: '60 FPS', label: 'Smooth Native Feel' },
        { num: '100%', label: 'Responsive Design' }
      ],
      cursusTitle: 'Academic Background & Education',
      cursusBacStep: 'Completed',
      cursusBacLevel: 'Secondary Education',
      cursusBacTitle: 'High School Diploma (Baccalaureate)',
      cursusBacDesc: 'Secondary graduation diploma marking entrance into the higher academic scientific track.',
      cursusL3Step: 'Graduated (Bachelor\'s)',
      cursusL3Level: 'Bachelor\'s Cycle',
      cursusL3Title: 'Bachelor\'s Degree in Software Engineering',
      cursusL3Desc: 'Foundations of computer science and software engineering: advanced algorithms, UML modeling, relational databases, and fullstack web & mobile development.',
      cursusM1Step: 'Currently Enrolled (M1)',
      cursusM1Level: 'Master\'s Cycle (Year 1)',
      cursusM1Title: 'Master 1 in Software Engineering',
      cursusM1Desc: 'Advanced engineering: distributed microservices, event streaming architectures, application security, cloud-native paradigms, and complex system design.'
    },
    skills: {
      badge: 'Technical Expertise',
      titleMain: 'My',
      titleHighlight: 'Skills',
      subtitle: 'Mastery of modern engineering stacks to design reliable, scalable, and maintainable software systems.',
      catFrontend: 'Frontend & Mobile',
      catBackend: 'Backend & Microservices',
      catArch: 'Architecture & Data',
      skillMonolithMicro: 'Monolith & Microservices',
      skillDatabases: 'MySQL / PostgreSQL',
      skillSecurity: 'RESTful APIs & Security (JWT)',
      skillSpringData: 'Spring Data JPA & Hibernate'
    },
    services: {
      badge: 'Service Offerings',
      titleMain: 'My',
      titleHighlight: 'Services',
      subtitle: 'Tailored software engineering services, from system architecture design to production deployment.',
      webTitle: 'Web Development',
      webDesc: 'Crafting modern, high-performance web applications using Angular, responsive and optimized across all viewports.',
      webFeatures: [
        'Single Page Applications',
        'SEO Friendly & Accessible',
        'Modern & Ergonomic UX/UI'
      ],
      backendTitle: 'Backend Architecture',
      backendDesc: 'Building robust, scalable architectures in Java/Spring Boot or Laravel, mastering both monolithic and microservices paradigms.',
      backendFeatures: [
        'High-Performance RESTful APIs',
        'Microservices Architectures',
        'Security & Auth (JWT/OAuth2)'
      ],
      mobileTitle: 'Mobile Applications',
      mobileDesc: 'Developing cross-platform mobile applications with Flutter for native look, feel, and performance on iOS and Android.',
      mobileFeatures: [
        'iOS & Android Cross-Platform',
        'Fluidity & Native Performance',
        'REST APIs & Real-Time Sync'
      ]
    },
    projects: {
      badge: 'Featured Work',
      titleMain: 'My Key',
      titleHighlight: 'Projects',
      subtitle: 'Explore a curated selection of web, mobile, and backend architectures crafted with rigor, performance, and attention to detail.',
      filterAll: 'All',
      filterWeb: 'Web & Portals',
      filterMobile: 'Mobile & Flutter',
      filterBackend: 'Backend',
      viewDetails: 'View Details',
      viewDemo: 'Live Demo',
      gitlabRepo: 'GitLab Repository',
      githubRepo: 'GitHub Repository',
      items: [
        {
          id: 'don-sang',
          title: 'Blood Donation Platform',
          subtitle: 'Comprehensive Ecosystem: Hospital Portal, Citizen Web & Mobile App',
          category: 'fullstack',
          categoryLabel: 'Web & Mobile Ecosystem',
          shortDescription: 'Complete blood donation management ecosystem: real-time hospital administrative dashboard, citizen web portal, and Flutter mobile app with geo-targeted emergency alerts.',
          fullDescription: 'An end-to-end digital solution designed to streamline the blood donation supply chain. The administration portal provides transfusion centers and hospitals with real-time stock monitoring to prevent shortages and ensure pouch traceability. The citizen web platform enables donors to test their eligibility and book appointments. The Flutter mobile app geolocates collection centers and delivers targeted emergency push notifications by blood type.',
          icon: 'bx-donate-blood',
          colorGradient: 'linear-gradient(135deg, #8B5CF6 0%, #6D28D9 100%)',
          accentColor: '#8B5CF6',
          tags: ['Angular 17', 'Spring Boot', 'PostgreSQL', 'JWT Security', 'Flutter', 'Dart', 'Google Maps API', 'Push Notifications', 'REST API'],
          features: [
            'Real-time blood stock inventory by group (A, B, AB, O +/-) for hospitals and collection hubs',
            'Citizen portal: online appointment scheduling, eligibility quiz, and collection center locator',
            'Mobile app with interactive maps and digitized donor card',
            'Targeted emergency push notifications based on blood group and distance radius',
            'Automated critical threshold alert system preventing life-threatening shortages',
            'Secure donor records management (OAuth2/JWT) and full bag traceability from donation to transfusion'
          ],
          architecture: 'Ecosystem of three applications interconnected through a unified Spring Boot REST API secured with JWT: an Angular 17 hospital administration portal, a citizen web portal, and a Flutter mobile app (BLoC pattern) for donors, backed by PostgreSQL.',
          githubUrl: 'https://gitlab.com/ndiaye_tech/sene-sang-portail',
          liveUrl: '#',
          repos: [
            { label: 'Hospital Portal (GitLab)', url: 'https://gitlab.com/ndiaye_tech/sene-sang-portail' },
            { label: 'Citizen Web & Mobile (GitLab)', url: 'https://gitlab.com/ndiaye_tech/sene-sang' }
          ],
          metrics: [
            { label: 'Management', value: 'Real-time' },
            { label: 'Security', value: 'OAuth2 / JWT' },
            { label: 'Platforms', value: 'Web & Mobile' }
          ]
        },
        {
          id: 'agriconnect',
          title: 'AgriConnect',
          subtitle: 'Digital Agricultural Ecosystem & Smart Marketplace',
          category: 'fullstack',
          categoryLabel: 'Full Stack & Web/Mobile',
          shortDescription: 'Innovative platform connecting farmers directly to buyers, with crop tracking, market commodity rates, and agro-meteorological guidance.',
          fullDescription: 'AgriConnect is a high-impact socio-economic technological solution created to empower local agriculture. It provides farmers with a direct sales channel free of abusive middlemen, real-time commodity price tracking across regional markets, and agro-climatic forecasting to optimize planting and harvesting schedules.',
          icon: 'bx-leaf',
          colorGradient: 'linear-gradient(135deg, #A855F7 0%, #7E22CE 100%)',
          accentColor: '#A855F7',
          tags: ['Angular', 'Spring Boot', 'Flutter', 'MySQL', 'OpenWeather API', 'Chart.js'],
          features: [
            'B2B/B2C marketplace for direct commercialization of harvests',
            'Dynamic analytical dashboard for regional market commodity pricing trends',
            'Personalized agronomic advice module and localized crop calendar',
            'Targeted weather alerts safeguarding crops from adverse climatic conditions',
            'Logistics module to coordinate transportation and order fulfillment'
          ],
          architecture: 'Fullstack ecosystem with Spring Boot backend, Angular management dashboard, and Flutter mobile app tailored for farmers on the field.',
          githubUrl: 'https://gitlab.com/ndiaye_tech/agri_connect',
          liveUrl: '#',
          metrics: [
            { label: 'Direct Trade', value: '100% Direct' },
            { label: 'Market Data', value: 'Daily' },
            { label: 'Platform', value: 'GitLab' }
          ]
        },
        {
          id: 'gestion-pharmacie',
          title: 'PharmaGest - Pharmacy ERP',
          subtitle: 'Comprehensive Pharmacy Management, Stock & Medicine Traceability',
          category: 'web',
          categoryLabel: 'ERP / Management System',
          shortDescription: 'Robust pharmacy management software: inventory control with expiration alerts, prescription dispensing, POS checkout, and supplier tracking.',
          fullDescription: 'PharmaGest is an enterprise pharmacy software designed to streamline daily pharmacy operations. The system guarantees tight control over incoming and outgoing stocks, proactive expiration and shortage alerts, multi-tender POS billing, and comprehensive automated profitability reports.',
          icon: 'bx-capsule',
          colorGradient: 'linear-gradient(135deg, #3B82F6 0%, #1D4ED8 100%)',
          accentColor: '#3B82F6',
          tags: ['Spring Boot', 'Angular', 'PostgreSQL', 'JasperReports', 'Spring Security', 'REST API'],
          features: [
            'Advanced inventory control tracking batches, dosages, and expiration dates',
            'Proactive alert engine: stock depletion warnings and imminent expirations',
            'Fast Point of Sale (POS) with barcode scanner and receipt printing',
            'Prescription dispensing workflows and third-party insurance billing',
            'Automated supplier purchase orders and delivery validation',
            'Exportable financial, inventory, and margin analytics (PDF JasperReports & Excel)'
          ],
          architecture: 'Secured multi-tier architecture powered by Spring Boot, PostgreSQL for ACID transactional reliability, and Angular for the client interface.',
          githubUrl: 'https://github.com/morndiaye2007',
          liveUrl: '#',
          metrics: [
            { label: 'Reliability', value: '100% ACID' },
            { label: 'Alerts', value: 'Automated' },
            { label: 'Reports', value: 'PDF / Excel' }
          ]
        },
        {
          id: 'smart-poulailler',
          title: 'Smart Poultry - Mobile App',
          subtitle: 'Mobile Application for Poultry Farm Monitoring & Management',
          category: 'mobile',
          categoryLabel: 'Mobile Application',
          shortDescription: 'Intuitive mobile application for poultry farm operations: flock tracking, egg production curves, feeding, expenses, and net profit margins.',
          fullDescription: 'Smart Poultry is a Flutter mobile application built to digitize and simplify daily farm operations on smartphones. Farmers can monitor flock batches (chicks, broilers, layers), log feed consumption and veterinary care, analyze laying and mortality curves, and compute net profitability per flock automatically.',
          icon: 'bx-mobile-alt',
          colorGradient: 'linear-gradient(135deg, #00D2FF 0%, #0284C7 100%)',
          accentColor: '#00D2FF',
          tags: ['Flutter', 'Dart', 'Spring Boot', 'PostgreSQL', 'REST API', 'Charts / Analytics'],
          features: [
            'Comprehensive flock batch tracking (age, head counts, laying rates, mortality)',
            'Feed inventory monitoring, daily consumption logs, and veterinary treatments',
            'Analytical production curves and egg laying performance charts',
            'Direct logging of egg and chicken sales with customer directory',
            'Automated instant calculation of profit margins and batch economics'
          ],
          architecture: 'Flutter mobile app with robust state management, connected to a secure Spring Boot REST API and PostgreSQL database.',
          githubUrl: 'https://github.com/morndiaye2007/Smart-Poulailler',
          liveUrl: '#',
          metrics: [
            { label: 'Platform', value: 'Flutter Mobile' },
            { label: 'Repository', value: 'Public GitHub' },
            { label: 'Analytics', value: 'Visual Charts' }
          ]
        },
        {
          id: 'meteo-mobile',
          title: 'LiveWeather Mobile',
          subtitle: 'Interactive Weather Application & Real-Time Forecasts',
          category: 'mobile',
          categoryLabel: 'Mobile Application',
          shortDescription: 'Sleek mobile weather app offering hyper-accurate forecasts, dynamic atmospheric animations, and interactive weather radar.',
          fullDescription: 'A modern mobile weather app combining clean aesthetics and meteorological precision. Powered by the OpenWeather API, it delivers real-time climate data (feels-like temperature, humidity, wind, UV index, hourly and 7-day forecasts) accompanied by immersive visual micro-animations.',
          icon: 'bx-cloud-lightning',
          colorGradient: 'linear-gradient(135deg, #22D3EE 0%, #0E7490 100%)',
          accentColor: '#22D3EE',
          tags: ['Flutter', 'Dart', 'OpenWeather API', 'Lottie Animations', 'Geolocator'],
          features: [
            'Automatic GPS position detection with instant local weather refresh',
            'Detailed hourly forecasts and 7-day climatic trends',
            'Dynamic micro-animations reacting to real-time ambient conditions',
            'Global city search with saved favorites list',
            'Offline mode with persistent local cache of last fetched readings'
          ],
          architecture: 'Flutter with Provider state management, 60fps Lottie animations, and persistent caching.',
          githubUrl: 'https://github.com/morndiaye2007',
          liveUrl: '#',
          metrics: [
            { label: 'Data', value: 'Real-time' },
            { label: 'Accuracy', value: 'Hour by Hour' },
            { label: 'Animations', value: 'Fluid 60fps' }
          ]
        }
      ]
    },
    dialog: {
      overviewTitle: 'Overview & Context',
      featuresTitle: 'Key Features & Business Value',
      archTitle: 'Architecture & Tech Stack',
      accessDemo: 'Live Demo',
      closeBtn: 'Close',
      gitlabRepo: 'GitLab Repository',
      githubRepo: 'GitHub Repository'
    },
    contact: {
      badge: 'Collaboration',
      titleMain: 'Let\'s Discuss',
      titleHighlight: 'Your Project',
      subtitle: 'Need architecture expertise, web development, or a cross-platform mobile app? Let\'s discuss your goals.',
      cardTitle: 'Get in Touch',
      cardDesc: 'Have a web, mobile, or microservices project to build? I am available to discuss your technical specifications and bring your ideas to life.',
      emailLabel: 'Direct Email',
      locationLabel: 'Location',
      locationValue: 'Dakar, Senegal (Available for remote)',
      socialLabel: 'Professional Networks & Code',
      formTitle: 'Send Me a Message',
      formSubtitle: 'I reply promptly to discuss your projects, requirements, and opportunities.',
      nameLabel: 'Full Name',
      namePlaceholder: 'E.g., John Doe',
      emailInputLabel: 'Email Address',
      emailPlaceholder: 'E.g., john@example.com',
      messageLabel: 'Project Description',
      messagePlaceholder: 'Tell me about your needs, objectives, timeline, or preferred technologies...',
      submitBtn: 'Send Message',
      submittingBtn: 'Sending...',
      successTitle: 'Message sent successfully!',
      successDesc: 'Your message has been sent directly to my inbox (<strong>ndiaye.mor0409@gmail.com</strong>). I will reply promptly.',
      activationTitle: 'Activation confirmation required',
      activationDesc: 'A validation email was sent to <strong>ndiaye.mor0409@gmail.com</strong>. Click « Activate Form » in Gmail to enable immediate delivery!',
      errorTitle: 'Direct transmission unavailable',
      errorDesc: 'You can write to me directly at'
    },
    footer: {
      desc: 'Full Stack & Mobile Engineer passionate about designing scalable, ergonomic, and high-impact digital solutions.',
      status: 'Available for new projects & full-time roles',
      navTitle: 'Navigation',
      expertiseTitle: 'Expertise',
      contactTitle: 'Direct Contact',
      downloadCv: 'Download Resume',
      copyright: '© 2026 Mor Ndiaye. All rights reserved.',
      credits: 'Crafted with passion • Angular 17 & Material Design'
    }
  }
};
