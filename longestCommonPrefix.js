var longestCommonPrefix = function(strs) {
    let output = [];
    for(let i = 0; i<strs.length; i++){
        // console.log(strs[i].length);
        for(j=i; j<strs.length; j++){
            if(strs[j] === strs[j+1]){
                console.log(strs[i]);
               output.push(strs[i]);     
            }
        }
    }

    console.log(output);
    return "sd"
};

console.log(longestCommonPrefix(["flower","flow","flight"]));