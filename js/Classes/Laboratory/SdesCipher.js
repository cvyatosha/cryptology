class SdesCipher {
    constructor() {
        this.p10_pattern = [3, 5, 2, 7, 4, 10, 1, 9, 8, 6];
        this.p8_pattern = [4, 1, 5, 2, 6, 3, 8, 7];
        // this.alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    };


    moveLeft(step, object) {
        for (let i = 0; i < step; i++) {
            let pocket = object.shift();

            object.push(pocket);
        }
    }

    procedure(number, key) // with key
    {
        let ten_byte_key = [];

        for (let i = 0; i < this.p10_pattern.length; i++) {
            ten_byte_key[i] = key[this.p10_pattern[i] - 1];
        }


        let left = ten_byte_key.slice(0, 5),
            right = ten_byte_key.slice(5, 10);

        this.moveLeft(1, left)
        this.moveLeft(1, right);

        let old_ten_byte_key = left.concat(right),
            old_eight_byte_key = left.concat(right).slice(2),
            eight_byte_key = [];


        for (let i = 0; i < this.p8_pattern.length; i++) {
            eight_byte_key[i] = old_eight_byte_key[this.p8_pattern[i] - 1];
        }

        let left2 = old_ten_byte_key.slice(0, 5),
            right2 = old_ten_byte_key.slice(5, 10);

        this.moveLeft(2, left2)
        this.moveLeft(2, right2);

        let old_eight_byte_key2 = left2.concat(right2).slice(2),
            eight_byte_key2 = [];

        for (let i = 0; i < this.p8_pattern.length; i++) {
            eight_byte_key2[i] = old_eight_byte_key2[this.p8_pattern[i] - 1];

        }

        console.log(eight_byte_key);
        console.log(eight_byte_key2);

        return 'end sdes';
    }
}