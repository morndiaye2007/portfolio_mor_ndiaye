import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { trigger, transition, style, animate, stagger, query } from '@angular/animations';

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
  selector: 'app-project-dialog',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatButtonModule, MatIconModule, MatDividerModule],
  animations: [
    trigger('featureStagger', [
      transition(':enter', [
        query('.feature-item', [
          style({ opacity: 0, transform: 'translateX(-15px)' }),
          stagger(50, [
            animate('350ms cubic-bezier(0.35, 0, 0.25, 1)', style({ opacity: 1, transform: 'translateX(0)' }))
          ])
        ], { optional: true })
      ])
    ]),
    trigger('fadeInSection', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(12px)' }),
        animate('350ms 80ms cubic-bezier(0.35, 0, 0.25, 1)', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ],
  template: `
    <div class="dialog-wrapper">
      <!-- Banner Header -->
      <div class="dialog-banner" [style.background]="data.colorGradient">
        <button class="dialog-close-btn" (click)="close()" aria-label="Fermer">
          <mat-icon>close</mat-icon>
        </button>
        <div class="banner-content">
          <div class="banner-icon">
            <i class='bx' [ngClass]="data.icon"></i>
          </div>
          <div class="banner-text">
            <span class="banner-category">{{ data.categoryLabel }}</span>
            <h2 class="banner-title">{{ data.title }}</h2>
            <p class="banner-subtitle">{{ data.subtitle }}</p>
          </div>
        </div>
      </div>

      <!-- Scrollable Content -->
      <div class="dialog-scroll-body">
        <!-- Presentation -->
        <div class="dialog-section" @fadeInSection>
          <h3 class="section-title">
            <mat-icon class="section-icon">description</mat-icon>
            Présentation & Contexte
          </h3>
          <p class="section-text">{{ data.fullDescription }}</p>
        </div>

        <!-- Metrics Chips -->
        <div class="metrics-row" *ngIf="data.metrics?.length">
          <div class="metric-box" *ngFor="let m of data.metrics">
            <span class="metric-box-val">{{ m.value }}</span>
            <span class="metric-box-lbl">{{ m.label }}</span>
          </div>
        </div>

        <mat-divider></mat-divider>

        <!-- Key Features -->
        <div class="dialog-section" *ngIf="data.features?.length" @featureStagger>
          <h3 class="section-title">
            <mat-icon class="section-icon">verified</mat-icon>
            Fonctionnalités Clés & Valeur Métier
          </h3>
          <ul class="feature-list">
            <li class="feature-item" *ngFor="let feat of data.features">
              <mat-icon class="feature-check" [style.color]="data.accentColor">check_circle</mat-icon>
              <span>{{ feat }}</span>
            </li>
          </ul>
        </div>

        <mat-divider></mat-divider>

        <!-- Architecture & Tech Stack -->
        <div class="dialog-section" *ngIf="data.architecture" @fadeInSection>
          <h3 class="section-title">
            <mat-icon class="section-icon">layers</mat-icon>
            Architecture & Stack Technique
          </h3>
          <p class="section-text arch-text">{{ data.architecture }}</p>
          <div class="tech-tags-wrap">
            <span class="dialog-tag-badge" *ngFor="let tag of data.tags">
              {{ tag }}
            </span>
          </div>
        </div>
      </div>

      <!-- Action Footer -->
      <div class="dialog-footer-actions">
        <a *ngIf="data.githubUrl" [href]="data.githubUrl" target="_blank" class="btn-action-outline">
          <i class='bx bxl-github' style="font-size: 1.25rem;"></i> Dépôt GitHub
        </a>
        <a *ngIf="data.liveUrl && data.liveUrl !== '#'" [href]="data.liveUrl" target="_blank" class="btn-action-gradient">
          <mat-icon style="font-size: 1.15rem; width: 1.15rem; height: 1.15rem;">open_in_new</mat-icon> Accéder à la Démo
        </a>
        <button class="btn-action-close" (click)="close()">
          Fermer
        </button>
      </div>
    </div>
  `,
  styles: [`
    :host {
      display: block;
      width: 100%;
      max-width: 100%;
      box-sizing: border-box;
      overflow: hidden;
    }

    .dialog-wrapper {
      display: flex;
      flex-direction: column;
      max-height: 88vh;
      width: 100%;
      background: #141E34;
      border-radius: 20px;
      overflow: hidden;
      box-sizing: border-box;
    }

    .dialog-banner {
      padding: 1.75rem 2rem 1.5rem;
      position: relative;
      flex-shrink: 0;
      color: #fff;
      box-sizing: border-box;
      width: 100%;
    }

    .dialog-close-btn {
      position: absolute;
      top: 14px;
      right: 14px;
      width: 36px;
      height: 36px;
      border-radius: 50%;
      border: 1px solid rgba(255, 255, 255, 0.25);
      background: rgba(0, 0, 0, 0.35);
      color: #FFFFFF;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      backdrop-filter: blur(8px);
      transition: all 0.2s ease;
      z-index: 5;
    }
    .dialog-close-btn:hover {
      background: rgba(0, 0, 0, 0.7);
      transform: scale(1.08);
    }
    .dialog-close-btn mat-icon {
      font-size: 1.25rem;
      width: 1.25rem;
      height: 1.25rem;
    }

    .banner-content {
      display: flex;
      align-items: center;
      gap: 1.25rem;
      padding-right: 2rem;
    }

    .banner-icon {
      width: 58px;
      height: 58px;
      border-radius: 16px;
      background: rgba(255, 255, 255, 0.22);
      backdrop-filter: blur(8px);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 2.2rem;
      color: #fff;
      flex-shrink: 0;
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.25);
    }

    .banner-text {
      display: flex;
      flex-direction: column;
      gap: 0.25rem;
      min-width: 0;
    }

    .banner-category {
      font-size: 0.7rem;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      font-weight: 700;
      background: rgba(255, 255, 255, 0.25);
      padding: 0.2rem 0.65rem;
      border-radius: 9999px;
      align-self: flex-start;
      color: #fff;
    }

    .banner-title {
      font-size: 1.4rem;
      font-weight: 800;
      color: #fff;
      margin: 0.15rem 0 0;
      line-height: 1.25;
      word-break: break-word;
    }

    .banner-subtitle {
      font-size: 0.88rem;
      color: rgba(255, 255, 255, 0.92);
      margin: 0;
      line-height: 1.4;
      word-break: break-word;
    }

    .dialog-scroll-body {
      padding: 1.5rem 2rem;
      overflow-y: auto;
      overflow-x: hidden;
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      gap: 1.25rem;
      box-sizing: border-box;
      max-height: calc(88vh - 180px);
    }

    .dialog-section {
      display: flex;
      flex-direction: column;
      gap: 0.65rem;
    }

    .section-title {
      font-size: 1rem;
      font-weight: 700;
      color: #FFFFFF;
      margin: 0;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    .section-icon {
      color: #818CF8;
      font-size: 1.25rem;
      width: 1.25rem;
      height: 1.25rem;
    }

    .section-text {
      color: #CBD5E1;
      font-size: 0.92rem;
      line-height: 1.65;
      margin: 0;
      word-break: break-word;
    }

    .metrics-row {
      display: flex;
      gap: 0.65rem;
      flex-wrap: wrap;
      margin: 0.25rem 0;
    }

    .metric-box {
      flex: 1;
      min-width: 90px;
      background: rgba(99, 102, 241, 0.08);
      border: 1px solid rgba(99, 102, 241, 0.2);
      border-radius: 10px;
      padding: 0.5rem 0.75rem;
      display: flex;
      flex-direction: column;
    }
    .metric-box-val {
      font-size: 0.88rem;
      font-weight: 700;
      color: #FFFFFF;
    }
    .metric-box-lbl {
      font-size: 0.65rem;
      color: #94A3B8;
      text-transform: uppercase;
      letter-spacing: 0.04em;
    }

    .feature-list {
      list-style: none;
      padding: 0;
      margin: 0;
      display: flex;
      flex-direction: column;
      gap: 0.6rem;
    }

    .feature-item {
      display: flex;
      align-items: flex-start;
      gap: 0.65rem;
      font-size: 0.9rem;
      color: #CBD5E1;
      line-height: 1.5;
      word-break: break-word;
    }

    .feature-check {
      font-size: 1.2rem;
      width: 1.2rem;
      height: 1.2rem;
      margin-top: 1px;
      flex-shrink: 0;
    }

    .tech-tags-wrap {
      display: flex;
      flex-wrap: wrap;
      gap: 0.45rem;
      margin-top: 0.35rem;
    }

    .dialog-tag-badge {
      font-size: 0.78rem;
      font-weight: 600;
      color: #A5B4FC;
      background: rgba(99, 102, 241, 0.12);
      border: 1px solid rgba(99, 102, 241, 0.25);
      padding: 0.35rem 0.75rem;
      border-radius: 8px;
    }

    .dialog-footer-actions {
      padding: 1rem 2rem;
      display: flex;
      align-items: center;
      gap: 0.75rem;
      border-top: 1px solid rgba(255, 255, 255, 0.08);
      background: #111A2E;
      flex-shrink: 0;
      flex-wrap: wrap;
      box-sizing: border-box;
    }

    .btn-action-outline {
      display: inline-flex;
      align-items: center;
      gap: 0.4rem;
      padding: 0.55rem 1.15rem;
      border: 1px solid rgba(255, 255, 255, 0.18);
      border-radius: 10px;
      color: #E2E8F0;
      font-size: 0.88rem;
      font-weight: 600;
      text-decoration: none;
      background: rgba(255, 255, 255, 0.04);
      transition: all 0.2s ease;
    }
    .btn-action-outline:hover {
      background: rgba(255, 255, 255, 0.1);
      color: #FFFFFF;
      transform: translateY(-2px);
    }

    .btn-action-gradient {
      display: inline-flex;
      align-items: center;
      gap: 0.4rem;
      padding: 0.55rem 1.25rem;
      border-radius: 10px;
      color: #FFFFFF;
      font-size: 0.88rem;
      font-weight: 600;
      text-decoration: none;
      background: linear-gradient(135deg, #6366F1, #8B5CF6);
      box-shadow: 0 4px 15px rgba(99, 102, 241, 0.35);
      transition: all 0.2s ease;
    }
    .btn-action-gradient:hover {
      box-shadow: 0 6px 20px rgba(99, 102, 241, 0.5);
      transform: translateY(-2px);
    }

    .btn-action-close {
      margin-left: auto;
      padding: 0.55rem 1.25rem;
      border-radius: 10px;
      border: 1px solid rgba(255, 255, 255, 0.12);
      background: rgba(255, 255, 255, 0.08);
      color: #FFFFFF;
      font-size: 0.88rem;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.2s ease;
    }
    .btn-action-close:hover {
      background: rgba(255, 255, 255, 0.16);
    }

    mat-divider {
      border-top-color: rgba(255, 255, 255, 0.08) !important;
    }

    @media (max-width: 640px) {
      .dialog-banner {
        padding: 1.25rem 1.25rem 1rem;
      }
      .dialog-scroll-body {
        padding: 1.25rem;
      }
      .banner-content {
        flex-direction: column;
        text-align: center;
        padding-right: 0;
      }
      .banner-category {
        align-self: center;
      }
      .banner-title {
        font-size: 1.2rem;
      }
      .dialog-footer-actions {
        padding: 0.85rem 1.25rem;
      }
      .btn-action-close {
        margin-left: 0;
        width: 100%;
        text-align: center;
      }
      .btn-action-outline, .btn-action-gradient {
        width: 100%;
        justify-content: center;
      }
    }
  `]
})
export class ProjectDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<ProjectDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Project
  ) {}

  close() {
    this.dialogRef.close();
  }
}
