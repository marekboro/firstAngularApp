import {Component} from '@angular/core'
import {ProductService} from './product.service'
// import {ProductComponent} from './product.component'

@Component ({
    selector: 'products',
    template: ` 
                <h2>Products : </h2>
                <div *ngFor = "let product of products">
                    <product [data]="product" > </product>
                </div>
              `
})

export class ProductsComponent{
    products;

    constructor(productService: ProductService){
        this.products = productService.getProducts();
    }
}

// template: ` 
//                 <h2>Products : </h2>
//                 <ul>
//                     <li *ngFor="let product of products"> {{product}}  </li>
//                 </ul>
//               `