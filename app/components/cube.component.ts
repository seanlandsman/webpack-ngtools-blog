import {Component, Input} from '@angular/core';

@Component({
    selector: 'cubed-value',
    template: `{{valueCubed()}}`
})
export class CubeComponent  {
    @Input() value: number;

    public valueCubed(): number {
        return this.value * this.value * this.value;
    }
}
