const { onCall } = require("firebase-functions/v2/https");
const admin = require("firebase-admin");
const axios = require("axios");
const { defineString } = require("firebase-functions/params");

admin.initializeApp();

const serviceAccount = "what-to-eat-in-korea@appspot.gserviceaccount.com";

// Removed getFoodImage function as it's no longer needed for image fetching.
// Removed unsplashApiKey definition as it's no longer used.
