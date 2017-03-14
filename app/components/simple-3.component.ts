import {Component, Input} from '@angular/core';

@Component({
    selector: 'simple-3-value',
    template: `{{ value }}`
})
export class Simple3Component {
    @Input() value: number = 3;
}
