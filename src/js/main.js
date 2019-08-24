const go = (elemento) => {
  let vivo = document.querySelector(elemento)
  window.scroll({ 
	  top: vivo.offsetTop, 
	  left: 0,
	  behavior: 'smooth'
  })
} 