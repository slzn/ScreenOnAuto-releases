(function () {
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  document.querySelectorAll('.carousel').forEach(function (root) {
    var track = root.querySelector('.carousel-track');
    var slides = Array.prototype.slice.call(track.children);
    var nav = root.querySelector('.carousel-nav');
    if (slides.length < 2) { if (nav) nav.hidden = true; return; }

    var dotsBox = nav.querySelector('.carousel-dots');
    var dotLabel = root.getAttribute('data-dot-label') || 'Screenshot %d';
    var dots = slides.map(function (_, i) {
      var b = document.createElement('button');
      b.type = 'button';
      b.className = 'carousel-dot';
      b.setAttribute('aria-label', dotLabel.replace('%d', i + 1));
      b.addEventListener('click', function () { goTo(i); restart(); });
      dotsBox.appendChild(b);
      return b;
    });

    var index = 0;
    function mark(i) {
      index = i;
      dots.forEach(function (d, j) { d.classList.toggle('active', j === i); });
    }
    function goTo(i) {
      i = (i + slides.length) % slides.length;
      track.scrollTo({ left: i * track.clientWidth, behavior: reduce ? 'auto' : 'smooth' });
      mark(i);
    }
    nav.querySelector('.prev').addEventListener('click', function () { goTo(index - 1); restart(); });
    nav.querySelector('.next').addEventListener('click', function () { goTo(index + 1); restart(); });

    var settle;
    track.addEventListener('scroll', function () {
      clearTimeout(settle);
      settle = setTimeout(function () {
        mark(Math.round(track.scrollLeft / track.clientWidth));
      }, 80);
    }, { passive: true });
    window.addEventListener('resize', function () {
      track.scrollTo({ left: index * track.clientWidth, behavior: 'auto' });
    });

    // autoplay: advance every 6 s; hold while hovered/focused/touched or tab hidden
    var hold = false, timer = null;
    function start() {
      if (reduce || timer) return;
      timer = setInterval(function () {
        if (!hold && !document.hidden) goTo(index + 1);
      }, 6000);
    }
    function restart() {
      if (timer) { clearInterval(timer); timer = null; }
      start();
    }
    ['mouseenter', 'focusin', 'touchstart', 'pointerdown'].forEach(function (ev) {
      root.addEventListener(ev, function () { hold = true; }, { passive: true });
    });
    ['mouseleave', 'focusout'].forEach(function (ev) {
      root.addEventListener(ev, function () { hold = false; });
    });

    mark(0);
    start();
  });
})();
