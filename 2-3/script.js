const modalOverlay = document.querySelector('.modal-overlay')

const cards = document.querySelectorAll('.card')

for (let card of cards) {
    card.addEventListener('click', () => {
        modalOverlay.classList.add('active')
        courseId = card.getAttribute('id')
        modalOverlay.querySelector('iframe').src = `https://rocketseat.com.br/${courseId}`
    })
}

modalOverlay.querySelector('.close-modal').addEventListener('click', () => {
    modalOverlay.classList.remove('active')
})