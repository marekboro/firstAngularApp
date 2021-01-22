import { Component } from '@angular/core';
// import {ProductService} from './product.service'

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template:`
            <h1>
              {{title}} --- - - --- - ->  {{newData}}
            </h1> 
            <products> </products>
            <img src="{{imageUrl}}"/>
            <button class="btn btn-primary"> Example </button>
            <button (click)="onClickMe($event)" class="btn btn-primary"> Toggle on/off btn</button>
            <button class="btn btn-primary" [class.disabled]=!isValid> ON/OFF </button>
            <rating [rating]="4" > </rating>
            <bs-jumbotron> 
              <div class = "heading"> Hello World AGAIN </div>
              <div class = "body"> Body body body body </div>
              <div class = "description"> Describe me </div>
              <div class = "button"> Press me </div>

            
            </bs-jumbotron>
            `,
  // providers:[ProductService]

})
export class AppComponent {
  title:string = '1st AngularApp';
  newData = '2nd variable passed in';
  imageUrl = 'https://www.w3schools.com/html/pic_mountain.jpg';
  isValid = false;

  onClickMe($event){
    this.isValid = !this.isValid;
    console.log("Clicked toggle",$event)
  }
}
