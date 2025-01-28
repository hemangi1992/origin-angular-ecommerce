import { Component, OnInit } from '@angular/core';
import { MobileDataService } from 'src/app/services/mobile-data.service';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.scss']
})
export class MobileComponent implements OnInit {

  mobileData: any;

  constructor(public mobileDataService: MobileDataService) {}

  ngOnInit(): void {
      this.mobileDataService.getMobileData()
        .subscribe(data => {
          this.mobileData = data.mobiles;
        })
  }
}
