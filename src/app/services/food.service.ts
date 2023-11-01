import { Injectable } from '@angular/core';
import { FoodItem } from '../models/food-item.model';
import { FOOD } from './food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  items: FoodItem[] = FOOD;

  constructor() { }

  getFoodItems(): FoodItem[]{
    return this.items;
  }

  addFoodItem(item:FoodItem):void{
    this.items.push(item);
  }
}
