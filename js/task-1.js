function slugify(title) { 
    const lowerTitle = title.toLowerCase().trim();
    const titleCut = lowerTitle.split(" ");
    const titleJoin = titleCut.join("-");
    return titleJoin;
}


// * делим по пробелу
// * преобразуем в малый регистр
// * объединяем по тире


console.log(slugify("Arrays for begginers")); // "arrays-for-begginers"
console.log(slugify("English for developer")); // "english-for-developer"
console.log(slugify("Ten secrets of JavaScript")); // "ten-secrets-of-javascript"
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS")); // "how-to-become-a-junior-developer-in-two-weeks"
