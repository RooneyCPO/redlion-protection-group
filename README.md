# RedLion Protection Group

Marketing site for RedLion Protection Group — close protection, residential and estate security, hotel and event security, and specialist care services.

London & international, 24/7.

## Stack

Single-file static site — no build step, no dependencies.

- `index.html` — full page (markup, styles, and a small bit of vanilla JS, all inlined)
- `assets/` — client photos, logo, favicon

## Run locally

Open `index.html` directly in a browser, or serve the folder:

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

## Contact form

The contact form posts to [FormSubmit.co](https://formsubmit.co). To switch the recipient, change the `action` URL on `<form id="enquiryForm">` in `index.html` and confirm the destination address from the first email FormSubmit sends.

## Deployment

Designed to drop onto Netlify (or any static host) — connect this repo and the default settings will deploy `index.html` directly.
