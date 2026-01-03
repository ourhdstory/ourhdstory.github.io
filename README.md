# Our HD Story

A modern, clean personal website built with Jekyll and Tailwind CSS, hosted on GitHub Pages.

## Overview

This is a personal blog and portfolio site for Derek and Hannah, featuring travel stories, home projects, and life adventures.

## Tech Stack

- **Static Site Generator**: Jekyll 4.3+
- **Styling**: Tailwind CSS (via CDN)
- **Fonts**: Google Fonts (Playfair Display for headings, Inter for body)
- **Forms**: Formspree for email subscriptions
- **Hosting**: GitHub Pages
- **Domain**: Custom domain via CNAME

## Project Structure

```
.
├── index.html              # Home page with hero, latest adventures, and email subscription
├── gallery.html            # Photo gallery
├── travel/                 # Travel blog posts
│   └── index.html          # Travel posts index (filtered by category)
├── projects/               # Projects blog posts
│   └── index.html          # Projects posts index (filtered by category)
├── blog/                   # General blog posts
│   └── index.html          # Blog posts index (filtered by category)
├── _posts/                 # All blog posts (organized by category)
├── _layouts/               # Page templates
├── _includes/              # Reusable components
│   ├── header.html         # Site header and navigation
│   └── footer.html         # Site footer
├── assets/
│   ├── css/
│   │   └── custom.css      # Custom styles for hero sections and blog
│   ├── images/             # Image assets
│   ├── js/                 # JavaScript files
│   │   └── main.js         # Main JavaScript
│   └── fonts/              # Custom fonts (if self-hosted)
├── _config.yml             # Jekyll configuration
├── Gemfile                 # Ruby dependencies
└── .gitignore              # Git ignore rules
```

## Getting Started

### Prerequisites

- Ruby 2.7+ 
- Jekyll 4.0+
- Bundler

### Installation

1. Clone the repository:
```bash
git clone https://github.com/ourhdstory/ourhdstory.github.io.git
cd ourhdstory.github.io
```

2. Install dependencies:
```bash
bundle install
```

3. Build and serve locally:
```bash
bundle exec jekyll serve
```

4. Visit `http://localhost:4000` in your browser

## Creating a Blog Post

To create a new blog post, create a new file in the `_posts/` directory following the naming convention:

```
_posts/YYYY-MM-DD-post-title.md
```

Example with category:
```markdown
---
layout: post
title: "My Amazing Travel Story"
date: 2025-01-15
categories: travel
---

Your post content goes here...
```

### Post Categories

Posts are organized by category. Choose one of the following:

- **travel** - Travel adventures and destination posts (appears at `/travel/`)
- **projects** - Home projects, DIY, and improvements (appears at `/projects/`)
- **blog** - General stories and reflections (appears at `/blog/`)

Posts automatically appear on their category page and in the navigation menu.

## Customization

### Colors & Typography

- Edit `_layouts/default.html` to modify the font choices and Tailwind CSS configuration
- Edit `assets/css/custom.css` for custom component styles (hero section, blog post styling, etc.)

### Navigation

Update navigation links in `_includes/header.html`:
- Home
- Travel
- Projects
- Gallery
- Blog

### Email Subscription Form

The email subscription form is located on the home page (`index.html`). It uses Formspree to collect emails.

To update the form endpoint:
1. Get your Formspree form ID from https://formspree.io
2. Update the `action` attribute in the form: `action="https://formspree.io/f/YOUR_FORM_ID"`

### Site Configuration

Update `_config.yml` to change:
- `title` - Site title
- `email` - Email address
- `description` - Site description
- `baseurl` - Base URL path
- `url` - Full site URL

## Deployment

This site is hosted on GitHub Pages. Changes pushed to the `main` branch will automatically build and deploy.

## Local Development

```bash
# Install dependencies
bundle install

# Run development server
bundle exec jekyll serve

# Build static site
bundle exec jekyll build
```

The built site will be in the `_site/` directory.

## License

© 2025 Our HD Story. All rights reserved.
