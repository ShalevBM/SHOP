import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { NgClass } from "../../../node_modules/@angular/common/index";
import { MessageService } from '../message.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
  
})

export class HeroesComponent implements OnInit{
  selectedHero ?: Hero;
// hero : Hero = {
//   id: 1,
//   name:'windstrom'
// };
constructor(private heroService: HeroService ,private messageService:MessageService) {} 
  heroes: Hero[]=[];
 

  getHeroes():void{
    this.heroService.getHeroes().subscribe((heroes) =>(this.heroes = heroes))
  }

  ngOnInit(): void {
    this.getHeroes();
  }

onSelect(hero:Hero):void{
  this.selectedHero= hero;
  this.messageService.add(`HeroesComponent: selected hero id=${hero.id}`);
}
showAlert() {
  alert('זה אלרט מהאבא!');
}
}