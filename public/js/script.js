'use strict';

(() => {
  const name = 'BOBBY KING';
  const role = 'FULL STACK WEB DEVELOPER';

  function generateName(nameStr) {
    let htmlStr = '';
    for (let i = 0; i < nameStr.length; i += 1) {
      htmlStr += `<span id="name-${i}" style="display: none;">${nameStr[i]}</span>`;
    }
    htmlStr += '<span id="underline-1">|</span>';
    document.querySelector('#name').innerHTML = htmlStr;
  }

  function generateRole(roleStr) {
    let htmlStr = '';
    for (let i = 0; i < roleStr.length; i += 1) {
      htmlStr += `<span id="role-${i}" style="display: none;">${roleStr[i]}</span>`;
    }
    htmlStr += '<span id="underline-2">|</span>';
    document.querySelector('#role').innerHTML = htmlStr;
  }

  function typeRole(i) {
    document.querySelector(`#role-${i}`).style.display = 'inline';
    if (document.querySelector(`#role-${i + 1}`)) {
      setTimeout(typeRole.bind(null, i + 1), 50 + (Math.floor(Math.random() * 50)));
    } else {
      document.querySelector('#underline-2').style.display = 'none';
    }
  }

  function typeName(i) {
    document.querySelector(`#name-${i}`).style.display = 'inline';
    if (document.querySelector(`#name-${i + 1}`)) {
      setTimeout(typeName.bind(null, i + 1), 50 + (Math.floor(Math.random() * 50)));
    } else {
      document.querySelector('#underline-1').style.display = 'none';
      document.querySelector('#underline-2').style.display = 'inline';
      setTimeout(typeRole.bind(null, 0), 50 + (Math.floor(Math.random() * 50)));
    }
  }

  generateName(name);
  generateRole(role);
  setTimeout(typeName.bind(null, 0), 2500);
})();
