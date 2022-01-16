import { Component, OnInit, Input } from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-nav-baar',
  templateUrl: './nav-baar.component.html',
  styleUrls: ['./nav-baar.component.css']
})
export class NavBaarComponent implements OnInit {

  @Input() tag!: boolean;

  constructor(private location: Location) { }

  ngOnInit(): void {
  }

  back(): void {
    this.location.back();
  }

}
