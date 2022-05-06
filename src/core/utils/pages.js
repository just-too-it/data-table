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
