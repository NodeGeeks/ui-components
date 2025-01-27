# Setup Instructions

1. First, build the root project:
```bash
cd ..
npm install
npm run build
```

2. Then, set up the example project:
```bash
cd example
rm -rf node_modules package-lock.json
npm install
npm run dev
```

The example project should now run without React-related compilation errors. If you encounter any issues, try the following troubleshooting steps:

1. Clear npm cache:
```bash
npm cache clean --force
```

2. Ensure all dependencies are properly linked:
```bash
npm link ../
```

3. Verify that the root project is built properly:
```bash
cd ..
npm run build
cd example
npm start
```