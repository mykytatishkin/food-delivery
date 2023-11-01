import { Component, OnInit } from '@angular/core';
import { FoodItem } from './models/food-item.model';
import { FoodService } from './services/food.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'food-delivery';

  addedFood: FoodItem = new FoodItem('','','',0);
  menu : FoodItem[] = [];

  constructor(private foodService:FoodService) {}

  ngOnInit(): void {
    this.menu = this.foodService.getFoodItems();
  }

  getAddedFood(food: FoodItem): void{
    this.addedFood = food;
    this.menu.push(this.addedFood);
  }

}
