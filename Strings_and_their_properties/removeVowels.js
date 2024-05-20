//1119	Remove Vowels from a String

// Input : welcome to geeksforgeeks
// Output : wlcm t gksfrgks

let removeFromVowels = function(str){
   
    let splitStrs = str.split('');

    for(let i =0; i<splitStrs.length; i++){
        if(splitStrs[i] =='a'|| splitStrs[i] =='e'||splitStrs[i] =='i'||splitStrs[i] =='o'||splitStrs[i] =='u'){
            splitStrs[i] = '';
        }
    }
    return splitStrs.join('');

}

console.log(removeFromVowels("welcome to geeksforgeeks"));