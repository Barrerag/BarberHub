import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BarbershopsService } from '../services/barbershops.service';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.page.html',
  styleUrls: ['./galeria.page.scss'],
})
export class GaleriaPage implements OnInit {
  barberia: Observable<any[]>;
  
  constructor(private barbershopService: BarbershopsService) {
    this.getData();
   }

  ngOnInit() {
  }

  getData(){
    this.barberia = this.barbershopService.getBarberiaById();
 }

}
