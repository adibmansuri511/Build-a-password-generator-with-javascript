// Create an object that has strings 
// for upperCase and lowerCase letters,
// symbols and numbers

const types = {
    upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    lowerCase: "abcdefghijklmnopqrstuvwxyz",
    numbers: "0123456789",
    symbols: "!@#$%^&*()_+~\`|}{[]:;?><,./-="
}


//  One of these types will be randomly selected to match the set password length
//  We have functions to select each one of these types
//  All these functions will be stored in an array, getType.

const getType = [{}]