import { test, expect } from '@playwright/test'  // testとexpectをインポート

test.beforeEach(async ({ page }) => { // テストの前に実行する処理
  await page.goto('/station1.html') // テスト対象のページに移動する
})

test('<ul>が存在する', async ({ page }) => { // テストの実行
  await expect(page).toHaveSelector('ul') // expectはテストの期待値を設定する
}) // toHaveSelectorは指定したセレクタが存在するかを確認する

test('<li>で囲われた「りんご」、「ばなな」、「ぶどう」がそれぞれ表示されている', async ({ page }) => {  
  const list = await page.$$('li') // $$は指定したセレクタに一致する要素を全て取得する
  await expect(list[0]).toHaveText('りんご') // toHaveTextは指定した要素のテキストが一致するかを確認する
  await expect(list[1]).toHaveText('ばなな')
  await expect(list[2]).toHaveText('ぶどう')
}
)