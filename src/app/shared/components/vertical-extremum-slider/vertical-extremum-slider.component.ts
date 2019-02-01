import { ChangeDetectionStrategy, ChangeDetectorRef, Component, forwardRef, HostBinding, Input, OnChanges } from '@angular/core';
import { fromEvent, merge, Observable } from 'rxjs';
import { distinctUntilChanged, map, takeUntil, throttleTime } from 'rxjs/operators';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'at-vertical-extremum-slider',
  templateUrl: './vertical-extremum-slider.component.html',
  styleUrls: ['./vertical-extremum-slider.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => VerticalExtremumSliderComponent),
    multi: true
  }]
})
export class VerticalExtremumSliderComponent implements OnChanges, ControlValueAccessor {

  @Input() options: {label: string; value: any}[];
  startIndex;
  endIndex;
  startTopPercent: number;
  endBottomPercent: number;

  private _updateChanges: (value: [any, any]) => void = () => {};
  private _hasBeenTouch: () => void = () => {};
  @HostBinding('class.is-disable')
  private _isDisable = false;

  get value(): [any, any] {
    if ((this.startIndex !== 0 && !this.startIndex) || !this.endIndex || !this.options[this.startIndex] || !this.options[this.endIndex]) {
      return [null, null];
    }
    return [this.options[this.startIndex].value, this.options[this.endIndex].value];
  }

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
  ) {}

  ngOnChanges(): void {
    if (this.options) {
      if ((this.startIndex !== 0 && !this.startIndex) || !this.endIndex || this.endIndex > this.options.length - 1) {
        this.startIndex = 0;
        this.endIndex = this.options.length - 1;
        this._updateChanges(this.value);
      }
      this.updateRangePosition();
    }
  }

  updateRangePosition(): void {
    this.startTopPercent = (this.startIndex + 0.5) / this.options.length * 100;
    this.endBottomPercent = (this.options.length - (this.endIndex + 0.5)) / this.options.length * 100;
  }

  moveStart(event: MouseEvent) {
    if (this._isDisable) {
      return;
    }

    const elem = <HTMLElement>event.target;
    const optionsContainer = elem.parentElement.parentElement;

    followMovesToClosestIndex$(optionsContainer).subscribe(index => {
      const newIndex = index >= this.endIndex ? this.endIndex - 1 : index;
      if (newIndex !== this.startIndex) {
        this.startIndex = newIndex;
        this.updateRangePosition();
        this.changeDetectorRef.detectChanges();
        this._hasBeenTouch();
        this._updateChanges(this.value);
      }
    });
  }

  moveEnd(event: MouseEvent) {
    const elem = <HTMLElement>event.target;
    const optionsContainer = elem.parentElement.parentElement;

    followMovesToClosestIndex$(optionsContainer).subscribe(index => {
      const newIndex = index <= this.startIndex ? this.startIndex + 1 : index;
      if (newIndex !== this.endIndex) {
        this.endIndex = newIndex;
        this.updateRangePosition();
        this.changeDetectorRef.detectChanges();
      }
    });
  }

  registerOnChange(fn: (value: [number, number]) => void): void {
    this._updateChanges = fn;
  }

  registerOnTouched(fn: () => void): void {
    this._hasBeenTouch = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this._isDisable = isDisabled;
  }

  writeValue(value: [number, number]): void {
    if (value && value.length !== 2) {
      console.error('VerticalExtremumSliderComponent must receive an array of 2 number or null');
    } else if (value) {
      this.startIndex = value[0];
      this.endIndex = value[1];
      this.updateRangePosition();
      this.changeDetectorRef.detectChanges();
    }
  }
}

const stopInteracting$ = merge(
  fromEvent(document.body, 'touchend'),
  fromEvent(document.body, 'mouseup'),
);

const yMouse$ = fromEvent(document.body, 'mousemove').pipe(
  map((e: MouseEvent) => e.y),
);
const yTouche$ = fromEvent(document.body, 'touchmove').pipe(
  map((e: TouchEvent) => e.touches[0].clientY),
);

function followMovesToClosestIndex$(optionsContainer: HTMLElement): Observable<number> {
  return merge(yMouse$, yTouche$).pipe(
    takeUntil(stopInteracting$),
    throttleTime(100),
    map(y => calculateClosestIndex(y, optionsContainer)),
    distinctUntilChanged(),
  );
}

function calculateClosestIndex(y: number, optionsContainer: HTMLElement): number {
  const options = optionsContainer.querySelectorAll('.option');
  if (y < optionsContainer.getBoundingClientRect().top) {
    return 0;
  } else if (y > optionsContainer.getBoundingClientRect().bottom) {
    return options.length - 1;
  }

  for (let i = 0; i < options.length; i++) {
    if (y >= options[i].getBoundingClientRect().top && y <= options[i].getBoundingClientRect().bottom) {
      return i;
    }
  }

}
