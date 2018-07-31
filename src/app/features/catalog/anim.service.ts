import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentReference } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { CatalogItem } from './catalog-item';
import { fromPromise } from 'rxjs/internal-compatibility';
import { genGuid } from '../../shared/utils/guid-utils';
import { map, mergeMap } from 'rxjs/operators';
import { AngularFireStorage } from 'angularfire2/storage';
import { Reference } from 'angularfire2/storage/interfaces';

@Injectable({
  providedIn: 'root'
})
export class AnimService {

  private _animsRef = this.db.collection<CatalogItem>('anims');

  readonly anims$: Observable<CatalogItem[]> = this._animsRef.valueChanges();

  constructor(
    private db: AngularFirestore,
    private storage: AngularFireStorage,
  ) {}

  createAnimation$(jsonContent: string, name: string): Observable<DocumentReference> {
    return this.uploadAnimAndRetrieveRef$(jsonContent).pipe(
      mergeMap(ref => ref.getDownloadURL()),
      mergeMap(url => fromPromise(this._animsRef.add({name, url}))),
    );
  }

  private uploadAnimAndRetrieveRef$(content: string): Observable<Reference> {
    const path = 'test/' + genGuid();
    const ref = this.storage.ref(path);
    const task = ref.putString(content);
    return fromPromise(task).pipe(
      map(val => val.ref)
    );
  }

}
