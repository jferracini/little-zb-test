import {BrowserModule, DomSanitizer} from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-widget-donation',
  templateUrl: './app-widget-donation.component.html',
  styleUrls: ['./app-widget-donation.component.css']
})
export class AppWidgetDonationComponent implements OnInit {

  imgSrc = {'background-image': 'url(\'assets/giraffe-image.jpg\')'};
  name = 'Widget Donate';

  animals = [
       {id: 1, value: 'giraffe' , name: 'A giraffe'},
       {id: 2, value: 'rhino', name: 'A rhino'},
       {id: 3, value: 'tiger', name: 'A tiger'},
     ];

  form: FormGroup;

  constructor() {
    this.form = new FormGroup({
      animal: new FormControl(null)
    });
  }


  get animal(): string {
    return this.form ? this.form.get('animal').value : '';
  }

  ngOnInit() {
  }

  public changeImg(value) {
    console.log(value);
    if (value === '1') {
      this.imgSrc = {
        'background-image': 'url(\'assets/giraffe-image.jpg\')',
      };
    } else if (value === '2') {
      this.imgSrc = {
        'background-image': 'url(\'assets/rhino-image.jpg\')',
      };
    } else if (value === '3') {
      this.imgSrc = {
        'background-image': 'url(\'assets/tiger-image.jpg\')',
      };
    }
  }

}
