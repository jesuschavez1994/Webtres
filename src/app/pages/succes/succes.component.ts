import { Component, OnInit } from '@angular/core';
import { NgwWowService } from 'ngx-wow';

@Component({
  selector: 'app-succes',
  templateUrl: './succes.component.html',
  styleUrls: ['./succes.component.css']
})
export class SuccesComponent implements OnInit {

  tag: boolean = true;

  constructor(private wowService: NgwWowService) {this.wowService.init();}

  ngOnInit(): void {
  }

}
