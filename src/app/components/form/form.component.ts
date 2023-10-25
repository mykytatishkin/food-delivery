import { Component } from '@angular/core';
import { FoodItem } from 'src/app/models/food-item.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  addedFood: FoodItem = new FoodItem('','','',0);

  addFood (food:any): void {
    this.addedFood = new FoodItem(food.name.value, food.description.value, food.ingredients.value, food.price.value);
    console.log(this.addedFood);
  }
}
