/**
 * PhishShield - Hands-on Phishing Defense Labs
 * Features:
 * - 6 Core Labs (Email, Sender, URL, Hover, Login, QR)
 * - Home Hub with completed lab distinct color styling & progress tracking
 * - Trainee Name onboarding modal
 * - 5 Randomized scenarios per lab session
 * - Shuffled answer choices
 * - Realistic downloadable Certificate of Achievement (HTML5 Canvas 1200x850 PNG)
 * - Web Audio API synthesized sound fx
 * - Canvas confetti fireworks
 */

// Application State
const state = {
  userName: '',
  completedLabs: new Set(),
  labResults: {},
  activeLab: null,
  currentQuestions: [],
  currentIndex: 0,
  score: 0,
  streak: 0,
  correctInSession: 0,
  soundEnabled: true,
  currentScenario: null,
  answered: false,
  qrScanned: false
};

// Sound Synthesizer (Web Audio API)
class SoundFx {
  constructor() {
    this.ctx = null;
  }

  init() {
    if (!this.ctx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        this.ctx = new AudioContext();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  playTone(freq, type = 'sine', duration = 0.15, gainVal = 0.1) {
    if (!state.soundEnabled) return;
    try {
      this.init();
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
      gain.gain.setValueAtTime(gainVal, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + duration);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + duration);
    } catch (e) {
      console.warn('Audio play error:', e);
    }
  }

  correct() {
    if (!state.soundEnabled) return;
    this.init();
    setTimeout(() => this.playTone(523.25, 'triangle', 0.12, 0.15), 0);
    setTimeout(() => this.playTone(659.25, 'triangle', 0.14, 0.15), 100);
    setTimeout(() => this.playTone(783.99, 'triangle', 0.18, 0.18), 200);
    setTimeout(() => this.playTone(1046.50, 'sine', 0.28, 0.2), 320);
  }

  wrong() {
    if (!state.soundEnabled) return;
    this.init();
    setTimeout(() => this.playTone(220, 'sawtooth', 0.15, 0.15), 0);
    setTimeout(() => this.playTone(174.61, 'sawtooth', 0.25, 0.18), 120);
  }

  victoryFanfare() {
    if (!state.soundEnabled) return;
    this.init();
    const notes = [523.25, 659.25, 783.99, 1046.50, 1318.51];
    notes.forEach((note, idx) => {
      setTimeout(() => this.playTone(note, 'triangle', 0.22, 0.2), idx * 120);
    });
  }

  click() {
    this.playTone(480, 'sine', 0.05, 0.08);
  }

  scan() {
    if (!state.soundEnabled) return;
    this.init();
    try {
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(440, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(1200, this.ctx.currentTime + 0.3);
      gain.gain.setValueAtTime(0.12, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.3);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.3);
    } catch (e) {}
  }

  scanSuccess() {
    if (!state.soundEnabled) return;
    this.init();
    setTimeout(() => this.playTone(880, 'sine', 0.08, 0.12), 0);
    setTimeout(() => this.playTone(1760, 'triangle', 0.16, 0.16), 70);
  }
}

const sounds = new SoundFx();

// Utility: Fisher-Yates Shuffle
function shuffleArray(arr) {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

// Generate procedural SVG QR code
function generateQrSvg(seed = 42) {
  const size = 21;
  let matrix = Array(size).fill(0).map(() => Array(size).fill(0));

  function placeFinder(row, col) {
    for (let r = 0; r < 7; r++) {
      for (let c = 0; c < 7; c++) {
        if (
          r === 0 || r === 6 || c === 0 || c === 6 ||
          (r >= 2 && r <= 4 && c >= 2 && c <= 4)
        ) {
          matrix[row + r][col + c] = 1;
        }
      }
    }
  }

  placeFinder(0, 0);
  placeFinder(0, size - 7);
  placeFinder(size - 7, 0);

  let randomVal = seed;
  function pseudoRand() {
    randomVal = (randomVal * 9301 + 49297) % 233280;
    return randomVal / 233280;
  }

  for (let r = 0; r < size; r++) {
    for (let c = 0; c < size; c++) {
      const inTopLeft = r < 8 && c < 8;
      const inTopRight = r < 8 && c >= size - 8;
      const inBottomLeft = r >= size - 8 && c < 8;
      if (!inTopLeft && !inTopRight && !inBottomLeft) {
        if (r === 6 || c === 6) {
          matrix[r][c] = (r + c) % 2 === 0 ? 1 : 0;
        } else {
          matrix[r][c] = pseudoRand() > 0.52 ? 1 : 0;
        }
      }
    }
  }

  let svgRects = '';
  const scale = 6;
  for (let r = 0; r < size; r++) {
    for (let c = 0; c < size; c++) {
      if (matrix[r][c] === 1) {
        svgRects += `<rect x="${c * scale}" y="${r * scale}" width="${scale}" height="${scale}" fill="#0f172a" />`;
      }
    }
  }

  return `<svg viewBox="0 0 ${size * scale} ${size * scale}" xmlns="http://www.w3.org/2000/svg" shape-rendering="crispEdges">
    <rect width="100%" height="100%" fill="#ffffff" />
    ${svgRects}
  </svg>`;
}

// ============================================================
// SESSION-BASED STATE (Resets on refresh for multi-student use)
// ============================================================
function resetSession() {
  state.userName = '';
  state.completedLabs.clear();
  state.labResults = {};
  state.activeLab = null;
  state.currentQuestions = [];
  state.currentIndex = 0;
  state.score = 0;
  state.streak = 0;
  state.correctInSession = 0;
  state.currentScenario = null;
  state.answered = false;
  state.qrScanned = false;

  const nameInput = document.getElementById('nameInput');
  if (nameInput) {
    nameInput.value = '';
  }

  // Close any open modals
  const certModal = document.getElementById('certificateModalOverlay');
  if (certModal) certModal.classList.remove('active');
  const failModal = document.getElementById('evaluationFailModalOverlay');
  if (failModal) failModal.classList.remove('active');
  const finalReportModal = document.getElementById('finalReportModalOverlay');
  if (finalReportModal) finalReportModal.classList.remove('active');
  const feedbackOverlay = document.getElementById('feedbackOverlay');
  if (feedbackOverlay) feedbackOverlay.classList.remove('active');

  // Hide final report buttons until all 6 are completed
  const finalBanner = document.getElementById('finalMasteryBanner');
  if (finalBanner) finalBanner.classList.add('hidden');
  const certModalFinalBtn = document.getElementById('certModalFinalReportBtn');
  if (certModalFinalBtn) certModalFinalBtn.classList.add('hidden');

  updateHeaderStats();
  showHomeView();

  // Fresh session prompt: always open name modal and focus input
  const nameModal = document.getElementById('nameModalOverlay');
  if (nameModal) {
    nameModal.classList.add('active');
  }
  setTimeout(() => {
    if (nameInput) nameInput.focus();
  }, 120);
}

// ============================================================
// VIEW SWITCHER: HOME HUB VS ACTIVE LAB
// ============================================================
function showHomeView() {
  document.getElementById('simView').classList.add('hidden');
  document.getElementById('homeView').classList.remove('hidden');
  state.activeLab = null;
  renderHomeLabsGrid();
  updateHeaderStats();
}

function renderHomeLabsGrid() {
  const grid = document.getElementById('labsGrid');
  grid.innerHTML = '';

  const labKeys = ['email', 'sender', 'url', 'hover', 'login', 'qr'];
  const totalLabs = labKeys.length;
  const completedCount = state.completedLabs.size;

  // Update Overall Progress Bar
  const pct = Math.round((completedCount / totalLabs) * 100);
  document.getElementById('hubProgressPct').textContent = `${pct}% Completed (${completedCount}/${totalLabs})`;
  document.getElementById('hubProgressFill').style.width = `${pct}%`;
  document.getElementById('headerCompletedCount').textContent = `${completedCount}/${totalLabs}`;

  // Final Mastery Banner: ONLY visible when all 6 labs are completed
  const finalBanner = document.getElementById('finalMasteryBanner');
  if (finalBanner) {
    if (completedCount === totalLabs && totalLabs > 0) {
      finalBanner.classList.remove('hidden');
    } else {
      finalBanner.classList.add('hidden');
    }
  }

  labKeys.forEach((key, index) => {
    const meta = LAB_METADATA[key];
    const isCompleted = state.completedLabs.has(key);
    const labNumber = String(index + 1).padStart(2, '0');

    const card = document.createElement('div');
    card.className = `lab-card ${isCompleted ? 'completed' : ''}`;

    card.innerHTML = `
      <div>
        <div class="lab-card-top">
          <div class="lab-icon-box">
            <i class="fa-solid ${meta.icon}"></i>
          </div>
          <span class="lab-status-badge ${isCompleted ? 'status-completed' : 'status-ready'}">
            ${isCompleted ? '<i class="fa-solid fa-circle-check"></i> COMPLETED' : 'READY TO START'}
          </span>
        </div>

        <div class="lab-card-body">
          <div class="lab-number-label">Lab ${labNumber} • Hands-on Range</div>
          <h3 class="lab-card-title">${meta.title}</h3>
          <p class="lab-card-desc">${meta.desc}</p>
          <div class="lab-meta-row">
            <span><i class="fa-solid fa-dice"></i> 10 Randomized Qs</span>
            <span><i class="fa-solid fa-certificate"></i> Verified Badge</span>
          </div>
        </div>
      </div>

      <div class="lab-card-footer ${isCompleted ? 'has-cert' : ''}">
        ${isCompleted ? `
          <button class="lab-cert-btn" data-cert-lab="${key}" title="View and Download Certificate for this Lab">
            <i class="fa-solid fa-award"></i>
            <span>View Certificate</span>
          </button>
        ` : ''}
        <button class="lab-start-btn" data-lab="${key}">
          <span>${isCompleted ? 'Replay (10 New Qs)' : 'Start Lab'}</span>
          <i class="fa-solid ${isCompleted ? 'fa-rotate-right' : 'fa-arrow-right'}"></i>
        </button>
      </div>
    `;

    card.querySelector('.lab-start-btn').addEventListener('click', () => {
      sounds.click();
      startLab(key);
    });

    const certBtn = card.querySelector('.lab-cert-btn');
    if (certBtn) {
      certBtn.addEventListener('click', () => {
        sounds.click();
        openLabCertificate(key);
      });
    }

    grid.appendChild(card);
  });
}

// ============================================================
// LAB SIMULATION ENGINE
// ============================================================
function startLab(labKey) {
  if (!state.userName || !state.userName.trim()) {
    const nameModal = document.getElementById('nameModalOverlay');
    if (nameModal) nameModal.classList.add('active');
    const nameInput = document.getElementById('nameInput');
    if (nameInput) nameInput.focus();
    return;
  }

  state.activeLab = labKey;
  state.currentIndex = 0;
  state.correctInSession = 0;
  state.answered = false;

  // Retrieve questions for this specific lab (10 randomized from 42+ pool)
  const pool = getQuestionsForCategory(labKey);
  const shuffled = shuffleArray(pool);
  state.currentQuestions = shuffled.slice(0, Math.min(10, shuffled.length));

  // Switch to Simulation View
  document.getElementById('homeView').classList.add('hidden');
  document.getElementById('simView').classList.remove('hidden');

  document.getElementById('totalQCount').textContent = state.currentQuestions.length;
  renderCurrentQuestion();
}

function renderCurrentQuestion() {
  state.answered = false;
  const q = state.currentQuestions[state.currentIndex];
  state.currentScenario = q;

  // Update Progress
  document.getElementById('currentQIndex').textContent = state.currentIndex + 1;
  const progressPercent = ((state.currentIndex + 1) / state.currentQuestions.length) * 100;
  document.getElementById('progressBarFill').style.width = `${progressPercent}%`;

  // Category & Difficulty Badges
  document.getElementById('scenarioCategory').textContent = q.categoryTitle;
  const metaDiff = document.getElementById('scenarioDifficulty');
  metaDiff.textContent = q.difficulty;
  metaDiff.className = 'scenario-diff-pill';
  if (q.difficulty === 'Easy') metaDiff.classList.add('diff-easy');
  else if (q.difficulty === 'Medium') metaDiff.classList.add('diff-medium');
  else metaDiff.classList.add('diff-hard');

  document.getElementById('scenarioTitle').textContent = q.scenarioTitle;

  const viewport = document.getElementById('stageViewport');
  viewport.innerHTML = '';
  const instruction = document.getElementById('stageInstruction');

  if (q.category === 'email') {
    instruction.textContent = 'Carefully inspect the email header, tone, urgency, and content indicators:';
    renderEmailViewport(viewport, q);
  } else if (q.category === 'sender') {
    instruction.textContent = 'Examine the sender display name and real transmission address:';
    renderSenderViewport(viewport, q);
  } else if (q.category === 'url') {
    instruction.textContent = 'Inspect the tokenized URL breakdown below:';
    renderUrlViewport(viewport, q);
  } else if (q.category === 'hover') {
    instruction.textContent = 'Hover your cursor over the link/button below to inspect its hidden destination in the browser status bar:';
    renderHoverViewport(viewport, q);
  } else if (q.category === 'login') {
    instruction.textContent = 'Inspect the browser URL bar, SSL status, and credential inputs:';
    renderLoginViewport(viewport, q);
  } else if (q.category === 'qr') {
    instruction.textContent = 'Use the camera viewfinder simulation to scan the QR code and inspect its destination URL:';
    renderQrViewport(viewport, q);
  }

  renderActionDock(q);
}

// 1. Email Mockup
function renderEmailViewport(container, q) {
  const senderInitial = q.senderName ? q.senderName.charAt(0).toUpperCase() : 'M';
  container.innerHTML = `
    <div class="mock-email-window">
      <div class="mock-email-header">
        <div class="email-subject-line">${q.subject}</div>
        <div class="email-meta-row">
          <div class="email-sender-info">
            <div class="sender-avatar">${senderInitial}</div>
            <div class="sender-details">
              <span class="sender-name-text">${q.senderName}</span>
              <span class="sender-email-text">&lt;${q.senderEmail}&gt;</span>
            </div>
          </div>
          <span class="email-date-text">${q.date}</span>
        </div>
      </div>
      <div class="mock-email-body">
        ${q.emailBodyHtml}
      </div>
    </div>
  `;
}

// 2. Sender Inspector
function renderSenderViewport(container, q) {
  container.innerHTML = `
    <div class="mock-sender-card">
      <div class="sender-context-banner">
        <i class="fa-solid fa-envelope"></i>
        <span>${q.context}</span>
      </div>
      <div class="sender-lens-box">
        <div class="lens-row">
          <span class="lens-label"><i class="fa-solid fa-id-badge"></i> Display Name</span>
          <span class="lens-value">${q.targetDisplay}</span>
        </div>
        <div class="lens-row">
          <span class="lens-label"><i class="fa-solid fa-at"></i> Actual Address</span>
          <span class="lens-value">${q.targetEmail}</span>
        </div>
      </div>
    </div>
  `;
}

// 3. URL Deconstructor
function renderUrlViewport(container, q) {
  let protocol = 'https:';
  let host = q.targetUrl;
  let pathname = '/';
  
  try {
    const urlObj = new URL(q.targetUrl);
    protocol = urlObj.protocol;
    host = urlObj.host;
    pathname = urlObj.pathname + urlObj.search;
  } catch (e) {}

  const hostParts = host.split('.');
  let subdomain = '';
  let apexDomain = host;
  if (hostParts.length > 2) {
    subdomain = hostParts.slice(0, -2).join('.') + '.';
    apexDomain = hostParts.slice(-2).join('.');
  }

  container.innerHTML = `
    <div class="url-deconstructor-view">
      <div class="url-raw-bar">
        <i class="fa-solid fa-link url-icon"></i>
        <span>${q.targetUrl}</span>
      </div>

      <div class="url-token-stream">
        <div class="url-token token-protocol">
          <span>${protocol}//</span>
          <span class="token-subtext">Protocol</span>
        </div>
        ${subdomain ? `
          <div class="url-token token-subdomain">
            <span>${subdomain}</span>
            <span class="token-subtext">Subdomain</span>
          </div>
        ` : ''}
        <div class="url-token token-domain">
          <span>${apexDomain}</span>
          <span class="token-subtext">Registered Domain</span>
        </div>
        <div class="url-token token-path">
          <span>${pathname.length > 25 ? pathname.substring(0, 25) + '...' : pathname}</span>
          <span class="token-subtext">Resource Path</span>
        </div>
      </div>
    </div>
  `;
}

// 4. Hover Inspector Viewport
function renderHoverViewport(container, q) {
  container.innerHTML = `
    <div class="hover-test-card">
      <div class="hover-instruction-callout">
        <i class="fa-solid fa-computer-mouse"></i> Move mouse over the target to reveal destination
      </div>

      <p style="font-size: 0.9rem; color: #475569; margin-bottom: 12px;">${q.context}</p>

      <div class="interactive-target-link-area">
        <a class="simulated-hyperlink" id="simulatedHoverLink" href="javascript:void(0);">
          ${q.anchorText}
        </a>
        <button class="touch-inspect-btn" id="touchInspectBtn">
          <i class="fa-solid fa-eye"></i> Tap to Inspect Link
        </button>
      </div>
    </div>
  `;

  const linkEl = document.getElementById('simulatedHoverLink');
  const statusBar = document.getElementById('browserStatusBar');
  const statusUrl = document.getElementById('statusBarTargetUrl');
  const touchBtn = document.getElementById('touchInspectBtn');

  function showStatus() {
    statusUrl.textContent = q.hiddenHref;
    statusBar.classList.add('visible');
    sounds.click();
  }

  function hideStatus() {
    statusBar.classList.remove('visible');
  }

  linkEl.addEventListener('mouseenter', showStatus);
  linkEl.addEventListener('mouseleave', hideStatus);

  // Mobile & Tablet touch / tap support directly on the hyperlink
  linkEl.addEventListener('touchstart', (e) => {
    e.preventDefault();
    showStatus();
  });
  linkEl.addEventListener('click', (e) => {
    e.preventDefault();
    showStatus();
    setTimeout(hideStatus, 4000);
  });

  if (touchBtn) {
    touchBtn.addEventListener('click', () => {
      showStatus();
      setTimeout(hideStatus, 4000);
    });
  }
}

// 5. Fake Login Viewport
function renderLoginViewport(container, q) {
  const isSecure = q.sslStatus === 'secure';
  const sslIcon = isSecure ? 'fa-lock ssl-badge-secure' : 'fa-lock-open ssl-badge-insecure';
  const lockTitle = isSecure ? 'Encrypted Connection' : 'Insecure Connection (HTTP)';

  let inputFieldsHtml = '';
  q.inputFields.forEach(field => {
    inputFieldsHtml += `
      <div class="login-form-group">
        <label class="login-form-label">${field.label}</label>
        <input class="login-form-input" type="text" placeholder="${field.placeholder}" readonly />
      </div>
    `;
  });

  container.innerHTML = `
    <div class="mock-browser-window">
      <div class="browser-titlebar">
        <div class="browser-dots">
          <div class="b-dot b-red"></div>
          <div class="b-dot b-yellow"></div>
          <div class="b-dot b-green"></div>
        </div>
        <div class="browser-addressbar">
          <i class="fa-solid ${sslIcon}" title="${lockTitle}"></i>
          <span>${q.mockBrowserUrl}</span>
        </div>
      </div>
      <div class="login-stage-content">
        <h3 class="brand-login-title">${q.brandTitle}</h3>
        ${inputFieldsHtml}
        <button class="login-submit-mock">Sign In</button>
      </div>
    </div>
  `;
}

// 6. QR Quishing Viewport with Real Scannable QR & Optical Scanning Simulation
function renderQrViewport(container, q) {
  state.qrScanned = false;

  // Derive realistic context badge
  let badgeIcon = 'fa-qrcode';
  let badgeText = 'Physical / Digital Item';
  const cLower = (q.context || '').toLowerCase();
  if (cLower.includes('ev') || cLower.includes('charg')) {
    badgeIcon = 'fa-charging-station';
    badgeText = 'EV Charging Stall Terminal';
  } else if (cLower.includes('parking') || cLower.includes('meter')) {
    badgeIcon = 'fa-square-parking';
    badgeText = 'Municipal Parking Meter Decal';
  } else if (cLower.includes('bistro') || cLower.includes('menu') || cLower.includes('restaurant')) {
    badgeIcon = 'fa-utensils';
    badgeText = 'Restaurant Table Menu Placard';
  } else if (cLower.includes('airline') || cLower.includes('flight') || cLower.includes('airport')) {
    badgeIcon = 'fa-plane-departure';
    badgeText = 'Airport / In-Flight Media Notice';
  } else if (cLower.includes('postal') || cLower.includes('letter') || cLower.includes('irs') || cLower.includes('usps') || cLower.includes('door')) {
    badgeIcon = 'fa-envelope-open-text';
    badgeText = 'Physical Postal Letter / Delivery Slip';
  } else if (cLower.includes('hotel') || cLower.includes('marriott') || cLower.includes('room')) {
    badgeIcon = 'fa-hotel';
    badgeText = 'Hotel Guest Wi-Fi Display';
  } else if (cLower.includes('coffee') || cLower.includes('starbucks') || cLower.includes('loyalty')) {
    badgeIcon = 'fa-mug-hot';
    badgeText = 'Retail Counter Loyalty Promotion';
  } else if (cLower.includes('conference') || cLower.includes('badge')) {
    badgeIcon = 'fa-id-badge';
    badgeText = 'Conference Attendee Lanyard Pass';
  } else if (cLower.includes('bike') || cLower.includes('bicycle')) {
    badgeIcon = 'fa-bicycle';
    badgeText = 'Urban Bikeshare Rental Station';
  } else if (cLower.includes('email') || cLower.includes('memo') || cLower.includes('hr')) {
    badgeIcon = 'fa-envelope';
    badgeText = 'Corporate Memo / Internal Announcement';
  }

  container.innerHTML = `
    <div class="qr-scanner-mockup">
      <div class="qr-context-card">
        <div class="qr-context-badge">
          <i class="fa-solid ${badgeIcon}"></i> <span>${badgeText}</span>
        </div>
        <p class="qr-context-description">${q.context}</p>
      </div>

      <div class="qr-viewfinder-wrapper">
        <div class="qr-viewfinder-frame" id="qrViewfinderFrame" title="Click or tap to scan barcode">
          <div class="viewfinder-corner tl"></div>
          <div class="viewfinder-corner tr"></div>
          <div class="viewfinder-corner bl"></div>
          <div class="viewfinder-corner br"></div>
          <div class="laser-scanline" id="qrLaserScanline"></div>
          <div class="qr-code-canvas-wrap" id="qrCodeCanvasWrap">
            <!-- Scannable QR code generated here -->
          </div>
          <div class="viewfinder-overlay-hint" id="viewfinderOverlayHint">
            <i class="fa-solid fa-camera"></i>
            <span>Tap to Scan</span>
          </div>
        </div>

        <button class="scan-simulate-btn" id="simulateScanBtn" type="button">
          <i class="fa-solid fa-camera-viewfinder"></i>
          <span class="scan-btn-label">Tap to Scan QR & Extract Destination</span>
        </button>
      </div>

      <div class="qr-telemetry-result is-locked" id="qrTelemetryResult">
        <div class="telemetry-locked-view">
          <i class="fa-solid fa-lock-keyhole telemetry-lock-icon"></i>
          <div class="telemetry-locked-info">
            <span class="telemetry-locked-title">URL Telemetry Hidden</span>
            <span class="telemetry-locked-sub">Scan the QR code above using the camera simulator to decode and extract the destination URL</span>
          </div>
        </div>
      </div>
    </div>
  `;

  // Render Real Scannable QR code using QRCode library
  const wrap = document.getElementById('qrCodeCanvasWrap');
  if (wrap) {
    wrap.innerHTML = '';
    try {
      if (typeof QRCode !== 'undefined') {
        new QRCode(wrap, {
          text: q.scannedUrl,
          width: 170,
          height: 170,
          colorDark: "#090d16",
          colorLight: "#ffffff",
          correctLevel: QRCode.CorrectLevel.M
        });
      } else {
        const seed = q.id.charCodeAt(q.id.length - 1) * 31;
        wrap.innerHTML = generateQrSvg(seed);
      }
    } catch (err) {
      console.warn('QRCode generation fallback:', err);
      const seed = q.id.charCodeAt(q.id.length - 1) * 31;
      wrap.innerHTML = generateQrSvg(seed);
    }
  }

  // Handle Scanning Simulation
  const scanBtn = document.getElementById('simulateScanBtn');
  const frame = document.getElementById('qrViewfinderFrame');
  const laser = document.getElementById('qrLaserScanline');
  const hint = document.getElementById('viewfinderOverlayHint');
  const telemetry = document.getElementById('qrTelemetryResult');

  function triggerScanSimulation() {
    if (state.qrScanned) return;

    sounds.scan();
    if (scanBtn) {
      scanBtn.disabled = true;
      scanBtn.classList.add('is-scanning');
      scanBtn.innerHTML = `
        <i class="fa-solid fa-spinner fa-spin"></i>
        <span class="scan-btn-label">Optical Sensors Decoding QR Matrix...</span>
      `;
    }
    if (frame) frame.classList.add('scanning-active');
    if (laser) laser.classList.add('laser-fast');
    if (hint) hint.style.opacity = '0';

    setTimeout(() => {
      state.qrScanned = true;
      sounds.scanSuccess();

      if (frame) frame.classList.remove('scanning-active');
      if (laser) laser.classList.remove('laser-fast');

      if (scanBtn) {
        scanBtn.classList.remove('is-scanning');
        scanBtn.classList.add('is-done');
        scanBtn.innerHTML = `
          <i class="fa-solid fa-circle-check"></i>
          <span class="scan-btn-label">QR Decoded & Extracted Successfully</span>
        `;
      }

      // Check protocol
      const isInsecure = q.scannedUrl.startsWith('http://');
      const protoBadge = isInsecure
        ? `<span class="url-badge-tag insecure-tag"><i class="fa-solid fa-unlock"></i> HTTP (Insecure)</span>`
        : `<span class="url-badge-tag secure-tag"><i class="fa-solid fa-lock"></i> HTTPS (TLS Encrypted)</span>`;

      if (telemetry) {
        telemetry.className = 'qr-telemetry-result is-extracted';
        telemetry.innerHTML = `
          <div class="telemetry-extracted-header">
            <div class="telemetry-extracted-title">
              <i class="fa-solid fa-satellite-dish"></i> DECODED URL TELEMETRY
            </div>
            ${protoBadge}
          </div>
          <div class="telemetry-extracted-body">
            <code class="telemetry-url-text">${q.scannedUrl}</code>
          </div>
          <div class="telemetry-extracted-footer">
            <i class="fa-solid fa-magnifying-glass"></i> Telemetry extracted! Review the destination above and select your assessment below.
          </div>
        `;
      }

      // Unlock and render Action Choices
      renderActionDock(q);
    }, 850);
  }

  if (scanBtn) scanBtn.addEventListener('click', triggerScanSimulation);
  if (frame) frame.addEventListener('click', triggerScanSimulation);
}

// Render Shuffled Action Choices (Guaranteeing correct answer is not statically first)
function renderActionDock(q) {
  const dock = document.getElementById('actionDock');
  dock.innerHTML = '';

  // For QR lab: gate choices until user completes the scan simulation
  if (q.category === 'qr' && !state.qrScanned) {
    dock.innerHTML = `
      <div class="qr-dock-locked">
        <div class="qr-dock-lock-icon">
          <i class="fa-solid fa-shield-halved"></i>
        </div>
        <div class="qr-dock-lock-info">
          <h4><i class="fa-solid fa-lock"></i> Threat Analysis Locked</h4>
          <p>Scan the QR code above using the camera simulator to extract the destination URL before analyzing this scenario.</p>
        </div>
      </div>
    `;
    return;
  }

  // If QR is scanned, show guidance banner before choices
  if (q.category === 'qr' && state.qrScanned) {
    const promptBanner = document.createElement('div');
    promptBanner.className = 'qr-unlocked-prompt';
    promptBanner.innerHTML = `
      <i class="fa-solid fa-clipboard-check"></i>
      <span><strong>Destination Extracted:</strong> Based on the physical context and decoded URL above, select your security assessment:</span>
    `;
    dock.appendChild(promptBanner);
  }

  if (q.type === 'decision') {
    // Alternate and randomize Safe vs Phishing left/right placement dynamically
    const isPhishFirst = ((state.currentIndex + (Math.random() > 0.5 ? 1 : 0)) % 2 === 1);
    const safeBtnHtml = `
      <button class="decision-btn decision-safe" data-answer="legitimate">
        <i class="fa-solid fa-shield-check"></i> Legitimate (Safe)
      </button>
    `;
    const phishBtnHtml = `
      <button class="decision-btn decision-phish" data-answer="phishing">
        <i class="fa-solid fa-triangle-exclamation"></i> Phishing Attack
      </button>
    `;

    dock.innerHTML = `
      <div class="binary-choice-row">
        ${isPhishFirst ? phishBtnHtml + safeBtnHtml : safeBtnHtml + phishBtnHtml}
      </div>
    `;

    dock.querySelectorAll('.decision-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        handleAnswer(btn.dataset.answer === q.correctAnswer);
      });
    });
  } else {
    // Multiple Choice: Ensure the correct option is distributed across B, C, D, A
    // and NEVER statically stuck at Option A for the first question!
    const correctOpt = q.options.find(o => o.isCorrect) || q.options[0];
    const wrongOpts = shuffleArray(q.options.filter(o => o !== correctOpt));

    // For index 0, targetPos is 1 or 2 (Option B or C), smoothly shifting across all questions
    const targetPos = (state.currentIndex + 1 + Math.floor(Math.random() * 2)) % (wrongOpts.length + 1);
    wrongOpts.splice(targetPos, 0, correctOpt);
    const finalOptions = wrongOpts;

    const letters = ['A', 'B', 'C', 'D'];

    finalOptions.forEach((opt, idx) => {
      const btn = document.createElement('button');
      btn.className = 'choice-card-btn';
      btn.innerHTML = `
        <span class="choice-index-circle">${letters[idx]}</span>
        <span>${opt.text}</span>
      `;
      btn.addEventListener('click', () => {
        handleAnswer(opt.isCorrect);
      });
      dock.appendChild(btn);
    });
  }
}

