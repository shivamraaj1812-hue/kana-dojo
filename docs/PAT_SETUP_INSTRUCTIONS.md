# Setting Up AUTOMATION_PR_TOKEN — PAT Setup Guide

This guide covers what the `AUTOMATION_PR_TOKEN` secret is, how to set it up if it doesn't already exist, and how to verify it's working.

---

## Why This Is Needed

GitHub Actions creates issues using `GITHUB_TOKEN` by default, which shows the author as **github-actions[bot]**. This is deprioritized by GitHub's recommendation algorithm. By using your own Personal Access Token (PAT), issues, comments, reactions, and git commits appear to come from your **real personal account**, which GitHub weights more heavily.

Backlog updates are committed via auto-created PRs that your account creates and merges automatically — giving your account real repo activity.

---

## Do You Already Have This Set Up?

Check if `AUTOMATION_PR_TOKEN` already exists at:  
**https://github.com/lingdojo/kana-dojo/settings/secrets/actions**

- **If it's there** → you're done! No action needed.
- **If it's not there** → follow Step 1 and Step 2 below.

---

## Step 1 — Create a Personal Access Token (Fine-Grained)

1. Go to: **https://github.com/settings/personal-access-tokens/new**  
   *(Or: Profile Photo → Settings → Developer settings → Personal access tokens → Fine-grained tokens → Generate new token)*

2. Fill in the form:
   - **Token name:** anything (e.g. `kana-dojo automation`)
   - **Expiration:** `No expiration` *(or 1 year — set a reminder if so)*
   - **Resource owner:** `lingdojo` *(your organization)*
   - **Repository access:** `Only select repositories` → choose **`kana-dojo`**

3. Under **Repository permissions**, set the following:
   | Permission | Level |
   |---|---|
   | Contents | **Read and write** |
   | Issues | **Read and write** |
   | Metadata | Read (auto-set) |
   | Pull requests | **Read and write** |

4. Click **Generate token** at the bottom.

5. **IMPORTANT: Copy the token immediately.** It looks like `github_pat_XXXXXXXX...`. You will NOT be able to see it again after leaving the page.

---

## Step 2 — Add the Secret to the Repository

1. Go to: **https://github.com/lingdojo/kana-dojo/settings/secrets/actions**

2. Click **New repository secret**.

3. Fill in:
   - **Name:** `AUTOMATION_PR_TOKEN`  ← must be exactly this
   - **Secret:** paste the token you copied in Step 1

4. Click **Add secret**.

---

## Verification

After deploying, verify it's working by:
1. Manually triggering the `hourly-community-issue` workflow in the **Actions** tab
2. Checking that the newly created issue shows **your username** as the author (not `github-actions[bot]`)
3. Checking that a PR titled `chore(automation): update community backlog` was created and auto-merged by your account

---

## Token Expiry Reminder

If you chose an expiration date, set a calendar reminder before it expires. When it expires, generate a new token and update the secret value at the same URL (the name stays the same).

