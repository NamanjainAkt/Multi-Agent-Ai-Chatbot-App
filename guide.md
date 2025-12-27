### Create components.json File

Source: https://reactnativereusables.com/docs/installation/manual

Generates a `components.json` file, which is part of the setup for using a component library and potentially the `shadcn-ui` CLI.

```bash
npx ui doctor
```

--------------------------------

### Verify Setup with Doctor Command

Source: https://reactnativereusables.com/docs/installation/manual

Runs the `doctor` command to check if the React Native Reusables installation and configuration are correct.

```bash
npm run doctor
bun run doctor
pnpm doctor
yarn doctor
yarn@berry doctor
```

--------------------------------

### Initialize New Expo Project

Source: https://reactnativereusables.com/docs/installation/manual

Command to initialize a new Expo project for React Native Reusables.

```bash
npx init
```

--------------------------------

### Add Dependencies for React Native Reusables

Source: https://reactnativereusables.com/docs/installation/manual

List of dependencies to add to your project for React Native Reusables. This typically includes UI components and utility libraries.

```bash
npm install @rn-primitives/portal

```

--------------------------------

### Import Button Component in React Native

Source: https://reactnativereusables.com/docs/installation

Example of how to import and use the 'Button' component within a React Native application after installation.

```javascript
import { Button } from "react-native-reusables/components";

function MyComponent() {
  return <Button title="Click Me" onPress={() => console.log('Button pressed!')} />;
}
```

--------------------------------

### Configure Path Aliases in tsconfig.json

Source: https://reactnativereusables.com/docs/installation/manual

Sets up path aliases in `tsconfig.json` for easier module importing. The `@` alias is commonly used but can be customized.

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}

```

--------------------------------

### Update Metro Configuration for inlineRem

Source: https://reactnativereusables.com/docs/installation/manual

Modify `metro.config.js` to set the `inlineRem` value, which is part of Nativewind setup.

```javascript
/**
 * @type {import('expo/metro-config').MetroConfig}
 */
module.exports = {
  transformer: {
    unstable_allowRequireContext: true,
  },
  // Add this line
  inlineRem: true,
};

```

--------------------------------

### Install Components using CLI

Source: https://reactnativereusables.com/docs/create-your-own-registry

Shows how to install registry components using the command line interface. Both `shadcn` and `@react-native-reusables/cli` can be used with the full URL of the registry item.

```bash
npx shadcn add https://<YOUR_REGISTRY_URL>/<COMPONENT_NAME>
```

```bash
npx @react-native-reusables/cli add https://<YOUR_REGISTRY_URL>/<COMPONENT_NAME>
```

--------------------------------

### Add Theme Variables to theme.ts

Source: https://reactnativereusables.com/docs/installation/manual

Exports theme variables from a `theme.ts` file, likely for use within the React Native application's styling.

```typescript
export const theme = {
  colors: {
    background: '0 0% 100%',
    foreground: '222.2 84% 4.9%',
    // ... other colors
  },
  // ... other theme properties
};

```

--------------------------------

### Configure Tailwind CSS Variables

Source: https://reactnativereusables.com/docs/installation/manual

Integrates CSS variables into the `tailwind.config.js` file, allowing Tailwind to use custom theme values.

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        "2xl": '1400px',
      },
    },
    extend: {
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        // ... other colors
      },
      // ... other extend properties
    },
  },
  plugins: [require('tailwindcss-animate')],
};

```

--------------------------------

### Install React Native Reusables

Source: https://reactnativereusables.com/docs/components/collapsible

Instructions for installing the React Native Reusables library using various package managers like npm, bun, pnpm, and yarn. This step is necessary before using the Collapsible component.

```bash
npm install react-native-reusables
bun install react-native-reusables
pnpm install react-native-reusables
yarn add react-native-reusables
```

--------------------------------

### Initialize React Native Project with Reusables

Source: https://reactnativereusables.com/docs/installation

Command to create a new React Native project in the current directory using the 'react-native-reusables' CLI. Supports npm, bun, pnpm, and yarn package managers.

```bash
npm init react-native-reusables
bun create react-native-reusables
pnpm create react-native-reusables
yarn create react-native-reusables
yarn@berry create react-native-reusables
```

--------------------------------

### Check Setup with Doctor Command CLI

Source: https://reactnativereusables.com/docs/cli

Verifies if your React Native Reusables setup is correct. This command helps in debugging potential issues. It supports adding a log level for detailed output.

```bash
npx react-native-reusables doctor
```

```bash
bun create react-native-reusables doctor
```

```bash
pnpm create react-native-reusables doctor
```

```bash
yarn create react-native-reusables doctor
```

```bash
yarn@berry create react-native-reusables doctor
```

