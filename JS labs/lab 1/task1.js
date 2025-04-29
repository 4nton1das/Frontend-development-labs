function getAgeCategory(age) {
    if (age >= 0 && age <= 2) {
      return "младенец";
    } else if (age >= 3 && age <= 13) {
      return "ребенок";
    } else if (age >= 14 && age <= 19) {
      return "подросток";
    } else if (age >= 20 && age <= 65) {
      return "взрослый";
    } else if (age >= 66) {
      return "пожилой";
    } else {
      return "Некорректный возраст";
    }
  }

console.log(getAgeCategory(1));
console.log(getAgeCategory(5));
console.log(getAgeCategory(16));
console.log(getAgeCategory(30));
console.log(getAgeCategory(70));
console.log(getAgeCategory(-1));
