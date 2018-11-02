document.getElementsByTagName('tr')[0].innerHTML =
    '<th>Etunimi</th>' +
    '<th>Sukunimi</th>' +
    '<th>Osoite</th>' +
    '<th>Puhelinnumero</th>';

/*const lista = document.querySelector('tr');
const t = document.createTextNode('Puhelinnumero');
const th = document.createElement('th');
th.appendChild(t);
lista.appendChild(th);*/

document.getElementsByTagName('td')[0].innerHTML = '<td>Roope</td>';
document.getElementsByTagName('td')[1].innerHTML = '<td>Lunden</td>';
document.getElementsByTagName('td')[2].innerHTML = '<td>Nuijamäki 2 C 73, 02630 Espoo</td>';
document.getElementsByTagName('td')[3].innerHTML = '<td>0451255010</td>';