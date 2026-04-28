# Poker-Beasts
# Association Website

## Description

In Progress

---

## Tech Stack

* React
* Vite
* JavaScript
* CSS 

---

## Project Structure
### In-Progress Idea: 
```
src/ 
  components/    reusable UI parts (Navbar, Cards, etc.) 
  pages/         full pages (Home, About, Events, Contact) 
  data/          static content (events, members) 
  assets/        images and media 

  App.jsx        main layout 
  main.jsx       entry point
```

---

## How it is organized
### In Progress

Rule of thumb:
If you copy something twice, make it a component.

---

## Getting started

Install dependencies:

```
npm install
```

Run locally:

```
npm run dev
```

Build:

```
npm run build
```

---

## Workflow

This project uses a simple workflow:

```
main        stable version
feature/... work branches
```

### Rules

- Do not push directly to `main`
- Always create a feature branch
- Open a Pull Request into `main`
- Merge when ready

Example:

```
feature/homepage
feature/events-page
fix/navbar-mobile
```

---

## Issues

All work is tracked using GitHub Issues.

Use the templates:
- Feature request
- Bug report
- Task

Keep issues short and clear.

---

## Pull Requests

Before merging:

- Code runs locally
- No obvious errors
- Changes are understandable

Keep PRs small.

---

## Notes

Start simple.  
Add more features (backend, login, CMS) only when needed.
Keep PRs small and focused.
