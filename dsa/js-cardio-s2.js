// CHALLENGE 1: LONGEST WORD
// Return the longest word of a string
// If more than one longest word, put into an array
// ex. longestWord('Hello, my name is Brad') === 'hello'
// ex. longestWord('Hello there, my name is Brad') === ['hello', 'there']


// Brad Traversry solution

function longestWord(sent) {
    // remove all punctuation

    const newSent = sent.toLowerCase().match(/[a-z0-9]+/g); // returns and array

    // sort the array in descending. (By default sort fn sorts in ascending)

    const sorted = newSent.sort((a, b) => b.length -a.length ) // +ve num means sort in desc.
    // now sort[0] is the long word.
    const allLongestWordArr = sorted.filter(word => word.length === sorted[0].length)

    return allLongestWordArr.length > 1 ? allLongestWordArr : allLongestWordArr[0]
}

// My solution
// function longestWord(sent) {    
//     const longestWordMap = {}
//     let maxLength = 0;
//     const solutionArray = []
//     sent.split(' ').forEach(word => {
//         if(!longestWordMap[word]) {
//             longestWordMap[word] = word.length
//         }
//     });
//     console.log("longestWordMap", longestWordMap)
//     for(word in longestWordMap) {
//         if(longestWordMap[word] > maxLength) maxLength = longestWordMap[word]
//     }
//     for(word in longestWordMap) {
//         if(longestWordMap[word] === maxLength) solutionArray.push(word)
//     }
//      return solutionArray.length > 1 ?  solutionArray :  solutionArray[0]
// }


 console.log("The longest word is ---------->", longestWord("hello there my name is joshi"))


// CHALLENGE 2: ARRAY CHUNKING
// Split an array into chunked arrays of a specific length
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 3) === [[1, 2, 3],[4, 5, 6],[7]]
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 2) === [[1, 2],[3, 4],[5, 6],[7]]

// using while

function arrayChunck(arr, len) {
    let index = 0;
    const chunkedArray = [];
    while(index < arr.length) {
        chunkedArray.push(arr.slice(index, index+len));
        index += len
    }
    return chunkedArray
}

console.log("chunked array  ---> ", arrayChunck([1, 2, 3, 4, 5, 6, 7], 3))

// CHALLENGE 3: FLATTEN ARRAY
// Take an array of arrays and flatten to a single array
// ex. [[1, 2], [3, 4], [5, 6], [7]] = [1, 2, 3, 4, 5, 6, 7]

function flattenArray(arrays) {
    // SOLUTION 1
    // return arrays.reduce((a, b) => a.concat(b), []);
    // SOLUTION 2
    // return [].concat.apply([], arrays);
    // SOLUTION 3
    return [].concat(...arrays);
  }

  console.log("flatten array ->", flattenArray([[1, 2], [3, 4], [5, 6], [7]]))

  //ANAGRAM