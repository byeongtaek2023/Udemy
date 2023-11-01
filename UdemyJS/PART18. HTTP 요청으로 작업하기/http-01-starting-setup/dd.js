const options = {
    method: 'GET',
    headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZjI5M2EzNGQ5YTdhYmE3ZmE2YjA1MmVkNDBhNzAzNSIsInN1YiI6IjY1MmY3YTM2MDI0ZWM4MDEwMTU0MzQ3NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4UlNrO-aIaz-15g60eboaP-Zr-ck8iYXpu1qfhKZm0E'
    }
    };
    
    fetch('https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
    이게 fetch 코드구요
    {
    "page": 1,
    "results": [
    {
    "backdrop_path": "/7BzmK4MWc0cj4hCxwWURt6TS6UR.jpg",
    "first_air_date": "2023-08-31",
    "genre_ids": [
    16,
    10765,
    10759,
    35
    ],
    "id": 131378,
    "name": "Adventure Time: Fionna & Cake",
    "origin_country": [
    "US"
    ],
    "original_language": "en",
    "original_name": "Adventure Time: Fionna & Cake",
    "overview": "Fionna and Cake – with the help of the former Ice King, Simon Petrikov - embark on a multiverse-hopping adventure and journey of self-discovery. All the while a powerful new antagonist determined to track them down and erase them from existence, lurks in the shadows.",
    "popularity": 171.983,
    "poster_path": "/fi1b6U1kp73xheECzqwzMn8u3mX.jpg",
    "vote_average": 9.3,
    "vote_count": 116
    },
    {
    "backdrop_path": "/9faGSFi5jam6pDWGNd0p8JcJgXQ.jpg",
    "first_air_date": "2008-01-20",
    "genre_ids": [
    18,
    80
    ],
    "id": 1396,
    "name": "Breaking Bad",
    "origin_country": [
    "US"
    ],
    "original_language": "en",
    "original_name": "Breaking Bad",
    "overview": "When Walter White, a New Mexico chemistry teacher, is diagnosed with Stage III cancer and given a prognosis of only two years left to live. He becomes filled with a sense of fearlessness and an unrelenting desire to secure his family's financial future at any cost as he enters the dangerous world of drugs and crime.",
    "popularity": 322.813,
    "poster_path": "/3xnWaLQjelJDDF7LT1WBo6f4BRe.jpg",
    "vote_average": 8.9,
    "vote_count": 12474
    },
    {
    "backdrop_path": "/rkB4LyZHo1NHXFEDHl9vSD9r1lI.jpg",
    "first_air_date": "2021-11-06",
    "genre_ids": [
    16,
    18,
    10765,
    10759
    ],
    "id": 94605,
    "name": "Arcane",
    "origin_country": [
    "US"
    ],
    "original_language": "en",
    "original_name": "Arcane",
    "overview": "Amid the stark discord of twin cities Piltover and Zaun, two sisters fight on rival sides of a war between magic technologies and clashing convictions.",
    "popularity": 74.119,
    "poster_path": "/fqldf2t8ztc9aiwn3k6mlX3tvRT.jpg",
    "vote_average": 8.7,
    "vote_count": 3357
    },
    {
    "backdrop_path": "/4Mt7WHox67uJ1yErwTBFcV8KWgG.jpg",
    "first_air_date": "1999-10-20",
    "genre_ids": [
    10759,
    35,
    16
    ],
    "id": 37854,
    "name": "One Piece",
    "origin_country": [
    "JP"
    ],
    "original_language": "ja",
    "original_name": "ワンピース",
    "overview": "Years ago, the fearsome Pirate King, Gol D. Roger was executed leaving a huge pile of treasure and the famous \"One Piece\" behind. Whoever claims the \"One Piece\" will be named the new King of the Pirates.\n\nMonkey D. Luffy, a boy who consumed a \"Devil Fruit,\" decides to follow in the footsteps of his idol, the pirate Shanks, and find the One Piece. It helps, of course, that his body has the properties of rubber and that he's surrounded by a bevy of skilled fighters and thieves to help him along the way.\n\nLuffy will do anything to get the One Piece and become King of the Pirates!",
    "popularity": 154.609,
    "poster_path": "/fcXdJlbSdUEeMSJFsXKsznGwwok.jpg",
    "vote_average": 8.7,
    "vote_count": 4090
    },
    {
    "backdrop_path": "/8CXw90lEmnJQeUvkgSnl5bEjbQI.jpg",
    "first_air_date": "2013-12-02",
    "genre_ids": [
    16,
    35,
    10765,
    10759
    ],
    "id": 60625,
    "name": "Rick and Morty",
    "origin_country": [
    "US"
    ],
    "original_language": "en",
    "original_name": "Rick and Morty",
    "overview": "Rick is a mentally-unbalanced but scientifically gifted old man who has recently reconnected with his family. He spends most of his time involving his young grandson Morty in dangerous, outlandish adventures throughout space and alternate universes. Compounded with Morty's already unstable family life, these events cause Morty much distress at home and school.",
    "popularity": 1055.8,
    "poster_path": "/gdIrmf2DdY5mgN6ycVP0XlzKzbE.jpg",
    "vote_average": 8.7,
    "vote_count": 8648
    },
    {
    "backdrop_path": "/A6tMQAo6t6eRFCPhsrShmxZLqFB.jpg",
    "first_air_date": "2009-04-05",
    "genre_ids": [
    10759,
    16,
    10765
    ],
    "id": 31911,
    "name": "Fullmetal Alchemist: Brotherhood",
    "origin_country": [
    "JP"
    ],
    "original_language": "ja",
    "original_name": "鋼の錬金術師 FULLMETAL ALCHEMIST",
    "overview": "Edward and Alphonse Elric's reckless disregard for alchemy's fun­damental laws ripped half of Ed's limbs from his body and left Al's soul clinging to a cold suit of armor. To restore what was lost, the brothers scour a war-torn land for the Philosopher's Sto­ne, a fabled relic which grants the ability to