# 🚀 Deployment Guide: Sakthiganesh K Data Analyst Portfolio

This guide details how to deploy your MERN portfolio online for free with 1-click on **Vercel** or **Render**, with automatic message forwarding to your Gmail inbox (**`sakthiganeshk27@gmail.com`**).

---

## 📧 Email Notification Setup (Zero Configuration)
Your portfolio is integrated with **FormSubmit AJAX direct delivery**.
- When anyone (recruiter, hiring manager, candidate) submits the contact form, an email is automatically dispatched to **`sakthiganeshk27@gmail.com`**.
- *First-time activation*: The very first time a message is submitted, FormSubmit sends a one-click confirmation email to `sakthiganeshk27@gmail.com` to verify you own the email address. Once clicked, all future recruiter inquiries land directly in your inbox instantly!
- Additionally, candidates have a direct **"Compose in Gmail"** button prefilled with your address.

---

## 🌐 Option 1: Deploy to Vercel (Recommended — Free & Fast)

1. Push your repository to your GitHub account (`https://github.com/SAKTHIGANESH2004/portfolio` or similar):
   ```bash
   git init
   git add .
   git commit -m "Deploy Sakthiganesh Data Analyst Portfolio"
   git branch -M main
   git remote add origin https://github.com/SAKTHIGANESH2004/<your-repo-name>.git
   git push -u origin main
   ```
2. Go to [vercel.com](https://vercel.com) and log in with GitHub.
3. Click **"Add New Project"** and select your portfolio repository.
4. The pre-configured `vercel.json` will automatically build both the React frontend and Express API routes.
5. Click **"Deploy"** — your portfolio will be live at `https://your-portfolio.vercel.app`!

---

## 🌐 Option 2: Deploy to Render (Full-Stack MERN Free Hosting)

1. Go to [render.com](https://render.com) and sign in with GitHub.
2. Click **"New Web Service"** and select your GitHub repository.
3. Configure the following build settings:
   - **Environment**: `Node`
   - **Build Command**: `npm run install:all && npm run build:client`
   - **Start Command**: `node server/server.js`
4. Click **"Create Web Service"**.
5. Render will build the client and host the entire full-stack app on a free live URL (e.g. `https://sakthiganesh-portfolio.onrender.com`).

---

## ⚡ Local Unified Execution

You can run the entire unified full-stack application on a single port:
```bash
# 1. Build the frontend
npm run build:client

# 2. Start the unified server
npm run start:server
```
Visit **`http://localhost:5000`** to see the full production build!
