export const config: WebdriverIO.Config = {
  runner: 'local',
  framework: 'cucumber',
  specs: ['./test/features/**/*.feature'],
  cucumberOpts: {
    require: ['./test/step-definitions/**/*.ts'],
    timeout: 60000
  },
  reporters: ['spec'],
};