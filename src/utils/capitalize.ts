const capitalize = (str: string) => {
  return str
    .split("")
    .map((letter, i) => {
      if (i === 0) return letter.toUpperCase();
      return letter.toLocaleLowerCase();
    })
    .join("");
};

export default capitalize;
