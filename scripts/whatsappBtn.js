// Obfuscate the phone number by splitting it into parts
const phoneNumberParts = [
    '+','2', '5', '6', '7', '6', '2', '2', '9', '0', '0', '9', '5'
];

const phoneNumber = phoneNumberParts.join('');
document.getElementById('whatsappButton').href = `https://wa.me/${phoneNumber}`;