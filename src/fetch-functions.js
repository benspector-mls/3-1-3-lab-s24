export const getFirstThreeFantasyBooks = async () => {
  // fetch data with a URL
  try {
    const url = 'https://openlibrary.org/subjects/fantasy.json';
    const response = await fetch(url);
    // check to see if the response is ok
    if (!response.ok) throw new Error(`Failed to get fantasy books`)

    // parse the response body from JSON into a JS object
    const jsonData = await response.json();

    // test your data and investigate!
    // console.log(jsonData);

    // returns 3 books
    return jsonData.works.slice(0, 3).map((work) => {
      return {
        title: work.title,
        author: {
          name: work.authors[0].name,
          urlKey: work.authors[0].key,
        },
        coverUrl: `https://covers.openlibrary.org/a/id/${work.cover_id}-M.jpg`
      }
    });
  }
  catch (error) {
    console.log(error);
    // return new Promise(() => null)
    return null;
  }

};

export const getAuthor = () => {
  // fetch data with a URL
  // check to see if the response is ok
  // parse the response body from JSON into a JS object
  // returns author
};

export const createNewUser = () => {
  // fetch data with a URL
  // check to see if the response is ok
  // parse the response body from JSON into a JS object
  // returns???
}