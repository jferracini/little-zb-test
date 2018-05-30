import {BrowserModule, DomSanitizer} from '@angular/platform-browser'
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-widget-donation',
  templateUrl: './app-widget-donation.component.html',
  styleUrls: ['./app-widget-donation.component.css']
})
export class AppWidgetDonationComponent implements OnInit {

  name = 'Widget Donate';
  animals = [
       {id: 1, value: "giraffe" , name: "A giraffe"},
       {id: 2, value: "rhino", name: "A rhino"},
       {id:3, value: "tiger", name: "A tiger"},
     ];
  form: FormGroup;

  allBg(fotoSet) {
    let myStyles;
    if(fotoSet == 'giraffe') {  	  
      myStyles = {
      'background-image': !this.animals ? 'url(\'assets/giraffe-image.jpg\')' : 'url(\'assets/giraffe-image.jpg\')',
    };
    } else if(fotoSet == 'rhino') {
      myStyles = {
        'background-image': !this.animals ? 'url(\'assets/rhino-image.jpg\')' : 'url(\'assets/rhino-image.jpg\')',
      };
    } else if(fotoSet == 'tiger') {
      myStyles = {
        'background-image': !this.animals ? 'url(\'assets/tiger-image.jpg\')' : 'url(\'assets/tiger-image.jpg\')',
      };
    } else {
      myStyles = {
        'background-image': !this.animals ? 'url(\'assets/giraffe-image.jpg\')' : 'url(\'assets/giraffe-image.jpg\')',
      };
    }
    return myStyles;
    }
  
//   getMyStyles() {
//     let myStyles = {
//        'background-image': !this.animals ? 'url(\'assets/giraffe-image.jpg\')' : 'url(\'assets/giraffe-image.jpg\')',
//     };
//     return myStyles;
// }  

  constructor() {
    this.form = new FormGroup({
      animal: new FormControl(null)
    })
  }

  get animal(): string {
    return this.form ? this.form.get('animal').value : '';
  }

  ngOnInit() {
  }

}
