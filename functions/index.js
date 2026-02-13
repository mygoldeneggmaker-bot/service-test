const functions = require("firebase-functions");
const admin = require("firebase-admin");
const axios = require("axios");

admin.initializeApp();

const UNSPLASH_API_KEY = "YjkjPM4nPFxqqZTFnmEwWZnnAcorMBVYXj3fvPSpGCM";

exports.getFoodImage = functions.https.onCall(async (data, context) => {
  const searchTerm = data.searchTerm;
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
          Authorization: `Client-ID ${UNSPLASH_API_KEY}`,
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
