// קובץ קיים: src/app/hero-details/hero-details.component.ts

import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Hero } from '../hero';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from '../hero.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailsComponent implements OnInit {

  @Input() hero?: Hero; // מגיע מהאבא
  @Output() alertRequested = new EventEmitter<string>();
  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {}
  // אירוע שהבן שולח לאבא
  ngOnInit(): void {
    this.getHero();
   }
  getHero(): void {
    const id=this.route!.snapshot!.paramMap!.get('id')!;
    this.heroService.getHero(+id).subscribe(hero => this.hero = hero);
  }

  onButtonClick() {
    this.alertRequested.emit(); // מפעיל את האירוע → האבא יקבל אותו
  }
  goBack(): void {
    this.location.back();
  }
}