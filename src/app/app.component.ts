import { Component, OnInit, HostListener, AfterViewInit, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatRippleModule } from '@angular/material/core';
import { trigger, transition, style, animate, stagger, query, state, group, animateChild } from '@angular/animations';
import { Project, ProjectDialogComponent } from './project-dialog.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterOutlet,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatChipsModule,
    MatProgressBarModule,
    MatButtonToggleModule,
    MatFormFieldModule,
    MatInputModule,
    MatDividerModule,
    MatDialogModule,
    MatTooltipModule,
    MatRippleModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    // Section fade in from bottom
    trigger('fadeInUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(40px)' }),
        animate('600ms cubic-bezier(0.35, 0, 0.25, 1)', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ]),

    // Slide in from left
    trigger('slideInLeft', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(-60px)' }),
        animate('600ms cubic-bezier(0.35, 0, 0.25, 1)', style({ opacity: 1, transform: 'translateX(0)' }))
      ])
    ]),

    // Slide in from right
    trigger('slideInRight', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(60px)' }),
        animate('600ms cubic-bezier(0.35, 0, 0.25, 1)', style({ opacity: 1, transform: 'translateX(0)' }))
      ])
    ]),

    // Scale up entrance
    trigger('scaleIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.85)' }),
        animate('500ms cubic-bezier(0.35, 0, 0.25, 1)', style({ opacity: 1, transform: 'scale(1)' }))
      ])
    ]),

    // Stagger children cards
    trigger('staggerCards', [
      transition('* => *', [
        query(':enter', [
          style({ opacity: 0, transform: 'translateY(30px)' }),
          stagger(80, [
            animate('500ms cubic-bezier(0.35, 0, 0.25, 1)', style({ opacity: 1, transform: 'translateY(0)' }))
          ])
        ], { optional: true })
      ])
    ]),

    // Stagger skill items
    trigger('staggerSkills', [
      transition(':enter', [
        query('.skill-anim-item', [
          style({ opacity: 0, transform: 'translateX(-30px)' }),
          stagger(100, [
            animate('400ms cubic-bezier(0.35, 0, 0.25, 1)', style({ opacity: 1, transform: 'translateX(0)' }))
          ])
        ], { optional: true })
      ])
    ]),

    // Stat counter pop
    trigger('popIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.5)' }),
        animate('500ms 200ms cubic-bezier(0.34, 1.56, 0.64, 1)', style({ opacity: 1, transform: 'scale(1)' }))
      ])
    ]),

    // Filter change animation
    trigger('filterChange', [
      transition('* => *', [
        query(':enter', [
          style({ opacity: 0, transform: 'scale(0.9) translateY(20px)' }),
          stagger(60, [
            animate('400ms cubic-bezier(0.35, 0, 0.25, 1)', style({ opacity: 1, transform: 'scale(1) translateY(0)' }))
          ])
        ], { optional: true })
      ])
    ]),

    // Hero elements cascade
    trigger('heroCascade', [
      transition(':enter', [
        query('.hero-anim', [
          style({ opacity: 0, transform: 'translateY(30px)' }),
          stagger(150, [
            animate('600ms cubic-bezier(0.35, 0, 0.25, 1)', style({ opacity: 1, transform: 'translateY(0)' }))
          ])
        ], { optional: true })
      ])
    ]),

    // Dynamic About Tab content transition
    trigger('aboutTabChange', [
      transition('* => *', [
        style({ opacity: 0, transform: 'translateY(12px)' }),
        animate('350ms cubic-bezier(0.35, 0, 0.25, 1)', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class AppComponent implements OnInit, AfterViewInit {
  isMenuOpen = false;
  activeFilter: string = 'all';

  // Interactive About section tab
  selectedAboutTab: 'backend' | 'frontend' = 'backend';

  aboutContent = {
    backend: {
      badge: 'Expertise Backend & Microservices',
      title: 'Architectures Microservices & Systèmes Robustes',
      paragraphs: [
        `Ingénieur backend spécialisé en <strong>Java & Spring Boot</strong>, je conçois des architectures microservices modulaires et sécurisées (<strong>OAuth2, JWT</strong>), avec streaming d'événements <strong>Apache Kafka</strong> et bases de données relationnelles (<strong>PostgreSQL, MySQL</strong>).`,
        `J'ai notamment développé le socle backend du <strong>Portail Don de Sang</strong> (gestion de flux critiques en temps réel) et l'ERP de gestion pharmaceutique <strong>PharmaGest</strong> avec des APIs RESTful hautement optimisées.`
      ],
      stats: [
        { num: '3+', label: "Années d'Expérience" },
        { num: '10+', label: 'APIs & Microservices' },
        { num: '100%', label: 'Disponibilité & Sécurité' }
      ]
    },
    frontend: {
      badge: 'Expertise Frontend & Mobile',
      title: 'Interfaces Web Réactives & Applications Multiplateformes',
      paragraphs: [
        `Développeur d'expériences numériques sous <strong>Angular 17+</strong> (Angular Material, animations soignées) et d'applications mobiles cross-platform réactives et fluides avec <strong>Flutter</strong> (iOS & Android).`,
        `J'ai réalisé l'application mobile <strong>Smart Poulailler</strong> (monitoring avicole complet), la marketplace agricole <strong>AgriConnect</strong> et la solution mobile de prévisions en temps réel <strong>MétéoLive</strong>.`
      ],
      stats: [
        { num: 'iOS & Android', label: 'Support Multiplateforme' },
        { num: '60 FPS', label: 'Fluidité & Performance' },
        { num: '100%', label: 'Responsive Design' }
      ]
    }
  };

  selectAboutTab(tab: 'backend' | 'frontend') {
    this.selectedAboutTab = tab;
  }

  // Visibility flags for scroll-triggered animations
  heroVisible = false;
  aboutVisible = false;
  skillsVisible = false;
  servicesVisible = false;
  projectsVisible = false;
  contactVisible = false;

  projects: Project[] = [
    {
      id: 'don-sang-portail',
      title: 'Don de Sang - Portail',
      subtitle: 'Système Centralisé de Gestion des Banques de Sang & Hôpitaux',
      category: 'web',
      categoryLabel: 'Portail Web & Backend',
      shortDescription: 'Portail web administratif et médical permettant la gestion en temps réel des stocks de sang, la planification des collectes et le suivi des dons.',
      fullDescription: 'Une solution web complète conçue pour les centres de transfusion sanguine et les hôpitaux. Elle offre un tableau de bord en temps réel pour anticiper les pénuries de poches de sang, gérer les rendez-vous des donneurs, automatiser les alertes d\'urgence et sécuriser la traçabilité des poches de la collecte à la transfusion.',
      icon: 'bx-plus-medical',
      colorGradient: 'linear-gradient(135deg, #EF4444 0%, #B91C1C 100%)',
      accentColor: '#EF4444',
      tags: ['Angular 17', 'Spring Boot', 'PostgreSQL', 'JWT Security', 'Tailwind CSS', 'REST API'],
      features: [
        'Tableau de bord en temps réel des stocks par groupe sanguin (A, B, AB, O +/-)',
        'Gestion administrative des centres de collecte et des hôpitaux partenaires',
        'Module de planification et publication des campagnes de dons mobiles',
        'Système d\'alerte automatique en cas de seuil critique ou urgence vitale',
        'Gestion des dossiers donneurs et historique médical confidentiel'
      ],
      architecture: 'Architecture découplée avec frontend Angular 17 réactif et backend robuste Spring Boot sécurisé avec Spring Security et JWT.',
      githubUrl: 'https://gitlab.com/ndiaye_tech/sene-sang-portail',
      liveUrl: '#',
      metrics: [
        { label: 'Gestion', value: 'Temps réel' },
        { label: 'Sécurité', value: 'OAuth2 / JWT' },
        { label: 'Plateforme', value: 'GitLab' }
      ]
    },
    {
      id: 'don-sang-web',
      title: 'Don de Sang - Web',
      subtitle: 'Plateforme Citoyenne Web & Mobilisation des Donneurs',
      category: 'web',
      categoryLabel: 'Application Web',
      shortDescription: 'Plateforme web citoyenne permettant la sensibilisation, l\'inscription des donneurs, la prise de rendez-vous en ligne et les appels d\'urgence.',
      fullDescription: 'Portail web public interactif facilitant l\'engagement citoyen pour le don de sang. Il permet aux volontaires de localiser les collectes, de réserver un créneau de don, de tester leur éligibilité et de répondre rapidement aux appels d\'urgence vitale.',
      icon: 'bx-donate-blood',
      colorGradient: 'linear-gradient(135deg, #E11D48 0%, #BE123C 100%)',
      accentColor: '#E11D48',
      tags: ['Angular', 'Spring Boot', 'Tailwind CSS', 'REST API', 'PostgreSQL'],
      features: [
        'Espace citoyen et prise de rendez-vous pour les collectes fixes et mobiles',
        'Questionnaire préalable d\'éligibilité au don en ligne',
        'Affichage dynamique des besoins urgents par région',
        'Suivi des campagnes de sensibilisation et actualités'
      ],
      architecture: 'Frontend web Angular communicant avec une API REST Spring Boot performante et sécurisée.',
      githubUrl: 'https://gitlab.com/ndiaye_tech/sene-sang',
      liveUrl: '#',
      metrics: [
        { label: 'Rendez-vous', value: 'En ligne' },
        { label: 'Disponibilité', value: '24/7' },
        { label: 'Plateforme', value: 'GitLab' }
      ]
    },
    {
      id: 'don-sang-mobile',
      title: 'Don de Sang - App Mobile',
      subtitle: 'Application Citoyenne pour Donneurs & Alertes d\'Urgence',
      category: 'mobile',
      categoryLabel: 'Application Mobile',
      shortDescription: 'Application mobile Flutter intuitive pour géolocaliser les centres de collecte, recevoir des notifications d\'urgence vitale et suivre son carnet de don.',
      fullDescription: 'Application mobile dédiée aux citoyens et donneurs de sang réguliers ou occasionnels. Elle facilite l\'acte de donner en géolocalisant les centres les plus proches, en envoyant des notifications push ciblées lors d\'appels d\'urgence correspondant au groupe sanguin du donneur et en fournissant un carnet de santé digitalisé.',
      icon: 'bx-mobile-vibration',
      colorGradient: 'linear-gradient(135deg, #F43F5E 0%, #E11D48 100%)',
      accentColor: '#F43F5E',
      tags: ['Flutter', 'Dart', 'Google Maps API', 'Push Notifications', 'SQLite', 'REST API'],
      features: [
        'Carte interactive avec géolocalisation des centres fixes et collectes mobiles',
        'Prise de rendez-vous en ligne avec rappel automatique par notification',
        'Notifications push d\'urgence filtrées par groupe sanguin et rayon kilométrique',
        'Carnet numérique du donneur avec historique des dons et date du prochain don éligible',
        'Quiz d\'auto-évaluation d\'éligibilité au don avant déplacement'
      ],
      architecture: 'Application mobile multiplateforme développée sous Flutter avec architecture BLoC, notifications push et consommation d\'APIs REST.',
      githubUrl: 'https://gitlab.com/ndiaye_tech/sene-sang',
      liveUrl: '#',
      metrics: [
        { label: 'Plateformes', value: 'Android & iOS' },
        { label: 'Temps Réponse', value: '< 200ms' },
        { label: 'Plateforme', value: 'GitLab' }
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
      colorGradient: 'linear-gradient(135deg, #10B981 0%, #047857 100%)',
      accentColor: '#10B981',
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
      colorGradient: 'linear-gradient(135deg, #06B6D4 0%, #0E7490 100%)',
      accentColor: '#06B6D4',
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
      colorGradient: 'linear-gradient(135deg, #F59E0B 0%, #D97706 100%)',
      accentColor: '#F59E0B',
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
      colorGradient: 'linear-gradient(135deg, #3B82F6 0%, #1D4ED8 100%)',
      accentColor: '#3B82F6',
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
  ];

  constructor(private dialog: MatDialog) {}

  get filteredProjects(): Project[] {
    if (this.activeFilter === 'all') return this.projects;
    if (this.activeFilter === 'web') return this.projects.filter(p => p.category === 'web' || p.category === 'fullstack');
    if (this.activeFilter === 'mobile') return this.projects.filter(p => p.category === 'mobile' || p.category === 'fullstack');
    if (this.activeFilter === 'backend') return this.projects.filter(p => p.category === 'backend' || p.category === 'fullstack');
    return this.projects.filter(p => p.category === this.activeFilter);
  }

  get projectCount() {
    return {
      all: this.projects.length,
      web: this.projects.filter(p => p.category === 'web' || p.category === 'fullstack').length,
      mobile: this.projects.filter(p => p.category === 'mobile' || p.category === 'fullstack').length,
      backend: this.projects.filter(p => p.category === 'backend' || p.category === 'fullstack').length,
    };
  }

  setFilter(filter: string) {
    this.activeFilter = filter;
  }

  contactData = {
    name: '',
    email: '',
    message: ''
  };
  isSubmitting = false;
  formSubmitted = false;
  needsActivation = false;
  formError = false;

  async submitContactForm(event: Event) {
    event.preventDefault();
    if (!this.contactData.name || !this.contactData.email || !this.contactData.message) {
      return;
    }

    this.isSubmitting = true;
    this.formSubmitted = false;
    this.needsActivation = false;
    this.formError = false;

    try {
      const response = await fetch('https://formsubmit.co/ajax/ndiaye.mor0409@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: this.contactData.name,
          email: this.contactData.email,
          message: this.contactData.message,
          _subject: `Nouveau message Portfolio de ${this.contactData.name}`,
          _template: 'table',
          _captcha: 'false'
        })
      });

      const res = await response.json();
      if (response.ok && (res.success === 'true' || res.success === true || (res.message && res.message.includes('Activation')))) {
        this.formSubmitted = true;
        this.needsActivation = !!(res.message && res.message.includes('Activation'));
        this.contactData = { name: '', email: '', message: '' };
        setTimeout(() => {
          this.formSubmitted = false;
          this.needsActivation = false;
        }, 15000);
      } else {
        this.formError = true;
      }
    } catch (err) {
      console.error('Erreur transmission contact:', err);
      this.formError = true;
    } finally {
      this.isSubmitting = false;
    }
  }

  openProjectModal(project: Project) {
    this.dialog.open(ProjectDialogComponent, {
      data: project,
      width: '680px',
      maxWidth: '92vw',
      maxHeight: '88vh',
      panelClass: 'project-dialog-panel',
      autoFocus: false,
      restoreFocus: false
    });
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.checkSectionVisibility();
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }

  ngOnInit() {
    this.heroVisible = true;
  }

  ngAfterViewInit() {
    setTimeout(() => this.checkSectionVisibility(), 300);
  }

  private checkSectionVisibility() {
    const windowHeight = window.innerHeight;
    const offset = windowHeight * 0.82;

    const sections = [
      { id: 'about', flag: 'aboutVisible' },
      { id: 'skills', flag: 'skillsVisible' },
      { id: 'services', flag: 'servicesVisible' },
      { id: 'projects', flag: 'projectsVisible' },
      { id: 'contact', flag: 'contactVisible' }
    ];

    sections.forEach(section => {
      const el = document.getElementById(section.id);
      if (el) {
        const rect = el.getBoundingClientRect();
        if (rect.top < offset) {
          (this as any)[section.flag] = true;
        }
      }
    });
  }
}
