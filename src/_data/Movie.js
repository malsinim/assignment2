// Referenced https://www.scaler.com/topics/nodejs/node-js-fetch/
module.exports = async () => {
  // import node fetch module to make HTTP requests
  const fetch = (await import("node-fetch")).default;
  // try
  try {
    // fetch data from Strapi API by accessing Movie collection
    const response = await fetch("http://localhost:1337/api/Movies?populate=*");
    // parse the JSON response from the API
    const json = await response.json();
    // return the movie entries
    return json.data; 
  } 
  // if there is a error in fetching data
  catch (fetchError) {
    // log the error in the console
    console.error("Failed to retrieve movie data from Strapi:", fetchError);
   
  }
};


