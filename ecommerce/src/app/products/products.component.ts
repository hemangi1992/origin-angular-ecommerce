import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/header/login/login.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor(private loginService: LoginService) {}

  ngOnInit() {
    const userDetails = JSON.parse(localStorage.getItem('userDetails')!);
    if (userDetails) {
      this.loginService.userName.next(userDetails.firstname);
    } else {
      this.loginService.userName.next('');
    }
  }

}
