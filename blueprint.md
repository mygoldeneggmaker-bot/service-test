# Project Blueprint

## Overview

A web application that recommends a random food menu item and helps users find nearby restaurants.

## Features

*   **Menu Recommendation:** Recommends a random menu item from a predefined list.
*   **Categorization:** Allows users to select a category of food (e.g., Korean, Japanese, Chinese).
*   **Restaurant Search:** Provides links to search for the recommended menu item on Naver, and open maps (Google, Naver, Kakao).
*   **View All Menus:** A modal window that displays all available menu items.
*   **Image Display:** Shows an image of the recommended food item from Unsplash.

## Current Task: Add Images to Recommendations

*   **Goal:** Display an image of the recommended food item.
*   **Plan:**
    1.  [X] Use Unsplash Source (source.unsplash.com) to get a random image for the recommended menu item. This doesn't require an API key.
    2.  [X] Modify the `handleRecommendation` function to construct an image URL from Unsplash Source.
    3.  [X] Create an `<img>` element and set its `src` to the Unsplash URL.
    4.  [X] Display the image in the `recommendation-illustration` div.
    5.  [X] Add a loading state while the image is being fetched.
    6.  [X] Add styling for the new image display.
