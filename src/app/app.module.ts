import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent} from './product.component'
import { ProductsComponent } from './products.components';
import { ProductService } from './product.service'
import { StarComponent } from './star.component'
import { StarfillComponent } from './starfill.component'
import { RatingComponent } from './rating.component'
import { TruncatePipe } from './truncate.pipe'
import { JumbotronComponent } from './jumbotron.component';



@NgModule({
  declarations: [
    AppComponent,ProductsComponent,StarComponent,StarfillComponent,RatingComponent, ProductComponent, TruncatePipe, JumbotronComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
