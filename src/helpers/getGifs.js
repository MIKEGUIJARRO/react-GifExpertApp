export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=Aas18HR8N29Q9KlNtvdUg8HHSl52CYGY`;
    const response = await fetch(url);
    const { data } = await response.json();

    const gifs = data.map((item) => {
        return {
            id: item.id,
            title: item.title,
            url: item.images?.downsized_medium.url,
        }
    });
    return gifs;
};