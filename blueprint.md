# Blueprint for "오늘 뭐 먹지? | 메뉴 추천 & 주변 맛집"

## Project Overview

This project is a web application designed to help users decide "What to eat today?" by recommending a menu item and then assisting them in finding nearby restaurants for that item. It leverages a modern frontend (HTML, CSS, JavaScript) for an interactive user experience and now directly manages food images client-side.

## Features

*   **Dynamic Menu Recommendation:** Users can get a random food recommendation based on selected categories.
*   **Category Filtering:** Food recommendations can be filtered by various cuisines (Korean, Japanese, Chinese, Asian, European, American, Latin American, Middle Eastern, Bunsik, Dessert).
*   **Curated Food Image Display:** For each recommended menu item, a relevant image is displayed from a curated client-side map, ensuring relevance and preventing duplicates.
*   **Location-Based Restaurant Search:** Upon recommendation, users can search for nearby restaurants on Naver, Google Maps, or Kakao Maps, leveraging their current geolocation (if permitted).
*   **Full Menu Board:** A modal displays a comprehensive list of all available menu items categorized by cuisine.
*   **Responsive Design:** The application's layout adapts to different screen sizes, from mobile to desktop.
*   **Firebase Integration:** Utilizes Firebase services (excluding image fetching via Cloud Functions).
*   **Google AdSense Integration:** Includes AdSense for potential monetization.

## Technologies Used

*   **Frontend:**
    *   HTML5
    *   CSS3 (with modern features like Flexbox, Animations, Responsive Media Queries)
    *   JavaScript (ES Modules, Async/Await, Fetch API)
    *   Firebase Web SDK (App)
*   **Backend:**
    *   Firebase (Hosting, potentially other services, but Cloud Functions for image fetching are removed)
*   **Deployment/Hosting:** Firebase Hosting (implied by configuration)

## Architecture

The application follows a client-server architecture:

1.  **Client (Browser):**
    *   `index.html` loads the UI, CSS, and `main.js`.
    *   `main.js` handles all user interactions, manages the menu data, performs geolocation, and now directly accesses a curated `menuImageMap` for food images.
    *   Firebase Web SDKs are used to interact with Firebase services (excluding image fetching via Cloud Functions).
2.  **Firebase Cloud Functions (Server):**
    *   The `getFoodImage` function has been removed as image fetching is now handled client-side using a curated image map.

## Iterative Development Plan (Current Task)

1.  **[DONE] Create `blueprint.md`:** Document the current project overview, features, technologies, and architecture.
2.  **[DONE] Update `README.md`:** Replace the generic "starter template" description with an accurate overview of the "오늘 뭐 먹지?" application.
3.  **[DONE] Implement curated image database for food items to ensure relevance and prevent duplicates.**
    *   Replaced `menuSearchTerms` with `menuImageMap` in `main.js`.
    *   Modified `showFoodImage` function in `main.js` to use `menuImageMap`.
    *   Removed Firebase Functions instance initialization from `main.js`.
    *   Removed the `getFoodImage` Cloud Function and `unsplashApiKey` from `functions/index.js`.
4.  **[DONE] Removed publicly exposed Firebase API Key from `index.html` for security reasons.**

## Security Note: Handling Compromised Google API Key

A Google API key was found publicly exposed in the Git history of this repository and within `index.html`. This poses a significant security risk.

**Immediate Actions Required:**

1.  **Regenerate the API Key:**
    *   Go to your Google Cloud Console.
    *   Navigate to "APIs & Services" > "Credentials".
    *   Locate the compromised API Key (AIzaSyBSK7jWzAgT2tFxwUobi_AWlh-U9T5_nUM).
    *   **Regenerate** the key. This will create a new key and invalidate the old one.
2.  **Delete the Old API Key:** Once regenerated, **delete the compromised key** from your Google Cloud Console.
3.  **Clean Git History:** The API key is still present in the Git history of the repository. To fully remove it, you will need to:
    *   **Follow Google's instructions on handling compromised GCP credentials, specifically for removing sensitive data from Git history.** This typically involves using `git filter-repo` or `git filter-branch` to rewrite history. This is a complex operation and should be performed carefully, ideally in a new branch or repository.
    *   **Example (conceptual - do NOT run without understanding):**
        ```bash
        git filter-repo --path index.html --invert-paths --force
        # OR using git filter-branch (more complex)
        # git filter-branch --index-filter 'git rm --cached --ignore-unmatch index.html' HEAD
        # git filter-branch --tree-filter 'sed -i "" -e "/apiKey: \"AIzaSyBSK7jWzAgT2tFxwUobi_AWlh-U9T5_nUM\"/d" index.html' HEAD
        ```
        **Seriously, refer to official guides for proper Git history rewriting.**
4.  **Review API Key Usage:**
    *   **Determine if an API key is genuinely required client-side** for any remaining Firebase services your application uses (e.g., Firebase Authentication, Firestore, etc.).
    *   If a client-side API key is needed, **create a new, highly restricted API key** in Google Cloud Console. Apply strong API restrictions (only allow access to specific APIs) and Application restrictions (HTTP referrers, if applicable, to limit usage to your domain).
    *   Consider **proxying all API requests through a backend server** to completely hide API keys from the client.

## Future Enhancements (Potential)

*   **User Authentication:** Allow users to save favorite menus or restaurant searches.
*   **Admin Panel:** Manage menu items and categories via a simple interface.
*   **More Sophisticated Recommendation Logic:** Implement a recommendation algorithm that learns user preferences.
*   **Integration with more Map/Restaurant APIs:** Expand options for finding restaurants.
*   **PWA Features:** Add offline capabilities and installability.
