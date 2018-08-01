import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'at-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  user$ = this.authService.user$;

  constructor(
    private authService: AuthService,
  ) { }

  ngOnInit() {
  }

  logOut(): void {
    this.authService.logOut();
  }

}
