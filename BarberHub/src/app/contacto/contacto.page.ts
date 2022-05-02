import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BarbershopsService } from '../services/barbershops.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.page.html',
  styleUrls: ['./contacto.page.scss'],
})
export class ContactoPage implements OnInit {
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
