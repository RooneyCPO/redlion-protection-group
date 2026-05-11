# How to update the RedLion website

Quick guide to the content editor. No technical skill needed — if you can fill in a form, you can use this.

**Live site:** https://redlionpg.com
**Editor:** https://redlionpg.com/admin/

---

## 1. Logging in

Your editor login has been set up. Use the email address you nominated (typically `office@redlionpg.com`) and the password you chose during handover.

1. Open **https://redlionpg.com/admin/**
2. Enter your email and password
3. Click **Login**

You'll land directly in the editor.

### Changing your password

You can change your password at any time:

1. Log out of the editor (top-right of the editor → **Log out**, or just close the tab)
2. Go back to **https://redlionpg.com/admin/**
3. Click **"Forgot password?"** below the login form
4. Enter your email address
5. Check that inbox for a reset email from Netlify — subject usually *"Password recovery instructions"*. Check spam/promotions if it's not in the main inbox within a minute.
6. Click the link in the email → set a new password
7. Log back in with the new password

Use a strong, unique password and store it somewhere safe (password manager recommended). There's no way to recover a lost password except via the email reset above — anyone who can read the `office@redlionpg.com` inbox can reset it.

### Inviting another editor (or removing one)

If you ever want to add a second person who can edit the site (or remove someone), that's done through Netlify rather than the editor itself. Contact your developer — it's a 1-minute change.

### Getting back to the live site while editing

The editor has a small **← Back to site** button in the top-right corner. Click it any time to open the live website in the same tab — handy for previewing how your changes look.

---

## 2. The editor at a glance

After login you'll see a sidebar with five sections:

| Section | What it controls |
|---|---|
| **Contact details** | Office address, email, phone, opening hours |
| **Services** | The five service items in the Services section |
| **Departments** | Security, Hospitality, Care (add Training when ready) |
| **Team bios** | Every team member's profile |
| **Partners** | Partner companies and their logos |

Click any section, then any entry, to edit it. The fields are labelled clearly — no jargon.

---

## 3. How publishing works

Every change moves through a short approval flow so nothing goes live by accident.

1. **Save** the entry → it goes into **Drafts**
2. Drag the card to **In Review** → **Ready**
3. Click **Publish Now** → it goes live

For most edits you can simply **Save → Publish Now** and skip the middle steps. Live changes appear within **~60 seconds**.

---

## 4. Common tasks

### Adding a new team member

1. **Team bios** → click **New Team bio** (top right)
2. Fill in:
   - **Order** — their position in the list (pick the next free number)
   - **First name** and **Last name** *(the last name shows in italic on the site)*
   - **Mark** — short label, e.g. *Founder*, *Consultant*, *Operations*
   - **Role** — full title
   - **Credential chips** — 3–5 short phrases (one per chip)
   - **External link** *(optional)* — for example, a website URL with link text
   - **Bio** — write each paragraph on its own, with a blank line between paragraphs. To italicise a phrase mid-sentence, wrap it in asterisks: `*Force Necessary*`
3. **Save → Publish Now**
4. Wait ~60 seconds, refresh the public site — the new bio is live.

### Removing a team member

Open the bio → three-dot menu (top right) → **Delete entry** → **Publish**.

### Editing contact details

1. **Contact details → Office contact**
2. Change the field(s) — Save → Publish Now
3. The address, email, and phone number update **everywhere** on the site at once (contact section, footer, mobile menu, contact buttons). No need to edit them in multiple places.

### Adding a partner

1. **Partners → Partner list**
2. Scroll to the **Partners** list → click **Add Partners**
3. Fill in:
   - **Partner name** — shown if no logo is uploaded
   - **Tagline** *(optional)* — short sector descriptor, e.g. *Hospitality & private client*
   - **Italic accent in tagline** *(optional)* — the part of the tagline shown in italic
   - **Website URL** *(optional)*
   - **Logo image** *(optional)* — upload a PNG, transparent background works best, under 200 KB ideally
4. **Save → Publish Now**

### Adding the Training Department (when ready)

1. **Departments → Department cards**
2. Click **Add Departments**
3. Fill in: Roman numeral (e.g. `iv`), Title, Italic accent, Body, Pull quote, Photo
4. Save → Publish Now

---

## 5. Tips & things to know

- **Wait ~60 seconds** after publishing before checking the live site. The site needs to rebuild.
- **Images:** square or horizontal landscape look best in the design. Keep file sizes reasonable (under 1 MB) for fast page loads.
- **The footer auto-updates** from Contact details — no separate footer editor needed.
- **Italics in bios:** wrap the word in asterisks, e.g. `*Survival Centric*` becomes *Survival Centric* on the site.
- **Mistake?** Just edit again and republish. The site shows the latest published version.
- **Browser cache:** if you don't see your change after 60 seconds, hold **Shift** while clicking refresh (or press **Ctrl+Shift+R** / **Cmd+Shift+R**) to bypass the cache.

---

## 6. What you cannot edit (by design)

These were intentionally locked because they don't change often, to keep the editor focused:

- Hero section text (headline, tagline, subtitle)
- Mission, Vision, Why Choose Us
- Accreditations strip (SIA-Licensed, Vetted Operators, etc.)
- Page layout and design

If any of these need to change in future, it's a quick edit on the development side — just send a request.

---

## 7. Need help?

If something doesn't save, doesn't appear, or shows an error message, send a screenshot to your developer and they'll sort it out. Most issues are either: (a) hadn't waited the full 60 seconds, (b) browser cache (try a hard refresh), or (c) a missing required field highlighted in red on the form.
