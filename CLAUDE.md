# Marat Gumarov — CV

Personal CV website. Static HTML/CSS/JS, deployed via GitHub Pages from the
`main` branch at https://maratgumarov.github.io/

## Files

- `index.html` — resume content
- `styles.css` — "quiet editorial" design (Fraunces + Hanken Grotesk, warm paper)
- `script.js` — light/dark theme toggle
- `Marat-Gumarov-CV.pdf` — downloadable PDF, linked from the header "PDF" button

## IMPORTANT — regenerate the PDF after ANY content or style change

`Marat-Gumarov-CV.pdf` is a committed static file. It does NOT update itself.
After editing `index.html` or `styles.css`, always regenerate it and commit it
**together** with the change — otherwise the downloaded PDF drifts from the
live site.

Regenerate with headless Chrome (run from the repo root):

```sh
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" \
  --headless --disable-gpu --no-pdf-header-footer \
  --print-to-pdf="Marat-Gumarov-CV.pdf" \
  "file://$(pwd)/index.html"
```

Then verify it is still **2 pages** — the `@media print` block in `styles.css`
is tuned for a 2-page layout; if a change pushes it onto a 3rd page, tighten
the print spacing there.
