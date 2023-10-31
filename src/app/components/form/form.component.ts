import { Component, EventEmitter, Output } from '@angular/core';
import { FoodItem } from 'src/app/models/food-item.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  //EventEmitter with @Output() are used to be able to transfer data to parent component (App)
  @Output() emittAddedFood: EventEmitter<FoodItem> = new EventEmitter<FoodItem>();

  addedFood: FoodItem = new FoodItem('','','',0);

  addFood(food: any):void{
    this.addedFood = new FoodItem(food.name, food.description, food.ingredients, food.price);
    if(this.file){
      let reader = new FileReader();
      reader.readAsDataURL(this.file);
      reader.onload = (event) => {
        this.addedFood.setImageUrl(reader.result);
      }; 
      //this.addedFood.setImageUrl(this.file);
    }
    //console.log(this.addedFood);
    this.emittAddedFood.emit(this.addedFood);                         //created event (emittAddedFood) is activated here
  }

  /////////////////////////Upload/////////////////////////////////

  file: File | undefined;

  fileSelected(event:any):void{
    console.log(event.target.files[0]);
    this.file = event.target.files[0];
  }



}


