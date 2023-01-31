// ! ДЗ 43. Get users

// Написать код, который сформирует 2 запроса за различными файлами json(data.json, data2.json).

// Пример файла data.json:
// {
//     "children": ["Jack", "Jacky", "Alexandr"]
// }

// Необходимо соединить из двух полученных объектов массивы children и вывести результат в консоль.

// Результат вывода в консоль:

// ["Jack", "Jacky", "Alexandr", "Anna", "Ivan", "Alena"]

// ! Способ 1
// const xml = new XMLHttpRequest();
// const xml2 = new XMLHttpRequest();

// xml.open("GET", "data.json");
// xml2.open("GET", "data2.json");

// xml.send();
// xml2.send();

// // ! создаем функцию под названием response и записываем ее в переменную parse
// let parseArr = response2 => JSON.parse(response2);

// let parseArr = function (response2) {
// return JSON.parse(response2);
// };

// const data = [];
// xml.addEventListener("readystatechange", () => {
//     if (xml.readyState === 4 && xml.status === 200) {
//         const response = parseArr(xml.response).children;
//         response.forEach(item => {
//             data.push(item);
//         })
//     }
// })

// xml2.addEventListener("readystatechange", () => {
//     if (xml2.readyState === 4 && xml2.status === 200) {
//         const response = parseArr(xml2.response).children;
//         response.forEach(item => {
//             data.push(item);
//         })
//     }
// })

// console.log(data);
// console.log(xml);

// ! Способ 2
const data = [];
function requestData(metod, action) {
    const xml = new XMLHttpRequest();
    xml.open(metod, action);
    xml.send();
    let parseArr = response2 => JSON.parse(response2);

    xml.addEventListener("readystatechange", () => {
        if (xml.readyState === 4 && xml.status === 200) {
            const response = parseArr(xml.response).children;
            response.forEach(item => {
                data.push(item);
            })
        }
    })
}

requestData("GET", "data.json");
requestData("GET", "data2.json");
console.log(data);










