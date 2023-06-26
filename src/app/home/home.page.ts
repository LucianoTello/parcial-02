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
 // selectedglass : string = "";
  selectedglasstwo : any;
  cocktail : string = "";
  
  constructor( private apiservices : ApiservicesService, private router:Router, private trago : TragoserviceService) { }

  ngOnInit() {
    this.getData();
  }
//esta funcion hace la peticion a la api y trae los tipos de vasos
  getData(){
    this.apiservices.getData().subscribe( data =>{
      if(data){
        this.data = data.drinks;
        // console.log(data.drinks.strDrink);
        console.log('esta es la primer peticionnnnnnnnnnnnnn');
         console.log(this.data);
      }else{
        alert('El servidor esta caido, vuelva a intentar mas tarde');
        this.router.navigate(['']);
      }
      
    })
  }
/**********************************fin*******************************************/
// esta funcion hace la peticion a la api y devuelve los tragos por vaso haciendo click en la lista
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
/**********************************fin*******************************************/
//esta funcion hace peticion a la api y devuelve los tragos por vaso escribiendo el nombre del vaso en el search
  filtercocktailsbyglass(){
    this.apiservices.getcocktails(this.selectedglasstwo).subscribe( data =>{
    if(data){
      this.data2 = data;
      this.trago.data = data.drinks;
      this.trago.vasoselec = this.selectedglasstwo;
      this.redirect();
      this.selectedglasstwo = "";
    }else{
      alert('La descripcion ingresada no es correcta');
      this.selectedglasstwo = "";
    }
    
    } )
  }
/**********************************fin*******************************************/
//esta funcion hace peticion a la api y devuelve los tragos filtrados por la coincidencia del search
  filtercocktailsbyname(){
    this.apiservices.getcocktailsbyname(this.cocktail).subscribe( data =>{
      console.log(data);
      console.log('aca arribaaaaaaaaaaaaaaa');
      if (data && data.drinks === null){
        alert('El nombre ingresado no coincide con el nombre de ningun trago');
          this.cocktail = "";
      }else{       
        this.trago.cocktailname = data;
        console.log('probando filtro por nombreeeeee');
        console.log(this.cocktail);
        console.log(data);
        this.router.navigate(['cocktailsbyname']);
        this.cocktail = "";    
      }   
    })
  }
/**********************************fin*******************************************/
// redirecciona a la pagina donde se muestran los tragos por vaso
  redirect(){ 

      this.router.navigate(['cocktails']);   
  }
/**********************************fin*******************************************/
}
