const kuvat = [
  'http://placekitten.com/321/240',
  'http://placekitten.com/320/241',
  'http://placekitten.com/322/242',
  'http://placekitten.com/321/240',
  'http://placekitten.com/331/240',
];

for (i = 0; i < 5; i++) {
  const lista = document.querySelector('ul');
  const li = document.createElement('li');
  const kuva = document.createElement('IMG');

  kuva.setAttribute('src', kuvat[i]);

  li.appendChild(kuva);
  lista.appendChild(li);
}