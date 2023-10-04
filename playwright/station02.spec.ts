import { expect, test } from '@playwright/test'


//  floatを使ってレイアウトを作ろう！」 - floatを使ってレイアウトを作ろう！ | CodeGrid

test.beforeEach(async ({ page }) => { // ❶
  await page.goto('/station2.html') // ❷
})

test('#redと#blueが横並びになっている', async ({ page }) => { // ❸
  const redFloat = await page.$eval('#red', el => getComputedStyle(el).float) // const redFloatは、#redのfloatの値を取得している
  const blueFloat = await page.$eval('#blue', el => getComputedStyle(el).float)　// const blueFloatは、#blueのfloatの値を取得している

  expect(redFloat).toBe('left')　// redFloatは、leftであることを期待している
  expect(blueFloat).toBe('left')　// blueFloatは、leftであることを期待している
})

test('横並びになっている#redと#blueの下に#greenが表示されている', async ({
  page,
}) => {
  const greenClear = await page.$eval( // greenClearは、#greenのclearの値を取得している
    '#green',
    el => getComputedStyle(el).clear, // clearは、要素の両側に浮動要素を許可しないことを指定するプロパティ
  )

  expect(greenClear).toBe('both') // greenClearは、bothであることを期待している
})