import {Component} from "@angular/core";

@Component({
    selector: 'my-app',
    template: `
        Hello {{ name }}
        <hr/>
        <squared-value [value]="4"></squared-value>
        <cubed-value [value]="4"></cubed-value>
        <quadrupal-value [value]="4"></quadrupal-value>
        <hr>
        <simple-1-value></simple-1-value>
        <simple-2-value></simple-2-value>
        <simple-3-value></simple-3-value>
        <simple-4-value></simple-4-value>
        <simple-5-value></simple-5-value>
        <simple-6-value></simple-6-value>
    `
})
export class AppComponent {
    name: string = "Sean";
    constructor() {
    }
}