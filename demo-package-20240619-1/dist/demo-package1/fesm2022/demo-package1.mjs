import * as i0 from '@angular/core';
import { Injectable, Component } from '@angular/core';

class DemoPackage1Service {
    constructor() { }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.3", ngImport: i0, type: DemoPackage1Service, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.0.3", ngImport: i0, type: DemoPackage1Service, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.3", ngImport: i0, type: DemoPackage1Service, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: () => [] });

class DemoPackage1Component {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.3", ngImport: i0, type: DemoPackage1Component, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.0.3", type: DemoPackage1Component, isStandalone: true, selector: "lib-DemoPackage1", ngImport: i0, template: `
    <p>
      demo-package1 works! by Rahul
    </p>
  `, isInline: true, styles: [""] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.3", ngImport: i0, type: DemoPackage1Component, decorators: [{
            type: Component,
            args: [{ selector: 'lib-DemoPackage1', standalone: true, imports: [], template: `
    <p>
      demo-package1 works! by Rahul
    </p>
  ` }]
        }] });

/*
 * Public API Surface of demo-package1
 */

/**
 * Generated bundle index. Do not edit.
 */

export { DemoPackage1Component, DemoPackage1Service };
//# sourceMappingURL=demo-package1.mjs.map
