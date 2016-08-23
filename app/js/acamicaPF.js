function toCharCode(str){
    return str.charCodeAt();
}


function fromCharCode(num){
    return String.fromCharCode(num);
}

function next(num){
    return num+=1;
}

function nextChar(str){
    return fromCharCode(next(toCharCode()));
}