```bash
npx react-native-reusables doctor --log-level all
```

--------------------------------

### Install New Icon Component with CLI

Source: https://reactnativereusables.com/docs/changelog

Installs the new unified icon component using various package managers. This command replaces deprecated icon solutions.

```bash
npm install @rn-reusables/icon

bun add @rn-reusables/icon

pnpm add @rn-reusables/icon

yarn add @rn-reusables/icon

yarn@berry add @rn-reusables/icon
```

--------------------------------

### Install Sign in Form Component (npm, bun, pnpm, yarn)

Source: https://reactnativereusables.com/docs/blocks/authentication/sign-in-form

Instructions for installing the Sign In Form component using various package managers. This component is designed to be imported directly into your React Native application.

```npm
npm install @clerk/clerk-react
```

```bun
bun add @clerk/clerk-react
```

```pnpm
pnpm add @clerk/clerk-react
```

```yarn
yarn add @clerk/clerk-react
```

```yarn@berry
yarn add @clerk/clerk-react
```

--------------------------------

### Add CSS Variables to CSS File

Source: https://reactnativereusables.com/docs/installation/manual

Defines CSS variables in a CSS file, typically used for theming in Tailwind CSS configurations.

```css
:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  /* ... other variables */
}

```

--------------------------------

### Button Component Examples (Web)

Source: https://reactnativereusables.com/docs/components/button

Demonstrates various predefined variants of the Button component for web platforms, including primary, secondary, destructive, outline, ghost, link, icon, and loading states. These examples showcase the visual appearance and basic functionality.

```jsx
/* Primary */
<Button>Button</Button>

/* Secondary */
<Button variant="secondary">Secondary</Button>

/* Destructive */
<Button variant="destructive">Destructive</Button>

/* Outline */
<Button variant="outline">Outline</Button>

/* Ghost */
<Button variant="ghost">Ghost</Button>

/* Link */
<Button variant="link">Link</Button>

/* Icon */
<Button variant="icon" aria-label="Search">
  <SearchIcon />
</Button>

/* With Icon */
<Button variant="secondary" leftIcon={<LoginIcon />} rightIcon={<ArrowRightIcon />}>
  Login with Email
</Button>

/* Loading */
<Button isLoading>
  Please wait
</Button>
```

--------------------------------

### Add Button Component to React Native Project

Source: https://reactnativereusables.com/docs/installation

Command to add the 'Button' component to an existing React Native project using the 'react-native-reusables' CLI. Supports npm, bun, pnpm, and yarn package managers.

```bash
npm install react-native-reusables
bun add react-native-reusables
pnpm add react-native-reusables
yarn add react-native-reusables
yarn@berry add react-native-reusables
```

--------------------------------

### Add cn Helper Function

Source: https://reactnativereusables.com/docs/installation/manual

A utility function `cn` (often for 'classnames') used to conditionally join CSS class names, commonly used with Tailwind CSS in React Native.

```typescript
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

```

--------------------------------

### Install ResetPasswordForm Component

Source: https://reactnativereusables.com/docs/blocks/authentication/reset-password-form

Instructions for installing the ResetPasswordForm component using various package managers like npm, bun, pnpm, and yarn. This component is designed for React Native applications.

```bash
npm install
bun install
pnpm install
yarn install
yarn@berry install
```

--------------------------------

### Displaying Simple Text - React Native

Source: https://reactnativereusables.com/docs/components/text

A basic example of using the Text component to display a simple string. This is the foundational usage of the component.

```jsx
function App() {
  return (
    <Text>Hello, world!</Text>
  );
}
```

--------------------------------

### Typography Examples - React Native

Source: https://reactnativereusables.com/docs/components/text

Demonstrates various typography styles and headings using the Text component. Shows how to structure content with different levels of emphasis.

```jsx
# The Rainbow Forest Adventure

Once upon a time, in a magical forest, there lived a curious rabbit named Whiskers. Whiskers loved exploring and discovering new things every day.

## Whiskers' Discovery

One day, while hopping through the forest, Whiskers stumbled upon a mysterious rainbow-colored flower. The flower had the power to make the forest come alive with vibrant colors and happy creatures.

> "Oh, what a wonderful discovery!" exclaimed Whiskers. "I must share this magic with all my forest friends!"

### The Colorful Transformation

Whiskers excitedly gathered all the animals in the forest and showed them the magical rainbow flower. The animals were amazed and decided to plant more of these flowers to make their home even more magical.

As the rainbow flowers bloomed, the entire forest transformed into a kaleidoscope of colors. Birds chirped in harmony, butterflies danced in the air, and even the trees swayed to the rhythm of the wind.

### The Enchanted Celebration

The animals decided to celebrate their enchanted forest with a grand feast. They gathered nuts, berries, and fruits from the colorful trees and shared stories of their adventures. The joyous laughter echoed through the Rainbow Forest.

And so, the Rainbow Forest became a place of wonder and happiness, where Whiskers and all the animals lived together in harmony.

### The Never-ending Magic

The magic of the rainbow flowers continued to spread, reaching other parts of the world. Soon, forests everywhere became vibrant and alive, thanks to the discovery of Whiskers and the enchanted Rainbow Forest.

The moral of the story is: embrace the magic of discovery, share joy with others, and watch as the world transforms into a colorful and beautiful place.
```

