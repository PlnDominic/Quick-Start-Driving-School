# Quick Start Driving School website

_Started 2026-06-24 13:40 UTC_

---

## User

Build a website for Quick Start Driving School in Kumasi.


Quick Start Driving School
4.0
(33)
Driving school

Overview

Reviews


Directions


Save


Nearby


Send to phone


Share
 


Kumasi



Open · Closes 5 pm



023 308 0020





MCGP+6H Kumasi






Your Maps history

Add a label
 


Suggest an edit
 
Add missing information


Add website
 
Photos & videos

All

Car

Street View & 360°
 


Add photos & videos
 
Review summary

5	
4	
3	
2	
1	
4.0

33 reviews
 


Write a review
 
Reviews




Sort


All

license
5

driving lessons
2

learn
3


FELIX ACHEAMPONG
Local Guide · 365 reviews · 2,645 photos







7 years ago
Quick Start Driving School is a renowned learning center for amateur drivers. They offer juicy packages such as driving licenses, driving lessons, intensive and exclusive driving lessons as well as flexible schedules for customers. Learner … More


10


Share
 
 


Michael Affare
Local Guide · 149 reviews · 545 photos







9 years ago
A driving school situated at a very vantage point for all university students who want to learn how to drive. They can provide assistance with registration for a driving license with DVLA and tution as well. … More


2


Share
 
 


Victoria Ashley
1 review







5 years ago
I had my driving lessons and license with quick start
They are so good and delivered on time. I recommend this school

## Assistant

I'll explore the design system first, then ask a few quick questions before building.

_[tool: list_files]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: list_files]_

Got a clear read on the design system — editorial, calm, image-led, navy accent over warm cream/sand tones. Let me ask a few quick things before building.

_[tool: questions_v2]_

## User

Questions answered:
- scope: Multi-section homepage + a few linked pages (Courses, About, Contact)
- sections: Hero with call-to-action, Courses / packages (license, lessons, intensive), Reviews & rating (4.0, 33 reviews), Contact / enrollment form, Why choose us / features
- packages: decide for me
- tone: Premium & editorial (close to the design system)
- imagery: Decide for me
- contact: 0233080020
- variations: Explore a few hero/layout options side by side

## Assistant

Plan: present a few hero/layout directions side by side on a canvas first (as you asked), then build out the full multi-page site around your pick.

_[tool: update_todos]_

_[tool: copy_starter_component]_

Now building three hero/layout directions on a pannable canvas.

_[tool: dc_write]_

_[tool: show_html]_

_[tool: update_todos]_

Three hero/layout directions are on the canvas, all in the design system's editorial style (navy on warm cream, Merriweather Sans headings, mono labels):

- **A — Cinematic full-bleed:** image fills the hero, headline and CTA float over a dark veil. Boldest, most image-led.
- **B — Split:** copy panel left, photo right, with phone + rating pinned at the bottom. Most "storefront."
- **C — Centered type-led:** big centered headline on cream, credibility stats row, slim photo band below. Most minimal/editorial.

Drop your own photos into any slot to preview. Tell me which direction (or mix) to run with and I'll build out the full multi-page site — homepage with courses, why-us, reviews and an enrollment form, plus linked Courses, About and Contact pages.

_[tool: ready_for_verification]_

Posted. Pick a direction (A, B, or C — or a mix) and I'll build the full site around it.

## User

B and use the attached color theme

## Assistant

_[tool: view_image]_

Let me sample exact colors from the signboard.

_[tool: run_script]_

Picked it up — Option B, recolored to the signboard's deep-brown + terracotta-orange brand palette (kept the design system's warm cream/ivory neutrals and type). Building the full site now.

_[tool: update_todos]_

_[tool: dc_write]_

Homepage done. Now the three linked pages, consistent header/footer.

_[tool: update_todos]_

_[tool: dc_write]_

_[tool: dc_write]_

_[tool: dc_write]_

_[tool: update_todos]_

The full site is built. Letting the verifier check the homepage.

_[tool: ready_for_verification]_

Built the full site in the **Option B split-hero direction**, recolored to your signboard's deep-brown + terracotta palette over the design system's warm neutrals.

Four linked pages:
- **Home** — split hero, trust strip, "why us," course cards, the three real Google reviews (Felix, Michael, Victoria), and a working enrolment form.
- **Courses** — detailed breakdown of all four packages.
- **About** — story, values, and location.
- **Contact** — enquiry form with phone, Plus-code location, and hours.

Image areas are drop-in placeholders — drag your own photos onto any of them. The forms show a thank-you state on submit (front-end only; they don't send anywhere yet).

One thing to confirm: I used **023 308 0020** (the number you gave me, matching the Google listing), but your signboard reads **024 500 0075**. Tell me which is correct and I'll update it everywhere. Want me to wire the forms to actually email/WhatsApp you, or add a real embedded map?

## User

design the Our courses page like the "Our Programs" and "Why Quick Start" like the "Are You Ready?" in the attached screenshot

## Assistant

I'll look at the screenshot reference closely first.

_[tool: view_image]_

Clear — adopt the reference's composition (in our brand palette): the homepage "Why Quick Start" becomes an "Are You Ready?" two-column block + a dark schedule band, and the Courses page becomes an "Our Programs"-style card carousel. Let me grab the exact homepage block first.

_[tool: grep]_

_[tool: read_file]_

Now I'll replace the homepage "Why Quick Start" block with the "Are You Ready?" layout plus the dark schedule band.

_[tool: str_replace_edit]_

Now the Courses page — rebuilding it as an "Our Programs"-style card carousel.

_[tool: dc_write]_

Both redesigns are in. Verifying the homepage and Courses page.

_[tool: ready_for_verification]_

Reworked both sections to match your reference, in the Quick Start brand palette:

- **Homepage "Why Quick Start"** is now an **"Are you ready to drive?"** two-column block — photo with a yellow road-sign + cone accent on the left, heading + paragraph + checkmark list + button on the right — followed by the dark **"Schedule Your Driving Lessons with Us!"** band with the phone number and warning-triangle icon.
- **Courses page** now leads with an **"Our Programs"-style carousel** — rounded photo cards with an orange numbered badge overlapping each image, title, short line, and a "More info" button, with working ‹ › arrows and pager dots.

Drop your own photos into any image slot. Still open from before: which phone number is correct (023 308 0020 vs. the signboard's 024 500 0075)?

## User

Found issues — fixing…

## Assistant

_[tool: dc_js_str_replace]_

## User

let the courses block be like this screenshot Our Program in the homepage

## Assistant

