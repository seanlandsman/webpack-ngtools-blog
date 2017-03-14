import {Component, Input} from '@angular/core';

@Component({
    selector: 'simple-4-value',
    template: `{{ value }}`
})
export class Simple4Component {
    @Input() value: number = 4;
}
