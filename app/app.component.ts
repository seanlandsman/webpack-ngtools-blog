import {Component} from "@angular/core";

@Component({
    selector: 'my-app',
    template: `
        Hello {{ name }}
        <hr/>
        <squared-value [value]="4"></squared-value>
        <cubed-value [value]="4"></cubed-value>
        <quadrupal-value [value]="4"></quadrupal-value>
    `
})
export class AppComponent {
    name: string = "Sean";
    constructor() {
    }
}