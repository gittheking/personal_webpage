'use strict';

(() => {
  const faceSVG = document.querySelector('#face');
  const face    = Snap('#face');
  const name    = 'BOBBY KING';
  const role    = 'FULL STACK WEB DEVELOPER';
  const windowHeight = window.innerHeight;
  const windowWidth = window.innerWidth;
  const about = document.querySelector('#about-container');

  function sizeCards() {
    document.querySelectorAll('.container').forEach((container, i) => {
      const containerStyle = `height: ${windowHeight}px; width: ${windowWidth}px; position: ${i !== 0 ? 'absolute' : 'fixed'}; top: ${windowHeight * i}px`;
      container.setAttribute('style', containerStyle);
    });
  }

  function faceDrop(svg, svgElement) {
    svgElement.style.display = 'block';
    svg.selectAll('g').forEach((path, i) => {
      path.transform('t 0 -1500');
      path.animate({
        transform: 't 0 0',
      }, 1000 * (1 + (i + 1) / 100));
    });
  }

  function faceRise(svg) {
    svg.selectAll('g').forEach((path, i) => {
      path.animate({
        transform: 't 0 -1500',
      }, 1500 * (1  +  (i + 1) / 10));
    });
  }

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

  document.addEventListener('scroll', (event) => {
    // First attempt
    // document.querySelectorAll('.container').forEach((container, i) => {
    //   if (parseInt(container.style.top) <= document.body.scrollTop && i === 1 && ) {
    //     container.setAttribute('style', `height: ${windowHeight}px; position: fixed; top: 0px; width: ${windowWidth}px;`);
    //     console.log('got it');
    //   } else if (i === 1) {
    //     // container.setAttribute('style', `height: ${windowHeight}px; position: absolute; width: ${windowWidth}px;`);
    //   }
    //   if (i === 2) {
    //     console.log(container.style.top);
    //     console.log(document.body.scrollTop);
    //   }
    // });
    
    // Second attempt
    if (parseInt(about.style.top) <= document.body.scrollTop && about.style.position === 'absolute') {
      about.setAttribute('style', `height: ${windowHeight}px; position: fixed; top: 0px; width: ${windowWidth}px;`);
    } else if (document.body.scrollTop <= windowHeight && about.style.position === 'fixed') {
      about.setAttribute('style', `height: ${windowHeight}px; position: absolute; top: 0px; width: ${windowWidth}px;`);
      console.log('got it');
    }
  });

  sizeCards();
  faceDrop(face, faceSVG);
  generateName(name);
  generateRole(role);
  setTimeout(typeName.bind(null, 0), 2000);
})();
