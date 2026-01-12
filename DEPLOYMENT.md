# 💕 Valentine's Day Website Deployment Guide

## Step 1: Update Your GitHub Username

Open `package.json` and replace `YOUR_GITHUB_USERNAME` with your actual GitHub username in the homepage field:
```json
"homepage": "https://your-actual-username.github.io/valentine-site"
```

## Step 2: Add Your Photos (Optional but Recommended!)

Add your special photos to the `public/images/` folder. See `public/images/README.md` for the list of photos needed.

## Step 3: Create GitHub Repository

1. Go to https://github.com/new
2. Repository name: `valentine-site`
3. Set it to **Private** (since it's personal)
4. Do NOT initialize with README
5. Click "Create repository"

## Step 4: Deploy to GitHub Pages

Run these commands in your terminal:

```bash
# Add all files
git add .

# Commit your changes
git commit -m "Initial commit - Valentine's Day website"

# Add your GitHub repository as remote
# Replace YOUR_USERNAME with your actual GitHub username
git remote add origin https://github.com/YOUR_USERNAME/valentine-site.git

# Push to GitHub
git branch -M main
git push -u origin main

# Deploy to GitHub Pages
npm run deploy
```

## Step 5: Enable GitHub Pages (if not automatic)

1. Go to your repository on GitHub
2. Click "Settings" tab
3. Click "Pages" in the left sidebar
4. Under "Source", select branch: `gh-pages`
5. Click "Save"

## Step 6: Access Your Website

Your website will be live at:
```
https://YOUR_USERNAME.github.io/valentine-site
```

It may take 2-3 minutes for the first deployment.

## Making Updates Later

Whenever you want to update the site:

```bash
git add .
git commit -m "Updated content"
git push
npm run deploy
```

---

## 🎉 Share the link with her and make her day special! 💝
