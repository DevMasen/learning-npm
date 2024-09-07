//! My Notes
import { splitParagraph } from './utils.js';
const paragraph = document.querySelector('p');
console.log(paragraph.textContent);
console.log(splitParagraph(paragraph.textContent));
