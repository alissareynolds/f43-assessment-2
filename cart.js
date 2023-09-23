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

//CODE HERE

const summedPrice = cart.reduce((acc, cur) => {
   return  acc + cur.price
}, 0)

console.log(summedPrice);

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

//CODE HERE

function calcFinalPrice(cartTotal, couponValue, taxRate) {
let total = (cartTotal * taxRate) + cartTotal
total = total - couponValue;
return total; 
}

console.log(calcFinalPrice(100, 20, .06));

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
    TEXT ANSWER HERE
    The properties that a resturant might need to know about its cutomers would include: - what time their reservation is at - how many guests are in their party/table - what any order/orders might be - if there are any allergies - and any guest feedback after their experience 
    - the reservation variable is going to be a number to store the time of the guests reservation 
    - the amount of guests is going to be stored in a number data type
    - the order variable needs to be an array that contains what food they are going to be ordering 
    -the guest feedback varible is going to be a string of what the guests thought of their experience 
    - the allergy variable is going to be a string if the guest has any allergies 

*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE

let customer1 = {
    reservation: 7,
    guests: 2,
    allergies: 'none',
    orders: ['pizza', 'pasta'],
    feedback: 'great'
};

console.log(customer1);