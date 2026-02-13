const { onCall } = require("firebase-functions/v2/https");
const admin = require("firebase-admin");
const axios = require("axios");
const { defineString } = require("firebase-functions/params");

admin.initializeApp();

const unsplashApiKey = defineString("UNSPLASH_API_KEY");

const serviceAccount = "what-to-eat-in-korea@appspot.gserviceaccount.com";

// Helper function to search for an image on Unsplash
async function searchUnsplash(query) {
  try {
    const response = await axios.get(
      `https://api.unsplash.com/search/photos?query=${encodeURIComponent(
        query
      )}&per_page=1&orientation=landscape`,
      {
        headers: {
          Authorization: `Client-ID ${unsplashApiKey.value()}`,
        },
      }
    );

    if (response.data.results && response.data.results.length > 0) {
      const photo = response.data.results[0];
      return {
        imgUrl: photo.urls.regular,
        photographer: photo.user.name,
        photographerUrl: photo.user.links.html,
      };
    }
    return null;
  } catch (error) {
    console.error(`Error fetching image for query '${query}':`, error);
    // Don't throw an error here, just return null to allow fallback searches
    return null;
  }
}

exports.getFoodImage = onCall({ serviceAccount }, async (request) => {
  const { searchTerm, category } = request.data;

  if (!searchTerm) {
    throw new functions.https.HttpsError(
      "invalid-argument",
      "The function must be called with a 'searchTerm' argument."
    );
  }

  let imageData = null;

  // 1. Most specific search: "[searchTerm] [category] food"
  if (category) {
    imageData = await searchUnsplash(`${searchTerm} ${category} food`);
  }

  // 2. Broader search: "[searchTerm] food"
  if (!imageData) {
    imageData = await searchUnsplash(`${searchTerm} food`);
  }

  // 3. Category-only search: "[category] food"
  if (!imageData && category) {
    imageData = await searchUnsplash(`${category} food`);
  }

  if (imageData) {
    return imageData;
  } else {
    // If all searches fail, return null
    console.warn(`No image found for searchTerm: '${searchTerm}', category: '${category}'`);
    return { imgUrl: null };
  }
});
