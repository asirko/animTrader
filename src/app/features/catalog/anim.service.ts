import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentReference } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { CatalogItem } from './catalog-item';
import { fromPromise } from 'rxjs/internal-compatibility';
import { genGuid } from '../../shared/utils/guid-utils';
import { first, map, mergeMap } from 'rxjs/operators';
import { AngularFireStorage } from 'angularfire2/storage';
import { Reference } from 'angularfire2/storage/interfaces';
import { AuthService } from '../../core/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AnimService {

  private _animsRef = this.db.collection<CatalogItem>('anims');

  readonly anims$: Observable<CatalogItem[]> = this._animsRef.valueChanges();

  constructor(
    private db: AngularFirestore,
    private storage: AngularFireStorage,
    private authService: AuthService,
  ) {}

  createAnimation$(jsonContent: string, name: string): Observable<DocumentReference> {
    return this.authService.user$.pipe(
      first(),
      map(u => u.uid),
      mergeMap(uid => this.createAnimationForUid$(jsonContent, name, uid)),
    );
  }

  private createAnimationForUid$(jsonContent: string, name: string, uid: string): Observable<DocumentReference> {
    return this.uploadAnimAndRetrieveRef$(jsonContent, uid).pipe(
      mergeMap(ref => ref.getDownloadURL()),
      mergeMap(url => fromPromise(this._animsRef.add({name, url, authorUid: uid}))),
    );
  }

  private uploadAnimAndRetrieveRef$(content: string, uid: string): Observable<Reference> {
    const path = `${uid}/${genGuid()}`;
    const ref = this.storage.ref(path);
    const task = ref.putString(content);
    return fromPromise(task).pipe(
      map(val => val.ref)
    );
  }

}
