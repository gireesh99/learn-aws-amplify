# Static React app for AWS Amplify Hosting

A simple React + Vite frontend. No backend and no `amplify.yml`.

## Run locally

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

Vite writes production files to `dist/`.

## Deploy with AWS Amplify Hosting

1. Push this repository to GitHub.
2. In the AWS Amplify Console choose **Create new app** and connect the repository.
3. Review the detected build settings. If necessary, set the build command to `npm run build` and output directory to `dist`. Use `npm ci` if a package lockfile has been generated and committed, otherwise `npm install`.
4. Deploy and open the `amplifyapp.com` URL.

No `amplify.yml`, backend, or AWS SDK setup is required.
