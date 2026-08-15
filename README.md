# Ashish Devlekar — Portfolio

Built with React + Vite + Tailwind CSS v4.

## Local development

```
npm install
npm run dev
```

Opens at http://localhost:5173

## Before you deploy — 2 things to add

1. **Your photo**: save it as `portrait.jpg` and put it inside `public/images/`.
   The code in `src/components/Hero.jsx` already looks for it at that path — no
   code changes needed, it'll appear automatically once the file exists there.
2. **Your resume PDF**: save it as `resume.pdf` and put it directly inside
   `public/` (delete the `PUT_YOUR_RESUME_HERE.txt` placeholder file). The
   "Download CV" button already points to `/resume.pdf`.

Also check `src/data/content.js` — all the text on the site (bio, project
descriptions, links) lives in that one file, so it's the only place you need to
edit for future content updates. Fill in the real `live` / `code` URLs for each
project once they're deployed, and update `github` / `linkedin` links to your
actual profile URLs.

## Deploying to your existing GitHub Pages link

Your current site lives at `https://ashishdevlekar.github.io/My-Personal-Portfolio/`,
served from the `My-Personal-Portfolio` repo. To replace it with this new build
while keeping that exact same link:

1. Copy all these files into your existing `My-Personal-Portfolio` repo folder,
   overwriting the old HTML/CSS/JS files.
2. Run:
   ```
   npm install
   npm run deploy
   ```
   This builds the site and pushes the compiled output to a `gh-pages` branch.
3. In your GitHub repo settings → Pages, set the source branch to `gh-pages`
   (only needs to be done once — after that, `npm run deploy` handles everything).
4. Give it 1-2 minutes, then visit your same link — it'll show the new site.

Your resume, LinkedIn, and anywhere else you've shared the link don't need any
changes — the URL never changes, only what's served at it.
