---
name: testing-static-website
description: Test a static HTML/CSS/JS website end-to-end. Use when verifying static site UI, navigation, animations, responsiveness, and content rendering.
---

# Testing Static Websites

## Prerequisites
- Python 3 installed (for `python3 -m http.server`)
- Chrome browser available
- `wmctrl` for maximizing browser window before recording

## Setup
1. Start a local server in the project directory:
   ```bash
   cd /path/to/website && python3 -m http.server 8080 &
   ```
2. Verify server is running: `curl -s -o /dev/null -w "%{http_code}" http://localhost:8080`
3. Maximize browser: `sudo apt-get install -y wmctrl 2>/dev/null; wmctrl -r :ACTIVE: -b add,maximized_vert,maximized_horz`

## Test Checklist

### 1. Visual Integrity
- Open the site in Chrome at `http://localhost:8080`
- Check hero/header section renders: images load, text visible, layout correct
- Verify all images return HTTP 200 (use `curl -s -o /dev/null -w "%{http_code}" <url>`)
- Verify CSS and JS files load (check via curl or DevTools Network tab)

### 2. Navigation
- Click each nav link and verify it scrolls/navigates to the correct section
- Verify active state highlighting on nav links
- Check navbar visual changes on scroll (e.g. background opacity, shadow)

### 3. Interactive Features
- Test any JavaScript animations (counters, fade-ins, parallax)
- Verify animations trigger at correct scroll positions
- Test any toggle/accordion/modal interactions

### 4. Mobile Responsiveness
- Use Chrome DevTools device toggle (click the device icon in DevTools toolbar)
- Set viewport to 375-400px width
- Verify: hamburger menu appears, layout stacks vertically, text doesn't overflow
- Test hamburger menu: opens, shows links, clicking a link closes menu and navigates

### 5. Console Errors
- Open DevTools Console tab
- Check for JavaScript errors (red entries)
- Warnings about third-party resources (fonts, CDNs) are acceptable
- Verify no 404 errors for local assets

### 6. External Links
- Verify all external links have correct `href` values (grep the HTML)
- Check `target="_blank"` is set for external links
- Optionally verify links are reachable with curl

### 7. Content Verification
- Verify all sections have the expected headings and content
- Check non-Latin scripts (Bengali, Arabic, CJK) render correctly (not garbled/boxes)
- Verify data accuracy if the site displays factual information

## Tips
- Use the DOM output from the computer tool to verify content programmatically rather than just visually
- For Bengali/non-Latin text, the DOM output will show the actual characters - verify they're not garbled
- Counter animations may still be running when you first load - wait 2-3 seconds for them to finish
- The device toggle in DevTools might need two clicks: first to open DevTools, then click the device icon
- When testing mobile nav toggle, click the hamburger icon precisely - it may be small
- Take screenshots at key moments for the test report

## Devin Secrets Needed
- None required for static website testing
