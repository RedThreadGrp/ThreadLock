# Visual Verification Guide

## How to Verify the Alignment Fix

### 1. Navigate to a Topic Page
Open your browser and navigate to:
```
http://localhost:3000/resources/topics/proof-of-service
```

### 2. Locate the Common Questions Section
Scroll down to find the "Common Questions" heading and the question cards below it.

### 3. Open Browser DevTools
Right-click on one of the question cards and select "Inspect" or press F12.

### 4. Verify the Following in DevTools

#### A. Find the InlineIconLabel Span
Look for the `<span>` element with `data-testid="resource-card-row"`.

#### B. Check Computed Styles
In the DevTools "Computed" tab, verify:

```css
/* The main wrapper span */
display: inline-flex;  ✓
align-items: center;   ✓

/* The icon wrapper (first child span) */
width: 16px;          /* w-4 = 1rem = 16px */
height: 16px;         /* h-4 = 1rem = 16px */
line-height: 1;       /* leading-none */

/* The text wrapper (second child span) */
line-height: 1;       /* leading-none */
```

#### C. Visual Inspection
The question mark icon and the question text should be:
- **Vertically centered** with each other
- **No gap or offset** between icon baseline and text baseline
- **Consistent height** across all question cards

### 5. Test the Link
Click on a question card and verify:
- URL changes to `/resources/q/[question-slug]`
- The correct question page loads
- The page has proper content (heading, answer, etc.)

## Expected Visual Appearance

### Before Fix (items-start)
```
?  What counts as proof of service?
^  ^
|  |
|  Text starts here (aligned to top)
Icon starts here (aligned to top but offset by mt-0.5)

Result: Icon and text are misaligned
```

### After Fix (items-center with leading-none)
```
?  What counts as proof of service?
^  ^
|  |
|  Text centered vertically
Icon centered vertically

Result: Perfect vertical alignment
```

## Acceptance Test Checklist

- [ ] Visit `/resources/topics/proof-of-service`
- [ ] Open DevTools and inspect a question card
- [ ] Verify `data-testid="resource-card-row"` exists
- [ ] Verify computed CSS shows:
  - [ ] `display: inline-flex`
  - [ ] `align-items: center`
  - [ ] Icon: `width: 16px`, `height: 16px`, `line-height: 1`
  - [ ] Text: `line-height: 1`
- [ ] Visual check: Icon and text are vertically centered
- [ ] Click question card
- [ ] Verify routes to `/resources/q/[slug]`
- [ ] Verify question page loads correctly

## Running Automated Tests

```bash
# Run all resource hub tests
npm run e2e:spec -- --spec "cypress/e2e/resources_hub.cy.ts"

# Or run just the topic page tests
npm run e2e -- --spec "cypress/e2e/resources_hub.cy.ts" --grep "Topic Pages"
```

## Common Issues to Check

1. **Icon too large**: Should be contained in 16px×16px box, not text-xl (20px)
2. **Text baseline offset**: Both icon and text should have line-height: 1
3. **Vertical misalignment**: Should use items-center, not items-start
4. **Wrong route**: Should be `/resources/q/[slug]`, not `/resources/q/[old-slug]`

## Browser Compatibility
Test in:
- Chrome/Edge (Chromium)
- Firefox
- Safari

The `inline-flex` with `items-center` should work consistently across all modern browsers.
