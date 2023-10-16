// Contador de palabras

function wordsCount(text, ...words) {
    let counts = Array(words.length).fill(0);
    words.forEach((w,i) => {
        let index = text.indexOf(w);
        while (index >= 0) {
            counts[i]++;
            index = text.indexOf(w, index+1);
        }
    });
    return counts;
}

let text = "De las palabras de la lista, la palabra está en la lista. ";

console.log(wordsCount(text,'las')); //[1]

console.log(wordsCount(text)); //[]

console.log(wordsCount(text,'lista','en','berenjena','palabra')); //[2,1,0,2]