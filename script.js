
document.getElementById('encryptBtn').addEventListener('click', function () {
    let inputText = document.getElementById('inputText').value.toLowerCase();
    if (inputText) {
        let encryptedText = inputText
            .replace(/e/g, 'enter')
            .replace(/i/g, 'imes')
            .replace(/a/g, 'ai')
            .replace(/o/g, 'ober')
            .replace(/u/g, 'ufat');
        document.getElementById('outputText').value = encryptedText;

        let encryptBtn = document.getElementById('encryptBtn');
        animateButton(encryptBtn, 'rotate-right');

        let loadingBar = document.getElementById('loadingBar');
        loadingBar.style.width = '100%';
        setTimeout(() => {
            loadingBar.style.width = '0';
        }, 3000);
    } else {
        alert("Por favor, ingresa texto para encriptar.");
    }
});

document.getElementById('decryptBtn').addEventListener('click', function () {
    let inputText = document.getElementById('inputText').value.toLowerCase();
    if (inputText) {
        let decryptedText = inputText
            .replace(/enter/g, 'e')
            .replace(/imes/g, 'i')
            .replace(/ai/g, 'a')
            .replace(/ober/g, 'o')
            .replace(/ufat/g, 'u');
        document.getElementById('outputText').value = decryptedText;

        let decryptBtn = document.getElementById('decryptBtn');
        animateButton(decryptBtn, 'rotate-left');

        let loadingBar = document.getElementById('loadingBar');
        loadingBar.style.width = '100%';
        setTimeout(() => {
            loadingBar.style.width = '0';
        }, 3000);
    } else {
        alert("Por favor, ingresa texto para desencriptar.");
    }
});

document.getElementById('copyBtn').addEventListener('click', function () {
    let outputText = document.getElementById('outputText');
    if (outputText.value) {
        outputText.select();
        document.execCommand('copy');
        alert("Texto copiado al portapapeles");
    } else {
        alert("No hay texto para copiar.");
    }
});

function animateButton(button, animationClass) {
    button.classList.add(animationClass);
    setTimeout(() => {
        button.classList.remove(animationClass);
    }, 3000);
}
