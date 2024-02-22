export interface Template {
  name: string;
  description: string;
  image: string;
  link: string;
};
const one: Template = {
  name: "Sequoia  Theme",
  description: "This theme for VS Code is not only black and elegant, but it also embodies a modern and gentle aesthetic. The combination of these design elements creates a sleek and sophisticated appearance that is both visually appealing and easy on the eyes. The dark backdrop allows for a high contrast between text and background, which makes it easy to read and navigate through your code. Additionally, the use of subtle and muted colors adds a touch of refinement, making it a perfect choice for those who appreciate minimalistic and stylish design. Overall,this theme is a great choice for anyone looking for a sleek and modern look while coding in VS Code.",
  image: "/images/sequoia.png",
  link: "#",
};

export const byname = {
  one,

};
export const somedata = Object.values(byname);
