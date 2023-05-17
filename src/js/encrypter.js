const textArea = document.querySelector('.text-area');
const message = document.getElementById('msg');

const encryptButton = document.querySelector('.btn-encoder');
const decryptButton = document.querySelector('.btn-decoder');
const copyButton = document.querySelector('.btn-copy');


const cypher = [
  'eno', 'owt', 'eehrt', 'ruof', 'evif', 'xis', 'neves',
  'thgie', 'enin', 'net', 'ichi', 'ni', 'san', 'shi', 'go', 'roku',
  'nana', 'hachi', 'kyu', 'ju', 'mu', 'siod', 'sert', 'ortuaq',
  'ocnic', 'sies'
];

const alphabet = [
  'a', 'b', 'c', 'd', 'e', 'f',
  'g', 'h', 'i', 'j', 'k', 'l',
  'm', 'n', 'o', 'p', 'q', 'r',
  's', 't', 'u', 'v', 'w', 'x',
  'y', 'z'
];





//Encrypt button

encryptButton.addEventListener('click', function () {
  let plainText = textArea.value;
  let encryptedMSG = encrypt(plainText);

  let isValid = checkCharacters(plainText);


  if (isValid) {
    message.style.backgroundImage = 'none';
    message.value = encryptedMSG;
    textArea.value = "";
  } else {
    showErrorMessage();
  }
})


function showErrorMessage() {
  alert('Insira apenas letras sem acentos, sem números ou caracteres especiais');
  textArea.value = '';
  message.value = '';
  message.style.setProperty('background-image','var(--msgBGImage)' );
}


function checkCharacters(string) {
  return /^[a-zA-Z \n]+$/.test(string);
}



function encrypt(text) {

  let encryptedMessage = '';



  for (let i = 0; i < text.length; i++) {
    //the line below searches inside the array "alphabet" for the value of text[i]. So if the text starts with "d", i.e. index 0 of text, the index of alhabet will be 3.
    const indexCypher = alphabet.indexOf(text[i]);

    if (indexCypher != -1) {
      encryptedMessage += cypher[indexCypher];
    } else {
      encryptedMessage += text[i];
    }
  }
  return encryptedMessage;
}



//Decrypt button

decryptButton.addEventListener('click', () => {
  let cryptedText = textArea.value;
  let decyptedMSG = decrypt(cryptedText);

  message.style.backgroundImage = 'none';
  message.value = decyptedMSG;
  textArea.value = "";
})


function decrypt(encryptedMessage) {

  let decryptedMessage = '';
  let isValid = checkCharacters(plainText);

  if(isValid){
    for (let i = 0; i < encryptedMessage.length; i++) {
      let found = false;
      for (let j = 0; j < cypher.length; j++) {
        if (encryptedMessage.startsWith(cypher[j], i)) {
          decryptedMessage += alphabet[j];
          i += cypher[j].length - 1;
          found = true;
          break;
        }
      }
      if (!found) {
        decryptedMessage += encryptedMessage[i];
      }
    }
    return decryptedMessage;
  }else{
    showErrorMessage();
  }  
}


//Copy button

copyButton.addEventListener('click', () => {

  
})






