export const getNumberPages = (totalItems, limit) => {
  return Math.ceil(totalItems / limit);
};

export const getPagesArray = (totalItems) => {
  let pagesArray = [];
  for (let i = 0; i < totalItems; i++) {
    pagesArray.push(i + 1);
  }
  return pagesArray;
};

export const reverseSorting = (sort) => {
  return sort === 'asc' ? 'desc' : 'asc';
};

export const getNumberPageFromUrl = (search) => {
  if (search) {
    return Number(search.slice(6));
  } else {
    return 1;
  }
};
