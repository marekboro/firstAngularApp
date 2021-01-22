import {Component} from '@angular/core'
import {ProductService} from './product.service'
// import {ProductComponent} from './product.component'

@Component ({
    selector: 'products',
    template: ` 
                <h2>Products : </h2>
                <div *ngIf = "products.length>0; else loading">
                    <div *ngFor = "let product of products">
                        <product [data]="product" > </product>
                    </div>
                </div>
                <ng-template #loading>
                No products to display
                </ng-template>
              `
})

export class ProductsComponent{
    products;

    constructor(productService: ProductService){
        this.products = productService.getProducts();
    }
}

//v1
// template: ` 
//                 <h2>Products : </h2>
//                 <ul>
//                     <li *ngFor="let product of products"> {{product}}  </li>
//                 </ul>
//               `

//v2
//template: ` 
// <h2>Products : </h2>
// <div *ngFor = "let product of products">
//     <product [data]="product" > </product>
// </div>
// `

//v3
// template: ` 
//                 <h2>Products : </h2>
//                 <div *ngIf = "products.length>0">
//                     <div *ngFor = "let product of products">
//                         <product [data]="product" > </product>
//                     </div>
//                 </div>
//                 <div *ngIf = "products.length == 0">
//                 No products to display
//                 </div>
//               `