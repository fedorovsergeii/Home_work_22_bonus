
"use strict";

class Hamburger {

    static SIZE_SMALL= {price:50, calories:20};
    static SIZE_BIG = {price:100, calories:40};

    static STUFFING_CHEESE = {price:10, calories:20};
    static STUFFING_SALAD = {price:20, calories:5};
    static STUFFING_POTATO = {price:15, calories:10};

    static TOPPING_MAYO = {price:20, calories:5};
    static TOPPING_SAUCE = {price:15, calories:0};
    constructor(size, staffing, topping) {
        this.size = size;
        this.staffing = staffing;
        this.topping = [topping];
    }

    addTopping(topping) {
        if (this.topping.length === 0 || this.topping[0] === undefined) {
            this.topping[0] = topping;
        } else {
            this.topping.push(topping);
        }
    }
    calculate () {
        const sumCalories = this.size.calories + this.staffing.calories +
            this.topping.reduce((sum, topping) => sum + topping.calories, 0);
        return sumCalories;
    }
    calculatePrice () {
        return ( this.size.price + this.staffing.price +
            this.topping.reduce((sum, topping) => sum + topping.price, 0));
    }


}

export default Hamburger;
