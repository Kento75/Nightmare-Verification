import Nightmare from 'nightmare'
import assert from 'assert'

describe('E2E', () => {
  // true:  Electron を表示
  // false: Electron を非表示
  const nightmare = Nightmare({show: true})
  const URL = 'http://localhost:8080'

  after(function() {
    // runs after all tests in this block
  });

  it('アクセスしたら「Hello」と表示されていること', (done) => {
    nightmare
      .goto(URL)
      .wait(5000)
      .evaluate(() => {
        return document.getElementById('result').innerText
      })
      // end() を入れないと Electron ブラウザが閉じない
      .end()
      .then((text) => {
        assert.equal(text, 'Hello')
        done()
      })
  })
})