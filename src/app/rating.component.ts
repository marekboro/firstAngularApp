import {Component, Input} from '@angular/core'


// Had to move the SWITCH for the rating to decide the text version of the rating into this component as the product was not getting the updated rating valus as rating was being changed
//
//
@Component({
    selector: 'rating',
    template:   `<ng-container *ngIf='rating<1; else elseBlock'><star (click)="onClick(1)" ></star>
                </ng-container>
                <ng-template #elseBlock> <starfill (click)="onClick(1)" ></starfill></ng-template>

                <ng-container *ngIf='rating<2; else elseBlock2'><star (click)="onClick(2)" ></star>
                </ng-container>
                <ng-template #elseBlock2><starfill (click)="onClick(2)"></starfill></ng-template>

                <ng-container *ngIf='rating<3; else elseBlock3'><star (click)="onClick(3)" ></star>
                </ng-container>
                <ng-template #elseBlock3><starfill (click)="onClick(3)"></starfill></ng-template>

                <ng-container *ngIf='rating<4; else elseBlock4'><star (click)="onClick(4)" ></star>
                </ng-container>
                <ng-template #elseBlock4><starfill (click)="onClick(4)"></starfill></ng-template>

                <ng-container *ngIf='rating<5; else elseBlock5'><star (click)="onClick(5)" ></star>
                </ng-container>
                <ng-template #elseBlock5><starfill (click)="onClick(5)" ></starfill></ng-template>
                {{ numOfReviews }}

                <div [ngSwitch]="rating">
                    <div *ngSwitchCase="1"> Poor </div>
                    <div *ngSwitchCase="2"> Fair </div>
                    <div *ngSwitchCase="3"> Good </div>
                    <div *ngSwitchCase="4"> Very Good </div>
                    <div *ngSwitchCase="5"> Excellent </div>
                    <div *ngSwitchDefault> Not Rated </div>
                </div>
               
                `,
    styles: ['star {color: orange;}','starfill {color:orange}']
})

export class RatingComponent{
    @Input() rating = 0;
    // @Input('rating-vaule') rating = 0;
    @Input() numOfReviews = 0;
    onClick(ratingValue){
        if(this.rating===ratingValue){
            this.rating -=1;
        }
        else {
            this.rating = ratingValue;
        }
        this.numOfReviews +=1;

        
    }
}


