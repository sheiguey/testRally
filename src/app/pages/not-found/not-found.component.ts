import { Component } from '@angular/core';
import { Location } from '@angular/common'
import { Router } from '@angular/router';
@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.scss'
})
export class NotFoundComponent {

  constructor(
    private location: Location,
    private router: Router  
  ) {}

  goBack() {
    this.router.navigate([''])
  }

  goLogin() {
    this.router.navigate(['/login'])
  }
}
