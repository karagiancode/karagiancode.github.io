# Vasileios Karagiannidis — Personal Portfolio

Bilingual (Greek/English) personal portfolio & CV website.
Built with vanilla HTML, CSS, and JavaScript — no build step, no dependencies.

🌐 **Live site**: https://karagiancode.github.io (after deployment)

---

## ✨ Features

- 🇬🇷 / 🇬🇧 **Bilingual** — instant Greek/English language toggle
- 🎨 **Creative dark mode** — animated background, custom typography, micro-interactions
- 📱 **Fully responsive** — works on phones, tablets, and desktops
- ⚡ **Zero dependencies** — pure HTML/CSS/JS, blazing fast
- 📄 **CV download** — direct PDF download (both languages)
- ✉️ **Contact form** — Formspree integration (or email fallback)
- ♿ **Accessible** — keyboard navigation, reduced-motion support, semantic HTML

---

## 📁 Structure

```
.
├── index.html              # Main page
├── styles.css              # All styling
├── script.js               # Interactions, i18n, animations
├── cv/
│   ├── Karagiannidis_CV_EL.pdf
│   └── Karagiannidis_CV_EN.pdf
└── README.md
```

---

## 🚀 Deployment to GitHub Pages — Step by Step

### Option A — Via the GitHub website (easiest, no command line)

**1. Create the repository**

Go to https://github.com/new and create a new repository:

- **Repository name**: `karagiancode.github.io`
  > ⚠️ The name **must** be exactly `<your-username>.github.io` so that the site is published at the root URL `https://karagiancode.github.io`. Any other name will publish to `https://karagiancode.github.io/<repo-name>/`.
- **Visibility**: Public
- ✅ Check "Add a README file" (you can replace it later)
- Click **Create repository**

**2. Upload the files**

- On the new repo page, click **"Add file" → "Upload files"**
- Drag and drop **all** of these into the upload area:
  - `index.html`
  - `styles.css`
  - `script.js`
  - The entire `cv/` folder (both PDFs)
  - This `README.md` (optional)
- Scroll down and click **"Commit changes"**

**3. Enable GitHub Pages**

- Go to **Settings** (top of the repo) → **Pages** (left sidebar)
- Under **"Source"**, select **"Deploy from a branch"**
- Branch: **`main`** · Folder: **`/ (root)`** · Click **Save**
- Wait ~1–2 minutes for the first deployment

**4. Visit your site**

Your site is now live at: **https://karagiancode.github.io**

> 💡 The Pages settings panel shows the exact URL once deployment finishes.

---

### Option B — Via Git command line (for those who prefer terminal)

```bash
# 1. Initialize git in this folder
cd path/to/this/folder
git init
git branch -M main

# 2. Connect to your new GitHub repo (create it first on github.com)
git remote add origin https://github.com/karagiancode/karagiancode.github.io.git

# 3. Commit and push
git add .
git commit -m "Initial portfolio commit"
git push -u origin main
```

Then enable Pages in **Settings → Pages** as in Option A, step 3.

---

## 🛠️ Customization Required Before Going Live

Open the following files and make these changes:

### 1. **LinkedIn URL** (`index.html`)

Find every occurrence of `REPLACE-WITH-YOUR-LINKEDIN` and replace it with your actual LinkedIn handle. There are two places — hero socials and contact section.

```html
<!-- Before -->
<a href="https://www.linkedin.com/in/REPLACE-WITH-YOUR-LINKEDIN" ...>

<!-- After -->
<a href="https://www.linkedin.com/in/vasileios-karagiannidis-1234" ...>
```

### 2. **Contact form** — set up Formspree (free)

The contact form needs a backend to actually deliver messages. The simplest free option is **Formspree**:

1. Go to https://formspree.io and sign up with your email (free tier: 50 messages/month)
2. Create a new form — Formspree will give you a URL like:
   `https://formspree.io/f/abcd1234`
3. Open `index.html` and find the `<form>` tag:
   ```html
   <form ... action="https://formspree.io/f/YOUR_FORM_ID" ...>
   ```
4. Replace `YOUR_FORM_ID` with your actual form ID (the part after `/f/`).

> 💡 **If you skip this step**, the form will instead open the visitor's email client (mailto:) as a fallback — still functional, just less smooth.

### 3. **Update the CVs** (optional)

If you want to edit the CV PDFs, simply replace the files in the `cv/` folder. Keep the same filenames:
- `cv/Karagiannidis_CV_EL.pdf` — Greek version
- `cv/Karagiannidis_CV_EN.pdf` — English version

---

## 🧪 Local Preview

To test the site on your computer before deploying:

```bash
# If you have Python 3 installed:
python3 -m http.server 8000

# Or with Node.js:
npx serve .
```

Then open http://localhost:8000 in your browser.

> 📝 You can also just **double-click `index.html`** — but the contact form's `fetch()` may behave differently than on a real server.

---

## 🎨 Customizing the Design

The design uses CSS variables, so changing colors is trivial. Open `styles.css` and edit the `:root` block at the top:

```css
:root {
  --bg: #0A0A0F;        /* Background */
  --lime: #C5FF3F;      /* Primary accent */
  --magenta: #FF3E9D;   /* Secondary accent */
  --cyan: #00D9FF;      /* Tertiary accent */
  /* ... */
}
```

To change text content, edit:
- `index.html` for layout/structure
- `script.js` → `translations` object for translated strings (both EL and EN)

---

## 📜 License

Personal portfolio — feel free to fork as a starting point for your own.

— Vasileios Karagiannidis
