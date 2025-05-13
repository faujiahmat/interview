import data from './data.js';

const container = document.getElementById('container');

const renderData = (data) => {
  data.forEach((item) => {
    const card = document.createElement('div');
    card.className =
      'card shadow-lg p-3 mb-5 bg-slate-700 text-slate-100 rounded';

    const title = document.createElement('h2');
    title.textContent = item.title;

    const content = document.createElement('p');
    content.textContent = item.content;
    content.className =
      'text-slate-200 text-sm mt-2 hidden absolute top-0 left-0 px-2 py-4 z-10 bg-slate-700 rounded';

    card.appendChild(title);

    card.addEventListener('click', () => {
      content.classList.remove('hidden');
    });

    content.addEventListener('click', () => {
      content.classList.add('hidden');
    });
    container.appendChild(card);
    container.appendChild(content);
  });
};

renderData(data);
