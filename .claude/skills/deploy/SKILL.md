---
name: deploy
description: Deploy the application by running tests, building production bundle, and pushing to staging
---

# Deploy Skill

## Steps

1. **Run all tests first**

   ```bash
   npm test
   ```

   - If tests fail, stop and report the failures
   - Do not proceed to build if tests fail

2. **Build the production bundle**

   ```bash
   npm run build
   ```

   - Verify the build completes successfully
   - Check that the `dist/` directory is created with the bundled assets

3. **Push to staging area**
   - Commit any changes if needed
   - Push the build artifacts or deploy to the staging environment

## Notes

- Always run tests before building to catch issues early
- If the build fails, check for compilation errors or warnings
- The staging deployment target should be configured based on the project's deployment setup
