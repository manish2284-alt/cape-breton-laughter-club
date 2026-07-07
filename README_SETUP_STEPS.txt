Cape Breton Laughter Club - Free Registration System

WHAT IS INCLUDED
1. Registration website
2. Google Apps Script backend
3. Google Sheets database connection
4. Auto Member ID
5. Auto welcome email

SETUP STEPS

STEP 1: Create Google Sheet
- Go to Google Sheets
- Create a blank sheet
- Name it: Cape Breton Laughter Club Members

STEP 2: Open Apps Script
- In Google Sheet, click Extensions > Apps Script
- Delete old code
- Paste code from apps_script_code.txt
- Save

STEP 3: Deploy Web App
- Click Deploy > New deployment
- Select type: Web app
- Description: CBLC Registration Backend
- Execute as: Me
- Who has access: Anyone
- Click Deploy
- Authorize permissions
- Copy Web App URL

STEP 4: Connect website
- Open script.js
- Replace:
  PASTE_YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL_HERE
  with your Web App URL

STEP 5: Upload website
- Upload index.html, style.css, script.js to Netlify / GitHub Pages / your hosting.

IMPORTANT
- Keep Google Sheet private.
- Only publish the website link publicly.
- Test with your own email first.
