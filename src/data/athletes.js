"use strict";

const athletes = [
 
  {
    'id': 'clan-a',
    'name': 'CLAN A',
    'country': 'nl',
    'birth': '1973',
    'image': 'slytherin.jpg',
    'cover': 'slytherin_banner.jpg',
    'link': 'https://en.wikipedia.org/wiki/Mark_Huizinga',
    'medals': [
      { 'year': '2017', 'type': 'B', 'city': 'Tamil Quiz', 'event': 'Quiz', 'category': '12' },
      { 'year': '2017', 'type': 'B', 'city': 'music fest', 'event': 'fest', 'category': '24' },
      { 'year': '2017', 'type': 'G', 'city': 'just scoot', 'event': 'scoot', 'category': '69' },
      { 'year': '2017', 'type': 'G', 'city': 'chess', 'event': ' Championships', 'category': '18' },
      { 'year': '2017', 'type': 'G', 'city': 'table tennis', 'event': 'single', 'category': '20' },
      { 'year': '2017', 'type': 'B', 'city': 'shuttle', 'event': ' single-women', 'category': '2' },
      { 'year': '2017', 'type': 'G', 'city': 'shuttle', 'event': 'single-men', 'category': '20' },
      { 'year': '2017', 'type': 'S', 'city': 'shuttle', 'event': 'double-mixed', 'category': '22' },
      { 'year': '2017', 'type': 'G', 'city': 'shuttle', 'event': 'double-men', 'category': '50' },
      
    ],
  },
  {
    'id': 'clan-b',
    'name': 'CLAN B',
    'country': 'uz',
    'birth': '1986',
    'image': 'hufflepuff_correct.jpg',
    'cover': 'hufflepuff_banner.jpg',
    'link': 'https://en.wikipedia.org/wiki/Rishod_Sobirov',
    'medals': [
      { 'year': '2017', 'type': 'S', 'city': 'Tamil Quiz', 'event': 'Quiz', 'category': '54' },
      { 'year': '2017', 'type': 'B', 'city': 'music fest', 'event': 'fest', 'category': '51' },
      { 'year': '2017', 'type': 'G', 'city': 'just scoot', 'event': 'scoot', 'category': '38' },
      { 'year': '2017', 'type': 'G', 'city': 'chess', 'event': ' Championships', 'category': '18' },
      { 'year': '2017', 'type': 'B', 'city': 'table tennis', 'event': 'single', 'category': '34' },
      { 'year': '2017', 'type': 'B', 'city': 'shuttle', 'event': 'single-women', 'category': '4' },
      { 'year': '2017', 'type': 'B', 'city': 'shuttle', 'event': 'single-men', 'category': '39' },
       { 'year': '2017', 'type': 'B', 'city': 'shuttle', 'event': 'double-mixed', 'category': '38' },
        { 'year': '2017', 'type': 'B', 'city': 'shuttle', 'event': 'double-men', 'category': '16' },
    ],
  },
  {
    'id': 'clan-c',
    'name': 'CLAN C',
    'country': 'jp',
    'birth': '1975',
    'image': 'rave.jpg',
    'cover': 'ravenclaw_banner.JPG',
    'link': 'https://en.wikipedia.org/wiki/Ryoko_Tani',
    'medals': [
      { 'year': '2017', 'type': 'B', 'city': 'Tamil Quiz', 'event': 'Quiz', 'category': '30' },
      { 'year': '2017', 'type': 'B', 'city': 'music fest', 'event': 'fest', 'category': '60' },
      { 'year': '1992', 'type': 'S', 'city': 'just scoot', 'event': 'scoot', 'category': '40' },
      { 'year': '1993', 'type': 'G', 'city': 'chess', 'event': 'Championships', 'category': '24' },
      { 'year': '1994', 'type': 'G', 'city': 'table tennis', 'event': 'single', 'category': '32' },
      { 'year': '1995', 'type': 'G', 'city': 'shuttle', 'event': 'single-women', 'category': '17' },
      { 'year': '1995', 'type': 'G', 'city': 'shuttle', 'event': 'single-men', 'category': '32' },
      { 'year': '1996', 'type': 'S', 'city': 'shuttle', 'event': 'double-mixed', 'category': '19' },
      { 'year': '1997', 'type': 'G', 'city': 'shuttle', 'event': 'double-men', 'category': '24' },
     
    ],
  },
   {
    'id': 'clan-d',
    'name': 'CLAN D',
    'country': 'cu',
    'birth': '1973',
    'image': 'gryffindor.jpg',
    'cover': 'gryfindor-banner.jpg',
    'link': 'https://en.wikipedia.org/wiki/Driulis_González',
    'medals': [
      { 'year': '2017', 'type': 'B', 'city': 'Tamil Quiz', 'event': 'Quiz', 'category': '51' },
      { 'year': '2017', 'type': 'B', 'city': 'music fest', 'event': 'fest', 'category': '45' },
      { 'year': '2017', 'type': 'G', 'city': 'just scoot', 'event': 'scoot', 'category': '34' },
      { 'year': '2017', 'type': 'G', 'city': 'chess', 'event': 'Championships', 'category': '82' },
      { 'year': '1996', 'type': 'G', 'city': 'table tennis', 'event': 'single', 'category': '26' },
      { 'year': '1997', 'type': 'S', 'city': 'shuttle', 'event': 'single-women', 'category': '32' },
      { 'year': '1999', 'type': 'G', 'city': 'shuttle', 'event': 'single-men', 'category': '56' },
      { 'year': '2000', 'type': 'S', 'city': 'shuttle', 'event': 'double-mixed', 'category': '12' },
      { 'year': '2003', 'type': 'G', 'city': 'shuttle', 'event': 'double-men', 'category': '39' },
     
    ],
  }
];

export default athletes;
