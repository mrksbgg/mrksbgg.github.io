function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function dynamicTitle() {
  let index = 0;
  const url = "https://mrksbgg.ru/old";
  const localurl = "http://localhost:5500/old/";
  const localurlindex = "http://localhost:5500/old/index.html";
  let titles;

  if (document.title === "ты потерялся.") {
    titles = ["где я?", "ты потерялся."];
  } else if (window.location.href === url) {
    titles = ["mrksbgg", "mrksbgg >.<"];
  } else if (window.location.href === localurl || window.location.href === localurlindex) {
    titles = ["mrksbgg (localhost)", "mrksbgg (localhost)"];
  } else {
    titles = [document.title];
  }

  if (titles.length > 1) {
      while (true) {
        document.title = titles[index];
        await sleep(500);

        index++;

        if (index === titles.length) {
          index = 0;
        }
      }
  }
}
