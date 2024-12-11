const client = require('contentful').createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
});

module.exports = async function() {
  const blogEntries = await client.getEntries({
    content_type: 'blog'
  });
 
 

  return blogEntries.items;
};

