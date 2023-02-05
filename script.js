// Написать код, который сформирует 2 запроса за различными файлами json (data.json, data2.json).
// Пример файла data.json:
// {
// 	"children": ["Jack","Jacky","Alexandr"]
// }
// Пример файла data2.json:
// {
// 	"children": ["Anna","Ivan","Alena"]
// }

// Необходимо соединить из двух полученных объектов массивы children и вывести результат в консоль.
// Результат вывода в консоль:
// ["Jack","Jacky","Alexandr","Anna","Ivan","Alena"]

 const newArr = [];


function requestData(method, action, callback) {
    const xml = new XMLHttpRequest();
    xml.open(method, action);
    xml.send();

    let parse = response => JSON.parse(response);

    xml.addEventListener("readystatechange", () => {
        if (xml.readyState === 4 && xml.status === 200) {
            const response = parse(xml.response).children;

            callback(response);
        }
    })
}


function renderArr(response) {
    response.forEach(item => {
        newArr.push(item);
    })
};

requestData("GET", "request/data.json", renderArr);
requestData("GET", "request/data2.json", renderArr);
console.log(newArr);



