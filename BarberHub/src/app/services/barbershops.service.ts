import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';

import { collection, query, where } from '@firebase/firestore';
import { flatMap } from 'rxjs/operators';
import { Barberia } from '../shared/barberia';
@Injectable({
  providedIn: 'root'
})
export class BarbershopsService {
  barbershopsCollection : AngularFirestoreCollection;
  afs: AngularFirestore;
  id_barberia: string;
  constructor(private afsr: AngularFirestore) { 
    this.barbershopsCollection = afsr.collection<Barberia>('barberias');
    this.afs = afsr;
  }
  
  getBarberias(){
    return this.barbershopsCollection.valueChanges();
  }

  getBarberiaById(){
    return this.afs.collection("barberias", ref=>ref.where("barbershop_id", "==", this.id_barberia))
    .valueChanges();
    
  }
}
