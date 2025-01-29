# How to Run the Example Project

## Quick Start

1. **Build the UI Components Library First:**
   ```bash
   # From the root directory
   npm install
   npm run build
   ```

2. **Install Example Dependencies:**
   ```bash
   # From the example directory
   cd example
   rm -rf node_modules package-lock.json  # Clean install recommended
   npm install
   ```

3. **Start the Development Server:**
   ```bash
   npm run dev
   ```

## Troubleshooting React Import Issues

If you see React-related compilation errors:

1. Verify the builds are clean:
   ```bash
   # In root directory
   rm -rf node_modules dist package-lock.json
   npm install
   npm run build

   # In example directory
   cd example
   rm -rf node_modules package-lock.json
   npm install
   ```

2. Check your Node.js version:
   - Recommended: Node.js 18.x or later
   - Run `node -v` to verify

3. Verify package.json settings:
   - Root project has React as peerDependency
   - Example project has correct local path to UI components
   - Next.js version is 14.x
   - React version is 18.x

4. Development Tips:
   - Always rebuild the root project after changes
   - Use `npm link` if needed for development
   - Clear npm cache if issues persist: `npm cache clean --force`