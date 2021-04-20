import md5 from 'md5';

class Api {
  static async fetch(resource: string) {
    const API_URL = process.env.REACT_APP_MARVEL_API;
    const PUBLIC_KEY = process.env.REACT_APP_MARVEL_PUBLIC_KEY;
    const PRIVATE_KEY = process.env.REACT_APP_MARVEL_PRIVATE_KEY;

    const timestamp = new Date().getTime();
    const hash = md5(`${timestamp}${PRIVATE_KEY}${PUBLIC_KEY}`);
    const url = `${API_URL}/${resource}`;

    const uri = `${url}?apikey=${PUBLIC_KEY}&ts=${timestamp}&hash=${hash}`;

    return fetch(uri);
  }
}

export default Api;
