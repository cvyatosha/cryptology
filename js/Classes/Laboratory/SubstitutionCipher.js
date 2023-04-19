class SubstitutionCipher
{
    constructor () 
    {
        
        this.encAlphabet = {
            'A': 'G', 
            'B': 'O', 
            'C': 'Y', 
            'D': 'D', 
            'E': 'S', 
            'F': 'I', 
            'G': 'P', 
            'H': 'E', 
            'I': 'L', 
            'J': 'U', 
            'K': 'A', 
            'L': 'V', 
            'M': 'C', 
            'N': 'R', 
            'O': 'J', 
            'P': 'W', 
            'Q': 'X', 
            'R': 'Z', 
            'S': 'N', 
            'T': 'H', 
            'U': 'B', 
            'V': 'Q', 
            'W': 'F', 
            'X': 'T', 
            'Y': 'M', 
            'Z': 'K',
        };
        this.decAlphabet = {
            'G': 'A', 
            'O': 'B', 
            'Y': 'C', 
            'D': 'D', 
            'S': 'E', 
            'I': 'F', 
            'P': 'G', 
            'E': 'H', 
            'L': 'I', 
            'U': 'J', 
            'A': 'K', 
            'V': 'L', 
            'C': 'M', 
            'R': 'N', 
            'J': 'O', 
            'W': 'P', 
            'X': 'Q', 
            'Z': 'R', 
            'N': 'S', 
            'H': 'T', 
            'B': 'U', 
            'Q': 'V', 
            'F': 'W', 
            'T': 'X', 
            'M': 'Y', 
            'K': 'Z',
        };
        this.percAlphabet = [
            ['A', 8.2], 
            ['B', 1.5], 
            ['C', 2.8], 
            ['D', 4.2], 
            ['E', 12.7], 
            ['F', 2.2], 
            ['G', 2], 
            ['H', 6.1], 
            ['I', 7], 
            ['J', 0.1], 
            ['K', 0.8], 
            ['L', 4], 
            ['M', 2.4], 
            ['N', 6.7], 
            ['O', 7.5], 
            ['P', 1.9], 
            ['Q', 0.1], 
            ['R', 6], 
            ['S', 6.3], 
            ['T', 9], 
            ['U', 2.8], 
            ['V', 1], 
            ['W', 2.4], 
            ['X', 0.1], 
            ['Y', 2], 
            ['Z', 0.1],
        ];
    };

    procedure(message, type)// with key
    {
        let result_message = '',
            messageLetters = message.toUpperCase().match(/\D/g);
            
        for (let i = 0; i < messageLetters.length; i++) {

            if (this.encAlphabet[messageLetters[i]] != undefined) {
                if (type == 'encrypt') {
                    result_message += this.encAlphabet[messageLetters[i]];
                } else if (type == 'decipher') {
                    result_message += this.decAlphabet[messageLetters[i]];
                }            
            } else {
                result_message += messageLetters[i];
            }
        }

        return result_message;
    }

    decryption(message)// whithout key
    {
        let messageLetters = message.toUpperCase().match(/\D/g),
            messageLettersToPerc = message.toUpperCase().match(/\w/g),
            percentage_content_letters = [],
            result_message = '';

            for (let i = 0; i < messageLettersToPerc.length; i++) {
                let isInArray = false;

                for (let j = 0; j < percentage_content_letters.length; j++) {
                    if (percentage_content_letters[j].includes(messageLettersToPerc[i]) == true) {
                        isInArray = true;
                    }
                }
                
                if (isInArray != true) {
                    let letter_counter = 0;
    
                    for (let j = 0; j < messageLettersToPerc.length; j++) {
                        if (messageLettersToPerc[i] == messageLettersToPerc[j]) {
                            letter_counter++;
                        }
                    }

                    percentage_content_letters.push([messageLettersToPerc[i], (letter_counter / messageLettersToPerc.length).toFixed(3)]);
                }

            }

            console.log(percentage_content_letters);

        return result_message;
    }
}
