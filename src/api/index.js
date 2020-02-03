const KEY =
    '?client_id=6a3aa4810ceec4c59c5e75a8ce8a5fba1824ac1cd87b7d7db0955a5d18904fa3';

const URL = `https://api.unsplash.com/photos/`;

const fetchImages = async page => {
    const response = await fetch(`${URL}${KEY}&per_page=3&page=${page}`);
    const data = await response.json();
    if (response.status > 400) {
        throw new Error(data.errors);
    }
    return data;
};

export { fetchImages };
