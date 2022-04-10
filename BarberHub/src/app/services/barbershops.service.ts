import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';

import { collection } from '@firebase/firestore';
@Injectable({
  providedIn: 'root'
})
export class BarbershopsService {

  barbershopsCollection : AngularFirestoreCollection;
  afs: AngularFirestore;
  constructor(private afsr: AngularFirestore) { 
    this.barbershopsCollection = afsr.collection('barberias');
    this.afs = afsr;
  }
  
  getBarberias(){
    return this.barbershopsCollection.valueChanges();
  }

}
