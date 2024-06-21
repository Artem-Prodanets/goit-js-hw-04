// * перебрать объект, наверное переделав его в массив
// * добавить каждое значение в пустую переменную
// * поделить эту переменную на длину массива
// * добавить проверку, не является ли массив пустым для вывода 0


function calcAverageCalories(days) {
    let totalCalories = 0;
    const values = Object.values(days);
    if (values.length === 0) {
        return 0;
    }
    for (const value of values) {
        totalCalories += value.calories;
    }
    return totalCalories / values.length;
}



console.log(
  calcAverageCalories([
    { day: "monday", calories: 3010 },
    { day: "tuesday", calories: 3200 },
    { day: "wednesday", calories: 3120 },
    { day: "thursday", calories: 2900 },
    { day: "friday", calories: 3450 },
    { day: "saturday", calories: 3280 },
    { day: "sunday", calories: 3300 }
  ])
); // 3180

console.log(
  calcAverageCalories([
    { day: "monday", calories: 2040 },
    { day: "tuesday", calories: 2270 },
    { day: "wednesday", calories: 2420 },
    { day: "thursday", calories: 1900 },
    { day: "friday", calories: 2370 },
    { day: "saturday", calories: 2280 },
    { day: "sunday", calories: 2610 }
  ])
); // 2270

console.log(
  calcAverageCalories([])
); // 0