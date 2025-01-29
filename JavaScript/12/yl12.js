print = console.log

var ul = document.querySelector('ul')

const ostukorv = {
    tooted: [
      { nimi: 'Piim', hind: 3.60, kogus: 2 },
      { nimi: 'Leib', hind: 2.00, kogus: 1 },
      { nimi: 'Munad', hind: 1.50, kogus: 6 },
      { nimi: 'Juust', hind: 4.20, kogus: 1 },
      { nimi: 'Tomatid', hind: 2.30, kogus: 3 }
    ]
  };

  for (let toode of ostukorv.tooted) {
    console.log(`${toode.nimi} - ${toode.hind} EUR - Kogus: ${toode.kogus}`);
  };

  ostukorv.tooted.push({ nimi: 'Kohv', hind: 5.80, kogus: 2 });

  let summa = 0;
  for (let toode of ostukorv.tooted) {
    summa += toode.hind * toode.kogus;
  }
  console.log('Ostukorvi kogu summa:', summa, 'EUR');
  
 

  ostukorv.tooted.forEach(element => {
      ul.innerHTML += `<li>Toode: ${element.nimi}, Hind: ${element.hind}, Kogus: ${element.kogus}</li>`;
  });
  