export const titleSortASC = todos => {
  const sorted_todos = todos.sort((a, b) => {
    if (a.title < b.title) return -1;
    if (a.title > b.title) return 1;
    return 0;
  });

  return sorted_todos;
};

export const titleSortDESC = todos => {
  const sorted_todos = todos.sort((a, b) => {
    if (a.title > b.title) return -1;
    if (a.title < b.title) return 1;
    return 0;
  });

  return sorted_todos;
};

export const bodySortASC = todos => {
  const sorted_todos = todos.sort((a, b) => {
    if (a.body < b.body) return -1;
    if (a.body > b.body) return 1;
    return 0;
  });

  return sorted_todos;
};

export const bodySortDESC = todos => {
  const sorted_todos = todos.sort((a, b) => {
    if (a.body > b.body) return -1;
    if (a.body < b.body) return 1;
    return 0;
  });

  return sorted_todos;
};
