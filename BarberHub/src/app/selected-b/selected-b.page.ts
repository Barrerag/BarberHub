import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BarbershopsService } from '../services/barbershops.service';

@Component({
  selector: 'app-selected-b',
  templateUrl: './selected-b.page.html',
  styleUrls: ['./selected-b.page.scss'],
})
export class SelectedBPage implements OnInit {
  barberia: Observable<any[]>;

  constructor(private barbershopService: BarbershopsService) {
    this.getData();
    console.log("selected-bs",this.barbershopService.id_barberia);
    console.log("barberia by id: ", this.barbershopService.getBarberiaById());

   }

  ngOnInit() {
  }

  getData(){
     this.barberia = this.barbershopService.getBarberiaById();
  }
}
