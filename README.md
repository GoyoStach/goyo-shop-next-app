# Shop demo

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Technical Stack

- Next 14
    - Font optimized
- All linting & code quality tools for team production projects( TS, eslint, prettier, husky, lint-staged)
- Chakra UI & Chakra ui template for fast / reliant components
- Stripe


## TODO :

- [x] Define the color theme in chakra ui ( Most Likely cappuchino ) Smart Swatch
- [/] Define Page structure 
- [ ] Next Intl
- [ ] Lucia Auth
- [ ] Host on VPS with coolify
- [ ] Email strategy

## Pages Structure :

- [ ] Landing Page
    - [x] Masthead
    - [x] 2 columns with Image ( https://chakra-templates.vercel.app/page-sections/features)
    - [x] Testimonials (https://chakra-templates.vercel.app/page-sections/testimonials)
    - [ ] Simple Grid with some products (4 Most popular)
- [ ] Footer
- [ ] Dashboard for connected user
    - [ ] Previous Commands
        - [ ] Table inside cards (https://v2.chakra-ui.com/docs/components/table/usage)
    - [ ] (Optionnal) Changing color of the website
    - [ ] Changing basics settings of the account 
- [ ] Shop
    - [x] Page with all products
    - [ ] Shared layout with landing page ( Header, Footer)
    - [ ] Page with categories
    - [ ] Single page product
- [ ] Cart component
