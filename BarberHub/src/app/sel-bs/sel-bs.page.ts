import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BarbershopsService } from '../services/barbershops.service';

@Component({
  selector: 'app-sel-bs',
  templateUrl: './sel-bs.page.html',
  styleUrls: ['./sel-bs.page.scss'],
})
export class SelBsPage implements OnInit {
  barberia : Observable<any[]>;


  constructor(private barbershopsService: BarbershopsService) { 
    this.getBarberias();
  }
  ngOnInit() {
    
  }

  getBarberias(){
    
    this.barberia = this.barbershopsService.getBarberias();
  }

  

}
