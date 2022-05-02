import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BarbershopsService } from '../services/barbershops.service';

@Component({
  selector: 'app-horario',
  templateUrl: './horario.page.html',
  styleUrls: ['./horario.page.scss'],
})
export class HorarioPage implements OnInit {
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
