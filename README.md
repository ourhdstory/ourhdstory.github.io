# Our HD Story

A modern, clean personal website built with Jekyll and Tailwind CSS, hosted on GitHub Pages.

## Overview

This is a personal blog and portfolio site for Derek and Hannah, featuring travel stories, home projects, and life adventures.

## Tech Stack

- **Static Site Generator**: Jekyll
- **Styling**: Tailwind CSS (via CDN)
- **Fonts**: Google Fonts (Playfair Display, Inter)
- **Hosting**: GitHub Pages
- **Domain**: Custom domain via CNAME

## Project Structure

```
.
├── index.html              # Home page
├── about.html              # About us page
├── contact.html            # Contact form
├── gallery.html            # Photo gallery
├── blog/                   # Blog index
├── _posts/                 # Blog post content
├── _layouts/               # Page templates
├── _includes/              # Reusable components (header, footer)
├── assets/
│   ├── css/
│   │   └── custom.css      # Custom styles for hero sections and blog
│   ├── images/             # Image assets
│   ├── js/                 # JavaScript files
│   └── fonts/              # Custom fonts (if self-hosted)
├── _config.yml             # Jekyll configuration
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

Example:
```markdown
---
layout: post
title: "My Amazing Adventure"
date: 2025-01-15
categories: travel
---

Your post content goes here...
```

## Customization

### Colors & Typography

- Edit `_layouts/default.html` to modify the font choices and base Tailwind CSS configuration
- Edit `assets/css/custom.css` for custom component styles

### Site Configuration

Update `_config.yml` to change:
- Site title
- Email
- Description
- Base URL
- Site URL

### Pages

All main pages (home, about, contact, gallery) are in the root directory as HTML files. Edit them as needed with Tailwind CSS classes.

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
