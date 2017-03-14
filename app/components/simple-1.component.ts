import {Component, Input} from '@angular/core';

@Component({
    selector: 'simple-1-value',
    template: `{{ value }}`
})
export class Simple1Component {
    @Input() value: number = 1;
}
