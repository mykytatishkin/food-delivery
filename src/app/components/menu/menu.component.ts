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
  total: number = 0;

  orderFood(event:any, name:string): void{
    event.target.disabled = true;
    event.target.value = 'selected';

    console.log(name);
    for(let i = 0; i < this.menu_list.length; i++){
      if( this.menu_list[i].name == name){
        this.order.push(this.menu_list[i]);
        this.total += this.menu_list[i].price * this.menu_list[i].count;
        break;
      }
    }
    console.log(this.order);
  }

  changeCount(event: any, name: string): void{
    var inp = event.target;                       //reference to input element
    var count = event.target.value;               //reference to count in that input element
    for(let i = 0; i < this.order.length; i++){
      if( this.order[i].name == name){
        this.order[i].count = count;
        break;
      }
    }
    this.changeTotal();
  }

  changeTotal():void{
    this.total=0;
    for(let i = 0; i < this.order.length; i++){
        this.total += this.order[i].count * this.order[i].price;
      }
  }
}
