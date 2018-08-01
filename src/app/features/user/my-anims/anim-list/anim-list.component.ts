import { Component, OnInit } from '@angular/core';
import { AnimService } from '../../../catalog/anim.service';

@Component({
  selector: 'at-anim-list',
  templateUrl: './anim-list.component.html',
  styleUrls: ['./anim-list.component.scss']
})
export class AnimListComponent implements OnInit {

  list$ = this.animService.listForUser$;

  constructor(
    private animService: AnimService,
  ) { }

  ngOnInit() {
  }

}
