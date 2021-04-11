export const handleFetchGif = async (category) => {
  const url =
    `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&api_key=zvFrwigXDCJWXzWakMTNT6MalRQwjRlw&limit=10`;
  const response = await fetch(url);
  const { data } = await response.json();
  const filteredData = data.map((fil) => {
    return {
      id: fil.id,
      title: fil.title,
      url: fil.images?.downsized_medium.url,
    };
  });
  return filteredData;
};
