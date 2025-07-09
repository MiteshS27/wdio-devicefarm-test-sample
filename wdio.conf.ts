import { config as baseConfig } from './wdio.shared.conf';

export const config: WebdriverIO.Config = {
  ...baseConfig,
  services: ['appium'],
  capabilities: [
    {
      platformName: 'Android',
      'appium:platformVersion': '12.0',
      'appium:deviceName': 'Android Device',
      'appium:automationName': 'UiAutomator2',
      'appium:app': '/tmp/app-debug.apk',
      'appium:noReset': true
    }
  ]
};