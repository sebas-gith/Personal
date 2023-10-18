const menu_btn = document.querySelectorAll('.desplegable')
const mobile_menu = document.querySelectorAll('.mobile-nav')

mobile_menu.forEach(element => {
  element.childNodes.forEach(a => {
    a.addEventListener('click', function () {
        element.classList.toggle('is-active')
        menu_btn.forEach(me => me.classList.toggle('is-active'))
    })
})
})

menu_btn.forEach(element => {
  element.addEventListener('click', function () {
    mobile_menu.forEach(mo => {mo.classList.toggle('is-active')})
    element.classList.toggle('is-active')
  })
})

document.querySelectorAll(".change-mode-dark").forEach((element) => {

    element.addEventListener("click", (e) => {
      if(document.body.classList.contains("theme-dark")){
        element.style.color ='blue';
        element.innerHTML = `<svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        fill="currentColor"
        class="bi bi-moon"
        viewBox="0 0 16 16"
      >
        <path
          d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278zM4.858 1.311A7.269 7.269 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.316 7.316 0 0 0 5.205-2.162c-.337.042-.68.063-1.029.063-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286z"
        ></path>
      </svg>`
      localStorage.setItem('theme', 'light')
      }else {
        console.log('en otro')
        element.style.color ='yellow';
        element.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-sun" viewBox="0 0 16 16">
<path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"/>
</svg>`
localStorage.setItem('theme', 'dark')
      }

      document.body.classList.toggle('theme-dark');
    });
  });

document.addEventListener('DOMContentLoaded', e => {
    let theme  = localStorage.getItem('theme');
    let lang  = localStorage.getItem('lang')

    if(theme && theme == 'dark'){
        document.body.classList.add('theme-dark')
        document.querySelectorAll('.change-mode-dark').forEach(element => {
        element.style.color ='yellow';
        element.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-sun" viewBox="0 0 16 16">
<path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"/>
</svg>`
})
    }else{
        document.body.classList.remove('theme-dark')
        document.querySelectorAll('.change-mode-dark').forEach(element => {
            element.style.color ='blue';
            element.innerHTML = `<svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            class="bi bi-moon"
            viewBox="0 0 16 16"
          >
            <path
              d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278zM4.858 1.311A7.269 7.269 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.316 7.316 0 0 0 5.205-2.162c-.337.042-.68.063-1.029.063-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286z"
            ></path>
          </svg>`
        })
    }
    if(lang && lang == 'us'){
      const elementosIdioma = document.querySelectorAll('[data-idioma]');
      elementosIdioma.forEach(function(elemento) {
        const idiomaElemento = elemento.getAttribute('data-idioma');
        if (idiomaElemento == lang) {
          if(elemento.tagName !== 'DIV'){
            elemento.style.display = 'flex';
          }else{
            elemento.style.display = 'block'
          }
        } else {
          elemento.style.display = 'none';
        }
      });
    }else{
      const elementosIdioma = document.querySelectorAll('[data-idioma]');
      elementosIdioma.forEach(function(elemento) {
        const idiomaElemento = elemento.getAttribute('data-idioma');
        if (idiomaElemento == 'es') {
          if(elemento.tagName !== 'DIV'){
            elemento.style.display = 'flex';
          }else{
            elemento.style.display = 'block'
          }
        } else {
          elemento.style.display = 'none';
        }
      });
    }

})



document.querySelectorAll('.change-language').forEach(element => {  
  element.addEventListener("click", e => {
    console.log('cambiaste de idioma')
    let idiomaSeleccionado;

    if(element.getAttribute('page-lang') == 'es'){
      idiomaSeleccionado = 'us'
      document.querySelectorAll('.chagne-language').forEach(ele => {
        ele.setAttribute('page-lang', 'us')
      })
    localStorage.setItem('lang', 'us')
    }else{
      document.querySelectorAll('.chagne-language').forEach(ele => {
        ele.setAttribute('page-lang', 'us')
      })
      idiomaSeleccionado = 'es'
    localStorage.setItem('lang', 'es')
    }

    const elementosIdioma = document.querySelectorAll('[data-idioma]');
    elementosIdioma.forEach(function(elemento) {
      const idiomaElemento = elemento.getAttribute('data-idioma');
      console.log(idiomaElemento)
      if (idiomaElemento == idiomaSeleccionado) {
        if(elemento.tagName !== 'DIV'){
          elemento.style.display = 'flex';
        }else{
          elemento.style.display = 'block'
        }
      } else {
        elemento.style.display = 'none';
      }
    });
  })
})
