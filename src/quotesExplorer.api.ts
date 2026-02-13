import { BASE_URL } from "./quotesExplorer.constants.ts";

export const getRandomQuote = async () => {
  try {
    const data = await fetch(`${BASE_URL}`);
    return data.json();
  } catch (error) {
    console.error(error);
  }
};
