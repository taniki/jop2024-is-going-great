const header = 'Les JOP 2024, ça va être bien';
const footer = 'A footer goes here.';
const entries = [
  {
    id: 'cat',
    categories: ['social'],
    color: 'green',
    faicon: 'cat',
    datetime: '2024-11-28 06:00',
    title: 'Le prestataire pour les appels téléphoniques est déjà en souffrance',
    body: "Le marché a été attribué à une entreprise qui a proposé une prestation au rabais, la suite va vous étonner.",
    links: [
      {
        href: 'https://www.politis.fr/articles/2023/11/info-politis-le-prestataire-telephonique-des-jo-2024-en-souffrance-olympique/',
        linkText: 'Politis',
      },
    ],
  },
  {
    id: 'cat',
    categories: ['surveillance'],
    color: 'green',
    faicon: 'cat',
    datetime: '2024-11-28 05:00',
    title: 'Des QR code pour circuler à paris',
    body: "On pensait en avoir fini avec les QR codes mais grace au covid, c'est maintenant bien ancré dans l'esprit des gouvernants.",
    links: [
      {
        href: 'https://www.bfmtv.com/paris/vous-aurez-un-qr-code-une-derogation-sera-necessaire-pour-circuler-dans-paris-lors-des-j0-2024_AN-202311290043.html',
        linkText: 'BFMTV',
      },
    ],
  },
  {
    id: 'cat',
    categories: ['transport', 'économie'],
    color: 'green',
    faicon: 'cat',
    datetime: '2024-11-27 05:00',
    title: 'Augmentation des tarifs de transports pendant les JOP',
    body: "Pour « assurer les transports » pendant les Jeux Olympiques et Paralympiques, Île-de-France Mobilités passera le prix des tickets de métro à l'unité à 4,00 euros alors qu'ils sont à 2,10 euros aujourd'hui.",
    links: [
      {
        href: 'https://www.liberation.fr/sports/jeux-olympiques/ticket-de-metro-a-quatre-euros-aux-jo-2024-les-transports-etaient-ils-aussi-chers-a-londres-ou-a-rio-20231129_TWSOLOM6O5EMZHEPUG255R6LVQ/',
        linkText: 'Libération',
      },
    ],
  },
];

// Page details
const pageTitle = 'Static timeline generator'; // The title of the page that shows in the browser tab
const pageDescription = 'A super fancy timeline'; // The description of the page for search engines
const pageAuthor = 'Jane Doe'; // Your name

// DON'T EDIT BELOW THIS LINE! --------------------------------------------------------------------
const getFilters = (entries) => {
  const filters = new Set();
  for (var i = 0; i < entries.length; i++) {
    var entry = entries[i];
    if (Object.prototype.hasOwnProperty.call(entry, 'categories')) {
      for (var j = 0; j < entry.categories.length; j++) {
        filters.add(entry.categories[j]);
      }
    }
  }
  var filtersArray = [...filters];
  filtersArray.sort();
  return filtersArray;
};

const addCategoriesStringsToEntries = (entries) => {
  for (const entry of entries) {
    if (Object.prototype.hasOwnProperty.call(entry, 'categories')) {
      entry.categoriesString = entry.categories.join(',');
    }
  }
  return entries;
};

module.exports = {
  header,
  footer,
  entries: addCategoriesStringsToEntries(entries),
  filters: getFilters(entries),
  head: {
    title: pageTitle,
    description: pageDescription,
    author: pageAuthor,
  },
};
