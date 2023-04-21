class KasiskyCipher {
    constructor() {
        this.alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    };

    procedure(message, key, type) // with key
    {
        let messageLetters = message.toUpperCase().match(/\D/g),
            key_word = key.toUpperCase(),
            result_message = '',
            tabula_recta = [],
            landslide = -1,
            repeat_letter = false;

        for (let col = 0; col <= this.alphabet.length; col++) {
            tabula_recta[col] = [];

            for (let row = 0, letter_index = 0; row <= this.alphabet.length; row++, letter_index++) {

                if (row == 0 && col == 0) {
                    tabula_recta[0][row] = 0;
                } else {
                    if (letter_index + landslide >= this.alphabet.length && !repeat_letter) {
                        letter_index = 0;
                        repeat_letter = true;
                    }

                    if (repeat_letter) {
                        tabula_recta[col][row] = this.alphabet[letter_index];
                    } else {
                        tabula_recta[col][row] = this.alphabet[letter_index + landslide];
                    }
                }
            }

            if (col == 0) {
                tabula_recta[col][0] = 0;
            } else {
                tabula_recta[col][0] = this.alphabet[col - 1];
            }

            if (col > 0) {
                landslide++;
            }

            repeat_letter = false;
        }


        let key_letter_mass = [[], []];

        for (let row = 0, key_index = 0; row < messageLetters.length; row++, key_index++) {
            if (key_index >= key_word.length) {
                key_index = 0;
            }

            key_letter_mass[0][row] = messageLetters[row]; 
            key_letter_mass[1][row] = key_word[key_index]; 
        }

        for (let i = 0; i < key_letter_mass[0].length; i++) {
            let encrypt_letter = tabula_recta[Number(this.alphabet.indexOf(key_letter_mass[0][i])) + 1][Number(this.alphabet.indexOf(key_letter_mass[1][i])) + 1];

            let b = Number(this.alphabet.indexOf(key_letter_mass[0][i])) + 1;
            let c = Number(this.alphabet.indexOf(key_letter_mass[1][i])) + 1

            // console.log('tabula_recta[' + b + '][' + c + '] = ' + encrypt_letter)
            result_message += encrypt_letter;
        }

        console.log(result_message);

        // decode
        // ----------
        // for (let i = 0; i < messageLetters.length; i++) {
        //     let decode_letter = (this.alphabet.indexOf(key_letter_mass[0][i]) + this.alphabet.indexOf(key_letter_mass[1][i])) % this.alphabet.length;
        //     console.log(encrypt_letter);
        //     console.log();
        // }

        // for (let i = 0; i < messageLetters.length; i++) {
        //     if (this.encAlphabet[messageLetters[i]] != undefined) {
        //         if (type == 'encrypt') {
        //             result_message += this.encAlphabet[messageLetters[i]];
        //         } else if (type == 'decipher') {
        //             result_message += this.decAlphabet[messageLetters[i]];
        //         }            
        //     } else {
        //         result_message += messageLetters[i];
        //     }
        // }

        return result_message;
    }

    decryption(message) // whithout key
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