--------------------------------

### Upgrade Project with Doctor Command

Source: https://reactnativereusables.com/docs/changelog

Provides instructions to run the `doctor` command to diagnose and fix project configuration and setup issues during upgrades. Multiple package managers are supported.

```bash
npx doctor

bunx doctor

pnpm doctor

yarn doctor

yarn@berry doctor
```

--------------------------------

### Initialize Expo Project with CLI

Source: https://reactnativereusables.com/docs/cli

Scaffolds a new Expo project using a specified template. Supports minimal and clerk-auth templates. Available package managers include npm, bun, pnpm, yarn, and yarn@berry.

```bash
npx react-native-reusables init <template-name>
```

```bash
bun create react-native-reusables init <template-name>
```

```bash
pnpm create react-native-reusables init <template-name>
```

```bash
yarn create react-native-reusables init <template-name>
```

```bash
yarn@berry create react-native-reusables init <template-name>
```

--------------------------------

### Configure CLI Scaffolding with components.json

Source: https://reactnativereusables.com/docs/customization

The `components.json` file is used by the CLI to scaffold components with the correct paths and style. It's typically left unchanged unless you need to modify file paths or switch styling approaches.

```json
{
  "$schema": "https://ui.shadcn.com/schemas/components.json",
  "style": "default",
  "typescript": true,
  "tailwind": {
    "config": "tailwind.config.ts",
    "css": "src/global.css",
    "baseColor": "zinc",
    "cssVariables": true
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils"
  }
}
```

--------------------------------

### Add React Native Reusables Components with CLI

Source: https://reactnativereusables.com/docs/cli

Adds React Native Reusables components to your project. This command leverages the shadcn CLI internally. It supports various package managers for integration.

```bash
npx react-native-reusables add
```

```bash
bun create react-native-reusables add
```

```bash
pnpm create react-native-reusables add
```

```bash
yarn create react-native-reusables add
```

```bash
yarn@berry create react-native-reusables add
```

--------------------------------

### Define Light and Dark Themes with CSS Variables in global.css

Source: https://reactnativereusables.com/docs/customization

The `global.css` file defines your project's light and dark themes using CSS variables. Tailwind CSS classes like `bg-background` and `text-foreground` reference these variables for styling. Ensure compatibility with Nativewind by using `.dark:root` for dark mode.

```css
:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  /* ... other light theme variables */
}

.dark {
  --background: 222.2 84% 4.9%;
  --foreground: 222.2 84% 4.9%;
  /* ... other dark theme variables */
}
```

--------------------------------

### Update Components with Add Command

Source: https://reactnativereusables.com/docs/changelog

Command to update existing components by re-scaffolding them with the `--overwrite` flag. It's recommended to commit changes before running and to review diffs afterward. Supports multiple package managers.

```bash
npx add --overwrite [component-name]

bunx add --overwrite [component-name]

pnpm add --overwrite [component-name]

yarn add --overwrite [component-name]

yarn@berry add --overwrite [component-name]
```

--------------------------------

### Add Registry Dependency in registry-item.json

Source: https://reactnativereusables.com/docs/create-your-own-registry

Demonstrates how to specify React Native Reusables as a dependency in your `registry-item.json` file. This requires using the full URL of the registry item instead of short names.

```json
{
  "name": "<COMPONENT_NAME>",
  "registryDependencies": [
    "https://<YOUR_REGISTRY_URL>/<COMPONENT_NAME>"
  ]
}
```

--------------------------------

### Standardize REM to Match Web

Source: https://reactnativereusables.com/docs/changelog

Configures Metro bundler to standardize REM units to 16px, aligning React Native Reusables with web sizing conventions. This is done by modifying the metro.config.js file.

```javascript
/**
 * @type {import('@react-native/metro-config').MetroConfig}
 */
const config = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
  },
  // Add this line:
  resolver: {
    inlineRem: 16
  }
};

module.exports = config;
```

--------------------------------

### Use Text Component Variants

Source: https://reactnativereusables.com/docs/changelog

