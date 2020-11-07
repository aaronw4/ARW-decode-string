/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    let decodedString = ''
    let count = 0
    let bracketCount = 1
    
    while (count < s.length) {
        let char = s[count]

        if (char.toUpperCase() != char.toLowerCase()) {
            decodedString += char
            count++
        }
        else if ('0' <= char && char <= '9') {
            let number = Number(char)
            let repeatLetters = repeat(number)
            decodedString += repeatLetters
        }
    }

    return decodedString    

    function repeat(multiple, segment = '') {
        count += 2
        subSegment = ''

        while (s[count] != ']') {
            let repeatChar = s[count]

            if ('0' <= repeatChar && repeatChar <= '9') {
                bracketCount++
                segment += subSegment
                let number = Number(repeatChar)
                subSegment = repeat(number, segment)
            } else {
                subSegment += repeatChar
                count++
            }            
        }

        bracketCount--

        let repeatSegment = subSegment.repeat(multiple)
        segment += repeatSegment
        
        count++
        
        if (bracketCount === 0) {
            return repeatSegment
        } else {
            return segment
        }        
    }
};

console.log(decodeString('2[abc]3[cd]ef'))
console.log(decodeString('3[a2[c]]'))