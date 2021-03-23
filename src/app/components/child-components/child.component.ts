import { EventEmitter } from '@angular/core';
import { Component, Input, OnInit, Output, } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

    @Input() valueComingFromParent: string = '';

    @Output() myEvent = new EventEmitter<string>();

    control: FormControl = new FormControl();


    constructor() {
    }
    ngOnInit(): void {

      this.control.valueChanges.subscribe(value => {
    //   console.log(value)
        this.myEvent.emit(value);
      });

    }

    sendToParent(): void {
    // console.log('calling')
      this.myEvent.emit('');
    }

}
