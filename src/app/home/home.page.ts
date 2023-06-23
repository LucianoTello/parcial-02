import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiservicesService } from '../services/apiservices.service';
import { TragoserviceService } from '../services/tragoservice.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  data : any [] = [];
  data2 : any = "";
  selectedglass : string = "";
  selectedglasstwo : any;
  cocktail : string = "";
  

  constructor( private apiservices : ApiservicesService, private router:Router, private trago : TragoserviceService) { }

  ngOnInit() {
    this.getData();
  }


  getData(){
    this.apiservices.getData().subscribe( data =>{
      this.data = data.drinks;
     // console.log(data.drinks.strDrink);
     console.log('esta es la primer peticionnnnnnnnnnnnnn');
      console.log(this.data);
    })
  }

  getcocktails( glass : any){
    //this.vasose =  (document.getElementById("auxvaso") as HTMLInputElement).value;
    this.selectedglasstwo = glass.strGlass;
    //alert(this.vasose);
    this.apiservices.getcocktails(this.selectedglasstwo).subscribe( data =>{
      this.data2 = data;
      this.trago.data = data.drinks;
      this.trago.vasoselec = this.selectedglasstwo;
      console.log('prueba de ver data2');
      console.log(this.data2);
      this.redirect();
      this.selectedglasstwo = "";
    } )
  }

filtercocktails(){
  this.apiservices.getcocktails(this.selectedglasstwo).subscribe( data =>{
   if(data){
    this.data2 = data;
    this.trago.data = data.drinks;
    this.trago.vasoselec = this.selectedglasstwo;
    this.redirect();
    this.selectedglasstwo = "";
   }else{
     alert('La descripcion ingresada no es correcta');
   }
  
  } )
}

filtercocktailsbyname(){
  this.apiservices.getcocktailsbyname(this.cocktail).subscribe( data =>{
    this.trago.cocktailname = data;
    console.log('probando filtro por nombreeeeee');
    console.log(this.cocktail);
    this.router.navigate(['cocktailsbyname']);
    this.cocktail = "";

  })
}

  redirect(){ 

      this.router.navigate(['cocktails']);   
  }

}
