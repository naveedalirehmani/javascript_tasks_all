var number, answer;

number = +prompt(`inter the number for table creation`);
console.log(`TABLE OF ${number}`);
for (let i = 0; i < 11; i++){
    if(!number){
        alert(`please inter a number`);
        break;
    }else{
        answer = number * i;
        console.log(`${number} * ${i} = ${answer}`);
    }
}