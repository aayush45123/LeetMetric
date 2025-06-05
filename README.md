# LeetMetric 🎯

**LeetMetric** is a minimal, responsive dashboard that displays a user's LeetCode statistics — including solved problems by difficulty and total submissions — using **pure HTML & CSS** for progress visuals and **JavaScript for fetching data**.

![LeetMetric Screenshot](./screenshot.png)

## 🧩 Features

- Fetches LeetCode stats for any user using the public [leetcode-stats-api](https://github.com/RealTimeWeb/leetcode-api).
- Visualizes problem-solving progress (Easy / Medium / Hard) using **pure CSS conic gradients** (no JS).
- Shows total submissions, and difficulty-wise submissions.
- Responsive UI with clean, card-based layout.

---

## 🚀 Demo

Try it live by opening `index.html` in your browser.

---

## 🛠️ Tech Stack

- ✅ HTML5
- ✅ CSS3 (with `conic-gradient`)
- ✅ JavaScript (Fetch API)
- ❌ No external libraries
- ❌ No framework dependency

---

## 📦 Folder Structure

```plaintext
.
├── index.html
├── style.css
├── script.js
└── assets/
    └── screenshot.png
```

---

## 📋 How to Use

1. **Clone this repo or download ZIP**
2. Open `index.html` in any browser
3. Enter a valid LeetCode username (e.g., `lovebabbar`) and hit **Search**
4. View your:
   - Solved Problems (Easy / Medium / Hard)
   - Total submissions by type

---

## 📌 Username Validation

Usernames must follow LeetCode's format:
- 3–20 characters
- Letters, numbers, `_`, or `-` only

---

## 🔧 API Used

We use:
```
https://leetcode-stats-api.herokuapp.com/<username>
```
This API returns user statistics in JSON format.

---

## ✅ Example JSON Response

```json
{
  "status": "success",
  "totalSolved": 203,
  "totalQuestions": 2726,
  "easySolved": 72,
  "totalEasy": 820,
  "mediumSolved": 99,
  "totalMedium": 1171,
  "hardSolved": 32,
  "totalHard": 732,
  "easySubmission": 184,
  "mediumSubmission": 393,
  "hardSubmission": 160,
  "totalSubmission": 737
}
```

---

## 💡 Credits

- [LeetCode Stats API](https://github.com/RealTimeWeb/leetcode-api)
- Designed by: [Your Name Here]

---

## 📷 Screenshot

Add your screenshot file as `screenshot.png` inside the repo and make sure to include this in your README for GitHub.

---

## 📄 License

MIT License. Free to use and modify.
