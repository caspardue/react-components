export default function loadIcons({ path, callback, delay } = {}) {
  let ajax = new XMLHttpRequest();
  let d = document;
  let b = d.body;
  ajax.onload = () => {
    if (ajax.status === 200) {
      let div = d.createElement('div');
      div.style.display = 'none';
      div.className = 'svg-in-the-dom';
      div.innerHTML = ajax.responseText;
      b.insertBefore(div, b.childNodes[0]);
    }

    callback && callback(ajax);
  };

  function invoke() {
    ajax.open('GET', path || '/icons.svg', true);
    ajax.send();
  }

  if (delay) {
    setTimeout(invoke, delay);
  } else {
    invoke();
  }
}
