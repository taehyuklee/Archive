/* =========================================================================
   docs-toc.js — Documents 포스트 공용 사이드 목차(TOC) 컴포넌트
   - 모든 .docs-post 페이지에 드롭인. 스타일은 이 스크립트가 주입한다.
   - H2(.docs-h2) 를 목차로 만들고, 클릭 시 해당 섹션으로 스크롤.
   - 페이지네이션: .docs-post__body 에 data-paginate="true" data-per-page="N"
     이 있으면 H2 단위로 페이지를 나누고 목차 클릭 시 해당 페이지로 전환한다.
     (.docs-slides 원본 슬라이드는 페이지에서 제외되어 항상 맨 아래에 남는다)
   - 언어 탭(.docs-langtabs): 현재 보이는 .docs-lang 페인의 H2 로 목차를 만들고,
     탭 전환 시 다시 만든다. (탭형은 페이지네이션하지 않는다)
   - 섹션이 2개 미만이면 목차를 숨긴다. 넓은 화면(>1320px)에서만 표시.
   - 푸터가 보이면 목차를 페이드아웃해 겹침을 막는다.
   ========================================================================= */
(function () {
  'use strict';

  var STYLE_ID = 'docs-toc-style';
  function injectStyle() {
    if (document.getElementById(STYLE_ID)) return;
    var css = [
      'h2.docs-h2{scroll-margin-top:24px;}',
      '.docs-toc{position:fixed;top:132px;left:24px;box-sizing:border-box;',
      'width:calc((100% - 820px)/2 - 40px);max-width:240px;max-height:calc(100vh - 180px);',
      'overflow-y:auto;padding:4px 10px;border-left:2px solid #e6e9f1;z-index:40;',
      "font-family:'Montserrat','Noto Sans KR',sans-serif;transition:opacity .25s ease;}",
      '.docs-toc.is-hidden{opacity:0;pointer-events:none;}',
      ".docs-toc__title{font:800 11px/1 'Montserrat',sans-serif;letter-spacing:.13em;",
      'text-transform:uppercase;color:#94a3b8;margin:0 0 12px;padding-left:14px;}',
      '.docs-toc a{display:block;font-size:12.5px;line-height:1.35;color:#64748b;text-decoration:none;',
      'padding:6px 10px 6px 14px;margin:0 0 2px -2px;border-radius:0 7px 7px 0;cursor:pointer;',
      'border-left:2px solid transparent;transition:color .15s ease,background .15s ease,border-color .15s ease;}',
      '.docs-toc a:hover{color:#003B62;background:#f5f7fb;}',
      '.docs-toc a.is-active{color:#003B62;font-weight:700;background:#eef4fb;border-left-color:#0048A7;}',
      '@media (max-width:1320px){.docs-toc{display:none !important;}}',
      /* 모든 페이지 하단에 항상 보이는 얇은 출처 라인 */
      '.docs-source{margin:18px 0 0;padding:13px 16px;border-top:1px solid #eef1f6;',
      "font:500 12.5px/1.6 'Montserrat','Noto Sans KR',sans-serif;color:#64748b;text-align:center;}",
      '.docs-source strong{color:#334155;font-weight:700;}',
      '.docs-source a{color:#0048A7;text-decoration:none;white-space:nowrap;border-bottom:1px solid transparent;transition:border-color .15s ease;}',
      '.docs-source a:hover{border-bottom-color:#0048A7;}',
      /* Java 코드 문법 강조 (dark .docs-code 배경 기준) */
      '.docs-code .tok-com{color:#7186a3;font-style:italic;}',
      '.docs-code .tok-str{color:#9ece6a;}',
      '.docs-code .tok-ann{color:#e0af68;}',
      '.docs-code .tok-kw{color:#7aa2f7;}',
      '.docs-code .tok-typ{color:#5fd0c2;}',
      '.docs-code .tok-num{color:#ff9e64;}'
    ].join('');
    var s = document.createElement('style');
    s.id = STYLE_ID;
    s.textContent = css;
    document.head.appendChild(s);
  }

  function paginate(body, perPage) {
    var slides = body.querySelector('.docs-slides');
    var source = body.querySelector('.docs-source');
    var kids = [].slice.call(body.children);
    var pages = [], inPage = 0, cur = document.createElement('div');
    cur.className = 'docs-page';
    kids.forEach(function (n) {
      if (n === slides || n === source) return;  // 페이지에 넣지 않고 항상 보이게 둠
      if (n.tagName === 'H2') {
        if (inPage >= perPage && cur.childNodes.length) {
          pages.push(cur);
          cur = document.createElement('div');
          cur.className = 'docs-page';
          inPage = 0;
        }
        inPage++;
      }
      cur.appendChild(n);
    });
    if (cur.childNodes.length) pages.push(cur);
    pages.forEach(function (p) { body.insertBefore(p, slides || null); });
    return { pages: pages, slides: slides };
  }

  // --- 가벼운 다국어(java·bash·python·gradle·yaml·json) 문법 강조 ---
  var KW = {
    java: /^(public|private|protected|static|final|class|interface|enum|void|new|return|this|super|extends|implements|import|package|abstract|throws|try|catch|finally|if|else|for|while|do|switch|case|break|continue|null|true|false|instanceof|boolean|int|long|double|float|char|byte|short)$/,
    python: /^(def|class|return|import|from|as|if|elif|else|for|while|in|is|not|and|or|None|True|False|with|try|except|finally|raise|lambda|yield|pass|break|continue|global|nonlocal|assert|del|async|await|self)$/,
    bash: /^(sudo|apt|apt-get|yum|dnf|cd|ls|pwd|mkdir|rmdir|rm|cp|mv|cat|less|more|echo|printf|grep|awk|sed|find|chmod|chown|chgrp|ln|tar|gzip|gunzip|zip|unzip|wget|curl|ssh|scp|systemctl|service|export|source|alias|kill|ps|top|df|du|free|mount|umount|ifconfig|ip|ping|netstat|ss|crontab|vi|vim|nano|man|sudo|touch|head|tail|wc|sort|uniq|xargs|which|whereis|history|reboot|shutdown|useradd|usermod|passwd|groupadd|lsblk|fdisk|mkfs|lvcreate|vgcreate|pvcreate|mongo|mongodump|mongorestore|rs)$/,
    gradle: /^(plugins|id|group|version|java|sourceCompatibility|repositories|mavenCentral|dependencies|implementation|api|runtimeOnly|compileOnly|annotationProcessor|testImplementation|testRuntimeOnly|developmentOnly|ext|set|dependencyManagement|imports|mavenBom|tasks|named|useJUnitPlatform)$/,
    js: /^(var|let|const|function|return|if|else|for|while|do|switch|case|break|continue|new|this|typeof|instanceof|in|of|null|true|false|undefined|class|extends|super|import|export|from|default|async|await|try|catch|finally|throw|delete|void|yield)$/
  };
  KW.groovy = KW.gradle;
  function escHtml(s) { return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }
  function span(c, s) { return '<span class="' + c + '">' + escHtml(s) + '</span>'; }
  var SLASH = { java: 1, gradle: 1, groovy: 1, js: 1 };   // // 주석 계열 (그 외 bash/python 은 # 주석)
  function buildRe(lang) {
    var comment = SLASH[lang] ? '\\/\\/[^\\n]*|\\/\\*[\\s\\S]*?\\*\\/' : '#[^\\n]*';
    var string = (lang === 'python')
      ? '"""[\\s\\S]*?"""|\'\'\'[\\s\\S]*?\'\'\'|"(?:\\\\.|[^"\\\\])*"|\'(?:\\\\.|[^\'\\\\])*\''
      : '"(?:\\\\.|[^"\\\\])*"|\'(?:\\\\.|[^\'\\\\])*\'';
    var special = (lang === 'bash') ? '\\$\\{?\\w+\\}?' : '@\\w+';   // bash 변수 / java·python 애너테이션·데코레이터
    var num = '\\b\\d[\\d._]*[A-Za-z]*\\b';
    var ident = '[A-Za-z_$][A-Za-z0-9_$]*';
    return new RegExp('(' + comment + ')|(' + string + ')|(' + special + ')|(' + num + ')|(' + ident + ')', 'g');
  }
  function highlightCodeGeneral(code, lang) {
    var src = code.textContent, kw = KW[lang], re = buildRe(lang);
    var out = '', last = 0, m;
    while ((m = re.exec(src))) {
      out += escHtml(src.slice(last, m.index));
      last = re.lastIndex;
      if (m[1]) out += span('tok-com', m[1]);
      else if (m[2]) out += span('tok-str', m[2]);
      else if (m[3]) out += span('tok-ann', m[3]);
      else if (m[4]) out += span('tok-num', m[4]);
      else if (m[5]) {
        var w = m[5];
        if (kw && kw.test(w)) out += span('tok-kw', w);
        else if (lang !== 'bash' && lang !== 'gradle' && /^[A-Z]/.test(w)) out += span('tok-typ', w);
        else out += escHtml(w);
      }
    }
    out += escHtml(src.slice(last));
    code.innerHTML = out;
  }
  function highlightYaml(code) {
    var src = code.textContent, out = '', last = 0, m;
    // 주석 / 문자열 / 키(콜론 앞) / 불린·null / 숫자
    var re = /(#[^\n]*)|("(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*')|([A-Za-z_][\w.$/-]*)(?=\s*:(?:\s|$))|\b(true|false|null|yes|no|on|off)\b|(\b\d[\d.]*\b)/g;
    while ((m = re.exec(src))) {
      out += escHtml(src.slice(last, m.index));
      last = re.lastIndex;
      if (m[1]) out += span('tok-com', m[1]);
      else if (m[2]) out += span('tok-str', m[2]);
      else if (m[3]) out += span('tok-kw', m[3]);
      else if (m[4]) out += span('tok-ann', m[4]);
      else if (m[5]) out += span('tok-num', m[5]);
    }
    out += escHtml(src.slice(last));
    code.innerHTML = out;
  }
  function highlightJson(code) {
    var src = code.textContent, out = '', last = 0, m;
    // 문자열-키(+콜론) / 문자열-값 / 불린·null / 숫자 / 식별자(ObjectId·ISODate 등)
    var re = /("(?:\\.|[^"\\])*")(\s*:)|("(?:\\.|[^"\\])*")|\b(true|false|null)\b|(-?\b\d[\d.eE+-]*\b)|([A-Za-z_$][\w$]*)/g;
    while ((m = re.exec(src))) {
      out += escHtml(src.slice(last, m.index));
      last = re.lastIndex;
      if (m[1]) out += span('tok-kw', m[1]) + escHtml(m[2]);
      else if (m[3]) out += span('tok-str', m[3]);
      else if (m[4]) out += span('tok-ann', m[4]);
      else if (m[5]) out += span('tok-num', m[5]);
      else if (m[6]) out += span('tok-typ', m[6]);
    }
    out += escHtml(src.slice(last));
    code.innerHTML = out;
  }
  function highlightCode(code, lang) {
    if (lang === 'yaml' || lang === 'properties') return highlightYaml(code);
    if (lang === 'json') return highlightJson(code);
    return highlightCodeGeneral(code, lang);
  }
  function langOf(code) {
    var raw = code.getAttribute('data-lang') || '';
    var cls = (code.className || '').match(/(?:language|lang)-([a-z]+)/i);
    raw = (raw || (cls && cls[1]) || '').toLowerCase();
    if (raw === 'shell' || raw === 'sh' || raw === 'console' || raw === 'zsh') return 'bash';
    if (raw === 'py') return 'python';
    if (raw === 'yml') return 'yaml';
    if (raw === 'javascript' || raw === 'js') return 'js';
    var ok = { java:1, bash:1, python:1, gradle:1, groovy:1, yaml:1, properties:1, json:1, js:1 };
    return ok[raw] ? raw : null;
  }
  function highlightJavaAll(root) {   // 이름은 유지하되 모든 지원 언어를 처리
    var codes = (root || document).querySelectorAll('.docs-code code');
    codes.forEach(function (c) {
      var lang = langOf(c);
      if (lang) { try { highlightCode(c, lang); } catch (e) {} }
    });
  }

  function init() {
    var post = document.querySelector('.docs-post');
    if (!post) return;
    var body = post.querySelector('.docs-post__body');
    if (!body) return;

    var hasTabs = !!body.querySelector('.docs-langtabs');
    var doPaginate = (body.getAttribute('data-paginate') === 'true') && !hasTabs;
    var perPage = parseInt(body.getAttribute('data-per-page'), 10) || 3;

    injectStyle();

    var pages = null, idx = 0, prev, next, ctr;

    if (doPaginate) {
      var res = paginate(body, perPage);
      pages = res.pages;
      if (pages.length < 2) { doPaginate = false; pages = null; }
    }

    if (doPaginate) {
      var nav = document.createElement('div');
      nav.className = 'docs-pagenav';
      prev = document.createElement('button');
      prev.className = 'docs-pagebtn'; prev.type = 'button'; prev.textContent = '← 이전';
      ctr = document.createElement('span'); ctr.className = 'docs-pagecounter';
      next = document.createElement('button');
      next.className = 'docs-pagebtn'; next.type = 'button'; next.textContent = '다음 →';
      nav.appendChild(prev); nav.appendChild(ctr); nav.appendChild(next);
      var slides = body.querySelector('.docs-slides');
      if (slides) body.insertBefore(nav, slides); else body.appendChild(nav);
      prev.addEventListener('click', function () { go(idx - 1); });
      next.addEventListener('click', function () { go(idx + 1); });
    }

    // 출처 라인(.docs-source)은 페이지 바깥, 맨 아래에 고정 → 모든 페이지에서 보임
    var srcEl = body.querySelector('.docs-source');
    if (srcEl) body.appendChild(srcEl);

    var toc = document.createElement('nav');
    toc.className = 'docs-toc';
    post.appendChild(toc);

    var secs = [], spy = true;

    function scopeHeadings() {
      var root = hasTabs
        ? (body.querySelector('.docs-lang:not([hidden])') || body.querySelector('.docs-lang') || body)
        : body;
      return [].slice.call(root.querySelectorAll('h2.docs-h2'));
    }
    function pageOf(h) {
      if (!pages) return 0;
      for (var i = 0; i < pages.length; i++) { if (pages[i].contains(h)) return i; }
      return 0;
    }
    function setActive(i) {
      secs.forEach(function (s, k) { s.link.classList.toggle('is-active', k === i); });
    }
    function firstOnPage() {
      for (var i = 0; i < secs.length; i++) { if (secs[i].page === idx) return i; }
      return 0;
    }
    function show(i) {
      idx = Math.max(0, Math.min(pages.length - 1, i));
      pages.forEach(function (p, k) { p.hidden = (k !== idx); });
      ctr.textContent = (idx + 1) + ' / ' + pages.length;
      prev.disabled = idx === 0;
      next.disabled = idx === pages.length - 1;
      setActive(firstOnPage());
    }
    function go(i) {
      show(i);
      var h = post.querySelector('.docs-post__header');
      if (h) h.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    function build() {
      toc.innerHTML = '';
      var title = document.createElement('p');
      title.className = 'docs-toc__title';
      title.textContent = '목차';
      toc.appendChild(title);

      secs = scopeHeadings().map(function (h) {
        return { heading: h, title: h.textContent.trim(), page: doPaginate ? pageOf(h) : 0 };
      });

      if (secs.length < 2) { toc.style.display = 'none'; return; }
      toc.style.display = '';

      secs.forEach(function (s, i) {
        var a = document.createElement('a');
        a.textContent = s.title;
        a.href = '#';
        a.addEventListener('click', function (e) {
          e.preventDefault();
          spy = false;
          if (doPaginate) show(s.page);
          s.heading.scrollIntoView({ behavior: 'smooth', block: 'start' });
          setActive(i);
          setTimeout(function () { spy = true; }, 700);
        });
        s.link = a;
        toc.appendChild(a);
      });
      setActive(doPaginate ? firstOnPage() : 0);
    }

    build();
    if (doPaginate) show(0);

    highlightJavaAll(post);

    if (hasTabs) {
      var btns = body.querySelectorAll('.docs-langbtn');
      btns.forEach(function (b) {
        b.addEventListener('click', function () { setTimeout(build, 0); });
      });
    }

    window.addEventListener('scroll', function () {
      if (!spy || !secs.length) return;
      var best = -1, bestTop = -1e9;
      secs.forEach(function (s, i) {
        if (doPaginate && s.page !== idx) return;
        if (s.heading.offsetParent === null) return;
        var tp = s.heading.getBoundingClientRect().top;
        if (tp < 140 && tp > bestTop) { bestTop = tp; best = i; }
      });
      setActive(best >= 0 ? best : (doPaginate ? firstOnPage() : 0));
    }, { passive: true });

    // 아래로 내려가면 목차를 숨기지 않고, 페이지 하단의 '← 이전 / 다음 →' 네비 라인
    // (없으면 푸터) 위에 걸려서 더 내려오지 못하고 같이 밀려 올라가게 한다.
    var footer = document.querySelector('footer-component');
    var BASE_TOP = 132, GAP = 24;
    function positionToc() {
      if (getComputedStyle(toc).display === 'none') return;
      var stop = post.querySelector('.docs-pagenav') || footer;
      if (!stop) { toc.style.top = BASE_TOP + 'px'; return; }
      var r = stop.getBoundingClientRect();
      // 기준 라인이 아직 화면 아래면 기본 위치, 화면에 들어오면 그 위에 붙여 같이 밀려 올라감
      if (r.top >= window.innerHeight) { toc.style.top = BASE_TOP + 'px'; return; }
      var desired = r.top - GAP - toc.offsetHeight;
      toc.style.top = Math.min(BASE_TOP, desired) + 'px';
    }
    window.addEventListener('scroll', positionToc, { passive: true });
    window.addEventListener('resize', positionToc, { passive: true });
    positionToc();
    setTimeout(positionToc, 500);   // footer-component 가 비동기 렌더된 뒤 보정
  }

  if (document.readyState !== 'loading') init();
  else document.addEventListener('DOMContentLoaded', init);
})();
