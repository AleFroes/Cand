function slider (target, images) {
  // (PART A) INITIALIZE SLIDESHOW
  target.current = 0;  // current slide
  target.timer = null; // slides timer
  target.delay = 5000; // slides delay
  target.classList.add("slides");

  // (PART B) DRAW SLIDESHOW
  let ready = () => {
    // (B1) WAIT FOR ALL IMAGES TO LOAD
    target.current++;
    if (target.current < images.length) { return; }

    // (B2) NEXT/LAST SLIDE
    target.scroller = direction => {
      // (B2-1) STOP TIMER
      clearTimeout(target.timer);

      // (B2-2) SHOW NEXT SLIDE
      if (direction) { target.current++; } else { target.current--; }
      if (target.current == -1) { target.current = images.length-1; }
      if (target.current >= images.length) { target.current = 0; }
      for (let [i,img] of Object.entries(images)) {
        img[2].className = i == target.current ? "show" : "" ;
      }

      // (B2-3) START TIMER
      target.timer = setTimeout(() => target.scroller(1), target.delay);
    };
    target.innerHTML = `<div class="last">&lt;</div><div class="next">&gt;</div>`;
    target.querySelector(".last").onclick = () => target.scroller();
    target.querySelector(".next").onclick = () => target.scroller(1);

    // (B3) ATTACH SLIDES
    for (let i of images) { target.appendChild(i[2]); }
    target.scroller(1);
  };

  // (PART C) START PRELOADING IMAGES
  for (let i of images) {
    i[2] = document.createElement("figure");
    i[2].innerHTML = `<img src="${i[0]}" decoding="async"><figcaption>${i[1]}</figcaption>`;
    i[2].querySelector("img").onload = ready;
  }
}