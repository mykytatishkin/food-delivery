export class FoodItem {
    name: string;
    description: string;
    ingredients: string;
    price: number;
    imageUrl: string;
    rate: number;

    constructor(name: string, description: string, ingredients: string, price:number) {
        this.name = name;
        this.description = description;
        this.ingredients = ingredients;
        this.price = price;
        this.imageUrl = '';
        this.rate = 0;
    }

    setImageUrl(url:string):void {
        this.imageUrl = url;
    }

    getIngredients(): string[] {
        return this.ingredients.split(',');
    }

    rateIncrease(): void {
        this.rate++;
    }

    rateDecrease(): void {
        this.rate--;
    }
}