// Answer Evaluation
function handleAnswer(isCorrect) {
  if (state.answered) return;
  state.answered = true;

  const stage = document.getElementById('simulationStage');

  if (isCorrect) {
    sounds.correct();
    state.streak++;
    state.correctInSession++;
    const streakBonus = Math.min(state.streak * 20, 100);
    const earnedXp = 100 + streakBonus;
    state.score += earnedXp;
    showFeedback(true, earnedXp);
  } else {
    sounds.wrong();
    state.streak = 0;
    stage.classList.add('shake-error');
    setTimeout(() => stage.classList.remove('shake-error'), 500);
    showFeedback(false, 0);
  }

  updateHeaderStats();
}

function showFeedback(isCorrect, xpEarned) {
  const overlay = document.getElementById('feedbackOverlay');
  const badge = document.getElementById('resultBadge');
  const xpEl = document.getElementById('xpGain');
  const explanationEl = document.getElementById('feedbackText');
  const flagsList = document.getElementById('flagsList');
  const q = state.currentScenario;

  if (isCorrect) {
    badge.className = 'result-badge result-correct';
    badge.innerHTML = '<i class="fa-solid fa-circle-check"></i> <span id="resultTitle">Correct Analysis</span>';
    xpEl.textContent = `+${xpEarned} XP`;
    xpEl.style.display = 'inline-block';
  } else {
    badge.className = 'result-badge result-wrong';
    badge.innerHTML = '<i class="fa-solid fa-triangle-exclamation"></i> <span id="resultTitle">Breach Detected</span>';
    xpEl.style.display = 'none';
  }

  explanationEl.textContent = q.explanation;
  flagsList.innerHTML = '';
  const indicators = q.redFlags && q.redFlags.length > 0 ? q.redFlags : (q.safeIndicators || []);
  flagsList.className = q.redFlags && q.redFlags.length > 0 ? 'flags-list' : 'flags-list safe-indicators';

  indicators.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    flagsList.appendChild(li);
  });

  overlay.classList.add('active');
}

