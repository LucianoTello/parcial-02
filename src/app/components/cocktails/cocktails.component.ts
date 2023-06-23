import { Component, OnInit } from '@angular/core';
import { ApiservicesService } from 'src/app/services/apiservices.service';
import { TragoserviceService } from 'src/app/services/tragoservice.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cocktails',
  templateUrl: './cocktails.component.html',
  styleUrls: ['./cocktails.component.scss'],
})
export class CocktailsComponent  implements OnInit {

  constructor(private trago : TragoserviceService, private apiservices : ApiservicesService, private router : Router) { }

  selectedglass : string = '';
  
  dataFromParent : any ;
  bandera : boolean = false;
  data2 : any [] = [];

redirecttohome(){ 

  this.router.navigate(['']);   
}
  ngOnInit() {
   this.selectedglass = this.trago.vasoselec;
   this.dataFromParent = this.trago.data;
  }

}
