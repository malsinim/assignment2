const client = require('contentful').createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
});

module.exports = async function() {
  const entriesMyBlog = await client.getEntries({
    content_type: 'movie'
  });
 
 

  return entriesMyBlog.items;
};


