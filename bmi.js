class BMI {
    //constructor inside class have 2 input
    constructor(height, weight) {
        //declare height and weight
        this.height = height;
        this.weight = weight;
    }//end method
    //calculation method
    calculationBMI() {
        //calc
        let bmi = this.weight / (this.height ** 2);
        return bmi;//return answer when method is called
    }//end method
}//end class
//printout
let MyBMI = new BMI(2, 90);
let calculation = MyBMI.calculationBMI();
console.log(calculation);