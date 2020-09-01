console.log("inside my file");

function my_func(arg_one, arg_two){
    console.log(arg_one,arg_two);
}

my_func(10, "blaa");

let sec_func = function(arg_one, arg_two){
    console.log(arg_one, arg_two);
}

let arrow = () => {
    console.log("inside arrow function");
}

((x) => {console.log(x)})(100)

function identity (price){
    return price;
}

function price_cal (price){
    return price * 2;
}

function discount_exec(price_cal, price){
    return price_cal(price) * .70;
}

console.log(discount_exec(identity, 100));

console.log(discount_exec(price_cal, 100));

var item = document.getElementById("add-item");

item.addEventListener("click", (event) => {
    console.log(event);
    let item_name = document.querySelector("#item").value;
    let item_price = document.querySelector("#price").value;
    console.log(item_name, item_price);
});