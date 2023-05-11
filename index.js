
const input = document.getElementById("numOfWords");
const container = document.querySelector(".container");



const generateWord = (n) => {

    let text = "";
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    for (let i = 0; i < n; i++) {
        const random = (Math.random() * (letters.length - 1)).toFixed(0);
        text += letters[random];
    }



    return text;
};

// console.log(generateWord(5));



const generatePara = () => {

    const numOfWords = Number(input.value);

    // console.log(numOfWords);

    const para = document.createElement("p");

    let data = "";

    randomNumber = (Math.random() * 15).toFixed(0);

    for (let i = 0; i < numOfWords; i++) {
        data += generateWord(randomNumber);
        data += " ";
    }

    // console.log(data);

    para.innerText = data;

    para.setAttribute("class", "paras");

    container.append(para);

};

