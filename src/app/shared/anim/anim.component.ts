import { Component, ElementRef, Input, OnInit } from '@angular/core';

declare let lottie: any;

@Component({
  selector: 'at-anim',
  templateUrl: './anim.component.html',
  styleUrls: ['./anim.component.scss']
})
export class AnimComponent implements OnInit {

  @Input() jsonPath: string;

  constructor(private elementRef: ElementRef) {}

  ngOnInit() {

    const options = {
      container: this.elementRef.nativeElement,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      autoloadSegments: true,
      path: this.jsonPath,
    };

    const anim: any = lottie.loadAnimation(options);
    anim.addEventListener('DOMLoaded', () => {
      console.log('anim loaded');
    });
  }

}
