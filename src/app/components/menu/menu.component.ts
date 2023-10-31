import { Component, Input } from '@angular/core';
import { FoodItem } from 'src/app/models/food-item.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  @Input() menu_list: FoodItem[] = [];
  order: FoodItem[] = [];

  orderFood(event:any, name:string): void{
    event.target.disabled = true;
    event.target.value = 'selected';

    console.log(name);
    for(let i = 0; i < this.menu_list.length; i++){
      if( this.menu_list[i].name == name){
        this.order.push(this.menu_list[i]);
        break;
      }
    }
    console.log(this.order);
  }
}
