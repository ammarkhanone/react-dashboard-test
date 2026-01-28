```bash
# First, create a new React application using Create React App with TypeScript
npx create-react-app react-dashboard-test --template typescript

# Navigate to the project directory
cd react-dashboard-test

# Install Tailwind CSS
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# Configure Tailwind CSS (tailwind.config.js)
```

Edit `tailwind.config.js` to include these paths:

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

Next, add the Tailwind directives to your CSS file. Create a file named `src/index.css` or modify it if it already exists:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Next, modify your `src/App.tsx` component to include a simple `Hello World` message:

```tsx
import React from 'react';
import './index.css';

const App: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600">Hello World</h1>
    </div>
  );
};

export default App;
```

Finally, run your application:

```bash
npm start
```

This will create a simple TypeScript React application with Tailwind CSS, displaying "Hello World" in the center of the screen.