import { Component, Input, OnInit } from '@angular/core';
import { CatalogItem } from '../../../features/catalog/catalog-item';

@Component({
  selector: 'at-miniature',
  templateUrl: './miniature.component.html',
  styleUrls: ['./miniature.component.scss']
})
export class MiniatureComponent implements OnInit {

  @Input() catalogItem: CatalogItem;

  constructor() { }

  ngOnInit() {
  }

}
