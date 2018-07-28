import { Component, OnInit } from '@angular/core';
import { CatalogService } from './catalog.service';
import { Observable } from 'rxjs';
import { CatalogItem } from './catalog-item';

@Component({
  selector: 'at-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {

  anims$: Observable<CatalogItem[]>;

  constructor(private catalogService: CatalogService) { }

  ngOnInit() {
    this.anims$ = this.catalogService.anims$;
  }

}
