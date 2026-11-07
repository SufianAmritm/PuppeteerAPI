# PuppeteerAPI

Browser automation script built with **Puppeteer** for a client job portal.

It opens the site, logs in with credentials from environment variables, and goes to the jobs page, ready for the next automation steps.

## Tech
- Node.js
- Puppeteer
- dotenv

## Run

```bash
npm install
# set USER and PASS in a .env file
node src/index.js
```

> Note: this was a client prototype and covers the login and navigation flow only.
