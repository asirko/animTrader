import { AfterViewInit, Component, ElementRef, Input, OnInit } from '@angular/core';
import { CatalogItem } from '../../../features/catalog/catalog-item';

@Component({
  selector: 'at-miniature',
  templateUrl: './miniature.component.html',
  styleUrls: ['./miniature.component.scss']
})
export class MiniatureComponent implements AfterViewInit {

  @Input() catalogItem: CatalogItem;
  relativeBoundingRect: { left: number, top: number, width: number, height: number};

  constructor(
    private elementRef: ElementRef,
  ) { }

  ngAfterViewInit() {
    const el = <HTMLElement>this.elementRef.nativeElement;
      this.relativeBoundingRect = {
      width: el.offsetWidth,
      height: el.offsetHeight,
      top: el.offsetTop,
      left: el.offsetLeft,
    };
  }

}