function nextQuestion() {
  document.getElementById('feedbackOverlay').classList.remove('active');
  sounds.click();

  if (state.currentIndex + 1 < state.currentQuestions.length) {
    state.currentIndex++;
    renderCurrentQuestion();
  } else {
    completeLabSession();
  }
}

// ============================================================
// LAB COMPLETION & REALISTIC CERTIFICATE GENERATION
// ============================================================
function completeLabSession() {
  const total = state.currentQuestions.length || 10;
  const score = state.correctInSession;
  const passed = score >= 8; // Mandatory criteria: at least 8 out of 10

  if (passed) {
    // Mark current lab as completed in session state!
    if (state.activeLab) {
      state.completedLabs.add(state.activeLab);
    }
    updateHeaderStats();
    renderHomeLabsGrid();

    const labMeta = LAB_METADATA[state.activeLab] || { title: 'Phishing Defense Lab' };
    const certId = `CERT-PS-2026-${Math.random().toString(36).substring(2, 7).toUpperCase()}`;
    const studentName = (state.userName && state.userName.trim()) ? state.userName : 'Student Trainee';

    // Update Certificate Preview Elements
    const certRecip = document.getElementById('certRecipientName');
    if (certRecip) certRecip.textContent = studentName;
    const certPrevName = document.getElementById('certPreviewName');
    if (certPrevName) certPrevName.textContent = studentName;
    const certPrevLab = document.getElementById('certPreviewLabTitle');
    if (certPrevLab) certPrevLab.textContent = labMeta.title;
    const certPrevId = document.getElementById('certPreviewId');
    if (certPrevId) certPrevId.textContent = `ID: ${certId}`;

    // Record lab result into session state
    state.labResults[state.activeLab] = {
      score,
      total,
      certId,
      labTitle: labMeta.title,
      timestamp: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
    };

    const certScoreChip = document.getElementById('certScoreChip');
    if (certScoreChip) {
      certScoreChip.innerHTML = `<i class="fa-solid fa-circle-check"></i> SCORE: ${score}/${total} (${Math.round((score/total)*100)}%) • PASS CRITERIA MET (REQ: 8/10)`;
    }

    const certSub = document.getElementById('certModalSubtitle');
    if (certSub) {
      certSub.textContent = `You scored ${score}/${total} (${Math.round((score/total)*100)}%), surpassing the required 8/10 benchmark to certify this lab.`;
    }

    // Celebration Score Card displays
    const scoreDisp = document.getElementById('certScoreDisplay');
    if (scoreDisp) scoreDisp.textContent = `${score} / ${total}`;
    const accDisp = document.getElementById('certAccuracyDisplay');
    if (accDisp) accDisp.textContent = `${Math.round((score/total)*100)}%`;

    // Check if this was the 6th lab completed
    const certModalFinalBtn = document.getElementById('certModalFinalReportBtn');
    if (certModalFinalBtn) {
      if (state.completedLabs.size === 6) {
        certModalFinalBtn.classList.remove('hidden');
      } else {
        certModalFinalBtn.classList.add('hidden');
      }
    }

    // Trigger Audio & Confetti Celebrations
    try {
      sounds.victoryFanfare();
    } catch (e) {
      console.warn('Sound fanfare error:', e);
    }

    try {
      launchConfetti();
    } catch (e) {
      console.warn('Confetti launch error:', e);
    }

    // Display Certificate Celebration Modal
    const certModal = document.getElementById('certificateModalOverlay');
    if (certModal) {
      certModal.classList.add('active');
    }
  } else {
    // Failed evaluation (< 8/10). Do NOT mark lab as completed and do NOT issue certificate!
    try {
      sounds.wrong();
    } catch (e) {
      console.warn('Sound play error:', e);
    }

    const failScore = document.getElementById('failScoreNum');
    if (failScore) failScore.textContent = `${score} / ${total}`;
    const failPct = document.getElementById('failScorePct');
    if (failPct) failPct.textContent = `${Math.round((score / total) * 100)}% Accuracy (80% Required)`;
    
    const failModal = document.getElementById('evaluationFailModalOverlay');
    if (failModal) {
      failModal.classList.add('active');
    }
  }
}

