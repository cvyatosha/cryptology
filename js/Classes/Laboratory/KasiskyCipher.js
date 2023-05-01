class KasiskyCipher {
    constructor() {
        this.alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    };

    procedure(message, key, type) // with key
    {
        let result = 0,
            output = [message.length],
            result_message = '';

        for (let i = 0; i < message.length; i++) {
            if (type == 'encrypt') {
                result = ((message.charCodeAt(i) + key.charCodeAt(i % key.length)) % 128);
                output[i] = String.fromCharCode(result);

            } else if (type == 'decipher') {
                if (message.charCodeAt(i) - key.charCodeAt(i % key.length) < 0) {
                    result = (message.charCodeAt(i) - key.charCodeAt(i % key.length)) + 128;
                } else {
                    result = (message.charCodeAt(i) - key.charCodeAt(i % key.length)) % 128;
                }

                output[i] = String.fromCharCode(result);
            }
        }

        result_message = output.join('');

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

        console.log(percentage_content_letters.sort());

        return result_message;
    }
}