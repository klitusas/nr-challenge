import App from './models/App'
import Host from './models/Host';
import * as appView from './views/appView';
import * as hostView from './views/hostView';
import { elements } from '../js/views/base';


/**
 * Holds the state of the app
 * Sorted applications
 * All hosts
 * Top25 per host
 * ViewType
 */
const store = {};
const APPS_PER_HOST = 5;
/** 
 * App CONTROLLER
 */
const AppController = async () => {
    // Render top menu
    appView.renderApp();
    if (!store.applications) store.applications = new App();
    // Load all applications
    await store.applications.getAllApps();
    HostController();
    // Change state to grid - for reference
    if (!store.viewType) store.viewType = 'grid';
};


/** 
 * Host CONTROLLER
 */
const HostController = () => {
    if (!store.host) store.host = new Host(store.applications.list);
    // Find all hosts
    store.host.findAllHost();
    // Render hosts as cards
    hostView.clearResults();
    store.host.allHosts.map(el => hostView.renderCards(store.host.appsPerHost(el, APPS_PER_HOST)));
};

/** 
 * Event listeners
*/

// Get apps on DOM load
document.addEventListener('DOMContentLoaded', () => AppController());

// Listens to list item click
elements.cards.addEventListener('click', e => {
    const listItem = e.target.closest('.card-item');
    if (listItem) {
        alert("Application release: " + listItem.dataset.version);
    }
});

// Listens checkbox click
elements.header.addEventListener('change', (e) => {
    const checkbox = e.target.closest('#checkbox');
    if (checkbox) {
        const label = document.querySelector('#checkboxLabel')
        if (e.target.checked && store.viewType === 'grid') {
            label.innerHTML = 'Show as a grid';
            elements.cards.classList.add('grid-view');
            store.viewType = 'list';
        } else {
            elements.cards.classList.remove('grid-view');
            label.innerHTML = 'Show as a list';
            store.viewType = 'grid';
        }
    }
});
