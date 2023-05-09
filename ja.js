
const targ = document.querySelectorAll('[data-anime]');
const animacao = 'animate'

function animacaoscroll(){
    const windowTop = window.pageYOffset + ((window.innerHeight *3) /4) 
    targ.forEach(function(element){
        if((windowTop)> element.offsetTop){
            element.classList.add(animacao)
        }
        else
        {
            element.classList.remove(animacao)
        }
    })
}

animacaoscroll()


window.addEventListener('scroll', function(){
    animacaoscroll()
})

window.sr=ScrollReveal({ reset: true});

sr.reveal('.area-1', {duration: 1000});
sr.reveal('.area-2',{
    rotate: { x: 0, y:80, z:0},
    duration: 2000
});
sr.reveal('.area-3',{
    
    duration: 2000,
});