Demonstrates how to use the `variant` prop on the `Text` component for built-in typography styles, replacing deprecated Typography components. Various variants are available.

```javascript
import { Text } from "@rn-reusables/core";

function MyComponent() {
  return (
    <>
      <Text variant="h1">This is a heading 1</Text>
      <Text variant="p">This is a paragraph.</Text>
      <Text variant="code">This is inline code.</Text>
      <Text variant="muted">This text is muted.</Text>
    </>
  );
}
```

--------------------------------

### Connect Tailwind Classes to CSS Variables in tailwind.config.ts

Source: https://reactnativereusables.com/docs/customization

The `tailwind.config.ts` file configures Tailwind CSS to map utility classes (e.g., `bg-card`, `text-muted`) to the CSS variables defined in `global.css`. It also handles dark mode selector, plugins, and animations.

```typescript
import type { Config } from 'tailwindcss';

const config = {
  darkMode: ['class'],
  content: [
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        /* ... other extended colors */
      },
      borderRadius: {
        lg: 'var(--radius) # ...',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;

export default config;
```

--------------------------------

### Button Link Variants (Web)

Source: https://reactnativereusables.com/docs/components/button

Shows how to create link elements that visually resemble buttons using `buttonVariants` and `buttonTextVariants` helper functions, or by nesting a link component with the `asChild` prop. This allows for consistent styling of navigation elements.

```jsx
import { buttonVariants } from '@/components/ui/button';

// Using helper functions
<a
  href="#"
  className={buttonVariants({
    variant: 'link',
    size: 'lg',
  })}
>
  Link using helper
</a>

// Using asChild prop
<Button asChild variant="link">
  <a href="#">Link using asChild</a>
</Button>
```

--------------------------------

### Export Theme Colors as TypeScript Object in theme.ts

Source: https://reactnativereusables.com/docs/customization

The `theme.ts` file exports the CSS variables from `global.css` as a TypeScript object, making them accessible for use in application logic, inline styles, or animations. It also includes `NAV_THEME` for the `ThemeProvider`.

```typescript
export const THEME = {
  light: {
    colors: {
      border: '0.5 1% 25%',
      input: '0.5 1% 25%',
      ring: '12 100% 50%',
      background: '0 0% 100%',
      foreground: '222.2 84% 4.9%',
      primary: {
        DEFAULT: '191.8 100% 50%',
        foreground: '222.2 47.4% 11.2%',
      },
      /* ... other light theme colors */
    },
    // ... other light theme properties
  },
  dark: {
    colors: {
      border: '216 3.8% 16.1%',
      input: '216 3.8% 16.1%',
      ring: '12 100% 50%',
      background: '216 3.8% 16.1%',
      foreground: '216 3.8% 16.1%',
      primary: {
        DEFAULT: '191.8 100% 50%',
        foreground: '216 3.8% 16.1%',
      },
      /* ... other dark theme colors */
    },
    // ... other dark theme properties
  },
  // ... NAV_THEME
};

export type ThemeColors = typeof THEME.light.colors;
export type Theme = typeof THEME;
```

--------------------------------

### Badge Component Variants (React Native)

Source: https://reactnativereusables.com/docs/components/badge

Demonstrates the usage of `badgeVariants` and `badgeTextVariants` helper functions to create different styles of badges. These functions allow for easy customization of badge appearance, such as secondary, destructive, outline, and verified states.

```javascript
import {
  badgeVariants,
  badgeTextVariants,
} from "@react-native-reusables/core";

// Example usage for a link that looks like a badge
<Link style={badgeVariants({ variant: "secondary" }) } >
  <Text style={badgeTextVariants({ variant: "secondary" }) }>
    Secondary Badge
  </Text>
</Link>

<Link style={badgeVariants({ variant: "destructive" }) } >
  <Text style={badgeTextVariants({ variant: "destructive" }) }>
    Destructive Badge
  </Text>
</Link>

<Link style={badgeVariants({ variant: "outline" }) } >
  <Text style={badgeTextVariants({ variant: "outline" }) }>
    Outline Badge
  </Text>
</Link>

<Link style={badgeVariants({ variant: "verified" }) } >
  <Text style={badgeTextVariants({ variant: "verified" }) }>
    Verified Badge
  </Text>
</Link>

// Displaying numerical badges
<View>
  <Text style={badgeTextVariants({ color: "primary" }) }>{8}</Text>
  <Text style={badgeTextVariants({ color: "secondary" }) }>{99}</Text>
  <Text style={badgeTextVariants({ color: "destructive" }) }>{20 +}</Text>
</View>
```

=== COMPLETE CONTENT === This response contains all available snippets from this library. No additional content exists. Do not make further requests.