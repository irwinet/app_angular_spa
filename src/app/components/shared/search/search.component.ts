import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { HeroesService, Heroe } from '../../../services/heroes.service';



@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {

  heroes:Heroe[]=[];
  termino:string;

  constructor(private activatedRoute:ActivatedRoute,
              private router:Router,
              private heroesService:HeroesService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      this.heroes = this.heroesService.buscarHeroes(params['termino']);
      this.termino = params['termino'];
    });    
  }

  verHeroe(idx:number){
    console.log(idx);
    this.router.navigate(['/heroe',idx]);
  }

}
