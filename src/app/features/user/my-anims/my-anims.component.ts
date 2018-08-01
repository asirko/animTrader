import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { AnimService } from '../../catalog/anim.service';

@Component({
  selector: 'at-user-home',
  templateUrl: './my-anims.component.html',
  styleUrls: ['./my-anims.component.scss']
})
export class MyAnimsComponent implements OnInit {

  newAnimForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private catalogService: AnimService,
  ) { }

  ngOnInit() {
    this.newAnimForm = this.fb.group({
      name: ['', Validators.required],
      file: ['', Validators.required],
    });
  }

  validate(fileElement: HTMLInputElement) {
    if (!this.newAnimForm.valid) {
      return;
    }

    const file = fileElement.files[0];
    const animationName = this.newAnimForm.value.name;
    this.getContent$(file).pipe(
      switchMap(content => this.catalogService.createAnimation$(content, animationName)),
    ).subscribe(console.log);
  }

  private getContent$(file): Observable<string> {
    return Observable.create(observer => {
      const reader = new FileReader();
      reader.readAsText(file, 'UTF-8');
      reader.onload = () => {
        observer.next(reader.result);
        observer.complete();
      };
      reader.onerror = evt => observer.error(evt.error);
    });
  }
}
