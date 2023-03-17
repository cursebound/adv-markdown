const params = new URLSearchParams(window.location.search);
const id = params.get('id');
const content = localStorage.getItem(id);
const html = marked(content);
const contentDiv = document.getElementById('content');
contentDiv.innerHTML = html;
