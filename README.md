# Next.js + Tailwind CSS + Prettier Setup

A modern React development setup with Next.js 16, Tailwind CSS v4, TypeScript, and Prettier for optimal developer experience.

## 🚀 Features

- **Next.js 16** - Latest version with App Router
- **Tailwind CSS v4** - Latest version with new architecture
- **TypeScript** - Type-safe development
- **Prettier** - Code formatting
- **ESLint** - Code linting with Prettier integration
- **VS Code** - Optimized settings and extensions

## 📦 Installation

The project is already set up! Just install dependencies:

```bash
npm install
```

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors automatically
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check if code is formatted
- `npm run type-check` - Run TypeScript type checking

## 🎨 Development

### VS Code Setup

The project includes VS Code settings for optimal development:

- **Auto-format on save** with Prettier
- **Auto-fix ESLint errors** on save
- **Tailwind CSS IntelliSense** support
- **TypeScript** auto-imports

Recommended extensions are listed in `.vscode/extensions.json`.

### Code Quality

- **ESLint** - Configured with Next.js, TypeScript, and Prettier rules
- **Prettier** - Consistent code formatting
- **TypeScript** - Type safety and better IDE support

### Tailwind CSS v4

This project uses Tailwind CSS v4 with the new architecture:

- Configuration is done in `src/app/globals.css`
- No separate config file needed
- Enhanced performance and features

## 🏗️ Project Structure

```
src/
├── app/
│   ├── globals.css      # Tailwind CSS imports and custom styles
│   ├── layout.tsx       # Root layout component
│   └── page.tsx         # Home page
├── components/          # Reusable components (create as needed)
└── lib/                 # Utility functions (create as needed)
```

## 🚀 Getting Started

1. **Start development server:**

   ```bash
   npm run dev
   ```

2. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

3. **Start coding:**
   - Edit `src/app/page.tsx` to modify the home page
   - Add components in `src/components/`
   - Add utilities in `src/lib/`

## 📝 Code Formatting

The project is configured to automatically format code on save in VS Code. You can also format manually:

```bash
npm run format
```

## 🔧 Configuration Files

- `.prettierrc` - Prettier configuration
- `.prettierignore` - Files to ignore when formatting
- `eslint.config.js` - ESLint configuration
- `.vscode/settings.json` - VS Code workspace settings
- `.vscode/extensions.json` - Recommended VS Code extensions

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)
- [Prettier Documentation](https://prettier.io/docs/en/)

## 🤝 Contributing

1. Make sure code is formatted: `npm run format`
2. Fix any linting issues: `npm run lint:fix`
3. Check types: `npm run type-check`
4. Test your changes: `npm run dev`

Happy coding! 🎉
