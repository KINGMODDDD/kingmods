document.getElementById('generateBtn').addEventListener('click', function() {
const key = generateKey(30);
document.getElementById('keyOutput').value = key;
});

function generateKey(length) {
const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
let key = '';
for (let i = 0; i < length; i++) {
const randomIndex = Math.floor(Math.random() * chars.length);
key += chars[randomIndex];
}
return key;
}