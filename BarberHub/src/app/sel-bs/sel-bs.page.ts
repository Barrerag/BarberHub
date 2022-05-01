import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { BarbershopsService } from '../services/barbershops.service';

@Component({
  selector: 'app-sel-bs',
  templateUrl: './sel-bs.page.html',
  styleUrls: ['./sel-bs.page.scss'],
})
export class SelBsPage implements OnInit {
  barberia : Observable<any[]>;
  searchTerm: string;
  

  constructor(private barbershopsService: BarbershopsService, private router: Router) { 
    this.getBarberias();
  }
  ngOnInit() {
    
  }

  getDatosBarberia(id: string){
    console.log("sel-bs",id);
    this.barbershopsService.id_barberia = id;
    this.router.navigate(['/selected-b']);
  }

  getBarberias(){
    this.barberia = this.barbershopsService.getBarberias();
  }

  

}
