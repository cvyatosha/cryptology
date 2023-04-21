class SpartaCipher {
    procedure(user_message, user_row, user_col) // with key
    {
        let result_message = '',
            encrypt_mass = [],
            message_lettersCounter = 0,
            message_letters = user_message.toLowerCase().match(/\w/g);

        for (let row = 0; row < user_row; row++) {
            encrypt_mass[row] = [];

            for (let col = 0; col < user_col; col++) {
                if (message_letters[message_lettersCounter] == undefined) {
                    encrypt_mass[row][col] = '*';
                } else {
                    encrypt_mass[row][col] = message_letters[message_lettersCounter];
                }

                message_lettersCounter++;
            }
        }

        for (let col = 0; col < encrypt_mass.length; col++) {
            for (let row = 0; row < encrypt_mass.length; row++) {
                result_message += encrypt_mass[row][col];
            }
        }

        return result_message;
    }

    decryption(user_message, dec_container) // whithout key
    {
        let result_message = [],
            message_letters = user_message.toLowerCase().match(/\w/g);

        for (let decode_row = 2; decode_row < 10; decode_row++) {
            for (let decode_col = 2; decode_col < 10; decode_col++) {
                let decode_message = '',
                    encrypt_mass = [],
                    message_lettersCounter = 0;

                for (let row = 0; row < decode_row; row++) {
                    encrypt_mass[row] = [];

                    for (let col = 0; col < decode_col; col++) {
                        if (message_letters[message_lettersCounter] == undefined) {
                            encrypt_mass[row][col] = '*';
                        } else {
                            encrypt_mass[row][col] = message_letters[message_lettersCounter];
                        }

                        message_lettersCounter++;
                    }
                }

                for (let col = 0; col < decode_col; col++) {
                    for (let row = 0; row < decode_row; row++) {
                        decode_message += encrypt_mass[row][col];
                    }
                }

                let html_p = document.createElement('p');

                html_p.innerHTML = decode_row + 'x' + decode_col + ': ' + decode_message;
                dec_container.append(html_p);
            }
        } 
    }
}