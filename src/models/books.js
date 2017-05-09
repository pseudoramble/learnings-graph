import _ from 'lodash';

const books = [
  {
    bid: '1',
    title: 'Mobey Dick',
    author: 'Herman Melville',
    SBN: '12312',
    ISBN: '11111'
  },
  {
    bid: '2',
    title: 'Brave New World',
    author: 'Aldous Huxley',
    SBN: '12345',
    ISBN: '22222'
  },
  {
    bid: '3',
    title: '1984',
    author: 'George Orwell',
    SBN: '12312',
    ISBN: '33333'
  }
];

export const getBook = (bookId) => _.find(books, ({bid}) => bid === bookId);