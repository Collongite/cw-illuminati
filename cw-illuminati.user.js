// ==UserScript==
// @name         CW Illuminati
// @namespace    http://tampermonkey.net/
// @version      1.1
// @updateURL    https://github.com/reni4ka/cw-illuminati/raw/refs/heads/main/cw-illuminati.user.js
// @downloadURL  https://github.com/reni4ka/cw-illuminati/raw/refs/heads/main/cw-illuminati.user.js
// @description  Replaces the upvote arrow with the Illuminati symbol.
// @author       reni4ka/Ren
// @match        http*://*.catwar.su/*
// @match        http*://*.catwar.net/*
// @icon         http://d.zaix.ru/Jaju.png
// @grant        none
// @license      MIT
// ==/UserScript==

(function() {
    'use strict';
// тестовый комментарий. если вы видите его, то всё работает как надо.
    function Illuminate() {
        const voteArrows = document.querySelectorAll('a.vote[data-vote="up"]');

        voteArrows.forEach(function(arrow) {
            if (!arrow.querySelector('img')) {
                arrow.innerHTML = '';
                const img = document.createElement('img');
                img.src = 'http://d.zaix.ru/Jaju.png';
                img.alt = 'Illuminati';
                img.style.width = '17px';
                img.style.height = '19px';
                img.style.cursor = 'pointer';
                img.style.pointerEvents = 'none';

                arrow.appendChild(img);

                arrow.addEventListener('click', function(event) {
                    event.preventDefault();
                });
            }
        });
    }

    setInterval(Illuminate, 100);

    Illuminate();
})();
