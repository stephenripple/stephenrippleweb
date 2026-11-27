# stephenripple.com

Personal site for Stephen Ripple, built with [Astro](https://astro.build) and served from S3.

## Develop

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # static output in dist/
```

## Edit content

Almost everything on the page lives in `src/data/profile.ts` — experience, lab projects,
credentials, contact. Layout is in `src/pages/index.astro`; the raked-garden hero is
`src/components/RakedGarden.astro`.

Contact details are stored reversed + base64 in `profile.ts` and assembled in the browser,
so they don't appear as plain text in the HTML.

## Deploy

Pushes to `master` build the site and sync `dist/` to the S3 bucket behind CloudFront
(`.github/workflows/deploy.yml`). The workflow signs in to AWS with GitHub's OIDC token,
so no AWS keys are stored in GitHub. The IAM role it uses can only write to the site
bucket and clear its CloudFront cache.

### One-time setup

1. **AWS:** in CloudFormation, create a stack from `infra/github-deploy-role.yaml`
   (region doesn't matter; IAM is global). Fill in the CloudFront distribution ID. Set
   `CreateOIDCProvider` to `false` if IAM → Identity providers already lists
   `token.actions.githubusercontent.com`. Copy the `RoleArn` output.
2. **GitHub:** Settings → Environments → create `production`. Optionally restrict it to the
   `master` branch.
3. **GitHub:** Settings → Secrets and variables → Actions → Variables, add:
   - `AWS_ROLE_ARN`: the role ARN from step 1
   - `S3_BUCKET`: `www.stephenripple.com`
   - `CLOUDFRONT_DISTRIBUTION_ID`: the distribution ID
4. **First run:** Actions → Deploy → Run workflow with *dry run* checked. The log lists
   every file it would upload or delete. If it looks right, run it again unchecked.
5. **Turn on automatic deploys:** add the variable `DEPLOY_ON_PUSH` = `true`.
