# TechNest - Premium Wireless Earbuds Landing Page

A high-conversion e-commerce landing page for TechNest Wireless Earbuds. This project features a responsive design with product showcase, pricing tiers, reviews, and checkout functionality.

![TechNest Landing Page](screenshot.png)

## Features

- **Responsive Design**: Works on all devices from mobile to desktop
- **Product Showcase**: Highlight key features and technical specifications
- **Tiered Pricing**: Multiple product options with featured recommendation
- **Customer Reviews**: Social proof with testimonials
- **Interactive FAQ**: Accordion-style frequently asked questions
- **Working Checkout**: Complete checkout flow with form validation
- **Animations**: Smooth scrolling and subtle animations
- **Mobile-Friendly Navigation**: Hamburger menu for smaller screens

## Technologies Used

- HTML5
- CSS3 (with CSS Variables and Flexbox/Grid)
- JavaScript (Vanilla JS, no libraries required)
- Font Awesome for icons
- Google Fonts (Poppins)

## Project Structure

```
technest-landing-page/
├── index.html            # Main HTML file
├── css/
│   └── styles.css        # Main stylesheet
├── js/
│   └── script.js         # JavaScript functionality
├── images/               # Product and reviewer images
│   ├── earbuds-hero.png
│   ├── earbuds-specs.png
│   ├── earbuds-cart.png
│   ├── reviewer-1.jpg
│   ├── reviewer-2.jpg
│   └── reviewer-3.jpg
└── README.md             # This file
```

## Image Requirements

The project requires several images which should be placed in the `images/` directory:

- `earbuds-hero.png` - Main product image for the hero section
- `earbuds-specs.png` - Product image for the specifications section
- `earbuds-cart.png` - Small product image for the cart/checkout
- `reviewer-1.jpg`, `reviewer-2.jpg`, `reviewer-3.jpg` - Profile images for customer reviews

## Customization

### Colors

The color scheme can be easily modified by changing the CSS variables in the `:root` section of `styles.css`:

```css
:root {
  --primary-color: #4f46e5;  /* Main brand color */
  --primary-dark: #3730a3;   /* Darker shade for hover states */
  --primary-light: #818cf8;  /* Lighter shade for accents */
  /* ... other variables ... */
}
```

### Content

Update the product details, pricing, and descriptions in the HTML file to match your specific product.

## License

This project is MIT licensed.

## Credits

- Fonts: Google Fonts (Poppins)
- Icons: Font Awesome 6
- Design inspiration: Various premium e-commerce sites 