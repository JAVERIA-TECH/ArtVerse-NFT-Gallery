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

### Option 2 — VS Code Live Server

1. Open the `ArtVerse Gallery` folder in VS Code.
2. Install/use the **Live Server** extension.
3. Right-click `index.html`.
4. Select **Open with Live Server**.

Using a local server is recommended for consistent browser behavior.

## Security & Sensitive Information Review

I reviewed the current project files. There are **two things you should review before pushing this exact version to a public repository**.

### 1. Hard-coded demo passwords in `script.js`

The current `script.js` contains this type of credential data:

```javascript
const users = {
    'admin': { password: 'admin123', role: 'admin' },
    'author': { password: 'author123', role: 'author' }
};
```

These are hard-coded credentials inside a public JavaScript file.

Even if they are only demo credentials, **do not publish real or reused passwords in source code**.

#### How to fix it

If these are only for demonstration, replace the hard-coded privileged login mechanism with a clearly marked demo-only flow that does not contain a real/reused password.

For a real application, authentication should be moved to a backend with:

- Server-side authentication
- Password hashing
- Secure sessions/tokens
- Server-side role/permission checks
- Database-backed users
- Proper authorization for admin/author functionality

**Do not put production passwords in `script.js`.**

### 2. Contact information in `index.html` and `script.js`

The current project contains:

```text
info@artverse.com
+92 123 4567890
123 Main Street, Art City, Pakistan
```

These values look like demo/place-holder information, but if any of them are your real email, phone number, or address, **remove or replace them before making the repository public**.

The same contact information is present in the dynamically rendered contact section inside `script.js`.

#### How to fix it

If the information is only fictional demo content, it can remain as clearly fictional placeholder data.

If it is personally associated with you, replace it in **both**:

```text
index.html
script.js
```

Do not publish a personal phone number or physical address unless you intentionally want it public.

### What is NOT automatically a secret

The project also contains artwork names, artist names, review names, prices, descriptions, and sample marketplace data.

These are application/demo data. They are not automatically secrets simply because they contain names or prices.

However, only publish artwork and images that you have the right to distribute.

## Important: `localStorage` Is Not Secure Storage

This project uses browser `localStorage` for demo state.

Do not use this implementation for production authentication or sensitive user information.

In particular:

- Do not store real passwords in `localStorage`.
- Do not store private API keys in JavaScript.
- Do not store payment credentials.
- Do not store wallet private keys.
- Do not treat client-side role checks as secure authorization.

A production implementation should use a secure backend.

## What to Push to GitHub

For this exact project structure, push:

```text
index.html
script.js
style.css
images/
README.md
```

You do **not** need to upload the ZIP file itself as part of the website source.

### Do Not Commit

Avoid committing files such as:

```text
*.zip
.env
.env.*
node_modules/
.vscode/
.idea/
.DS_Store
Thumbs.db
```

If you create any local configuration or credential files later, keep them out of the repository.

## Git Bash — Push to the Target Repository

Target repository:

```text
https://github.com/JAVERIA-TECH/ArtVerse-NFT-Gallery.git
```

After extracting the ZIP, open Git Bash inside the project folder.

```bash
cd "/path/to/ArtVerse Gallery"

git init
git branch -M main
git remote add origin https://github.com/JAVERIA-TECH/ArtVerse-NFT-Gallery.git

git add .
git status
```

### Review Before Commit

Check exactly what Git is about to commit:

```bash
git diff --cached
```

Also search the source for possible credential/contact strings:

```bash
git grep -n -i -E "password|api[_-]?key|secret|token|private[_-]?key"
```

This command can also find normal application words such as `password` in login forms. Review the matches instead of assuming every result is a secret.

You can also check the contact information explicitly:

```bash
git grep -n -E "info@artverse.com|\+92 123 4567890|123 Main Street"
```

If those values are personal and you have not replaced them yet, **stop before committing**.

### Commit and Push

Once the review is clean:

```bash
git commit -m "Add ArtVerse NFT gallery"
git push -u origin main
```

If the remote repository already has commits and Git rejects the push, inspect the remote history first.

**Do not use `git push --force` unless you intentionally want to replace the remote history.**

## Public Repository Checklist

Before making the repository public, verify:

- [ ] No real passwords are present in source code
- [ ] No API keys or private tokens are present
- [ ] No wallet private keys or payment credentials are present
- [ ] No personal phone number is unintentionally published
- [ ] No personal physical address is unintentionally published
- [ ] No private `.env` file is committed
- [ ] Artwork/images are yours or licensed for distribution
- [ ] `git status` contains only intended project files
- [ ] `git diff --cached` has been reviewed
- [ ] The project opens correctly from `index.html`

## Current Project Limitation

ArtVerse simulates an NFT marketplace experience on the front end. It does not currently perform real blockchain transactions, mint NFTs, process real payments, or provide production-grade authentication.

For a production application, add appropriate backend services, secure authentication/authorization, database storage, payment processing, and blockchain/NFT integrations.

## License

No license is currently included. Add a license only if you have the rights to distribute the source code and bundled artwork under that license.
