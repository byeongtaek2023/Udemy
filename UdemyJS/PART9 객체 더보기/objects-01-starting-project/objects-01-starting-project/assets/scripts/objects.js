const addMovieBtn = document.getElementById('add-movie-btn');
const searchBtn = document.getElementById('search-btn');

const movies = [];

const renderMovies = (filter = '') => {
  const movieList = document.getElementById('movie-list');

  if (movies.length === 0) {
    movieList.classList.remove('visible');
    return;
  } else {
    movieList.classList.add('visible');
  }
  movieList.innerHTML = '';

  const filterMovies = !filter
    ? movies
    : movies.filter((movie) => movie.info.title.includes(filter));

  // movies.forEach((movie) => { 
    filterMovies.forEach((movie) => { //이렇게 하면 모든 영화에 필터 적용 
    const movieEl = document.createElement('li');
    // movieEl.textContent = movie.info.title + ' - ' + movie.info[extraName];
    const {info, ...otherProps} = movie;
    // const {title: movieTitle} = info ;
    let { getFormattedTitle} = movie;
    getFormattedTitle = getFormattedTitle.bind(this);
    let text = getFormattedTitle() + `-`; //대신 반복문을 통해서 이미 알고 있는 프로퍼티는 제외하고 미리 알 수 없었던 프로퍼티의 값에만 동적으로 액세스할 수 있는 겁니다
    for (const key in info){
        if ( key !== 'title')
        text += `${key}: ${info[key]}`;
    }
    movieEl.textContent = text; 
    movieList.append(movieEl);
  });
};

const addMovieHandler = () => {  // 영화 입력값
  const title = document.getElementById('title').value;
  const extraName = document.getElementById('extra-name').value;
  const extraValue = document.getElementById('extra-value').value;

  if (
    title.trim() === '' ||
    extraName.trim() === '' ||
    extraValue.trim() === ''
  ) {
    return;
  }

  const newMovie = { 
    info: {
      set title(val) {
        if(val.trim() === ''){
          this._title = 'DEFAULT'
          return;
        }
        this._title = val;
      },
      get title() {
        return this._title;
      },
      [extraName]: extraValue
    },id: Math.random()
    getFormattedTitle: function() {
      return this.info.title.toUppercase();
    }
  };

  newMovie.info.title = title;

  movies.push(newMovie);
  renderMovies();
};

const searchMovieHandler =  () => {
  console.log(this);
const filterTerm = document.getElementById('filter-tilte').value;
renderMovies(filterTerm);
};

addMovieBtn.addEventListener('click', addMovieHandler);
searchBtn.addEventListener('click', searchMovieHandler);
