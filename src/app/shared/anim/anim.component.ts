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

    console.log(this.jsonPath === 'https://firebasestorage.googleapis.com/v0/b/anim-trader.appspot.com/o/animweb_Like_01.json?alt=media&token=7948b4a1-c8ae-47d1-beb5-673cefeddba3', this.jsonPath);

    const options = {
      container: this.elementRef.nativeElement,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      autoloadSegments: true,
      path: this.jsonPath,
    };

    const anim: any = lottie.loadAnimation(options);
    anim.addEventListener('DOMLoaded', val => {
      console.log('anim loaded', val);
    });
  }

}
