export class FoodItem {
    name: string;
    description: string;
    ingredients: string;
    price: number;
    count: number;
    imageUrl: any;
    rate: number;

    constructor(name: string, description: string, ingredients: string, price:number){
        this.name = name;
        this.description = description;
        this.ingredients = ingredients;
        this.price = price;
        this.count = 1;
        //this.imageUrl = '';
        this.rate = 0;
    }

    setImageUrl(url:any):void{
        this.imageUrl = url;
    }

    setCount(count:any):void{
        this.count = count;
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
