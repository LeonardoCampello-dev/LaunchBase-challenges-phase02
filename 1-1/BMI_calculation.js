console.log("BMI calculation");

const name = "Leonardo";
const weight = 75.6;
const stature = 1.8;
const sex = "Male";

const BMI = weight / (stature * stature);

if (BMI >= 30) {
  console.log(
    `${name} are you overweight.` + `\nWeight: ${weight}` + `\nSex: ${sex}`
  );
} else {
  console.log(
    `${name} you are not overweight.` + `\nWeight: ${weight}` + `\nSex: ${sex}`
  );
}
