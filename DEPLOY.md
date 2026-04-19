# Deployment Guide: The Path Ahead

This guide explains how to run your project locally and how to publish it to GitHub Pages.

---

## 1. Local Development (Running on your computer)

### Prerequisites
- **Node.js**: Install the latest LTS version from [nodejs.org](https://nodejs.org/).
- **Terminal/Command Prompt**: Basic familiarity with the command line.

### Steps
1. **Download the Code**: 
   - In Google AI Studio, click the **Settings** (gear icon) in the top right.
   - Select **Export to ZIP** to download the project folder.
2. **Extract & Open**: Unzip the folder and open it in your favorite code editor (like VS Code).
3. **Install Dependencies**:
   Open your terminal in the project root and run:
   ```bash
   npm install
   ```
4. **Run the App**:
   Start the development server:
   ```bash
   npm run dev
   ```
5. **View it**: Navigate to `http://localhost:3000` (or the URL shown in your terminal) in your browser.

---

## 2. Publishing to GitHub Pages

GitHub Pages is a free service to host static websites directly from a GitHub repository.

### Step 1: Create a GitHub Repository
1. Log in to [GitHub](https://github.com/).
2. Create a new **Public** repository (e.g., `the-path-ahead`).
3. **Do not** initialize with a README or .gitignore (the project already has them).

### Step 2: Push your code to GitHub
Run these commands in your local project folder:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin main
```

### Step 3: Configure Vite for Deployment
If your URL will be `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`, you must update `vite.config.ts`.
1. Open `vite.config.ts`.
2. Add a `base` property:
   ```javascript
   export default defineConfig({
     base: '/YOUR_REPO_NAME/', // e.g., '/the-path-ahead/'
     // ... total config ...
   })
   ```

### Step 4: Automate Deployment with GitHub Actions (Recommended)
This is the modern way to deploy. GitHub will automatically build and publish your site every time you push code.
1. In your repository on GitHub, go to **Settings** > **Pages**.
2. Under **Build and deployment** > **Source**, select **GitHub Actions**.
3. Use the **Static HTML** or **Vite** template if suggested, or create a file at `.github/workflows/deploy.yml`:
   ```yaml
   name: Deploy to GitHub Pages
   on:
     push:
       branches: ["main"]
   permissions:
     contents: read
     pages: write
     id-token: write
   jobs:
     deploy:
       environment:
         name: github-pages
         url: ${{ steps.deployment.outputs.page_url }}
       runs-on: ubuntu-latest
       steps:
         - name: Checkout
           uses: actions/checkout@v4
         - name: Set up Node
           uses: actions/setup-node@v4
           with:
             node-version: 20
             cache: 'npm'
         - name: Install dependencies
           run: npm install
         - name: Build
           run: npm run build
         - name: Setup Pages
           uses: actions/configure-pages@v4
         - name: Upload artifact
           uses: actions/upload-pages-artifact@v3
           with:
             path: './dist'
         - name: Deploy to GitHub Pages
           id: deployment
           uses: actions/deploy-pages@v4
   ```

### Step 5: Verify
Once the Action finishes, your site will be live at `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`.

---

## Tips
- **Gemini API Key**: If you use AI features, **do not** commit your API key to GitHub. Use GitHub Repository Secrets and environment variables.
- **Troubleshooting**: If images appear broken, ensure the `base` path in `vite.config.ts` matches your repository name exactly.
