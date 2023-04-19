class AthenaCipher {
    constructor() {
        this.alphabet_uk = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
        // this.alphabet_uk = ['А', 'Б', 'В', 'Г', 'ґ', 'Д', 'Е', 'Є', 'Ж', 'З', 'И', 'І', 'Ї', 'Й', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Ь', 'Ю', 'Я'];
    };

    getInvMultKey(multKey) {
        let invMultKey = 0;

        if (multKey < 0 || multKey > this.alphabet_uk.length) {
            multKey = multKey % this.alphabet_uk.length + this.alphabet_uk.length;
        }

        for (let i = 0; i < this.alphabet_uk.length; i++) {
            if (multKey * i % this.alphabet_uk.length == 1) {
                invMultKey = i;

                console.log("multiplicative key inversion = " + invMultKey + "\n");

                return invMultKey;
            }
        }

        console.log("no inversion input, try another key\n");

        return;
    }

    procedure(message, key_one, key_two, type) // with key
    {
        let messageLetters = message.toUpperCase().match(/\D/g),
            result_message = '',
            invMultKey = this.getInvMultKey(key_two);

        for (let i = 0; i < messageLetters.length; i++) {
            let isLetter = false;

            for (let j = 0; j < this.alphabet_uk.length; j++) {
                if (this.alphabet_uk[j] == messageLetters[i]) {
                    isLetter = true;
                    break;
                }
            }

            if (!invMultKey) {
                break;
            }

            if (isLetter == true) {
                if (type == 'encrypt') {
                    let letterIndex = (this.alphabet_uk.indexOf(messageLetters[i]) * key_two + key_one) % this.alphabet_uk.length;

                    result_message += this.alphabet_uk[letterIndex];
                } else if (type == 'decipher') {
                    let letterIndex = ((this.alphabet_uk.indexOf(messageLetters[i]) - key_one) * key_two) % this.alphabet_uk.length;

                    result_message += this.alphabet_uk[letterIndex];
                }

            } else {
                result_message += messageLetters[i];
            }
        }

        return result_message;
    }

    decryption(message, key_length = this.alphabet.length - 1) // whithout key
    {
        let decode_message = message.toUpperCase(),
            messageLetters = decode_message.match(/[a-zA-Z\s\.\,]/g),
            result_messages = [],
            key_count = 1;


        while (key_count <= key_length) {
            let result_message = '';

            for (let i = 0; i < messageLetters.length; i++) {
                let letterIndex = this.alphabet.indexOf(messageLetters[i]);

                if (letterIndex - key_count < 0) {
                    letterIndex = this.alphabet.length - Math.abs((letterIndex - key_count));
                } else {
                    letterIndex -= key_count
                }

                result_message += this.alphabet[letterIndex];
            }

            result_messages.push(result_message);
            key_count++;
        }

        return result_messages;
    }
}

// ----------------------
//      working code
// ----------------------
// let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// let numAlph = [];

// for (i = 0; i < alphabet.length; i++) {
//     numAlph[alphabet[i]] = i;
// }

// function getInvMultKey(multKey) {

//     if (multKey < 0 || multKey > alphabet.length) {
//         multKey = multKey % alphabet.length + alphabet.length;
//     }

//     for (let i = 0; i < alphabet.length; i++) {
//         if (multKey * i % alphabet.length == 1) {
//             invMultKey = i;
//             console.log("multiplicative key inversion = " + invMultKey + "\n");
//             return invMultKey;
//         }
//     }

//     console.log("no inversion input, try another key\n");

//     return;
// }

// function Encode(txt, addKey, multKey) {

//     let code = "";
//     invMultKey = getInvMultKey(multKey);

//     if (!invMultKey) {
//         return;
//     }
//     for (i = 0; i < txt.length; i++) {
//         code += alphabet[(numAlph[txt[i]] * multKey + addKey) % alphabet.length];
//     }

//     return code;
// }

// function Decode(txt, addKey, multKey) {

//     code = "";
//     invMultKey = getInvMultKey(multKey);
//     if (!invMultKey) {
//         return;
//     }
//     for (i = 0; i < txt.length; i++) {
//         code += alphabet[(numAlph[txt[i]] - addKey) * invMultKey % alphabet.length];
//     }
//     return code;
// }

// console.log(Encode("STUDENT", 2, 3));
// console.log(Decode("EHKLOPH", 2, 3));