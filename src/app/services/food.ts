import { FoodItem } from "../models/food-item.model";

let fi1 = new FoodItem("Steak Cowboy", "Beef steak with herbs", "beef meat, onion, herbs", 300);
fi1.setImageUrl('../../assets/images/stake1.jpg');

let fi2 = new FoodItem("Steak NY", "Pork neck steak with spices", "pork neck meat, spices, pepper", 300);
fi2.setImageUrl('../../assets/images/stake2.jpg');

let fi3 = new FoodItem("Salad Greek", "Salad with cheese", "vegetables, cheese", 220);
fi3.setImageUrl('../../assets/images/salad1.jpg');

let fi4 = new FoodItem("Salad Spring", "Salad with vegetables", "vegetables, souce", 250);
fi4.setImageUrl('../../assets/images/salad2.jpg');

let fi5 = new FoodItem("Coffee", "Black Coffee", "coffe", 50);
fi5.setImageUrl('../../assets/images/coffee1.jpg');


export const FOOD: FoodItem[] = [fi1, fi2, fi3, fi4, fi5]; 