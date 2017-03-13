import {Component, Input} from '@angular/core';

@Component({
    selector: 'squared-value',
    template: `{{valueSquared()}}`
})
export class SquareComponent  {
    @Input() value: number;

    public valueSquared(): number {
        return this.value * this.value;
    }
}
