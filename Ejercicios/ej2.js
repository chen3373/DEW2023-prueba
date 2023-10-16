// Media de longitud de palabras

function avgLengthWords(text) {
    //text = text.replace(/[.,:;]/g,'');
    const signPoints = ".,:;" ;
    signPoints.split('').forEach(s => text = text.replace(s,''));
    const words = text.split(" ");
    let lengths = words.map(w => w.length);
    return lengths.reduce((a,l) => a+l, 0) / words.length;
}

let text = "";
console.log(text, "->", avgLengthWords(text));


text = "Este texto tiene palabras más palabras y signos"; //5
console.log(text, "->", avgLengthWords(text));

text = "Este texto tiene: más palabras y signos."; //5
console.log(text, "->", avgLengthWords(text));