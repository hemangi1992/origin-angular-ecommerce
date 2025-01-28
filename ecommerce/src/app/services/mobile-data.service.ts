import { Injectable, OnInit } from '@angular/core';
import data from '../../assets/json/mobile-data.json';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MobileDataService implements OnInit{

  constructor(public http: HttpClient) { }

  ngOnInit(): void {
  }

  getMobileData() {
    return this.http.get<any>('../../assets/json/mobile-data.json');
  }
}
