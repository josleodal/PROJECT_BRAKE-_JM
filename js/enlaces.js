document.addEventListener('DOMContentLoaded', () => {
    exportarLinks();
  });
  
  function añadirLink() {
    const titleInput = document.getElementById('linkTitle');
    const urlInput = document.getElementById('linkUrl');
  
    const title = titleInput.value.trim(); 
    const url = urlInput.value.trim();
  
    if (title && url) {
      const link = { title, url };
      const links = JSON.parse(localStorage.getItem('links')) || [];
      links.push(link);
      localStorage.setItem('links', JSON.stringify(links));
  
      titleInput.value = '';
      urlInput.value = '';
  
      exportarLinks();
    }
  }
  function eliminarLink(index) {
  const links = JSON.parse(localStorage.getItem('links')) || [];

  if (index >= 0 && index < links.length) {
    const actualizarLinks = [];

    for (let i = 0; i < links.length; i++) {
      if (i !== index) {
        actualizarLinks.push(links[i]);
      }
    }

    localStorage.setItem('links', JSON.stringify(actualizarLinks));

    exportarLinks();
  } else {
    console.log('Error');
  }
}
  function exportarLinks() {
    const linkList = document.getElementById('linkList');
    linkList.innerHTML = '';
  
    const links = JSON.parse(localStorage.getItem('links')) || [];
  
    links.forEach((link, index) => {
      linkList.innerHTML += `
        <li class="linkItem">
          <a href="${link.url}" target="_blank">${link.title}</a>
          <button onclick="eliminarLink(${index})">Eliminar</button>
        </li>
      `;
    });
  }
  
  const buttonEnlace = document.getElementById('buttonEnlace');
  
  buttonEnlace.addEventListener('click', añadirLink);
  
