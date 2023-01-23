const button = document.querySelectorAll('.card-read-button');

const notification = document.querySelectorAll('.notification');


button.forEach((btn,i) => {
    btn.addEventListener('click', () => {
       
        notification[i].classList.add('show');
    
        setTimeout(() => {
           notification.forEach(not => {
            not.classList.remove('show')
           })
        }, 2500);
    });

})    
