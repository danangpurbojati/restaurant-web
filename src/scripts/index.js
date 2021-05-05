import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
// import restaurants from '../DATA.json';
import App from './views/app';

const app = new App({
    button: document.getElementById('hamburger'),
    drawer: document.getElementById('drawer'),
    content: document.getElementById('content-wrapper'),
});

window.addEventListener('hashchange', () => {
    app.renderPage();
});

window.addEventListener('load', () => {
    app.renderPage();
});