import {BrowserModule, DomSanitizer} from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-widget-donation',
  templateUrl: './app-widget-donation.component.html',
  styleUrls: ['./app-widget-donation.component.css']
})
export class AppWidgetDonationComponent implements OnInit {

  inputDonate: FormControl;
  form: FormGroup;
  donateTextValue = '£';

  imgSrc = {'background-image': 'url(\'assets/giraffe-image.jpg\')'};
  name = 'Widget Donate';

  animals = [
       {id: 1, value: 'giraffe' , name: 'A giraffe'},
       {id: 2, value: 'rhino', name: 'A rhino'},
       {id: 3, value: 'tiger', name: 'A tiger'},
     ];

  ngOnInit() {
    this.createFormControls();
    this.createForm();
  }

  createFormControls() {
    this.inputDonate = new FormControl('', [
      // tslint:disable-next-line:max-line-length
      Validators.pattern('0*(1[1-9]|[2-9][0-9]|[1-8][0-9]{2}|9[0-8][0-9]|99[0-9]|[1-8][0-9]{3}|9[0-8][0-9]{2}|99[0-8][0-9]|999[0-9]|[1-8][0-9]{4}|9[0-8][0-9]{3}|99[0-8][0-9]{2}|999[0-8][0-9]|9999[0-9]|[1-8][0-9]{5}|9[0-8][0-9]{4}|99[0-8][0-9]{3}|999[0-8][0-9]{2}|9999[0-8][0-9]|99999[0-9]|[1-8][0-9]{6}|9[0-8][0-9]{5}|99[0-8][0-9]{4}|999[0-8][0-9]{3}|9999[0-8][0-9]{2}|99999[0-8][0-9]|999999[0-9]|[1-8][0-9]{7}|9[0-8][0-9]{6}|99[0-8][0-9]{5}|999[0-8][0-9]{4}|9999[0-8][0-9]{3}|99999[0-8][0-9]{2}|999999[0-8][0-9]|9999999[0-9]|[1-8][0-9]{8}|9[0-8][0-9]{7}|99[0-8][0-9]{6}|999[0-8][0-9]{5}|9999[0-8][0-9]{4}|99999[0-8][0-9]{3}|999999[0-8][0-9]{2}|9999999[0-8][0-9]|99999999[0-9])')
    ]);
  }

  createForm() {
    this.form = new FormGroup({
      inputDonate: this.inputDonate,
    });
  }

  onlyNumberKey(event) {
    return (event.charCode === 8 || event.charCode === 0) ? null : event.charCode >= 48 && event.charCode <= 57;
  }

  onlyDecimalNumberKey(event) {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode !== 46 && charCode > 31 &&
      (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }

  constructor() {
    this.form = new FormGroup({
      animal: new FormControl(null)
    });
  }

  public changeImg(value) {
    // console.log(value);
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
