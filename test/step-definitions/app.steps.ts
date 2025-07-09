import { Given } from '@wdio/cucumber-framework';

Given('the app is launched', async () => {
  await driver.pause(3000);
  console.log('App launched successfully');
});