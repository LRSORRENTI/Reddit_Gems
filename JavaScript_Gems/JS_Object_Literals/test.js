let greeting = {
    fullname: "Michael Jackson",
    getFullName: () => {
        return this.fullname;
   },
    greet: (message) => {
        console.log(message + " " + this.getFullName() 
        + "!!");
    }
}


//log fullname
console.log(greeting.fullname);
//call greet function
greeting.greet();

