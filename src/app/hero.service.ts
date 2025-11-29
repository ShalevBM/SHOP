import { Injectable } from '@angular/core';
import { HEROES } from './mock-heroes';
import { Hero } from './hero';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messagesService:MessageService) { }

  getHeroes(): Observable<Hero[]>{
    this.messagesService.add('HeroService: fetched heroes');
    return of(HEROES);
  }
}