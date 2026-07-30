# Island Boy Homes

Static website for islandboyhomes.com — boutique villa & guesthouse management in Bali.
Vanilla HTML/CSS/JS, no build step. Deploys as-is to GitHub Pages.

## Structure
- `index.html` `our-homes.html` `property.html` `contact.html` `terms.html` — pages
- `styles.css` `app.js` `data.js` — shared styles, chrome, and property data
- `assets/` — logos and all photos (self-hosted)
- `*.html` redirect stubs — forward old Wix URLs to new pages

## Local preview
```
python3 -m http.server 8791
```
then open http://localhost:8791
