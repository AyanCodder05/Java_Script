//Imediately Invoked Function Expression

(function myIIFE(){
    //Named IIFE
    console.log("This is an IIFE function");
})();// Global Scope pollution avoided we can use this function only here


((name)=> {
    console.log(`This is an IIFE function with name: ${name}`);
})("Ayan");
