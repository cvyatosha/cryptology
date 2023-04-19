class PlayferCipher {
    constructor() {
        this.alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
        // this.alphabet_uk = ['А', 'Б', 'В', 'Г', 'ґ', 'Д', 'Е', 'Є', 'Ж', 'З', 'И', 'І', 'Ї', 'Й', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Ь', 'Ю', 'Я'];
    };

    procedure(key, message, type) // with key
    {
        // .match(/[А-Яа-яІіЇї]/g),
        let messageLetters = message.toUpperCase().match(/[A-Za-z]/g),
            table = [],
            tableSize = 0,
            table_counter = 0,
            reset_table_counter = false,
            result_message = '';

        for (let i = 0; i < messageLetters.length; i++) {
            if (messageLetters[i] == messageLetters[i + 1]) {
                messageLetters.splice(i + 1, 0, 'A');
            }            
        }

        if (messageLetters.length % 2) {
            messageLetters.push('A');
        }

        for (let i = 0; i < messageLetters.length; i++) {
            if (Math.pow(i, 2) > messageLetters.length) {
                tableSize = i;
                break;
            }
        }        

        // for (let col = 0; col < key.length; col++) { 
        //     table[row][col] = key[col].toUpperCase();
        //     console.log(key[col])
        // }

        for (let row = 0; row < tableSize; row++) {
            table[row] = [];

            for (let col = 0; col < tableSize; col++) {

                if (table_counter < key.length && reset_table_counter == false) {
                    table[row][col] = key[table_counter];
                } else {
                    if (table.includes(this.alphabet[table_counter])) {
                        continue;
                    } else {
                        table[row][col] = this.alphabet[table_counter];
                    }
                }

                table_counter++;
                
                if (reset_table_counter == false && table_counter == key.length) {
                    table_counter = 0;
                    reset_table_counter = true;
                }
            }
        }

        console.log(table);

        return result_message;
    }

    decryption(message) // whithout key
    {
        return result_messages;
    }
}