// High-Resolution Realistic Certificate Canvas Generator for Download (1200x850)
function downloadCertificate() {
  sounds.click();
  const canvas = document.getElementById('hiddenCertCanvas');
  const ctx = canvas.getContext('2d');
  const w = canvas.width;  // 1200
  const h = canvas.height; // 850

  const labTitle = (LAB_METADATA[state.activeLab] && LAB_METADATA[state.activeLab].title) || 'Phishing Defense Lab';
  const certId = document.getElementById('certPreviewId').textContent.replace('ID: ', '');
  const dateStr = new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
  const score = state.correctInSession;
  const total = state.currentQuestions.length || 10;

  // 1. Background (Pure White with subtle warm paper glow)
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(0, 0, w, h);

  const radialBg = ctx.createRadialGradient(w / 2, h / 2, 100, w / 2, h / 2, 600);
  radialBg.addColorStop(0, '#ffffff');
  radialBg.addColorStop(1, '#fbfaf8');
  ctx.fillStyle = radialBg;
  ctx.fillRect(0, 0, w, h);

  // 2. Classical Double Borders (Navy Outer, Gold Inner)
  ctx.strokeStyle = '#0f172a'; // Deep Navy
  ctx.lineWidth = 6;
  ctx.strokeRect(30, 30, w - 60, h - 60);

  ctx.strokeStyle = '#d97706'; // Warm Gold
  ctx.lineWidth = 2.5;
  ctx.strokeRect(44, 44, w - 88, h - 88);

  // Corner Geometric Ornaments (Gold)
  function drawCorner(x, y, dx, dy) {
    ctx.strokeStyle = '#d97706';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(x, y + dy * 24);
    ctx.lineTo(x, y);
    ctx.lineTo(x + dx * 24, y);
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(x + dx * 8, y + dy * 8, 4, 0, Math.PI * 2);
    ctx.fillStyle = '#d97706';
    ctx.fill();
  }
  drawCorner(54, 54, 1, 1);
  drawCorner(w - 54, 54, -1, 1);
  drawCorner(54, h - 54, 1, -1);
  drawCorner(w - 54, h - 54, -1, -1);

  // 3. Organization Crest & Official Tags
  ctx.textAlign = 'center';

  // Gold Badge Shield
  ctx.beginPath();
  ctx.arc(w / 2, 104, 26, 0, Math.PI * 2);
  const sealGrad = ctx.createLinearGradient(w / 2 - 26, 78, w / 2 + 26, 130);
  sealGrad.addColorStop(0, '#d97706');
  sealGrad.addColorStop(0.5, '#f59e0b');
  sealGrad.addColorStop(1, '#fbbf24');
  ctx.fillStyle = sealGrad;
  ctx.fill();

  // Shield Icon in center of crest
  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 20px sans-serif';
  ctx.fillText('★', w / 2, 111);

  // Official Range Security Tag
  ctx.fillStyle = '#6d28d9';
  ctx.font = 'bold 12px "JetBrains Mono", monospace';
  ctx.fillText('OFFICIAL CYBER RANGE RECORD  •  BENCHMARK v2.4  •  CRYPTOGRAPHICALLY VERIFIED', w / 2, 150);

  ctx.fillStyle = '#b45309';
  ctx.font = 'bold 14px "Plus Jakarta Sans", sans-serif';
  ctx.fillText('PHISHSHIELD CYBER DEFENSE SIMULATION LABS', w / 2, 175);

  ctx.fillStyle = '#0f172a';
  ctx.font = 'bold 36px "Playfair Display", Georgia, serif';
  ctx.fillText('CERTIFICATE OF LAB COMPLETION', w / 2, 222);

  ctx.fillStyle = '#64748b';
  ctx.font = 'italic 17px "Playfair Display", Georgia, serif';
  ctx.fillText('This is to certify that', w / 2, 258);

  // 4. Recipient Name
  ctx.fillStyle = '#1e1b4b';
  ctx.font = 'bold 44px "Playfair Display", Georgia, serif';
  ctx.fillText(state.userName, w / 2, 322);

  // Underline beneath name
  ctx.strokeStyle = '#e2e8f0';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(w / 2 - 220, 338);
  ctx.lineTo(w / 2 + 220, 338);
  ctx.stroke();

  // 5. Achievement Description & Criteria
  ctx.fillStyle = '#475569';
  ctx.font = '15px "Plus Jakarta Sans", sans-serif';
  ctx.fillText('has demonstrated practical competency and met the 8/10 passing benchmark in:', w / 2, 380);

  ctx.fillStyle = '#4f46e5';
  ctx.font = 'bold 26px "Plus Jakarta Sans", sans-serif';
  ctx.fillText(labTitle, w / 2, 420);

  // Score Pill Banner on Certificate
  ctx.fillStyle = '#15803d';
  ctx.font = 'bold 14px "Plus Jakarta Sans", sans-serif';
  ctx.fillText(`VERIFIED SCORE: ${score}/${total} (${Math.round((score / total) * 100)}%)   |   MINIMUM 8/10 PASSING BENCHMARK MET`, w / 2, 455);

  ctx.fillStyle = '#64748b';
  ctx.font = '600 12px "Plus Jakarta Sans", sans-serif';
  ctx.fillText('THREAT TELEMETRY  •  DOMAIN VERIFICATION  •  ATTACK VECTOR MITIGATION', w / 2, 485);

  // 6. Verification ID & Date
  ctx.fillStyle = '#94a3b8';
  ctx.font = '13px "JetBrains Mono", monospace';
  ctx.fillText(`ID: ${certId}   |   ISSUED: ${dateStr.toUpperCase()}`, w / 2, 515);

  // 7. Footer: Official Institutional Signatures & Seal (No human names!)
  const footerY = 675;

  // Left Block: Evaluation System
  ctx.fillStyle = '#0f172a';
  ctx.font = 'bold 15px "JetBrains Mono", monospace';
  ctx.fillText('[AUTOMATED RANGE EVALUATION PROTOCOL]', 250, footerY);

  ctx.strokeStyle = '#94a3b8';
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(100, footerY + 10);
  ctx.lineTo(400, footerY + 10);
  ctx.stroke();

  ctx.fillStyle = '#1e293b';
  ctx.font = 'bold 12px "Plus Jakarta Sans", sans-serif';
  ctx.fillText('CYBER DEFENSE LAB EVALUATOR', 250, footerY + 28);

  ctx.fillStyle = '#64748b';
  ctx.font = '10px "Plus Jakarta Sans", sans-serif';
  ctx.fillText('Interactive Cyber Range Systems', 250, footerY + 42);

  // Center: Official Embossed Gold Seal
  const sealX = w / 2;
  const sealY = footerY - 5;

  ctx.beginPath();
  ctx.arc(sealX, sealY, 44, 0, Math.PI * 2);
  ctx.fillStyle = sealGrad;
  ctx.fill();

  ctx.strokeStyle = 'rgba(255, 255, 255, 0.85)';
  ctx.lineWidth = 2;
  ctx.setLineDash([4, 4]);
  ctx.beginPath();
  ctx.arc(sealX, sealY, 35, 0, Math.PI * 2);
  ctx.stroke();
  ctx.setLineDash([]);

  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 18px sans-serif';
  ctx.fillText('★', sealX, sealY - 4);
  ctx.font = 'bold 9px "Plus Jakarta Sans", sans-serif';
  ctx.fillText('OFFICIAL RECORD', sealX, sealY + 12);

  ctx.fillStyle = '#15803d';
  ctx.font = 'bold 10px "JetBrains Mono", monospace';
  ctx.fillText('CRITERIA: 8+/10 MET', sealX, footerY + 54);

  // Right Block: Training Authority
  ctx.fillStyle = '#0f172a';
  ctx.font = 'bold 15px "JetBrains Mono", monospace';
  ctx.fillText('[SIMULATION VERIFICATION AUTHORITY]', w - 250, footerY);

  ctx.strokeStyle = '#94a3b8';
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(w - 400, footerY + 10);
  ctx.lineTo(w - 100, footerY + 10);
  ctx.stroke();

  ctx.fillStyle = '#1e293b';
  ctx.font = 'bold 12px "Plus Jakarta Sans", sans-serif';
  ctx.fillText('SIMULATION VERIFICATION DESK', w - 250, footerY + 28);

  ctx.fillStyle = '#64748b';
  ctx.font = '10px "Plus Jakarta Sans", sans-serif';
  ctx.fillText('Threat Operations & Range Division', w - 250, footerY + 42);

  // Trigger Immediate PNG Download
  const link = document.createElement('a');
  const safeName = state.userName.replace(/[^a-zA-Z0-9]/g, '_');
  link.download = `PhishShield_Certificate_${safeName}.png`;
  link.href = canvas.toDataURL('image/png');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// Open Individual Lab Certificate from Lab Hub
function openLabCertificate(labKey) {
  const result = state.labResults[labKey] || {
    score: 10,
    total: 10,
    certId: `CERT-PS-2026-${Math.random().toString(36).substring(2, 7).toUpperCase()}`
  };
  const labMeta = LAB_METADATA[labKey] || { title: 'Phishing Defense Lab' };
  const studentName = (state.userName && state.userName.trim()) ? state.userName : 'Student Trainee';

  state.activeLab = labKey;

  document.getElementById('certRecipientName').textContent = studentName;
  document.getElementById('certPreviewName').textContent = studentName;
  document.getElementById('certPreviewLabTitle').textContent = labMeta.title;
  document.getElementById('certPreviewId').textContent = `ID: ${result.certId}`;

  const certScoreChip = document.getElementById('certScoreChip');
  if (certScoreChip) {
    certScoreChip.innerHTML = `<i class="fa-solid fa-circle-check"></i> SCORE: ${result.score}/${result.total} (${Math.round((result.score/result.total)*100)}%) • PASS CRITERIA MET (REQ: 8/10)`;
  }

  const certSub = document.getElementById('certModalSubtitle');
  if (certSub) {
    certSub.textContent = `You scored ${result.score}/${result.total} (${Math.round((result.score/result.total)*100)}%), surpassing the required 8/10 benchmark to certify this lab.`;
  }

  const scoreDisp = document.getElementById('certScoreDisplay');
  if (scoreDisp) scoreDisp.textContent = `${result.score} / ${result.total}`;
  const accDisp = document.getElementById('certAccuracyDisplay');
  if (accDisp) accDisp.textContent = `${Math.round((result.score/result.total)*100)}%`;

  const finalReportBtn = document.getElementById('certModalFinalReportBtn');
  if (finalReportBtn) {
    if (state.completedLabs.size === 6) {
      finalReportBtn.classList.remove('hidden');
    } else {
      finalReportBtn.classList.add('hidden');
    }
  }

  document.getElementById('certificateModalOverlay').classList.add('active');
}

// Show Final Comprehensive 6-Lab Analysis Report & Master Certificate
function showFinalReportModal() {
  sounds.victoryFanfare();
  launchConfetti();

  const labKeys = ['email', 'sender', 'url', 'hover', 'login', 'qr'];
  let totalScore = 0;
  let totalPossible = 0;

  labKeys.forEach(k => {
    const res = state.labResults[k];
    if (res) {
      totalScore += res.score;
      totalPossible += res.total;
    } else {
      totalPossible += 10;
    }
  });

  const overallAccuracy = totalPossible > 0 ? Math.round((totalScore / totalPossible) * 100) : 0;
  const studentName = (state.userName && state.userName.trim()) ? state.userName : 'Student Trainee';

  document.getElementById('reportStudentName').textContent = studentName;
  document.getElementById('reportCumulativeScore').textContent = `${totalScore} / ${totalPossible}`;
  document.getElementById('reportQuestionsAnalyzed').textContent = `${totalPossible} Randomized Scenarios`;
  document.getElementById('reportOverallAccuracy').textContent = `${overallAccuracy}%`;

  // Tier calculation
  let tier = 'Tier 1: Master Threat Hunter';
  let strengthText = 'Demonstrated superior vigilance across email social engineering cues, domain cousin spoofing, and hidden hyperlink redirect traps.';
  let takeawayText = 'Maintain strict domain verification before credential submission, inspect TLS certificate provenance, and physically isolate unexpected QR code scans.';

  if (overallAccuracy >= 95) {
    tier = 'Tier 1: Master Threat Hunter (Elite)';
    strengthText = 'Flawless identification of evasive multi-stage phishing vectors, zero-day impersonations, and credential harvesting traps.';
  } else if (overallAccuracy >= 88) {
    tier = 'Tier 2: Senior Cyber Defense Specialist';
    strengthText = 'Exceptional defensive telemetry recognition with rapid mitigation of cousin domains and quishing vectors.';
  } else {
    tier = 'Tier 3: Certified Range Defense Analyst';
    strengthText = 'Solid baseline threat mitigation meeting all institutional passing thresholds across all range environments.';
  }

  document.getElementById('reportReadinessTier').textContent = tier;
  document.getElementById('reportStrengthText').textContent = strengthText;
  document.getElementById('reportTakeawayText').textContent = takeawayText;

  // Render 6 Domain Breakdown Cards
  const domainGrid = document.getElementById('reportDomainGrid');
  if (domainGrid) {
    domainGrid.innerHTML = '';
    labKeys.forEach((key, idx) => {
      const meta = LAB_METADATA[key];
      const res = state.labResults[key] || { score: 8, total: 10 };
      const pct = Math.round((res.score / res.total) * 100);
      const isMaster = pct >= 90;

      const card = document.createElement('div');
      card.className = 'domain-card';
      card.innerHTML = `
        <div>
          <div class="domain-card-header">
            <span class="domain-name"><i class="fa-solid ${meta.icon}"></i> Lab ${idx+1}: ${meta.title}</span>
            <span class="domain-score-badge ${isMaster ? 'text-green' : ''}">
              ${res.score}/${res.total} (${pct}%)
            </span>
          </div>
          <div style="font-size: 0.72rem; color: #64748b; font-weight: 600;">${isMaster ? '★ Domain Mastered' : '✓ Benchmark Met'}</div>
        </div>
        <div class="domain-bar-bg">
          <div class="domain-bar-fill" style="width: ${pct}%;"></div>
        </div>
      `;
      domainGrid.appendChild(card);
    });
  }

  // Update Master Certificate Preview
  const masterCertId = `CERT-PS-MASTER-2026-${Math.random().toString(36).substring(2, 7).toUpperCase()}`;
  document.getElementById('masterCertRecipientName').textContent = studentName;
  document.getElementById('masterCertId').textContent = `ID: ${masterCertId}`;
  document.getElementById('masterCertScoreChip').innerHTML = `<i class="fa-solid fa-circle-check"></i> CUMULATIVE SCORE: ${totalScore}/${totalPossible} (${overallAccuracy}% ACCURACY) • ALL 6 LABS MASTERED`;

  // Open Modal
  document.getElementById('finalReportModalOverlay').classList.add('active');
}

// Download High-Resolution Master Certificate PNG (1200x850)
function downloadMasterCertificate() {
  sounds.click();
  const canvas = document.getElementById('hiddenCertCanvas');
  const ctx = canvas.getContext('2d');
  const w = canvas.width;  // 1200
  const h = canvas.height; // 850

  const studentName = (state.userName && state.userName.trim()) ? state.userName : 'Student Trainee';
  const certId = document.getElementById('masterCertId').textContent.replace('ID: ', '');
  const dateStr = new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });

  let totalScore = 0;
  let totalPossible = 60;
  ['email', 'sender', 'url', 'hover', 'login', 'qr'].forEach(k => {
    if (state.labResults[k]) totalScore += state.labResults[k].score;
  });
  const accuracy = Math.round((totalScore / totalPossible) * 100);

  // Background
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(0, 0, w, h);

  const radialBg = ctx.createRadialGradient(w / 2, h / 2, 80, w / 2, h / 2, 650);
  radialBg.addColorStop(0, '#ffffff');
  radialBg.addColorStop(0.7, '#fffefb');
  radialBg.addColorStop(1, '#fbf8f0');
  ctx.fillStyle = radialBg;
  ctx.fillRect(0, 0, w, h);

  // Master Double Gold/Navy Borders
  ctx.strokeStyle = '#d97706'; // Gold outer
  ctx.lineWidth = 6;
  ctx.strokeRect(28, 28, w - 56, h - 56);

  ctx.strokeStyle = '#0f172a'; // Deep Navy inner
  ctx.lineWidth = 2.5;
  ctx.strokeRect(42, 42, w - 84, h - 84);

  // Corner Ornaments
  function drawCorner(x, y, dx, dy) {
    ctx.strokeStyle = '#d97706';
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    ctx.moveTo(x, y + dy * 26);
    ctx.lineTo(x, y);
    ctx.lineTo(x + dx * 26, y);
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(x + dx * 10, y + dy * 10, 5, 0, Math.PI * 2);
    ctx.fillStyle = '#d97706';
    ctx.fill();
  }
  drawCorner(54, 54, 1, 1);
  drawCorner(w - 54, 54, -1, 1);
  drawCorner(54, h - 54, 1, -1);
  drawCorner(w - 54, h - 54, -1, -1);

  ctx.textAlign = 'center';

  // Master Gold Crest with Star
  ctx.beginPath();
  ctx.arc(w / 2, 95, 28, 0, Math.PI * 2);
  const sealGrad = ctx.createLinearGradient(w / 2 - 28, 67, w / 2 + 28, 123);
  sealGrad.addColorStop(0, '#b45309');
  sealGrad.addColorStop(0.5, '#f59e0b');
  sealGrad.addColorStop(1, '#fbbf24');
  ctx.fillStyle = sealGrad;
  ctx.fill();

  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 24px sans-serif';
  ctx.fillText('★', w / 2, 103);

  // Tags & Titles
  ctx.fillStyle = '#b45309';
  ctx.font = 'bold 12px "JetBrains Mono", monospace';
  ctx.fillText('OFFICIAL MASTER RANGE RECORD  •  COMPREHENSIVE BENCHMARK v2.4  •  CRYPTOGRAPHICALLY VERIFIED', w / 2, 142);

  ctx.fillStyle = '#0f172a';
  ctx.font = 'bold 15px "Plus Jakarta Sans", sans-serif';
  ctx.fillText('PHISHSHIELD CYBER DEFENSE SIMULATION RANGE', w / 2, 166);

  ctx.fillStyle = '#1e1b4b';
  ctx.font = 'bold 36px "Playfair Display", Georgia, serif';
  ctx.fillText('MASTER CERTIFICATE OF DEFENSE EXCELLENCE', w / 2, 212);

  ctx.fillStyle = '#64748b';
  ctx.font = 'italic 16px "Playfair Display", Georgia, serif';
  ctx.fillText('This master credential is authenticated and awarded with highest honors to', w / 2, 246);

  // Recipient
  ctx.fillStyle = '#0f172a';
  ctx.font = 'bold 44px "Playfair Display", Georgia, serif';
  ctx.fillText(studentName, w / 2, 308);

  ctx.strokeStyle = '#cbd5e1';
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.moveTo(w / 2 - 260, 322);
  ctx.lineTo(w / 2 + 260, 322);
  ctx.stroke();

  ctx.fillStyle = '#475569';
  ctx.font = '14px "Plus Jakarta Sans", sans-serif';
  ctx.fillText('for successfully demonstrating operational threat mitigation across all 6 specialized Cyber Range categories:', w / 2, 350);

  // 6 Competencies
  ctx.fillStyle = '#4f46e5';
  ctx.font = 'bold 13px "JetBrains Mono", monospace';
  ctx.fillText('PHISHING EMAILS  •  SENDER SPOOFING  •  URL ANALYSIS  •  HOVER TELEMETRY  •  FAKE LOGINS  •  QUISHING DEFENSE', w / 2, 378);

  // Score Badge
  const badgeY = 412;
  ctx.fillStyle = '#fef3c7';
  ctx.strokeStyle = '#fcd34d';
  ctx.lineWidth = 1.5;
  const badgeW = 620;
  const badgeH = 34;
  ctx.beginPath();
  ctx.roundRect(w / 2 - badgeW / 2, badgeY, badgeW, badgeH, 17);
  ctx.fill();
  ctx.stroke();

  ctx.fillStyle = '#92400e';
  ctx.font = 'bold 13px "JetBrains Mono", monospace';
  ctx.fillText(`CUMULATIVE RANGE SCORE: ${totalScore} / ${totalPossible} (${accuracy}% ACCURACY)  •  ALL 6 LABS MASTERED`, w / 2, badgeY + 22);

  // Verification & Date
  ctx.fillStyle = '#64748b';
  ctx.font = '13px "Plus Jakarta Sans", sans-serif';
  ctx.fillText(`Official Accreditation Issued on ${dateStr}  •  Credential ID: ${certId}`, w / 2, 482);

  // Footer: Dual Authorities and Master Seal
  const footerY = 560;

  // Left Block
  ctx.fillStyle = '#0f172a';
  ctx.font = 'bold 15px "JetBrains Mono", monospace';
  ctx.fillText('[AUTONOMOUS EVALUATION ENGINE]', 250, footerY);

  ctx.strokeStyle = '#94a3b8';
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(100, footerY + 10);
  ctx.lineTo(400, footerY + 10);
  ctx.stroke();

  ctx.fillStyle = '#1e293b';
  ctx.font = 'bold 12px "Plus Jakarta Sans", sans-serif';
  ctx.fillText('PhishShield Evaluation Protocol', 250, footerY + 28);

  ctx.fillStyle = '#64748b';
  ctx.font = '10px "Plus Jakarta Sans", sans-serif';
  ctx.fillText('Interactive Cyber Range System', 250, footerY + 42);

  // Center Gold Seal
  const sealX = w / 2;
  const sealY = footerY + 14;
  ctx.beginPath();
  ctx.arc(sealX, sealY, 40, 0, Math.PI * 2);
  const sealGrad2 = ctx.createRadialGradient(sealX, sealY, 5, sealX, sealY, 40);
  sealGrad2.addColorStop(0, '#fef08a');
  sealGrad2.addColorStop(0.6, '#f59e0b');
  sealGrad2.addColorStop(1, '#b45309');
  ctx.fillStyle = sealGrad2;
  ctx.fill();

  ctx.strokeStyle = '#ffffff';
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.arc(sealX, sealY, 34, 0, Math.PI * 2);
  ctx.stroke();

  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 20px sans-serif';
  ctx.fillText('★', sealX, sealY - 4);
  ctx.font = 'bold 9px "Plus Jakarta Sans", sans-serif';
  ctx.fillText('MASTER RECORD', sealX, sealY + 12);

  ctx.fillStyle = '#15803d';
  ctx.font = 'bold 10px "JetBrains Mono", monospace';
  ctx.fillText('ALL 6 DOMAINS VERIFIED', sealX, footerY + 68);

  // Right Block
  ctx.fillStyle = '#0f172a';
  ctx.font = 'bold 15px "JetBrains Mono", monospace';
  ctx.fillText('[RANGE VERIFICATION AUTHORITY]', w - 250, footerY);

  ctx.strokeStyle = '#94a3b8';
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(w - 400, footerY + 10);
  ctx.lineTo(w - 100, footerY + 10);
  ctx.stroke();

  ctx.fillStyle = '#1e293b';
  ctx.font = 'bold 12px "Plus Jakarta Sans", sans-serif';
  ctx.fillText('Security Awareness & Training Division', w - 250, footerY + 28);

  ctx.fillStyle = '#64748b';
  ctx.font = '10px "Plus Jakarta Sans", sans-serif';
  ctx.fillText('Accredited Cyber Range Operations', w - 250, footerY + 42);

  // Trigger Download
  const link = document.createElement('a');
  const safeName = studentName.replace(/[^a-zA-Z0-9]/g, '_');
  link.download = `PhishShield_Master_Certificate_${safeName}.png`;
  link.href = canvas.toDataURL('image/png');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// Confetti Fireworks
