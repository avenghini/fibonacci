const numb = parseInt(prompt('Enter the number of Fibonacci'));
alert("LoopFor method: " + fiboInLoopFor(numb));
alert("LoopWhile method: " + fiboInLoopWhile(numb));
alert("Array method: " + fiboInArray(numb));
alert("Recurcive method: " + fiboRecurcive(numb));

function fiboInLoopFor(numb){
    let fiboNumb1 = 1, fiboNumb2 = 1;
    for(let i = 3; i <= numb; i++){
        let fiboNextNumb = fiboNumb1 + fiboNumb2;
        fiboNumb1 = fiboNumb2;
        fiboNumb2 = fiboNextNumb;
    }
    return fiboNumb2;
}

function fiboInLoopWhile(numb){
    let fiboNumb1 = 1, fiboNumb2 = 1, counter = 3;
    while(counter <= numb) {
        let fiboNextNumb = fiboNumb1 + fiboNumb2;
        fiboNumb1 = fiboNumb2;
        fiboNumb2 = fiboNextNumb;
        counter++;
    }
    return fiboNumb2;
}

function fiboInArray(numb){
    let fiboArr = [1, 1];
    for(let i = 2; i < numb; i++){
        fiboArr.push(fiboArr[i-1] + fiboArr[i-2]);
    }
    return fiboArr.pop();
}

function fiboRecurcive(numb){
    if(numb <= 2) { 
       return 1;
    }
    return fiboRecurcive(numb - 1) + fiboRecurcive(numb - 2);
}
