import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { CatalogItem } from './catalog-item';

@Injectable({
  providedIn: 'root'
})
export class CatalogService {

  readonly anims$: Observable<CatalogItem[]>;

  constructor(private db: AngularFirestore) {
    this.anims$ = db.collection<CatalogItem>('anims').valueChanges();
  }
}
