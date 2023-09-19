import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private userService: UserService, private router: Router) {
  }
  user$ = this.userService.retornaUser();

  logout() {
    this.userService.logOut();
this.router.navigate(['/login'])
  }
}