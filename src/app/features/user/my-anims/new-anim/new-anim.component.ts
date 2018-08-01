import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { switchMap, tap } from 'rxjs/operators';
import { AnimService } from '../../../catalog/anim.service';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'at-new-anim',
  templateUrl: './new-anim.component.html',
  styleUrls: ['./new-anim.component.scss']
})
export class NewAnimComponent implements OnInit {

  newAnimForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private catalogService: AnimService,
    private router: Router,
    private route: ActivatedRoute,
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
      tap(() => this.router.navigate(['..'], { relativeTo: this.route }))
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
