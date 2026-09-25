// @ts-check
import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

//New - Created respoistory
//Copy url
//Local folder - created a folder
//Right click - git bash within that folder
//git clone copied url
//opend the downloaded folder and open git bash within that folder - (main) can be seen
//Added the folder to VS code
//Installed playwright within that folder - all files in U status
//In git bash, git status
//git add filepath or git add .
//git status to confirm all files are added
//git commit -m "Message"
//git push
//create new branch in git hub
//In git bash, git pull
//git checkout <new_branch_name>
