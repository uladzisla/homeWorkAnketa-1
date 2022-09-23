import "./main.scss";

let firstName, lastName, age, isMan, sex;
//Спрашиваем у пользователя его Имя
do {
  firstName = prompt("Ваше имя?", "");
} while (firstName == "");
{
  console.log(`Ваше имя: ${firstName}`);
}
//Спрашиваем у пользователя его фамилию
do {
  lastName = prompt("Ваша фамилия?", "");
} while (lastName == "");
{
  console.log(`Ваша фамилия: ${lastName}`);
}
//Спрашиваем у пользователя его возраст
do {
  age = +prompt("Сколько Вам лет?", "");
} while (age < 0 || age > 100 || age == "");
{
  console.log(`Ваш возраст ${age}`);
}
//спрашиваем у пользователя его пол
isMan = confirm("Вы мужчина?");
if (isMan) {
  sex = "мужчина";
} else {
  sex = "женщина";
}
// выводим итоговую анкету
alert(
  `Ваше имя: ${firstName}\nВаша фамилия: ${lastName}\nВаш возраст :${age}\nВы ${sex}`
);

//Нужно доделать из класса
