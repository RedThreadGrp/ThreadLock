import { ResourcePage } from "@/types/content";

export const authentication: ResourcePage = {
  contentVersion: 2,
  blocks: {
    shortAnswer: "To authenticate digital evidence, testify under oath: (1) This is a screenshot of a text/email I received, (2) from [phone number/email] which belongs to [opposing party], (3) on [date], (4) and this is an accurate, unaltered representation. Include metadata (timestamps, phone numbers, email headers). Don't crop, edit, or alter images.",
    sections: [
      {
        id: "what-authentication-means",
        heading: "What Authentication Means Legally",
        body: [
          {
            type: "p",
            text: "Authentication means proving that evidence is what you claim it is. Without authentication, the judge won't admit your text messages, emails, or photos—no matter how important they are."
          },
          {
            type: "p",
            text: "The Foundation Requirement: Under most states' Rules of Evidence (similar to Federal Rule of Evidence 901), you must provide sufficient evidence to support a finding that the item is what you claim it is."
          },
          {
            type: "p",
            text: "For digital evidence, this means:"
          },
          {
            type: "ul",
            items: [
              "Proving the source: Who sent or created it?",
              "Proving the date: When was it created or sent?",
              "Proving accuracy: Is this an accurate representation of the original?",
              "Proving authenticity: Has it been altered or tampered with?"
            ]
          },
          {
            type: "p",
            text: "Authentication doesn't prove the content is true—just that the evidence is genuine. The judge still evaluates whether to believe it."
          },
          {
            type: "p",
            text: "What Happens If You Don't Authenticate: If you fail to authenticate evidence, the judge will sustain an objection and exclude the evidence. You lose the opportunity to present that piece of evidence. Your case may fail if that evidence was critical."
          }
        ]
      },
      {
        id: "authenticate-text-messages",
        heading: "How to Authenticate Text Messages",
        body: [
          {
            type: "p",
            text: "Step 1: Take a Proper Screenshot"
          },
          {
            type: "p",
            text: "Include in the screenshot:"
          },
          {
            type: "ul",
            items: [
              "Phone number or contact name of the sender/recipient",
              "Date and time of each message",
              "Full message thread showing context (not just one message)",
              "Any relevant emoji, images, or attachments"
            ]
          },
          {
            type: "p",
            text: "Don't:"
          },
          {
            type: "ul",
            items: [
              "Crop out the sender's phone number",
              "Edit or delete messages from the thread",
              "Take a photo of your phone screen (use the screenshot function)",
              "Combine messages from different dates without showing breaks"
            ]
          },
          {
            type: "p",
            text: "Step 2: Prepare Your Testimony"
          },
          {
            type: "p",
            text: "You must testify:"
          },
          {
            type: "ol",
            items: [
              "This is a screenshot of a text message conversation between me and [opposing party].",
              "The phone number shown, [XXX-XXX-XXXX], belongs to [opposing party].",
              "I know this because [I've been texting this number for years / this is the number they gave me].",
              "These messages were exchanged on [dates shown in the screenshot].",
              "This screenshot is an accurate and unaltered representation of the messages."
            ]
          },
          {
            type: "p",
            text: "Step 3: Address Common Objections - If opposing party claims they didn't send the messages, you can: (1) Provide phone records from carrier showing texts were sent/received, (2) Have opposing party admit messages are genuine, (3) Call a witness who saw the messages, (4) Provide additional communications from same number for comparison."
          }
        ]
      },
      {
        id: "authenticate-emails",
        heading: "How to Authenticate Emails",
        body: [
          {
            type: "p",
            text: "Step 1: Include Email Headers"
          },
          {
            type: "p",
            text: "Email headers show:"
          },
          {
            type: "ul",
            items: [
              "Sender's email address",
              "Recipient's email address",
              "Date and time sent",
              "Subject line",
              "Routing information (for detailed authentication)"
            ]
          },
          {
            type: "p",
            text: "Always include the full email header in your exhibit. In most email clients, select \"View Full Headers\" or \"Show Original\" to access this information."
          },
          {
            type: "p",
            text: "Step 2: Prepare Your Testimony"
          },
          {
            type: "p",
            text: "You must testify:"
          },
          {
            type: "ol",
            items: [
              "This is a printout/screenshot of an email I received from [opposing party].",
              "The email address shown, [email@domain.com], belongs to [opposing party].",
              "I know this because [we've corresponded at this address for years / this is the address they provided].",
              "This email was sent on [date shown in header].",
              "This is an accurate and complete representation of the email as I received it."
            ]
          },
          {
            type: "p",
            text: "Step 3: Address Common Objections - If authenticity is challenged, you can: (1) Request opposing party admit email is genuine during discovery, (2) Forward the original email to your attorney or another witness who can testify they received it, (3) Provide additional emails from same address showing pattern of communication, (4) Subpoena email provider records (rare, usually unnecessary)."
          }
        ]
      },
      {
        id: "authenticate-photos-videos",
        heading: "How to Authenticate Photos and Videos",
        body: [
          {
            type: "p",
            text: "Step 1: Preserve Metadata"
          },
          {
            type: "p",
            text: "Digital photos contain metadata (EXIF data) showing:"
          },
          {
            type: "ul",
            items: [
              "Date and time the photo was taken",
              "Device used (phone model, camera)",
              "GPS location (if enabled)",
              "File size and format"
            ]
          },
          {
            type: "p",
            text: "Don't edit, crop, or use filters on original photos intended for evidence. Save a separate copy if you need to annotate or enhance for presentation."
          },
          {
            type: "p",
            text: "Step 2: Prepare Your Testimony"
          },
          {
            type: "p",
            text: "You must testify:"
          },
          {
            type: "ol",
            items: [
              "I took this photo on [date] at [location].",
              "This photo accurately depicts [what/who is shown] as it appeared on that date.",
              "I have not altered, edited, or manipulated this photo in any way.",
              "This is the original file from my [phone/camera/device]."
            ]
          },
          {
            type: "p",
            text: "If you didn't take the photo personally, you must explain how you obtained it and testify to your knowledge of its accuracy."
          },
          {
            type: "p",
            text: "Step 3: Address Concerns About Editing - Modern judges understand that photos can be edited. Be prepared to: (1) Provide the original file with metadata intact for inspection, (2) Testify you did not alter the photo, (3) Show the photo on your original device if requested, (4) Explain any legitimate edits (e.g., \"I blurred my child's face for privacy but made no other changes\")."
          },
          {
            type: "p",
            text: "Videos and Audio Recordings: Video and audio require similar authentication. Testify to: (1) Who recorded it, (2) When and where it was recorded, (3) The accuracy of what's shown/heard, (4) No editing or manipulation, (5) Consent to record (check your state's recording laws—some require all-party consent)."
          }
        ]
      },
      {
        id: "foundation-testimony",
        heading: "Foundation Testimony Requirements",
        body: [
          {
            type: "p",
            text: "The foundation is your testimony establishing the evidence is authentic. Without proper foundation, the judge will exclude the evidence even if it's crucial to your case."
          },
          {
            type: "p",
            text: "Basic Foundation Elements:"
          },
          {
            type: "ol",
            items: [
              "Identify the exhibit: \"Your Honor, I'm presenting Exhibit A, which is a screenshot of text messages.\"",
              "Authenticate the source: \"These messages are from [opposing party]'s phone number, XXX-XXX-XXXX.\"",
              "Establish your knowledge: \"I know this is their number because we've communicated at this number for [time period].\"",
              "Confirm accuracy: \"This screenshot accurately represents the messages as they appeared on my phone.\"",
              "State no alterations: \"I have not edited, altered, or manipulated these messages in any way.\""
            ]
          },
          {
            type: "p",
            text: "If opposing counsel objects, the judge may ask follow-up questions. Be prepared to provide additional detail about how you know the evidence is authentic."
          }
        ]
      },
      {
        id: "common-mistakes",
        heading: "Common Authentication Mistakes",
        body: [
          {
            type: "p",
            text: "Mistakes to avoid:"
          },
          {
            type: "ul",
            items: [
              "Cropping out identifying information: Always include phone numbers, email addresses, timestamps, and other metadata visible in screenshots.",
              "Editing messages: Don't delete messages from a thread, even if they seem irrelevant. Show the full context. If a thread is very long, indicate you're showing excerpts.",
              "Taking photos of screens: Use the device's screenshot function, not a camera photo of the screen. Photos of screens look unprofessional and raise authenticity concerns.",
              "Failing to preserve originals: Keep the original files on your device or backed up securely. You may need to show them to the judge.",
              "Ignoring hearsay objections: Authentication is separate from hearsay. Even authenticated evidence may be excluded if it's hearsay and no exception applies.",
              "Combining evidence from multiple dates: If presenting a series of messages or emails, clearly separate them by date or indicate time gaps.",
              "Forgetting to authenticate exhibits: Every piece of evidence needs authentication. Don't assume the judge will accept it without foundation."
            ]
          }
        ]
      },
      {
        id: "best-practices",
        heading: "Best Practices for Digital Evidence",
        body: [
          {
            type: "p",
            text: "To maximize the chances your evidence is admitted:"
          },
          {
            type: "ul",
            items: [
              "Create exhibits early: Don't wait until the day before the hearing to take screenshots and organize evidence.",
              "Use high-quality images: Ensure screenshots are clear and readable. Zoom out enough to show context.",
              "Organize chronologically: Present evidence in date order with clear labels (Exhibit A, Exhibit B, etc.).",
              "Bring multiple copies: Original for the court, copy for opposing party, copy for yourself.",
              "Bring the original device: If authenticity is challenged, you can show the messages/emails/photos on your phone or computer.",
              "Practice your testimony: Know exactly what you'll say to authenticate each exhibit. Don't stumble or appear uncertain.",
              "Consult with an attorney: If you have complex digital evidence or anticipate objections, consider hiring an attorney for limited-scope representation to help with evidence authentication.",
              "Know the hearsay rules: Authentication gets evidence admitted as genuine, but hearsay rules determine whether the content can be considered for its truth. Text messages from the opposing party are usually non-hearsay (party admissions).",
              "Be honest: Never fabricate or alter evidence. Doing so can result in sanctions, loss of your case, and even criminal penalties for perjury or fraud on the court."
            ]
          }
        ]
      }
    ],
    faqs: [
      {
        question: "Can I use screenshots from someone else's phone?",
        answer: "Yes, but you must establish a foundation through the person who took the screenshot. Call them as a witness to testify: (1) they took the screenshot, (2) it's accurate, (3) they haven't altered it, and (4) how they obtained access to the messages. Simply presenting someone else's screenshot without their testimony won't be sufficient."
      },
      {
        question: "What if the opposing party deleted the original messages?",
        answer: "If you have screenshots taken before deletion, authenticate them through your own testimony. You can also subpoena phone records from the wireless carrier showing that messages were sent/received on specific dates (though carrier records won't contain message content). If the opposing party deleted messages to destroy evidence, inform the judge—this can result in adverse inferences or sanctions against them."
      },
      {
        question: "Do I need an expert witness to authenticate digital evidence?",
        answer: "No, in most family court cases. Your own testimony is sufficient to authenticate screenshots of texts, emails, or photos you sent/received. Expert witnesses are typically only needed in complex cases involving: (1) allegations of sophisticated tampering, (2) forensic recovery of deleted data, or (3) analysis of metadata in contested evidence. For routine text messages and emails, your testimony is enough."
      },
      {
        question: "What if I deleted the original text messages?",
        answer: "If you still have screenshots taken before deletion, those screenshots can be authenticated through your testimony. Explain when you took the screenshot, that it accurately represents the conversation, and why the original messages are no longer available. Some phones allow message recovery through backups (iCloud, Google). If you don't have screenshots or backups, you may be able to subpoena phone records from your carrier showing messages were sent/received on specific dates, though these records typically don't include message content. The lesson: always take screenshots of important messages immediately."
      },
      {
        question: "Can I use screenshots from social media?",
        answer: "Yes, but authenticate them properly. Testify under oath: (1) this is a screenshot from [social media platform], (2) taken from the account of [username], (3) on [date], (4) showing [content], and (5) this is an accurate, unaltered image. Include visible indicators like the URL, account name, timestamp, and profile picture. For Facebook or Instagram posts, photograph the entire screen including browser address bar. For challenged authenticity, consider having a witness (friend or family member) verify they saw the same content. Social media companies can be subpoenaed for official records, though this is expensive and time-consuming."
      },
      {
        question: "Do I need an expert witness to authenticate emails?",
        answer: "No. Emails are routinely authenticated through personal testimony without expert witnesses. Testify: (1) you sent or received this email, (2) it's from/to [email address] belonging to [person], (3) the header information (from, to, date, subject) is accurate, and (4) you haven't altered the content. Print emails with full headers visible (sender/recipient addresses, date, time). If authenticity is challenged, you can also log into your email account in court to show the original. Experts are only needed if there's a serious dispute about tampering or sophisticated forgery, which is rare in family court."
      }
    ]
  },
  governance: {
    lastUpdated: "2026-02-16",
    sources: [
      {
        title: "Federal Rules of Evidence - Rule 901",
        organization: "U.S. Courts",
        url: "https://www.uscourts.gov/rules-policies/current-rules-practice-procedure/federal-rules-evidence",
        jurisdiction: "Federal",
        lastAccessed: "2026-02-16",
        note: "Authenticating or identifying evidence - requirement and methods"
      },
      {
        title: "Federal Rules of Evidence - Rule 902",
        organization: "U.S. Courts",
        url: "https://www.uscourts.gov/rules-policies/current-rules-practice-procedure/federal-rules-evidence",
        jurisdiction: "Federal",
        lastAccessed: "2026-02-16",
        note: "Evidence that is self-authenticating"
      },
      {
        title: "Federal Rules of Evidence",
        organization: "Legal Information Institute, Cornell Law School",
        url: "https://www.law.cornell.edu/rules/fre",
        jurisdiction: "Federal",
        lastAccessed: "2026-02-16",
        note: "Complete text of Federal Rules of Evidence with annotations"
      }
    ],
    jurisdictionScope: ["federal"],
    reviewIntervalDays: 180,
    accuracyNotes: "Authentication requirements vary by jurisdiction and judge. Some judges are more lenient in family court proceedings, while others strictly enforce evidentiary rules even for pro se litigants. Digital evidence authentication is an evolving area of law as technology changes. State recording consent laws vary—some require all-party consent, others only one-party consent. Always check your state's specific requirements before recording conversations."
  }
};
