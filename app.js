

  const submitButton = document.getElementById('submit');
  const contentInput = document.getElementById('content');
  const pasteList = document.getElementById('list');

  function displayPaste(id) {
    const content = localStorage.getItem(id);
    const html = marked(content);
    document.body.innerHTML = html;
  }

  submitButton.addEventListener('click', event => {
    event.preventDefault();
    const content = contentInput.value;
    const id = Date.now();
    localStorage.setItem(id, content);
    const listItem = document.createElement('li');
    listItem.innerHTML = `<a href="#" data-id="${id}">Paste ${id}</a>`;
    pasteList.appendChild(listItem);
    contentInput.value = '';
  });

  pasteList.addEventListener('click', event => {
    event.preventDefault();
    if (event.target.nodeName === 'A') {
      const id = event.target.getAttribute('data-id');
      displayPaste(id);
    }
  });

  function viewPaste(id) {
    const content = localStorage.getItem(id);
    const html = marked(content);
    const url = `view.html?id=${id}`;
    const win = window.open(url, '_blank');
    win.document.write(html);
  }
  
  pasteList.addEventListener('click', event => {
    event.preventDefault();
    if (event.target.nodeName === 'A') {
      const id = event.target.getAttribute('data-id');
      viewPaste(id);
    }
  });
  



