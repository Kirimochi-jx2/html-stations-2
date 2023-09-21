
// 「リストを作ろう！」 - HTML List
//りんご・ばなな・ぶどうをリスト表示できている。
// 1. <ul>が存在する
// 2. <li>で囲われた「りんご」、「ばなな」、「ぶどう」がそれぞれ表示されている

// import { test, expect } from "@playwright/test";

// test("リストを作ろう！", async ({ page }) => { // 1. <ul>が存在する
//   await page.goto("https://playwright.dev/");
//   const list = await page.$("ul");
//   expect(list).toBeTruthy();
// }
// );

// test("リストを作ろう！", async ({ page }) => { // 2. <li>で囲われた「りんご」、「ばなな」、「ぶどう」がそれぞれ表示されている
//   await page.goto("https://playwright.dev/");
//   const list = await page.$$("li");
//   expect(list[0]).toHaveText("りんご");
//   expect(list[1]).toHaveText("ばなな");
//   expect(list[2]).toHaveText("ぶどう");
// }
// );

import { test, expect } from '@playwright/test'  // testとexpectをインポート

test.beforeEach(async ({ page }) => { // テストの前に実行する処理
  await page.goto('/station1.html') // テスト対象のページに移動する
})

test('<ul>が存在する', async ({ page }) => { // テストの実行
  await expect(page).toHaveSelector('ul') // expectはテストの期待値を設定する
}) // toHaveSelectorは指定したセレクタが存在するかを確認する

test('<li>で囲われた「りんご」、「ばなな」、「ぶどう」がそれぞれ表示されている', async ({ // テストの実行
  page, // pageはブラウザのページ
}) => { 
  // ul > li は ulの子要素のliを取得するセレクタ
  const lis = await page.$$('ul > li') // $$は複数の要素を取得する
  const names = ['りんご', 'ばなな', 'ぶどう'] // 期待する名前
  const liTexts = await Promise.all(lis.map(li => li.textContent())) // mapは配列の要素を変換する

  names.forEach(name => { // forEachは配列の要素を順番に処理する
    expect(liTexts).toContain(name) // expectはテストの期待値を設定する
  })
})
