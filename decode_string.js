/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    let stringArray = s.split('')
    let decodedArray = []
    let count = 0
    let bracketCount = 1
    
    while (count < stringArray.length) {
        let char = stringArray[count]

        if (char.toUpperCase() != char.toLowerCase()) {
            decodedArray.push(char)
            count += 1
        }
        else if ('0' <= char && char <= '9') {
            let number = Number(char)
            let repeatLetters = repeat(number)
            decodedArray.push(repeatLetters)
        }
    }

    let solution = decodedArray.join('')
    return solution    

    function repeat(multiple, segment = []) {
        count += 2
        subSegment = []

        while (stringArray[count] != ']') {
            let repeatChar = stringArray[count]

            if ('0' <= repeatChar && repeatChar <= '9') {
                bracketCount += 1
                segment.push(subSegment)
                let number = Number(repeatChar)
                subSegment = repeat(number, segment)
            } else {
                subSegment.push(repeatChar)
                count += 1
            }            
        }

        bracketCount -= 1

        let combinedSubsegment = subSegment.join('')
        let repeatSegment = new Array(multiple).fill(combinedSubsegment)
        let newSegment = repeatSegment.join('')        
        segment.push(newSegment)
        let combinedSegment = segment.join('')
        
        count += 1
        
        if (bracketCount === 0) {
            return [newSegment]
        } else {
            return [combinedSegment]
        }        
    }
};

console.log(decodeString('2[abc]3[cd]ef'))
console.log(decodeString('3[a2[c]]'))