# Nexusnett Website

Ultra-fast fiber internet service website built with Next.js.

## 🚀 Deployment to GitHub Pages

This website is configured to automatically deploy to GitHub Pages whenever you push to the main branch.

### Setup Instructions

1. **Create a GitHub repository** (if you haven't already):
   - Go to https://github.com/new
   - Name your repository (e.g., `nexusnett-website`)
   - Don't initialize with README (we already have one)

2. **Connect your local repository to GitHub**:
   ```bash
   git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
   ```

3. **Enable GitHub Pages**:
   - Go to your repository settings on GitHub
   - Navigate to "Pages" in the left sidebar
   - Under "Source", select "GitHub Actions"

4. **Push your code**:
   ```bash
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git push -u origin main
   ```

5. **Automatic Deployment**:
   - The GitHub Actions workflow will automatically build and deploy your site
   - Check the "Actions" tab in your repository to see the deployment progress
   - Your site will be live at: `https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/`

### Future Updates

After the initial setup, simply push changes to the main branch:

```bash
git add .
git commit -m "Your commit message"
git push
```

The site will automatically rebuild and redeploy within a few minutes.

## 📞 Contact

Phone: (888) 993-2795  
Email: support@nexusnett.com  
Website: nexusnett.com

## 🛠️ Development

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build
```

## 📝 License

© 2025 Nexusnett. All rights reserved.
