class vehicle
{
    //method take 3 variable
    constructor(make, model, year)
    {
        //declare each variable
        this.make = make;
        this.model = model;
        this.year = year;
    }
    //method to print
    Information()
    {
        console.log(`Make ${this.make}, Model: ${this.model}, Year: ${this.year}`);
    }//end of method
}
//second class extend from main class
class cars extends vehicle
{
    //method
    constructor(make,model,year,doors)
    {
        //call variable from another class using super
        super(make,model,year);
        this.doors = doors;
    }//end main method

    //print method
    Information()
    {
        super.Information();//call method from another class
        console.log(`Doors ${this.doors}`);
    }
}
//print
let myCars = new cars('VW', 'Gold', 2000, 5);
myCars.Information();