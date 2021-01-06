import { Component, Input, OnInit } from "@angular/core";

@Component({
    selector: 'app-text-center',
    templateUrl: './text_center.component.html',
    styleUrls: ['./text_center.component.scss']
})
export class TextCenterComponent implements OnInit {

    @Input() text;

    constructor() {}

    ngOnInit(): void { }
}