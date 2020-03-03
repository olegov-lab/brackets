module.exports = function check(str, bracketsConfig) {
    let arr = [];
    let open = true;
    let len = str.length;
    for(let i = 0; i < len; i++) {
        if(pairClosed(str[i], bracketsConfig) != str[i]) {
            if(isOpen(str[i], bracketsConfig) == true) arr.push(str[i]);
            else {
                if(arr.length != 0) {
                    if(pairClosed(str[i], bracketsConfig) == arr[arr.length - 1]) arr.pop();
                    else break;
                }
                else {                
                    open = false; 
                    break;
                }
            }
        }
        else {
            if(arr.length != 0) {
                if(str[i] == arr[arr.length - 1]) arr.pop();
                else arr.push(str[i]);
            }
            else arr.push(str[i]);
        }
    }
    if(arr.length > 0 || open ==  false) return false;
    else return true;
}

function pairClosed(symb, bracketsConfig) {
    let len = bracketsConfig.length;
    let open='';
    for(let i = 0; i < len; i++) {
        if(symb == bracketsConfig[i][1]) open = bracketsConfig[i][0];
    }
    return open;    
}

function isOpen(symb, bracketsConfig) {
    let len = bracketsConfig.length;
    let exists = false;
    for(let i = 0; i < len; i++) {
        if(symb == bracketsConfig[i][0]) {
            exists = true;
            break;
        }            
    }
    return exists;
}
