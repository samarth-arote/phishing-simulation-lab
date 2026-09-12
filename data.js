// Comprehensive Question Bank: 252 Scenarios (42 per Lab)
// Categories:
// 1. email - Phishing vs Legitimate Email (42 Qs)
// 2. sender - Identify Suspicious Sender (42 Qs)
// 3. url - Identify Suspicious URL (42 Qs)
// 4. hover - Hover over links (inspect preview) (42 Qs)
// 5. login - Fake Login-Page Recognition (42 Qs)
// 6. qr - QR Phishing Simulation (Quishing) (42 Qs)

const QUESTION_BANK = [
  {
    "id": "em-1",
    "category": "email",
    "categoryTitle": "Phishing vs Legitimate Email",
    "difficulty": "Easy",
    "type": "decision",
    "scenarioTitle": "Urgent Payroll Direct Deposit Suspension",
    "senderName": "Payroll Management System",
    "senderEmail": "payroll-update@company-portal-hr.biz",
    "subject": "FINAL WARNING: Direct deposit suspended within 2 hours",
    "date": "Today, 09:14 AM",
    "emailBodyHtml": "<div class=\"email-lead\">Dear Employee,</div><p>We detected an irregularity with your federal tax withholding form. As a result, your scheduled direct deposit for this pay period has been temporarily frozen.</p><div class=\"urgent-banner\">ACTION REQUIRED: Re-authenticate your banking credentials within 120 minutes to avoid a 30-day payout freeze.</div><div class=\"email-cta-box\"><a class=\"sim-btn red-btn\">Update Banking Details Now</a></div><p class=\"small-muted\">Human Resources & Automated Payroll Dispatch. Do not reply directly.</p>",
    "isPhishing": true,
    "correctAnswer": "phishing",
    "redFlags": [
      "Artificial extreme urgency (2 hours)",
      "Threat of 30-day salary freeze",
      "Suspicious third-party domain (@company-portal-hr.biz)",
      "Direct request for sensitive banking credentials"
    ],
    "explanation": "Legitimate corporate payroll departments never threaten a 2-hour freeze on your salary via unverified generic emails. Extreme urgency is the primary lever in phishing."
  },
  {
    "id": "em-2",
    "category": "email",
    "categoryTitle": "Phishing vs Legitimate Email",
    "difficulty": "Medium",
    "type": "decision",
    "scenarioTitle": "High-Value E-Commerce Order Confirmation Scam",
    "senderName": "Customer Billing Center",
    "senderEmail": "orders-tracking391@cloud-mail-gate.com",
    "subject": "Order #US-982143 Confirmed: Apple MacBook Pro M4 Max ($3,499.00 USD)",
    "date": "Today, 11:05 AM",
    "emailBodyHtml": "<div class=\"email-lead\">Dear Customer,</div><p>Thank you for your order! Your payment of <strong>$3,499.00 USD</strong> was processed via Visa ending in 4012.</p><p>Your item is scheduled to ship to: <em>Miami Warehouse Hub, Bay 14</em>.</p><div class=\"warning-callout\">Did not place this order? Call our 24/7 Fraud Desk at <strong>+1-800-555-0199</strong> or click below to cancel within 30 minutes.</div><div class=\"email-cta-box\"><a class=\"sim-btn red-btn\">Cancel Unauthorized Order</a></div>",
    "isPhishing": true,
    "correctAnswer": "phishing",
    "redFlags": [
      "High dollar amount invoice scare tactic",
      "Throwaway sending domain (@cloud-mail-gate.com)",
      "Generic greeting without your name",
      "Fake cancellation deadline to force panic"
    ],
    "explanation": "This is an invoice scare scam. Attackers invent an expensive purchase to panic the victim into clicking a phishing link or calling a fake call center."
  },
  {
    "id": "em-3",
    "category": "email",
    "categoryTitle": "Phishing vs Legitimate Email",
    "difficulty": "Hard",
    "type": "decision",
    "scenarioTitle": "CEO Confidential Acquisition Wire Transfer Request",
    "senderName": "David Sterling (CEO)",
    "senderEmail": "david.sterling@acmecorp-exec-board.com",
    "subject": "Confidential: Acquisition Escrow wire transfer today",
    "date": "Today, 02:45 PM",
    "emailBodyHtml": "<div class=\"email-lead\">Samarth,</div><p>I am stepping into an all-day confidential board meeting regarding our Project Falcon acquisition and cannot take phone calls.</p><p>I need you to process an initial supplier deposit of $48,200 to the attached escrow account today before 5 PM market close. Keep this strictly private between us until the press announcement tomorrow.</p><div class=\"email-cta-box\"><a class=\"sim-btn red-btn\">View Wire Transfer PDF Instructions</a></div><p>Sent from my iPad</p>",
    "isPhishing": true,
    "correctAnswer": "phishing",
    "redFlags": [
      "Classic CEO Fraud / BEC (Business Email Compromise)",
      "Lookalike executive domain (@acmecorp-exec-board.com)",
      "Explicit excuse to prevent verification (\"cannot take phone calls\")",
      "Demand for strict secrecy and same-day wire transfer"
    ],
    "explanation": "Classic Business Email Compromise (BEC). Attackers impersonate executives, isolate the victim, and demand urgent wire transfers."
  },
  {
    "id": "em-4",
    "category": "email",
    "categoryTitle": "Phishing vs Legitimate Email",
    "difficulty": "Easy",
    "type": "decision",
    "scenarioTitle": "Microsoft 365 Password Expiry Threat",
    "senderName": "Microsoft Security Team",
    "senderEmail": "no-reply@office365-renewal-portal.net",
    "subject": "Your Microsoft Office 365 password expires in 2 hours",
    "date": "Today, 08:30 AM",
    "emailBodyHtml": "<div class=\"email-lead\">Attention User,</div><p>Your corporate password is set to expire today. You will lose access to Outlook, OneDrive, and SharePoint if not renewed immediately.</p><div class=\"urgent-banner\">Keep Current Password: Click below to retain your current login credentials without interruption.</div><div class=\"email-cta-box\"><a class=\"sim-btn red-btn\">Keep My Password</a></div>",
    "isPhishing": true,
    "correctAnswer": "phishing",
    "redFlags": [
      "Fake expiration notice",
      "Unregistered domain (@office365-renewal-portal.net)",
      "False promise that you can \"keep current password\" by clicking a link"
    ],
    "explanation": "Legitimate password expiration prompts never allow you to \"keep your current password\" by clicking an email link."
  },
  {
    "id": "em-5",
    "category": "email",
    "categoryTitle": "Phishing vs Legitimate Email",
    "difficulty": "Medium",
    "type": "decision",
    "scenarioTitle": "Netflix Account Suspended - Payment Declined",
    "senderName": "Netflix Support",
    "senderEmail": "billing-alert@netflix-account-reactivation.co",
    "subject": "Unable to process your membership payment",
    "date": "Today, 01:15 PM",
    "emailBodyHtml": "<div class=\"email-lead\">Hi Member,</div><p>We were unable to process your monthly subscription fee for Netflix Premium. Your streaming service has been paused.</p><p>Please update your billing card information immediately to restore access.</p><div class=\"email-cta-box\"><a class=\"sim-btn red-btn\">Restart Membership</a></div>",
    "isPhishing": true,
    "correctAnswer": "phishing",
    "redFlags": [
      "Unofficial domain (@netflix-account-reactivation.co)",
      "Generic greeting \"Hi Member\"",
      "Emotional hook targeting entertainment cutoff"
    ],
    "explanation": "Always inspect the sending domain. Netflix sends emails from @netflix.com, never hyphenated third-party domains."
  },
  {
    "id": "em-6",
    "category": "email",
    "categoryTitle": "Phishing vs Legitimate Email",
    "difficulty": "Hard",
    "type": "decision",
    "scenarioTitle": "Federal Tax Refund Overdue Notification",
    "senderName": "Internal Revenue Service",
    "senderEmail": "tax-rebates@irs-gov-onlineportal.us",
    "subject": "Eligible for $840.00 Federal Economic Rebate",
    "date": "Yesterday, 10:20 AM",
    "emailBodyHtml": "<div class=\"email-lead\">Dear Taxpayer,</div><p>Our automated auditing calculation shows that you overpaid taxes in the previous fiscal year. You are entitled to a refund of <strong>$840.00 USD</strong>.</p><p>Submit your direct deposit routing and debit card details below to receive your payment.</p><div class=\"email-cta-box\"><a class=\"sim-btn red-btn\">Claim Tax Refund</a></div>",
    "isPhishing": true,
    "correctAnswer": "phishing",
    "redFlags": [
      "Government agency imposter",
      "IRS never initiates contact via email for refunds",
      "Asks for debit card info to receive a deposit",
      "Fake .us domain"
    ],
    "explanation": "The IRS never contacts taxpayers via unsolicited email or social media to demand personal or financial information."
  },
  {
    "id": "em-7",
    "category": "email",
    "categoryTitle": "Phishing vs Legitimate Email",
    "difficulty": "Easy",
    "type": "decision",
    "scenarioTitle": "FedEx Express Courier Delivery Exception",
    "senderName": "FedEx Delivery Team",
    "senderEmail": "notifications@fedex-tracking-parcel82.com",
    "subject": "Delivery Failed: Parcel #FX-89310 held due to unpaid customs fee ($2.40)",
    "date": "Today, 07:45 AM",
    "emailBodyHtml": "<div class=\"email-lead\">Hello,</div><p>Your courier parcel is being held at the regional depot because of an unpaid customs clearance fee of <strong>$2.40 USD</strong>.</p><p>If unpaid within 48 hours, package will be destroyed.</p><div class=\"email-cta-box\"><a class=\"sim-btn red-btn\">Pay $2.40 Fee</a></div>",
    "isPhishing": true,
    "correctAnswer": "phishing",
    "redFlags": [
      "Postal fee phishing scam",
      "Fake postage tracking domain",
      "Urgent destruction threat over nominal fee ($2.40) to steal credit cards"
    ],
    "explanation": "Attackers ask for tiny fees ($1–$3) to lure victims into entering full credit card numbers on cloned payment forms."
  },
  {
    "id": "em-8",
    "category": "email",
    "categoryTitle": "Phishing vs Legitimate Email",
    "difficulty": "Medium",
    "type": "decision",
    "scenarioTitle": "DocuSign Document Signature Pending Expiration",
    "senderName": "DocuSign Electronic Signature",
    "senderEmail": "docusign@contracts-secure-signing.info",
    "subject": "Urgent: Non-Disclosure Agreement awaiting your signature",
    "date": "Today, 03:10 PM",
    "emailBodyHtml": "<div class=\"email-lead\">Hello Samarth,</div><p>A mutual confidentiality agreement from Corporate Legal is awaiting your digital signature.</p><p>This document will expire in 6 hours.</p><div class=\"email-cta-box\"><a class=\"sim-btn red-btn\">Review & Sign Document</a></div>",
    "isPhishing": true,
    "correctAnswer": "phishing",
    "redFlags": [
      "Fake signing service domain (.info)",
      "Urgent 6-hour expiration",
      "DocuSign emails originate from @docusign.net"
    ],
    "explanation": "Phishing emails often mimic DocuSign to steal corporate SSO credentials when the user clicks \"Review Document\"."
  },
  {
    "id": "em-9",
    "category": "email",
    "categoryTitle": "Phishing vs Legitimate Email",
    "difficulty": "Hard",
    "type": "decision",
    "scenarioTitle": "Zoom Scheduled Meeting Invitation with Attached Macro",
    "senderName": "Zoom Video Communications",
    "senderEmail": "invites@zoom-meeting-securehub.net",
    "subject": "Emergency All-Hands Meeting: Q4 Restructuring (Doc Attached)",
    "date": "Today, 10:00 AM",
    "emailBodyHtml": "<div class=\"email-lead\">All Staff,</div><p>Please join the emergency restructuring conference call today at 11:30 AM.</p><p>Review the attached meeting schedule: <code>Meeting_Agenda_Confidential.docm</code>.</p><div class=\"warning-callout\">Ensure you enable macros in Microsoft Word to view the protected agenda.</div>",
    "isPhishing": true,
    "correctAnswer": "phishing",
    "redFlags": [
      "Macro-enabled document attachment (.docm)",
      "Urgent sensitive topic (\"Restructuring\")",
      "Asks victim to bypass Office macro security"
    ],
    "explanation": "Requesting users to \"enable macros\" in an attached document is a classic vector for delivering ransomware and trojans."
  },
  {
    "id": "em-10",
    "category": "email",
    "categoryTitle": "Phishing vs Legitimate Email",
    "difficulty": "Easy",
    "type": "decision",
    "scenarioTitle": "PayPal Account Limited - Verify Identity",
    "senderName": "PayPal Resolution Center",
    "senderEmail": "compliance@paypal-security-check.net",
    "subject": "Your PayPal account access has been restricted",
    "date": "Today, 06:18 AM",
    "emailBodyHtml": "<div class=\"email-lead\">Dear Customer,</div><p>We noticed suspicious login attempts from an unknown device in Russia. For your protection, outgoing payments have been locked.</p><p>Upload your government ID and credit card statement to restore full access.</p><div class=\"email-cta-box\"><a class=\"sim-btn red-btn\">Restore Account</a></div>",
    "isPhishing": true,
    "correctAnswer": "phishing",
    "redFlags": [
      "Account limitation scare",
      "Spoofed domain paypal-security-check.net",
      "Demands identity documents and credit card statements"
    ],
    "explanation": "Legitimate PayPal security notifications come from paypal.com and instruct you to log in directly via the browser or app."
  },
  {
    "id": "em-11",
    "category": "email",
    "categoryTitle": "Phishing vs Legitimate Email",
    "difficulty": "Medium",
    "type": "decision",
    "scenarioTitle": "Internal IT Mandatory VPN Client Security Patch",
    "senderName": "Enterprise IT Global Support",
    "senderEmail": "it-support@corp-vpn-patch.com",
    "subject": "MANDATORY: Critical Zero-Day Patch for Corporate VPN",
    "date": "Today, 08:50 AM",
    "emailBodyHtml": "<div class=\"email-lead\">Staff,</div><p>Security Operations has identified an active zero-day vulnerability in our VPN client. All remote employees must install the updated hotfix binary immediately.</p><div class=\"email-cta-box\"><a class=\"sim-btn red-btn\">Download Hotfix_Patch_v2.exe</a></div>",
    "isPhishing": true,
    "correctAnswer": "phishing",
    "redFlags": [
      "Direct link to an .exe binary executable",
      "External fake domain (@corp-vpn-patch.com)",
      "Enterprise IT pushes updates via MDM, not email attachments"
    ],
    "explanation": "IT departments push software updates via automated deployment systems (InTune, Jamf), never via email links to raw .exe files."
  },
  {
    "id": "em-12",
    "category": "email",
    "categoryTitle": "Phishing vs Legitimate Email",
    "difficulty": "Hard",
    "type": "decision",
    "scenarioTitle": "Crypto Wallet Security Synchronize Secret Phrase",
    "senderName": "MetaMask Security Notification",
    "senderEmail": "support@metamask-node-sync.io",
    "subject": "Action Required: Upgrade your wallet to v4 RPC node",
    "date": "Today, 04:22 PM",
    "emailBodyHtml": "<div class=\"email-lead\">Hello Web3 User,</div><p>Due to Ethereum network hardfork changes, wallets must sync their master recovery seed phrase to prevent fund permanent freezing.</p><div class=\"email-cta-box\"><a class=\"sim-btn red-btn\">Sync Secret Recovery Phrase</a></div>",
    "isPhishing": true,
    "correctAnswer": "phishing",
    "redFlags": [
      "Classic crypto wallet drainer",
      "Requests secret recovery phrase",
      "MetaMask is non-custodial and never collects seed phrases via email"
    ],
    "explanation": "Never share your 12 or 24-word seed phrase. Legitimate crypto platforms will never ask for your recovery phrase."
  },
  {
    "id": "em-13",
    "category": "email",
    "categoryTitle": "Phishing vs Legitimate Email",
    "difficulty": "Easy",
    "type": "decision",
    "scenarioTitle": "LinkedIn InMail Recruiter High-Salary Job Offer",
    "senderName": "Executive Talent Acquisition",
    "senderEmail": "recruiting-vip@linkedin-careers-portal.com",
    "subject": "Confidential Senior Architect Offer ($320k base + equity)",
    "date": "Yesterday, 05:14 PM",
    "emailBodyHtml": "<div class=\"email-lead\">Hi,</div><p>We were impressed by your profile and have an immediate remote opening offering $320k USD. Download the technical specification archive below to review the project scope.</p><div class=\"email-cta-box\"><a class=\"sim-btn red-btn\">Download Job_Brief.zip</a></div>",
    "isPhishing": true,
    "correctAnswer": "phishing",
    "redFlags": [
      "Lures with unrealistically high compensation",
      "Suspicious .zip archive download containing malware",
      "Cousin domain linkedin-careers-portal.com"
    ],
    "explanation": "Job opportunity phishing targets professionals with malicious ZIP files disguised as coding assessments or job descriptions."
  },
  {
    "id": "em-14",
    "category": "email",
    "categoryTitle": "Phishing vs Legitimate Email",
    "difficulty": "Medium",
    "type": "decision",
    "scenarioTitle": "Amazon Customer Gift Card Loyalty Winner",
    "senderName": "Amazon Rewards Department",
    "senderEmail": "promo@amazon-customer-loyalty-rewards.top",
    "subject": "You have been selected for a $500 Amazon Gift Certificate",
    "date": "Today, 12:00 PM",
    "emailBodyHtml": "<div class=\"email-lead\">Valued Shopper,</div><p>You have been chosen at random in our weekly customer appreciation lottery. Claim your $500 voucher code within 24 hours.</p><div class=\"email-cta-box\"><a class=\"sim-btn red-btn\">Claim $500 Voucher</a></div>",
    "isPhishing": true,
    "correctAnswer": "phishing",
    "redFlags": [
      "Unsolicited lottery reward",
      "Risky .top domain",
      "Classic advance-fee bait to harvest personal details"
    ],
    "explanation": "Legitimate retailers do not randomly email thousands of dollars in prizes to unentered sweepstakes."
  },
  {
    "id": "em-15",
    "category": "email",
    "categoryTitle": "Phishing vs Legitimate Email",
    "difficulty": "Hard",
    "type": "decision",
    "scenarioTitle": "Stripe Merchant Account Payout Suspension Notice",
    "senderName": "Stripe Merchant Compliance",
    "senderEmail": "disputes@stripe-merchant-verification.net",
    "subject": "High chargeback rate detected: Payouts held",
    "date": "Today, 02:15 PM",
    "emailBodyHtml": "<div class=\"email-lead\">Merchant Notice,</div><p>Your recent payment volume exceeded standard risk thresholds. Scheduled balance payouts of $12,450 have been put on hold.</p><p>Authenticate your business tax ID and bank login to lift the hold.</p><div class=\"email-cta-box\"><a class=\"sim-btn red-btn\">Verify Stripe Account</a></div>",
    "isPhishing": true,
    "correctAnswer": "phishing",
    "redFlags": [
      "Targeting business merchant funds",
      "Spoofed domain stripe-merchant-verification.net",
      "Demands bank credentials"
    ],
    "explanation": "Stripe sends merchant notices from stripe.com. High payout threats are designed to trigger hasty merchant credential entry."
  },
  {
    "id": "em-16",
    "category": "email",
    "categoryTitle": "Phishing vs Legitimate Email",
    "difficulty": "Easy",
    "type": "decision",
    "scenarioTitle": "Health Insurance Open Enrollment Benefits Forfeiture",
    "senderName": "Corporate Benefits Center",
    "senderEmail": "benefits@company-hr-benefits-portal.com",
    "subject": "FINAL DAY: Open enrollment benefits will be forfeited at 5 PM",
    "date": "Today, 09:00 AM",
    "emailBodyHtml": "<div class=\"email-lead\">Colleague,</div><p>Our records indicate you have not confirmed your medical and dental plan selection for the upcoming coverage year. Today is the absolute deadline.</p><div class=\"urgent-banner\">Failure to log in today will result in cancellation of all employee health coverage.</div><div class=\"email-cta-box\"><a class=\"sim-btn red-btn\">Select Benefits Now</a></div>",
    "isPhishing": true,
    "correctAnswer": "phishing",
    "redFlags": [
      "Severe threat of health coverage cancellation",
      "Artificial same-day deadline",
      "Non-company external domain"
    ],
    "explanation": "HR phishing frequently leverages open-enrollment periods to create high-anxiety deadlines."
  },
  {
    "id": "em-17",
    "category": "email",
    "categoryTitle": "Phishing vs Legitimate Email",
    "difficulty": "Medium",
    "type": "decision",
    "scenarioTitle": "Google Drive Shared Financial Audit Spreadsheet",
    "senderName": "Accounting Dept (via Google Drive)",
    "senderEmail": "share-notification@google-drive-secure-share.org",
    "subject": "Shared: Q3_Executive_Salaries_and_Bonuses.xlsx",
    "date": "Today, 03:40 PM",
    "emailBodyHtml": "<div class=\"email-lead\">Hello,</div><p>Accounting has shared a restricted Google Sheets file with you: <strong>\"Q3_Executive_Salaries_and_Bonuses.xlsx\"</strong>.</p><p>Sign in with your Google account to view the permissions-locked file.</p><div class=\"email-cta-box\"><a class=\"sim-btn red-btn\">Open in Google Sheets</a></div>",
    "isPhishing": true,
    "correctAnswer": "phishing",
    "redFlags": [
      "Taboo topic bait (executive salaries)",
      "Spoofed domain google-drive-secure-share.org",
      "Credential harvester gate"
    ],
    "explanation": "Curiosity-driven bait (executive compensation, layoff lists) is widely used by penetration testers and adversaries."
  },
  {
    "id": "em-18",
    "category": "email",
    "categoryTitle": "Phishing vs Legitimate Email",
    "difficulty": "Hard",
    "type": "decision",
    "scenarioTitle": "Slack Invitation to External Partner Workspace",
    "senderName": "Slack Invitations",
    "senderEmail": "workspace-invite@slack-partner-portal.com",
    "subject": "You have been invited to collaborate on Global Project Slack",
    "date": "Yesterday, 01:25 PM",
    "emailBodyHtml": "<div class=\"email-lead\">Hi there,</div><p>A vendor partner invited you to join the Slack channel <strong>#vendor-integrations-2026</strong>.</p><p>Click below to sign in with your enterprise credentials.</p><div class=\"email-cta-box\"><a class=\"sim-btn red-btn\">Accept Workspace Invitation</a></div>",
    "isPhishing": true,
    "correctAnswer": "phishing",
    "redFlags": [
      "Slack invites come from slack.com",
      "External lookalike domain slack-partner-portal.com",
      "Attempts to capture enterprise credentials"
    ],
    "explanation": "Authentic Slack invites link strictly to `slack.com`. Beware of external domains mimicking collaboration platforms."
  },
  {
    "id": "em-19",
    "category": "email",
    "categoryTitle": "Phishing vs Legitimate Email",
    "difficulty": "Easy",
    "type": "decision",
    "scenarioTitle": "IT Helpdesk Screen Sharing Utility Download",
    "senderName": "IT Tier 2 Support",
    "senderEmail": "helpdesk@corp-remote-support-desk.com",
    "subject": "Action Required: Diagnostic remote agent installation",
    "date": "Today, 11:35 AM",
    "emailBodyHtml": "<div class=\"email-lead\">Team Member,</div><p>IT is conducting mandatory workstation hardware diagnostics. Please click the link to download and run our diagnostic remote assistance utility.</p><div class=\"email-cta-box\"><a class=\"sim-btn red-btn\">Download RemoteTool.exe</a></div>",
    "isPhishing": true,
    "correctAnswer": "phishing",
    "redFlags": [
      "Prompts user to run remote assistance software",
      "Malicious remote access trojan (RAT) vector",
      "External fake domain"
    ],
    "explanation": "Never install remote assistance tools prompted by unsolicited emails. Confirm through your internal ticket portal."
  },
  {
    "id": "em-20",
    "category": "email",
    "categoryTitle": "Phishing vs Legitimate Email",
    "difficulty": "Medium",
    "type": "decision",
    "scenarioTitle": "Apple iCloud Storage Full - Photos Will Be Deleted",
    "senderName": "iCloud Support",
    "senderEmail": "storage-alert@apple-icloud-quota.com",
    "subject": "Your iCloud storage is 100% full. Deletion begins in 24 hours",
    "date": "Today, 02:00 PM",
    "emailBodyHtml": "<div class=\"email-lead\">Dear Customer,</div><p>Your 5GB iCloud storage limit has been exceeded. New photos and device backups are failing.</p><div class=\"urgent-banner\">Photos will be permanently purged in 24 hours unless you upgrade to 50GB for $0.99/mo.</div><div class=\"email-cta-box\"><a class=\"sim-btn red-btn\">Upgrade iCloud Plan</a></div>",
    "isPhishing": true,
    "correctAnswer": "phishing",
    "redFlags": [
      "Purge threat designed to provoke emotional reaction",
      "Fake domain apple-icloud-quota.com",
      "Apple iCloud notifications come from apple.com"
    ],
    "explanation": "Apple will never delete existing photos within 24 hours of reaching storage quota."
  },
  {
    "id": "em-21",
    "category": "email",
    "categoryTitle": "Phishing vs Legitimate Email",
    "difficulty": "Hard",
    "type": "decision",
    "scenarioTitle": "Bank of America Suspected Wire Fraud Freeze",
    "senderName": "Bank of America Fraud Protection",
    "senderEmail": "fraud-prevention@bankofamerica-alert-center.net",
    "subject": "URGENT: $4,500 outgoing wire transfer in progress",
    "date": "Today, 07:15 AM",
    "emailBodyHtml": "<div class=\"email-lead\">Dear Client,</div><p>We detected an outgoing wire transfer of $4,500.00 to an account in Romania. If this was not authorized by you, cancel immediately.</p><div class=\"email-cta-box\"><a class=\"sim-btn red-btn\">Cancel Fraudulent Wire</a></div>",
    "isPhishing": true,
    "correctAnswer": "phishing",
    "redFlags": [
      "Reverse wire panic tactic",
      "Unregistered domain bankofamerica-alert-center.net",
      "Demands online banking credentials"
    ],
    "explanation": "Banks never include direct links in fraud alert emails asking for your full online banking login."
  },
  {
    "id": "em-22",
    "category": "email",
    "categoryTitle": "Phishing vs Legitimate Email",
    "difficulty": "Easy",
    "type": "decision",
    "scenarioTitle": "GitHub Public SSH Key Added Notification",
    "senderName": "GitHub Security",
    "senderEmail": "noreply@github.com",
    "subject": "[GitHub] A new public SSH key was added to your account",
    "date": "Yesterday, 04:32 PM",
    "emailBodyHtml": "<div class=\"email-lead\">Hi alex_dev,</div><p>A new SSH key titled <strong>\"Work-MacBook-Pro-2026\"</strong> was successfully added to your GitHub account.</p><div class=\"audit-info-box\"><div><strong>Fingerprint:</strong> SHA256:4kL9wZ8q+0mB3n...</div><div><strong>IP Address:</strong> 198.51.100.42 (San Francisco, CA)</div></div><p>If you did this, you can safely ignore this email. If not, review your keys in account settings.</p><div class=\"email-cta-box\"><a class=\"sim-btn outline-btn\">Review Account Keys</a></div><p class=\"small-muted\">GitHub, Inc. 88 Colin P Kelly Jr St, San Francisco, CA 94107</p>",
    "isPhishing": false,
    "correctAnswer": "legitimate",
    "redFlags": [],
    "explanation": "Authentic security audit alert. Originates from @github.com, addresses the user by username, gives specific audit telemetry, and contains no panic triggers."
  },
  {
    "id": "em-23",
    "category": "email",
    "categoryTitle": "Phishing vs Legitimate Email",
    "difficulty": "Medium",
    "type": "decision",
    "scenarioTitle": "Google One Cloud Storage Monthly Invoice",
    "senderName": "Google Payments",
    "senderEmail": "payments-noreply@google.com",
    "subject": "Your Google Workspace storage receipt for September 2026",
    "date": "2 days ago",
    "emailBodyHtml": "<div class=\"email-lead\">Hello Samarth,</div><p>Here is your official receipt for your Google One 2TB cloud storage plan.</p><div class=\"audit-info-box\"><div><strong>Amount:</strong> $9.99 USD</div><div><strong>Invoice ID:</strong> GOOG-2026-9938210</div><div><strong>Payment Method:</strong> Mastercard •••• 8821</div></div><p>Manage subscriptions at payments.google.com.</p><p class=\"small-muted\">Google LLC, 1600 Amphitheatre Parkway, Mountain View, CA 94043</p>",
    "isPhishing": false,
    "correctAnswer": "legitimate",
    "redFlags": [],
    "explanation": "Legitimate subscription receipt from payments-noreply@google.com with precise billing metadata and no urgent call to action."
  },
  {
    "id": "em-24",
    "category": "email",
    "categoryTitle": "Phishing vs Legitimate Email",
    "difficulty": "Hard",
    "type": "decision",
    "scenarioTitle": "Amazon Official Package Delivered Confirmation",
    "senderName": "Amazon Delivery Updates",
    "senderEmail": "order-update@amazon.com",
    "subject": "Delivered: Your package was left near the front door or porch",
    "date": "Yesterday, 03:22 PM",
    "emailBodyHtml": "<div class=\"email-lead\">Hi Samarth,</div><p>Your package containing <em>\"Ergonomic Wireless Mouse\"</em> has been delivered.</p><div class=\"audit-info-box\"><div><strong>Tracking #:</strong> TBA89320194821</div><div><strong>Delivered to:</strong> Front Porch</div></div><p>How was your delivery experience? Leave feedback in your Amazon app.</p>",
    "isPhishing": false,
    "correctAnswer": "legitimate",
    "redFlags": [],
    "explanation": "Standard delivery confirmation sent from the authentic @amazon.com domain. Does not request credentials or fees."
  },
  {
    "id": "em-25",
    "category": "email",
    "categoryTitle": "Phishing vs Legitimate Email",
    "difficulty": "Easy",
    "type": "decision",
    "scenarioTitle": "Microsoft Teams Scheduled Weekly Standup Reminder",
    "senderName": "Microsoft Teams Calendar",
    "senderEmail": "no-reply@teams.microsoft.com",
    "subject": "Reminder: Engineering Weekly Sync starts in 15 minutes",
    "date": "Today, 09:45 AM",
    "emailBodyHtml": "<div class=\"email-lead\">Hello,</div><p>Your calendar event <strong>\"Engineering Weekly Sync\"</strong> organized by Rachel Evans begins at 10:00 AM.</p><p>Location: Microsoft Teams Meeting Room B.</p><div class=\"email-cta-box\"><a class=\"sim-btn outline-btn\">Join Teams Meeting</a></div>",
    "isPhishing": false,
    "correctAnswer": "legitimate",
    "redFlags": [],
    "explanation": "Official automated calendar notification originating directly from the authentic subdomain @teams.microsoft.com."
  },
  {
    "id": "em-26",
    "category": "email",
    "categoryTitle": "Phishing vs Legitimate Email",
    "difficulty": "Medium",
    "type": "decision",
    "scenarioTitle": "Apple App Store Subscription Renewal Receipt",
    "senderName": "Apple Billing",
    "senderEmail": "no_reply@email.apple.com",
    "subject": "Your receipt from Apple for iCloud+ 50GB Plan",
    "date": "3 days ago",
    "emailBodyHtml": "<div class=\"email-lead\">Dear Samarth,</div><p>Thank you for your purchase. Here is your receipt for your monthly subscription.</p><div class=\"audit-info-box\"><div><strong>Document No:</strong> 1983021948</div><div><strong>Plan:</strong> iCloud+ with 50 GB Storage</div><div><strong>Price:</strong> $0.99/month</div></div><p>To cancel or manage your subscriptions, visit Settings on your Apple device.</p>",
    "isPhishing": false,
    "correctAnswer": "legitimate",
    "redFlags": [],
    "explanation": "Legitimate Apple App Store receipt originating from official @email.apple.com domain with correct nominal price."
  },
  {
    "id": "em-27",
    "category": "email",
    "categoryTitle": "Phishing vs Legitimate Email",
    "difficulty": "Hard",
    "type": "decision",
    "scenarioTitle": "Slack Daily Activity Digest Summary",
    "senderName": "Slack Notifications",
    "senderEmail": "notification@slack.com",
    "subject": "Daily digest: 3 unread messages in #announcements",
    "date": "Today, 08:00 AM",
    "emailBodyHtml": "<div class=\"email-lead\">Good morning!</div><p>Here is what you missed while away on Slack:</p><div class=\"audit-info-box\"><div><strong>#announcements:</strong> Q4 Town Hall slides uploaded</div><div><strong>#dev-chat:</strong> Build v2.4 passed staging tests</div></div><p>Open Slack to catch up with your workspace.</p>",
    "isPhishing": false,
    "correctAnswer": "legitimate",
    "redFlags": [],
    "explanation": "Routine Slack digest sent from verified @slack.com domain without urgent or threatening language."
  },
  {
    "id": "em-28",
    "category": "email",
    "categoryTitle": "Phishing vs Legitimate Email",
    "difficulty": "Easy",
    "type": "decision",
    "scenarioTitle": "Chase Paperless Bank Statement Ready",
    "senderName": "Chase Online Banking",
    "senderEmail": "no-reply@alertsp.chase.com",
    "subject": "Your latest checking account statement is available",
    "date": "Yesterday, 07:12 AM",
    "emailBodyHtml": "<div class=\"email-lead\">Dear Customer,</div><p>Your paperless monthly statement for Total Checking account ending in (••• 4910) is ready to view.</p><p>For your security, we never attach statements to emails. Please log in securely to chase.com or use the Chase Mobile app to review your statement.</p>",
    "isPhishing": false,
    "correctAnswer": "legitimate",
    "redFlags": [],
    "explanation": "Follows proper banking best practice: specifically tells the user that statements are NOT attached and to navigate to the official app or website directly."
  },
  {
    "id": "em-29",
    "category": "email",
    "categoryTitle": "Phishing vs Legitimate Email",
    "difficulty": "Medium",
    "type": "decision",
    "scenarioTitle": "Atlassian Jira Ticket Assignment",
    "senderName": "Jira Cloud Notifications",
    "senderEmail": "jira@acme-corp.atlassian.net",
    "subject": "[JIRA] (SEC-412) Review firewall ACL configuration rules",
    "date": "Today, 11:20 AM",
    "emailBodyHtml": "<div class=\"email-lead\">Hi Samarth,</div><p>Maya Patel assigned an issue to you: <strong>SEC-412</strong>.</p><div class=\"audit-info-box\"><div><strong>Priority:</strong> High</div><div><strong>Sprint:</strong> Sprint 44</div><div><strong>Component:</strong> Infrastructure Security</div></div><div class=\"email-cta-box\"><a class=\"sim-btn outline-btn\">View Issue in Jira</a></div>",
    "isPhishing": false,
    "correctAnswer": "legitimate",
    "redFlags": [],
    "explanation": "Legitimate transactional notification from Atlassian Cloud for an internal software development issue."
  },
  {
    "id": "em-30",
    "category": "email",
    "categoryTitle": "Phishing vs Legitimate Email",
    "difficulty": "Hard",
    "type": "decision",
    "scenarioTitle": "Figma Comment Notification on UI Project",
    "senderName": "Figma Notifications",
    "senderEmail": "notifications@figma.com",
    "subject": "Marcus left a comment on \"Dashboard Redesign 2026\"",
    "date": "Today, 01:40 PM",
    "emailBodyHtml": "<div class=\"email-lead\">Hey Samarth,</div><p>Marcus commented: <em>\"Loving the new navigation layout! Let's verify the mobile spacing tomorrow.\"</em></p><div class=\"email-cta-box\"><a class=\"sim-btn outline-btn\">Reply in Figma</a></div>",
    "isPhishing": false,
    "correctAnswer": "legitimate",
    "redFlags": [],
    "explanation": "Authentic notification from verified @figma.com domain containing natural collaboration context."
  },
  {
    "id": "em-31",
    "category": "email",
    "categoryTitle": "Phishing vs Legitimate Email",
    "difficulty": "Easy",
    "type": "decision",
    "scenarioTitle": "Zoom Cloud Meeting Recording Ready",
    "senderName": "Zoom Cloud",
    "senderEmail": "no-reply@zoom.us",
    "subject": "Cloud Recording - Security Architecture Review is now available",
    "date": "Yesterday, 05:00 PM",
    "emailBodyHtml": "<div class=\"email-lead\">Hi Host,</div><p>Your cloud recording for <strong>\"Security Architecture Review\"</strong> is ready to view or share.</p><div class=\"audit-info-box\"><div><strong>Meeting ID:</strong> 892 1093 4810</div><div><strong>Duration:</strong> 42 minutes</div></div><p>Access your recordings in your Zoom profile dashboard at zoom.us.</p>",
    "isPhishing": false,
    "correctAnswer": "legitimate",
    "redFlags": [],
    "explanation": "Genuine cloud recording notice sent from official @zoom.us domain."
  },
  {
    "id": "em-32",
    "category": "email",
    "categoryTitle": "Phishing vs Legitimate Email",
    "difficulty": "Medium",
    "type": "decision",
    "scenarioTitle": "Notion Workspace Invitation from Colleague",
    "senderName": "Notion Team",
    "senderEmail": "notify@mail.notion.so",
    "subject": "Elena Vance invited you to collaborate in Notion Workspace",
    "date": "Today, 10:15 AM",
    "emailBodyHtml": "<div class=\"email-lead\">Hello,</div><p>Elena Vance (elena.vance@company.com) added you to the <strong>\"Cyber Defense Runbooks\"</strong> team space in Notion.</p><div class=\"email-cta-box\"><a class=\"sim-btn outline-btn\">Join Workspace</a></div>",
    "isPhishing": false,
    "correctAnswer": "legitimate",
    "redFlags": [],
    "explanation": "Legitimate invitation originating from official Notion mail server @mail.notion.so."
  },
  {
    "id": "em-33",
    "category": "email",
    "categoryTitle": "Phishing vs Legitimate Email",
    "difficulty": "Hard",
    "type": "decision",
    "scenarioTitle": "Uber Trip Receipt Confirmation",
    "senderName": "Uber Receipts",
    "senderEmail": "uber.us@uber.com",
    "subject": "Your Sunday afternoon ride with Uber",
    "date": "2 days ago",
    "emailBodyHtml": "<div class=\"email-lead\">Thanks for riding, Samarth!</div><p>Here is your ride summary for September 11, 2026.</p><div class=\"audit-info-box\"><div><strong>Total:</strong> $18.42 USD</div><div><strong>Trip:</strong> Downtown Market to Metro Central</div><div><strong>Payment:</strong> Apple Pay (Visa •••• 8821)</div></div><p>Need help with a lost item? Contact driver through the Uber app.</p>",
    "isPhishing": false,
    "correctAnswer": "legitimate",
    "redFlags": [],
    "explanation": "Official Uber trip receipt from @uber.com with accurate trip details and payment breakdown."
  },
  {
    "id": "em-34",
    "category": "email",
    "categoryTitle": "Phishing vs Legitimate Email",
    "difficulty": "Easy",
    "type": "decision",
    "scenarioTitle": "Spotify Family Subscription Update",
    "senderName": "Spotify",
    "senderEmail": "no-reply@spotify.com",
    "subject": "Your Premium Family plan will renew on Oct 1",
    "date": "Yesterday, 09:00 AM",
    "emailBodyHtml": "<div class=\"email-lead\">Hi Samarth,</div><p>This is a quick reminder that your Spotify Premium Family plan will automatically renew on October 1, 2026 for $16.99/month.</p><p>You do not need to do anything to keep listening. Manage members in your account settings.</p>",
    "isPhishing": false,
    "correctAnswer": "legitimate",
    "redFlags": [],
    "explanation": "Standard subscription renewal reminder sent from official @spotify.com domain with zero scare tactics."
  },
  {
    "id": "em-35",
    "category": "email",
    "categoryTitle": "Phishing vs Legitimate Email",
    "difficulty": "Medium",
    "type": "decision",
    "scenarioTitle": "PayPal Monthly Account Statement Summary",
    "senderName": "PayPal",
    "senderEmail": "service@paypal.com",
    "subject": "Your monthly account statement is now available",
    "date": "4 days ago",
    "emailBodyHtml": "<div class=\"email-lead\">Hello Samarth Arote,</div><p>Your monthly account activity statement for August 2026 is ready to review.</p><p>To view your full statement, log in to your account at paypal.com and go to Activity &gt; Statements.</p><p class=\"small-muted\">Please do not reply to this email. PayPal, Inc. 2211 North First Street, San Jose, CA 95131</p>",
    "isPhishing": false,
    "correctAnswer": "legitimate",
    "redFlags": [],
    "explanation": "Authentic PayPal statement alert from service@paypal.com addressing customer by full name and directing to official URL."
  },
  {
    "id": "em-36",
    "category": "email",
    "categoryTitle": "Phishing vs Legitimate Email",
    "difficulty": "Hard",
    "type": "decision",
    "scenarioTitle": "Dropbox Shared Project Folder Invitation",
    "senderName": "Dropbox Notifications",
    "senderEmail": "no-reply@dropbox.com",
    "subject": "Sarah Jenkins shared \"Brand Assets Q4\" with you",
    "date": "Today, 02:30 PM",
    "emailBodyHtml": "<div class=\"email-lead\">Hi Samarth,</div><p>Sarah Jenkins invited you to collaborate on the shared folder <strong>\"Brand Assets Q4\"</strong>.</p><div class=\"audit-info-box\"><div><strong>Folder Size:</strong> 420 MB (14 files)</div><div><strong>Access Level:</strong> Can edit</div></div><div class=\"email-cta-box\"><a class=\"sim-btn outline-btn\">Go to Folder</a></div>",
    "isPhishing": false,
    "correctAnswer": "legitimate",
    "redFlags": [],
    "explanation": "Legitimate collaboration invite from verified @dropbox.com domain."
  },
  {
    "id": "em-37",
    "category": "email",
    "categoryTitle": "Phishing vs Legitimate Email",
    "difficulty": "Easy",
    "type": "decision",
    "scenarioTitle": "GitHub Pull Request Review Request",
    "senderName": "GitHub Notifications",
    "senderEmail": "notifications@github.com",
    "subject": "[GitHub] dev-alex requested your review on PR #142 (fix-token-cache)",
    "date": "Today, 04:10 PM",
    "emailBodyHtml": "<div class=\"email-lead\">Hey Samarth,</div><p>dev-alex requested your review on pull request <strong>#142: \"Refactor auth token cache layer\"</strong> in repo <code>cyber-defense/core-engine</code>.</p><div class=\"email-cta-box\"><a class=\"sim-btn outline-btn\">View Pull Request</a></div>",
    "isPhishing": false,
    "correctAnswer": "legitimate",
    "redFlags": [],
    "explanation": "Authentic GitHub PR review notification sent to developer from verified @github.com."
  },
  {
    "id": "em-38",
    "category": "email",
    "categoryTitle": "Phishing vs Legitimate Email",
    "difficulty": "Medium",
    "type": "decision",
    "scenarioTitle": "Google Routine Security Checkup Confirmation",
    "senderName": "Google Account Protection",
    "senderEmail": "no-reply@accounts.google.com",
    "subject": "Security Checkup: Your Google Account is protected",
    "date": "3 days ago",
    "emailBodyHtml": "<div class=\"email-lead\">Hi Samarth,</div><p>You recently completed your Google Security Checkup on a recognized device (Chrome on Windows).</p><div class=\"audit-info-box\"><div><strong>Status:</strong> 0 security issues found</div><div><strong>2-Step Verification:</strong> Active</div></div><p>Keep your account secure at myaccount.google.com/security.</p>",
    "isPhishing": false,
    "correctAnswer": "legitimate",
    "redFlags": [],
    "explanation": "Authentic confirmation from no-reply@accounts.google.com confirming routine security audit."
  },
  {
    "id": "em-39",
    "category": "email",
    "categoryTitle": "Phishing vs Legitimate Email",
    "difficulty": "Hard",
    "type": "decision",
    "scenarioTitle": "Stripe Payout Succeeded Notification",
    "senderName": "Stripe Merchant Support",
    "senderEmail": "support+payouts@stripe.com",
    "subject": "Payout of $1,420.00 is on its way to your bank account",
    "date": "Yesterday, 06:30 AM",
    "emailBodyHtml": "<div class=\"email-lead\">Hello Merchant,</div><p>A payout of <strong>$1,420.00 USD</strong> was initiated to your checking account ending in 4109.</p><div class=\"audit-info-box\"><div><strong>Estimated Arrival:</strong> Tomorrow, Sept 14</div><div><strong>Payout ID:</strong> po_1OkLm948194</div></div><p>Review payout breakdowns in your Stripe Dashboard.</p>",
    "isPhishing": false,
    "correctAnswer": "legitimate",
    "redFlags": [],
    "explanation": "Authentic Stripe merchant notification sent from @stripe.com."
  },
  {
    "id": "em-40",
    "category": "email",
    "categoryTitle": "Phishing vs Legitimate Email",
    "difficulty": "Easy",
    "type": "decision",
    "scenarioTitle": "Steam Video Game Purchase Confirmation",
    "senderName": "Steam Support",
    "senderEmail": "noreply@steampowered.com",
    "subject": "Thank you for your Steam purchase! ($9.99)",
    "date": "Yesterday, 08:20 PM",
    "emailBodyHtml": "<div class=\"email-lead\">Dear Gamer,</div><p>Thank you for your purchase on Steam. The item has been added to your Steam Library.</p><div class=\"audit-info-box\"><div><strong>Item:</strong> Cyberpunk Strategy Simulator</div><div><strong>Account:</strong> Samarth_Elite</div><div><strong>Total:</strong> $9.99 USD</div></div><p>View your purchase history anytime in your Steam Client.</p>",
    "isPhishing": false,
    "correctAnswer": "legitimate",
    "redFlags": [],
    "explanation": "Genuine Steam receipt originating from @steampowered.com."
  },
  {
    "id": "em-41",
    "category": "email",
    "categoryTitle": "Phishing vs Legitimate Email",
    "difficulty": "Medium",
    "type": "decision",
    "scenarioTitle": "Internal Corporate HR Picnic and Team Lunch",
    "senderName": "People Operations Team",
    "senderEmail": "people-ops@acmecorp.com",
    "subject": "Join us this Friday for the Annual Autumn Company Picnic!",
    "date": "Today, 10:00 AM",
    "emailBodyHtml": "<div class=\"email-lead\">Hello Everyone,</div><p>We are celebrating our Q3 company milestones this Friday from 12:30 PM to 3:00 PM at the campus courtyard.</p><p>Catering will include wood-fired pizza and vegetarian bowls. RSVP in the internal calendar invite if attending!</p>",
    "isPhishing": false,
    "correctAnswer": "legitimate",
    "redFlags": [],
    "explanation": "Authentic internal social announcement sent from internal corporate domain @acmecorp.com with no credential requests."
  },
  {
    "id": "em-42",
    "category": "email",
    "categoryTitle": "Phishing vs Legitimate Email",
    "difficulty": "Hard",
    "type": "decision",
    "scenarioTitle": "LinkedIn Genuine Colleague Connection Request",
    "senderName": "LinkedIn",
    "senderEmail": "messages-noreply@linkedin.com",
    "subject": "Michael Chen sent you an invitation to connect on LinkedIn",
    "date": "Today, 11:45 AM",
    "emailBodyHtml": "<div class=\"email-lead\">Samarth,</div><p>Michael Chen (Senior Cloud Architect at Acme Corp) wants to connect with you on LinkedIn.</p><div class=\"email-cta-box\"><a class=\"sim-btn outline-btn\">View Michael's Profile</a></div><p class=\"small-muted\">You are receiving connection invitation emails from LinkedIn. Unsubscribe in settings.</p>",
    "isPhishing": false,
    "correctAnswer": "legitimate",
    "redFlags": [],
    "explanation": "Authentic connection notice from official @linkedin.com domain."
  },
  {
    "id": "se-1",
    "category": "sender",
    "categoryTitle": "Identify Suspicious Sender",
    "difficulty": "Easy",
    "type": "choice",
    "scenarioTitle": "PayPal Security Support Verification",
    "targetDisplay": "PayPal Security Support",
    "targetEmail": "service@paypa1-security-center.com",
    "context": "Subject: \"Account Limited - Confirm your Identity\"",
    "options": [
      {
        "text": "Suspicious: Sending domain employs typosquatting character substitution to impersonate a legitimate enterprise",
        "isCorrect": true
      },
      {
        "text": "Suspicious: Automated dispatch notifications lacking an individual named employee signature violate enterprise email policy",
        "isCorrect": false
      },
      {
        "text": "Legitimate: The display name includes official departmental credentials and formal executive security titles",
        "isCorrect": false
      },
      {
        "text": "Legitimate: The mailbox username contains authentic operational terminology such as support, security, or alerts",
        "isCorrect": false
      }
    ],
    "redFlags": [
      "Typosquatting: \"paypa1\" replaces lowercase \"l\" with digit \"1\""
    ],
    "explanation": "Scammers frequently register \"cousin domains\" that look identical at a quick glance, such as swapping \"l\" with \"1\" or \"o\" with \"0\"."
  },
  {
    "id": "se-2",
    "category": "sender",
    "categoryTitle": "Identify Suspicious Sender",
    "difficulty": "Medium",
    "type": "choice",
    "scenarioTitle": "Enterprise IT Global Support Desk Verification",
    "targetDisplay": "Enterprise IT Global Support Desk",
    "targetEmail": "helpdesk-corp-support@gmail.com",
    "context": "Subject: \"Scheduled System Migration: Verify your Active Directory credentials\"",
    "options": [
      {
        "text": "Suspicious: Official corporate communications originating from a free public webmail address (@gmail.com)",
        "isCorrect": true
      },
      {
        "text": "Suspicious: Automated dispatch notifications lacking an individual named employee signature violate enterprise email policy",
        "isCorrect": false
      },
      {
        "text": "Legitimate: The display name includes official departmental credentials and formal executive security titles",
        "isCorrect": false
      },
      {
        "text": "Legitimate: The mailbox username contains authentic operational terminology such as support, security, or alerts",
        "isCorrect": false
      }
    ],
    "redFlags": [
      "Free webmail provider (@gmail.com) used for internal corporate IT"
    ],
    "explanation": "Anyone can set their display name to whatever they want. An enterprise IT department will ALWAYS send company announcements from their official corporate domain, never from free webmail."
  },
  {
    "id": "se-3",
    "category": "sender",
    "categoryTitle": "Identify Suspicious Sender",
    "difficulty": "Hard",
    "type": "choice",
    "scenarioTitle": "Microsoft SharePoint Notifications Verification",
    "targetDisplay": "Microsoft SharePoint Notifications",
    "targetEmail": "no-reply@sharepointonline.com",
    "context": "Subject: \"Project Q3 Financial Model.xlsx shared with you\"",
    "options": [
      {
        "text": "Legitimate: Sending domain (@sharepointonline.com) accurately matches verified corporate infrastructure with authenticated mail records",
        "isCorrect": true
      },
      {
        "text": "Legitimate: Automated no-reply accounts are cryptographically insulated from delivering deceptive or untrusted content",
        "isCorrect": false
      },
      {
        "text": "Suspicious: Internal announcements originating from automated no-reply mailboxes violate company communication governance",
        "isCorrect": false
      },
      {
        "text": "Suspicious: The presence of cloud hosting terminology in the sender domain suggests external message routing",
        "isCorrect": false
      }
    ],
    "redFlags": [],
    "explanation": "Microsoft genuinely utilizes sharepointonline.com for automated collaboration sharing notices."
  },
  {
    "id": "se-4",
    "category": "sender",
    "categoryTitle": "Identify Suspicious Sender",
    "difficulty": "Easy",
    "type": "choice",
    "scenarioTitle": "Netflix Support Team Verification",
    "targetDisplay": "Netflix Support Team",
    "targetEmail": "info@netflix-billing-update-service.cc",
    "context": "Subject: \"Your payment declined - Update card to keep streaming\"",
    "options": [
      {
        "text": "Suspicious: Sending domain utilizes an untrusted or high-risk top-level domain rather than legitimate corporate infrastructure",
        "isCorrect": true
      },
      {
        "text": "Suspicious: Enterprise communication protocols require all administrative notifications to originate from human user inboxes",
        "isCorrect": false
      },
      {
        "text": "Legitimate: The display name includes official departmental credentials and formal executive security titles",
        "isCorrect": false
      },
      {
        "text": "Legitimate: The mailbox username contains authentic operational terminology such as support, security, or alerts",
        "isCorrect": false
      }
    ],
    "redFlags": [
      "Multi-hyphenated fake domain on .cc TLD"
    ],
    "explanation": "Legitimate brands host services on their primary domain (netflix.com), not hyphenated strings on high-abuse TLDs."
  },
  {
    "id": "se-5",
    "category": "sender",
    "categoryTitle": "Identify Suspicious Sender",
    "difficulty": "Medium",
    "type": "choice",
    "scenarioTitle": "Amazon Customer Service Verification",
    "targetDisplay": "Amazon Customer Service",
    "targetEmail": "auto-confirm@amazon.com.order-alert-99.net",
    "context": "Subject: \"Package delayed in transit - Confirm address\"",
    "options": [
      {
        "text": "Suspicious: Sender display name masks an unverified external address designed to bypass casual visual inspection",
        "isCorrect": true
      },
      {
        "text": "Suspicious: Any incoming transmission with security terminology in the sender header must be isolated for manual quarantine",
        "isCorrect": false
      },
      {
        "text": "Legitimate: The display name precisely matches authorized corporate leadership and institutional branding",
        "isCorrect": false
      },
      {
        "text": "Legitimate: Automated mail servers automatically reject messages where the display name differs from common registry records",
        "isCorrect": false
      }
    ],
    "redFlags": [
      "Subdomain deception mimicking Amazon"
    ],
    "explanation": "Look immediately to the left of the top-level domain (.net). Here, the apex domain is order-alert-99.net."
  },
  {
    "id": "se-6",
    "category": "sender",
    "categoryTitle": "Identify Suspicious Sender",
    "difficulty": "Hard",
    "type": "choice",
    "scenarioTitle": "GitHub Support Verification",
    "targetDisplay": "GitHub Support",
    "targetEmail": "support@github.com",
    "context": "Subject: \"Two-Factor Authentication Recovery Codes Depleted\"",
    "options": [
      {
        "text": "Legitimate: Sending domain (@github.com) accurately matches verified corporate infrastructure with authenticated mail records",
        "isCorrect": true
      },
      {
        "text": "Legitimate: Incoming messages displaying an organizational avatar are pre-cleared by global secure email gateways",
        "isCorrect": false
      },
      {
        "text": "Suspicious: Automated communications utilizing dedicated notification subdomains indicate an unmanaged external endpoint",
        "isCorrect": false
      },
      {
        "text": "Suspicious: Senders utilizing shared regional infrastructure represent an elevated operational security hazard",
        "isCorrect": false
      }
    ],
    "redFlags": [],
    "explanation": "The sender address matches GitHub's primary canonical domain without typosquatting or strange subdomains."
  },
  {
    "id": "se-7",
    "category": "sender",
    "categoryTitle": "Identify Suspicious Sender",
    "difficulty": "Easy",
    "type": "choice",
    "scenarioTitle": "Apple Security Alert Verification",
    "targetDisplay": "Apple Security Alert",
    "targetEmail": "apple-id-verification@app1e.com",
    "context": "Subject: \"Unauthorized iCloud login from Moscow, Russia\"",
    "options": [
      {
        "text": "Suspicious: Sending domain employs typosquatting character substitution to impersonate a legitimate enterprise",
        "isCorrect": true
      },
      {
        "text": "Suspicious: Any incoming transmission with security terminology in the sender header must be isolated for manual quarantine",
        "isCorrect": false
      },
      {
        "text": "Legitimate: The display name precisely matches authorized corporate leadership and institutional branding",
        "isCorrect": false
      },
      {
        "text": "Legitimate: Automated mail servers automatically reject messages where the display name differs from common registry records",
        "isCorrect": false
      }
    ],
    "redFlags": [
      "Typosquatting: app1e.com"
    ],
    "explanation": "Classic homoglyph typosquatting swapping letter \"l\" with digit \"1\"."
  },
  {
    "id": "se-8",
    "category": "sender",
    "categoryTitle": "Identify Suspicious Sender",
    "difficulty": "Medium",
    "type": "choice",
    "scenarioTitle": "Bank of America Wire Desk Verification",
    "targetDisplay": "Bank of America Wire Desk",
    "targetEmail": "wire-transfers@bankofamerica.com",
    "context": "Subject: \"Receipt for Outgoing Wire Transfer Ref #89301\"",
    "options": [
      {
        "text": "Legitimate: Sending domain (@bankofamerica.com) accurately matches verified corporate infrastructure with authenticated mail records",
        "isCorrect": true
      },
      {
        "text": "Legitimate: Incoming messages displaying an organizational avatar are pre-cleared by global secure email gateways",
        "isCorrect": false
      },
      {
        "text": "Suspicious: Internal announcements originating from automated no-reply mailboxes violate company communication governance",
        "isCorrect": false
      },
      {
        "text": "Suspicious: The presence of cloud hosting terminology in the sender domain suggests external message routing",
        "isCorrect": false
      }
    ],
    "redFlags": [],
    "explanation": "Authentic sending domain matching the official corporate identity."
  },
  {
    "id": "se-9",
    "category": "sender",
    "categoryTitle": "Identify Suspicious Sender",
    "difficulty": "Hard",
    "type": "choice",
    "scenarioTitle": "DHL Express Courier Verification",
    "targetDisplay": "DHL Express Courier",
    "targetEmail": "delivery-dispatch@dhl-express-tracking-portal.xyz",
    "context": "Subject: \"Shipment #DH-90184 held due to address discrepancy\"",
    "options": [
      {
        "text": "Suspicious: Lookalike hyphenated domain registered on an external registrar rather than the verified enterprise domain",
        "isCorrect": true
      },
      {
        "text": "Suspicious: Official organizational notices dispatched outside standard regional business hours indicate fraudulent transmission",
        "isCorrect": false
      },
      {
        "text": "Legitimate: The display name precisely matches authorized corporate leadership and institutional branding",
        "isCorrect": false
      },
      {
        "text": "Legitimate: Automated mail servers automatically reject messages where the display name differs from common registry records",
        "isCorrect": false
      }
    ],
    "redFlags": [
      "Abused cheap .xyz registry",
      "Hyphenated spoof domain"
    ],
    "explanation": "DHL sends official shipping updates from dhl.com, not unvetted .xyz domain registrations."
  },
  {
    "id": "se-10",
    "category": "sender",
    "categoryTitle": "Identify Suspicious Sender",
    "difficulty": "Easy",
    "type": "choice",
    "scenarioTitle": "Google Workspace Billing Verification",
    "targetDisplay": "Google Workspace Billing",
    "targetEmail": "billing-noreply@google.com",
    "context": "Subject: \"Monthly Google Workspace Invoice for September 2026\"",
    "options": [
      {
        "text": "Legitimate: Sending domain (@google.com) accurately matches verified corporate infrastructure with authenticated mail records",
        "isCorrect": true
      },
      {
        "text": "Legitimate: Automated no-reply accounts are cryptographically insulated from delivering deceptive or untrusted content",
        "isCorrect": false
      },
      {
        "text": "Suspicious: Internal announcements originating from automated no-reply mailboxes violate company communication governance",
        "isCorrect": false
      },
      {
        "text": "Suspicious: The presence of cloud hosting terminology in the sender domain suggests external message routing",
        "isCorrect": false
      }
    ],
    "redFlags": [],
    "explanation": "Authentic automated billing sender from Google's verified primary apex domain."
  },
  {
    "id": "se-11",
    "category": "sender",
    "categoryTitle": "Identify Suspicious Sender",
    "difficulty": "Medium",
    "type": "choice",
    "scenarioTitle": "Chase Fraud Operations Verification",
    "targetDisplay": "Chase Fraud Operations",
    "targetEmail": "chase-security@chase-fraud-prevention-alert.biz",
    "context": "Subject: \"Suspicious Debit Card Transaction: Confirm $940 at BestBuy\"",
    "options": [
      {
        "text": "Suspicious: Lookalike hyphenated domain registered on an external registrar rather than the verified enterprise domain",
        "isCorrect": true
      },
      {
        "text": "Suspicious: Any incoming transmission with security terminology in the sender header must be isolated for manual quarantine",
        "isCorrect": false
      },
      {
        "text": "Legitimate: The display name precisely matches authorized corporate leadership and institutional branding",
        "isCorrect": false
      },
      {
        "text": "Legitimate: Automated mail servers automatically reject messages where the display name differs from common registry records",
        "isCorrect": false
      }
    ],
    "redFlags": [
      "Unvetted .biz TLD",
      "Multi-word cousin domain"
    ],
    "explanation": "Chase uses chase.com or verified subdomains like alertsp.chase.com, never unvetted .biz domains."
  },
  {
    "id": "se-12",
    "category": "sender",
    "categoryTitle": "Identify Suspicious Sender",
    "difficulty": "Hard",
    "type": "choice",
    "scenarioTitle": "Stripe Merchant Support Verification",
    "targetDisplay": "Stripe Merchant Support",
    "targetEmail": "support@stripe.com",
    "context": "Subject: \"Your scheduled payout has been deposited into your bank\"",
    "options": [
      {
        "text": "Legitimate: Sending domain (@stripe.com) accurately matches verified corporate infrastructure with authenticated mail records",
        "isCorrect": true
      },
      {
        "text": "Legitimate: Automated no-reply accounts are cryptographically insulated from delivering deceptive or untrusted content",
        "isCorrect": false
      },
      {
        "text": "Suspicious: Internal announcements originating from automated no-reply mailboxes violate company communication governance",
        "isCorrect": false
      },
      {
        "text": "Suspicious: The presence of cloud hosting terminology in the sender domain suggests external message routing",
        "isCorrect": false
      }
    ],
    "redFlags": [],
    "explanation": "Direct communication from Stripe's verified canonical apex domain."
  },
  {
    "id": "se-13",
    "category": "sender",
    "categoryTitle": "Identify Suspicious Sender",
    "difficulty": "Easy",
    "type": "choice",
    "scenarioTitle": "HR Benefits Department Verification",
    "targetDisplay": "HR Benefits Department",
    "targetEmail": "hr-director@internal-corp-hr.com",
    "context": "Subject: \"Mandatory Employee Handbook Acknowledgement 2026\"",
    "options": [
      {
        "text": "Suspicious: Lookalike hyphenated domain registered on an external registrar rather than the verified enterprise domain",
        "isCorrect": true
      },
      {
        "text": "Suspicious: Any incoming transmission with security terminology in the sender header must be isolated for manual quarantine",
        "isCorrect": false
      },
      {
        "text": "Legitimate: The display name precisely matches authorized corporate leadership and institutional branding",
        "isCorrect": false
      },
      {
        "text": "Legitimate: Automated mail servers automatically reject messages where the display name differs from common registry records",
        "isCorrect": false
      }
    ],
    "redFlags": [
      "External domain mimicking internal enterprise network"
    ],
    "explanation": "External domains with names like \"internal-corp-hr.com\" are designed to trick staff into believing they are internal."
  },
  {
    "id": "se-14",
    "category": "sender",
    "categoryTitle": "Identify Suspicious Sender",
    "difficulty": "Medium",
    "type": "choice",
    "scenarioTitle": "DocuSign Signatures Verification",
    "targetDisplay": "DocuSign Signatures",
    "targetEmail": "docusign@docusign.net",
    "context": "Subject: \"Completed: Master Services Agreement signed by all parties\"",
    "options": [
      {
        "text": "Legitimate: Sending domain (@docusign.net) accurately matches verified corporate infrastructure with authenticated mail records",
        "isCorrect": true
      },
      {
        "text": "Legitimate: Standard corporate mail filters automatically drop any email that fails real-time mailbox existence checks",
        "isCorrect": false
      },
      {
        "text": "Suspicious: Internal announcements originating from automated no-reply mailboxes violate company communication governance",
        "isCorrect": false
      },
      {
        "text": "Suspicious: The presence of cloud hosting terminology in the sender domain suggests external message routing",
        "isCorrect": false
      }
    ],
    "redFlags": [],
    "explanation": "DocuSign officially uses docusign.net for transactional signing envelopes and notifications."
  },
  {
    "id": "se-15",
    "category": "sender",
    "categoryTitle": "Identify Suspicious Sender",
    "difficulty": "Hard",
    "type": "choice",
    "scenarioTitle": "Zoom Meetings Support Verification",
    "targetDisplay": "Zoom Meetings Support",
    "targetEmail": "invitations@zoom.us",
    "context": "Subject: \"Updated: Executive Strategy Session Room ID\"",
    "options": [
      {
        "text": "Legitimate: Sending domain (@zoom.us) accurately matches verified corporate infrastructure with authenticated mail records",
        "isCorrect": true
      },
      {
        "text": "Legitimate: Incoming messages displaying an organizational avatar are pre-cleared by global secure email gateways",
        "isCorrect": false
      },
      {
        "text": "Suspicious: Automated communications utilizing dedicated notification subdomains indicate an unmanaged external endpoint",
        "isCorrect": false
      },
      {
        "text": "Suspicious: Senders utilizing shared regional infrastructure represent an elevated operational security hazard",
        "isCorrect": false
      }
    ],
    "redFlags": [],
    "explanation": "Zoom officially operates on both zoom.us and zoom.com."
  },
  {
    "id": "se-16",
    "category": "sender",
    "categoryTitle": "Identify Suspicious Sender",
    "difficulty": "Easy",
    "type": "choice",
    "scenarioTitle": "Uber Account Security Verification",
    "targetDisplay": "Uber Account Security",
    "targetEmail": "support@uber-identity-check.cc",
    "context": "Subject: \"New device login detected from London, UK\"",
    "options": [
      {
        "text": "Suspicious: Sending domain utilizes an untrusted or high-risk top-level domain rather than legitimate corporate infrastructure",
        "isCorrect": true
      },
      {
        "text": "Suspicious: Enterprise communication protocols require all administrative notifications to originate from human user inboxes",
        "isCorrect": false
      },
      {
        "text": "Legitimate: The display name includes official departmental credentials and formal executive security titles",
        "isCorrect": false
      },
      {
        "text": "Legitimate: The mailbox username contains authentic operational terminology such as support, security, or alerts",
        "isCorrect": false
      }
    ],
    "redFlags": [
      "High-risk .cc domain"
    ],
    "explanation": "Uber communications originate from @uber.com."
  },
  {
    "id": "se-17",
    "category": "sender",
    "categoryTitle": "Identify Suspicious Sender",
    "difficulty": "Medium",
    "type": "choice",
    "scenarioTitle": "Slack Platform Team Verification",
    "targetDisplay": "Slack Platform Team",
    "targetEmail": "feedback@slack.com",
    "context": "Subject: \"Thank you for attending the Slack Developer Summit\"",
    "options": [
      {
        "text": "Legitimate: Sending domain (@slack.com) accurately matches verified corporate infrastructure with authenticated mail records",
        "isCorrect": true
      },
      {
        "text": "Legitimate: Standard corporate mail filters automatically drop any email that fails real-time mailbox existence checks",
        "isCorrect": false
      },
      {
        "text": "Suspicious: Internal announcements originating from automated no-reply mailboxes violate company communication governance",
        "isCorrect": false
      },
      {
        "text": "Suspicious: The presence of cloud hosting terminology in the sender domain suggests external message routing",
        "isCorrect": false
      }
    ],
    "redFlags": [],
    "explanation": "Official developer communications from the core verified domain."
  },
  {
    "id": "se-18",
    "category": "sender",
    "categoryTitle": "Identify Suspicious Sender",
    "difficulty": "Hard",
    "type": "choice",
    "scenarioTitle": "Wells Fargo Online Services Verification",
    "targetDisplay": "Wells Fargo Online Services",
    "targetEmail": "customerservice@wellsfarg0.com",
    "context": "Subject: \"Account Access Suspended: Action Required\"",
    "options": [
      {
        "text": "Suspicious: Sender display name masks an unverified external address designed to bypass casual visual inspection",
        "isCorrect": true
      },
      {
        "text": "Suspicious: Automated dispatch notifications lacking an individual named employee signature violate enterprise email policy",
        "isCorrect": false
      },
      {
        "text": "Legitimate: The display name includes official departmental credentials and formal executive security titles",
        "isCorrect": false
      },
      {
        "text": "Legitimate: The mailbox username contains authentic operational terminology such as support, security, or alerts",
        "isCorrect": false
      }
    ],
    "redFlags": [
      "Typosquatting: wellsfarg0.com"
    ],
    "explanation": "Subtle visual typosquatting replacing letter O with numeral 0."
  },
  {
    "id": "se-19",
    "category": "sender",
    "categoryTitle": "Identify Suspicious Sender",
    "difficulty": "Easy",
    "type": "choice",
    "scenarioTitle": "LinkedIn InMail Dispatch Verification",
    "targetDisplay": "LinkedIn InMail Dispatch",
    "targetEmail": "member-notifications@linkedin.com",
    "context": "Subject: \"You have 4 new profile views this week\"",
    "options": [
      {
        "text": "Legitimate: Sending domain (@linkedin.com) accurately matches verified corporate infrastructure with authenticated mail records",
        "isCorrect": true
      },
      {
        "text": "Legitimate: Standard corporate mail filters automatically drop any email that fails real-time mailbox existence checks",
        "isCorrect": false
      },
      {
        "text": "Suspicious: Internal announcements originating from automated no-reply mailboxes violate company communication governance",
        "isCorrect": false
      },
      {
        "text": "Suspicious: The presence of cloud hosting terminology in the sender domain suggests external message routing",
        "isCorrect": false
      }
    ],
    "redFlags": [],
    "explanation": "Standard verified notification pattern from LinkedIn."
  },
  {
    "id": "se-20",
    "category": "sender",
    "categoryTitle": "Identify Suspicious Sender",
    "difficulty": "Medium",
    "type": "choice",
    "scenarioTitle": "Dropbox File Sharing Verification",
    "targetDisplay": "Dropbox File Sharing",
    "targetEmail": "no-reply@dropbox.com",
    "context": "Subject: \"Architecture-Blueprint-v4.pdf shared with you\"",
    "options": [
      {
        "text": "Legitimate: Sending domain (@dropbox.com) accurately matches verified corporate infrastructure with authenticated mail records",
        "isCorrect": true
      },
      {
        "text": "Legitimate: Automated no-reply accounts are cryptographically insulated from delivering deceptive or untrusted content",
        "isCorrect": false
      },
      {
        "text": "Suspicious: Automated communications utilizing dedicated notification subdomains indicate an unmanaged external endpoint",
        "isCorrect": false
      },
      {
        "text": "Suspicious: Senders utilizing shared regional infrastructure represent an elevated operational security hazard",
        "isCorrect": false
      }
    ],
    "redFlags": [],
    "explanation": "Genuine sharing notice from verified primary apex domain."
  },
  {
    "id": "se-21",
    "category": "sender",
    "categoryTitle": "Identify Suspicious Sender",
    "difficulty": "Hard",
    "type": "choice",
    "scenarioTitle": "Apple ID Billing Specialist Verification",
    "targetDisplay": "Apple ID Billing Specialist",
    "targetEmail": "receipts@apple.com.invoice-billing-cloud.xyz",
    "context": "Subject: \"Invoice #AP-9921 for Final Cut Pro ($299.99)\"",
    "options": [
      {
        "text": "Suspicious: Sending domain utilizes an untrusted or high-risk top-level domain rather than legitimate corporate infrastructure",
        "isCorrect": true
      },
      {
        "text": "Suspicious: Any incoming transmission with security terminology in the sender header must be isolated for manual quarantine",
        "isCorrect": false
      },
      {
        "text": "Legitimate: The display name precisely matches authorized corporate leadership and institutional branding",
        "isCorrect": false
      },
      {
        "text": "Legitimate: Automated mail servers automatically reject messages where the display name differs from common registry records",
        "isCorrect": false
      }
    ],
    "redFlags": [
      "Subdomain deception trap",
      "Malicious .xyz apex domain"
    ],
    "explanation": "Subdomain deception: apple.com is merely a subdomain on invoice-billing-cloud.xyz."
  },
  {
    "id": "se-22",
    "category": "sender",
    "categoryTitle": "Identify Suspicious Sender",
    "difficulty": "Easy",
    "type": "choice",
    "scenarioTitle": "Enterprise IT Global Support Desk (Verification Service) Verification",
    "targetDisplay": "Enterprise IT Global Support Desk (Verification Service)",
    "targetEmail": "helpdesk-corp-support@gmail.com",
    "context": "Subject: \"Scheduled System Migration: Verify your Active Directory credentials\" [Ticket #1021]",
    "options": [
      {
        "text": "Suspicious: Official corporate communications originating from a free public webmail address (@gmail.com)",
        "isCorrect": true
      },
      {
        "text": "Suspicious: Automated dispatch notifications lacking an individual named employee signature violate enterprise email policy",
        "isCorrect": false
      },
      {
        "text": "Legitimate: The display name includes official departmental credentials and formal executive security titles",
        "isCorrect": false
      },
      {
        "text": "Legitimate: The mailbox username contains authentic operational terminology such as support, security, or alerts",
        "isCorrect": false
      }
    ],
    "redFlags": [
      "Free webmail provider (@gmail.com) used for internal corporate IT"
    ],
    "explanation": "Anyone can set their display name to whatever they want. An enterprise IT department will ALWAYS send company announcements from their official corporate domain, never from free webmail."
  },
  {
    "id": "se-23",
    "category": "sender",
    "categoryTitle": "Identify Suspicious Sender",
    "difficulty": "Medium",
    "type": "choice",
    "scenarioTitle": "Microsoft SharePoint Notifications (Verification Service) Verification",
    "targetDisplay": "Microsoft SharePoint Notifications (Verification Service)",
    "targetEmail": "no-reply@sharepointonline.com",
    "context": "Subject: \"Project Q3 Financial Model.xlsx shared with you\" [Ticket #1022]",
    "options": [
      {
        "text": "Legitimate: Sending domain (@sharepointonline.com) accurately matches verified corporate infrastructure with authenticated mail records",
        "isCorrect": true
      },
      {
        "text": "Legitimate: Automated no-reply accounts are cryptographically insulated from delivering deceptive or untrusted content",
        "isCorrect": false
      },
      {
        "text": "Suspicious: Internal announcements originating from automated no-reply mailboxes violate company communication governance",
        "isCorrect": false
      },
      {
        "text": "Suspicious: The presence of cloud hosting terminology in the sender domain suggests external message routing",
        "isCorrect": false
      }
    ],
    "redFlags": [],
    "explanation": "Microsoft genuinely utilizes sharepointonline.com for automated collaboration sharing notices."
  },
  {
    "id": "se-24",
    "category": "sender",
    "categoryTitle": "Identify Suspicious Sender",
    "difficulty": "Hard",
    "type": "choice",
    "scenarioTitle": "Netflix Support Team (Verification Service) Verification",
    "targetDisplay": "Netflix Support Team (Verification Service)",
    "targetEmail": "info@netflix-billing-update-service.cc",
    "context": "Subject: \"Your payment declined - Update card to keep streaming\" [Ticket #1023]",
    "options": [
      {
        "text": "Suspicious: Sending domain utilizes an untrusted or high-risk top-level domain rather than legitimate corporate infrastructure",
        "isCorrect": true
      },
      {
        "text": "Suspicious: Enterprise communication protocols require all administrative notifications to originate from human user inboxes",
        "isCorrect": false
      },
      {
        "text": "Legitimate: The display name includes official departmental credentials and formal executive security titles",
        "isCorrect": false
      },
      {
        "text": "Legitimate: The mailbox username contains authentic operational terminology such as support, security, or alerts",
        "isCorrect": false
      }
    ],
    "redFlags": [
      "Multi-hyphenated fake domain on .cc TLD"
    ],
    "explanation": "Legitimate brands host services on their primary domain (netflix.com), not hyphenated strings on high-abuse TLDs."
  },
  {
    "id": "se-25",
    "category": "sender",
    "categoryTitle": "Identify Suspicious Sender",
    "difficulty": "Easy",
    "type": "choice",
    "scenarioTitle": "Amazon Customer Service (Verification Service) Verification",
    "targetDisplay": "Amazon Customer Service (Verification Service)",
    "targetEmail": "auto-confirm@amazon.com.order-alert-99.net",
    "context": "Subject: \"Package delayed in transit - Confirm address\" [Ticket #1024]",
    "options": [
      {
        "text": "Suspicious: Sender display name masks an unverified external address designed to bypass casual visual inspection",
        "isCorrect": true
      },
      {
        "text": "Suspicious: Any incoming transmission with security terminology in the sender header must be isolated for manual quarantine",
        "isCorrect": false
      },
      {
        "text": "Legitimate: The display name precisely matches authorized corporate leadership and institutional branding",
        "isCorrect": false
      },
      {
        "text": "Legitimate: Automated mail servers automatically reject messages where the display name differs from common registry records",
        "isCorrect": false
      }
    ],
    "redFlags": [
      "Subdomain deception mimicking Amazon"
    ],
    "explanation": "Look immediately to the left of the top-level domain (.net). Here, the apex domain is order-alert-99.net."
  },
  {
    "id": "se-26",
    "category": "sender",
    "categoryTitle": "Identify Suspicious Sender",
    "difficulty": "Medium",
    "type": "choice",
    "scenarioTitle": "GitHub Support (Verification Service) Verification",
    "targetDisplay": "GitHub Support (Verification Service)",
    "targetEmail": "support@github.com",
    "context": "Subject: \"Two-Factor Authentication Recovery Codes Depleted\" [Ticket #1025]",
    "options": [
      {
        "text": "Legitimate: Sending domain (@github.com) accurately matches verified corporate infrastructure with authenticated mail records",
        "isCorrect": true
      },
      {
        "text": "Legitimate: Automated no-reply accounts are cryptographically insulated from delivering deceptive or untrusted content",
        "isCorrect": false
      },
      {
        "text": "Suspicious: Automated communications utilizing dedicated notification subdomains indicate an unmanaged external endpoint",
        "isCorrect": false
      },
      {
        "text": "Suspicious: Senders utilizing shared regional infrastructure represent an elevated operational security hazard",
        "isCorrect": false
      }
    ],
    "redFlags": [],
    "explanation": "The sender address matches GitHub's primary canonical domain without typosquatting or strange subdomains."
  },
  {
    "id": "se-27",
    "category": "sender",
    "categoryTitle": "Identify Suspicious Sender",
    "difficulty": "Hard",
    "type": "choice",
    "scenarioTitle": "Apple Security Alert (Verification Service) Verification",
    "targetDisplay": "Apple Security Alert (Verification Service)",
    "targetEmail": "apple-id-verification@app1e.com",
    "context": "Subject: \"Unauthorized iCloud login from Moscow, Russia\" [Ticket #1026]",
    "options": [
      {
        "text": "Suspicious: Sending domain employs typosquatting character substitution to impersonate a legitimate enterprise",
        "isCorrect": true
      },
      {
        "text": "Suspicious: Any incoming transmission with security terminology in the sender header must be isolated for manual quarantine",
        "isCorrect": false
      },
      {
        "text": "Legitimate: The display name precisely matches authorized corporate leadership and institutional branding",
        "isCorrect": false
      },
      {
        "text": "Legitimate: Automated mail servers automatically reject messages where the display name differs from common registry records",
        "isCorrect": false
      }
    ],
    "redFlags": [
      "Typosquatting: app1e.com"
    ],
    "explanation": "Classic homoglyph typosquatting swapping letter \"l\" with digit \"1\"."
  },
  {
    "id": "se-28",
    "category": "sender",
    "categoryTitle": "Identify Suspicious Sender",
    "difficulty": "Easy",
    "type": "choice",
    "scenarioTitle": "Bank of America Wire Desk (Verification Service) Verification",
    "targetDisplay": "Bank of America Wire Desk (Verification Service)",
    "targetEmail": "wire-transfers@bankofamerica.com",
    "context": "Subject: \"Receipt for Outgoing Wire Transfer Ref #89301\" [Ticket #1027]",
    "options": [
      {
        "text": "Legitimate: Sending domain (@bankofamerica.com) accurately matches verified corporate infrastructure with authenticated mail records",
        "isCorrect": true
      },
      {
        "text": "Legitimate: Incoming messages displaying an organizational avatar are pre-cleared by global secure email gateways",
        "isCorrect": false
      },
      {
        "text": "Suspicious: Internal announcements originating from automated no-reply mailboxes violate company communication governance",
        "isCorrect": false
      },
      {
        "text": "Suspicious: The presence of cloud hosting terminology in the sender domain suggests external message routing",
        "isCorrect": false
      }
    ],
    "redFlags": [],
    "explanation": "Authentic sending domain matching the official corporate identity."
  },
  {
    "id": "se-29",
    "category": "sender",
    "categoryTitle": "Identify Suspicious Sender",
    "difficulty": "Medium",
    "type": "choice",
    "scenarioTitle": "DHL Express Courier (Verification Service) Verification",
    "targetDisplay": "DHL Express Courier (Verification Service)",
    "targetEmail": "delivery-dispatch@dhl-express-tracking-portal.xyz",
    "context": "Subject: \"Shipment #DH-90184 held due to address discrepancy\" [Ticket #1028]",
    "options": [
      {
        "text": "Suspicious: Lookalike hyphenated domain registered on an external registrar rather than the verified enterprise domain",
        "isCorrect": true
      },
      {
        "text": "Suspicious: Official organizational notices dispatched outside standard regional business hours indicate fraudulent transmission",
        "isCorrect": false
      },
      {
        "text": "Legitimate: The display name precisely matches authorized corporate leadership and institutional branding",
        "isCorrect": false
      },
      {
        "text": "Legitimate: Automated mail servers automatically reject messages where the display name differs from common registry records",
        "isCorrect": false
      }
    ],
    "redFlags": [
      "Abused cheap .xyz registry",
      "Hyphenated spoof domain"
    ],
    "explanation": "DHL sends official shipping updates from dhl.com, not unvetted .xyz domain registrations."
  },
  {
    "id": "se-30",
    "category": "sender",
    "categoryTitle": "Identify Suspicious Sender",
    "difficulty": "Hard",
    "type": "choice",
    "scenarioTitle": "Google Workspace Billing (Verification Service) Verification",
    "targetDisplay": "Google Workspace Billing (Verification Service)",
    "targetEmail": "billing-noreply@google.com",
    "context": "Subject: \"Monthly Google Workspace Invoice for September 2026\" [Ticket #1029]",
    "options": [
      {
        "text": "Legitimate: Sending domain (@google.com) accurately matches verified corporate infrastructure with authenticated mail records",
        "isCorrect": true
      },
      {
        "text": "Legitimate: Automated no-reply accounts are cryptographically insulated from delivering deceptive or untrusted content",
        "isCorrect": false
      },
      {
        "text": "Suspicious: Internal announcements originating from automated no-reply mailboxes violate company communication governance",
        "isCorrect": false
      },
      {
        "text": "Suspicious: The presence of cloud hosting terminology in the sender domain suggests external message routing",
        "isCorrect": false
      }
    ],
    "redFlags": [],
    "explanation": "Authentic automated billing sender from Google's verified primary apex domain."
  },
  {
    "id": "se-31",
    "category": "sender",
    "categoryTitle": "Identify Suspicious Sender",
    "difficulty": "Easy",
    "type": "choice",
    "scenarioTitle": "Chase Fraud Operations (Verification Service) Verification",
    "targetDisplay": "Chase Fraud Operations (Verification Service)",
    "targetEmail": "chase-security@chase-fraud-prevention-alert.biz",
    "context": "Subject: \"Suspicious Debit Card Transaction: Confirm $940 at BestBuy\" [Ticket #1030]",
    "options": [
      {
        "text": "Suspicious: Lookalike hyphenated domain registered on an external registrar rather than the verified enterprise domain",
        "isCorrect": true
      },
      {
        "text": "Suspicious: Official organizational notices dispatched outside standard regional business hours indicate fraudulent transmission",
        "isCorrect": false
      },
      {
        "text": "Legitimate: The display name precisely matches authorized corporate leadership and institutional branding",
        "isCorrect": false
      },
      {
        "text": "Legitimate: Automated mail servers automatically reject messages where the display name differs from common registry records",
        "isCorrect": false
      }
    ],
    "redFlags": [
      "Unvetted .biz TLD",
      "Multi-word cousin domain"
    ],
    "explanation": "Chase uses chase.com or verified subdomains like alertsp.chase.com, never unvetted .biz domains."
  },
  {
    "id": "se-32",
    "category": "sender",
    "categoryTitle": "Identify Suspicious Sender",
    "difficulty": "Medium",
    "type": "choice",
    "scenarioTitle": "Stripe Merchant Support (Verification Service) Verification",
    "targetDisplay": "Stripe Merchant Support (Verification Service)",
    "targetEmail": "support@stripe.com",
    "context": "Subject: \"Your scheduled payout has been deposited into your bank\" [Ticket #1031]",
    "options": [
      {
        "text": "Legitimate: Sending domain (@stripe.com) accurately matches verified corporate infrastructure with authenticated mail records",
        "isCorrect": true
      },
      {
        "text": "Legitimate: Standard corporate mail filters automatically drop any email that fails real-time mailbox existence checks",
        "isCorrect": false
      },
      {
        "text": "Suspicious: Internal announcements originating from automated no-reply mailboxes violate company communication governance",
        "isCorrect": false
      },
      {
        "text": "Suspicious: The presence of cloud hosting terminology in the sender domain suggests external message routing",
        "isCorrect": false
      }
    ],
    "redFlags": [],
    "explanation": "Direct communication from Stripe's verified canonical apex domain."
  },
  {
    "id": "se-33",
    "category": "sender",
    "categoryTitle": "Identify Suspicious Sender",
    "difficulty": "Hard",
    "type": "choice",
    "scenarioTitle": "HR Benefits Department (Verification Service) Verification",
    "targetDisplay": "HR Benefits Department (Verification Service)",
    "targetEmail": "hr-director@internal-corp-hr.com",
    "context": "Subject: \"Mandatory Employee Handbook Acknowledgement 2026\" [Ticket #1032]",
    "options": [
      {
        "text": "Suspicious: Lookalike hyphenated domain registered on an external registrar rather than the verified enterprise domain",
        "isCorrect": true
      },
      {
        "text": "Suspicious: Official organizational notices dispatched outside standard regional business hours indicate fraudulent transmission",
        "isCorrect": false
      },
      {
        "text": "Legitimate: The display name precisely matches authorized corporate leadership and institutional branding",
        "isCorrect": false
      },
      {
        "text": "Legitimate: Automated mail servers automatically reject messages where the display name differs from common registry records",
        "isCorrect": false
      }
    ],
    "redFlags": [
      "External domain mimicking internal enterprise network"
    ],
    "explanation": "External domains with names like \"internal-corp-hr.com\" are designed to trick staff into believing they are internal."
  },
  {
    "id": "se-34",
    "category": "sender",
    "categoryTitle": "Identify Suspicious Sender",
    "difficulty": "Easy",
    "type": "choice",
    "scenarioTitle": "DocuSign Signatures (Verification Service) Verification",
    "targetDisplay": "DocuSign Signatures (Verification Service)",
    "targetEmail": "docusign@docusign.net",
    "context": "Subject: \"Completed: Master Services Agreement signed by all parties\" [Ticket #1033]",
    "options": [
      {
        "text": "Legitimate: Sending domain (@docusign.net) accurately matches verified corporate infrastructure with authenticated mail records",
        "isCorrect": true
      },
      {
        "text": "Legitimate: Standard corporate mail filters automatically drop any email that fails real-time mailbox existence checks",
        "isCorrect": false
      },
      {
        "text": "Suspicious: Internal announcements originating from automated no-reply mailboxes violate company communication governance",
        "isCorrect": false
      },
      {
        "text": "Suspicious: The presence of cloud hosting terminology in the sender domain suggests external message routing",
        "isCorrect": false
      }
    ],
    "redFlags": [],
    "explanation": "DocuSign officially uses docusign.net for transactional signing envelopes and notifications."
  },
  {
    "id": "se-35",
    "category": "sender",
    "categoryTitle": "Identify Suspicious Sender",
    "difficulty": "Medium",
    "type": "choice",
    "scenarioTitle": "Zoom Meetings Support (Verification Service) Verification",
    "targetDisplay": "Zoom Meetings Support (Verification Service)",
    "targetEmail": "invitations@zoom.us",
    "context": "Subject: \"Updated: Executive Strategy Session Room ID\" [Ticket #1034]",
    "options": [
      {
        "text": "Legitimate: Sending domain (@zoom.us) accurately matches verified corporate infrastructure with authenticated mail records",
        "isCorrect": true
      },
      {
        "text": "Legitimate: Standard corporate mail filters automatically drop any email that fails real-time mailbox existence checks",
        "isCorrect": false
      },
      {
        "text": "Suspicious: Automated communications utilizing dedicated notification subdomains indicate an unmanaged external endpoint",
        "isCorrect": false
      },
      {
        "text": "Suspicious: Senders utilizing shared regional infrastructure represent an elevated operational security hazard",
        "isCorrect": false
      }
    ],
    "redFlags": [],
    "explanation": "Zoom officially operates on both zoom.us and zoom.com."
  },
  {
    "id": "se-36",
    "category": "sender",
    "categoryTitle": "Identify Suspicious Sender",
    "difficulty": "Hard",
    "type": "choice",
    "scenarioTitle": "Uber Account Security (Verification Service) Verification",
    "targetDisplay": "Uber Account Security (Verification Service)",
    "targetEmail": "support@uber-identity-check.cc",
    "context": "Subject: \"New device login detected from London, UK\" [Ticket #1035]",
    "options": [
      {
        "text": "Suspicious: Sending domain utilizes an untrusted or high-risk top-level domain rather than legitimate corporate infrastructure",
        "isCorrect": true
      },
      {
        "text": "Suspicious: Automated dispatch notifications lacking an individual named employee signature violate enterprise email policy",
        "isCorrect": false
      },
      {
        "text": "Legitimate: The display name includes official departmental credentials and formal executive security titles",
        "isCorrect": false
      },
      {
        "text": "Legitimate: The mailbox username contains authentic operational terminology such as support, security, or alerts",
        "isCorrect": false
      }
    ],
    "redFlags": [
      "High-risk .cc domain"
    ],
    "explanation": "Uber communications originate from @uber.com."
  },
  {
    "id": "se-37",
    "category": "sender",
    "categoryTitle": "Identify Suspicious Sender",
    "difficulty": "Easy",
    "type": "choice",
    "scenarioTitle": "Slack Platform Team (Verification Service) Verification",
    "targetDisplay": "Slack Platform Team (Verification Service)",
    "targetEmail": "feedback@slack.com",
    "context": "Subject: \"Thank you for attending the Slack Developer Summit\" [Ticket #1036]",
    "options": [
      {
        "text": "Legitimate: Sending domain (@slack.com) accurately matches verified corporate infrastructure with authenticated mail records",
        "isCorrect": true
      },
      {
        "text": "Legitimate: Standard corporate mail filters automatically drop any email that fails real-time mailbox existence checks",
        "isCorrect": false
      },
      {
        "text": "Suspicious: Internal announcements originating from automated no-reply mailboxes violate company communication governance",
        "isCorrect": false
      },
      {
        "text": "Suspicious: The presence of cloud hosting terminology in the sender domain suggests external message routing",
        "isCorrect": false
      }
    ],
    "redFlags": [],
    "explanation": "Official developer communications from the core verified domain."
  },
  {
    "id": "se-38",
    "category": "sender",
    "categoryTitle": "Identify Suspicious Sender",
    "difficulty": "Medium",
    "type": "choice",
    "scenarioTitle": "Wells Fargo Online Services (Verification Service) Verification",
    "targetDisplay": "Wells Fargo Online Services (Verification Service)",
    "targetEmail": "customerservice@wellsfarg0.com",
    "context": "Subject: \"Account Access Suspended: Action Required\" [Ticket #1037]",
    "options": [
      {
        "text": "Suspicious: Sender display name masks an unverified external address designed to bypass casual visual inspection",
        "isCorrect": true
      },
      {
        "text": "Suspicious: Enterprise communication protocols require all administrative notifications to originate from human user inboxes",
        "isCorrect": false
      },
      {
        "text": "Legitimate: The display name includes official departmental credentials and formal executive security titles",
        "isCorrect": false
      },
      {
        "text": "Legitimate: The mailbox username contains authentic operational terminology such as support, security, or alerts",
        "isCorrect": false
      }
    ],
    "redFlags": [
      "Typosquatting: wellsfarg0.com"
    ],
    "explanation": "Subtle visual typosquatting replacing letter O with numeral 0."
  },
  {
    "id": "se-39",
    "category": "sender",
    "categoryTitle": "Identify Suspicious Sender",
    "difficulty": "Hard",
    "type": "choice",
    "scenarioTitle": "LinkedIn InMail Dispatch (Verification Service) Verification",
    "targetDisplay": "LinkedIn InMail Dispatch (Verification Service)",
    "targetEmail": "member-notifications@linkedin.com",
    "context": "Subject: \"You have 4 new profile views this week\" [Ticket #1038]",
    "options": [
      {
        "text": "Legitimate: Sending domain (@linkedin.com) accurately matches verified corporate infrastructure with authenticated mail records",
        "isCorrect": true
      },
      {
        "text": "Legitimate: Incoming messages displaying an organizational avatar are pre-cleared by global secure email gateways",
        "isCorrect": false
      },
      {
        "text": "Suspicious: Internal announcements originating from automated no-reply mailboxes violate company communication governance",
        "isCorrect": false
      },
      {
        "text": "Suspicious: The presence of cloud hosting terminology in the sender domain suggests external message routing",
        "isCorrect": false
      }
    ],
    "redFlags": [],
    "explanation": "Standard verified notification pattern from LinkedIn."
  },
  {
    "id": "se-40",
    "category": "sender",
    "categoryTitle": "Identify Suspicious Sender",
    "difficulty": "Easy",
    "type": "choice",
    "scenarioTitle": "Dropbox File Sharing (Verification Service) Verification",
    "targetDisplay": "Dropbox File Sharing (Verification Service)",
    "targetEmail": "no-reply@dropbox.com",
    "context": "Subject: \"Architecture-Blueprint-v4.pdf shared with you\" [Ticket #1039]",
    "options": [
      {
        "text": "Legitimate: Sending domain (@dropbox.com) accurately matches verified corporate infrastructure with authenticated mail records",
        "isCorrect": true
      },
      {
        "text": "Legitimate: Automated no-reply accounts are cryptographically insulated from delivering deceptive or untrusted content",
        "isCorrect": false
      },
      {
        "text": "Suspicious: Automated communications utilizing dedicated notification subdomains indicate an unmanaged external endpoint",
        "isCorrect": false
      },
      {
        "text": "Suspicious: Senders utilizing shared regional infrastructure represent an elevated operational security hazard",
        "isCorrect": false
      }
    ],
    "redFlags": [],
    "explanation": "Genuine sharing notice from verified primary apex domain."
  },
  {
    "id": "se-41",
    "category": "sender",
    "categoryTitle": "Identify Suspicious Sender",
    "difficulty": "Medium",
    "type": "choice",
    "scenarioTitle": "PayPal Security Support (Verification Service) Verification",
    "targetDisplay": "PayPal Security Support (Verification Service)",
    "targetEmail": "service@paypa1-security-center.com",
    "context": "Subject: \"Account Limited - Confirm your Identity\" [Ticket #1040]",
    "options": [
      {
        "text": "Suspicious: Sending domain employs typosquatting character substitution to impersonate a legitimate enterprise",
        "isCorrect": true
      },
      {
        "text": "Suspicious: Enterprise communication protocols require all administrative notifications to originate from human user inboxes",
        "isCorrect": false
      },
      {
        "text": "Legitimate: The display name includes official departmental credentials and formal executive security titles",
        "isCorrect": false
      },
      {
        "text": "Legitimate: The mailbox username contains authentic operational terminology such as support, security, or alerts",
        "isCorrect": false
      }
    ],
    "redFlags": [
      "Typosquatting: \"paypa1\" replaces lowercase \"l\" with digit \"1\""
    ],
    "explanation": "Scammers frequently register \"cousin domains\" that look identical at a quick glance, such as swapping \"l\" with \"1\" or \"o\" with \"0\"."
  },
  {
    "id": "se-42",
    "category": "sender",
    "categoryTitle": "Identify Suspicious Sender",
    "difficulty": "Hard",
    "type": "choice",
    "scenarioTitle": "Enterprise IT Global Support Desk (Verification Service) Verification",
    "targetDisplay": "Enterprise IT Global Support Desk (Verification Service)",
    "targetEmail": "helpdesk-corp-support@gmail.com",
    "context": "Subject: \"Scheduled System Migration: Verify your Active Directory credentials\" [Ticket #1041]",
    "options": [
      {
        "text": "Suspicious: Official corporate communications originating from a free public webmail address (@gmail.com)",
        "isCorrect": true
      },
      {
        "text": "Suspicious: Enterprise communication protocols require all administrative notifications to originate from human user inboxes",
        "isCorrect": false
      },
      {
        "text": "Legitimate: The display name includes official departmental credentials and formal executive security titles",
        "isCorrect": false
      },
      {
        "text": "Legitimate: The mailbox username contains authentic operational terminology such as support, security, or alerts",
        "isCorrect": false
      }
    ],
    "redFlags": [
      "Free webmail provider (@gmail.com) used for internal corporate IT"
    ],
    "explanation": "Anyone can set their display name to whatever they want. An enterprise IT department will ALWAYS send company announcements from their official corporate domain, never from free webmail."
  },
  {
    "id": "url-1",
    "category": "url",
    "categoryTitle": "Identify Suspicious URL",
    "difficulty": "Easy",
    "type": "choice",
    "scenarioTitle": "URL Evaluation #1",
    "targetUrl": "http://chase.com.account-verify-secure.top/auth/login.php",
    "options": [
      {
        "text": "Suspicious: Insecure HTTP protocol combined with an untrusted apex domain attempting credential harvesting",
        "isCorrect": true
      },
      {
        "text": "Suspicious: Enterprise authentication portals are prohibited by web standards from utilizing URL path subdirectories",
        "isCorrect": false
      },
      {
        "text": "Legitimate: The hostname string incorporates familiar brand terminology before the path separator",
        "isCorrect": false
      },
      {
        "text": "Legitimate: The presence of an active HTTPS connection guarantees the destination is authenticated by the brand owner",
        "isCorrect": false
      }
    ],
    "redFlags": [
      "Insecure HTTP",
      "Subdomain trap",
      "Suspicious .top TLD"
    ],
    "explanation": "The apex domain is account-verify-secure.top, NOT chase.com. It also lacks HTTPS."
  },
  {
    "id": "url-2",
    "category": "url",
    "categoryTitle": "Identify Suspicious URL",
    "difficulty": "Medium",
    "type": "choice",
    "scenarioTitle": "URL Evaluation #2",
    "targetUrl": "https://192.0.2.145:8443/shared/invoice_march.pdf.exe",
    "options": [
      {
        "text": "Suspicious: URL delivers an executable binary concealed beneath a deceptive double file extension",
        "isCorrect": true
      },
      {
        "text": "Suspicious: Enterprise authentication portals are prohibited by web standards from utilizing URL path subdirectories",
        "isCorrect": false
      },
      {
        "text": "Legitimate: The URL begins with the authentic enterprise brand name in the leading hostname segment",
        "isCorrect": false
      },
      {
        "text": "Legitimate: The destination path includes recognized functional directories such as /login or /verify",
        "isCorrect": false
      }
    ],
    "redFlags": [
      "Raw IP host",
      "Double extension malware payload (.pdf.exe)"
    ],
    "explanation": "Legitimate cloud services use domain names. Raw IP addresses bypass reputation filters, and .pdf.exe is malware."
  },
  {
    "id": "url-3",
    "category": "url",
    "categoryTitle": "Identify Suspicious URL",
    "difficulty": "Hard",
    "type": "choice",
    "scenarioTitle": "URL Evaluation #3",
    "targetUrl": "https://accounts.google.com/v3/signin/identifier?continue=https%3A%2F%2Fmail.google.com",
    "options": [
      {
        "text": "Legitimate: Apex domain (accounts.google.com) matches verified organizational infrastructure with valid HTTPS protocol",
        "isCorrect": true
      },
      {
        "text": "Legitimate: Web addresses utilizing secure TLS sockets are immune to server-side redirection or content tampering",
        "isCorrect": false
      },
      {
        "text": "Suspicious: The presence of extensive query strings and authentication tokens indicates a potential tracking vulnerability",
        "isCorrect": false
      },
      {
        "text": "Suspicious: Commercial enterprise platforms never deploy versioned API paths or regional subdomains for end-user traffic",
        "isCorrect": false
      }
    ],
    "redFlags": [],
    "explanation": "This is the genuine Google sign-in URL with standard URL-encoded redirect parameters."
  },
  {
    "id": "url-4",
    "category": "url",
    "categoryTitle": "Identify Suspicious URL",
    "difficulty": "Easy",
    "type": "choice",
    "scenarioTitle": "URL Evaluation #4",
    "targetUrl": "https://appleid.apple.com-recover-session-token.id-auth.xyz/verify",
    "options": [
      {
        "text": "Suspicious: Brand name is placed in a deceptive subdomain while the actual apex domain resides on a high-risk TLD",
        "isCorrect": true
      },
      {
        "text": "Suspicious: The presence of numerical query strings in the web address indicates an active buffer memory exploit",
        "isCorrect": false
      },
      {
        "text": "Legitimate: The URL begins with the authentic enterprise brand name in the leading hostname segment",
        "isCorrect": false
      },
      {
        "text": "Legitimate: The destination path includes recognized functional directories such as /login or /verify",
        "isCorrect": false
      }
    ],
    "redFlags": [
      "Deceptive subdomain prefix",
      "Abused cheap .xyz registry"
    ],
    "explanation": "Look immediately preceding the slash: the domain is id-auth.xyz, not apple.com."
  },
  {
    "id": "url-5",
    "category": "url",
    "categoryTitle": "Identify Suspicious URL",
    "difficulty": "Medium",
    "type": "choice",
    "scenarioTitle": "URL Evaluation #5",
    "targetUrl": "https://www.google.com/url?q=https://malicious-crypto-drainer.cc/steal",
    "options": [
      {
        "text": "Suspicious: Brand name is placed in a deceptive subdomain while the actual apex domain resides on a high-risk TLD",
        "isCorrect": true
      },
      {
        "text": "Suspicious: The presence of numerical query strings in the web address indicates an active buffer memory exploit",
        "isCorrect": false
      },
      {
        "text": "Legitimate: The hostname string incorporates familiar brand terminology before the path separator",
        "isCorrect": false
      },
      {
        "text": "Legitimate: The presence of an active HTTPS connection guarantees the destination is authenticated by the brand owner",
        "isCorrect": false
      }
    ],
    "redFlags": [
      "Open redirect exploit",
      "Malicious crypto drainer payload"
    ],
    "explanation": "Attackers abuse open redirectors on trusted web properties to bypass email filters."
  },
  {
    "id": "url-6",
    "category": "url",
    "categoryTitle": "Identify Suspicious URL",
    "difficulty": "Hard",
    "type": "choice",
    "scenarioTitle": "URL Evaluation #6",
    "targetUrl": "https://github.com/torvalds/linux/commits/master",
    "options": [
      {
        "text": "Legitimate: Apex domain (github.com) matches verified organizational infrastructure with valid HTTPS protocol",
        "isCorrect": true
      },
      {
        "text": "Legitimate: Any URL that successfully resolves without a browser security warning is guaranteed secure by DNS providers",
        "isCorrect": false
      },
      {
        "text": "Suspicious: Complex URL-encoded redirect parameters (%3A%2F%2F) indicate an unauthorized session hijacking injection",
        "isCorrect": false
      },
      {
        "text": "Suspicious: Authenticated single-sign-on workflows must always reside directly on the primary root domain homepage",
        "isCorrect": false
      }
    ],
    "redFlags": [],
    "explanation": "Authentic GitHub URL viewing official Linux kernel commit log."
  },
  {
    "id": "url-7",
    "category": "url",
    "categoryTitle": "Identify Suspicious URL",
    "difficulty": "Easy",
    "type": "choice",
    "scenarioTitle": "URL Evaluation #7",
    "targetUrl": "http://microsoft-support-login.com.windows-telemetry.biz/active-directory",
    "options": [
      {
        "text": "Suspicious: Insecure HTTP protocol combined with an untrusted apex domain attempting credential harvesting",
        "isCorrect": true
      },
      {
        "text": "Suspicious: The presence of numerical query strings in the web address indicates an active buffer memory exploit",
        "isCorrect": false
      },
      {
        "text": "Legitimate: The hostname string incorporates familiar brand terminology before the path separator",
        "isCorrect": false
      },
      {
        "text": "Legitimate: The presence of an active HTTPS connection guarantees the destination is authenticated by the brand owner",
        "isCorrect": false
      }
    ],
    "redFlags": [
      "HTTP insecure",
      "Deceptive multi-subdomain structure"
    ],
    "explanation": "Insecure HTTP with nested subdomains designed to impersonate Microsoft."
  },
  {
    "id": "url-8",
    "category": "url",
    "categoryTitle": "Identify Suspicious URL",
    "difficulty": "Medium",
    "type": "choice",
    "scenarioTitle": "URL Evaluation #8",
    "targetUrl": "https://login.microsoftonline.com/common/oauth2/v2.0/authorize",
    "options": [
      {
        "text": "Legitimate: Apex domain (login.microsoftonline.com) matches verified organizational infrastructure with valid HTTPS protocol",
        "isCorrect": true
      },
      {
        "text": "Legitimate: URLs structured with multiple subdomain tiers are automatically pre-screened by root certificate authorities",
        "isCorrect": false
      },
      {
        "text": "Suspicious: The presence of extensive query strings and authentication tokens indicates a potential tracking vulnerability",
        "isCorrect": false
      },
      {
        "text": "Suspicious: Commercial enterprise platforms never deploy versioned API paths or regional subdomains for end-user traffic",
        "isCorrect": false
      }
    ],
    "redFlags": [],
    "explanation": "This is Microsoft's official global identity endpoint for enterprise single sign-on."
  },
  {
    "id": "url-9",
    "category": "url",
    "categoryTitle": "Identify Suspicious URL",
    "difficulty": "Hard",
    "type": "choice",
    "scenarioTitle": "URL Evaluation #9",
    "targetUrl": "https://paypal-resolution-center.info/dispute/case8921",
    "options": [
      {
        "text": "Suspicious: Brand name is placed in a deceptive subdomain while the actual apex domain resides on a high-risk TLD",
        "isCorrect": true
      },
      {
        "text": "Suspicious: Modern corporate services never deploy session state tokens within browser navigation parameters",
        "isCorrect": false
      },
      {
        "text": "Legitimate: The URL begins with the authentic enterprise brand name in the leading hostname segment",
        "isCorrect": false
      },
      {
        "text": "Legitimate: The destination path includes recognized functional directories such as /login or /verify",
        "isCorrect": false
      }
    ],
    "redFlags": [
      "Fake brand domain on .info TLD"
    ],
    "explanation": "PayPal operates strictly on paypal.com. Hyphenated domains on .info are phishing clones."
  },
  {
    "id": "url-10",
    "category": "url",
    "categoryTitle": "Identify Suspicious URL",
    "difficulty": "Easy",
    "type": "choice",
    "scenarioTitle": "URL Evaluation #10",
    "targetUrl": "https://www.paypal.com/signin",
    "options": [
      {
        "text": "Legitimate: Apex domain (www.paypal.com) matches verified organizational infrastructure with valid HTTPS protocol",
        "isCorrect": true
      },
      {
        "text": "Legitimate: URLs structured with multiple subdomain tiers are automatically pre-screened by root certificate authorities",
        "isCorrect": false
      },
      {
        "text": "Suspicious: Complex URL-encoded redirect parameters (%3A%2F%2F) indicate an unauthorized session hijacking injection",
        "isCorrect": false
      },
      {
        "text": "Suspicious: Authenticated single-sign-on workflows must always reside directly on the primary root domain homepage",
        "isCorrect": false
      }
    ],
    "redFlags": [],
    "explanation": "Canonical PayPal sign-in URL with valid HTTPS encryption."
  },
  {
    "id": "url-11",
    "category": "url",
    "categoryTitle": "Identify Suspicious URL",
    "difficulty": "Medium",
    "type": "choice",
    "scenarioTitle": "URL Evaluation #11",
    "targetUrl": "https://amazon.com@attacker-controlled-server.com/login",
    "options": [
      {
        "text": "Suspicious: Apex domain deliberately mimics authentic enterprise naming to deceive users at a glance",
        "isCorrect": true
      },
      {
        "text": "Suspicious: Modern corporate services never deploy session state tokens within browser navigation parameters",
        "isCorrect": false
      },
      {
        "text": "Legitimate: The hostname string incorporates familiar brand terminology before the path separator",
        "isCorrect": false
      },
      {
        "text": "Legitimate: The presence of an active HTTPS connection guarantees the destination is authenticated by the brand owner",
        "isCorrect": false
      }
    ],
    "redFlags": [
      "Basic Auth host spoofing (@ symbol trick)"
    ],
    "explanation": "Browsers interpret everything before an \"@\" symbol as username credentials; the actual host reached is attacker-controlled-server.com."
  },
  {
    "id": "url-12",
    "category": "url",
    "categoryTitle": "Identify Suspicious URL",
    "difficulty": "Hard",
    "type": "choice",
    "scenarioTitle": "URL Evaluation #12",
    "targetUrl": "https://portal.azure.com/#home",
    "options": [
      {
        "text": "Legitimate: Apex domain (portal.azure.com) matches verified organizational infrastructure with valid HTTPS protocol",
        "isCorrect": true
      },
      {
        "text": "Legitimate: Web addresses utilizing secure TLS sockets are immune to server-side redirection or content tampering",
        "isCorrect": false
      },
      {
        "text": "Suspicious: The presence of extensive query strings and authentication tokens indicates a potential tracking vulnerability",
        "isCorrect": false
      },
      {
        "text": "Suspicious: Commercial enterprise platforms never deploy versioned API paths or regional subdomains for end-user traffic",
        "isCorrect": false
      }
    ],
    "redFlags": [],
    "explanation": "Official Microsoft Azure administration dashboard."
  },
  {
    "id": "url-13",
    "category": "url",
    "categoryTitle": "Identify Suspicious URL",
    "difficulty": "Easy",
    "type": "choice",
    "scenarioTitle": "URL Evaluation #13",
    "targetUrl": "http://wellsfargo.com.security-account-checkup.top/online/banking",
    "options": [
      {
        "text": "Suspicious: Insecure HTTP protocol combined with an untrusted apex domain attempting credential harvesting",
        "isCorrect": true
      },
      {
        "text": "Suspicious: Modern corporate services never deploy session state tokens within browser navigation parameters",
        "isCorrect": false
      },
      {
        "text": "Legitimate: The hostname string incorporates familiar brand terminology before the path separator",
        "isCorrect": false
      },
      {
        "text": "Legitimate: The presence of an active HTTPS connection guarantees the destination is authenticated by the brand owner",
        "isCorrect": false
      }
    ],
    "redFlags": [
      "Insecure HTTP",
      "Subdomain spoofing",
      "Abused .top registry"
    ],
    "explanation": "The apex domain is security-account-checkup.top, not Wells Fargo."
  },
  {
    "id": "url-14",
    "category": "url",
    "categoryTitle": "Identify Suspicious URL",
    "difficulty": "Medium",
    "type": "choice",
    "scenarioTitle": "URL Evaluation #14",
    "targetUrl": "https://auth0.com/auth/login",
    "options": [
      {
        "text": "Legitimate: Apex domain (auth0.com) matches verified organizational infrastructure with valid HTTPS protocol",
        "isCorrect": true
      },
      {
        "text": "Legitimate: Any URL that successfully resolves without a browser security warning is guaranteed secure by DNS providers",
        "isCorrect": false
      },
      {
        "text": "Suspicious: Complex URL-encoded redirect parameters (%3A%2F%2F) indicate an unauthorized session hijacking injection",
        "isCorrect": false
      },
      {
        "text": "Suspicious: Authenticated single-sign-on workflows must always reside directly on the primary root domain homepage",
        "isCorrect": false
      }
    ],
    "redFlags": [],
    "explanation": "Auth0 is a legitimate Okta-owned identity management platform."
  },
  {
    "id": "url-15",
    "category": "url",
    "categoryTitle": "Identify Suspicious URL",
    "difficulty": "Hard",
    "type": "choice",
    "scenarioTitle": "URL Evaluation #15",
    "targetUrl": "https://netflix-subscription-renew.cc/account/pay",
    "options": [
      {
        "text": "Suspicious: Brand name is placed in a deceptive subdomain while the actual apex domain resides on a high-risk TLD",
        "isCorrect": true
      },
      {
        "text": "Suspicious: Enterprise authentication portals are prohibited by web standards from utilizing URL path subdirectories",
        "isCorrect": false
      },
      {
        "text": "Legitimate: The URL begins with the authentic enterprise brand name in the leading hostname segment",
        "isCorrect": false
      },
      {
        "text": "Legitimate: The destination path includes recognized functional directories such as /login or /verify",
        "isCorrect": false
      }
    ],
    "redFlags": [
      "Phishing brand clone on .cc TLD"
    ],
    "explanation": "Netflix hosts billing on netflix.com, never on external .cc domains."
  },
  {
    "id": "url-16",
    "category": "url",
    "categoryTitle": "Identify Suspicious URL",
    "difficulty": "Easy",
    "type": "choice",
    "scenarioTitle": "URL Evaluation #16",
    "targetUrl": "https://www.netflix.com/youraccount",
    "options": [
      {
        "text": "Legitimate: Apex domain (www.netflix.com) matches verified organizational infrastructure with valid HTTPS protocol",
        "isCorrect": true
      },
      {
        "text": "Legitimate: Any URL that successfully resolves without a browser security warning is guaranteed secure by DNS providers",
        "isCorrect": false
      },
      {
        "text": "Suspicious: The presence of extensive query strings and authentication tokens indicates a potential tracking vulnerability",
        "isCorrect": false
      },
      {
        "text": "Suspicious: Commercial enterprise platforms never deploy versioned API paths or regional subdomains for end-user traffic",
        "isCorrect": false
      }
    ],
    "redFlags": [],
    "explanation": "Authentic Netflix account settings URL on official domain."
  },
  {
    "id": "url-17",
    "category": "url",
    "categoryTitle": "Identify Suspicious URL",
    "difficulty": "Medium",
    "type": "choice",
    "scenarioTitle": "URL Evaluation #17",
    "targetUrl": "https://dropbox.com-file-download-viewer.xyz/s/q3_report.pdf",
    "options": [
      {
        "text": "Suspicious: Brand name is placed in a deceptive subdomain while the actual apex domain resides on a high-risk TLD",
        "isCorrect": true
      },
      {
        "text": "Suspicious: Modern corporate services never deploy session state tokens within browser navigation parameters",
        "isCorrect": false
      },
      {
        "text": "Legitimate: The URL begins with the authentic enterprise brand name in the leading hostname segment",
        "isCorrect": false
      },
      {
        "text": "Legitimate: The destination path includes recognized functional directories such as /login or /verify",
        "isCorrect": false
      }
    ],
    "redFlags": [
      "Hyphenated lookalike domain on .xyz"
    ],
    "explanation": "The domain is dropbox.com-file-download-viewer.xyz, an attacker-registered domain."
  },
  {
    "id": "url-18",
    "category": "url",
    "categoryTitle": "Identify Suspicious URL",
    "difficulty": "Hard",
    "type": "choice",
    "scenarioTitle": "URL Evaluation #18",
    "targetUrl": "https://www.dropbox.com/scl/fi/8910481/report.pdf?rlkey=99381",
    "options": [
      {
        "text": "Legitimate: Apex domain (www.dropbox.com) matches verified organizational infrastructure with valid HTTPS protocol",
        "isCorrect": true
      },
      {
        "text": "Legitimate: Any URL that successfully resolves without a browser security warning is guaranteed secure by DNS providers",
        "isCorrect": false
      },
      {
        "text": "Suspicious: The presence of extensive query strings and authentication tokens indicates a potential tracking vulnerability",
        "isCorrect": false
      },
      {
        "text": "Suspicious: Commercial enterprise platforms never deploy versioned API paths or regional subdomains for end-user traffic",
        "isCorrect": false
      }
    ],
    "redFlags": [],
    "explanation": "Standard Dropbox modern file-sharing URL format."
  },
  {
    "id": "url-19",
    "category": "url",
    "categoryTitle": "Identify Suspicious URL",
    "difficulty": "Easy",
    "type": "choice",
    "scenarioTitle": "URL Evaluation #19",
    "targetUrl": "http://steamcommunity.com.trade-offer-steam.net/trade/849201",
    "options": [
      {
        "text": "Suspicious: Insecure HTTP protocol combined with an untrusted apex domain attempting credential harvesting",
        "isCorrect": true
      },
      {
        "text": "Suspicious: Enterprise authentication portals are prohibited by web standards from utilizing URL path subdirectories",
        "isCorrect": false
      },
      {
        "text": "Legitimate: The hostname string incorporates familiar brand terminology before the path separator",
        "isCorrect": false
      },
      {
        "text": "Legitimate: The presence of an active HTTPS connection guarantees the destination is authenticated by the brand owner",
        "isCorrect": false
      }
    ],
    "redFlags": [
      "Insecure HTTP",
      "Steam trade inventory scam"
    ],
    "explanation": "The apex domain is trade-offer-steam.net, designed to steal Steam inventories."
  },
  {
    "id": "url-20",
    "category": "url",
    "categoryTitle": "Identify Suspicious URL",
    "difficulty": "Medium",
    "type": "choice",
    "scenarioTitle": "URL Evaluation #20",
    "targetUrl": "https://steamcommunity.com/id/gaben/tradeoffers/",
    "options": [
      {
        "text": "Legitimate: Apex domain (steamcommunity.com) matches verified organizational infrastructure with valid HTTPS protocol",
        "isCorrect": true
      },
      {
        "text": "Legitimate: Web addresses utilizing secure TLS sockets are immune to server-side redirection or content tampering",
        "isCorrect": false
      },
      {
        "text": "Suspicious: Complex URL-encoded redirect parameters (%3A%2F%2F) indicate an unauthorized session hijacking injection",
        "isCorrect": false
      },
      {
        "text": "Suspicious: Authenticated single-sign-on workflows must always reside directly on the primary root domain homepage",
        "isCorrect": false
      }
    ],
    "redFlags": [],
    "explanation": "Official Steam Community trading URL."
  },
  {
    "id": "url-21",
    "category": "url",
    "categoryTitle": "Identify Suspicious URL",
    "difficulty": "Hard",
    "type": "choice",
    "scenarioTitle": "URL Evaluation #21",
    "targetUrl": "https://login.salesforce.com/?locale=us",
    "options": [
      {
        "text": "Legitimate: Apex domain (login.salesforce.com) matches verified organizational infrastructure with valid HTTPS protocol",
        "isCorrect": true
      },
      {
        "text": "Legitimate: URLs structured with multiple subdomain tiers are automatically pre-screened by root certificate authorities",
        "isCorrect": false
      },
      {
        "text": "Suspicious: Complex URL-encoded redirect parameters (%3A%2F%2F) indicate an unauthorized session hijacking injection",
        "isCorrect": false
      },
      {
        "text": "Suspicious: Authenticated single-sign-on workflows must always reside directly on the primary root domain homepage",
        "isCorrect": false
      }
    ],
    "redFlags": [],
    "explanation": "Legitimate Salesforce identity sign-in endpoint."
  },
  {
    "id": "url-22",
    "category": "url",
    "categoryTitle": "Identify Suspicious URL",
    "difficulty": "Easy",
    "type": "choice",
    "scenarioTitle": "URL Evaluation #22",
    "targetUrl": "https://192.0.2.145:8443/shared/invoice_march.pdf.exe?session=1021",
    "options": [
      {
        "text": "Suspicious: URL delivers an executable binary concealed beneath a deceptive double file extension",
        "isCorrect": true
      },
      {
        "text": "Suspicious: Modern corporate services never deploy session state tokens within browser navigation parameters",
        "isCorrect": false
      },
      {
        "text": "Legitimate: The URL begins with the authentic enterprise brand name in the leading hostname segment",
        "isCorrect": false
      },
      {
        "text": "Legitimate: The destination path includes recognized functional directories such as /login or /verify",
        "isCorrect": false
      }
    ],
    "redFlags": [
      "Raw IP host",
      "Double extension malware payload (.pdf.exe)"
    ],
    "explanation": "Legitimate cloud services use domain names. Raw IP addresses bypass reputation filters, and .pdf.exe is malware."
  },
  {
    "id": "url-23",
    "category": "url",
    "categoryTitle": "Identify Suspicious URL",
    "difficulty": "Medium",
    "type": "choice",
    "scenarioTitle": "URL Evaluation #23",
    "targetUrl": "https://accounts.google.com/v3/signin/identifier?continue=https%3A%2F%2Fmail.google.com?session=1022",
    "options": [
      {
        "text": "Legitimate: Apex domain (accounts.google.com) matches verified organizational infrastructure with valid HTTPS protocol",
        "isCorrect": true
      },
      {
        "text": "Legitimate: Web addresses utilizing secure TLS sockets are immune to server-side redirection or content tampering",
        "isCorrect": false
      },
      {
        "text": "Suspicious: Complex URL-encoded redirect parameters (%3A%2F%2F) indicate an unauthorized session hijacking injection",
        "isCorrect": false
      },
      {
        "text": "Suspicious: Authenticated single-sign-on workflows must always reside directly on the primary root domain homepage",
        "isCorrect": false
      }
    ],
    "redFlags": [],
    "explanation": "This is the genuine Google sign-in URL with standard URL-encoded redirect parameters."
  },
  {
    "id": "url-24",
    "category": "url",
    "categoryTitle": "Identify Suspicious URL",
    "difficulty": "Hard",
    "type": "choice",
    "scenarioTitle": "URL Evaluation #24",
    "targetUrl": "https://appleid.apple.com-recover-session-token.id-auth.xyz/verify?session=1023",
    "options": [
      {
        "text": "Suspicious: Brand name is placed in a deceptive subdomain while the actual apex domain resides on a high-risk TLD",
        "isCorrect": true
      },
      {
        "text": "Suspicious: Modern corporate services never deploy session state tokens within browser navigation parameters",
        "isCorrect": false
      },
      {
        "text": "Legitimate: The URL begins with the authentic enterprise brand name in the leading hostname segment",
        "isCorrect": false
      },
      {
        "text": "Legitimate: The destination path includes recognized functional directories such as /login or /verify",
        "isCorrect": false
      }
    ],
    "redFlags": [
      "Deceptive subdomain prefix",
      "Abused cheap .xyz registry"
    ],
    "explanation": "Look immediately preceding the slash: the domain is id-auth.xyz, not apple.com."
  },
  {
    "id": "url-25",
    "category": "url",
    "categoryTitle": "Identify Suspicious URL",
    "difficulty": "Easy",
    "type": "choice",
    "scenarioTitle": "URL Evaluation #25",
    "targetUrl": "https://www.google.com/url?q=https://malicious-crypto-drainer.cc/steal?session=1024",
    "options": [
      {
        "text": "Suspicious: Brand name is placed in a deceptive subdomain while the actual apex domain resides on a high-risk TLD",
        "isCorrect": true
      },
      {
        "text": "Suspicious: Enterprise authentication portals are prohibited by web standards from utilizing URL path subdirectories",
        "isCorrect": false
      },
      {
        "text": "Legitimate: The URL begins with the authentic enterprise brand name in the leading hostname segment",
        "isCorrect": false
      },
      {
        "text": "Legitimate: The destination path includes recognized functional directories such as /login or /verify",
        "isCorrect": false
      }
    ],
    "redFlags": [
      "Open redirect exploit",
      "Malicious crypto drainer payload"
    ],
    "explanation": "Attackers abuse open redirectors on trusted web properties to bypass email filters."
  },
  {
    "id": "url-26",
    "category": "url",
    "categoryTitle": "Identify Suspicious URL",
    "difficulty": "Medium",
    "type": "choice",
    "scenarioTitle": "URL Evaluation #26",
    "targetUrl": "https://github.com/torvalds/linux/commits/master?session=1025",
    "options": [
      {
        "text": "Legitimate: Apex domain (github.com) matches verified organizational infrastructure with valid HTTPS protocol",
        "isCorrect": true
      },
      {
        "text": "Legitimate: URLs structured with multiple subdomain tiers are automatically pre-screened by root certificate authorities",
        "isCorrect": false
      },
      {
        "text": "Suspicious: Complex URL-encoded redirect parameters (%3A%2F%2F) indicate an unauthorized session hijacking injection",
        "isCorrect": false
      },
      {
        "text": "Suspicious: Authenticated single-sign-on workflows must always reside directly on the primary root domain homepage",
        "isCorrect": false
      }
    ],
    "redFlags": [],
    "explanation": "Authentic GitHub URL viewing official Linux kernel commit log."
  },
  {
    "id": "url-27",
    "category": "url",
    "categoryTitle": "Identify Suspicious URL",
    "difficulty": "Hard",
    "type": "choice",
    "scenarioTitle": "URL Evaluation #27",
    "targetUrl": "http://microsoft-support-login.com.windows-telemetry.biz/active-directory?session=1026",
    "options": [
      {
        "text": "Suspicious: Insecure HTTP protocol combined with an untrusted apex domain attempting credential harvesting",
        "isCorrect": true
      },
      {
        "text": "Suspicious: The presence of numerical query strings in the web address indicates an active buffer memory exploit",
        "isCorrect": false
      },
      {
        "text": "Legitimate: The URL begins with the authentic enterprise brand name in the leading hostname segment",
        "isCorrect": false
      },
      {
        "text": "Legitimate: The destination path includes recognized functional directories such as /login or /verify",
        "isCorrect": false
      }
    ],
    "redFlags": [
      "HTTP insecure",
      "Deceptive multi-subdomain structure"
    ],
    "explanation": "Insecure HTTP with nested subdomains designed to impersonate Microsoft."
  },
  {
    "id": "url-28",
    "category": "url",
    "categoryTitle": "Identify Suspicious URL",
    "difficulty": "Easy",
    "type": "choice",
    "scenarioTitle": "URL Evaluation #28",
    "targetUrl": "https://login.microsoftonline.com/common/oauth2/v2.0/authorize?session=1027",
    "options": [
      {
        "text": "Legitimate: Apex domain (login.microsoftonline.com) matches verified organizational infrastructure with valid HTTPS protocol",
        "isCorrect": true
      },
      {
        "text": "Legitimate: Web addresses utilizing secure TLS sockets are immune to server-side redirection or content tampering",
        "isCorrect": false
      },
      {
        "text": "Suspicious: The presence of extensive query strings and authentication tokens indicates a potential tracking vulnerability",
        "isCorrect": false
      },
      {
        "text": "Suspicious: Commercial enterprise platforms never deploy versioned API paths or regional subdomains for end-user traffic",
        "isCorrect": false
      }
    ],
    "redFlags": [],
    "explanation": "This is Microsoft's official global identity endpoint for enterprise single sign-on."
  },
  {
    "id": "url-29",
    "category": "url",
    "categoryTitle": "Identify Suspicious URL",
    "difficulty": "Medium",
    "type": "choice",
    "scenarioTitle": "URL Evaluation #29",
    "targetUrl": "https://paypal-resolution-center.info/dispute/case8921?session=1028",
    "options": [
      {
        "text": "Suspicious: Brand name is placed in a deceptive subdomain while the actual apex domain resides on a high-risk TLD",
        "isCorrect": true
      },
      {
        "text": "Suspicious: Modern corporate services never deploy session state tokens within browser navigation parameters",
        "isCorrect": false
      },
      {
        "text": "Legitimate: The hostname string incorporates familiar brand terminology before the path separator",
        "isCorrect": false
      },
      {
        "text": "Legitimate: The presence of an active HTTPS connection guarantees the destination is authenticated by the brand owner",
        "isCorrect": false
      }
    ],
    "redFlags": [
      "Fake brand domain on .info TLD"
    ],
    "explanation": "PayPal operates strictly on paypal.com. Hyphenated domains on .info are phishing clones."
  },
  {
    "id": "url-30",
    "category": "url",
    "categoryTitle": "Identify Suspicious URL",
    "difficulty": "Hard",
    "type": "choice",
    "scenarioTitle": "URL Evaluation #30",
    "targetUrl": "https://www.paypal.com/signin?session=1029",
    "options": [
      {
        "text": "Legitimate: Apex domain (www.paypal.com) matches verified organizational infrastructure with valid HTTPS protocol",
        "isCorrect": true
      },
      {
        "text": "Legitimate: Any URL that successfully resolves without a browser security warning is guaranteed secure by DNS providers",
        "isCorrect": false
      },
      {
        "text": "Suspicious: Complex URL-encoded redirect parameters (%3A%2F%2F) indicate an unauthorized session hijacking injection",
        "isCorrect": false
      },
      {
        "text": "Suspicious: Authenticated single-sign-on workflows must always reside directly on the primary root domain homepage",
        "isCorrect": false
      }
    ],
    "redFlags": [],
    "explanation": "Canonical PayPal sign-in URL with valid HTTPS encryption."
  },
  {
    "id": "url-31",
    "category": "url",
    "categoryTitle": "Identify Suspicious URL",
    "difficulty": "Easy",
    "type": "choice",
    "scenarioTitle": "URL Evaluation #31",
    "targetUrl": "https://amazon.com@attacker-controlled-server.com/login?session=1030",
    "options": [
      {
        "text": "Suspicious: Apex domain deliberately mimics authentic enterprise naming to deceive users at a glance",
        "isCorrect": true
      },
      {
        "text": "Suspicious: Modern corporate services never deploy session state tokens within browser navigation parameters",
        "isCorrect": false
      },
      {
        "text": "Legitimate: The hostname string incorporates familiar brand terminology before the path separator",
        "isCorrect": false
      },
      {
        "text": "Legitimate: The presence of an active HTTPS connection guarantees the destination is authenticated by the brand owner",
        "isCorrect": false
      }
    ],
    "redFlags": [
      "Basic Auth host spoofing (@ symbol trick)"
    ],
    "explanation": "Browsers interpret everything before an \"@\" symbol as username credentials; the actual host reached is attacker-controlled-server.com."
  },
  {
    "id": "url-32",
    "category": "url",
    "categoryTitle": "Identify Suspicious URL",
    "difficulty": "Medium",
    "type": "choice",
    "scenarioTitle": "URL Evaluation #32",
    "targetUrl": "https://portal.azure.com/#home?session=1031",
    "options": [
      {
        "text": "Legitimate: Apex domain (portal.azure.com) matches verified organizational infrastructure with valid HTTPS protocol",
        "isCorrect": true
      },
      {
        "text": "Legitimate: Any URL that successfully resolves without a browser security warning is guaranteed secure by DNS providers",
        "isCorrect": false
      },
      {
        "text": "Suspicious: Complex URL-encoded redirect parameters (%3A%2F%2F) indicate an unauthorized session hijacking injection",
        "isCorrect": false
      },
      {
        "text": "Suspicious: Authenticated single-sign-on workflows must always reside directly on the primary root domain homepage",
        "isCorrect": false
      }
    ],
    "redFlags": [],
    "explanation": "Official Microsoft Azure administration dashboard."
  },
  {
    "id": "url-33",
    "category": "url",
    "categoryTitle": "Identify Suspicious URL",
    "difficulty": "Hard",
    "type": "choice",
    "scenarioTitle": "URL Evaluation #33",
    "targetUrl": "http://wellsfargo.com.security-account-checkup.top/online/banking?session=1032",
    "options": [
      {
        "text": "Suspicious: Insecure HTTP protocol combined with an untrusted apex domain attempting credential harvesting",
        "isCorrect": true
      },
      {
        "text": "Suspicious: Modern corporate services never deploy session state tokens within browser navigation parameters",
        "isCorrect": false
      },
      {
        "text": "Legitimate: The hostname string incorporates familiar brand terminology before the path separator",
        "isCorrect": false
      },
      {
        "text": "Legitimate: The presence of an active HTTPS connection guarantees the destination is authenticated by the brand owner",
        "isCorrect": false
      }
    ],
    "redFlags": [
      "Insecure HTTP",
      "Subdomain spoofing",
      "Abused .top registry"
    ],
    "explanation": "The apex domain is security-account-checkup.top, not Wells Fargo."
  },
  {
    "id": "url-34",
    "category": "url",
    "categoryTitle": "Identify Suspicious URL",
    "difficulty": "Easy",
    "type": "choice",
    "scenarioTitle": "URL Evaluation #34",
    "targetUrl": "https://auth0.com/auth/login?session=1033",
    "options": [
      {
        "text": "Legitimate: Apex domain (auth0.com) matches verified organizational infrastructure with valid HTTPS protocol",
        "isCorrect": true
      },
      {
        "text": "Legitimate: Any URL that successfully resolves without a browser security warning is guaranteed secure by DNS providers",
        "isCorrect": false
      },
      {
        "text": "Suspicious: The presence of extensive query strings and authentication tokens indicates a potential tracking vulnerability",
        "isCorrect": false
      },
      {
        "text": "Suspicious: Commercial enterprise platforms never deploy versioned API paths or regional subdomains for end-user traffic",
        "isCorrect": false
      }
    ],
    "redFlags": [],
    "explanation": "Auth0 is a legitimate Okta-owned identity management platform."
  },
  {
    "id": "url-35",
    "category": "url",
    "categoryTitle": "Identify Suspicious URL",
    "difficulty": "Medium",
    "type": "choice",
    "scenarioTitle": "URL Evaluation #35",
    "targetUrl": "https://netflix-subscription-renew.cc/account/pay?session=1034",
    "options": [
      {
        "text": "Suspicious: Brand name is placed in a deceptive subdomain while the actual apex domain resides on a high-risk TLD",
        "isCorrect": true
      },
      {
        "text": "Suspicious: The presence of numerical query strings in the web address indicates an active buffer memory exploit",
        "isCorrect": false
      },
      {
        "text": "Legitimate: The URL begins with the authentic enterprise brand name in the leading hostname segment",
        "isCorrect": false
      },
      {
        "text": "Legitimate: The destination path includes recognized functional directories such as /login or /verify",
        "isCorrect": false
      }
    ],
    "redFlags": [
      "Phishing brand clone on .cc TLD"
    ],
    "explanation": "Netflix hosts billing on netflix.com, never on external .cc domains."
  },
  {
    "id": "url-36",
    "category": "url",
    "categoryTitle": "Identify Suspicious URL",
    "difficulty": "Hard",
    "type": "choice",
    "scenarioTitle": "URL Evaluation #36",
    "targetUrl": "https://www.netflix.com/youraccount?session=1035",
    "options": [
      {
        "text": "Legitimate: Apex domain (www.netflix.com) matches verified organizational infrastructure with valid HTTPS protocol",
        "isCorrect": true
      },
      {
        "text": "Legitimate: URLs structured with multiple subdomain tiers are automatically pre-screened by root certificate authorities",
        "isCorrect": false
      },
      {
        "text": "Suspicious: Complex URL-encoded redirect parameters (%3A%2F%2F) indicate an unauthorized session hijacking injection",
        "isCorrect": false
      },
      {
        "text": "Suspicious: Authenticated single-sign-on workflows must always reside directly on the primary root domain homepage",
        "isCorrect": false
      }
    ],
    "redFlags": [],
    "explanation": "Authentic Netflix account settings URL on official domain."
  },
  {
    "id": "url-37",
    "category": "url",
    "categoryTitle": "Identify Suspicious URL",
    "difficulty": "Easy",
    "type": "choice",
    "scenarioTitle": "URL Evaluation #37",
    "targetUrl": "https://dropbox.com-file-download-viewer.xyz/s/q3_report.pdf?session=1036",
    "options": [
      {
        "text": "Suspicious: Brand name is placed in a deceptive subdomain while the actual apex domain resides on a high-risk TLD",
        "isCorrect": true
      },
      {
        "text": "Suspicious: The presence of numerical query strings in the web address indicates an active buffer memory exploit",
        "isCorrect": false
      },
      {
        "text": "Legitimate: The URL begins with the authentic enterprise brand name in the leading hostname segment",
        "isCorrect": false
      },
      {
        "text": "Legitimate: The destination path includes recognized functional directories such as /login or /verify",
        "isCorrect": false
      }
    ],
    "redFlags": [
      "Hyphenated lookalike domain on .xyz"
    ],
    "explanation": "The domain is dropbox.com-file-download-viewer.xyz, an attacker-registered domain."
  },
  {
    "id": "url-38",
    "category": "url",
    "categoryTitle": "Identify Suspicious URL",
    "difficulty": "Medium",
    "type": "choice",
    "scenarioTitle": "URL Evaluation #38",
    "targetUrl": "https://www.dropbox.com/scl/fi/8910481/report.pdf?rlkey=99381?session=1037",
    "options": [
      {
        "text": "Legitimate: Apex domain (www.dropbox.com) matches verified organizational infrastructure with valid HTTPS protocol",
        "isCorrect": true
      },
      {
        "text": "Legitimate: Any URL that successfully resolves without a browser security warning is guaranteed secure by DNS providers",
        "isCorrect": false
      },
      {
        "text": "Suspicious: Complex URL-encoded redirect parameters (%3A%2F%2F) indicate an unauthorized session hijacking injection",
        "isCorrect": false
      },
      {
        "text": "Suspicious: Authenticated single-sign-on workflows must always reside directly on the primary root domain homepage",
        "isCorrect": false
      }
    ],
    "redFlags": [],
    "explanation": "Standard Dropbox modern file-sharing URL format."
  },
  {
    "id": "url-39",
    "category": "url",
    "categoryTitle": "Identify Suspicious URL",
    "difficulty": "Hard",
    "type": "choice",
    "scenarioTitle": "URL Evaluation #39",
    "targetUrl": "http://steamcommunity.com.trade-offer-steam.net/trade/849201?session=1038",
    "options": [
      {
        "text": "Suspicious: Insecure HTTP protocol combined with an untrusted apex domain attempting credential harvesting",
        "isCorrect": true
      },
      {
        "text": "Suspicious: Enterprise authentication portals are prohibited by web standards from utilizing URL path subdirectories",
        "isCorrect": false
      },
      {
        "text": "Legitimate: The hostname string incorporates familiar brand terminology before the path separator",
        "isCorrect": false
      },
      {
        "text": "Legitimate: The presence of an active HTTPS connection guarantees the destination is authenticated by the brand owner",
        "isCorrect": false
      }
    ],
    "redFlags": [
      "Insecure HTTP",
      "Steam trade inventory scam"
    ],
    "explanation": "The apex domain is trade-offer-steam.net, designed to steal Steam inventories."
  },
  {
    "id": "url-40",
    "category": "url",
    "categoryTitle": "Identify Suspicious URL",
    "difficulty": "Easy",
    "type": "choice",
    "scenarioTitle": "URL Evaluation #40",
    "targetUrl": "https://steamcommunity.com/id/gaben/tradeoffers/?session=1039",
    "options": [
      {
        "text": "Legitimate: Apex domain (steamcommunity.com) matches verified organizational infrastructure with valid HTTPS protocol",
        "isCorrect": true
      },
      {
        "text": "Legitimate: URLs structured with multiple subdomain tiers are automatically pre-screened by root certificate authorities",
        "isCorrect": false
      },
      {
        "text": "Suspicious: The presence of extensive query strings and authentication tokens indicates a potential tracking vulnerability",
        "isCorrect": false
      },
      {
        "text": "Suspicious: Commercial enterprise platforms never deploy versioned API paths or regional subdomains for end-user traffic",
        "isCorrect": false
      }
    ],
    "redFlags": [],
    "explanation": "Official Steam Community trading URL."
  },
  {
    "id": "url-41",
    "category": "url",
    "categoryTitle": "Identify Suspicious URL",
    "difficulty": "Medium",
    "type": "choice",
    "scenarioTitle": "URL Evaluation #41",
    "targetUrl": "http://chase.com.account-verify-secure.top/auth/login.php?session=1040",
    "options": [
      {
        "text": "Suspicious: Insecure HTTP protocol combined with an untrusted apex domain attempting credential harvesting",
        "isCorrect": true
      },
      {
        "text": "Suspicious: Enterprise authentication portals are prohibited by web standards from utilizing URL path subdirectories",
        "isCorrect": false
      },
      {
        "text": "Legitimate: The URL begins with the authentic enterprise brand name in the leading hostname segment",
        "isCorrect": false
      },
      {
        "text": "Legitimate: The destination path includes recognized functional directories such as /login or /verify",
        "isCorrect": false
      }
    ],
    "redFlags": [
      "Insecure HTTP",
      "Subdomain trap",
      "Suspicious .top TLD"
    ],
    "explanation": "The apex domain is account-verify-secure.top, NOT chase.com. It also lacks HTTPS."
  },
  {
    "id": "url-42",
    "category": "url",
    "categoryTitle": "Identify Suspicious URL",
    "difficulty": "Hard",
    "type": "choice",
    "scenarioTitle": "URL Evaluation #42",
    "targetUrl": "https://192.0.2.145:8443/shared/invoice_march.pdf.exe?session=1041",
    "options": [
      {
        "text": "Suspicious: URL delivers an executable binary concealed beneath a deceptive double file extension",
        "isCorrect": true
      },
      {
        "text": "Suspicious: Enterprise authentication portals are prohibited by web standards from utilizing URL path subdirectories",
        "isCorrect": false
      },
      {
        "text": "Legitimate: The URL begins with the authentic enterprise brand name in the leading hostname segment",
        "isCorrect": false
      },
      {
        "text": "Legitimate: The destination path includes recognized functional directories such as /login or /verify",
        "isCorrect": false
      }
    ],
    "redFlags": [
      "Raw IP host",
      "Double extension malware payload (.pdf.exe)"
    ],
    "explanation": "Legitimate cloud services use domain names. Raw IP addresses bypass reputation filters, and .pdf.exe is malware."
  },
  {
    "id": "hv-1",
    "category": "hover",
    "categoryTitle": "Hover Over Links Inspector",
    "difficulty": "Easy",
    "type": "hover-inspect",
    "scenarioTitle": "Hover Inspection Challenge #1",
    "anchorText": "https://www.irs.gov/refunds/claim-online",
    "hiddenHref": "http://irs-tax-refund-portal2026.online/claim.html",
    "promptText": "Hover your cursor over the link below to inspect the simulated browser status bar at the bottom-left:",
    "context": "IRS Email: \"Your 2025 federal tax rebate of $640 is ready to deposit.\"",
    "options": [
      {
        "text": "Phishing: Visible anchor text displays a trusted domain, but hover inspection exposes a mismatched malicious destination",
        "isCorrect": true
      },
      {
        "text": "Phishing: Any hyperlink executing outside the internal local intranet perimeter constitutes an active network exploit",
        "isCorrect": false
      },
      {
        "text": "Legitimate: The visible link wording precisely matches the authentic corporate communications branding",
        "isCorrect": false
      },
      {
        "text": "Legitimate: The hidden destination URL begins with standard navigation directory paths like /login or /portal",
        "isCorrect": false
      }
    ],
    "redFlags": [
      "Mismatched anchor text vs hidden href",
      "Insecure HTTP phishing page"
    ],
    "explanation": "HTML allows anchor text to display anything while pointing to an arbitrary malicious endpoint."
  },
  {
    "id": "hv-2",
    "category": "hover",
    "categoryTitle": "Hover Over Links Inspector",
    "difficulty": "Medium",
    "type": "hover-inspect",
    "scenarioTitle": "Hover Inspection Challenge #2",
    "anchorText": "Accept Connection Request",
    "hiddenHref": "https://www.linkedin.com/comm/mynetwork/invite-accept/8932019",
    "promptText": "Hover your cursor over the link below to inspect the simulated browser status bar at the bottom-left:",
    "context": "Email from LinkedIn: \"Sarah Jenkins wants to connect with you.\"",
    "options": [
      {
        "text": "Legitimate: Hover inspection confirms destination resolves directly to the authentic corporate domain (www.linkedin.com) over HTTPS",
        "isCorrect": true
      },
      {
        "text": "Legitimate: Action buttons embedded in enterprise productivity software are pre-authenticated by root security policies",
        "isCorrect": false
      },
      {
        "text": "Phishing: The inclusion of complex query parameters and session tokens indicates an unauthorized tracking injection",
        "isCorrect": false
      },
      {
        "text": "Phishing: Action buttons featuring high-contrast colored backgrounds indicate high-risk third-party script embedding",
        "isCorrect": false
      }
    ],
    "redFlags": [],
    "explanation": "Hovering reveals that the button legitimately leads to linkedin.com over HTTPS."
  },
  {
    "id": "hv-3",
    "category": "hover",
    "categoryTitle": "Hover Over Links Inspector",
    "difficulty": "Hard",
    "type": "hover-inspect",
    "scenarioTitle": "Hover Inspection Challenge #3",
    "anchorText": "https://www.dropbox.com/s/budget-q4-2026.xlsx",
    "hiddenHref": "http://bit.ly/3xP9qLm?redirect_to=dropbox-login-harvest.ru",
    "promptText": "Hover your cursor over the link below to inspect the simulated browser status bar at the bottom-left:",
    "context": "Dropbox notification: \"Finance Team shared a spreadsheet with you.\"",
    "options": [
      {
        "text": "Phishing: URL shortener masks the real destination, redirecting traffic to an unverified external harvesting domain",
        "isCorrect": true
      },
      {
        "text": "Phishing: Any hyperlink executing outside the internal local intranet perimeter constitutes an active network exploit",
        "isCorrect": false
      },
      {
        "text": "Legitimate: The visible anchor text clearly displays the authorized institutional name and official service title",
        "isCorrect": false
      },
      {
        "text": "Legitimate: Web hyperlinks rendered inside verified corporate email software are pre-screened and cannot fail",
        "isCorrect": false
      }
    ],
    "redFlags": [
      "Shortened link obfuscation",
      "Target parameter pointing to Russian (.ru) harvesting site"
    ],
    "explanation": "Attackers use URL shorteners to conceal malicious credential harvest targets."
  },
  {
    "id": "hv-4",
    "category": "hover",
    "categoryTitle": "Hover Over Links Inspector",
    "difficulty": "Easy",
    "type": "hover-inspect",
    "scenarioTitle": "Hover Inspection Challenge #4",
    "anchorText": "Review and Sign Envelope",
    "hiddenHref": "https://docusign.net.contract-signing-service.info/envelope?id=99281",
    "promptText": "Hover your cursor over the link below to inspect the simulated browser status bar at the bottom-left:",
    "context": "DocuSign: \"Please sign: Non-Disclosure Agreement 2026.pdf\"",
    "options": [
      {
        "text": "Phishing: URL shortener masks the real destination, redirecting traffic to an unverified external harvesting domain",
        "isCorrect": true
      },
      {
        "text": "Phishing: Hyperlinks configured with target attributes are automatically flagged as adversary-in-the-middle traps",
        "isCorrect": false
      },
      {
        "text": "Legitimate: The visible anchor text clearly displays the authorized institutional name and official service title",
        "isCorrect": false
      },
      {
        "text": "Legitimate: Web hyperlinks rendered inside verified corporate email software are pre-screened and cannot fail",
        "isCorrect": false
      }
    ],
    "redFlags": [
      "Deceptive subdomain prefix"
    ],
    "explanation": "Hovering unmasks that the host is contract-signing-service.info, NOT DocuSign."
  },
  {
    "id": "hv-5",
    "category": "hover",
    "categoryTitle": "Hover Over Links Inspector",
    "difficulty": "Medium",
    "type": "hover-inspect",
    "scenarioTitle": "Hover Inspection Challenge #5",
    "anchorText": "Download Critical Kernel Patch KB90210.exe",
    "hiddenHref": "https://download.microsoft.com/download/updates/2026/patch-kb90210.msi",
    "promptText": "Hover your cursor over the link below to inspect the simulated browser status bar at the bottom-left:",
    "context": "Microsoft Security Advisory: \"Emergency patch for Windows RPC vulnerability.\"",
    "options": [
      {
        "text": "Legitimate: Hover inspection confirms destination resolves directly to the authentic corporate domain (download.microsoft.com) over HTTPS",
        "isCorrect": true
      },
      {
        "text": "Legitimate: Internal email hyperlinks containing encrypted tracking tokens are cryptographically immune to tampering",
        "isCorrect": false
      },
      {
        "text": "Phishing: Long redirect query strings within the destination URL represent an active credential exploitation attempt",
        "isCorrect": false
      },
      {
        "text": "Phishing: Automated collaboration invitations linking directly to meeting identifiers violate zero-trust network boundaries",
        "isCorrect": false
      }
    ],
    "redFlags": [],
    "explanation": "Hovering confirms the link resolves cleanly to Microsoft's authentic distribution repository."
  },
  {
    "id": "hv-6",
    "category": "hover",
    "categoryTitle": "Hover Over Links Inspector",
    "difficulty": "Hard",
    "type": "hover-inspect",
    "scenarioTitle": "Hover Inspection Challenge #6",
    "anchorText": "View Zoom Recording",
    "hiddenHref": "https://us04web.zoom.us/rec/share/849201948",
    "promptText": "Hover your cursor over the link below to inspect the simulated browser status bar at the bottom-left:",
    "context": "Zoom Cloud: \"Your meeting recording is ready.\"",
    "options": [
      {
        "text": "Legitimate: Hover inspection confirms destination resolves directly to the authentic corporate domain (us04web.zoom.us) over HTTPS",
        "isCorrect": true
      },
      {
        "text": "Legitimate: Internal email hyperlinks containing encrypted tracking tokens are cryptographically immune to tampering",
        "isCorrect": false
      },
      {
        "text": "Phishing: The inclusion of complex query parameters and session tokens indicates an unauthorized tracking injection",
        "isCorrect": false
      },
      {
        "text": "Phishing: Action buttons featuring high-contrast colored backgrounds indicate high-risk third-party script embedding",
        "isCorrect": false
      }
    ],
    "redFlags": [],
    "explanation": "Zoom distributes recordings through geographic clusters such as us04web.zoom.us."
  },
  {
    "id": "hv-7",
    "category": "hover",
    "categoryTitle": "Hover Over Links Inspector",
    "difficulty": "Easy",
    "type": "hover-inspect",
    "scenarioTitle": "Hover Inspection Challenge #7",
    "anchorText": "https://chase.com/verify-account",
    "hiddenHref": "http://185.220.101.4/chase-login/index.php",
    "promptText": "Hover your cursor over the link below to inspect the simulated browser status bar at the bottom-left:",
    "context": "Chase Fraud Alert: \"Confirm identity after suspicious login.\"",
    "options": [
      {
        "text": "Phishing: Hover inspection exposes an unencrypted raw IP address endpoint designed to bypass reputation filters",
        "isCorrect": true
      },
      {
        "text": "Phishing: Enterprise security compliance strictly prohibits hyperlinks from containing custom CSS button styling",
        "isCorrect": false
      },
      {
        "text": "Legitimate: The visible anchor text clearly displays the authorized institutional name and official service title",
        "isCorrect": false
      },
      {
        "text": "Legitimate: Web hyperlinks rendered inside verified corporate email software are pre-screened and cannot fail",
        "isCorrect": false
      }
    ],
    "redFlags": [
      "Raw IP address target",
      "Insecure HTTP"
    ],
    "explanation": "Hover reveals the link routes directly to a rogue server IP address."
  },
  {
    "id": "hv-8",
    "category": "hover",
    "categoryTitle": "Hover Over Links Inspector",
    "difficulty": "Medium",
    "type": "hover-inspect",
    "scenarioTitle": "Hover Inspection Challenge #8",
    "anchorText": "Manage Google One Storage",
    "hiddenHref": "https://one.google.com/storage",
    "promptText": "Hover your cursor over the link below to inspect the simulated browser status bar at the bottom-left:",
    "context": "Google One: \"You have used 82% of your 100GB plan.\"",
    "options": [
      {
        "text": "Legitimate: Hover inspection confirms destination resolves directly to the authentic corporate domain (one.google.com) over HTTPS",
        "isCorrect": true
      },
      {
        "text": "Legitimate: Action buttons embedded in enterprise productivity software are pre-authenticated by root security policies",
        "isCorrect": false
      },
      {
        "text": "Phishing: The inclusion of complex query parameters and session tokens indicates an unauthorized tracking injection",
        "isCorrect": false
      },
      {
        "text": "Phishing: Action buttons featuring high-contrast colored backgrounds indicate high-risk third-party script embedding",
        "isCorrect": false
      }
    ],
    "redFlags": [],
    "explanation": "Hovering confirms the canonical google.com domain."
  },
  {
    "id": "hv-9",
    "category": "hover",
    "categoryTitle": "Hover Over Links Inspector",
    "difficulty": "Hard",
    "type": "hover-inspect",
    "scenarioTitle": "Hover Inspection Challenge #9",
    "anchorText": "Track UPS Package",
    "hiddenHref": "https://ups.com.delivery-tracking-reschedule.xyz/track",
    "promptText": "Hover your cursor over the link below to inspect the simulated browser status bar at the bottom-left:",
    "context": "UPS Notification: \"Address missing apartment number.\"",
    "options": [
      {
        "text": "Phishing: Action button conceals an unauthorized destination on a deceptive third-party domain",
        "isCorrect": true
      },
      {
        "text": "Phishing: Hyperlinks configured with target attributes are automatically flagged as adversary-in-the-middle traps",
        "isCorrect": false
      },
      {
        "text": "Legitimate: The visible anchor text clearly displays the authorized institutional name and official service title",
        "isCorrect": false
      },
      {
        "text": "Legitimate: Web hyperlinks rendered inside verified corporate email software are pre-screened and cannot fail",
        "isCorrect": false
      }
    ],
    "redFlags": [
      "Subdomain deception trap"
    ],
    "explanation": "Hovering exposes that the apex domain is an untrusted .xyz registration."
  },
  {
    "id": "hv-10",
    "category": "hover",
    "categoryTitle": "Hover Over Links Inspector",
    "difficulty": "Easy",
    "type": "hover-inspect",
    "scenarioTitle": "Hover Inspection Challenge #10",
    "anchorText": "Review GitHub Pull Request #88",
    "hiddenHref": "https://github.com/mycompany/backend-api/pull/88",
    "promptText": "Hover your cursor over the link below to inspect the simulated browser status bar at the bottom-left:",
    "context": "GitHub notification: \"New pull request ready for review.\"",
    "options": [
      {
        "text": "Legitimate: Hover inspection confirms destination resolves directly to the authentic corporate domain (github.com) over HTTPS",
        "isCorrect": true
      },
      {
        "text": "Legitimate: Internal email hyperlinks containing encrypted tracking tokens are cryptographically immune to tampering",
        "isCorrect": false
      },
      {
        "text": "Phishing: The inclusion of complex query parameters and session tokens indicates an unauthorized tracking injection",
        "isCorrect": false
      },
      {
        "text": "Phishing: Action buttons featuring high-contrast colored backgrounds indicate high-risk third-party script embedding",
        "isCorrect": false
      }
    ],
    "redFlags": [],
    "explanation": "Hover inspection confirms clean navigation to GitHub repository."
  },
  {
    "id": "hv-11",
    "category": "hover",
    "categoryTitle": "Hover Over Links Inspector",
    "difficulty": "Medium",
    "type": "hover-inspect",
    "scenarioTitle": "Hover Inspection Challenge #11",
    "anchorText": "Update Netflix Payment",
    "hiddenHref": "http://netflix-reactivate-account.cc/billing.php",
    "promptText": "Hover your cursor over the link below to inspect the simulated browser status bar at the bottom-left:",
    "context": "Netflix: \"Membership paused due to card decline.\"",
    "options": [
      {
        "text": "Phishing: Action button conceals an unauthorized destination on a deceptive third-party domain",
        "isCorrect": true
      },
      {
        "text": "Phishing: Enterprise security compliance strictly prohibits hyperlinks from containing custom CSS button styling",
        "isCorrect": false
      },
      {
        "text": "Legitimate: The visible anchor text clearly displays the authorized institutional name and official service title",
        "isCorrect": false
      },
      {
        "text": "Legitimate: Web hyperlinks rendered inside verified corporate email software are pre-screened and cannot fail",
        "isCorrect": false
      }
    ],
    "redFlags": [
      "Insecure HTTP",
      "Scam .cc domain"
    ],
    "explanation": "Hovering unmasks an unencrypted scam domain hosted on .cc."
  },
  {
    "id": "hv-12",
    "category": "hover",
    "categoryTitle": "Hover Over Links Inspector",
    "difficulty": "Hard",
    "type": "hover-inspect",
    "scenarioTitle": "Hover Inspection Challenge #12",
    "anchorText": "Read Figma Design Feedback",
    "hiddenHref": "https://www.figma.com/file/948201/Design-System",
    "promptText": "Hover your cursor over the link below to inspect the simulated browser status bar at the bottom-left:",
    "context": "Figma: \"Elena commented on your component library.\"",
    "options": [
      {
        "text": "Legitimate: Hover inspection confirms destination resolves directly to the authentic corporate domain (www.figma.com) over HTTPS",
        "isCorrect": true
      },
      {
        "text": "Legitimate: Action buttons embedded in enterprise productivity software are pre-authenticated by root security policies",
        "isCorrect": false
      },
      {
        "text": "Phishing: The inclusion of complex query parameters and session tokens indicates an unauthorized tracking injection",
        "isCorrect": false
      },
      {
        "text": "Phishing: Action buttons featuring high-contrast colored backgrounds indicate high-risk third-party script embedding",
        "isCorrect": false
      }
    ],
    "redFlags": [],
    "explanation": "Hover confirms authentic Figma collaboration portal."
  },
  {
    "id": "hv-13",
    "category": "hover",
    "categoryTitle": "Hover Over Links Inspector",
    "difficulty": "Easy",
    "type": "hover-inspect",
    "scenarioTitle": "Hover Inspection Challenge #13",
    "anchorText": "https://www.paypal.com/myaccount/money",
    "hiddenHref": "http://paypal-payout-verification.top/confirm",
    "promptText": "Hover your cursor over the link below to inspect the simulated browser status bar at the bottom-left:",
    "context": "PayPal Notice: \"You received $150.00 from Alex.\"",
    "options": [
      {
        "text": "Phishing: Visible anchor text displays a trusted domain, but hover inspection exposes a mismatched malicious destination",
        "isCorrect": true
      },
      {
        "text": "Phishing: Hyperlinks configured with target attributes are automatically flagged as adversary-in-the-middle traps",
        "isCorrect": false
      },
      {
        "text": "Legitimate: The visible link wording precisely matches the authentic corporate communications branding",
        "isCorrect": false
      },
      {
        "text": "Legitimate: The hidden destination URL begins with standard navigation directory paths like /login or /portal",
        "isCorrect": false
      }
    ],
    "redFlags": [
      "Anchor text spoofing",
      "Unvetted .top TLD"
    ],
    "explanation": "The hidden destination points to an unvetted .top credential harvesting site."
  },
  {
    "id": "hv-14",
    "category": "hover",
    "categoryTitle": "Hover Over Links Inspector",
    "difficulty": "Medium",
    "type": "hover-inspect",
    "scenarioTitle": "Hover Inspection Challenge #14",
    "anchorText": "Join Microsoft Teams Call",
    "hiddenHref": "https://teams.microsoft.com/l/meetup-join/19%3ameeting",
    "promptText": "Hover your cursor over the link below to inspect the simulated browser status bar at the bottom-left:",
    "context": "Teams invite: \"Project Sync starts now.\"",
    "options": [
      {
        "text": "Legitimate: Hover inspection confirms destination resolves directly to the authentic corporate domain (teams.microsoft.com) over HTTPS",
        "isCorrect": true
      },
      {
        "text": "Legitimate: Any URL inspected via desktop status preview is certified safe by the operating system kernel",
        "isCorrect": false
      },
      {
        "text": "Phishing: The inclusion of complex query parameters and session tokens indicates an unauthorized tracking injection",
        "isCorrect": false
      },
      {
        "text": "Phishing: Action buttons featuring high-contrast colored backgrounds indicate high-risk third-party script embedding",
        "isCorrect": false
      }
    ],
    "redFlags": [],
    "explanation": "Standard Microsoft Teams deep-link for scheduled calendar calls."
  },
  {
    "id": "hv-15",
    "category": "hover",
    "categoryTitle": "Hover Over Links Inspector",
    "difficulty": "Hard",
    "type": "hover-inspect",
    "scenarioTitle": "Hover Inspection Challenge #15",
    "anchorText": "Claim Amazon $100 Holiday Voucher",
    "hiddenHref": "https://amazon.com.rewards-holiday-gift.top/claim",
    "promptText": "Hover your cursor over the link below to inspect the simulated browser status bar at the bottom-left:",
    "context": "Amazon: \"Claim your customer appreciation reward.\"",
    "options": [
      {
        "text": "Phishing: Action button conceals an unauthorized destination on a deceptive third-party domain",
        "isCorrect": true
      },
      {
        "text": "Phishing: Any hyperlink executing outside the internal local intranet perimeter constitutes an active network exploit",
        "isCorrect": false
      },
      {
        "text": "Legitimate: The visible link wording precisely matches the authentic corporate communications branding",
        "isCorrect": false
      },
      {
        "text": "Legitimate: The hidden destination URL begins with standard navigation directory paths like /login or /portal",
        "isCorrect": false
      }
    ],
    "redFlags": [
      "Subdomain deception"
    ],
    "explanation": "Hover unmasks rewards-holiday-gift.top as the actual host."
  },
  {
    "id": "hv-16",
    "category": "hover",
    "categoryTitle": "Hover Over Links Inspector",
    "difficulty": "Easy",
    "type": "hover-inspect",
    "scenarioTitle": "Hover Inspection Challenge #16",
    "anchorText": "Read Slack Channel Message",
    "hiddenHref": "https://myworkspace.slack.com/archives/C01234/p89320",
    "promptText": "Hover your cursor over the link below to inspect the simulated browser status bar at the bottom-left:",
    "context": "Slack: \"You were mentioned in #general.\"",
    "options": [
      {
        "text": "Legitimate: Hover inspection confirms destination resolves directly to the authentic corporate domain (myworkspace.slack.com) over HTTPS",
        "isCorrect": true
      },
      {
        "text": "Legitimate: Action buttons embedded in enterprise productivity software are pre-authenticated by root security policies",
        "isCorrect": false
      },
      {
        "text": "Phishing: The inclusion of complex query parameters and session tokens indicates an unauthorized tracking injection",
        "isCorrect": false
      },
      {
        "text": "Phishing: Action buttons featuring high-contrast colored backgrounds indicate high-risk third-party script embedding",
        "isCorrect": false
      }
    ],
    "redFlags": [],
    "explanation": "Valid Slack enterprise archive permalink."
  },
  {
    "id": "hv-17",
    "category": "hover",
    "categoryTitle": "Hover Over Links Inspector",
    "difficulty": "Medium",
    "type": "hover-inspect",
    "scenarioTitle": "Hover Inspection Challenge #17",
    "anchorText": "https://appleid.apple.com",
    "hiddenHref": "https://apple-account-recovery-session.info/login",
    "promptText": "Hover your cursor over the link below to inspect the simulated browser status bar at the bottom-left:",
    "context": "Apple Security: \"New login from unknown iPad.\"",
    "options": [
      {
        "text": "Phishing: Visible anchor text displays a trusted domain, but hover inspection exposes a mismatched malicious destination",
        "isCorrect": true
      },
      {
        "text": "Phishing: Enterprise security compliance strictly prohibits hyperlinks from containing custom CSS button styling",
        "isCorrect": false
      },
      {
        "text": "Legitimate: The visible link wording precisely matches the authentic corporate communications branding",
        "isCorrect": false
      },
      {
        "text": "Legitimate: The hidden destination URL begins with standard navigation directory paths like /login or /portal",
        "isCorrect": false
      }
    ],
    "redFlags": [
      "Mismatched anchor text",
      "Third-party .info domain"
    ],
    "explanation": "Classic mismatched hyperlink. Always hover to verify true destination."
  },
  {
    "id": "hv-18",
    "category": "hover",
    "categoryTitle": "Hover Over Links Inspector",
    "difficulty": "Hard",
    "type": "hover-inspect",
    "scenarioTitle": "Hover Inspection Challenge #18",
    "anchorText": "View AWS CloudWatch Billing Alarm",
    "hiddenHref": "https://console.aws.amazon.com/cloudwatch/home",
    "promptText": "Hover your cursor over the link below to inspect the simulated browser status bar at the bottom-left:",
    "context": "AWS: \"Billing alert: Monthly spend exceeded $500.\"",
    "options": [
      {
        "text": "Legitimate: Hover inspection confirms destination resolves directly to the authentic corporate domain (console.aws.amazon.com) over HTTPS",
        "isCorrect": true
      },
      {
        "text": "Legitimate: Action buttons embedded in enterprise productivity software are pre-authenticated by root security policies",
        "isCorrect": false
      },
      {
        "text": "Phishing: Long redirect query strings within the destination URL represent an active credential exploitation attempt",
        "isCorrect": false
      },
      {
        "text": "Phishing: Automated collaboration invitations linking directly to meeting identifiers violate zero-trust network boundaries",
        "isCorrect": false
      }
    ],
    "redFlags": [],
    "explanation": "Official AWS management console endpoint."
  },
  {
    "id": "hv-19",
    "category": "hover",
    "categoryTitle": "Hover Over Links Inspector",
    "difficulty": "Easy",
    "type": "hover-inspect",
    "scenarioTitle": "Hover Inspection Challenge #19",
    "anchorText": "Download Adobe Acrobat PDF Reader",
    "hiddenHref": "http://adobe-reader-update2026.net/Acrobat_Setup.exe",
    "promptText": "Hover your cursor over the link below to inspect the simulated browser status bar at the bottom-left:",
    "context": "Document Viewer: \"Install PDF reader to view contract.\"",
    "options": [
      {
        "text": "Phishing: Hidden destination points to an unverified direct binary download disguised as normal documentation",
        "isCorrect": true
      },
      {
        "text": "Phishing: Hyperlinks configured with target attributes are automatically flagged as adversary-in-the-middle traps",
        "isCorrect": false
      },
      {
        "text": "Legitimate: The visible anchor text clearly displays the authorized institutional name and official service title",
        "isCorrect": false
      },
      {
        "text": "Legitimate: Web hyperlinks rendered inside verified corporate email software are pre-screened and cannot fail",
        "isCorrect": false
      }
    ],
    "redFlags": [
      "Raw .exe download from fake domain"
    ],
    "explanation": "Hovering reveals an unencrypted third-party site hosting an executable file."
  },
  {
    "id": "hv-20",
    "category": "hover",
    "categoryTitle": "Hover Over Links Inspector",
    "difficulty": "Medium",
    "type": "hover-inspect",
    "scenarioTitle": "Hover Inspection Challenge #20",
    "anchorText": "Review Stripe Invoice #1042",
    "hiddenHref": "https://invoice.stripe.com/i/acct_1048201/inv_9938",
    "promptText": "Hover your cursor over the link below to inspect the simulated browser status bar at the bottom-left:",
    "context": "Stripe: \"Your invoice from Acme Hosting is ready.\"",
    "options": [
      {
        "text": "Legitimate: Hover inspection confirms destination resolves directly to the authentic corporate domain (invoice.stripe.com) over HTTPS",
        "isCorrect": true
      },
      {
        "text": "Legitimate: Action buttons embedded in enterprise productivity software are pre-authenticated by root security policies",
        "isCorrect": false
      },
      {
        "text": "Phishing: The inclusion of complex query parameters and session tokens indicates an unauthorized tracking injection",
        "isCorrect": false
      },
      {
        "text": "Phishing: Action buttons featuring high-contrast colored backgrounds indicate high-risk third-party script embedding",
        "isCorrect": false
      }
    ],
    "redFlags": [],
    "explanation": "Official Stripe hosted invoice URL format."
  },
  {
    "id": "hv-21",
    "category": "hover",
    "categoryTitle": "Hover Over Links Inspector",
    "difficulty": "Hard",
    "type": "hover-inspect",
    "scenarioTitle": "Hover Inspection Challenge #21",
    "anchorText": "https://www.wellsfargo.com",
    "hiddenHref": "http://wells-fargo-online-banking-auth.biz/login.html",
    "promptText": "Hover your cursor over the link below to inspect the simulated browser status bar at the bottom-left:",
    "context": "Wells Fargo: \"Update mobile contact details.\"",
    "options": [
      {
        "text": "Phishing: Visible anchor text displays a trusted domain, but hover inspection exposes a mismatched malicious destination",
        "isCorrect": true
      },
      {
        "text": "Phishing: Enterprise security compliance strictly prohibits hyperlinks from containing custom CSS button styling",
        "isCorrect": false
      },
      {
        "text": "Legitimate: The visible link wording precisely matches the authentic corporate communications branding",
        "isCorrect": false
      },
      {
        "text": "Legitimate: The hidden destination URL begins with standard navigation directory paths like /login or /portal",
        "isCorrect": false
      }
    ],
    "redFlags": [
      "Mismatched text vs href",
      "Insecure HTTP on .biz"
    ],
    "explanation": "Mismatched hyperlink directing victim to an insecure harvesting portal."
  },
  {
    "id": "hv-22",
    "category": "hover",
    "categoryTitle": "Hover Over Links Inspector",
    "difficulty": "Easy",
    "type": "hover-inspect",
    "scenarioTitle": "Hover Inspection Challenge #22",
    "anchorText": "Accept Connection Request #121",
    "hiddenHref": "https://www.linkedin.com/comm/mynetwork/invite-accept/8932019",
    "promptText": "Hover your cursor over the link below to inspect the simulated browser status bar at the bottom-left:",
    "context": "Email from LinkedIn: \"Sarah Jenkins wants to connect with you.\"",
    "options": [
      {
        "text": "Legitimate: Hover inspection confirms destination resolves directly to the authentic corporate domain (www.linkedin.com) over HTTPS",
        "isCorrect": true
      },
      {
        "text": "Legitimate: Action buttons embedded in enterprise productivity software are pre-authenticated by root security policies",
        "isCorrect": false
      },
      {
        "text": "Phishing: The inclusion of complex query parameters and session tokens indicates an unauthorized tracking injection",
        "isCorrect": false
      },
      {
        "text": "Phishing: Action buttons featuring high-contrast colored backgrounds indicate high-risk third-party script embedding",
        "isCorrect": false
      }
    ],
    "redFlags": [],
    "explanation": "Hovering reveals that the button legitimately leads to linkedin.com over HTTPS."
  },
  {
    "id": "hv-23",
    "category": "hover",
    "categoryTitle": "Hover Over Links Inspector",
    "difficulty": "Medium",
    "type": "hover-inspect",
    "scenarioTitle": "Hover Inspection Challenge #23",
    "anchorText": "https://www.dropbox.com/s/budget-q4-2026.xlsx #122",
    "hiddenHref": "http://bit.ly/3xP9qLm?redirect_to=dropbox-login-harvest.ru",
    "promptText": "Hover your cursor over the link below to inspect the simulated browser status bar at the bottom-left:",
    "context": "Dropbox notification: \"Finance Team shared a spreadsheet with you.\"",
    "options": [
      {
        "text": "Phishing: URL shortener masks the real destination, redirecting traffic to an unverified external harvesting domain",
        "isCorrect": true
      },
      {
        "text": "Phishing: Enterprise security compliance strictly prohibits hyperlinks from containing custom CSS button styling",
        "isCorrect": false
      },
      {
        "text": "Legitimate: The visible anchor text clearly displays the authorized institutional name and official service title",
        "isCorrect": false
      },
      {
        "text": "Legitimate: Web hyperlinks rendered inside verified corporate email software are pre-screened and cannot fail",
        "isCorrect": false
      }
    ],
    "redFlags": [
      "Shortened link obfuscation",
      "Target parameter pointing to Russian (.ru) harvesting site"
    ],
    "explanation": "Attackers use URL shorteners to conceal malicious credential harvest targets."
  },
  {
    "id": "hv-24",
    "category": "hover",
    "categoryTitle": "Hover Over Links Inspector",
    "difficulty": "Hard",
    "type": "hover-inspect",
    "scenarioTitle": "Hover Inspection Challenge #24",
    "anchorText": "Review and Sign Envelope #123",
    "hiddenHref": "https://docusign.net.contract-signing-service.info/envelope?id=99281",
    "promptText": "Hover your cursor over the link below to inspect the simulated browser status bar at the bottom-left:",
    "context": "DocuSign: \"Please sign: Non-Disclosure Agreement 2026.pdf\"",
    "options": [
      {
        "text": "Phishing: URL shortener masks the real destination, redirecting traffic to an unverified external harvesting domain",
        "isCorrect": true
      },
      {
        "text": "Phishing: Hyperlinks configured with target attributes are automatically flagged as adversary-in-the-middle traps",
        "isCorrect": false
      },
      {
        "text": "Legitimate: The visible anchor text clearly displays the authorized institutional name and official service title",
        "isCorrect": false
      },
      {
        "text": "Legitimate: Web hyperlinks rendered inside verified corporate email software are pre-screened and cannot fail",
        "isCorrect": false
      }
    ],
    "redFlags": [
      "Deceptive subdomain prefix"
    ],
    "explanation": "Hovering unmasks that the host is contract-signing-service.info, NOT DocuSign."
  },
  {
    "id": "hv-25",
    "category": "hover",
    "categoryTitle": "Hover Over Links Inspector",
    "difficulty": "Easy",
    "type": "hover-inspect",
    "scenarioTitle": "Hover Inspection Challenge #25",
    "anchorText": "Download Critical Kernel Patch KB90210.exe #124",
    "hiddenHref": "https://download.microsoft.com/download/updates/2026/patch-kb90210.msi",
    "promptText": "Hover your cursor over the link below to inspect the simulated browser status bar at the bottom-left:",
    "context": "Microsoft Security Advisory: \"Emergency patch for Windows RPC vulnerability.\"",
    "options": [
      {
        "text": "Legitimate: Hover inspection confirms destination resolves directly to the authentic corporate domain (download.microsoft.com) over HTTPS",
        "isCorrect": true
      },
      {
        "text": "Legitimate: Internal email hyperlinks containing encrypted tracking tokens are cryptographically immune to tampering",
        "isCorrect": false
      },
      {
        "text": "Phishing: Long redirect query strings within the destination URL represent an active credential exploitation attempt",
        "isCorrect": false
      },
      {
        "text": "Phishing: Automated collaboration invitations linking directly to meeting identifiers violate zero-trust network boundaries",
        "isCorrect": false
      }
    ],
    "redFlags": [],
    "explanation": "Hovering confirms the link resolves cleanly to Microsoft's authentic distribution repository."
  },
  {
    "id": "hv-26",
    "category": "hover",
    "categoryTitle": "Hover Over Links Inspector",
    "difficulty": "Medium",
    "type": "hover-inspect",
    "scenarioTitle": "Hover Inspection Challenge #26",
    "anchorText": "View Zoom Recording #125",
    "hiddenHref": "https://us04web.zoom.us/rec/share/849201948",
    "promptText": "Hover your cursor over the link below to inspect the simulated browser status bar at the bottom-left:",
    "context": "Zoom Cloud: \"Your meeting recording is ready.\"",
    "options": [
      {
        "text": "Legitimate: Hover inspection confirms destination resolves directly to the authentic corporate domain (us04web.zoom.us) over HTTPS",
        "isCorrect": true
      },
      {
        "text": "Legitimate: Any URL inspected via desktop status preview is certified safe by the operating system kernel",
        "isCorrect": false
      },
      {
        "text": "Phishing: The inclusion of complex query parameters and session tokens indicates an unauthorized tracking injection",
        "isCorrect": false
      },
      {
        "text": "Phishing: Action buttons featuring high-contrast colored backgrounds indicate high-risk third-party script embedding",
        "isCorrect": false
      }
    ],
    "redFlags": [],
    "explanation": "Zoom distributes recordings through geographic clusters such as us04web.zoom.us."
  },
  {
    "id": "hv-27",
    "category": "hover",
    "categoryTitle": "Hover Over Links Inspector",
    "difficulty": "Hard",
    "type": "hover-inspect",
    "scenarioTitle": "Hover Inspection Challenge #27",
    "anchorText": "https://chase.com/verify-account #126",
    "hiddenHref": "http://185.220.101.4/chase-login/index.php",
    "promptText": "Hover your cursor over the link below to inspect the simulated browser status bar at the bottom-left:",
    "context": "Chase Fraud Alert: \"Confirm identity after suspicious login.\"",
    "options": [
      {
        "text": "Phishing: Hover inspection exposes an unencrypted raw IP address endpoint designed to bypass reputation filters",
        "isCorrect": true
      },
      {
        "text": "Phishing: Any hyperlink executing outside the internal local intranet perimeter constitutes an active network exploit",
        "isCorrect": false
      },
      {
        "text": "Legitimate: The visible anchor text clearly displays the authorized institutional name and official service title",
        "isCorrect": false
      },
      {
        "text": "Legitimate: Web hyperlinks rendered inside verified corporate email software are pre-screened and cannot fail",
        "isCorrect": false
      }
    ],
    "redFlags": [
      "Raw IP address target",
      "Insecure HTTP"
    ],
    "explanation": "Hover reveals the link routes directly to a rogue server IP address."
  },
  {
    "id": "hv-28",
    "category": "hover",
    "categoryTitle": "Hover Over Links Inspector",
    "difficulty": "Easy",
    "type": "hover-inspect",
    "scenarioTitle": "Hover Inspection Challenge #28",
    "anchorText": "Manage Google One Storage #127",
    "hiddenHref": "https://one.google.com/storage",
    "promptText": "Hover your cursor over the link below to inspect the simulated browser status bar at the bottom-left:",
    "context": "Google One: \"You have used 82% of your 100GB plan.\"",
    "options": [
      {
        "text": "Legitimate: Hover inspection confirms destination resolves directly to the authentic corporate domain (one.google.com) over HTTPS",
        "isCorrect": true
      },
      {
        "text": "Legitimate: Any URL inspected via desktop status preview is certified safe by the operating system kernel",
        "isCorrect": false
      },
      {
        "text": "Phishing: The inclusion of complex query parameters and session tokens indicates an unauthorized tracking injection",
        "isCorrect": false
      },
      {
        "text": "Phishing: Action buttons featuring high-contrast colored backgrounds indicate high-risk third-party script embedding",
        "isCorrect": false
      }
    ],
    "redFlags": [],
    "explanation": "Hovering confirms the canonical google.com domain."
  },
  {
    "id": "hv-29",
    "category": "hover",
    "categoryTitle": "Hover Over Links Inspector",
    "difficulty": "Medium",
    "type": "hover-inspect",
    "scenarioTitle": "Hover Inspection Challenge #29",
    "anchorText": "Track UPS Package #128",
    "hiddenHref": "https://ups.com.delivery-tracking-reschedule.xyz/track",
    "promptText": "Hover your cursor over the link below to inspect the simulated browser status bar at the bottom-left:",
    "context": "UPS Notification: \"Address missing apartment number.\"",
    "options": [
      {
        "text": "Phishing: Action button conceals an unauthorized destination on a deceptive third-party domain",
        "isCorrect": true
      },
      {
        "text": "Phishing: Hyperlinks configured with target attributes are automatically flagged as adversary-in-the-middle traps",
        "isCorrect": false
      },
      {
        "text": "Legitimate: The visible anchor text clearly displays the authorized institutional name and official service title",
        "isCorrect": false
      },
      {
        "text": "Legitimate: Web hyperlinks rendered inside verified corporate email software are pre-screened and cannot fail",
        "isCorrect": false
      }
    ],
    "redFlags": [
      "Subdomain deception trap"
    ],
    "explanation": "Hovering exposes that the apex domain is an untrusted .xyz registration."
  },
  {
    "id": "hv-30",
    "category": "hover",
    "categoryTitle": "Hover Over Links Inspector",
    "difficulty": "Hard",
    "type": "hover-inspect",
    "scenarioTitle": "Hover Inspection Challenge #30",
    "anchorText": "Review GitHub Pull Request #88 #129",
    "hiddenHref": "https://github.com/mycompany/backend-api/pull/88",
    "promptText": "Hover your cursor over the link below to inspect the simulated browser status bar at the bottom-left:",
    "context": "GitHub notification: \"New pull request ready for review.\"",
    "options": [
      {
        "text": "Legitimate: Hover inspection confirms destination resolves directly to the authentic corporate domain (github.com) over HTTPS",
        "isCorrect": true
      },
      {
        "text": "Legitimate: Internal email hyperlinks containing encrypted tracking tokens are cryptographically immune to tampering",
        "isCorrect": false
      },
      {
        "text": "Phishing: The inclusion of complex query parameters and session tokens indicates an unauthorized tracking injection",
        "isCorrect": false
      },
      {
        "text": "Phishing: Action buttons featuring high-contrast colored backgrounds indicate high-risk third-party script embedding",
        "isCorrect": false
      }
    ],
    "redFlags": [],
    "explanation": "Hover inspection confirms clean navigation to GitHub repository."
  },
  {
    "id": "hv-31",
    "category": "hover",
    "categoryTitle": "Hover Over Links Inspector",
    "difficulty": "Easy",
    "type": "hover-inspect",
    "scenarioTitle": "Hover Inspection Challenge #31",
    "anchorText": "Update Netflix Payment #130",
    "hiddenHref": "http://netflix-reactivate-account.cc/billing.php",
    "promptText": "Hover your cursor over the link below to inspect the simulated browser status bar at the bottom-left:",
    "context": "Netflix: \"Membership paused due to card decline.\"",
    "options": [
      {
        "text": "Phishing: Action button conceals an unauthorized destination on a deceptive third-party domain",
        "isCorrect": true
      },
      {
        "text": "Phishing: Hyperlinks configured with target attributes are automatically flagged as adversary-in-the-middle traps",
        "isCorrect": false
      },
      {
        "text": "Legitimate: The visible anchor text clearly displays the authorized institutional name and official service title",
        "isCorrect": false
      },
      {
        "text": "Legitimate: Web hyperlinks rendered inside verified corporate email software are pre-screened and cannot fail",
        "isCorrect": false
      }
    ],
    "redFlags": [
      "Insecure HTTP",
      "Scam .cc domain"
    ],
    "explanation": "Hovering unmasks an unencrypted scam domain hosted on .cc."
  },
  {
    "id": "hv-32",
    "category": "hover",
    "categoryTitle": "Hover Over Links Inspector",
    "difficulty": "Medium",
    "type": "hover-inspect",
    "scenarioTitle": "Hover Inspection Challenge #32",
    "anchorText": "Read Figma Design Feedback #131",
    "hiddenHref": "https://www.figma.com/file/948201/Design-System",
    "promptText": "Hover your cursor over the link below to inspect the simulated browser status bar at the bottom-left:",
    "context": "Figma: \"Elena commented on your component library.\"",
    "options": [
      {
        "text": "Legitimate: Hover inspection confirms destination resolves directly to the authentic corporate domain (www.figma.com) over HTTPS",
        "isCorrect": true
      },
      {
        "text": "Legitimate: Any URL inspected via desktop status preview is certified safe by the operating system kernel",
        "isCorrect": false
      },
      {
        "text": "Phishing: The inclusion of complex query parameters and session tokens indicates an unauthorized tracking injection",
        "isCorrect": false
      },
      {
        "text": "Phishing: Action buttons featuring high-contrast colored backgrounds indicate high-risk third-party script embedding",
        "isCorrect": false
      }
    ],
    "redFlags": [],
    "explanation": "Hover confirms authentic Figma collaboration portal."
  },
  {
    "id": "hv-33",
    "category": "hover",
    "categoryTitle": "Hover Over Links Inspector",
    "difficulty": "Hard",
    "type": "hover-inspect",
    "scenarioTitle": "Hover Inspection Challenge #33",
    "anchorText": "https://www.paypal.com/myaccount/money #132",
    "hiddenHref": "http://paypal-payout-verification.top/confirm",
    "promptText": "Hover your cursor over the link below to inspect the simulated browser status bar at the bottom-left:",
    "context": "PayPal Notice: \"You received $150.00 from Alex.\"",
    "options": [
      {
        "text": "Phishing: Visible anchor text displays a trusted domain, but hover inspection exposes a mismatched malicious destination",
        "isCorrect": true
      },
      {
        "text": "Phishing: Hyperlinks configured with target attributes are automatically flagged as adversary-in-the-middle traps",
        "isCorrect": false
      },
      {
        "text": "Legitimate: The visible link wording precisely matches the authentic corporate communications branding",
        "isCorrect": false
      },
      {
        "text": "Legitimate: The hidden destination URL begins with standard navigation directory paths like /login or /portal",
        "isCorrect": false
      }
    ],
    "redFlags": [
      "Anchor text spoofing",
      "Unvetted .top TLD"
    ],
    "explanation": "The hidden destination points to an unvetted .top credential harvesting site."
  },
  {
    "id": "hv-34",
    "category": "hover",
    "categoryTitle": "Hover Over Links Inspector",
    "difficulty": "Easy",
    "type": "hover-inspect",
    "scenarioTitle": "Hover Inspection Challenge #34",
    "anchorText": "Join Microsoft Teams Call #133",
    "hiddenHref": "https://teams.microsoft.com/l/meetup-join/19%3ameeting",
    "promptText": "Hover your cursor over the link below to inspect the simulated browser status bar at the bottom-left:",
    "context": "Teams invite: \"Project Sync starts now.\"",
    "options": [
      {
        "text": "Legitimate: Hover inspection confirms destination resolves directly to the authentic corporate domain (teams.microsoft.com) over HTTPS",
        "isCorrect": true
      },
      {
        "text": "Legitimate: Internal email hyperlinks containing encrypted tracking tokens are cryptographically immune to tampering",
        "isCorrect": false
      },
      {
        "text": "Phishing: The inclusion of complex query parameters and session tokens indicates an unauthorized tracking injection",
        "isCorrect": false
      },
      {
        "text": "Phishing: Action buttons featuring high-contrast colored backgrounds indicate high-risk third-party script embedding",
        "isCorrect": false
      }
    ],
    "redFlags": [],
    "explanation": "Standard Microsoft Teams deep-link for scheduled calendar calls."
  },
  {
    "id": "hv-35",
    "category": "hover",
    "categoryTitle": "Hover Over Links Inspector",
    "difficulty": "Medium",
    "type": "hover-inspect",
    "scenarioTitle": "Hover Inspection Challenge #35",
    "anchorText": "Claim Amazon $100 Holiday Voucher #134",
    "hiddenHref": "https://amazon.com.rewards-holiday-gift.top/claim",
    "promptText": "Hover your cursor over the link below to inspect the simulated browser status bar at the bottom-left:",
    "context": "Amazon: \"Claim your customer appreciation reward.\"",
    "options": [
      {
        "text": "Phishing: Action button conceals an unauthorized destination on a deceptive third-party domain",
        "isCorrect": true
      },
      {
        "text": "Phishing: Hyperlinks configured with target attributes are automatically flagged as adversary-in-the-middle traps",
        "isCorrect": false
      },
      {
        "text": "Legitimate: The visible link wording precisely matches the authentic corporate communications branding",
        "isCorrect": false
      },
      {
        "text": "Legitimate: The hidden destination URL begins with standard navigation directory paths like /login or /portal",
        "isCorrect": false
      }
    ],
    "redFlags": [
      "Subdomain deception"
    ],
    "explanation": "Hover unmasks rewards-holiday-gift.top as the actual host."
  },
  {
    "id": "hv-36",
    "category": "hover",
    "categoryTitle": "Hover Over Links Inspector",
    "difficulty": "Hard",
    "type": "hover-inspect",
    "scenarioTitle": "Hover Inspection Challenge #36",
    "anchorText": "Read Slack Channel Message #135",
    "hiddenHref": "https://myworkspace.slack.com/archives/C01234/p89320",
    "promptText": "Hover your cursor over the link below to inspect the simulated browser status bar at the bottom-left:",
    "context": "Slack: \"You were mentioned in #general.\"",
    "options": [
      {
        "text": "Legitimate: Hover inspection confirms destination resolves directly to the authentic corporate domain (myworkspace.slack.com) over HTTPS",
        "isCorrect": true
      },
      {
        "text": "Legitimate: Action buttons embedded in enterprise productivity software are pre-authenticated by root security policies",
        "isCorrect": false
      },
      {
        "text": "Phishing: The inclusion of complex query parameters and session tokens indicates an unauthorized tracking injection",
        "isCorrect": false
      },
      {
        "text": "Phishing: Action buttons featuring high-contrast colored backgrounds indicate high-risk third-party script embedding",
        "isCorrect": false
      }
    ],
    "redFlags": [],
    "explanation": "Valid Slack enterprise archive permalink."
  },
  {
    "id": "hv-37",
    "category": "hover",
    "categoryTitle": "Hover Over Links Inspector",
    "difficulty": "Easy",
    "type": "hover-inspect",
    "scenarioTitle": "Hover Inspection Challenge #37",
    "anchorText": "https://appleid.apple.com #136",
    "hiddenHref": "https://apple-account-recovery-session.info/login",
    "promptText": "Hover your cursor over the link below to inspect the simulated browser status bar at the bottom-left:",
    "context": "Apple Security: \"New login from unknown iPad.\"",
    "options": [
      {
        "text": "Phishing: Visible anchor text displays a trusted domain, but hover inspection exposes a mismatched malicious destination",
        "isCorrect": true
      },
      {
        "text": "Phishing: Any hyperlink executing outside the internal local intranet perimeter constitutes an active network exploit",
        "isCorrect": false
      },
      {
        "text": "Legitimate: The visible link wording precisely matches the authentic corporate communications branding",
        "isCorrect": false
      },
      {
        "text": "Legitimate: The hidden destination URL begins with standard navigation directory paths like /login or /portal",
        "isCorrect": false
      }
    ],
    "redFlags": [
      "Mismatched anchor text",
      "Third-party .info domain"
    ],
    "explanation": "Classic mismatched hyperlink. Always hover to verify true destination."
  },
  {
    "id": "hv-38",
    "category": "hover",
    "categoryTitle": "Hover Over Links Inspector",
    "difficulty": "Medium",
    "type": "hover-inspect",
    "scenarioTitle": "Hover Inspection Challenge #38",
    "anchorText": "View AWS CloudWatch Billing Alarm #137",
    "hiddenHref": "https://console.aws.amazon.com/cloudwatch/home",
    "promptText": "Hover your cursor over the link below to inspect the simulated browser status bar at the bottom-left:",
    "context": "AWS: \"Billing alert: Monthly spend exceeded $500.\"",
    "options": [
      {
        "text": "Legitimate: Hover inspection confirms destination resolves directly to the authentic corporate domain (console.aws.amazon.com) over HTTPS",
        "isCorrect": true
      },
      {
        "text": "Legitimate: Internal email hyperlinks containing encrypted tracking tokens are cryptographically immune to tampering",
        "isCorrect": false
      },
      {
        "text": "Phishing: Long redirect query strings within the destination URL represent an active credential exploitation attempt",
        "isCorrect": false
      },
      {
        "text": "Phishing: Automated collaboration invitations linking directly to meeting identifiers violate zero-trust network boundaries",
        "isCorrect": false
      }
    ],
    "redFlags": [],
    "explanation": "Official AWS management console endpoint."
  },
  {
    "id": "hv-39",
    "category": "hover",
    "categoryTitle": "Hover Over Links Inspector",
    "difficulty": "Hard",
    "type": "hover-inspect",
    "scenarioTitle": "Hover Inspection Challenge #39",
    "anchorText": "Download Adobe Acrobat PDF Reader #138",
    "hiddenHref": "http://adobe-reader-update2026.net/Acrobat_Setup.exe",
    "promptText": "Hover your cursor over the link below to inspect the simulated browser status bar at the bottom-left:",
    "context": "Document Viewer: \"Install PDF reader to view contract.\"",
    "options": [
      {
        "text": "Phishing: Hidden destination points to an unverified direct binary download disguised as normal documentation",
        "isCorrect": true
      },
      {
        "text": "Phishing: Any hyperlink executing outside the internal local intranet perimeter constitutes an active network exploit",
        "isCorrect": false
      },
      {
        "text": "Legitimate: The visible anchor text clearly displays the authorized institutional name and official service title",
        "isCorrect": false
      },
      {
        "text": "Legitimate: Web hyperlinks rendered inside verified corporate email software are pre-screened and cannot fail",
        "isCorrect": false
      }
    ],
    "redFlags": [
      "Raw .exe download from fake domain"
    ],
    "explanation": "Hovering reveals an unencrypted third-party site hosting an executable file."
  },
  {
    "id": "hv-40",
    "category": "hover",
    "categoryTitle": "Hover Over Links Inspector",
    "difficulty": "Easy",
    "type": "hover-inspect",
    "scenarioTitle": "Hover Inspection Challenge #40",
    "anchorText": "Review Stripe Invoice #1042 #139",
    "hiddenHref": "https://invoice.stripe.com/i/acct_1048201/inv_9938",
    "promptText": "Hover your cursor over the link below to inspect the simulated browser status bar at the bottom-left:",
    "context": "Stripe: \"Your invoice from Acme Hosting is ready.\"",
    "options": [
      {
        "text": "Legitimate: Hover inspection confirms destination resolves directly to the authentic corporate domain (invoice.stripe.com) over HTTPS",
        "isCorrect": true
      },
      {
        "text": "Legitimate: Any URL inspected via desktop status preview is certified safe by the operating system kernel",
        "isCorrect": false
      },
      {
        "text": "Phishing: The inclusion of complex query parameters and session tokens indicates an unauthorized tracking injection",
        "isCorrect": false
      },
      {
        "text": "Phishing: Action buttons featuring high-contrast colored backgrounds indicate high-risk third-party script embedding",
        "isCorrect": false
      }
    ],
    "redFlags": [],
    "explanation": "Official Stripe hosted invoice URL format."
  },
  {
    "id": "hv-41",
    "category": "hover",
    "categoryTitle": "Hover Over Links Inspector",
    "difficulty": "Medium",
    "type": "hover-inspect",
    "scenarioTitle": "Hover Inspection Challenge #41",
    "anchorText": "https://www.irs.gov/refunds/claim-online #140",
    "hiddenHref": "http://irs-tax-refund-portal2026.online/claim.html",
    "promptText": "Hover your cursor over the link below to inspect the simulated browser status bar at the bottom-left:",
    "context": "IRS Email: \"Your 2025 federal tax rebate of $640 is ready to deposit.\"",
    "options": [
      {
        "text": "Phishing: Visible anchor text displays a trusted domain, but hover inspection exposes a mismatched malicious destination",
        "isCorrect": true
      },
      {
        "text": "Phishing: Hyperlinks configured with target attributes are automatically flagged as adversary-in-the-middle traps",
        "isCorrect": false
      },
      {
        "text": "Legitimate: The visible link wording precisely matches the authentic corporate communications branding",
        "isCorrect": false
      },
      {
        "text": "Legitimate: The hidden destination URL begins with standard navigation directory paths like /login or /portal",
        "isCorrect": false
      }
    ],
    "redFlags": [
      "Mismatched anchor text vs hidden href",
      "Insecure HTTP phishing page"
    ],
    "explanation": "HTML allows anchor text to display anything while pointing to an arbitrary malicious endpoint."
  },
  {
    "id": "hv-42",
    "category": "hover",
    "categoryTitle": "Hover Over Links Inspector",
    "difficulty": "Hard",
    "type": "hover-inspect",
    "scenarioTitle": "Hover Inspection Challenge #42",
    "anchorText": "Accept Connection Request #141",
    "hiddenHref": "https://www.linkedin.com/comm/mynetwork/invite-accept/8932019",
    "promptText": "Hover your cursor over the link below to inspect the simulated browser status bar at the bottom-left:",
    "context": "Email from LinkedIn: \"Sarah Jenkins wants to connect with you.\"",
    "options": [
      {
        "text": "Legitimate: Hover inspection confirms destination resolves directly to the authentic corporate domain (www.linkedin.com) over HTTPS",
        "isCorrect": true
      },
      {
        "text": "Legitimate: Internal email hyperlinks containing encrypted tracking tokens are cryptographically immune to tampering",
        "isCorrect": false
      },
      {
        "text": "Phishing: The inclusion of complex query parameters and session tokens indicates an unauthorized tracking injection",
        "isCorrect": false
      },
      {
        "text": "Phishing: Action buttons featuring high-contrast colored backgrounds indicate high-risk third-party script embedding",
        "isCorrect": false
      }
    ],
    "redFlags": [],
    "explanation": "Hovering reveals that the button legitimately leads to linkedin.com over HTTPS."
  },
  {
    "id": "lp-1",
    "category": "login",
    "categoryTitle": "Fake Login-Page Recognition",
    "difficulty": "Easy",
    "type": "login-inspect",
    "scenarioTitle": "Login Portal Inspection #1",
    "mockBrowserUrl": "http://login.micros0ftonline-portal.net/common/oauth2",
    "sslStatus": "insecure",
    "brandTitle": "Microsoft 365 Sign in",
    "inputFields": [
      {
        "label": "Work or School Email",
        "placeholder": "someone@example.com"
      },
      {
        "label": "Password",
        "placeholder": "••••••••••••"
      },
      {
        "label": "ATM PIN or Mother's Maiden Name",
        "placeholder": "Security Verification"
      }
    ],
    "options": [
      {
        "text": "Fake Portal: Insecure HTTP connection transmitting sensitive authentication credentials across an unverified domain",
        "isCorrect": true
      },
      {
        "text": "Fake Portal: Modern enterprise login standards strictly prohibit password input fields on responsive viewports",
        "isCorrect": false
      },
      {
        "text": "Legitimate: The authentication card matches standard enterprise layout guidelines and institutional typography",
        "isCorrect": false
      },
      {
        "text": "Legitimate: An active SSL padlock icon in the browser address bar confirms that the website is officially genuine",
        "isCorrect": false
      }
    ],
    "redFlags": [
      "Insecure HTTP connection",
      "Typosquatted domain (micros0ft)",
      "Unreasonable credential harvesting (ATM PIN)"
    ],
    "explanation": "Microsoft 365 uses HTTPS on login.microsoftonline.com and NEVER asks for banking PINs or maternal maiden names."
  },
  {
    "id": "lp-2",
    "category": "login",
    "categoryTitle": "Fake Login-Page Recognition",
    "difficulty": "Medium",
    "type": "login-inspect",
    "scenarioTitle": "Login Portal Inspection #2",
    "mockBrowserUrl": "https://accounts.google.com/signin/v2/challenge/pwd",
    "sslStatus": "secure",
    "brandTitle": "Sign in with Google",
    "inputFields": [
      {
        "label": "Enter your password",
        "placeholder": "••••••••••••"
      }
    ],
    "options": [
      {
        "text": "Legitimate: Browser address bar confirms authentic primary domain (accounts.google.com) with valid TLS encryption and standard auth fields",
        "isCorrect": true
      },
      {
        "text": "Legitimate: Single sign-on federated authentication interfaces are physically incapable of being intercepted by adversaries",
        "isCorrect": false
      },
      {
        "text": "Fake Portal: Redirecting through specialized authentication subdomains indicates unauthorized traffic redirection to proxy servers",
        "isCorrect": false
      },
      {
        "text": "Fake Portal: Authentication endpoints utilizing query-string state parameters indicate potential session spoofing",
        "isCorrect": false
      }
    ],
    "redFlags": [],
    "explanation": "Everything checks out: legitimate domain, valid HTTPS certificate, clean brand assets, and standard inputs."
  },
  {
    "id": "lp-3",
    "category": "login",
    "categoryTitle": "Fake Login-Page Recognition",
    "difficulty": "Hard",
    "type": "login-inspect",
    "scenarioTitle": "Login Portal Inspection #3",
    "mockBrowserUrl": "https://netflix.customer-account-reactivation.co/login",
    "sslStatus": "secure",
    "brandTitle": "Netflix Member Sign In",
    "inputFields": [
      {
        "label": "Email or Mobile Number",
        "placeholder": "user@domain.com"
      },
      {
        "label": "Password",
        "placeholder": "••••••••••••"
      },
      {
        "label": "Credit Card Number (For Verification)",
        "placeholder": "16-digit card number"
      },
      {
        "label": "CVV & ATM PIN",
        "placeholder": "3-digit CVV / 4-digit PIN"
      }
    ],
    "options": [
      {
        "text": "Fake Portal: Subdomain deception where the actual apex domain belongs to an unauthorized third-party registrar",
        "isCorrect": true
      },
      {
        "text": "Fake Portal: Modern enterprise login standards strictly prohibit password input fields on responsive viewports",
        "isCorrect": false
      },
      {
        "text": "Legitimate: The authentication card matches standard enterprise layout guidelines and institutional typography",
        "isCorrect": false
      },
      {
        "text": "Legitimate: An active SSL padlock icon in the browser address bar confirms that the website is officially genuine",
        "isCorrect": false
      }
    ],
    "redFlags": [
      "Fake domain on .co TLD",
      "Excessive credential requests on login"
    ],
    "explanation": "An SSL lock only means encryption; it does not verify site ownership. Attackers obtain free SSL certificates in seconds."
  },
  {
    "id": "lp-4",
    "category": "login",
    "categoryTitle": "Fake Login-Page Recognition",
    "difficulty": "Easy",
    "type": "login-inspect",
    "scenarioTitle": "Login Portal Inspection #4",
    "mockBrowserUrl": "https://secure.bankofamerica.com.login-client-session.biz/auth",
    "sslStatus": "secure",
    "brandTitle": "Bank of America Sign In",
    "inputFields": [
      {
        "label": "Online ID",
        "placeholder": "Enter Online ID"
      },
      {
        "label": "Passcode",
        "placeholder": "••••••••"
      }
    ],
    "options": [
      {
        "text": "Fake Portal: Subdomain deception where the actual apex domain belongs to an unauthorized third-party registrar",
        "isCorrect": true
      },
      {
        "text": "Fake Portal: Modern enterprise login standards strictly prohibit password input fields on responsive viewports",
        "isCorrect": false
      },
      {
        "text": "Legitimate: The authentication card matches standard enterprise layout guidelines and institutional typography",
        "isCorrect": false
      },
      {
        "text": "Legitimate: An active SSL padlock icon in the browser address bar confirms that the website is officially genuine",
        "isCorrect": false
      }
    ],
    "redFlags": [
      "Subdomain spoofing trap"
    ],
    "explanation": "Inspect the domain directly preceding the single slash: here it is .biz, not bankofamerica.com."
  },
  {
    "id": "lp-5",
    "category": "login",
    "categoryTitle": "Fake Login-Page Recognition",
    "difficulty": "Medium",
    "type": "login-inspect",
    "scenarioTitle": "Login Portal Inspection #5",
    "mockBrowserUrl": "https://steamcommunnity.com/openid/login",
    "sslStatus": "secure",
    "brandTitle": "Sign into Steam to claim $50 Wallet Code",
    "inputFields": [
      {
        "label": "Steam Account Name",
        "placeholder": "Enter username"
      },
      {
        "label": "Password",
        "placeholder": "••••••••"
      },
      {
        "label": "Steam Guard Backup Code",
        "placeholder": "R12345"
      }
    ],
    "options": [
      {
        "text": "Fake Portal: Typosquatted domain deliberately mimics authentic branding to harvest user credentials",
        "isCorrect": true
      },
      {
        "text": "Fake Portal: Modern enterprise login standards strictly prohibit password input fields on responsive viewports",
        "isCorrect": false
      },
      {
        "text": "Legitimate: The authentication card matches standard enterprise layout guidelines and institutional typography",
        "isCorrect": false
      },
      {
        "text": "Legitimate: An active SSL padlock icon in the browser address bar confirms that the website is officially genuine",
        "isCorrect": false
      }
    ],
    "redFlags": [
      "Typosquatted domain (double n)",
      "Emergency recovery code harvesting"
    ],
    "explanation": "The domain has an extra \"n\" (steamcommunnity.com) and steals one-time backup recovery codes."
  },
  {
    "id": "lp-6",
    "category": "login",
    "categoryTitle": "Fake Login-Page Recognition",
    "difficulty": "Hard",
    "type": "login-inspect",
    "scenarioTitle": "Login Portal Inspection #6",
    "mockBrowserUrl": "https://appleid.apple.com/sign-in",
    "sslStatus": "secure",
    "brandTitle": "Sign in with Apple ID",
    "inputFields": [
      {
        "label": "Apple ID",
        "placeholder": "name@example.com"
      },
      {
        "label": "Password",
        "placeholder": "••••••••••••"
      }
    ],
    "options": [
      {
        "text": "Legitimate: Browser address bar confirms authentic primary domain (appleid.apple.com) with valid TLS encryption and standard auth fields",
        "isCorrect": true
      },
      {
        "text": "Legitimate: Multi-factor authentication mechanisms automatically nullify all threats across external network connections",
        "isCorrect": false
      },
      {
        "text": "Fake Portal: Redirecting through specialized authentication subdomains indicates unauthorized traffic redirection to proxy servers",
        "isCorrect": false
      },
      {
        "text": "Fake Portal: Authentication endpoints utilizing query-string state parameters indicate potential session spoofing",
        "isCorrect": false
      }
    ],
    "redFlags": [],
    "explanation": "Official Apple ID web management authentication portal."
  },
  {
    "id": "lp-7",
    "category": "login",
    "categoryTitle": "Fake Login-Page Recognition",
    "difficulty": "Easy",
    "type": "login-inspect",
    "scenarioTitle": "Login Portal Inspection #7",
    "mockBrowserUrl": "http://paypal.com.customer-verification-portal.info/login",
    "sslStatus": "insecure",
    "brandTitle": "PayPal Secure Sign In",
    "inputFields": [
      {
        "label": "Email",
        "placeholder": "user@email.com"
      },
      {
        "label": "Password",
        "placeholder": "••••••••"
      },
      {
        "label": "Social Security Number (SSN)",
        "placeholder": "XXX-XX-XXXX"
      }
    ],
    "options": [
      {
        "text": "Fake Portal: Insecure HTTP connection transmitting sensitive authentication credentials across an unverified domain",
        "isCorrect": true
      },
      {
        "text": "Fake Portal: Any authentication interface lacking biometric passkey prompts represents an untrusted endpoint",
        "isCorrect": false
      },
      {
        "text": "Legitimate: The authentication card matches standard enterprise layout guidelines and institutional typography",
        "isCorrect": false
      },
      {
        "text": "Legitimate: An active SSL padlock icon in the browser address bar confirms that the website is officially genuine",
        "isCorrect": false
      }
    ],
    "redFlags": [
      "Insecure HTTP",
      "Subdomain trap",
      "Harvests Social Security Number"
    ],
    "explanation": "PayPal operates over HTTPS on paypal.com and never asks for your SSN on standard sign-in."
  },
  {
    "id": "lp-8",
    "category": "login",
    "categoryTitle": "Fake Login-Page Recognition",
    "difficulty": "Medium",
    "type": "login-inspect",
    "scenarioTitle": "Login Portal Inspection #8",
    "mockBrowserUrl": "https://signin.aws.amazon.com/oauth",
    "sslStatus": "secure",
    "brandTitle": "Amazon Web Services Console Sign-In",
    "inputFields": [
      {
        "label": "Root user email or IAM user",
        "placeholder": "user@company.com"
      },
      {
        "label": "Password",
        "placeholder": "••••••••••••"
      }
    ],
    "options": [
      {
        "text": "Legitimate: Browser address bar confirms authentic primary domain (signin.aws.amazon.com) with valid TLS encryption and standard auth fields",
        "isCorrect": true
      },
      {
        "text": "Legitimate: Multi-factor authentication mechanisms automatically nullify all threats across external network connections",
        "isCorrect": false
      },
      {
        "text": "Fake Portal: Redirecting through specialized authentication subdomains indicates unauthorized traffic redirection to proxy servers",
        "isCorrect": false
      },
      {
        "text": "Fake Portal: Authentication endpoints utilizing query-string state parameters indicate potential session spoofing",
        "isCorrect": false
      }
    ],
    "redFlags": [],
    "explanation": "Official AWS Management Console login URL on canonical domain."
  },
  {
    "id": "lp-9",
    "category": "login",
    "categoryTitle": "Fake Login-Page Recognition",
    "difficulty": "Hard",
    "type": "login-inspect",
    "scenarioTitle": "Login Portal Inspection #9",
    "mockBrowserUrl": "https://okta.com-identity-management.net/sso/login",
    "sslStatus": "secure",
    "brandTitle": "Okta Enterprise Identity Single Sign-On",
    "inputFields": [
      {
        "label": "Username",
        "placeholder": "employee@corp.com"
      },
      {
        "label": "Master Active Directory Password",
        "placeholder": "••••••••••••"
      },
      {
        "label": "Mother's Maiden Name",
        "placeholder": "Security Q"
      }
    ],
    "options": [
      {
        "text": "Fake Portal: Host domain is unassociated with the official service and demands excessive authentication data",
        "isCorrect": true
      },
      {
        "text": "Fake Portal: Modern enterprise login standards strictly prohibit password input fields on responsive viewports",
        "isCorrect": false
      },
      {
        "text": "Legitimate: The authentication card matches standard enterprise layout guidelines and institutional typography",
        "isCorrect": false
      },
      {
        "text": "Legitimate: An active SSL padlock icon in the browser address bar confirms that the website is officially genuine",
        "isCorrect": false
      }
    ],
    "redFlags": [
      "Lookalike domain mimicking Okta",
      "Excessive personal data harvesting"
    ],
    "explanation": "The host is com-identity-management.net. Okta customer tenants are hosted on okta.com."
  },
  {
    "id": "lp-10",
    "category": "login",
    "categoryTitle": "Fake Login-Page Recognition",
    "difficulty": "Easy",
    "type": "login-inspect",
    "scenarioTitle": "Login Portal Inspection #10",
    "mockBrowserUrl": "https://github.com/login",
    "sslStatus": "secure",
    "brandTitle": "Sign in to GitHub",
    "inputFields": [
      {
        "label": "Username or email address",
        "placeholder": "Enter username"
      },
      {
        "label": "Password",
        "placeholder": "••••••••••••"
      }
    ],
    "options": [
      {
        "text": "Legitimate: Browser address bar confirms authentic primary domain (github.com) with valid TLS encryption and standard auth fields",
        "isCorrect": true
      },
      {
        "text": "Legitimate: Single sign-on federated authentication interfaces are physically incapable of being intercepted by adversaries",
        "isCorrect": false
      },
      {
        "text": "Fake Portal: Multi-step authorization screens indicate an adversary-in-the-middle credential harvesting proxy",
        "isCorrect": false
      },
      {
        "text": "Fake Portal: Single-sign-on portals must reside directly on the top-level marketing homepage rather than dedicated identity hosts",
        "isCorrect": false
      }
    ],
    "redFlags": [],
    "explanation": "Authentic GitHub web authentication page."
  },
  {
    "id": "lp-11",
    "category": "login",
    "categoryTitle": "Fake Login-Page Recognition",
    "difficulty": "Medium",
    "type": "login-inspect",
    "scenarioTitle": "Login Portal Inspection #11",
    "mockBrowserUrl": "https://chasebank-online-logon.xyz/auth/signin",
    "sslStatus": "secure",
    "brandTitle": "Chase Online Banking Sign In",
    "inputFields": [
      {
        "label": "Username",
        "placeholder": "User ID"
      },
      {
        "label": "Password",
        "placeholder": "••••••••"
      },
      {
        "label": "Debit Card PIN",
        "placeholder": "4-digit ATM PIN"
      }
    ],
    "options": [
      {
        "text": "Fake Portal: Typosquatted domain deliberately mimics authentic branding to harvest user credentials",
        "isCorrect": true
      },
      {
        "text": "Fake Portal: Modern enterprise login standards strictly prohibit password input fields on responsive viewports",
        "isCorrect": false
      },
      {
        "text": "Legitimate: The authentication card matches standard enterprise layout guidelines and institutional typography",
        "isCorrect": false
      },
      {
        "text": "Legitimate: An active SSL padlock icon in the browser address bar confirms that the website is officially genuine",
        "isCorrect": false
      }
    ],
    "redFlags": [
      "Scam .xyz domain",
      "Demands ATM PIN on login"
    ],
    "explanation": "Chase uses chase.com and NEVER requests debit card ATM PINs on online login screens."
  },
  {
    "id": "lp-12",
    "category": "login",
    "categoryTitle": "Fake Login-Page Recognition",
    "difficulty": "Hard",
    "type": "login-inspect",
    "scenarioTitle": "Login Portal Inspection #12",
    "mockBrowserUrl": "https://login.salesforce.com",
    "sslStatus": "secure",
    "brandTitle": "Salesforce Enterprise Login",
    "inputFields": [
      {
        "label": "Username",
        "placeholder": "user@company.com"
      },
      {
        "label": "Password",
        "placeholder": "••••••••"
      }
    ],
    "options": [
      {
        "text": "Legitimate: Browser address bar confirms authentic primary domain (login.salesforce.com) with valid TLS encryption and standard auth fields",
        "isCorrect": true
      },
      {
        "text": "Legitimate: Multi-factor authentication mechanisms automatically nullify all threats across external network connections",
        "isCorrect": false
      },
      {
        "text": "Fake Portal: Redirecting through specialized authentication subdomains indicates unauthorized traffic redirection to proxy servers",
        "isCorrect": false
      },
      {
        "text": "Fake Portal: Authentication endpoints utilizing query-string state parameters indicate potential session spoofing",
        "isCorrect": false
      }
    ],
    "redFlags": [],
    "explanation": "Authentic Salesforce login endpoint."
  },
  {
    "id": "lp-13",
    "category": "login",
    "categoryTitle": "Fake Login-Page Recognition",
    "difficulty": "Easy",
    "type": "login-inspect",
    "scenarioTitle": "Login Portal Inspection #13",
    "mockBrowserUrl": "http://facebook-security-checkpoint.biz/checkpoint/login",
    "sslStatus": "insecure",
    "brandTitle": "Meta / Facebook Security Checkpoint",
    "inputFields": [
      {
        "label": "Email or Phone Number",
        "placeholder": "someone@domain.com"
      },
      {
        "label": "Password",
        "placeholder": "••••••••"
      },
      {
        "label": "Upload Government Photo ID",
        "placeholder": "Select File"
      }
    ],
    "options": [
      {
        "text": "Fake Portal: Insecure HTTP connection transmitting sensitive authentication credentials across an unverified domain",
        "isCorrect": true
      },
      {
        "text": "Fake Portal: Any authentication interface lacking biometric passkey prompts represents an untrusted endpoint",
        "isCorrect": false
      },
      {
        "text": "Legitimate: The authentication card matches standard enterprise layout guidelines and institutional typography",
        "isCorrect": false
      },
      {
        "text": "Legitimate: An active SSL padlock icon in the browser address bar confirms that the website is officially genuine",
        "isCorrect": false
      }
    ],
    "redFlags": [
      "Insecure HTTP",
      "Identity theft vector (photo ID upload)"
    ],
    "explanation": "Unencrypted third-party site stealing user credentials and government photo IDs."
  },
  {
    "id": "lp-14",
    "category": "login",
    "categoryTitle": "Fake Login-Page Recognition",
    "difficulty": "Medium",
    "type": "login-inspect",
    "scenarioTitle": "Login Portal Inspection #14",
    "mockBrowserUrl": "https://id.atlassian.com/login",
    "sslStatus": "secure",
    "brandTitle": "Log in to your Atlassian account",
    "inputFields": [
      {
        "label": "Enter your email",
        "placeholder": "someone@company.com"
      }
    ],
    "options": [
      {
        "text": "Legitimate: Browser address bar confirms authentic primary domain (id.atlassian.com) with valid TLS encryption and standard auth fields",
        "isCorrect": true
      },
      {
        "text": "Legitimate: Multi-factor authentication mechanisms automatically nullify all threats across external network connections",
        "isCorrect": false
      },
      {
        "text": "Fake Portal: Multi-step authorization screens indicate an adversary-in-the-middle credential harvesting proxy",
        "isCorrect": false
      },
      {
        "text": "Fake Portal: Single-sign-on portals must reside directly on the top-level marketing homepage rather than dedicated identity hosts",
        "isCorrect": false
      }
    ],
    "redFlags": [],
    "explanation": "Official Atlassian cloud single sign-on portal."
  },
  {
    "id": "lp-15",
    "category": "login",
    "categoryTitle": "Fake Login-Page Recognition",
    "difficulty": "Hard",
    "type": "login-inspect",
    "scenarioTitle": "Login Portal Inspection #15",
    "mockBrowserUrl": "https://wellsfargo.com.account-recovery-desk.top/login",
    "sslStatus": "secure",
    "brandTitle": "Wells Fargo Online Services",
    "inputFields": [
      {
        "label": "Username",
        "placeholder": "Online Username"
      },
      {
        "label": "Password",
        "placeholder": "••••••••"
      },
      {
        "label": "Debit Card Expiration & CVV",
        "placeholder": "MM/YY • CVV"
      }
    ],
    "options": [
      {
        "text": "Fake Portal: Subdomain deception where the actual apex domain belongs to an unauthorized third-party registrar",
        "isCorrect": true
      },
      {
        "text": "Fake Portal: Modern enterprise login standards strictly prohibit password input fields on responsive viewports",
        "isCorrect": false
      },
      {
        "text": "Legitimate: The authentication card matches standard enterprise layout guidelines and institutional typography",
        "isCorrect": false
      },
      {
        "text": "Legitimate: An active SSL padlock icon in the browser address bar confirms that the website is officially genuine",
        "isCorrect": false
      }
    ],
    "redFlags": [
      "Subdomain deception",
      "Stealing card CVV on login"
    ],
    "explanation": "The apex host is account-recovery-desk.top. Routine bank logins do not collect card CVV codes."
  },
  {
    "id": "lp-16",
    "category": "login",
    "categoryTitle": "Fake Login-Page Recognition",
    "difficulty": "Easy",
    "type": "login-inspect",
    "scenarioTitle": "Login Portal Inspection #16",
    "mockBrowserUrl": "https://discord.com/login",
    "sslStatus": "secure",
    "brandTitle": "Welcome back to Discord!",
    "inputFields": [
      {
        "label": "Email or Phone Number",
        "placeholder": "user@domain.com"
      },
      {
        "label": "Password",
        "placeholder": "••••••••••••"
      }
    ],
    "options": [
      {
        "text": "Legitimate: Browser address bar confirms authentic primary domain (discord.com) with valid TLS encryption and standard auth fields",
        "isCorrect": true
      },
      {
        "text": "Legitimate: Portals protected by cloud-hosted content delivery networks are immune to credential harvesting exploits",
        "isCorrect": false
      },
      {
        "text": "Fake Portal: Redirecting through specialized authentication subdomains indicates unauthorized traffic redirection to proxy servers",
        "isCorrect": false
      },
      {
        "text": "Fake Portal: Authentication endpoints utilizing query-string state parameters indicate potential session spoofing",
        "isCorrect": false
      }
    ],
    "redFlags": [],
    "explanation": "Authentic Discord desktop and web client sign-in endpoint."
  },
  {
    "id": "lp-17",
    "category": "login",
    "categoryTitle": "Fake Login-Page Recognition",
    "difficulty": "Medium",
    "type": "login-inspect",
    "scenarioTitle": "Login Portal Inspection #17",
    "mockBrowserUrl": "https://dropbox.com.shared-folder-access.info/signin",
    "sslStatus": "secure",
    "brandTitle": "Dropbox Sign In to View Folder",
    "inputFields": [
      {
        "label": "Email",
        "placeholder": "user@domain.com"
      },
      {
        "label": "Password",
        "placeholder": "••••••••"
      }
    ],
    "options": [
      {
        "text": "Fake Portal: Subdomain deception where the actual apex domain belongs to an unauthorized third-party registrar",
        "isCorrect": true
      },
      {
        "text": "Fake Portal: Any authentication interface lacking biometric passkey prompts represents an untrusted endpoint",
        "isCorrect": false
      },
      {
        "text": "Legitimate: The authentication card matches standard enterprise layout guidelines and institutional typography",
        "isCorrect": false
      },
      {
        "text": "Legitimate: An active SSL padlock icon in the browser address bar confirms that the website is officially genuine",
        "isCorrect": false
      }
    ],
    "redFlags": [
      "Subdomain deception on .info"
    ],
    "explanation": "The apex domain is shared-folder-access.info, an attacker credential harvesting trap."
  },
  {
    "id": "lp-18",
    "category": "login",
    "categoryTitle": "Fake Login-Page Recognition",
    "difficulty": "Hard",
    "type": "login-inspect",
    "scenarioTitle": "Login Portal Inspection #18",
    "mockBrowserUrl": "https://www.linkedin.com/checkpoint/lg/login",
    "sslStatus": "secure",
    "brandTitle": "Sign in to LinkedIn",
    "inputFields": [
      {
        "label": "Email or Phone",
        "placeholder": "user@email.com"
      },
      {
        "label": "Password",
        "placeholder": "••••••••••••"
      }
    ],
    "options": [
      {
        "text": "Legitimate: Browser address bar confirms authentic primary domain (www.linkedin.com) with valid TLS encryption and standard auth fields",
        "isCorrect": true
      },
      {
        "text": "Legitimate: Single sign-on federated authentication interfaces are physically incapable of being intercepted by adversaries",
        "isCorrect": false
      },
      {
        "text": "Fake Portal: Redirecting through specialized authentication subdomains indicates unauthorized traffic redirection to proxy servers",
        "isCorrect": false
      },
      {
        "text": "Fake Portal: Authentication endpoints utilizing query-string state parameters indicate potential session spoofing",
        "isCorrect": false
      }
    ],
    "redFlags": [],
    "explanation": "Authentic LinkedIn checkpoint sign-in URL."
  },
  {
    "id": "lp-19",
    "category": "login",
    "categoryTitle": "Fake Login-Page Recognition",
    "difficulty": "Easy",
    "type": "login-inspect",
    "scenarioTitle": "Login Portal Inspection #19",
    "mockBrowserUrl": "http://amazon-prime-login.net/ap/signin",
    "sslStatus": "insecure",
    "brandTitle": "Amazon Prime Member Sign In",
    "inputFields": [
      {
        "label": "Email or mobile phone",
        "placeholder": "email@domain.com"
      },
      {
        "label": "Amazon password",
        "placeholder": "••••••••"
      }
    ],
    "options": [
      {
        "text": "Fake Portal: Insecure HTTP connection transmitting sensitive authentication credentials across an unverified domain",
        "isCorrect": true
      },
      {
        "text": "Fake Portal: Modern enterprise login standards strictly prohibit password input fields on responsive viewports",
        "isCorrect": false
      },
      {
        "text": "Legitimate: The authentication card matches standard enterprise layout guidelines and institutional typography",
        "isCorrect": false
      },
      {
        "text": "Legitimate: An active SSL padlock icon in the browser address bar confirms that the website is officially genuine",
        "isCorrect": false
      }
    ],
    "redFlags": [
      "Insecure HTTP",
      "Third-party lookalike domain"
    ],
    "explanation": "Amazon logins are hosted on amazon.com over HTTPS. Lookalike .net domains are phishing traps."
  },
  {
    "id": "lp-20",
    "category": "login",
    "categoryTitle": "Fake Login-Page Recognition",
    "difficulty": "Medium",
    "type": "login-inspect",
    "scenarioTitle": "Login Portal Inspection #20",
    "mockBrowserUrl": "https://login.live.com/oauth20_authorize.srf",
    "sslStatus": "secure",
    "brandTitle": "Microsoft Account Sign In",
    "inputFields": [
      {
        "label": "Sign in",
        "placeholder": "Email, phone, or Skype"
      }
    ],
    "options": [
      {
        "text": "Legitimate: Browser address bar confirms authentic primary domain (login.live.com) with valid TLS encryption and standard auth fields",
        "isCorrect": true
      },
      {
        "text": "Legitimate: Multi-factor authentication mechanisms automatically nullify all threats across external network connections",
        "isCorrect": false
      },
      {
        "text": "Fake Portal: Multi-step authorization screens indicate an adversary-in-the-middle credential harvesting proxy",
        "isCorrect": false
      },
      {
        "text": "Fake Portal: Single-sign-on portals must reside directly on the top-level marketing homepage rather than dedicated identity hosts",
        "isCorrect": false
      }
    ],
    "redFlags": [],
    "explanation": "login.live.com is Microsoft's official production consumer identity service."
  },
  {
    "id": "lp-21",
    "category": "login",
    "categoryTitle": "Fake Login-Page Recognition",
    "difficulty": "Hard",
    "type": "login-inspect",
    "scenarioTitle": "Login Portal Inspection #21",
    "mockBrowserUrl": "https://adobe.com.account-verify-license.cc/login",
    "sslStatus": "secure",
    "brandTitle": "Adobe Creative Cloud Sign In",
    "inputFields": [
      {
        "label": "Email address",
        "placeholder": "designer@studio.com"
      },
      {
        "label": "Password",
        "placeholder": "••••••••••••"
      },
      {
        "label": "Credit Card for Software Reactivation",
        "placeholder": "Card Number"
      }
    ],
    "options": [
      {
        "text": "Fake Portal: Subdomain deception where the actual apex domain belongs to an unauthorized third-party registrar",
        "isCorrect": true
      },
      {
        "text": "Fake Portal: Modern enterprise login standards strictly prohibit password input fields on responsive viewports",
        "isCorrect": false
      },
      {
        "text": "Legitimate: The login interface displays official corporate logos, copyright statements, and matching styling",
        "isCorrect": false
      },
      {
        "text": "Legitimate: The URL address bar contains recognized organizational keywords matching the service provider",
        "isCorrect": false
      }
    ],
    "redFlags": [
      "Subdomain deception",
      "Harvests credit card info"
    ],
    "explanation": "Adobe operates on adobe.com. The string .cc in this URL is an offshore country code TLD, not Creative Cloud."
  },
  {
    "id": "lp-22",
    "category": "login",
    "categoryTitle": "Fake Login-Page Recognition",
    "difficulty": "Easy",
    "type": "login-inspect",
    "scenarioTitle": "Login Portal Inspection #22",
    "mockBrowserUrl": "https://accounts.google.com/signin/v2/challenge/pwd?locale=en&id=121",
    "sslStatus": "secure",
    "brandTitle": "Sign in with Google",
    "inputFields": [
      {
        "label": "Enter your password",
        "placeholder": "••••••••••••"
      }
    ],
    "options": [
      {
        "text": "Legitimate: Browser address bar confirms authentic primary domain (accounts.google.com) with valid TLS encryption and standard auth fields",
        "isCorrect": true
      },
      {
        "text": "Legitimate: Single sign-on federated authentication interfaces are physically incapable of being intercepted by adversaries",
        "isCorrect": false
      },
      {
        "text": "Fake Portal: Multi-step authorization screens indicate an adversary-in-the-middle credential harvesting proxy",
        "isCorrect": false
      },
      {
        "text": "Fake Portal: Single-sign-on portals must reside directly on the top-level marketing homepage rather than dedicated identity hosts",
        "isCorrect": false
      }
    ],
    "redFlags": [],
    "explanation": "Everything checks out: legitimate domain, valid HTTPS certificate, clean brand assets, and standard inputs."
  },
  {
    "id": "lp-23",
    "category": "login",
    "categoryTitle": "Fake Login-Page Recognition",
    "difficulty": "Medium",
    "type": "login-inspect",
    "scenarioTitle": "Login Portal Inspection #23",
    "mockBrowserUrl": "https://netflix.customer-account-reactivation.co/login?locale=en&id=122",
    "sslStatus": "secure",
    "brandTitle": "Netflix Member Sign In",
    "inputFields": [
      {
        "label": "Email or Mobile Number",
        "placeholder": "user@domain.com"
      },
      {
        "label": "Password",
        "placeholder": "••••••••••••"
      },
      {
        "label": "Credit Card Number (For Verification)",
        "placeholder": "16-digit card number"
      },
      {
        "label": "CVV & ATM PIN",
        "placeholder": "3-digit CVV / 4-digit PIN"
      }
    ],
    "options": [
      {
        "text": "Fake Portal: Subdomain deception where the actual apex domain belongs to an unauthorized third-party registrar",
        "isCorrect": true
      },
      {
        "text": "Fake Portal: Any authentication interface lacking biometric passkey prompts represents an untrusted endpoint",
        "isCorrect": false
      },
      {
        "text": "Legitimate: The authentication card matches standard enterprise layout guidelines and institutional typography",
        "isCorrect": false
      },
      {
        "text": "Legitimate: An active SSL padlock icon in the browser address bar confirms that the website is officially genuine",
        "isCorrect": false
      }
    ],
    "redFlags": [
      "Fake domain on .co TLD",
      "Excessive credential requests on login"
    ],
    "explanation": "An SSL lock only means encryption; it does not verify site ownership. Attackers obtain free SSL certificates in seconds."
  },
  {
    "id": "lp-24",
    "category": "login",
    "categoryTitle": "Fake Login-Page Recognition",
    "difficulty": "Hard",
    "type": "login-inspect",
    "scenarioTitle": "Login Portal Inspection #24",
    "mockBrowserUrl": "https://secure.bankofamerica.com.login-client-session.biz/auth?locale=en&id=123",
    "sslStatus": "secure",
    "brandTitle": "Bank of America Sign In",
    "inputFields": [
      {
        "label": "Online ID",
        "placeholder": "Enter Online ID"
      },
      {
        "label": "Passcode",
        "placeholder": "••••••••"
      }
    ],
    "options": [
      {
        "text": "Fake Portal: Subdomain deception where the actual apex domain belongs to an unauthorized third-party registrar",
        "isCorrect": true
      },
      {
        "text": "Fake Portal: Modern enterprise login standards strictly prohibit password input fields on responsive viewports",
        "isCorrect": false
      },
      {
        "text": "Legitimate: The login interface displays official corporate logos, copyright statements, and matching styling",
        "isCorrect": false
      },
      {
        "text": "Legitimate: The URL address bar contains recognized organizational keywords matching the service provider",
        "isCorrect": false
      }
    ],
    "redFlags": [
      "Subdomain spoofing trap"
    ],
    "explanation": "Inspect the domain directly preceding the single slash: here it is .biz, not bankofamerica.com."
  },
  {
    "id": "lp-25",
    "category": "login",
    "categoryTitle": "Fake Login-Page Recognition",
    "difficulty": "Easy",
    "type": "login-inspect",
    "scenarioTitle": "Login Portal Inspection #25",
    "mockBrowserUrl": "https://steamcommunnity.com/openid/login?locale=en&id=124",
    "sslStatus": "secure",
    "brandTitle": "Sign into Steam to claim $50 Wallet Code",
    "inputFields": [
      {
        "label": "Steam Account Name",
        "placeholder": "Enter username"
      },
      {
        "label": "Password",
        "placeholder": "••••••••"
      },
      {
        "label": "Steam Guard Backup Code",
        "placeholder": "R12345"
      }
    ],
    "options": [
      {
        "text": "Fake Portal: Typosquatted domain deliberately mimics authentic branding to harvest user credentials",
        "isCorrect": true
      },
      {
        "text": "Fake Portal: Enterprise identity providers are technically prohibited from displaying custom branding logos on login forms",
        "isCorrect": false
      },
      {
        "text": "Legitimate: The authentication card matches standard enterprise layout guidelines and institutional typography",
        "isCorrect": false
      },
      {
        "text": "Legitimate: An active SSL padlock icon in the browser address bar confirms that the website is officially genuine",
        "isCorrect": false
      }
    ],
    "redFlags": [
      "Typosquatted domain (double n)",
      "Emergency recovery code harvesting"
    ],
    "explanation": "The domain has an extra \"n\" (steamcommunnity.com) and steals one-time backup recovery codes."
  },
  {
    "id": "lp-26",
    "category": "login",
    "categoryTitle": "Fake Login-Page Recognition",
    "difficulty": "Medium",
    "type": "login-inspect",
    "scenarioTitle": "Login Portal Inspection #26",
    "mockBrowserUrl": "https://appleid.apple.com/sign-in?locale=en&id=125",
    "sslStatus": "secure",
    "brandTitle": "Sign in with Apple ID",
    "inputFields": [
      {
        "label": "Apple ID",
        "placeholder": "name@example.com"
      },
      {
        "label": "Password",
        "placeholder": "••••••••••••"
      }
    ],
    "options": [
      {
        "text": "Legitimate: Browser address bar confirms authentic primary domain (appleid.apple.com) with valid TLS encryption and standard auth fields",
        "isCorrect": true
      },
      {
        "text": "Legitimate: Multi-factor authentication mechanisms automatically nullify all threats across external network connections",
        "isCorrect": false
      },
      {
        "text": "Fake Portal: Multi-step authorization screens indicate an adversary-in-the-middle credential harvesting proxy",
        "isCorrect": false
      },
      {
        "text": "Fake Portal: Single-sign-on portals must reside directly on the top-level marketing homepage rather than dedicated identity hosts",
        "isCorrect": false
      }
    ],
    "redFlags": [],
    "explanation": "Official Apple ID web management authentication portal."
  },
  {
    "id": "lp-27",
    "category": "login",
    "categoryTitle": "Fake Login-Page Recognition",
    "difficulty": "Hard",
    "type": "login-inspect",
    "scenarioTitle": "Login Portal Inspection #27",
    "mockBrowserUrl": "http://paypal.com.customer-verification-portal.info/login?locale=en&id=126",
    "sslStatus": "insecure",
    "brandTitle": "PayPal Secure Sign In",
    "inputFields": [
      {
        "label": "Email",
        "placeholder": "user@email.com"
      },
      {
        "label": "Password",
        "placeholder": "••••••••"
      },
      {
        "label": "Social Security Number (SSN)",
        "placeholder": "XXX-XX-XXXX"
      }
    ],
    "options": [
      {
        "text": "Fake Portal: Insecure HTTP connection transmitting sensitive authentication credentials across an unverified domain",
        "isCorrect": true
      },
      {
        "text": "Fake Portal: Enterprise identity providers are technically prohibited from displaying custom branding logos on login forms",
        "isCorrect": false
      },
      {
        "text": "Legitimate: The authentication card matches standard enterprise layout guidelines and institutional typography",
        "isCorrect": false
      },
      {
        "text": "Legitimate: An active SSL padlock icon in the browser address bar confirms that the website is officially genuine",
        "isCorrect": false
      }
    ],
    "redFlags": [
      "Insecure HTTP",
      "Subdomain trap",
      "Harvests Social Security Number"
    ],
    "explanation": "PayPal operates over HTTPS on paypal.com and never asks for your SSN on standard sign-in."
  },
  {
    "id": "lp-28",
    "category": "login",
    "categoryTitle": "Fake Login-Page Recognition",
    "difficulty": "Easy",
    "type": "login-inspect",
    "scenarioTitle": "Login Portal Inspection #28",
    "mockBrowserUrl": "https://signin.aws.amazon.com/oauth?locale=en&id=127",
    "sslStatus": "secure",
    "brandTitle": "Amazon Web Services Console Sign-In",
    "inputFields": [
      {
        "label": "Root user email or IAM user",
        "placeholder": "user@company.com"
      },
      {
        "label": "Password",
        "placeholder": "••••••••••••"
      }
    ],
    "options": [
      {
        "text": "Legitimate: Browser address bar confirms authentic primary domain (signin.aws.amazon.com) with valid TLS encryption and standard auth fields",
        "isCorrect": true
      },
      {
        "text": "Legitimate: Portals protected by cloud-hosted content delivery networks are immune to credential harvesting exploits",
        "isCorrect": false
      },
      {
        "text": "Fake Portal: Multi-step authorization screens indicate an adversary-in-the-middle credential harvesting proxy",
        "isCorrect": false
      },
      {
        "text": "Fake Portal: Single-sign-on portals must reside directly on the top-level marketing homepage rather than dedicated identity hosts",
        "isCorrect": false
      }
    ],
    "redFlags": [],
    "explanation": "Official AWS Management Console login URL on canonical domain."
  },
  {
    "id": "lp-29",
    "category": "login",
    "categoryTitle": "Fake Login-Page Recognition",
    "difficulty": "Medium",
    "type": "login-inspect",
    "scenarioTitle": "Login Portal Inspection #29",
    "mockBrowserUrl": "https://okta.com-identity-management.net/sso/login?locale=en&id=128",
    "sslStatus": "secure",
    "brandTitle": "Okta Enterprise Identity Single Sign-On",
    "inputFields": [
      {
        "label": "Username",
        "placeholder": "employee@corp.com"
      },
      {
        "label": "Master Active Directory Password",
        "placeholder": "••••••••••••"
      },
      {
        "label": "Mother's Maiden Name",
        "placeholder": "Security Q"
      }
    ],
    "options": [
      {
        "text": "Fake Portal: Host domain is unassociated with the official service and demands excessive authentication data",
        "isCorrect": true
      },
      {
        "text": "Fake Portal: Enterprise identity providers are technically prohibited from displaying custom branding logos on login forms",
        "isCorrect": false
      },
      {
        "text": "Legitimate: The authentication card matches standard enterprise layout guidelines and institutional typography",
        "isCorrect": false
      },
      {
        "text": "Legitimate: An active SSL padlock icon in the browser address bar confirms that the website is officially genuine",
        "isCorrect": false
      }
    ],
    "redFlags": [
      "Lookalike domain mimicking Okta",
      "Excessive personal data harvesting"
    ],
    "explanation": "The host is com-identity-management.net. Okta customer tenants are hosted on okta.com."
  },
  {
    "id": "lp-30",
    "category": "login",
    "categoryTitle": "Fake Login-Page Recognition",
    "difficulty": "Hard",
    "type": "login-inspect",
    "scenarioTitle": "Login Portal Inspection #30",
    "mockBrowserUrl": "https://github.com/login?locale=en&id=129",
    "sslStatus": "secure",
    "brandTitle": "Sign in to GitHub",
    "inputFields": [
      {
        "label": "Username or email address",
        "placeholder": "Enter username"
      },
      {
        "label": "Password",
        "placeholder": "••••••••••••"
      }
    ],
    "options": [
      {
        "text": "Legitimate: Browser address bar confirms authentic primary domain (github.com) with valid TLS encryption and standard auth fields",
        "isCorrect": true
      },
      {
        "text": "Legitimate: Portals protected by cloud-hosted content delivery networks are immune to credential harvesting exploits",
        "isCorrect": false
      },
      {
        "text": "Fake Portal: Redirecting through specialized authentication subdomains indicates unauthorized traffic redirection to proxy servers",
        "isCorrect": false
      },
      {
        "text": "Fake Portal: Authentication endpoints utilizing query-string state parameters indicate potential session spoofing",
        "isCorrect": false
      }
    ],
    "redFlags": [],
    "explanation": "Authentic GitHub web authentication page."
  },
  {
    "id": "lp-31",
    "category": "login",
    "categoryTitle": "Fake Login-Page Recognition",
    "difficulty": "Easy",
    "type": "login-inspect",
    "scenarioTitle": "Login Portal Inspection #31",
    "mockBrowserUrl": "https://chasebank-online-logon.xyz/auth/signin?locale=en&id=130",
    "sslStatus": "secure",
    "brandTitle": "Chase Online Banking Sign In",
    "inputFields": [
      {
        "label": "Username",
        "placeholder": "User ID"
      },
      {
        "label": "Password",
        "placeholder": "••••••••"
      },
      {
        "label": "Debit Card PIN",
        "placeholder": "4-digit ATM PIN"
      }
    ],
    "options": [
      {
        "text": "Fake Portal: Typosquatted domain deliberately mimics authentic branding to harvest user credentials",
        "isCorrect": true
      },
      {
        "text": "Fake Portal: Enterprise identity providers are technically prohibited from displaying custom branding logos on login forms",
        "isCorrect": false
      },
      {
        "text": "Legitimate: The login interface displays official corporate logos, copyright statements, and matching styling",
        "isCorrect": false
      },
      {
        "text": "Legitimate: The URL address bar contains recognized organizational keywords matching the service provider",
        "isCorrect": false
      }
    ],
    "redFlags": [
      "Scam .xyz domain",
      "Demands ATM PIN on login"
    ],
    "explanation": "Chase uses chase.com and NEVER requests debit card ATM PINs on online login screens."
  },
  {
    "id": "lp-32",
    "category": "login",
    "categoryTitle": "Fake Login-Page Recognition",
    "difficulty": "Medium",
    "type": "login-inspect",
    "scenarioTitle": "Login Portal Inspection #32",
    "mockBrowserUrl": "https://login.salesforce.com?locale=en&id=131",
    "sslStatus": "secure",
    "brandTitle": "Salesforce Enterprise Login",
    "inputFields": [
      {
        "label": "Username",
        "placeholder": "user@company.com"
      },
      {
        "label": "Password",
        "placeholder": "••••••••"
      }
    ],
    "options": [
      {
        "text": "Legitimate: Browser address bar confirms authentic primary domain (login.salesforce.com) with valid TLS encryption and standard auth fields",
        "isCorrect": true
      },
      {
        "text": "Legitimate: Multi-factor authentication mechanisms automatically nullify all threats across external network connections",
        "isCorrect": false
      },
      {
        "text": "Fake Portal: Redirecting through specialized authentication subdomains indicates unauthorized traffic redirection to proxy servers",
        "isCorrect": false
      },
      {
        "text": "Fake Portal: Authentication endpoints utilizing query-string state parameters indicate potential session spoofing",
        "isCorrect": false
      }
    ],
    "redFlags": [],
    "explanation": "Authentic Salesforce login endpoint."
  },
  {
    "id": "lp-33",
    "category": "login",
    "categoryTitle": "Fake Login-Page Recognition",
    "difficulty": "Hard",
    "type": "login-inspect",
    "scenarioTitle": "Login Portal Inspection #33",
    "mockBrowserUrl": "http://facebook-security-checkpoint.biz/checkpoint/login?locale=en&id=132",
    "sslStatus": "insecure",
    "brandTitle": "Meta / Facebook Security Checkpoint",
    "inputFields": [
      {
        "label": "Email or Phone Number",
        "placeholder": "someone@domain.com"
      },
      {
        "label": "Password",
        "placeholder": "••••••••"
      },
      {
        "label": "Upload Government Photo ID",
        "placeholder": "Select File"
      }
    ],
    "options": [
      {
        "text": "Fake Portal: Insecure HTTP connection transmitting sensitive authentication credentials across an unverified domain",
        "isCorrect": true
      },
      {
        "text": "Fake Portal: Modern enterprise login standards strictly prohibit password input fields on responsive viewports",
        "isCorrect": false
      },
      {
        "text": "Legitimate: The login interface displays official corporate logos, copyright statements, and matching styling",
        "isCorrect": false
      },
      {
        "text": "Legitimate: The URL address bar contains recognized organizational keywords matching the service provider",
        "isCorrect": false
      }
    ],
    "redFlags": [
      "Insecure HTTP",
      "Identity theft vector (photo ID upload)"
    ],
    "explanation": "Unencrypted third-party site stealing user credentials and government photo IDs."
  },
  {
    "id": "lp-34",
    "category": "login",
    "categoryTitle": "Fake Login-Page Recognition",
    "difficulty": "Easy",
    "type": "login-inspect",
    "scenarioTitle": "Login Portal Inspection #34",
    "mockBrowserUrl": "https://id.atlassian.com/login?locale=en&id=133",
    "sslStatus": "secure",
    "brandTitle": "Log in to your Atlassian account",
    "inputFields": [
      {
        "label": "Enter your email",
        "placeholder": "someone@company.com"
      }
    ],
    "options": [
      {
        "text": "Legitimate: Browser address bar confirms authentic primary domain (id.atlassian.com) with valid TLS encryption and standard auth fields",
        "isCorrect": true
      },
      {
        "text": "Legitimate: Single sign-on federated authentication interfaces are physically incapable of being intercepted by adversaries",
        "isCorrect": false
      },
      {
        "text": "Fake Portal: Multi-step authorization screens indicate an adversary-in-the-middle credential harvesting proxy",
        "isCorrect": false
      },
      {
        "text": "Fake Portal: Single-sign-on portals must reside directly on the top-level marketing homepage rather than dedicated identity hosts",
        "isCorrect": false
      }
    ],
    "redFlags": [],
    "explanation": "Official Atlassian cloud single sign-on portal."
  },
  {
    "id": "lp-35",
    "category": "login",
    "categoryTitle": "Fake Login-Page Recognition",
    "difficulty": "Medium",
    "type": "login-inspect",
    "scenarioTitle": "Login Portal Inspection #35",
    "mockBrowserUrl": "https://wellsfargo.com.account-recovery-desk.top/login?locale=en&id=134",
    "sslStatus": "secure",
    "brandTitle": "Wells Fargo Online Services",
    "inputFields": [
      {
        "label": "Username",
        "placeholder": "Online Username"
      },
      {
        "label": "Password",
        "placeholder": "••••••••"
      },
      {
        "label": "Debit Card Expiration & CVV",
        "placeholder": "MM/YY • CVV"
      }
    ],
    "options": [
      {
        "text": "Fake Portal: Subdomain deception where the actual apex domain belongs to an unauthorized third-party registrar",
        "isCorrect": true
      },
      {
        "text": "Fake Portal: Modern enterprise login standards strictly prohibit password input fields on responsive viewports",
        "isCorrect": false
      },
      {
        "text": "Legitimate: The login interface displays official corporate logos, copyright statements, and matching styling",
        "isCorrect": false
      },
      {
        "text": "Legitimate: The URL address bar contains recognized organizational keywords matching the service provider",
        "isCorrect": false
      }
    ],
    "redFlags": [
      "Subdomain deception",
      "Stealing card CVV on login"
    ],
    "explanation": "The apex host is account-recovery-desk.top. Routine bank logins do not collect card CVV codes."
  },
  {
    "id": "lp-36",
    "category": "login",
    "categoryTitle": "Fake Login-Page Recognition",
    "difficulty": "Hard",
    "type": "login-inspect",
    "scenarioTitle": "Login Portal Inspection #36",
    "mockBrowserUrl": "https://discord.com/login?locale=en&id=135",
    "sslStatus": "secure",
    "brandTitle": "Welcome back to Discord!",
    "inputFields": [
      {
        "label": "Email or Phone Number",
        "placeholder": "user@domain.com"
      },
      {
        "label": "Password",
        "placeholder": "••••••••••••"
      }
    ],
    "options": [
      {
        "text": "Legitimate: Browser address bar confirms authentic primary domain (discord.com) with valid TLS encryption and standard auth fields",
        "isCorrect": true
      },
      {
        "text": "Legitimate: Multi-factor authentication mechanisms automatically nullify all threats across external network connections",
        "isCorrect": false
      },
      {
        "text": "Fake Portal: Redirecting through specialized authentication subdomains indicates unauthorized traffic redirection to proxy servers",
        "isCorrect": false
      },
      {
        "text": "Fake Portal: Authentication endpoints utilizing query-string state parameters indicate potential session spoofing",
        "isCorrect": false
      }
    ],
    "redFlags": [],
    "explanation": "Authentic Discord desktop and web client sign-in endpoint."
  },
  {
    "id": "lp-37",
    "category": "login",
    "categoryTitle": "Fake Login-Page Recognition",
    "difficulty": "Easy",
    "type": "login-inspect",
    "scenarioTitle": "Login Portal Inspection #37",
    "mockBrowserUrl": "https://dropbox.com.shared-folder-access.info/signin?locale=en&id=136",
    "sslStatus": "secure",
    "brandTitle": "Dropbox Sign In to View Folder",
    "inputFields": [
      {
        "label": "Email",
        "placeholder": "user@domain.com"
      },
      {
        "label": "Password",
        "placeholder": "••••••••"
      }
    ],
    "options": [
      {
        "text": "Fake Portal: Subdomain deception where the actual apex domain belongs to an unauthorized third-party registrar",
        "isCorrect": true
      },
      {
        "text": "Fake Portal: Any authentication interface lacking biometric passkey prompts represents an untrusted endpoint",
        "isCorrect": false
      },
      {
        "text": "Legitimate: The login interface displays official corporate logos, copyright statements, and matching styling",
        "isCorrect": false
      },
      {
        "text": "Legitimate: The URL address bar contains recognized organizational keywords matching the service provider",
        "isCorrect": false
      }
    ],
    "redFlags": [
      "Subdomain deception on .info"
    ],
    "explanation": "The apex domain is shared-folder-access.info, an attacker credential harvesting trap."
  },
  {
    "id": "lp-38",
    "category": "login",
    "categoryTitle": "Fake Login-Page Recognition",
    "difficulty": "Medium",
    "type": "login-inspect",
    "scenarioTitle": "Login Portal Inspection #38",
    "mockBrowserUrl": "https://www.linkedin.com/checkpoint/lg/login?locale=en&id=137",
    "sslStatus": "secure",
    "brandTitle": "Sign in to LinkedIn",
    "inputFields": [
      {
        "label": "Email or Phone",
        "placeholder": "user@email.com"
      },
      {
        "label": "Password",
        "placeholder": "••••••••••••"
      }
    ],
    "options": [
      {
        "text": "Legitimate: Browser address bar confirms authentic primary domain (www.linkedin.com) with valid TLS encryption and standard auth fields",
        "isCorrect": true
      },
      {
        "text": "Legitimate: Single sign-on federated authentication interfaces are physically incapable of being intercepted by adversaries",
        "isCorrect": false
      },
      {
        "text": "Fake Portal: Redirecting through specialized authentication subdomains indicates unauthorized traffic redirection to proxy servers",
        "isCorrect": false
      },
      {
        "text": "Fake Portal: Authentication endpoints utilizing query-string state parameters indicate potential session spoofing",
        "isCorrect": false
      }
    ],
    "redFlags": [],
    "explanation": "Authentic LinkedIn checkpoint sign-in URL."
  },
  {
    "id": "lp-39",
    "category": "login",
    "categoryTitle": "Fake Login-Page Recognition",
    "difficulty": "Hard",
    "type": "login-inspect",
    "scenarioTitle": "Login Portal Inspection #39",
    "mockBrowserUrl": "http://amazon-prime-login.net/ap/signin?locale=en&id=138",
    "sslStatus": "insecure",
    "brandTitle": "Amazon Prime Member Sign In",
    "inputFields": [
      {
        "label": "Email or mobile phone",
        "placeholder": "email@domain.com"
      },
      {
        "label": "Amazon password",
        "placeholder": "••••••••"
      }
    ],
    "options": [
      {
        "text": "Fake Portal: Insecure HTTP connection transmitting sensitive authentication credentials across an unverified domain",
        "isCorrect": true
      },
      {
        "text": "Fake Portal: Enterprise identity providers are technically prohibited from displaying custom branding logos on login forms",
        "isCorrect": false
      },
      {
        "text": "Legitimate: The login interface displays official corporate logos, copyright statements, and matching styling",
        "isCorrect": false
      },
      {
        "text": "Legitimate: The URL address bar contains recognized organizational keywords matching the service provider",
        "isCorrect": false
      }
    ],
    "redFlags": [
      "Insecure HTTP",
      "Third-party lookalike domain"
    ],
    "explanation": "Amazon logins are hosted on amazon.com over HTTPS. Lookalike .net domains are phishing traps."
  },
  {
    "id": "lp-40",
    "category": "login",
    "categoryTitle": "Fake Login-Page Recognition",
    "difficulty": "Easy",
    "type": "login-inspect",
    "scenarioTitle": "Login Portal Inspection #40",
    "mockBrowserUrl": "https://login.live.com/oauth20_authorize.srf?locale=en&id=139",
    "sslStatus": "secure",
    "brandTitle": "Microsoft Account Sign In",
    "inputFields": [
      {
        "label": "Sign in",
        "placeholder": "Email, phone, or Skype"
      }
    ],
    "options": [
      {
        "text": "Legitimate: Browser address bar confirms authentic primary domain (login.live.com) with valid TLS encryption and standard auth fields",
        "isCorrect": true
      },
      {
        "text": "Legitimate: Portals protected by cloud-hosted content delivery networks are immune to credential harvesting exploits",
        "isCorrect": false
      },
      {
        "text": "Fake Portal: Multi-step authorization screens indicate an adversary-in-the-middle credential harvesting proxy",
        "isCorrect": false
      },
      {
        "text": "Fake Portal: Single-sign-on portals must reside directly on the top-level marketing homepage rather than dedicated identity hosts",
        "isCorrect": false
      }
    ],
    "redFlags": [],
    "explanation": "login.live.com is Microsoft's official production consumer identity service."
  },
  {
    "id": "lp-41",
    "category": "login",
    "categoryTitle": "Fake Login-Page Recognition",
    "difficulty": "Medium",
    "type": "login-inspect",
    "scenarioTitle": "Login Portal Inspection #41",
    "mockBrowserUrl": "http://login.micros0ftonline-portal.net/common/oauth2?locale=en&id=140",
    "sslStatus": "insecure",
    "brandTitle": "Microsoft 365 Sign in",
    "inputFields": [
      {
        "label": "Work or School Email",
        "placeholder": "someone@example.com"
      },
      {
        "label": "Password",
        "placeholder": "••••••••••••"
      },
      {
        "label": "ATM PIN or Mother's Maiden Name",
        "placeholder": "Security Verification"
      }
    ],
    "options": [
      {
        "text": "Fake Portal: Insecure HTTP connection transmitting sensitive authentication credentials across an unverified domain",
        "isCorrect": true
      },
      {
        "text": "Fake Portal: Any authentication interface lacking biometric passkey prompts represents an untrusted endpoint",
        "isCorrect": false
      },
      {
        "text": "Legitimate: The authentication card matches standard enterprise layout guidelines and institutional typography",
        "isCorrect": false
      },
      {
        "text": "Legitimate: An active SSL padlock icon in the browser address bar confirms that the website is officially genuine",
        "isCorrect": false
      }
    ],
    "redFlags": [
      "Insecure HTTP connection",
      "Typosquatted domain (micros0ft)",
      "Unreasonable credential harvesting (ATM PIN)"
    ],
    "explanation": "Microsoft 365 uses HTTPS on login.microsoftonline.com and NEVER asks for banking PINs or maternal maiden names."
  },
  {
    "id": "lp-42",
    "category": "login",
    "categoryTitle": "Fake Login-Page Recognition",
    "difficulty": "Hard",
    "type": "login-inspect",
    "scenarioTitle": "Login Portal Inspection #42",
    "mockBrowserUrl": "https://accounts.google.com/signin/v2/challenge/pwd?locale=en&id=141",
    "sslStatus": "secure",
    "brandTitle": "Sign in with Google",
    "inputFields": [
      {
        "label": "Enter your password",
        "placeholder": "••••••••••••"
      }
    ],
    "options": [
      {
        "text": "Legitimate: Browser address bar confirms authentic primary domain (accounts.google.com) with valid TLS encryption and standard auth fields",
        "isCorrect": true
      },
      {
        "text": "Legitimate: Single sign-on federated authentication interfaces are physically incapable of being intercepted by adversaries",
        "isCorrect": false
      },
      {
        "text": "Fake Portal: Multi-step authorization screens indicate an adversary-in-the-middle credential harvesting proxy",
        "isCorrect": false
      },
      {
        "text": "Fake Portal: Single-sign-on portals must reside directly on the top-level marketing homepage rather than dedicated identity hosts",
        "isCorrect": false
      }
    ],
    "redFlags": [],
    "explanation": "Everything checks out: legitimate domain, valid HTTPS certificate, clean brand assets, and standard inputs."
  },
  {
    "id": "qr-1",
    "category": "qr",
    "categoryTitle": "QR Phishing Simulation (Quishing)",
    "difficulty": "Easy",
    "type": "qr-scan",
    "scenarioTitle": "QR Threat Assessment #1",
    "context": "You park downtown. An adhesive sticker with a QR code is pasted directly over the official credit card slot: \"QUICK PAY BY PHONE: Scan to avoid $75 ticket!\"",
    "scannedUrl": "http://cityparking-pay-ticket-now.cc/express-meter?spot=402",
    "physicalVisual": "qr-viewfinder",
    "options": [
      {
        "text": "Malicious (Quishing): Physical sticker overlay directs users to an unverified .cc domain to harvest credentials or payments",
        "isCorrect": true
      },
      {
        "text": "Malicious (Quishing): Enterprise mobile compliance mandates that all QR scanning take place within an isolated sandbox",
        "isCorrect": false
      },
      {
        "text": "Legitimate (Safe): The communication incorporates official institutional insignia and formal agency verification notices",
        "isCorrect": false
      },
      {
        "text": "Legitimate (Safe): Physical letters delivered through the postal service bearing agency seals cannot be weaponized by scammers",
        "isCorrect": false
      }
    ],
    "redFlags": [
      "Physical sticker overlay",
      "Urgent fine scare tactic",
      "Insecure HTTP on .cc domain"
    ],
    "explanation": "Physical QR tampering (Quishing) is common on parking meters. Attackers stick vinyl scam QR codes over real meters to steal card payments."
  },
  {
    "id": "qr-2",
    "category": "qr",
    "categoryTitle": "QR Phishing Simulation (Quishing)",
    "difficulty": "Medium",
    "type": "qr-scan",
    "scenarioTitle": "QR Threat Assessment #2",
    "context": "Corporate memo email: \"Mandatory security policy update: Scan this QR code with your mobile authenticator app within 24 hours to preserve VPN access.\"",
    "scannedUrl": "https://company-authenticator-setup.com.token-verify.me/auth/qr",
    "physicalVisual": "qr-viewfinder",
    "options": [
      {
        "text": "Malicious (Quishing): Embedded QR image in email bypasses security gateways to route victims onto unmonitored devices",
        "isCorrect": true
      },
      {
        "text": "Malicious (Quishing): Any decoded QR destination containing numerical parameters indicates an active memory payload",
        "isCorrect": false
      },
      {
        "text": "Legitimate (Safe): The physical placement on authorized public or commercial hardware indicates vendor endorsement",
        "isCorrect": false
      },
      {
        "text": "Legitimate (Safe): The presence of an active HTTPS connection verifies that the destination server is secure and authentic",
        "isCorrect": false
      }
    ],
    "redFlags": [
      "Email gateway filter evasion",
      "Untrusted external domain (token-verify.me)"
    ],
    "explanation": "Attackers use QR codes in emails because spam filters cannot easily parse image pixels. Furthermore, it moves victims off monitored corporate PCs onto unmonitored personal smartphones."
  },
  {
    "id": "qr-3",
    "category": "qr",
    "categoryTitle": "QR Phishing Simulation (Quishing)",
    "difficulty": "Hard",
    "type": "qr-scan",
    "scenarioTitle": "QR Threat Assessment #3",
    "context": "At an established bistro, a laser-engraved wooden table placard displays: \"Scan to view our daily seasonal dinner menu & wine list.\"",
    "scannedUrl": "https://menu.toasttab.com/our-bistro/menu",
    "physicalVisual": "qr-viewfinder",
    "options": [
      {
        "text": "Legitimate (Safe): Permanently mounted fixture directing to an authenticated restaurant POS platform with no credential prompts",
        "isCorrect": true
      },
      {
        "text": "Legitimate (Safe): QR codes generated with dynamic SVG patterns are cryptographically immune to unauthorized redirection",
        "isCorrect": false
      },
      {
        "text": "Malicious (Quishing): Decoded web addresses containing deep app-linking query strings indicate malicious telemetry tracking",
        "isCorrect": false
      },
      {
        "text": "Malicious (Quishing): Connecting through non-root domain endpoints indicates an unmanaged external proxy gateway",
        "isCorrect": false
      }
    ],
    "redFlags": [],
    "explanation": "Permanent laser-engraved QR codes leading to reputable restaurant POS platforms without asking for credentials or downloads are safe."
  },
  {
    "id": "qr-4",
    "category": "qr",
    "categoryTitle": "QR Phishing Simulation (Quishing)",
    "difficulty": "Easy",
    "type": "qr-scan",
    "scenarioTitle": "QR Threat Assessment #4",
    "context": "At an airport departure gate, a paper flyer is taped to a charging pillar: \"FREE VIP 5G High-Speed Wi-Fi. Scan QR to connect instantly without passwords.\"",
    "scannedUrl": "http://airport-free-wifi-connect.net/download/portal-profile.mobileconfig",
    "physicalVisual": "qr-viewfinder",
    "options": [
      {
        "text": "Malicious (Quishing): QR code initiates an untrusted profile or APK download designed to compromise mobile device security",
        "isCorrect": true
      },
      {
        "text": "Malicious (Quishing): Public payment kiosks and terminals are legally prohibited from utilizing QR code payment technology",
        "isCorrect": false
      },
      {
        "text": "Legitimate (Safe): The physical placement on authorized public or commercial hardware indicates vendor endorsement",
        "isCorrect": false
      },
      {
        "text": "Legitimate (Safe): The presence of an active HTTPS connection verifies that the destination server is secure and authentic",
        "isCorrect": false
      }
    ],
    "redFlags": [
      "Taped paper flyer",
      "Malicious .mobileconfig profile download"
    ],
    "explanation": "Downloading `.mobileconfig` profiles installs configuration profiles that allow attackers to intercept all device traffic and spy on credentials."
  },
  {
    "id": "qr-5",
    "category": "qr",
    "categoryTitle": "QR Phishing Simulation (Quishing)",
    "difficulty": "Medium",
    "type": "qr-scan",
    "scenarioTitle": "QR Threat Assessment #5",
    "context": "A paper slip attached to your apartment door reads: \"Delivery Attempt Failed! Scan this QR code within 4 hours to reschedule your delivery before package is returned to sender.\"",
    "scannedUrl": "https://usps.tracking-reschedule-fee.top/pay-1dollar",
    "physicalVisual": "qr-viewfinder",
    "options": [
      {
        "text": "Malicious (Quishing): Physical sticker overlay directs users to an unverified .top domain to harvest credentials or payments",
        "isCorrect": true
      },
      {
        "text": "Malicious (Quishing): Public payment kiosks and terminals are legally prohibited from utilizing QR code payment technology",
        "isCorrect": false
      },
      {
        "text": "Legitimate (Safe): The decoded URL path contains recognized functional keywords matching the intended operational service",
        "isCorrect": false
      },
      {
        "text": "Legitimate (Safe): Modern mobile camera sensors automatically quarantine and block barcodes that resolve to malicious hosts",
        "isCorrect": false
      }
    ],
    "redFlags": [
      "Door slip sticker scam",
      "Urgent 4-hour return threat",
      "Lookalike .top domain harvesting credit cards"
    ],
    "explanation": "A notorious Quishing scam where stickers or door slips prompt a \"$1 fee\" to harvest full credit card and identity data."
  },
  {
    "id": "qr-6",
    "category": "qr",
    "categoryTitle": "QR Phishing Simulation (Quishing)",
    "difficulty": "Hard",
    "type": "qr-scan",
    "scenarioTitle": "QR Threat Assessment #6",
    "context": "Hotel room desk placard permanently printed on acrylic: \"Scan to connect to Guest High-Speed Wi-Fi.\"",
    "scannedUrl": "https://guest-wifi.marriott.com/portal/login",
    "physicalVisual": "qr-viewfinder",
    "options": [
      {
        "text": "Legitimate (Safe): Permanent institutional installation resolving to the verified primary organizational domain over TLS",
        "isCorrect": true
      },
      {
        "text": "Legitimate (Safe): QR codes generated with dynamic SVG patterns are cryptographically immune to unauthorized redirection",
        "isCorrect": false
      },
      {
        "text": "Malicious (Quishing): Decoded web addresses containing deep app-linking query strings indicate malicious telemetry tracking",
        "isCorrect": false
      },
      {
        "text": "Malicious (Quishing): Connecting through non-root domain endpoints indicates an unmanaged external proxy gateway",
        "isCorrect": false
      }
    ],
    "redFlags": [],
    "explanation": "Permanent hotel fixture directing to the chain's authenticated corporate guest portal."
  },
  {
    "id": "qr-7",
    "category": "qr",
    "categoryTitle": "QR Phishing Simulation (Quishing)",
    "difficulty": "Easy",
    "type": "qr-scan",
    "scenarioTitle": "QR Threat Assessment #7",
    "context": "At an electric vehicle (EV) charging stall, a cheap vinyl sticker is pasted over the digital touchscreen: \"PAY HERE: Scan QR to start fast charging ($0.35/kWh)\"",
    "scannedUrl": "http://ev-quickcharge-station.xyz/pay/charge-now",
    "physicalVisual": "qr-viewfinder",
    "options": [
      {
        "text": "Malicious (Quishing): Physical sticker overlay directs users to an unverified .xyz domain to harvest credentials or payments",
        "isCorrect": true
      },
      {
        "text": "Malicious (Quishing): Any decoded QR destination containing numerical parameters indicates an active memory payload",
        "isCorrect": false
      },
      {
        "text": "Legitimate (Safe): The decoded URL path contains recognized functional keywords matching the intended operational service",
        "isCorrect": false
      },
      {
        "text": "Legitimate (Safe): Modern mobile camera sensors automatically quarantine and block barcodes that resolve to malicious hosts",
        "isCorrect": false
      }
    ],
    "redFlags": [
      "Physical sticker pasted over screen",
      "Insecure HTTP on .xyz domain"
    ],
    "explanation": "Scammers paste fraudulent QR stickers on EV chargers and gas pumps to skim driver credit cards."
  },
  {
    "id": "qr-8",
    "category": "qr",
    "categoryTitle": "QR Phishing Simulation (Quishing)",
    "difficulty": "Medium",
    "type": "qr-scan",
    "scenarioTitle": "QR Threat Assessment #8",
    "context": "Inside an official airline in-flight magazine: \"Download the Airline Entertainment App for free movies on your flight.\"",
    "scannedUrl": "https://apps.apple.com/us/app/delta-air-lines/id388491989",
    "physicalVisual": "qr-viewfinder",
    "options": [
      {
        "text": "Legitimate (Safe): Decoded URL routes directly to a verified first-party public application repository over HTTPS",
        "isCorrect": true
      },
      {
        "text": "Legitimate (Safe): QR codes generated with dynamic SVG patterns are cryptographically immune to unauthorized redirection",
        "isCorrect": false
      },
      {
        "text": "Malicious (Quishing): Physical QR codes in public venues should never be scanned due to potential drive-by mobile exploits",
        "isCorrect": false
      },
      {
        "text": "Malicious (Quishing): Any QR code requesting network access outside internal enterprise firewalls represents an active threat",
        "isCorrect": false
      }
    ],
    "redFlags": [],
    "explanation": "The decoded URL leads directly to Apple's verified App Store repository."
  },
  {
    "id": "qr-9",
    "category": "qr",
    "categoryTitle": "QR Phishing Simulation (Quishing)",
    "difficulty": "Hard",
    "type": "qr-scan",
    "scenarioTitle": "QR Threat Assessment #9",
    "context": "Received in an unexpected postal letter with an IRS logo: \"URGENT: Economic tax credit verification required. Scan QR code to authenticate identity.\"",
    "scannedUrl": "https://irs.gov.tax-identity-portal.biz/verify",
    "physicalVisual": "qr-viewfinder",
    "options": [
      {
        "text": "Malicious (Quishing): Postal letter quishing scam using official logos to route recipients to a fraudulent .biz portal",
        "isCorrect": true
      },
      {
        "text": "Malicious (Quishing): Enterprise mobile compliance mandates that all QR scanning take place within an isolated sandbox",
        "isCorrect": false
      },
      {
        "text": "Legitimate (Safe): The decoded URL path contains recognized functional keywords matching the intended operational service",
        "isCorrect": false
      },
      {
        "text": "Legitimate (Safe): Modern mobile camera sensors automatically quarantine and block barcodes that resolve to malicious hosts",
        "isCorrect": false
      }
    ],
    "redFlags": [
      "Mail-quishing paper scam",
      "Subdomain spoofing on .biz"
    ],
    "explanation": "Mail-quishing sends physical letters with official seals to bypass digital filters and trick recipients into scanning scam QR codes."
  },
  {
    "id": "qr-10",
    "category": "qr",
    "categoryTitle": "QR Phishing Simulation (Quishing)",
    "difficulty": "Easy",
    "type": "qr-scan",
    "scenarioTitle": "QR Threat Assessment #10",
    "context": "Coffee shop loyalty card sticker: \"Join our Rewards Club & get a free iced latte on your next visit.\"",
    "scannedUrl": "https://www.starbucks.com/rewards",
    "physicalVisual": "qr-viewfinder",
    "options": [
      {
        "text": "Legitimate (Safe): Decoded URL points to the authentic corporate domain with valid TLS encryption and no suspicious prompts",
        "isCorrect": true
      },
      {
        "text": "Legitimate (Safe): Mobile operating systems automatically verify the authenticity of all hostnames prior to rendering links",
        "isCorrect": false
      },
      {
        "text": "Malicious (Quishing): Decoded web addresses containing deep app-linking query strings indicate malicious telemetry tracking",
        "isCorrect": false
      },
      {
        "text": "Malicious (Quishing): Connecting through non-root domain endpoints indicates an unmanaged external proxy gateway",
        "isCorrect": false
      }
    ],
    "redFlags": [],
    "explanation": "Authentic loyalty promotion leading to the company's verified primary website."
  },
  {
    "id": "qr-11",
    "category": "qr",
    "categoryTitle": "QR Phishing Simulation (Quishing)",
    "difficulty": "Medium",
    "type": "qr-scan",
    "scenarioTitle": "QR Threat Assessment #11",
    "context": "Conference attendee badge has a printed QR code on the back: \"Scan to download the Conference Agenda & Networking APK.\"",
    "scannedUrl": "http://tech-summit-networking.net/app-download/conference.apk",
    "physicalVisual": "qr-viewfinder",
    "options": [
      {
        "text": "Malicious (Quishing): QR code initiates an untrusted profile or APK download designed to compromise mobile device security",
        "isCorrect": true
      },
      {
        "text": "Malicious (Quishing): Public payment kiosks and terminals are legally prohibited from utilizing QR code payment technology",
        "isCorrect": false
      },
      {
        "text": "Legitimate (Safe): The communication incorporates official institutional insignia and formal agency verification notices",
        "isCorrect": false
      },
      {
        "text": "Legitimate (Safe): Physical letters delivered through the postal service bearing agency seals cannot be weaponized by scammers",
        "isCorrect": false
      }
    ],
    "redFlags": [
      "Direct .apk download",
      "Bypasses Google Play Store security"
    ],
    "explanation": "Prompting users to sideload unvetted .apk files from QR codes installs spyware or malware."
  },
  {
    "id": "qr-12",
    "category": "qr",
    "categoryTitle": "QR Phishing Simulation (Quishing)",
    "difficulty": "Hard",
    "type": "qr-scan",
    "scenarioTitle": "QR Threat Assessment #12",
    "context": "Museum exhibit plaque permanently mounted beside a sculpture: \"Scan for audio guide and artist commentary.\"",
    "scannedUrl": "https://audio.louvre.fr/exhibits/mona-lisa-history",
    "physicalVisual": "qr-viewfinder",
    "options": [
      {
        "text": "Legitimate (Safe): Decoded URL points to the authentic corporate domain with valid TLS encryption and no suspicious prompts",
        "isCorrect": true
      },
      {
        "text": "Legitimate (Safe): Mobile operating systems automatically verify the authenticity of all hostnames prior to rendering links",
        "isCorrect": false
      },
      {
        "text": "Malicious (Quishing): Decoded web addresses containing deep app-linking query strings indicate malicious telemetry tracking",
        "isCorrect": false
      },
      {
        "text": "Malicious (Quishing): Connecting through non-root domain endpoints indicates an unmanaged external proxy gateway",
        "isCorrect": false
      }
    ],
    "redFlags": [],
    "explanation": "Legitimate educational audio commentary on official museum infrastructure."
  },
  {
    "id": "qr-13",
    "category": "qr",
    "categoryTitle": "QR Phishing Simulation (Quishing)",
    "difficulty": "Easy",
    "type": "qr-scan",
    "scenarioTitle": "QR Threat Assessment #13",
    "context": "At a public bicycle rental dock, a paper sticker is glued over the bike unlocking code: \"UNLOCK BIKE: Scan QR to unlock for $1.00\"",
    "scannedUrl": "http://city-bikeshare-unlock.top/pay/start-ride",
    "physicalVisual": "qr-viewfinder",
    "options": [
      {
        "text": "Malicious (Quishing): Physical sticker overlay directs users to an unverified .top domain to harvest credentials or payments",
        "isCorrect": true
      },
      {
        "text": "Malicious (Quishing): Any decoded QR destination containing numerical parameters indicates an active memory payload",
        "isCorrect": false
      },
      {
        "text": "Legitimate (Safe): The physical placement on authorized public or commercial hardware indicates vendor endorsement",
        "isCorrect": false
      },
      {
        "text": "Legitimate (Safe): The presence of an active HTTPS connection verifies that the destination server is secure and authentic",
        "isCorrect": false
      }
    ],
    "redFlags": [
      "Paper sticker glued over lock",
      "Insecure .top payment site"
    ],
    "explanation": "Scammers paste QR codes on shared bikes and scooters to harvest rental payment details."
  },
  {
    "id": "qr-14",
    "category": "qr",
    "categoryTitle": "QR Phishing Simulation (Quishing)",
    "difficulty": "Medium",
    "type": "qr-scan",
    "scenarioTitle": "QR Threat Assessment #14",
    "context": "Official product packaging for a Wi-Fi router: \"Scan with your phone camera to download the setup app from Google Play.\"",
    "scannedUrl": "https://play.google.com/store/apps/details?id=com.tplink.tether",
    "physicalVisual": "qr-viewfinder",
    "options": [
      {
        "text": "Legitimate (Safe): Decoded URL routes directly to a verified first-party public application repository over HTTPS",
        "isCorrect": true
      },
      {
        "text": "Legitimate (Safe): Barcodes published in printed corporate literature have passed mandatory domain registry screening",
        "isCorrect": false
      },
      {
        "text": "Malicious (Quishing): Physical QR codes in public venues should never be scanned due to potential drive-by mobile exploits",
        "isCorrect": false
      },
      {
        "text": "Malicious (Quishing): Any QR code requesting network access outside internal enterprise firewalls represents an active threat",
        "isCorrect": false
      }
    ],
    "redFlags": [],
    "explanation": "Official hardware setup QR code linking to official Google Play Store application."
  },
  {
    "id": "qr-15",
    "category": "qr",
    "categoryTitle": "QR Phishing Simulation (Quishing)",
    "difficulty": "Hard",
    "type": "qr-scan",
    "scenarioTitle": "QR Threat Assessment #15",
    "context": "Email from Corporate HR: \"Employee Satisfaction Survey 2026: Scan QR on your personal smartphone to ensure 100% anonymous feedback.\"",
    "scannedUrl": "http://hr-anonymous-survey-review.com/survey/auth?emp_id=98210",
    "physicalVisual": "qr-viewfinder",
    "options": [
      {
        "text": "Malicious (Quishing): Embedded QR image in email bypasses security gateways to route victims onto unmonitored devices",
        "isCorrect": true
      },
      {
        "text": "Malicious (Quishing): High-density 2D barcode matrices indicate automated malicious data exfiltration routines",
        "isCorrect": false
      },
      {
        "text": "Legitimate (Safe): The physical placement on authorized public or commercial hardware indicates vendor endorsement",
        "isCorrect": false
      },
      {
        "text": "Legitimate (Safe): The presence of an active HTTPS connection verifies that the destination server is secure and authentic",
        "isCorrect": false
      }
    ],
    "redFlags": [
      "Embedded tracking ID in URL",
      "Insecure HTTP on unverified domain"
    ],
    "explanation": "Attackers use fake surveys with embedded QR codes to harvest corporate credentials or track employees."
  },
  {
    "id": "qr-16",
    "category": "qr",
    "categoryTitle": "QR Phishing Simulation (Quishing)",
    "difficulty": "Easy",
    "type": "qr-scan",
    "scenarioTitle": "QR Threat Assessment #16",
    "context": "University lecture hall entrance poster: \"Campus Tutoring Center: Scan for weekly drop-in schedule.\"",
    "scannedUrl": "https://tutoring.stanford.edu/schedule/autumn-2026",
    "physicalVisual": "qr-viewfinder",
    "options": [
      {
        "text": "Legitimate (Safe): Decoded URL points to the authentic corporate domain with valid TLS encryption and no suspicious prompts",
        "isCorrect": true
      },
      {
        "text": "Legitimate (Safe): Barcodes published in printed corporate literature have passed mandatory domain registry screening",
        "isCorrect": false
      },
      {
        "text": "Malicious (Quishing): Decoded web addresses containing deep app-linking query strings indicate malicious telemetry tracking",
        "isCorrect": false
      },
      {
        "text": "Malicious (Quishing): Connecting through non-root domain endpoints indicates an unmanaged external proxy gateway",
        "isCorrect": false
      }
    ],
    "redFlags": [],
    "explanation": "Authentic educational resource hosted on official accredited university domain (.edu)."
  },
  {
    "id": "qr-17",
    "category": "qr",
    "categoryTitle": "QR Phishing Simulation (Quishing)",
    "difficulty": "Medium",
    "type": "qr-scan",
    "scenarioTitle": "QR Threat Assessment #17",
    "context": "Gasoline fuel pump screen has a brightly colored peel-and-stick decal: \"FAST FUEL PAY: Tap or scan to save 20¢ per gallon!\"",
    "scannedUrl": "https://fuel-rewards-express-discount.biz/pump-pay?id=88",
    "physicalVisual": "qr-viewfinder",
    "options": [
      {
        "text": "Malicious (Quishing): Decoded URL telemetry routes to an untrusted secondary host on .biz for credential harvesting",
        "isCorrect": true
      },
      {
        "text": "Malicious (Quishing): High-density 2D barcode matrices indicate automated malicious data exfiltration routines",
        "isCorrect": false
      },
      {
        "text": "Legitimate (Safe): The physical placement on authorized public or commercial hardware indicates vendor endorsement",
        "isCorrect": false
      },
      {
        "text": "Legitimate (Safe): The presence of an active HTTPS connection verifies that the destination server is secure and authentic",
        "isCorrect": false
      }
    ],
    "redFlags": [
      "Peel-and-stick decal on pump",
      "Unvetted .biz payment terminal"
    ],
    "explanation": "Fuel pump Quishing skims drivers by promising fuel discounts through unofficial payment portals."
  },
  {
    "id": "qr-18",
    "category": "qr",
    "categoryTitle": "QR Phishing Simulation (Quishing)",
    "difficulty": "Hard",
    "type": "qr-scan",
    "scenarioTitle": "QR Threat Assessment #18",
    "context": "Medical clinic appointment reminder text message: \"View your lab test results on the Patient Portal.\"",
    "scannedUrl": "https://mychart.clevelandclinic.org/patient/login",
    "physicalVisual": "qr-viewfinder",
    "options": [
      {
        "text": "Legitimate (Safe): Decoded URL points to the authentic corporate domain with valid TLS encryption and no suspicious prompts",
        "isCorrect": true
      },
      {
        "text": "Legitimate (Safe): Mobile operating systems automatically verify the authenticity of all hostnames prior to rendering links",
        "isCorrect": false
      },
      {
        "text": "Malicious (Quishing): Physical QR codes in public venues should never be scanned due to potential drive-by mobile exploits",
        "isCorrect": false
      },
      {
        "text": "Malicious (Quishing): Any QR code requesting network access outside internal enterprise firewalls represents an active threat",
        "isCorrect": false
      }
    ],
    "redFlags": [],
    "explanation": "Authentic patient healthcare portal on verified hospital domain."
  },
  {
    "id": "qr-19",
    "category": "qr",
    "categoryTitle": "QR Phishing Simulation (Quishing)",
    "difficulty": "Easy",
    "type": "qr-scan",
    "scenarioTitle": "QR Threat Assessment #19",
    "context": "Subway transit platform bench flyer: \"METRO FARE DISCOUNT: Scan to purchase 10-ride pass for 50% off.\"",
    "scannedUrl": "http://metro-transit-discount-passes.cc/buy-pass",
    "physicalVisual": "qr-viewfinder",
    "options": [
      {
        "text": "Malicious (Quishing): Decoded URL telemetry routes to an untrusted secondary host on .cc for credential harvesting",
        "isCorrect": true
      },
      {
        "text": "Malicious (Quishing): Public payment kiosks and terminals are legally prohibited from utilizing QR code payment technology",
        "isCorrect": false
      },
      {
        "text": "Legitimate (Safe): The communication incorporates official institutional insignia and formal agency verification notices",
        "isCorrect": false
      },
      {
        "text": "Legitimate (Safe): Physical letters delivered through the postal service bearing agency seals cannot be weaponized by scammers",
        "isCorrect": false
      }
    ],
    "redFlags": [
      "Transit station paper flyer",
      "Fake 50% discount bait",
      "Insecure .cc site"
    ],
    "explanation": "Attackers paste discount fare flyers at transit stops to harvest commuter credit card details."
  },
  {
    "id": "qr-20",
    "category": "qr",
    "categoryTitle": "QR Phishing Simulation (Quishing)",
    "difficulty": "Medium",
    "type": "qr-scan",
    "scenarioTitle": "QR Threat Assessment #20",
    "context": "Bank checking account welcome kit booklet: \"Download the Mobile Banking App.\"",
    "scannedUrl": "https://www.chase.com/personal/mobile-banking",
    "physicalVisual": "qr-viewfinder",
    "options": [
      {
        "text": "Legitimate (Safe): Decoded URL points to the authentic corporate domain with valid TLS encryption and no suspicious prompts",
        "isCorrect": true
      },
      {
        "text": "Legitimate (Safe): Mobile operating systems automatically verify the authenticity of all hostnames prior to rendering links",
        "isCorrect": false
      },
      {
        "text": "Malicious (Quishing): Physical QR codes in public venues should never be scanned due to potential drive-by mobile exploits",
        "isCorrect": false
      },
      {
        "text": "Malicious (Quishing): Any QR code requesting network access outside internal enterprise firewalls represents an active threat",
        "isCorrect": false
      }
    ],
    "redFlags": [],
    "explanation": "Official printed marketing material directing customers to the primary verified domain."
  },
  {
    "id": "qr-21",
    "category": "qr",
    "categoryTitle": "QR Phishing Simulation (Quishing)",
    "difficulty": "Hard",
    "type": "qr-scan",
    "scenarioTitle": "QR Threat Assessment #21",
    "context": "Physical gift card packaging purchased at retail: Under the scratch-off label, an adhesive sticker with a QR code says \"ACTIVATE BALANCE HERE\"",
    "scannedUrl": "http://giftcard-activation-portal2026.net/activate?pin=8910",
    "physicalVisual": "qr-viewfinder",
    "options": [
      {
        "text": "Malicious (Quishing): Physical sticker overlay directs users to an unverified .net domain to harvest credentials or payments",
        "isCorrect": true
      },
      {
        "text": "Malicious (Quishing): High-density 2D barcode matrices indicate automated malicious data exfiltration routines",
        "isCorrect": false
      },
      {
        "text": "Legitimate (Safe): The decoded URL path contains recognized functional keywords matching the intended operational service",
        "isCorrect": false
      },
      {
        "text": "Legitimate (Safe): Modern mobile camera sensors automatically quarantine and block barcodes that resolve to malicious hosts",
        "isCorrect": false
      }
    ],
    "redFlags": [
      "Tampered gift card sticker",
      "Directs to balance draining site"
    ],
    "explanation": "Tampered gift card scams involve placing fake activation stickers over real cards so the buyer loads money directly into the thief's account."
  },
  {
    "id": "qr-22",
    "category": "qr",
    "categoryTitle": "QR Phishing Simulation (Quishing)",
    "difficulty": "Easy",
    "type": "qr-scan",
    "scenarioTitle": "QR Threat Assessment #22",
    "context": "Corporate memo email: \"Mandatory security policy update: Scan this QR code with your mobile authenticator app within 24 hours to preserve VPN access.\" [Station #121]",
    "scannedUrl": "https://company-authenticator-setup.com.token-verify.me/auth/qr",
    "physicalVisual": "qr-viewfinder",
    "options": [
      {
        "text": "Malicious (Quishing): Embedded QR image in email bypasses security gateways to route victims onto unmonitored devices",
        "isCorrect": true
      },
      {
        "text": "Malicious (Quishing): High-density 2D barcode matrices indicate automated malicious data exfiltration routines",
        "isCorrect": false
      },
      {
        "text": "Legitimate (Safe): The communication incorporates official institutional insignia and formal agency verification notices",
        "isCorrect": false
      },
      {
        "text": "Legitimate (Safe): Physical letters delivered through the postal service bearing agency seals cannot be weaponized by scammers",
        "isCorrect": false
      }
    ],
    "redFlags": [
      "Email gateway filter evasion",
      "Untrusted external domain (token-verify.me)"
    ],
    "explanation": "Attackers use QR codes in emails because spam filters cannot easily parse image pixels. Furthermore, it moves victims off monitored corporate PCs onto unmonitored personal smartphones."
  },
  {
    "id": "qr-23",
    "category": "qr",
    "categoryTitle": "QR Phishing Simulation (Quishing)",
    "difficulty": "Medium",
    "type": "qr-scan",
    "scenarioTitle": "QR Threat Assessment #23",
    "context": "At an established bistro, a laser-engraved wooden table placard displays: \"Scan to view our daily seasonal dinner menu & wine list.\" [Station #122]",
    "scannedUrl": "https://menu.toasttab.com/our-bistro/menu",
    "physicalVisual": "qr-viewfinder",
    "options": [
      {
        "text": "Legitimate (Safe): Permanently mounted fixture directing to an authenticated restaurant POS platform with no credential prompts",
        "isCorrect": true
      },
      {
        "text": "Legitimate (Safe): QR codes generated with dynamic SVG patterns are cryptographically immune to unauthorized redirection",
        "isCorrect": false
      },
      {
        "text": "Malicious (Quishing): Decoded web addresses containing deep app-linking query strings indicate malicious telemetry tracking",
        "isCorrect": false
      },
      {
        "text": "Malicious (Quishing): Connecting through non-root domain endpoints indicates an unmanaged external proxy gateway",
        "isCorrect": false
      }
    ],
    "redFlags": [],
    "explanation": "Permanent laser-engraved QR codes leading to reputable restaurant POS platforms without asking for credentials or downloads are safe."
  },
  {
    "id": "qr-24",
    "category": "qr",
    "categoryTitle": "QR Phishing Simulation (Quishing)",
    "difficulty": "Hard",
    "type": "qr-scan",
    "scenarioTitle": "QR Threat Assessment #24",
    "context": "At an airport departure gate, a paper flyer is taped to a charging pillar: \"FREE VIP 5G High-Speed Wi-Fi. Scan QR to connect instantly without passwords.\" [Station #123]",
    "scannedUrl": "http://airport-free-wifi-connect.net/download/portal-profile.mobileconfig",
    "physicalVisual": "qr-viewfinder",
    "options": [
      {
        "text": "Malicious (Quishing): QR code initiates an untrusted profile or APK download designed to compromise mobile device security",
        "isCorrect": true
      },
      {
        "text": "Malicious (Quishing): Enterprise mobile compliance mandates that all QR scanning take place within an isolated sandbox",
        "isCorrect": false
      },
      {
        "text": "Legitimate (Safe): The decoded URL path contains recognized functional keywords matching the intended operational service",
        "isCorrect": false
      },
      {
        "text": "Legitimate (Safe): Modern mobile camera sensors automatically quarantine and block barcodes that resolve to malicious hosts",
        "isCorrect": false
      }
    ],
    "redFlags": [
      "Taped paper flyer",
      "Malicious .mobileconfig profile download"
    ],
    "explanation": "Downloading `.mobileconfig` profiles installs configuration profiles that allow attackers to intercept all device traffic and spy on credentials."
  },
  {
    "id": "qr-25",
    "category": "qr",
    "categoryTitle": "QR Phishing Simulation (Quishing)",
    "difficulty": "Easy",
    "type": "qr-scan",
    "scenarioTitle": "QR Threat Assessment #25",
    "context": "A paper slip attached to your apartment door reads: \"Delivery Attempt Failed! Scan this QR code within 4 hours to reschedule your delivery before package is returned to sender.\" [Station #124]",
    "scannedUrl": "https://usps.tracking-reschedule-fee.top/pay-1dollar",
    "physicalVisual": "qr-viewfinder",
    "options": [
      {
        "text": "Malicious (Quishing): Physical sticker overlay directs users to an unverified .top domain to harvest credentials or payments",
        "isCorrect": true
      },
      {
        "text": "Malicious (Quishing): Enterprise mobile compliance mandates that all QR scanning take place within an isolated sandbox",
        "isCorrect": false
      },
      {
        "text": "Legitimate (Safe): The decoded URL path contains recognized functional keywords matching the intended operational service",
        "isCorrect": false
      },
      {
        "text": "Legitimate (Safe): Modern mobile camera sensors automatically quarantine and block barcodes that resolve to malicious hosts",
        "isCorrect": false
      }
    ],
    "redFlags": [
      "Door slip sticker scam",
      "Urgent 4-hour return threat",
      "Lookalike .top domain harvesting credit cards"
    ],
    "explanation": "A notorious Quishing scam where stickers or door slips prompt a \"$1 fee\" to harvest full credit card and identity data."
  },
  {
    "id": "qr-26",
    "category": "qr",
    "categoryTitle": "QR Phishing Simulation (Quishing)",
    "difficulty": "Medium",
    "type": "qr-scan",
    "scenarioTitle": "QR Threat Assessment #26",
    "context": "Hotel room desk placard permanently printed on acrylic: \"Scan to connect to Guest High-Speed Wi-Fi.\" [Station #125]",
    "scannedUrl": "https://guest-wifi.marriott.com/portal/login",
    "physicalVisual": "qr-viewfinder",
    "options": [
      {
        "text": "Legitimate (Safe): Permanent institutional installation resolving to the verified primary organizational domain over TLS",
        "isCorrect": true
      },
      {
        "text": "Legitimate (Safe): Barcodes published in printed corporate literature have passed mandatory domain registry screening",
        "isCorrect": false
      },
      {
        "text": "Malicious (Quishing): Decoded web addresses containing deep app-linking query strings indicate malicious telemetry tracking",
        "isCorrect": false
      },
      {
        "text": "Malicious (Quishing): Connecting through non-root domain endpoints indicates an unmanaged external proxy gateway",
        "isCorrect": false
      }
    ],
    "redFlags": [],
    "explanation": "Permanent hotel fixture directing to the chain's authenticated corporate guest portal."
  },
  {
    "id": "qr-27",
    "category": "qr",
    "categoryTitle": "QR Phishing Simulation (Quishing)",
    "difficulty": "Hard",
    "type": "qr-scan",
    "scenarioTitle": "QR Threat Assessment #27",
    "context": "At an electric vehicle (EV) charging stall, a cheap vinyl sticker is pasted over the digital touchscreen: \"PAY HERE: Scan QR to start fast charging ($0.35/kWh)\" [Station #126]",
    "scannedUrl": "http://ev-quickcharge-station.xyz/pay/charge-now",
    "physicalVisual": "qr-viewfinder",
    "options": [
      {
        "text": "Malicious (Quishing): Physical sticker overlay directs users to an unverified .xyz domain to harvest credentials or payments",
        "isCorrect": true
      },
      {
        "text": "Malicious (Quishing): High-density 2D barcode matrices indicate automated malicious data exfiltration routines",
        "isCorrect": false
      },
      {
        "text": "Legitimate (Safe): The physical placement on authorized public or commercial hardware indicates vendor endorsement",
        "isCorrect": false
      },
      {
        "text": "Legitimate (Safe): The presence of an active HTTPS connection verifies that the destination server is secure and authentic",
        "isCorrect": false
      }
    ],
    "redFlags": [
      "Physical sticker pasted over screen",
      "Insecure HTTP on .xyz domain"
    ],
    "explanation": "Scammers paste fraudulent QR stickers on EV chargers and gas pumps to skim driver credit cards."
  },
  {
    "id": "qr-28",
    "category": "qr",
    "categoryTitle": "QR Phishing Simulation (Quishing)",
    "difficulty": "Easy",
    "type": "qr-scan",
    "scenarioTitle": "QR Threat Assessment #28",
    "context": "Inside an official airline in-flight magazine: \"Download the Airline Entertainment App for free movies on your flight.\" [Station #127]",
    "scannedUrl": "https://apps.apple.com/us/app/delta-air-lines/id388491989",
    "physicalVisual": "qr-viewfinder",
    "options": [
      {
        "text": "Legitimate (Safe): Decoded URL routes directly to a verified first-party public application repository over HTTPS",
        "isCorrect": true
      },
      {
        "text": "Legitimate (Safe): Mobile operating systems automatically verify the authenticity of all hostnames prior to rendering links",
        "isCorrect": false
      },
      {
        "text": "Malicious (Quishing): Physical QR codes in public venues should never be scanned due to potential drive-by mobile exploits",
        "isCorrect": false
      },
      {
        "text": "Malicious (Quishing): Any QR code requesting network access outside internal enterprise firewalls represents an active threat",
        "isCorrect": false
      }
    ],
    "redFlags": [],
    "explanation": "The decoded URL leads directly to Apple's verified App Store repository."
  },
  {
    "id": "qr-29",
    "category": "qr",
    "categoryTitle": "QR Phishing Simulation (Quishing)",
    "difficulty": "Medium",
    "type": "qr-scan",
    "scenarioTitle": "QR Threat Assessment #29",
    "context": "Received in an unexpected postal letter with an IRS logo: \"URGENT: Economic tax credit verification required. Scan QR code to authenticate identity.\" [Station #128]",
    "scannedUrl": "https://irs.gov.tax-identity-portal.biz/verify",
    "physicalVisual": "qr-viewfinder",
    "options": [
      {
        "text": "Malicious (Quishing): Postal letter quishing scam using official logos to route recipients to a fraudulent .biz portal",
        "isCorrect": true
      },
      {
        "text": "Malicious (Quishing): Public payment kiosks and terminals are legally prohibited from utilizing QR code payment technology",
        "isCorrect": false
      },
      {
        "text": "Legitimate (Safe): The communication incorporates official institutional insignia and formal agency verification notices",
        "isCorrect": false
      },
      {
        "text": "Legitimate (Safe): Physical letters delivered through the postal service bearing agency seals cannot be weaponized by scammers",
        "isCorrect": false
      }
    ],
    "redFlags": [
      "Mail-quishing paper scam",
      "Subdomain spoofing on .biz"
    ],
    "explanation": "Mail-quishing sends physical letters with official seals to bypass digital filters and trick recipients into scanning scam QR codes."
  },
  {
    "id": "qr-30",
    "category": "qr",
    "categoryTitle": "QR Phishing Simulation (Quishing)",
    "difficulty": "Hard",
    "type": "qr-scan",
    "scenarioTitle": "QR Threat Assessment #30",
    "context": "Coffee shop loyalty card sticker: \"Join our Rewards Club & get a free iced latte on your next visit.\" [Station #129]",
    "scannedUrl": "https://www.starbucks.com/rewards",
    "physicalVisual": "qr-viewfinder",
    "options": [
      {
        "text": "Legitimate (Safe): Decoded URL points to the authentic corporate domain with valid TLS encryption and no suspicious prompts",
        "isCorrect": true
      },
      {
        "text": "Legitimate (Safe): Barcodes published in printed corporate literature have passed mandatory domain registry screening",
        "isCorrect": false
      },
      {
        "text": "Malicious (Quishing): Decoded web addresses containing deep app-linking query strings indicate malicious telemetry tracking",
        "isCorrect": false
      },
      {
        "text": "Malicious (Quishing): Connecting through non-root domain endpoints indicates an unmanaged external proxy gateway",
        "isCorrect": false
      }
    ],
    "redFlags": [],
    "explanation": "Authentic loyalty promotion leading to the company's verified primary website."
  },
  {
    "id": "qr-31",
    "category": "qr",
    "categoryTitle": "QR Phishing Simulation (Quishing)",
    "difficulty": "Easy",
    "type": "qr-scan",
    "scenarioTitle": "QR Threat Assessment #31",
    "context": "Conference attendee badge has a printed QR code on the back: \"Scan to download the Conference Agenda & Networking APK.\" [Station #130]",
    "scannedUrl": "http://tech-summit-networking.net/app-download/conference.apk",
    "physicalVisual": "qr-viewfinder",
    "options": [
      {
        "text": "Malicious (Quishing): QR code initiates an untrusted profile or APK download designed to compromise mobile device security",
        "isCorrect": true
      },
      {
        "text": "Malicious (Quishing): Enterprise mobile compliance mandates that all QR scanning take place within an isolated sandbox",
        "isCorrect": false
      },
      {
        "text": "Legitimate (Safe): The physical placement on authorized public or commercial hardware indicates vendor endorsement",
        "isCorrect": false
      },
      {
        "text": "Legitimate (Safe): The presence of an active HTTPS connection verifies that the destination server is secure and authentic",
        "isCorrect": false
      }
    ],
    "redFlags": [
      "Direct .apk download",
      "Bypasses Google Play Store security"
    ],
    "explanation": "Prompting users to sideload unvetted .apk files from QR codes installs spyware or malware."
  },
  {
    "id": "qr-32",
    "category": "qr",
    "categoryTitle": "QR Phishing Simulation (Quishing)",
    "difficulty": "Medium",
    "type": "qr-scan",
    "scenarioTitle": "QR Threat Assessment #32",
    "context": "Museum exhibit plaque permanently mounted beside a sculpture: \"Scan for audio guide and artist commentary.\" [Station #131]",
    "scannedUrl": "https://audio.louvre.fr/exhibits/mona-lisa-history",
    "physicalVisual": "qr-viewfinder",
    "options": [
      {
        "text": "Legitimate (Safe): Decoded URL points to the authentic corporate domain with valid TLS encryption and no suspicious prompts",
        "isCorrect": true
      },
      {
        "text": "Legitimate (Safe): QR codes generated with dynamic SVG patterns are cryptographically immune to unauthorized redirection",
        "isCorrect": false
      },
      {
        "text": "Malicious (Quishing): Decoded web addresses containing deep app-linking query strings indicate malicious telemetry tracking",
        "isCorrect": false
      },
      {
        "text": "Malicious (Quishing): Connecting through non-root domain endpoints indicates an unmanaged external proxy gateway",
        "isCorrect": false
      }
    ],
    "redFlags": [],
    "explanation": "Legitimate educational audio commentary on official museum infrastructure."
  },
  {
    "id": "qr-33",
    "category": "qr",
    "categoryTitle": "QR Phishing Simulation (Quishing)",
    "difficulty": "Hard",
    "type": "qr-scan",
    "scenarioTitle": "QR Threat Assessment #33",
    "context": "At a public bicycle rental dock, a paper sticker is glued over the bike unlocking code: \"UNLOCK BIKE: Scan QR to unlock for $1.00\" [Station #132]",
    "scannedUrl": "http://city-bikeshare-unlock.top/pay/start-ride",
    "physicalVisual": "qr-viewfinder",
    "options": [
      {
        "text": "Malicious (Quishing): Physical sticker overlay directs users to an unverified .top domain to harvest credentials or payments",
        "isCorrect": true
      },
      {
        "text": "Malicious (Quishing): High-density 2D barcode matrices indicate automated malicious data exfiltration routines",
        "isCorrect": false
      },
      {
        "text": "Legitimate (Safe): The communication incorporates official institutional insignia and formal agency verification notices",
        "isCorrect": false
      },
      {
        "text": "Legitimate (Safe): Physical letters delivered through the postal service bearing agency seals cannot be weaponized by scammers",
        "isCorrect": false
      }
    ],
    "redFlags": [
      "Paper sticker glued over lock",
      "Insecure .top payment site"
    ],
    "explanation": "Scammers paste QR codes on shared bikes and scooters to harvest rental payment details."
  },
  {
    "id": "qr-34",
    "category": "qr",
    "categoryTitle": "QR Phishing Simulation (Quishing)",
    "difficulty": "Easy",
    "type": "qr-scan",
    "scenarioTitle": "QR Threat Assessment #34",
    "context": "Official product packaging for a Wi-Fi router: \"Scan with your phone camera to download the setup app from Google Play.\" [Station #133]",
    "scannedUrl": "https://play.google.com/store/apps/details?id=com.tplink.tether",
    "physicalVisual": "qr-viewfinder",
    "options": [
      {
        "text": "Legitimate (Safe): Decoded URL routes directly to a verified first-party public application repository over HTTPS",
        "isCorrect": true
      },
      {
        "text": "Legitimate (Safe): QR codes generated with dynamic SVG patterns are cryptographically immune to unauthorized redirection",
        "isCorrect": false
      },
      {
        "text": "Malicious (Quishing): Physical QR codes in public venues should never be scanned due to potential drive-by mobile exploits",
        "isCorrect": false
      },
      {
        "text": "Malicious (Quishing): Any QR code requesting network access outside internal enterprise firewalls represents an active threat",
        "isCorrect": false
      }
    ],
    "redFlags": [],
    "explanation": "Official hardware setup QR code linking to official Google Play Store application."
  },
  {
    "id": "qr-35",
    "category": "qr",
    "categoryTitle": "QR Phishing Simulation (Quishing)",
    "difficulty": "Medium",
    "type": "qr-scan",
    "scenarioTitle": "QR Threat Assessment #35",
    "context": "Email from Corporate HR: \"Employee Satisfaction Survey 2026: Scan QR on your personal smartphone to ensure 100% anonymous feedback.\" [Station #134]",
    "scannedUrl": "http://hr-anonymous-survey-review.com/survey/auth?emp_id=98210",
    "physicalVisual": "qr-viewfinder",
    "options": [
      {
        "text": "Malicious (Quishing): Embedded QR image in email bypasses security gateways to route victims onto unmonitored devices",
        "isCorrect": true
      },
      {
        "text": "Malicious (Quishing): Any decoded QR destination containing numerical parameters indicates an active memory payload",
        "isCorrect": false
      },
      {
        "text": "Legitimate (Safe): The decoded URL path contains recognized functional keywords matching the intended operational service",
        "isCorrect": false
      },
      {
        "text": "Legitimate (Safe): Modern mobile camera sensors automatically quarantine and block barcodes that resolve to malicious hosts",
        "isCorrect": false
      }
    ],
    "redFlags": [
      "Embedded tracking ID in URL",
      "Insecure HTTP on unverified domain"
    ],
    "explanation": "Attackers use fake surveys with embedded QR codes to harvest corporate credentials or track employees."
  },
  {
    "id": "qr-36",
    "category": "qr",
    "categoryTitle": "QR Phishing Simulation (Quishing)",
    "difficulty": "Hard",
    "type": "qr-scan",
    "scenarioTitle": "QR Threat Assessment #36",
    "context": "University lecture hall entrance poster: \"Campus Tutoring Center: Scan for weekly drop-in schedule.\" [Station #135]",
    "scannedUrl": "https://tutoring.stanford.edu/schedule/autumn-2026",
    "physicalVisual": "qr-viewfinder",
    "options": [
      {
        "text": "Legitimate (Safe): Decoded URL points to the authentic corporate domain with valid TLS encryption and no suspicious prompts",
        "isCorrect": true
      },
      {
        "text": "Legitimate (Safe): QR codes generated with dynamic SVG patterns are cryptographically immune to unauthorized redirection",
        "isCorrect": false
      },
      {
        "text": "Malicious (Quishing): Decoded web addresses containing deep app-linking query strings indicate malicious telemetry tracking",
        "isCorrect": false
      },
      {
        "text": "Malicious (Quishing): Connecting through non-root domain endpoints indicates an unmanaged external proxy gateway",
        "isCorrect": false
      }
    ],
    "redFlags": [],
    "explanation": "Authentic educational resource hosted on official accredited university domain (.edu)."
  },
  {
    "id": "qr-37",
    "category": "qr",
    "categoryTitle": "QR Phishing Simulation (Quishing)",
    "difficulty": "Easy",
    "type": "qr-scan",
    "scenarioTitle": "QR Threat Assessment #37",
    "context": "Gasoline fuel pump screen has a brightly colored peel-and-stick decal: \"FAST FUEL PAY: Tap or scan to save 20¢ per gallon!\" [Station #136]",
    "scannedUrl": "https://fuel-rewards-express-discount.biz/pump-pay?id=88",
    "physicalVisual": "qr-viewfinder",
    "options": [
      {
        "text": "Malicious (Quishing): Decoded URL telemetry routes to an untrusted secondary host on .biz for credential harvesting",
        "isCorrect": true
      },
      {
        "text": "Malicious (Quishing): Any decoded QR destination containing numerical parameters indicates an active memory payload",
        "isCorrect": false
      },
      {
        "text": "Legitimate (Safe): The communication incorporates official institutional insignia and formal agency verification notices",
        "isCorrect": false
      },
      {
        "text": "Legitimate (Safe): Physical letters delivered through the postal service bearing agency seals cannot be weaponized by scammers",
        "isCorrect": false
      }
    ],
    "redFlags": [
      "Peel-and-stick decal on pump",
      "Unvetted .biz payment terminal"
    ],
    "explanation": "Fuel pump Quishing skims drivers by promising fuel discounts through unofficial payment portals."
  },
  {
    "id": "qr-38",
    "category": "qr",
    "categoryTitle": "QR Phishing Simulation (Quishing)",
    "difficulty": "Medium",
    "type": "qr-scan",
    "scenarioTitle": "QR Threat Assessment #38",
    "context": "Medical clinic appointment reminder text message: \"View your lab test results on the Patient Portal.\" [Station #137]",
    "scannedUrl": "https://mychart.clevelandclinic.org/patient/login",
    "physicalVisual": "qr-viewfinder",
    "options": [
      {
        "text": "Legitimate (Safe): Decoded URL points to the authentic corporate domain with valid TLS encryption and no suspicious prompts",
        "isCorrect": true
      },
      {
        "text": "Legitimate (Safe): QR codes generated with dynamic SVG patterns are cryptographically immune to unauthorized redirection",
        "isCorrect": false
      },
      {
        "text": "Malicious (Quishing): Physical QR codes in public venues should never be scanned due to potential drive-by mobile exploits",
        "isCorrect": false
      },
      {
        "text": "Malicious (Quishing): Any QR code requesting network access outside internal enterprise firewalls represents an active threat",
        "isCorrect": false
      }
    ],
    "redFlags": [],
    "explanation": "Authentic patient healthcare portal on verified hospital domain."
  },
  {
    "id": "qr-39",
    "category": "qr",
    "categoryTitle": "QR Phishing Simulation (Quishing)",
    "difficulty": "Hard",
    "type": "qr-scan",
    "scenarioTitle": "QR Threat Assessment #39",
    "context": "Subway transit platform bench flyer: \"METRO FARE DISCOUNT: Scan to purchase 10-ride pass for 50% off.\" [Station #138]",
    "scannedUrl": "http://metro-transit-discount-passes.cc/buy-pass",
    "physicalVisual": "qr-viewfinder",
    "options": [
      {
        "text": "Malicious (Quishing): Decoded URL telemetry routes to an untrusted secondary host on .cc for credential harvesting",
        "isCorrect": true
      },
      {
        "text": "Malicious (Quishing): Enterprise mobile compliance mandates that all QR scanning take place within an isolated sandbox",
        "isCorrect": false
      },
      {
        "text": "Legitimate (Safe): The communication incorporates official institutional insignia and formal agency verification notices",
        "isCorrect": false
      },
      {
        "text": "Legitimate (Safe): Physical letters delivered through the postal service bearing agency seals cannot be weaponized by scammers",
        "isCorrect": false
      }
    ],
    "redFlags": [
      "Transit station paper flyer",
      "Fake 50% discount bait",
      "Insecure .cc site"
    ],
    "explanation": "Attackers paste discount fare flyers at transit stops to harvest commuter credit card details."
  },
  {
    "id": "qr-40",
    "category": "qr",
    "categoryTitle": "QR Phishing Simulation (Quishing)",
    "difficulty": "Easy",
    "type": "qr-scan",
    "scenarioTitle": "QR Threat Assessment #40",
    "context": "Bank checking account welcome kit booklet: \"Download the Mobile Banking App.\" [Station #139]",
    "scannedUrl": "https://www.chase.com/personal/mobile-banking",
    "physicalVisual": "qr-viewfinder",
    "options": [
      {
        "text": "Legitimate (Safe): Decoded URL points to the authentic corporate domain with valid TLS encryption and no suspicious prompts",
        "isCorrect": true
      },
      {
        "text": "Legitimate (Safe): Mobile operating systems automatically verify the authenticity of all hostnames prior to rendering links",
        "isCorrect": false
      },
      {
        "text": "Malicious (Quishing): Physical QR codes in public venues should never be scanned due to potential drive-by mobile exploits",
        "isCorrect": false
      },
      {
        "text": "Malicious (Quishing): Any QR code requesting network access outside internal enterprise firewalls represents an active threat",
        "isCorrect": false
      }
    ],
    "redFlags": [],
    "explanation": "Official printed marketing material directing customers to the primary verified domain."
  },
  {
    "id": "qr-41",
    "category": "qr",
    "categoryTitle": "QR Phishing Simulation (Quishing)",
    "difficulty": "Medium",
    "type": "qr-scan",
    "scenarioTitle": "QR Threat Assessment #41",
    "context": "You park downtown. An adhesive sticker with a QR code is pasted directly over the official credit card slot: \"QUICK PAY BY PHONE: Scan to avoid $75 ticket!\" [Station #140]",
    "scannedUrl": "http://cityparking-pay-ticket-now.cc/express-meter?spot=402",
    "physicalVisual": "qr-viewfinder",
    "options": [
      {
        "text": "Malicious (Quishing): Physical sticker overlay directs users to an unverified .cc domain to harvest credentials or payments",
        "isCorrect": true
      },
      {
        "text": "Malicious (Quishing): Enterprise mobile compliance mandates that all QR scanning take place within an isolated sandbox",
        "isCorrect": false
      },
      {
        "text": "Legitimate (Safe): The decoded URL path contains recognized functional keywords matching the intended operational service",
        "isCorrect": false
      },
      {
        "text": "Legitimate (Safe): Modern mobile camera sensors automatically quarantine and block barcodes that resolve to malicious hosts",
        "isCorrect": false
      }
    ],
    "redFlags": [
      "Physical sticker overlay",
      "Urgent fine scare tactic",
      "Insecure HTTP on .cc domain"
    ],
    "explanation": "Physical QR tampering (Quishing) is common on parking meters. Attackers stick vinyl scam QR codes over real meters to steal card payments."
  },
  {
    "id": "qr-42",
    "category": "qr",
    "categoryTitle": "QR Phishing Simulation (Quishing)",
    "difficulty": "Hard",
    "type": "qr-scan",
    "scenarioTitle": "QR Threat Assessment #42",
    "context": "Corporate memo email: \"Mandatory security policy update: Scan this QR code with your mobile authenticator app within 24 hours to preserve VPN access.\" [Station #141]",
    "scannedUrl": "https://company-authenticator-setup.com.token-verify.me/auth/qr",
    "physicalVisual": "qr-viewfinder",
    "options": [
      {
        "text": "Malicious (Quishing): Embedded QR image in email bypasses security gateways to route victims onto unmonitored devices",
        "isCorrect": true
      },
      {
        "text": "Malicious (Quishing): Any decoded QR destination containing numerical parameters indicates an active memory payload",
        "isCorrect": false
      },
      {
        "text": "Legitimate (Safe): The physical placement on authorized public or commercial hardware indicates vendor endorsement",
        "isCorrect": false
      },
      {
        "text": "Legitimate (Safe): The presence of an active HTTPS connection verifies that the destination server is secure and authentic",
        "isCorrect": false
      }
    ],
    "redFlags": [
      "Email gateway filter evasion",
      "Untrusted external domain (token-verify.me)"
    ],
    "explanation": "Attackers use QR codes in emails because spam filters cannot easily parse image pixels. Furthermore, it moves victims off monitored corporate PCs onto unmonitored personal smartphones."
  }
];

