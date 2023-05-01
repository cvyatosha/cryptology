class RandGenCipher {
    constructor() {
        this.alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    };

    procedure(number = 3, a = 11, c = 17, m = 25, number_numbers = 10000) // with key
    {

        if (m < 0 || a < 0 || a > m || c < 0 || c > m || number < 0 || number > m) {
            return 'Yours parameters is invalid, you must follow this ruls 0 < number < m, 0 < a < m, 0 < c < m, m > 0';
        }

        let result_mass = [],
            string = '';

        for (let i = 0; i < number_numbers; i++) {
            number = (a * number + c) % m;


            string += number.toString(2);
            result_mass.push(number);
        }



        let check_string = string.slice(0, 20000),
            test = [[0, 0], [1, 0]];

        for (let i = 0; i < check_string.length; i++) {
            if (check_string[i] == test[0][0]) {
                test[0][1]++;
            }

            if (check_string[i] == test[1][0]) {
                test[1][1]++;
            }
        }

        if (test[1][1] > 9654 && test[1][1] < 10346) {
            console.log('test is pased');
        } else {
            console.log('test isn`t pased');
        }
        

        if (result_mass.length <= 1) {
            return number;
        } else {
            return result_mass;
        }

    }
}