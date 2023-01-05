let greeting = {
    fullname: "Michael Jackson",
    greet: (message, name) => {
        console.log(message + " " + name + "!!");
    }
}


//log fullname
console.log(greeting.fullname);
//call greet function
greeting.greet("Greeting", greeting.fullname);