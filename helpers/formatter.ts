export const SlugFormatter = (text: string) => {
  const NewText = text.toLocaleLowerCase().replaceAll(" ", "-");
  return NewText;
};

export const DateFormatter = (date: string) => {
  const NewDate = new Date(date);
  return NewDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};
