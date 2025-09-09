console.log("JusufMrkulic")
function msg(){
    console.log("-----Example 1-----")
    console.log("67")
}

function printcount(){
    console.log("----- example 2 ------")
for (let n = 3; n>0 ; n--){
    console.log(n)
}
}
function greeting(username){
    console.log("----- example 3 ------")
    console.log("Welcome to JS "+ username)
}
function upperMessage(Message){
    console.log("----- Example 4 ------")
    let changeupper = Message.toupperCase()
    console.log(changeupper)
}
function isSnakeEyes (dice1, dice2){
    console.log("----- example 5 ------")
    if(dice1===1 && dice2 === 1){
        console.log("Snake Eyes!")
    }
    else{
        console.log("Not Snake Eyes!")
    }
}
function areaRectangle(lenght, width){
    return length*width
}
function areaRectangle(length, width){
    console.log("----- example 6 ------")
    return length*width
}
function checkTemperture(Temperture){
    if (temperature>=75){
        return true
    }
    else{
        return false
    }
}

