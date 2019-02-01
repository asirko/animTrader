import { Component, ElementRef, Input, OnDestroy, OnInit } from '@angular/core';
import { AnimationItem } from './lottie-type';
import { ReplaySubject } from 'rxjs';

declare let lottie: any;

@Component({
  selector: 'at-anim',
  templateUrl: './anim.component.html',
  styleUrls: ['./anim.component.scss']
})
export class AnimComponent implements OnInit, OnDestroy {

  private _anim: AnimationItem;

  private _markersName$ = new ReplaySubject<{label: string, value: number}[]>(1);
  markers$ = this._markersName$.asObservable();

  @Input() jsonPath: string;

  constructor(private elementRef: ElementRef) {}

  ngOnInit() {

    const options = {
      container: this.elementRef.nativeElement,
      renderer: 'svg',
      loop: false,
      autoplay: false,
      autoloadSegments: true,
      path: this.jsonPath,
    };

    this._anim = lottie.loadAnimation(options);
    this._anim.addEventListener('DOMLoaded', () => {
      this._markersName$.next([
        {label: 'Début', value: null},
        ...this._anim.animationData.markers.map(m => ({label: m.cm, value: m.tm})),
        {label: 'Fin', value: null},
      ]);
      this._markersName$.complete();
    });
  }

  ngOnDestroy(): void {
    this._markersName$.complete();
  }

  play(startFrame?: number, endFrame?: number) {
    this._anim.playSegments([startFrame || 0, endFrame || this._anim.totalFrames], true);
  }

}
