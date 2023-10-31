export class FoodItem {
    name: string;
    description: string;
    ingredients: string;
    price: number;
    imageUrl: any;
    rate: number;

    constructor(name: string, description: string, ingredients: string, price:number){
        this.name = name;
        this.description = description;
        this.ingredients = ingredients;
        this.price = price;
        //this.imageUrl = '';
        this.rate = 0;
    }

    setImageUrl(url:any):void{
        this.imageUrl = url;
    }

    getIgredients():string[]{
        return this.ingredients.split(',');
    }

    rateIncrease():void{
        this.rate++;
    }

    rateDecrease():void{
        this.rate--;
    }
}