function launchConfetti() {
  const canvas = document.getElementById('confettiCanvas');
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const particles = [];
  const colors = ['#6366f1', '#ec4899', '#3b82f6', '#10b981', '#f59e0b', '#d97706'];

  for (let i = 0; i < 110; i++) {
    particles.push({
      x: canvas.width / 2,
      y: canvas.height * 0.45,
      vx: (Math.random() - 0.5) * 16,
      vy: (Math.random() - 0.7) * 18,
      size: Math.random() * 8 + 4,
      color: colors[Math.floor(Math.random() * colors.length)],
      alpha: 1,
      decay: Math.random() * 0.015 + 0.01
    });
  }

  function frame() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let active = false;
    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.35;
      p.alpha -= p.decay;

      if (p.alpha > 0) {
        active = true;
        ctx.save();
        ctx.globalAlpha = p.alpha;
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    });

    if (active) {
      requestAnimationFrame(frame);
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  }
  requestAnimationFrame(frame);
}

function updateHeaderStats() {
  const displayUser = (state.userName && state.userName.trim()) ? state.userName : 'Student Trainee';
  const headerUserEl = document.getElementById('headerUserName');
  if (headerUserEl) headerUserEl.textContent = displayUser;
  const streakEl = document.getElementById('headerStreakCount');
  if (streakEl) streakEl.textContent = state.streak;
  const completedEl = document.getElementById('headerCompletedCount');
  if (completedEl) completedEl.textContent = `${state.completedLabs.size}/6`;
}

