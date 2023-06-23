import { Component, OnInit } from '@angular/core';
import { ApiservicesService } from 'src/app/services/apiservices.service';
import { TragoserviceService } from 'src/app/services/tragoservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cocktailsbyname',
  templateUrl: './cocktailsbyname.component.html',
  styleUrls: ['./cocktailsbyname.component.scss'],
})
export class CocktailsbynameComponent  implements OnInit {

  cocktailname : any = "";
  constructor(private trago : TragoserviceService, private apiservices : ApiservicesService, private router : Router) { }

  redirecttohome(){ 

    this.router.navigate(['']);   
}


  ngOnInit() {
this.cocktailname = this.trago.cocktailname;
    
  }

}
