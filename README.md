### 🛠 Manual Deployment to Render

A manual deployment is configured using GitHub Actions. See `.github/workflows/main.yaml`.

#### Workflow Summary:

```yaml
name: Render Deployment pipeline
on:
  push:
    branches:
      - main
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