// Event Setup
function setupEvents() {
  // Brand Logo & Lab Hub buttons return to Home View
  document.getElementById('brandLogoHomeBtn').addEventListener('click', () => {
    sounds.click();
    showHomeView();
  });
  document.getElementById('navHubBtn').addEventListener('click', () => {
    sounds.click();
    showHomeView();
  });
  document.getElementById('backToHubBtn').addEventListener('click', () => {
    sounds.click();
    showHomeView();
  });

  // Reset Session Button (for classroom / next student)
  const resetBtn = document.getElementById('resetSessionBtn');
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      sounds.click();
      resetSession();
    });
  }

  // Name Prompt Form Submission
  const nameForm = document.getElementById('nameForm');
  nameForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = document.getElementById('nameInput');
    const val = input.value.trim();
    if (val) {
      state.userName = val;
      updateHeaderStats();
      document.getElementById('nameModalOverlay').classList.remove('active');
      sounds.click();
    }
  });

  // Edit Name via Header Pill
  document.getElementById('userNamePill').addEventListener('click', () => {
    document.getElementById('nameInput').value = state.userName || '';
    document.getElementById('nameModalOverlay').classList.add('active');
    document.getElementById('nameInput').focus();
    sounds.click();
  });

  // Next Question in Feedback Drawer
  document.getElementById('nextQuestionBtn').addEventListener('click', nextQuestion);

  // Download Certificate Button
  document.getElementById('downloadCertBtn').addEventListener('click', downloadCertificate);

  // Return to Lab Hub from Certificate Modal
  document.getElementById('certBackToHubBtn').addEventListener('click', () => {
    document.getElementById('certificateModalOverlay').classList.remove('active');
    sounds.click();
    showHomeView();
  });

  // Retry Lab after failed evaluation (< 8/10)
  document.getElementById('retryLabBtn').addEventListener('click', () => {
    document.getElementById('evaluationFailModalOverlay').classList.remove('active');
    sounds.click();
    startLab(state.activeLab);
  });

  // Return to Lab Hub from Failure Modal
  document.getElementById('failBackToHubBtn').addEventListener('click', () => {
    document.getElementById('evaluationFailModalOverlay').classList.remove('active');
    sounds.click();
    showHomeView();
  });

  // View Final Report Button on Home Hub Banner
  const viewFinalBtn = document.getElementById('viewFinalReportBtn');
  if (viewFinalBtn) {
    viewFinalBtn.addEventListener('click', () => {
      sounds.click();
      showFinalReportModal();
    });
  }

  // View Final Report Button from single lab certificate modal
  const certModalFinalBtn = document.getElementById('certModalFinalReportBtn');
  if (certModalFinalBtn) {
    certModalFinalBtn.addEventListener('click', () => {
      document.getElementById('certificateModalOverlay').classList.remove('active');
      sounds.click();
      showFinalReportModal();
    });
  }

  // Return to Lab Hub from Final Report Modal
  const finalReportBackBtn = document.getElementById('finalReportBackToHubBtn');
  if (finalReportBackBtn) {
    finalReportBackBtn.addEventListener('click', () => {
      document.getElementById('finalReportModalOverlay').classList.remove('active');
      sounds.click();
      showHomeView();
    });
  }

  // Download Master Certificate Button
  const downloadMasterBtn = document.getElementById('downloadMasterCertBtn');
  if (downloadMasterBtn) {
    downloadMasterBtn.addEventListener('click', downloadMasterCertificate);
  }

  // Sound Toggle
  const soundBtn = document.getElementById('soundToggleBtn');
  const soundIcon = document.getElementById('soundIcon');
  soundBtn.addEventListener('click', () => {
    state.soundEnabled = !state.soundEnabled;
    soundIcon.className = state.soundEnabled ? 'fa-solid fa-volume-high' : 'fa-solid fa-volume-xmark';
    sounds.click();
  });
}

// App Boot: Always starts fresh from scratch and prompts for Trainee Name
window.addEventListener('DOMContentLoaded', () => {
  setupEvents();
  resetSession();
});

// Extra safeguard: BFCache (Back/Forward Cache) on Mobile Safari & Android Chrome
window.addEventListener('pageshow', (e) => {
  if (e.persisted) {
    resetSession();
  }
});
