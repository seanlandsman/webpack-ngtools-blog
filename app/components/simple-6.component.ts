import {Component, Input} from '@angular/core';

@Component({
    selector: 'simple-6-value',
    template: `{{ value }}`
})
export class Simple6Component {
    @Input() value: number = 6;
}
