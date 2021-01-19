function validation(e) {
    const form = document.getElementById('form')
    const input = document.getElementById('input').value
    const inputBtn = document.getElementById('input-btn')
    const text = document.getElementById('text')
    const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (input.match(pattern)) {
        text.textContent = 'Your Email Address is Valid.'
        text.style.color = '#00ff00';
    } else {
        text.textContent = 'Check your email please.'
        text.style.color = '#ff0000';
    }
    if (input == "") {
        text.textContent = ''
        text.style.color = '#00ff00';
    }

}




