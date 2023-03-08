import { get, writable } from "svelte/store";

const title = writable('');
const getTitle = () => get(title);
const setTitle = (newTitle: string) => {
    title.set(`${newTitle} - Hangman`);
    document.title = getTitle();
}

export { getTitle, setTitle }