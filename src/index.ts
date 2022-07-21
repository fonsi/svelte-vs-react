import './styles.css';

import './1-helloWorld';
import './2-styles';
import './3-script';
import './4-nested';
import './5-props';
import './6-events';
import './7-computed';
import './8-conditional';
import './9-loop';
import './10-awaitBlock';
import './11-eventModifiers';
import './12-componentEvents';
import './13-dataBindings';
import './14-appState';


const activeClass = 'active';
const sectionAnchors = document.querySelectorAll('aside a');
const currentHash = location.hash || '#1';

sectionAnchors.forEach((link) => {
    link.addEventListener('click', () => {
         sectionAnchors.forEach((link) => {
             link.classList.remove(activeClass);
         });

         link.classList.add(activeClass);
    });
});

const currentAnchor = document.querySelector(`aside a[href="${currentHash}"]`);
if (currentAnchor) {
    currentAnchor.classList.add(activeClass);
}
