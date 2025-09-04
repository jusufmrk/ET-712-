console.log("Jusuf Mrkulic")
console.log(`\n -----example 1: for loop as a counter ------`)
for(let x = 0; x <= 5 ; x++ ){
    console.log
}
console.log(`\n ----- example 2: for loop with conditional statment -----`)
for(let x = -20; x <= 20; x++){
console.log(x)
}
console.log(`\n ----- example 2: for loop with conditional statment ------`)
for(let x = -20; x <=20; x++){
    if(x%2 == 0){
        console.log
    }
}

console.log(`\n ----- example 3: for loop a sa decrement counter ------`)
for(let x = 3; x >= 0; x--){
    console.log(x)
}
console.log(`\n ----- example 4: for loop in an array -----`)
cars =['Mazda','BMW','tesla','Jeep','Honda']
for(let index = 0; index<cars.length ; index++){
    console.log(cars[index])}
console.log("\nfor loop using 'of' statment")
for(let each of cars){
    console.log(each)
}

console.log(`\n ----- example 5: applicationsusing for loops -----`)
let car_counter = 0
for(let index = 0; index<cars.length ; index++){
    if(cars[index].length > 4){
        car_counter ++
    }
}
console.log(`There is/are ${car_counter} car's name with 4+ charecters`)

console.log(`\n ----- example 6: applications using for loops -----`)
for(let counter = 1; counter <= 3; counter++){
    let user_number =parseInt(prompt("enter a number between 1 and 9"))
    let GUESS = 8
    console.log(`user guess = ${user_number}`)
    if(user_number === GUESS ){
        console.log(`Great! the number is ${GUESS}`)
    }
    else if (user_number>GUESS){
        console.log(`Wrong? the number should lower`)
    }
    else if (user_number<GUESS){
        console.log(`WRONGGGG`)
    }
    if(counter===3){
        console.log(`Better luck next time`)
    }
}

console.log(`\n ----- example 7: while loopas a counter`)
let y = 0
while(y<=5){
    console.log(y)
    y++
}
console.log(`\N ----- example 8: validate an input -----`)
let balance =1000
let number = parseInt(prompt("Enter a number betweek 1 and 9"))
while(number<1 || number >9){
    number = parseInt(prompt("ERROR: enter a number between 1 and 9"))
}
console.log(`The collected number is ${number}`)

console.log(`\n ----- example 8: simulate a bank transaction -----`)
while(true){
    user_transaction = parseInt(prompt("how can i help you today?\nPress 1 for acount balance\npress 2 for deposit\npress 3 for withdrawl\nany another number to exit"))
    switch(user_transaction){
        case 1:
            console.log(`your balance is $ ${balance}`)
            case 2:
                let deposit = parseInt(prompt("how much do you want to deposit"))
                if(deposit>0){
                    balance+= deposit 
                }
                else{
                    console.log(`ERROR!! not enough credit`)
                }
                break
                default:
                    console.log(`thank you for visiting QCC bank!`)
                    break
    }
}