let raceNumber = Math.floor(Math.random() * 1000);

const registeredEarly = false; // Change this to true to test early registration
const age = 19; // Change this to test different ages

if (age > 18 && registeredEarly) {
    raceNumber += 1000;
    console.log(`You are an adult and registered early. Your race number is ${raceNumber}. You will race at 9:30 am.`);
} else if (age > 18 && !registeredEarly) {
    console.log(`You are an adult and you registered late. Your race number is ${raceNumber}. You will race at 11:00 am.`);
} else if (age < 18) {
    console.log(`You are a youth. Your race number is ${raceNumber}. You will race at 12:30 pm.`);
} else {
    console.log(`Please see the registration desk.`);
}
