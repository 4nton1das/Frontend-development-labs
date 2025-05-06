function progressBar(percent) {
    const completed = "%".repeat(percent / 10);
    const incomplete = ".".repeat(10 - (percent / 10));
  
    if (percent === 100) {
      console.log("100% Complete!");
      console.log(`[${completed}]`);
    } else {
      console.log(`${percent}% [${completed}${incomplete}]`);
      console.log("Still loading...");
    }
  }

progressBar(30);
progressBar(50);
progressBar(100);
