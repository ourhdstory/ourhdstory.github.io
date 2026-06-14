---
layout: post
title: "From WordPress to Claude Code: Building Our Website"
date: 2026-06-14
categories: [projects]
excerpt: "Three websites, one story — from a frustrating WordPress wedding site on Bluehost, to an AI-coded blog with a weak design, to the version we finally love. Here's how we got here."
---

This site has been rebuilt more than once, and each version taught us something. The short version: we went from a clunky, expensive drag-and-drop site to one that's simple, basically free, and genuinely ours — and the difference came down to the tools. Here's the honest journey.

## Chapter 1: The WordPress years (and a wedding to launch)

Our very first site lived on **WordPress, hosted on Bluehost.** We built it for our wedding, and we figured a visual, drag-and-drop builder would be the easy path. It wasn't.

We had to learn a whole vocabulary just to get started — **themes, blocks, Elementor, plugins** — and stitch them all together. The drag-and-drop interface *looked* simpler, but in practice it was fiddly and frustrating: things that should've taken minutes took evenings. And all we wanted was a simple wedding site — a **photo gallery, an RSVP form, wedding info, and a "things to do" page.** Even that proved surprisingly tough to launch and keep tidy.

On top of the frustration, it came with a **recurring Bluehost/WordPress bill** for what was, in the end, a handful of pages.

## Chapter 2: The 2025 rebuild — code, finally, but a flat design

In 2025 we decided to start over and turn the site into a proper **blog**. This time we went the code route and leaned on AI tools to do it — **GitHub Copilot, the Kiro CLI, and VS Code** — to build the first version on a clean, static foundation.

It was a real step up: faster, lighter, no plugin sprawl. But honestly? **The design was lacking.** It worked, but it didn't feel like *us*. The bones were good; the soul wasn't there yet.

## Chapter 3: 2026 — Claude Code, and the magic finally happened

The latest rebuild was done with **Claude Code running Opus 4.8**, and this is where it all clicked. Instead of wrestling an interface or babysitting autocomplete, we just **chatted in natural language** with an assistant that works right in the terminal — it reads the actual project, makes the edits, runs the build, and commits the changes.

A few moments stood out:

- **It planned the whole approach with us.** It even helped us think through *how to host the site* and walked us through architectural decisions — like using **Formspree** for form hosting and choosing **Jekyll** as the foundation — explaining the trade-offs in plain English.
- **It gave us an honest audit.** The first thing it did was read our existing site and tell us what was broken: our stylesheet was never even linked, the mobile menu didn't work, the homepage was hardcoded, and the gallery pointed at images that didn't exist. Things we'd never have caught.
- **Hannah drove the design.** It asked us a handful of pointed design questions, and Hannah — putting her architect's eye to work — chose the direction: an **earthy, organic** feel, a **stone-and-sage** palette, an elegant serif paired with a clean sans, and a full-bleed photo hero. The AI built to *that* brief.
- **It built a real system.** A proper design system and reusable components — one "post card" now powers the homepage, blog, travel, and projects pages. Add a post and it appears everywhere automatically.
- **It set up local previews.** It installed and configured Ruby so we can run the site on our own machine and see changes instantly — no more publishing just to test.
- **Our words stayed ours.** For the year-in-review posts it worked from our raw notes, and it *asked* before publishing anything personal rather than assuming.

The whole loop is just: **chat in plain language → build a local repo → test it → commit.** That's it.

## The payoff: simple, and basically free

Here's the part that still makes us smile. This site now costs us almost nothing — **we just renew the domain name once a year.** No more expensive Bluehost and WordPress subscriptions. No more clunky drag-and-drop editors. No plugin updates to chase. GitHub Pages hosts it for free and rebuilds it automatically every time we push.

## The current stack

- **Jekyll** — a static site generator; every post is just a Markdown file
- **Tailwind CSS** plus a custom CSS design system for our own look
- **Google Fonts** — Fraunces for headlines, Inter for body
- **Formspree** — powers the subscribe form
- **GitHub Pages** — free hosting that rebuilds on every push
- **rbenv + Ruby** — so we can preview locally before anything goes live

No database, no servers, no monthly bill. The site is just files — fast, secure, and truly ours.

## What we kept firmly in our hands

AI did the heavy lifting, but some things stay human:

- **Content** — our words, our stories
- **Design taste** — the aesthetic calls were ours (well, Hannah's)
- **What's public** — especially the personal stuff; nothing sensitive goes up without us choosing it

## Lessons learned

1. **The fancy visual builder isn't always the easy path.** Our "simpler" drag-and-drop WordPress site was the most frustrating one we ever made.
2. **Good tools change everything.** Same two people, three very different experiences — the difference was the tooling, not us.
3. **AI is a collaborator, not a replacement.** It's most powerful when you already know what you want, and when you let it tell you what's broken.
4. **Specific direction beats vague prompts.** "Earthy and organic, stone and sage" got a far better result than "make it look nice."
5. **Review everything.** Even this post's first draft was generic filler we later replaced with the truth.

## The result

We're genuinely proud of how the site turned out — and a little amazed at how *little* it costs and how *good* it feels to maintain. From a frustrating, pricey WordPress wedding site to a free, fast blog we can update by chatting with an assistant at the kitchen table: that's the whole arc.

If you're thinking about building your own site, our advice is simple: don't assume the drag-and-drop builder is easier, start with a clear vision, let an AI handle the structure and boilerplate, keep creative control over design and content — and test everything locally before you publish.
