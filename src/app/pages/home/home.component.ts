import { Component, OnInit } from '@angular/core';
import { HostListener } from "@angular/core";
import { NgwWowService } from 'ngx-wow';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  width: string = '55';

  constructor(private wowService: NgwWowService) { 
    this.wowService.init(); 
    if(window.innerWidth > 1020){
      this.width = '55';
    }else if(window.innerWidth <= 1019){
      this.width = '100';
    }
  }

  ngOnInit(): void {
  }

  @HostListener('window:resize', ['$event'])
  public changeImg( $event: Event){
    const widthWindow = window.innerWidth;
    if ( widthWindow > 1020 ) {
      this.width = '55';
    }else if ( widthWindow <= 1019 ) {
      this.width = '100';
    }
  }

}
