# Menu Filtering App

## Overview

The Menu Filtering App is a simple JavaScript application that allows users to view and filter a menu of food items based on categories like breakfast, lunch, dinner, and shakes. This project showcases how to use JavaScript to manipulate the DOM and create a responsive user interface.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Algorithm](#algorithm)
- [Contributing](#contributing)
- [License](#license)

## Features

- Displays a list of menu items with images, descriptions, and prices.
- Filters menu items by category (e.g., breakfast, lunch, dinner, shakes).
- Responsive design suitable for different screen sizes.

## Technologies Used

- HTML
- CSS
- JavaScript

## Installation

To get started with the Menu Filtering App, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
      cd menu-filtering-app
   ```
3. Open the index.html file in your web browser to view the app.

# Menu Filtering App

## Usage

- When the app loads, all menu items will be displayed.
- Click on the buttons at the top to filter the menu by category (e.g., All, Breakfast, Lunch, Dinner, Shakes).
- The menu will dynamically update to show only the items from the selected category.

## Algorithm

### Initialize Menu Data:

- Create an array of menu objects, each containing properties such as `id`, `title`, `category`, `price`, `img`, and `desc`.

### Add Event Listener:

- Use `window.addEventListener("DOMContentLoaded", callback)` to ensure that the menu items and buttons are displayed only after the DOM is fully loaded.

### Display Menu Items:

- Define the `displayMenuItems(menuItems)` function:
  - Take an array of menu items as input.
  - Use the `innerHTML` property to render the items to the webpage.

### Display Menu Buttons:

- Define the `displayMenuButtons()` function:
  - Extract unique categories from the menu using `Set`.
  - Add an "all" category to the beginning of the list.
  - Render buttons for each category.

### Handle Button Clicks:

- Add click event listeners to filter buttons:
  - If the "all" button is clicked, call `displayMenuItems(menu)` to show all items.
  - For other categories, filter the menu based on the selected category using `Array.filter()`.
  - Call `displayMenuItems(menuCategory)` to display filtered items.

## Contributing

> Contributions are welcome! If you find any issues or have suggestions for improvements, feel free to open an issue or submit a pull request. Thank you!
