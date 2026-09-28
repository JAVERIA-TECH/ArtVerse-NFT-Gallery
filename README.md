# ArtVerse NFT Gallery

A responsive front-end NFT/art marketplace demo built with HTML, CSS, JavaScript, Tailwind CSS, and browser `localStorage`.

## Overview

**ArtVerse NFT Gallery** is a client-side gallery experience for exploring digital artworks, viewing artwork details, interacting with reviews and likes, adding items to a shopping cart, and walking through a simulated checkout/order flow.

The project is intentionally front-end only. It does **not** connect to a real database, payment gateway, blockchain, NFT contract, or production authentication service.

## Introduction

ArtVerse demonstrates how a modern NFT/gallery marketplace can be implemented as a small static web application. The interface is rendered dynamically with JavaScript, while artwork data and browser-only user state are handled with `localStorage`.

The project is suitable as a front-end portfolio/demo project. Before making the repository public, review the sensitive-information notes below and remove or replace any personal credentials/contact information if the values in the current files belong to you.

## Features

- Responsive ArtVerse landing page
- Dynamic NFT/artwork gallery
- Artwork categories and filtering/sorting
- Artwork detail views
- Likes and user reviews
- Browser-based signup/login demo
- Shopping cart with quantity updates
- Simulated checkout and order confirmation flow
- Browser persistence using `localStorage`
- Team portal / admin-author functionality in the front-end
- Animated UI with Tailwind CSS and custom CSS
- 20 bundled demo artwork images

## Tools & Technologies

- **HTML5** — page structure and markup
- **CSS3** — custom styling and animations
- **JavaScript (ES6+)** — application logic and dynamic rendering
- **Tailwind CSS CDN** — utility classes and responsive UI
- **Google Fonts / Inter** — typography
- **Browser `localStorage`** — demo-only client-side persistence
- **Git & GitHub** — source control and repository hosting

## Project Structure

The ZIP currently contains the following structure:

```text
ArtVerse Gallery/
├── index.html
├── script.js
├── style.css
├── README.md
└── images/
    ├── id 1.jpg
    ├── id 2.jpg
    ├── id 3.jpg
    ├── ...
    ├── id 19.jpg
    └── id 20.jpg
```

### File Responsibilities

#### `index.html`
The main HTML entry point. It contains the application's base page structure, navigation, containers, and static interface elements.

#### `script.js`
Contains the application's main client-side logic, including:

- NFT/artwork data
- Dynamic page/view rendering
- Gallery filtering and sorting
- Artwork details
- Likes and reviews
- Signup and login demo
- User state
- Shopping cart
- Checkout simulation
- Team/admin portal UI
- `localStorage` persistence

#### `style.css`
Contains the project's custom CSS, including the Inter font import, dark visual theme, scrollbar styling, animations, and other custom presentation rules.

#### `images/`
Contains the 20 artwork images used by the application.

#### `README.md`
Project documentation, setup instructions, architecture notes, security considerations, and Git/GitHub guidance.

## Architecture

The application is a static client-side web application:

```text
Browser
   │
   ├── index.html
   │       │
   │       └── loads script.js + style.css
   │
   ├── style.css
   │       └── custom styling + animations
   │
   ├── script.js
   │       ├── artwork data
   │       ├── UI/view rendering
   │       ├── login/signup demo
   │       ├── cart
   │       ├── reviews/likes
   │       └── checkout simulation
   │
   ├── images/
   │       └── artwork assets
   │
   └── localStorage
           └── browser-only demo state
```

There is currently **no backend server, database, API layer, payment service, or blockchain integration**.

## Running the Project

No build step is required.

### Option 1 — Open Directly

Open:

```text
index.html
```

in a modern browser.

## License

No license is currently included. Add a license only if you have the rights to distribute the source code and bundled artwork under that license.
