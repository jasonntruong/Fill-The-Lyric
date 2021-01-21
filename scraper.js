const puppeteer = require('puppeteer');

async function scrapeProduct(url) {

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);

    const[element] = await page.$x('//*[@id="content"]');

    const src = await element.getProperty('textContent');
    
    var srcStr = await src.jsonValue();

    await browser.close();
    
    srcStr = srcStr.split("\n");

    for (var i = 0; i < srcStr.length; i++){
        if (srcStr[i][0] == '[' || srcStr[i][0] == ' ' || srcStr[i] == ''){
          delete srcStr[i];
        }
      }

    srcStr = srcStr.filter(Boolean);

    console.log({srcStr});

    
};

scrapeProduct('https://www.lyricsfreak.com/k/kanye+west/fml_21106667.html');