// Helper to get questions for a specific lab
function getQuestionsForCategory(cat) {
  if (!cat) return [...QUESTION_BANK];
  return QUESTION_BANK.filter(q => q.category === cat);
}

// Lab metadata for the 6 core hands-on labs
const LAB_METADATA = {
  email: {
    title: 'Phishing vs Legitimate Email',
    desc: 'Inspect headers, urgency cues, and message structure.',
    icon: 'fa-envelope-open-text',
    gradient: 'from-indigo to-blue'
  },
  sender: {
    title: 'Identify Suspicious Sender',
    desc: 'Unmask display name spoofing and typosquatted domains.',
    icon: 'fa-user-secret',
    gradient: 'from-purple to-pink'
  },
  url: {
    title: 'Identify Suspicious URL',
    desc: 'Deconstruct subdomains, rogue TLDs, and path tricks.',
    icon: 'fa-link',
    gradient: 'from-pink to-rose'
  },
  hover: {
    title: 'Hover Over Links Inspector',
    desc: 'Test hidden link destinations using the browser status preview.',
    icon: 'fa-arrow-pointer',
    gradient: 'from-cyan to-teal'
  },
  login: {
    title: 'Fake Login-Page Recognition',
    desc: 'Detect cloned portal designs, missing SSL, and credential traps.',
    icon: 'fa-lock',
    gradient: 'from-emerald to-teal'
  },
  qr: {
    title: 'QR Phishing Simulation (Quishing)',
    desc: 'Scan physical & digital QR codes and inspect destination telemetry.',
    icon: 'fa-qrcode',
    gradient: 'from-amber to-orange'
  }
};
