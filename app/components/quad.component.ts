import {Component, Input} from '@angular/core';

@Component({
    selector: 'quadrupal-value',
    template: `{{valueQuadrupaled()}}`
})
export class QuadComponent  {
    @Input() value: number;

    public valueQuadrupaled(): number {
        return this.value * this.value * this.value * this.value;
    }
}
