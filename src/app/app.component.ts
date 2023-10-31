import { Component } from '@angular/core';
import { FoodItem } from './models/food-item.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'food-delivery';

  addedFood: FoodItem = new FoodItem('','','',0);
  menu : FoodItem[] = [];

  getAddedFood(food: FoodItem): void{
    this.addedFood = food;
    //console.log(this.addedFood);
    this.menu.push(this.addedFood);
  }

}
