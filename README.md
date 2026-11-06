# Passione Archives

A static, English-language Passione personnel archive and assignment-assessment prop.

## Project layout

Keep the site files at the repository root so GitHub Pages can serve the existing relative links without a build step:

```text
.
|-- index.html
|-- login.html
|-- mission.html
|-- chat.html
|-- auth.js
|-- assets/
    |-- passione-emblem.png
    |-- ...operative portraits
|-- .nojekyll
```

There are no package installs, build commands, or server-side dependencies. `index.html` is the site entry point. The other HTML pages and image assets are linked with relative paths.

## Publish with GitHub Pages

1. Create a GitHub repository and add these project files at its root.
2. Push the files to the repository's `main` branch.
3. In the repository, open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select **main** and **/(root)**, then save.
6. Wait for the Pages deployment to finish. Open the URL shown in **Settings → Pages**.

The local Python preview server is not required for GitHub Pages.

## Important demo limitations

- The login is client-side demo UI, not access control. Its example credentials are present in `auth.js` and are visible to anyone who can access the published site. GitHub Pages cannot keep these credentials private or protect the pages.
- Chat messages and request states are simulated in the browser session. They are not emailed, transmitted to an admin, approved, or dispatched.
- Assignment assessments and printable copies are props, not real contracts, invoices, or confirmations of service.
- Google Fonts are loaded from Google Fonts; the default system fonts are used if the external service is unavailable.
