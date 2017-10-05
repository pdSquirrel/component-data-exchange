import { Component } from '@angular/core';

@Component({
  selector: 'pds-pc-parent',
  template: `
    <div class="parent">
      <h1>ParentComponent</h1>
      <pds-pc-child></pds-pc-child>

    </div>
  `,
  styleUrls: ['./pc-parent.component.sass']
})

export class PcParentComponent {}
