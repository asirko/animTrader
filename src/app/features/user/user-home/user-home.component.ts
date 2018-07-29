import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'at-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.scss']
})
export class UserHomeComponent implements OnInit {

  newAnimForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.newAnimForm = this.fb.group({
      name: '',
      file: null,
    });
  }

}
