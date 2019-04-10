import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-test',
    templateUrl: 'test.component.html'
})

export class TestComponent implements OnInit {
    message = '';

    constructor() { }

    ngOnInit() {
        this.message = 'This is test page';
    }
}