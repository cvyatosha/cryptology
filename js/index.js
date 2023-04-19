// #####################################
//           CREATE NEW CLASS
// #####################################

let sparta = new SpartaCipher(), // pr 1
    athena = new AthenaCipher(), // pr 2
    playfer = new PlayferCipher(); // pr 2

let сaesar = new СipherСaesar(), // lb 1
    substitution = new SubstitutionCipher(); // lb 2

// #####################################
// TRANSLATE MESSAGE WITH CHOOSEN CIPHER prack
// #####################################
// -------------------------------------
//            sparta-cipher pr1
// -------------------------------------
// The quick brown fox jumps over the lazy dog. It barked
document.querySelector('#sparta-submit-btn').onclick = () => {
    let messege = document.querySelector('#sparta-input-textarea').value,
        row = document.querySelector('#sparta-row-number').value,
        col = document.querySelector('#sparta-col-number').value,
        type = document.querySelector('#sparta-type-select').value;

    if (type == 'decode') {
        document.querySelector('#sparta-output-textarea').value = 'Go down to see all combinations';
        sparta.decryption(messege, document.querySelector('.sparta-decryption-conteiner'));
    }

    if (type == 'encrypt_decipher') {
        console.log(2);
        document.querySelector('#sparta-output-textarea').value = sparta.procedure(messege, row, col);
    }
}

// -------------------------------------
//            athena-cipher pr2
// -------------------------------------
// привіт, це шифр афіни, 7, 4
document.querySelector('#athena-submit-btn').onclick = () => {
    let messege = document.querySelector('#athena-input-textarea').value,
        key_one = document.querySelector('#athena-key-one').value,
        key_two = document.querySelector('#athena-key-two').value,
        type = document.querySelector('#athena-type-select').value;

    if (type == 'decode') {
        document.querySelector('#athena-output-textarea').value = 'Go down to see all combinations';
        athena.decryption(messege, document.querySelector('.athena-decryption-conteiner'));
    }

    if (type == 'encrypt' || type == 'decipher') {
        document.querySelector('#athena-output-textarea').value = athena.procedure(messege, key_one, key_two, type);
    }
}


// -------------------------------------
//            playfer-cipher pr4
// -------------------------------------
// тестове повідомлення
// let test = 'student',
// key = 'commandor';


// console.log(playfer.procedure(key ,test));

// document.querySelector('#athena-submit-btn').onclick = () => {
//     let messege = document.querySelector('#athena-input-textarea').value,
//         key_one = document.querySelector('#athena-key-one').value,
//         key_two = document.querySelector('#athena-key-two').value,
//         type = document.querySelector('#athena-type-select').value;

//     if (type == 'decode') {
//         document.querySelector('#athena-output-textarea').value = 'Go down to see all combinations';
//         sparta.athena(messege, document.querySelector('.athena-decryption-conteiner'));
//     }

//     if (type == 'encrypt' || type == 'decipher') {
//         document.querySelector('#athena-output-textarea').value = athena.procedure(messege, key_one, key_two, type);
//     }
// }


// #####################################
// TRANSLATE MESSAGE WITH CHOOSEN CIPHER lab
// #####################################
// -------------------------------------
//            сaesar-cipher lb1
// -------------------------------------
// encrypt = 'The quick brown fox jumps over the lazy dog. It barked',
// decipher = 'WKHATXLFNAEURZQAIR AMXPSVARYHUAWKHAOD,.AGRJBALWAEDUNHG',
document.querySelector('#сaesar-submit-btn').onclick = () => {
    let messege = document.querySelector('#сaesar-input-textarea').value,
        key_one = document.querySelector('#сaesar-key-one').value,
        type = document.querySelector('#сaesar-type-select').value;

    if (type == 'decode') {
        document.querySelector('#сaesar-output-textarea').value = 'Go down to see all combinations';
        console.log(сaesar.decryption(messege));
    }

    if (type == 'encrypt' || type == 'decipher') {
        document.querySelector('#сaesar-output-textarea').value = сaesar.procedure(messege, key_one, type);
    }
}

// // lb2
// let substitution_cipher_encrypt = 'The quick brown fox jumps over the lazy dog. It barked',
//     substitution_cipher_decipher_with_key = 'HES XBLYA OZJFR IJT UBCWN JQSZ HES VGKM DJP. LH OGZASD',
//     substitution_cipher_decipher = 'computer science, the study of computers and computing, including their theoretical and algorithmic foundations, hardware and software, and their uses for processing information. The discipline of computer science includes the study of algorithms and data structures, computer and network design, modeling data and information processes, and artificial intelligence. Computer science draws some of its foundations from mathematics and engineering and therefore incorporates techniques from areas such as queueing theory, probability and statistics, and electronic circuit design. Computer science also makes heavy use of hypothesis testing and experimentation during the conceptualization, design, measurement, and refinement of new algorithms, information structures, and computer architectures. Computer science is considered as part of a family of five separate yet interrelated disciplines: computer engineering, computer science, information systems, information technology, and software engineering. This family has come to be known collectively as the discipline of computing. These five disciplines are interrelated in the sense that computing is their object of study, but they are separate since each has its own research perspective and curricular focus.',
//     сaesar = new SubstitutionCipher;

//     // console.log(сaesar.procedure(substitution_cipher_encrypt, 'encrypt'));
//     // console.log(сaesar.procedure(substitution_cipher_decipher_with_key, 'decipher'));

//     console.log(сaesar.decryption(substitution_cipher_decipher));



//---------------------------------
// kalkicode.com 
//----------------------------