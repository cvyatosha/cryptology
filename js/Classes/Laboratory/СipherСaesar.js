class СipherСaesar
{
    constructor () 
    {
        this.alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', ' ', '.', ','];
    };

    
    procedure(message, key, type)// with key
    {
        let result_message = '',
            messageLetters = message.toUpperCase().match(/[a-zA-Z\s\.\,]/g);

            
        for (let i = 0; i < messageLetters.length; i++) {
            let letterIndex = this.alphabet.indexOf(messageLetters[i]);
            
            if (letterIndex != -1) {
                if (type == 'encrypt') {
                    if (Number(letterIndex) + Number(key) >= this.alphabet.length) {
                        letterIndex = Math.abs(this.alphabet.length - (Number(letterIndex) + Number(key)));
                    } else {
                        letterIndex = Number(letterIndex) + Number(key);  
                    }
                } else if (type == 'decipher') {
                    if (letterIndex - key < 0 ) {
                        letterIndex = this.alphabet.length - Math.abs((letterIndex - key));
                    } else {
                        letterIndex -= key;  
                    }
                }

                // console.log('letter -> '+ messageLetters[i] +'|' + this.alphabet[letterIndex] + ' <- this.alphabet ');

                result_message += this.alphabet[letterIndex];
            
            } else {
                break;
                return false;
            }
        }

        return result_message;
    }

    decryption(message, dec_container, key_length = this.alphabet.length - 1)// without key
    {
        let decode_message = message.toUpperCase(),
        messageLetters = decode_message.match(/[a-zA-Z\s\.\,]/g),
        result_messages = [] ,
        key_count = 1;


        while (key_count <= key_length) {
            let result_message = '';
            
            for (let i = 0; i < messageLetters.length; i++) {
                let letterIndex = this.alphabet.indexOf(messageLetters[i]);

                if (letterIndex - key_count < 0 ) {
                    letterIndex = this.alphabet.length - Math.abs((letterIndex - key_count));
                } else {
                    letterIndex -= key_count  
                }

                result_message += this.alphabet[letterIndex];
            }

            let html_p = document.createElement('p');

                html_p.innerHTML = 'key - ' + key_count + ': ' + result_message;
                dec_container.append(html_p);

            key_count++;
        }
    }
}
