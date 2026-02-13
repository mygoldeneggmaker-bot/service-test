const { onCall } = require("firebase-functions/v2/https");
const admin = require("firebase-admin");
const axios = require("axios");
const { defineString } = require("firebase-functions/params");

admin.initializeApp();

// Define the Unsplash API key as a parameter
const unsplashApiKey = defineString("UNSPLASH_API_KEY");

const serviceAccount = "what-to-eat-in-korea@appspot.gserviceaccount.com";

exports.getFoodImage = onCall({ serviceAccount }, async (request) => {
  const searchTerm = request.data.searchTerm;
  if (!searchTerm) {
    throw new functions.https.HttpsError(
      "invalid-argument",
      "The function must be called with one argument 'searchTerm'."
    );
  }

  try {
    const response = await axios.get(
      `https://api.unsplash.com/search/photos?query=${encodeURIComponent(
        searchTerm
      )}&per_page=1&orientation=landscape`,
      {
        headers: {
          // Use the .value() method to access the parameter's value
          Authorization: `Client-ID ${unsplashApiKey.value()}`,
        },
      }
    );

    if (response.data.results && response.data.results.length > 0) {
      const imgUrl = response.data.results[0].urls.regular;
      const photographer = response.data.results[0].user.name;
      const photographerUrl = response.data.results[0].user.links.html;
      return { imgUrl, photographer, photographerUrl };
    } else {
      return { imgUrl: null };
    }
  } catch (error) {
    console.error("Error fetching image from Unsplash:", error);
    throw new functions.https.HttpsError(
      "internal",
      "Failed to fetch image from Unsplash"
    );
  }
});
