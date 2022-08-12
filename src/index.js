module.exports = function check(str, bracketsConfig) {

    let bracketsOpen = [];
    let bracketsPair = {};
    let stack = [];

    bracketsConfig.forEach((element, index) => {
        bracketsPair[element[1]] = element[0];
    });

    bracketsOpen = Object.values(bracketsPair);

    for (let i = 0; i < str.length; i++) {
        let topElement = stack[stack.length - 1];   

        if (topElement !== undefined) {
            if (bracketsPair[str[i]] === topElement) {
                stack.pop();
            }

            else if (bracketsOpen.includes(str[i])) {
                stack.push(str[i]);
            } 

            else return false;
            }
        else if (bracketsOpen.includes(str[i])) {
            stack.push(str[i]);
        }  

        else return false;

        } 
    return stack.length === 0;
}