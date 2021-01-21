import { Component } from '@angular/core';
// import {ProductService} from './product.service'

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template: `<h1>{{title}} --- - - --- - ->  {{newData}}</h1> <products> </products> `,
  // providers:[ProductService]

})
export class AppComponent {
  title:string = '1st AngularApp';
  newData = '2nd variable passed in';
}
