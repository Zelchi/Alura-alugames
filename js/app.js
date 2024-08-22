function alterarStatus(id) {
    let game = document.getElementById(`game-${id}`);

    let img = game.querySelector('.dashboard__item__img');
    let button = game.querySelector('.dashboard__item__button');

    if (img.classList.contains('dashboard__item__img--rented')) {
        img.classList.remove('dashboard__item__img--rented');
        button.classList.remove('dashboard__item__button--rented');
        button.textContent = 'Alugar';
    } else {
        img.classList.add('dashboard__item__img--rented');
        button.classList.add('dashboard__item__button--rented');
        button.textContent = 'Devolver';
    };
};