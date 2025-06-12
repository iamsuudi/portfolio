### 🛠 Manual Deployment to Render

A manual deployment is configured using GitHub Actions. See `.github/workflows/main.yaml`.

#### Workflow Summary:

```yaml
name: Render Deployment pipeline

on:
  push:
    branches:
      - main

jobs:
  build_and_deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: "20"
      - name: Install pnpm
        run: npm install -g pnpm
      - name: Install dependencies
        run: pnpm install
      - name: Lint
        run: pnpm lint
      - name: Build
        run: pnpm build
      - name: Copy standalone
        run: cp -r public .next/standalone/ && cp -r .next/static .next/standalone/.next/
      - name: Trigger Deployment
        run: curl https://api.render.com/deploy/${{ secrets.RENDER_SECRETS }}

```

#### Steps:

* Checkout the code
* Set up Node.js and `pnpm`
* Install dependencies
* Run linter and build
* Copy `public` and `.next/static` into `.next/standalone`
* Trigger deployment using Render deploy hook

> `RENDER_SECRETS` is set in GitHub repository secrets to enable the manual deployment trigger with hook.

Deployment link: [https://portfolio-rluh.onrender.com](https://portfolio-rluh.onrender.com)