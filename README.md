# Personal Portfolio Website

This repository contains my personal portfolio website built with Jekyll and hosted on GitHub Pages.

## Features

- Responsive design that works on mobile, tablet, and desktop
- Blog section with tag support
- Project portfolio showcase
- Experience timeline
- Contact information
- Optimized for GitHub Pages

## Project Structure

```
jdhunterae.github.io/
├── _config.yml            # Jekyll configuration
├── _includes/             # Reusable components
├── _layouts/              # Page templates
│   ├── default.html       # Main layout
│   ├── post.html          # Blog post layout
│   ├── project.html       # Project page layout
│   └── blog.html          # Blog index layout
├── _posts/                # Blog posts (Markdown)
│   └── 2025-03-15-understanding-mac-timestamps.md
├── _projects/             # Project pages (Markdown)
│   └── recon-forensics-suite.md
├── _sass/                 # SCSS partials
│   ├── base.scss
│   ├── blog.scss
│   ├── contact.scss
│   ├── experience.scss
│   ├── footer.scss
│   ├── header.scss
│   ├── projects.scss
│   ├── responsive.scss
│   ├── sections.scss
│   └── variables.scss
├── assets/
│   ├── css/
│   │   └── styles.scss    # Main SCSS file
│   ├── js/
│   │   └── script.js      # JavaScript
│   ├── images/            # Images and project screenshots
│   └── resume.pdf         # PDF resume
├── blog/
│   └── index.md           # Blog landing page
├── index.md               # Homepage
└── Gemfile                # Ruby dependencies
```

## Local Development

1. Install Ruby and Jekyll (if not already installed):
   ```bash
   gem install bundler jekyll
   ```

2. Clone this repository:
   ```bash
   git clone https://github.com/jdhunterae/jdhunterae.github.io.git
   cd jdhunterae.github.io
   ```

3. Install dependencies:
   ```bash
   bundle install
   ```

4. Run the development server:
   ```bash
   bundle exec jekyll serve
   ```

5. View the site at `http://localhost:4000`

## Adding Content

### Blog Posts

Create a new markdown file in the `_posts` directory with the following naming convention:
```
YYYY-MM-DD-title-with-hyphens.md
```

Include front matter at the top:
```yaml
---
layout: post
title: "Your Blog Post Title"
date: YYYY-MM-DD
tags: ["Tag1", "Tag2"]
excerpt: "A brief excerpt or description for the blog list."
---

Your content here in Markdown format.
```

### Projects

Create a new markdown file in the `_projects` directory:
```
project-name.md
```

Include front matter at the top:
```yaml
---
