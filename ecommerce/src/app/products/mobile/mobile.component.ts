import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/header/login/login.service';
import { MobileDataService } from 'src/app/services/mobile-data.service';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.scss'],
})
export class MobileComponent implements OnInit {
  mobileData: any;

  constructor(
    public mobileDataService: MobileDataService,
    public loginService: LoginService
  ) {}

  ngOnInit(): void {
    this.mobileDataService.getMobileData().subscribe((data) => {
      this.mobileData = data.mobiles;
    });

    const userDetails = JSON.parse(localStorage.getItem('userDetails')!);
    if (userDetails) {
      this.loginService.userName.next(userDetails.firstname);
    } else {
      this.loginService.userName.next('');
    }
  }
}
