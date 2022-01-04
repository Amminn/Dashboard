const body = document.body;
document.querySelector('.back').addEventListener('click', function() {
    body.classList.remove('active')
})

document.querySelector('.open').addEventListener('click', function() {
    body.classList.add('active')
})