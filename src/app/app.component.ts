import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  inputField: FormControl = new FormControl();
  valueComingFromParent: string = '';
  valueComingFromChild: string = '' ;

  constructor() {
  }
    ngOnInit(): void {

      this.inputField.valueChanges.subscribe(item => {
       // console.log(item);
        this.valueComingFromParent = item;
      });
    }

  parentMethod(val): void {
    this.valueComingFromChild = val;
  }
}
