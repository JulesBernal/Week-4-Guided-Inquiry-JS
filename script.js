//very Easy
function min(a1,a2){
return  Math.min(a1,a2);
    if (a1>a2){
        return a1;
    }
    else{
        return a2;
    }
}
console.log(min(5,2));

//easy
const students = {firstName1:"Dave", lastName1:"Strider",age1:22,
                firstName2:"June",lastName2:"Egbert",age2:23,
                firstName3:"Roxy",lastName3:"Lalonde",age3:24
                };

console.log(`Hello, my name is ${students.firstName2} ${students.lastName2} and I'm ${students.age2}`);

//medium
const birthMonths=["January","February", "March","April", "May", "June", "July", "August", "September", "October", "November", "December"];

while(true){
   const birthInput=Number(prompt(`Insert your birth month as a number from 1-12, eg. 12 is December.`));
    if (birthInput<=12 && birthInput>=1){
        alert(`You have entered ${birthInput} and it's corresponding month is ${birthMonths[birthInput-1]}`);

        console.log(`You have entered ${birthInput} and it's corresponding month is ${birthMonths[birthInput-1]}`);
    break;
    }
    else{
        alert(`User entered an invalid number, please enter a proper value from 1-12. `);
    }
}
//hard
const bodyInfo={ tomHeight:9,tomMass: 8, jerryHeight: 10,jerryMass: 45};
const tomBMI=bodyInfo.tomHeight/bodyInfo.tomMass**2,JerryBMI=bodyInfo.jerryHeight/bodyInfo.jerryMass**2,varBool=tomBMI>JerryBMI;


console.log(`Is tom's BMI higher than Jerry's? ${varBool}`);