import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  templateUrl: 'app-navbar.component.html',
  styleUrls: ['./app-navbar.component.css']
})
export class AppNavbarComponent implements OnInit {


  searchGroup: FormGroup;

  constructor() {
    this.searchGroup = new FormGroup({
      firstName: new FormControl()
    });
   }

  ngOnInit() {
  }

}
