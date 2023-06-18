(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
  function ativaletra(elemento){
    const arrTexto = elemento.innerHTML.split('')
    elemento.innerHTML = '';
    arrTexto.forEach((letra, i)=>{
        setTimeout(()=>{
            elemento.innerHTML+= letra;
       }, 75 * i)
    });
    }
 
    
const titulo = document.querySelector('.digitando');
ativaletra(titulo);

const ativamenu = document.querySelector('.fa-bars');

ativamenu.addEventListener('click',()=>{
    ativamenu.classList.toggle('fa-x')

})
    });
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })
})();
