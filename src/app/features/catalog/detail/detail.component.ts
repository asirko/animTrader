import { AfterViewInit, Component, HostBinding, HostListener, OnInit, ViewChild } from '@angular/core';
import { getInitialState, smallToBig, SmallToBigState } from './detail.component.animation';
import { AnimationEvent } from '@angular/animations';
import { ActivatedRoute, Router } from '@angular/router';
import { AnimComponent } from '../../../shared/components/anim/anim.component';

@Component({
  selector: 'at-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
  animations: [ smallToBig ],
})
export class DetailComponent implements OnInit, AfterViewInit {

  @HostBinding('@smallToBig')
  state: {value, params?: any };

  @HostListener('@smallToBig.done', ['$event'])
  closeWhenAnimationDone(e: AnimationEvent) {
    if (e.toState === SmallToBigState.INITIAL && e.fromState === SmallToBigState.OPEN) {
      this.router.navigate(['..'], {relativeTo: this.route});
    }
  }

  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.setInitialState();
  }

  setInitialState(closeIfNoInitialState = false) {
    const initialPosition = getInitialState();
    if (initialPosition && Object.values(initialPosition).some(v => v)) {
      this.state = { value: SmallToBigState.INITIAL, params: getInitialState() };
    } else if (closeIfNoInitialState) {
      this.router.navigate(['..'], {relativeTo: this.route});
    }
  }

  ngAfterViewInit(): void {
    setTimeout(() => this.state = { value: SmallToBigState.OPEN });
  }

}
