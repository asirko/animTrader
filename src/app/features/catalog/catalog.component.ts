import { Component } from '@angular/core';
import { AnimService } from './anim.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MiniatureComponent } from '../../shared/components/miniature/miniature.component';
import { setInitialState } from './detail/detail.component.animation';

@Component({
  selector: 'at-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent {

  anims$ = this.catalogService.anims$;

  constructor(
    private catalogService: AnimService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  openDetail(event: MouseEvent, miniatureClicked: MiniatureComponent, id: string): void {
    setInitialState({
      width: miniatureClicked.relativeBoundingRect.width,
      minHeight: miniatureClicked.relativeBoundingRect.height,
      top: miniatureClicked.relativeBoundingRect.top,
      left: miniatureClicked.relativeBoundingRect.left,
    });
    this.router.navigate([id], {relativeTo: this.route});
  }

}
