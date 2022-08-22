const body = document.body,
    darkModeBtn = document.querySelector('#dark-mode-toggle');

darkModeBtn.addEventListener('click', () => {
    if (body.classList == 'darkmode'){
        body.classList.remove('darkmode')
    }else{
        body.classList.add('darkmode')
    }
});