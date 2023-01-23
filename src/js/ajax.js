const buttons = document.querySelectorAll('.buttonPage');
const displayContent = document.getElementById('displayContent');

buttons.forEach(button => {
    button.addEventListener('click' ,(event) => {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", button.getAttribute('data-fileHtml'));
        xhr.onload = function() {
            if (xhr.status === 200) {
                displayContent.innerHTML = xhr.responseText;
            }
        };
        xhr.send();

    });
});
