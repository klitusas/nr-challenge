import { elements } from '../views/base';

export const clearResults = () => {
    elements.cards.innerHTML = '';
};

const renderList = list => `
<li class="card-item" data-version="${list.version}"><span class="card-item__apdex">${list.apdex}</span> ${list.name}</li>
`;

export const renderCards = app => {
    const markup = `
        <article class="card grid-view">
            <h2>${app.host}</h2>
            <ul class="card-items">
                ${app.apps.map(item => renderList(item)).join('')}
            </ul>
        </article>`;

    elements.cards.insertAdjacentHTML('beforeend', markup);
};