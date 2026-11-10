import { Component, OnInit, HostListener, AfterViewInit } from '@angular/core';
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
import { trigger, transition, style, animate, stagger, query } from '@angular/animations';
import { ProjectDialogComponent } from './project-dialog.component';
import { Language, Translations, TRANSLATIONS, ProjectTranslation } from './translations';

export type Project = ProjectTranslation;

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
  isDarkMode = true;
  activeFilter: string = 'all';

  // Internationalization (French & English)
  currentLang: Language = 'fr';

  get t(): Translations {
    return TRANSLATIONS[this.currentLang];
  }

  setLanguage(lang: Language) {
    this.currentLang = lang;
    if (typeof window !== 'undefined') {
      localStorage.setItem('language', lang);
      document.documentElement.lang = lang;
      document.title = lang === 'fr'
        ? 'Mor Ndiaye - Développeur Full Stack & Mobile | Portfolio'
        : 'Mor Ndiaye - Full Stack & Mobile Engineer | Portfolio';
    }
  }

  toggleLanguage() {
    this.setLanguage(this.currentLang === 'fr' ? 'en' : 'fr');
  }

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    if (this.isDarkMode) {
      document.documentElement.classList.remove('light');
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
      localStorage.setItem('theme', 'light');
    }
  }

  // Interactive About section tab
  selectedAboutTab: 'backend' | 'frontend' = 'backend';

  selectAboutTab(tab: 'backend' | 'frontend') {
    this.selectedAboutTab = tab;
  }

  get aboutContent() {
    return {
      backend: {
        badge: this.t.about.backendFocusBadge,
        title: this.t.about.backendFocusTitle,
        paragraphs: this.t.about.backendParagraphs,
        stats: this.t.about.backendStats
      },
      frontend: {
        badge: this.t.about.frontendFocusBadge,
        title: this.t.about.frontendFocusTitle,
        paragraphs: this.t.about.frontendParagraphs,
        stats: this.t.about.frontendStats
      }
    };
  }

  // Visibility flags for scroll-triggered animations
  heroVisible = false;
  aboutVisible = false;
  skillsVisible = false;
  servicesVisible = false;
  projectsVisible = false;
  contactVisible = false;

  get projects(): ProjectTranslation[] {
    return this.t.projects.items;
  }

  constructor(private dialog: MatDialog) {}

  get filteredProjects(): ProjectTranslation[] {
    const list = this.projects;
    if (this.activeFilter === 'all') return list;
    if (this.activeFilter === 'web') return list.filter(p => p.category === 'web' || p.category === 'fullstack');
    if (this.activeFilter === 'mobile') return list.filter(p => p.category === 'mobile' || p.category === 'fullstack');
    if (this.activeFilter === 'backend') return list.filter(p => p.category === 'backend' || p.category === 'fullstack');
    return list.filter(p => p.category === this.activeFilter);
  }

  get projectCount() {
    const list = this.projects;
    return {
      all: list.length,
      web: list.filter(p => p.category === 'web' || p.category === 'fullstack').length,
      mobile: list.filter(p => p.category === 'mobile' || p.category === 'fullstack').length,
      backend: list.filter(p => p.category === 'backend' || p.category === 'fullstack').length,
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
          _subject: `Nouveau message Portfolio de ${this.contactData.name} [${this.currentLang.toUpperCase()}]`,
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

  openProjectModal(project: ProjectTranslation) {
    this.dialog.open(ProjectDialogComponent, {
      data: {
        project: project,
        labels: this.t.dialog
      },
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
    this.aboutVisible = false;
    this.skillsVisible = false;
    this.servicesVisible = false;
    this.projectsVisible = false;
    this.contactVisible = false;

    if (typeof window !== 'undefined') {
      // Language detection & restore
      const savedLang = localStorage.getItem('language') as Language;
      if (savedLang === 'en' || savedLang === 'fr') {
        this.currentLang = savedLang;
      } else if (typeof navigator !== 'undefined' && navigator.language?.toLowerCase().startsWith('en')) {
        this.currentLang = 'en';
      } else {
        this.currentLang = 'fr';
      }
      document.documentElement.lang = this.currentLang;

      // Theme detection & restore
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme === 'light') {
        this.isDarkMode = false;
        document.documentElement.classList.remove('dark');
        document.documentElement.classList.add('light');
      } else {
        this.isDarkMode = true;
        document.documentElement.classList.remove('light');
        document.documentElement.classList.add('dark');
      }
    }
  }

  ngAfterViewInit() {
    this.setupIntersectionObserver();
  }

  private setupIntersectionObserver() {
    if (typeof IntersectionObserver !== 'undefined') {
      const observerOptions = {
        root: null,
        rootMargin: '0px 0px -10% 0px',
        threshold: 0.1
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            if (id === 'about') this.aboutVisible = true;
            if (id === 'skills') this.skillsVisible = true;
            if (id === 'services') this.servicesVisible = true;
            if (id === 'projects') this.projectsVisible = true;
            if (id === 'contact') this.contactVisible = true;
          }
        });
      }, observerOptions);

      ['about', 'skills', 'services', 'projects', 'contact'].forEach(id => {
        const el = document.getElementById(id);
        if (el) observer.observe(el);
      });
    }

    // Immediate check for visible top sections
    setTimeout(() => this.checkSectionVisibility(), 150);
  }

  private checkSectionVisibility() {
    const windowHeight = window.innerHeight;
    const offset = windowHeight * 0.9;

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
