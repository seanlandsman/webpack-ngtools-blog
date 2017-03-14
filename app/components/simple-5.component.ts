import {Component, Input} from '@angular/core';

@Component({
    selector: 'simple-5-value',
    template: `{{ value }}`
})
export class Simple5Component {
    @Input() value: number = 5;
}
