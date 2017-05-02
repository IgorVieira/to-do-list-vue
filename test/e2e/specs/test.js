// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  'default e2e tests': function (browser) {
    // automatically uses dev Server port from /config.index.js
    // default: http://localhost:8080
    // see nightwatch.conf.js
    const devServer = browser.globals.devServerURL

    browser
      .url(devServer)
      .assert.title('To do List!')
      .pause(1000)
      .assert.containsText('h1', 'Hey')
      .assert.elementCount('li', 3)
      .setValue('input[type=text]', 'Make a coffee')
      .setValue('input[type=checkbox]', true)
      .click('button[name=add]')
      .pause(2000)
      .assert.elementCount('li', 4)
      .end()
  }
}
