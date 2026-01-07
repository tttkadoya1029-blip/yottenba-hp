# libera-hp

This is a static site. To publish and make it accessible via URL:

1. Initialize local git (already done by the assistant) and push to GitHub:

   git remote add origin https://github.com/<YOUR_USERNAME>/<REPO_NAME>.git
   git branch -M main
   git push -u origin main

2. Deploy on Vercel (choose one):
   - Connect the GitHub repository in the Vercel dashboard (recommended): create a new project, select the repo, and deploy.
   - Or use the Vercel CLI:

     npm i -g vercel
     vercel login
     vercel --prod

Notes:
- If you want me to run `gh repo create` or push to GitHub for you, provide GitHub authentication (or run the commands locally / in your terminal).
- I added `.gitignore` and `vercel.json` (optional) and initialized a local git commit.
