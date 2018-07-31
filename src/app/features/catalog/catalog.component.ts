import { Component, OnInit } from '@angular/core';
import { AnimService } from './anim.service';
import { Observable } from 'rxjs';
import { CatalogItem } from './catalog-item';

@Component({
  selector: 'at-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {

  anims$: Observable<CatalogItem[]>;

  constructor(private catalogService: AnimService) { }

  ngOnInit() {
    this.anims$ = this.catalogService.anims$;
  }

}
