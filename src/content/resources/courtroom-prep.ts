import { ResourcePage } from "@/types/content";

export const courtroomPrep: ResourcePage = {
  contentVersion: 2,
  blocks: {
    shortAnswer: "Dress business casual. Address the judge as 'Your Honor.' Stand when the judge enters and exits. Speak only when asked. Answer the question, then stop talking. Don't interrupt, don't argue, and don't show emotion. Bring all filed documents and labeled exhibits.",
    sections: [
      {
        id: "courtroom-dress-code",
        heading: "Courtroom Dress Code",
        body: [
          {
            type: "p",
            text: "Business casual is the standard. You don't need a suit, but you need to look like you take the proceeding seriously. Judges notice."
          },
          {
            type: "p",
            text: "**What to Wear:**"
          },
          {
            type: "ul",
            items: [
              "Collared shirt or blouse",
              "Dress pants, khakis, or knee-length skirt",
              "Closed-toe shoes",
              "Minimal jewelry and accessories"
            ]
          },
          {
            type: "p",
            text: "**Avoid:**"
          },
          {
            type: "ul",
            items: [
              "T-shirts, tank tops, or anything with logos/text",
              "Shorts, leggings, or athletic wear",
              "Hats or sunglasses inside the courtroom",
              "Strong perfume or cologne",
              "Visible tattoos if possible (cover with clothing)"
            ]
          }
        ]
      },
      {
        id: "addressing-judge",
        heading: "How to Address the Judge",
        body: [
          {
            type: "p",
            text: "'Your Honor' is the standard form of address. Stand when speaking unless told otherwise. Make eye contact but don't stare. Don't call the judge 'sir,' 'ma'am,' 'judge,' or by their name."
          },
          {
            type: "p",
            text: "**When the judge asks you a question:**"
          },
          {
            type: "ul",
            items: [
              '"Yes, Your Honor" or "No, Your Honor"',
              '"I don\'t know, Your Honor" (if you don\'t know)',
              '"May I explain, Your Honor?" (if you need to add context)'
            ]
          },
          {
            type: "p",
            text: "**When you need to speak:**"
          },
          {
            type: "ul",
            items: [
              '"Your Honor, may I respond?"',
              '"Your Honor, I\'d like to address that point"'
            ]
          },
          {
            type: "p",
            text: "**Never say:**"
          },
          {
            type: "ul",
            items: [
              '"That\'s not true!" (argumentative)',
              '"They\'re lying!" (accusatory)',
              '"This is ridiculous!" (disrespectful)'
            ]
          },
          {
            type: "p",
            text: "State facts calmly. Let the evidence speak."
          }
        ]
      },
      {
        id: "when-to-speak",
        heading: "When to Speak and When to Stay Silent",
        body: [
          {
            type: "p",
            text: "**Speak Only When:**"
          },
          {
            type: "ol",
            items: [
              "The judge asks you a direct question",
              "Your attorney asks you a question (if you have one)",
              "The judge invites you to present your case or argument",
              "You're asked if you have anything to add"
            ]
          },
          {
            type: "p",
            text: "**Stay Silent When:**"
          },
          {
            type: "ol",
            items: [
              "The other party is speaking to the judge",
              "The judge is reading documents or conferring with the clerk",
              "Another case is being called",
              "You feel emotional and need a moment"
            ]
          },
          {
            type: "p",
            text: "If the other party says something false, write it down. Don't interrupt. You'll have a chance to respond."
          }
        ]
      },
      {
        id: "professional-presentation",
        heading: "How to Present Yourself Professionally",
        body: [
          {
            type: "p",
            text: "**Voice and Tone:**"
          },
          {
            type: "ul",
            items: [
              "Speak clearly at a normal volume",
              "Don't rush your words",
              "Pause before answering to collect your thoughts",
              "Stay calm even if provoked"
            ]
          },
          {
            type: "p",
            text: "**Body Language:**"
          },
          {
            type: "ul",
            items: [
              "Stand straight with hands at your sides or holding notes",
              "Don't fidget or cross your arms",
              "Face the judge when speaking, not the other party",
              "No eye-rolling, sighing, or head-shaking when others speak"
            ]
          },
          {
            type: "p",
            text: "**Emotional Control:**"
          },
          {
            type: "p",
            text: "Judges expect you to be nervous. They don't expect you to cry uncontrollably, yell, make threats, or bring up every past wrong instead of addressing the current issue."
          },
          {
            type: "p",
            text: "If you feel overwhelmed, ask for a brief recess: 'Your Honor, may I have a moment?'"
          }
        ]
      },
      {
        id: "common-mistakes",
        heading: "Common Courtroom Mistakes",
        body: [
          {
            type: "p",
            text: "**1. Talking Too Much**"
          },
          {
            type: "p",
            text: "Answer the question, then stop. Don't volunteer extra information or go off on tangents. If the judge wants more detail, they'll ask."
          },
          {
            type: "p",
            text: "**2. Arguing with the Other Party**"
          },
          {
            type: "p",
            text: "Speak to the judge, not to the opposing party. Even if they're sitting right there, direct your words to the bench. The judge is the decision-maker."
          },
          {
            type: "p",
            text: "**3. Bringing Up Irrelevant History**"
          },
          {
            type: "p",
            text: "Unless it's directly related to the current motion or issue, don't bring up something from five years ago. Judges have limited time and patience."
          },
          {
            type: "p",
            text: "**4. Reading from a Script**"
          },
          {
            type: "p",
            text: "It's fine to have notes. It's not fine to read every word in a monotone voice. Use bullet points, not full sentences."
          },
          {
            type: "p",
            text: "**5. Forgetting to Bring Documents**"
          },
          {
            type: "p",
            text: "If you filed a motion or exhibit list, bring copies. If you reference something in your argument, have it ready to hand to the judge."
          },
          {
            type: "p",
            text: "**6. Arriving Late**"
          },
          {
            type: "p",
            text: "Arrive at least 15 minutes early. Courts lock doors at session start in many jurisdictions. If you're late, you may forfeit your hearing."
          }
        ]
      },
      {
        id: "hearing-types",
        heading: "What Happens During Different Types of Hearings",
        body: [
          {
            type: "p",
            text: "**Temporary Orders Hearing:**"
          },
          {
            type: "p",
            text: "Purpose: Decide temporary custody, support, or restrictions until the final hearing. Short timeframe (15-30 minutes), focus on immediate harm or need, less formal than a trial. Judge may rule from the bench or issue a written order later."
          },
          {
            type: "p",
            text: "Your role: Present your most urgent concerns with evidence. Don't try to litigate the entire case."
          },
          {
            type: "p",
            text: "**Status Conference:**"
          },
          {
            type: "p",
            text: "Purpose: Check progress, set deadlines, address procedural issues. Very brief (5-10 minutes), judge may ask about discovery, mediation, or settlement talks. No testimony or evidence presentation."
          },
          {
            type: "p",
            text: "Your role: Answer questions about where things stand. Bring your calendar to confirm future dates."
          },
          {
            type: "p",
            text: "**Final Hearing or Trial:**"
          },
          {
            type: "p",
            text: "Purpose: Present full case, call witnesses, introduce evidence for final judgment. Longer timeframe (hours or days), formal rules of evidence apply, testimony under oath."
          },
          {
            type: "p",
            text: "Your role: Present organized evidence, follow courtroom procedures precisely, be prepared for cross-examination."
          }
        ]
      },
      {
        id: "arrival-preparation",
        heading: "Before You Walk Into Court",
        body: [
          {
            type: "p",
            text: "**Arrive Early:** Get there at least 15 minutes before your scheduled time. Find your courtroom, locate the restroom, and settle your nerves."
          },
          {
            type: "p",
            text: "**Check In:** Some courts require you to check in with the clerk. Ask if you're unsure."
          },
          {
            type: "p",
            text: "**Turn Off Your Phone:** Not on vibrate—completely off. Some courts confiscate phones that ring during proceedings."
          },
          {
            type: "p",
            text: "**Organize Your Documents:** Have everything in order with tabs or dividers. You don't want to fumble through papers when the judge asks a question."
          },
          {
            type: "p",
            text: "**Practice Deep Breathing:** Anxiety is normal. Take slow, deep breaths while waiting. Focus on facts, not emotions."
          }
        ]
      },
      {
        id: "after-hearing",
        heading: "After the Hearing",
        body: [
          {
            type: "p",
            text: "**Listen Carefully to the Judge's Order:** Some judges rule from the bench immediately. Others issue written orders later. Make sure you understand what was decided and what you need to do next."
          },
          {
            type: "p",
            text: "**Don't Celebrate or Show Disappointment:** Remain composed until you leave the courtroom. No matter the outcome, stay professional."
          },
          {
            type: "p",
            text: "**Get the Written Order:** If the judge rules from the bench, find out when the written order will be filed. You'll need it for enforcement or appeals."
          },
          {
            type: "p",
            text: "**Follow Up on Deadlines:** If the judge ordered you to file something, complete something, or appear again, calendar those dates immediately."
          }
        ]
      }
    ],
    faqs: [
      {
        question: "What if I accidentally call the judge by the wrong title?",
        answer: "Quickly correct yourself: 'My apologies, Your Honor.' Judges understand nervousness. Don't dwell on it—move forward with your testimony or argument."
      },
      {
        question: "Can I bring someone with me to court for support?",
        answer: "Yes, but they must sit in the gallery (spectator seating), not at your table. They cannot speak, pass notes, or otherwise participate unless called as a witness. Some courts restrict who can be present during sensitive testimony (e.g., children's cases)."
      },
      {
        question: "What if I need to use the bathroom during my hearing?",
        answer: "If it's urgent, wait for a natural break (like when the judge is reading documents) and politely ask: 'Your Honor, may I be excused for a moment?' Judges will usually grant a brief recess. Try to use the restroom before your case is called."
      }
    ]
  },
  governance: {
    lastUpdated: "2026-02-15",
    sources: [
      {
        name: "Federal Rules of Civil Procedure - Courtroom Conduct",
        url: "https://www.uscourts.gov/rules-policies/current-rules-practice-procedure"
      },
      {
        name: "State Bar Association Self-Help Resources",
        url: "https://www.americanbar.org/groups/legal_services/flh-home/"
      },
      {
        name: "Local Court Rules and Procedures"
      }
    ],
    jurisdictionScope: "General courtroom etiquette principles apply across most U.S. family courts. Specific rules of procedure may vary by jurisdiction.",
    reviewIntervalDays: 180,
    accuracyNotes: "Courtroom customs may vary by jurisdiction. Always check local court rules and observe other cases before yours to understand specific courtroom culture."
  }
};
