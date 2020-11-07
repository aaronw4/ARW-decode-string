/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    let stringArray = s.split('')
    let decodedArray = []
    let count = 0
    
    while (count < stringArray.length) {
        let char = stringArray[count]

        if (char.toUpperCase() != char.toLowerCase()) {
            decodedArray.push(char)
            count += 1
        }
        else if ('0' <= char && char <= '9') {
            let number = Number(char)
            repeat(number)
        }
    }

    let solution = decodedArray.join('')
    return solution

    function repeat(multiple, segment = []) {
        count += 2
        segment = []

        while (stringArray[count] != ']') {
            let repeatChar = stringArray[count]

            if ('0' <= repeatChar && repeatChar <= '9') {
                repeat(repeatChar, segment)
            } else {
                segment.push(repeatChar)
                count += 1
            }            
        }

        let combinedSegment = segment.join('')
        let repeatSegment = new Array(multiple).fill(combinedSegment)
        let newSegment = repeatSegment.join('')
        decodedArray.push(newSegment)
        count += 1
    }
};

// console.log(decodeString('abc3[d]ef'))
console.log(decodeString('3[a2[c]]'))