import {Component, Input} from '@angular/core';

@Component({
    selector: 'simple-2-value',
    template: `{{ value }}`
})
export class Simple2Component {
    @Input() value: number = 2;
}
