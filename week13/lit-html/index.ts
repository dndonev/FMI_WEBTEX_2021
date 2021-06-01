// TO RUN
// GO TO: https://codesandbox.io/s/lit-html-starter-forked-v64wt?file=/src/index.ts
// AND PASTE:


import { html, render, nothing } from 'lit-html';
import { repeat } from 'lit-html/directives/repeat.js';


const data = {
  name: 'Dobrin',
  feeling: 'good',
  email: 'd.d.donev@abv.bg',
  scores: [2, 5, 2, 3, 6],
};


const header = html`<h3>User</h3>`;
const userInfo = (name: string, email: string) =>
  html`<p>${name}</p>
    <p>${email}</p>`;

const feeling = (feeling: string) => 
  html`${feeling === 'good' ? html`<h3>Feeling good</h3>` : nothing}`

const scores = (scores) => html`
  <ul>
    ${scores.map((score) => html`<li>${score}</li>`)}
  </ul>
`;

const scoresRepeat = (scores) => 
  html`<ul>
  ${repeat(scores, (score) => html`<li>${score}</li>`)}
  </ul>`;

const user = html` ${header} ${feeling(data.feeling)} ${userInfo(data.name, data.email)}
${scoresRepeat(data.scores)}`;

render(user, document.querySelector('#user1'));
render(user, document.querySelector('#user2'));
render(user, document.querySelector('#user3'));
