import { Component, EventEmitter, OnInit, Output } from "@angular/core";

@Component({
    selector: 'app-action',
    templateUrl: './action.component.html',
    styleUrls: ['./action.component.scss']
})
export class ActionComponent implements OnInit {

    @Output() event: EventEmitter<boolean> = new EventEmitter<boolean>();

    constructor() {}

    ngOnInit(): void {}

    private onClick(): void {
        this.event.emit(true);
    }
}