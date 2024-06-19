import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-DemoPackage1',
  standalone: true,
  imports: [],
  template: `
    <p>
      demo-package1 works! by {{name || 'Rahul'}}
    </p>
  `,
  styles: ``
})
export class DemoPackage1Component {
  @Input() name!: string;
}
