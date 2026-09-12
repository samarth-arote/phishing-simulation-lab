# PhishShield • Hands-on Phishing Defense Simulation Range

An interactive, responsive Cybersecurity Phishing Defense Training Simulator built with clean **HTML5, CSS3, and JavaScript**. Designed with a minimalist white aesthetic, colorful gradient accents, realistic interactive software mockups, and a realistic downloadable Certificate of Achievement.

Zero build dependencies, zero external npm packages—**100% ready to deploy to GitHub Pages**.

---

## 🎯 The 6 Hands-on Labs

1. **Phishing vs. Legitimate Email**:
   - Realistic email inbox UI simulating urgent payroll freezes, CEO wire fraud, GitHub alerts, and order confirmations.
2. **Identify Suspicious Sender**:
   - Inspect display name spoofing, cousin domains (`paypa1.com`), free webmail misuse (`@gmail.com` for corporate IT), and complex subdomain traps.
3. **Identify Suspicious URL**:
   - Interactive tokenized breakdown of URLs: Protocol (`http` vs `https`), Subdomains, Apex Domains, and Resource Paths.
4. **Hover-Over Links Inspector**:
   - Real-time simulated browser bottom-left status bar that unmasks hidden destination URLs when hovering over hyperlinks.
5. **Fake Login-Page Recognition**:
   - Simulated desktop browser window with address bar, SSL encryption status, brand assets, and credential trap fields.
6. **QR Phishing Simulation (Quishing)**:
   - Smartphone camera viewfinder simulation with an animated cyan laser scan line, vector SVG QR rendering, and decoded URL telemetry card.

---

## ⚡ Key Features

- **Trainee Name Onboarding**: Prompts user for their name upon first visit, with easy one-click editing in the top header.
- **Dedicated Lab Hub Home Page**:
  - Displays all 6 labs in cards with clear objectives and question counts.
  - **Completed Labs change color**: Marked with a distinct glowing emerald green background, checkmark badge, and replay option.
  - Overall progress bar tracking completion (e.g. `2/6 Completed (33%)`).
- **10 Randomized Questions per Lab**: Selected randomly using the Fisher-Yates algorithm from each lab's **40+ scenario question bank (252+ total questions)**.
- **Passing Benchmark Requirement (Minimum 8/10 Required)**:
  - Trainees must answer **at least 8 out of 10 questions correctly (80%+)** to mitigate breach conditions and mark a lab as completed.
  - Scoring less than 8/10 triggers a retry prompt with a breakdown of mistakes and does NOT mark the lab as completed or grant the certificate.
- **Answer Choice Shuffling**: Prevents memorization by dynamically randomizing option positions (A, B, C, D) and alternating decision buttons so the correct answer is never predictably first.
- **Official Institutional Certificate**:
  - Authoritative layout with official security accreditation tags (`OFFICIAL RANGE RECORD`, `CRYPTOGRAPHIC VERIFICATION`, `BENCHMARK v2.4`).
  - Replaced personal names with institutional evaluation authorities: *Cyber Defense Lab Evaluator* and *Simulation Verification Authority*.
  - Displays verified passing score (e.g. `SCORE: 9/10 (PASS CRITERIA: 8/10 MET)`).
  - Instant high-resolution **PNG download** rendered directly via HTML5 Canvas (1200x850 px).
- **Audio & Confetti Celebrations**: Built-in synthesized sound effects via Web Audio API and canvas fireworks.

---

## 🚀 How to Host on GitHub Pages

1. **Create a GitHub Repository**:
   - Name it e.g. `phish-shield` or `cyber-phishing-labs`.
2. **Push the Files**:
   - Push `index.html`, `style.css`, `data.js`, `app.js`, and `README.md` to your repository.
3. **Enable GitHub Pages**:
   - In your repository, go to **Settings** > **Pages**.
   - Under **Branch**, select `main` (or `master`) and folder `/ (root)`.
   - Click **Save**.
4. **Access Live**:
   - Your simulation lab will be live at `https://<your-username>.github.io/<repo-name>/`.
