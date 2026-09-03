import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

export interface Project {
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
  architecture?: string;
  githubUrl?: string;
  liveUrl?: string;
  metrics?: { label: string; value: string }[];
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isMenuOpen = false;
  activeFilter: string = 'all';
  selectedProject: Project | null = null;

  projects: Project[] = [
    {
      id: 'don-sang-web',
      title: 'Don de Sang - Portail Web',
      subtitle: 'Système Centralisé de Gestion des Banques de Sang & Hôpitaux',
      category: 'web',
      categoryLabel: 'Portail Web & Backend',
      shortDescription: 'Plateforme web administrative et médicale permettant la gestion en temps réel des stocks de sang, la planification des collectes et le suivi des dons.',
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
      githubUrl: 'https://github.com/morndiaye2007',
      liveUrl: '#',
      metrics: [
        { label: 'Gestion', value: 'Temps réel' },
        { label: 'Sécurité', value: 'OAuth2 / JWT' },
        { label: 'Architecture', value: 'RESTful API' }
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
      icon: 'bx-donate-blood',
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
      githubUrl: 'https://github.com/morndiaye2007',
      liveUrl: '#',
      metrics: [
        { label: 'Plateformes', value: 'Android & iOS' },
        { label: 'Temps Réponse', value: '< 200ms' },
        { label: 'Notifications', value: 'Temps Réel' }
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
      githubUrl: 'https://github.com/morndiaye2007',
      liveUrl: '#',
      metrics: [
        { label: 'Circuit Court', value: '100% Direct' },
        { label: 'Données Marché', value: 'Quotidiennes' },
        { label: 'Solution', value: 'Web & Mobile' }
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
      githubUrl: 'https://github.com/morndiaye2007',
      liveUrl: '#',
      metrics: [
        { label: 'Plateforme', value: 'Mobile Flutter' },
        { label: 'Gestion', value: 'Bandes & Ventes' },
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

  get filteredProjects(): Project[] {
    if (this.activeFilter === 'all') {
      return this.projects;
    }
    if (this.activeFilter === 'web') {
      return this.projects.filter(p => p.category === 'web' || p.category === 'fullstack');
    }
    if (this.activeFilter === 'mobile') {
      return this.projects.filter(p => p.category === 'mobile' || p.category === 'fullstack');
    }
    if (this.activeFilter === 'backend') {
      return this.projects.filter(p => p.category === 'backend' || p.category === 'fullstack');
    }
    return this.projects.filter(p => p.category === this.activeFilter);
  }

  get projectCount(): { all: number; web: number; mobile: number; backend: number } {
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

  openProjectModal(project: Project) {
    this.selectedProject = project;
    document.body.style.overflow = 'hidden';
  }

  closeProjectModal() {
    this.selectedProject = null;
    document.body.style.overflow = 'auto';
  }

  @HostListener('window:keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent) {
    if (event.key === 'Escape' && this.selectedProject) {
      this.closeProjectModal();
    }
  }

  showBackToTop = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.showBackToTop = window.scrollY > 400;
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }

  ngOnInit() {
    this.initScrollAnimations();
  }

  private initScrollAnimations() {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.animate-fade-up');
    animatedElements.forEach(el => observer.observe(el));
  }
}

