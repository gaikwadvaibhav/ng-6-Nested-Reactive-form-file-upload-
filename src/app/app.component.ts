import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Customer } from './models/customer.interface';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    public myForm: FormGroup; // our form model

    constructor(private _fb: FormBuilder) {

    }
    ngOnInit() {
        // we will initialize our form here

    }



}
