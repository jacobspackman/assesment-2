///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

const summedPrice = cart.reduce((acc, curr) => acc + curr.price, 0)


//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

const calcFinalPrice = (cartTotal, couponValue, tax) => {
    return (cartTotal + (cartTotal * tax)) - couponValue
}



//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    Customer Object will be called customer. it will have 4 properties.
    first property will be called `name`, it will take a string, so we can identify each 
    customer by their name
    the second property will be called `items`, it will take an array of strings, because customers can buy more than one item
    the thrid will be called `totalPrice`, this will be a number, so we can use math arguments on it.
    the fourth property will be called `satisfied`, this will be a boolean, will let us know
    if the customer was satisfied wiht our work or not.

*/

/*
    Now, create a customer object following your own
    guidelines.
*/

const customer = {
    name: `Jacob`,
    items: [`banana`, `milk`, `cookies`],
    totalPrice: 9.46,
    satisfied: true
}
