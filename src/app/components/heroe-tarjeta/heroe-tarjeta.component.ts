import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@Angular/router';


@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.css']
})
export class HeroeTarjetaComponent implements OnInit {

  @Input() heroe:any={};
  @Input() idx:number;

  @Output() heroeSelected:EventEmitter<number>;

  constructor(private router:Router) {
    this.heroeSelected=new EventEmitter();
   }

  ngOnInit(): void {
  }

  verHeroe(){
    // console.log(this.idx);
    this.router.navigate(['/heroe',this.idx]);
    //this.heroeSelected.emit(this.idx);
  }

}
