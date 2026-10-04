// ===== ANTI-INSPECT / ANTI-CHEAT =====
document.addEventListener('contextmenu', event => event.preventDefault());
document.addEventListener('keydown', event => {
  if (event.key === 'F12' || (event.ctrlKey && event.shiftKey && (event.key === 'I' || event.key === 'C' || event.key === 'J'))) {
    event.preventDefault();
  }
});

// Disable Copy/Cut/Paste Actions Globally (Tracks penalties unless watching video)
['copy', 'cut', 'paste'].forEach(ev => {
  document.addEventListener(ev, (e) => {
    e.preventDefault();
    if (_TR.phase !== 'watching') _TR.copyPasteCount++;
  });
});

// ===== 15 VERIFIED EDUCATIONAL DOMAIN DATA SETS =====
const domainData = [
  {
    title: "Chamber 1 — The Essence of Physics",
    lecture: `Physics is the fundamental science dedicated to understanding how the universe behaves at its most basic level. Historically known as <b>natural philosophy</b>, it transitioned into a rigorous empirical science. Its ultimate goal is not merely to catalogue observations, but to formulate universal mathematical laws that apply everywhere—from the microscopic interactions of atoms to the macroscopic collisions of galaxies.`,
    ytId: "yWMKYID5fr8", 
    question: "Which statement best describes the fundamental objective of physics?",
    correct: "To formulate universal laws that mathematically describe and predict the underlying mechanisms of the universe.",
    wrong: [
      "To classify all biological and natural phenomena into distinct philosophical categories based on pure logic.",
      "To observe nature strictly without relying on predictive frameworks, accepting that the universe is fundamentally random.",
      "To prove that celestial mechanics and terrestrial mechanics operate under completely disconnected physical laws."
    ],
    explanation: "Physics seeks universal laws and predictive mechanisms. It left pure 'natural philosophy' behind in favor of empirical, mathematical frameworks."
  },
  {
    title: "Chamber 2 — Galileo's Rebellion",
    lecture: `Before the 16th century, Aristotelian dogma dictated that heavy objects fall faster than light ones. <b>Galileo Galilei</b> shattered this paradigm. By prioritizing empirical observation and experiment over ancient authority, he proved that (in the absence of air resistance) all objects experience <span class="hl">free fall at the exact same rate</span>, regardless of mass. He effectively invented the modern scientific method.`,
    ytId: "QyeF-_QPSbk", 
    question: "What was Galileo’s most revolutionary conceptual contribution to the study of motion?",
    correct: "Proving through empirical experiment that objects in free fall accelerate at the same rate regardless of their mass.",
    wrong: [
      "Formulating the theory of universal gravitation that linked planetary orbits to falling apples.",
      "Discovering that air resistance is the only force in the universe that contains mass.",
      "Confirming the Aristotelian view that heavier objects naturally seek the center of the Earth faster than lighter ones."
    ],
    explanation: "Galileo used experiment to disprove Aristotle, showing all masses fall at the same rate in a vacuum."
  },
  {
    title: "Chamber 3 — Newton's Unification",
    lecture: `<b>Isaac Newton</b> synthesized the chaotic observations of his predecessors into a unified framework in his 1687 masterwork, the <i>Principia</i>. He realized that the exact same force pulling an apple to the ground is the force keeping the Moon in orbit around the Earth. This <span class="hl">universal law of gravitation</span>, combined with his three laws of motion, successfully unified terrestrial and celestial mechanics.`,
    ytId: "JGO_zDWmkvk", 
    question: "What was the most profound implication of Newton's law of universal gravitation?",
    correct: "It demonstrated that the same physical laws govern both objects on Earth and celestial bodies in space.",
    wrong: [
      "It proved that the solar system relies on a continuous mechanical engine to prevent planets from slowing down.",
      "It unified electricity and magnetism into a single mathematical framework.",
      "It established that light acts as both a particle and a wave, depending on gravitational interference."
    ],
    explanation: "Newton's greatest triumph was showing that Earthly physics and Space physics are one and the same."
  },
  {
    title: "Chamber 4 — Maxwell and the Power of Prediction",
    lecture: `Physics possesses a terrifying power: the ability to predict phenomena before they are ever observed. In the 1860s, <b>James Clerk Maxwell</b> unified electricity and magnetism into a single set of equations. His math unexpectedly demanded the existence of <span class="hl">electromagnetic waves</span> traveling at the speed of light. Decades later, these predicted waves were discovered, giving birth to radio, television, Wi-Fi, and modern telecommunications.`,
    ytId: "ZAkRoCMhzeQ", 
    question: "How did Maxwell's equations demonstrate the predictive power of physics?",
    correct: "They mathematically proved the existence of electromagnetic waves decades before humans could artificially generate or detect them.",
    wrong: [
      "They provided the blueprint for building the first physical radio transmitter using purely Aristotelian logic.",
      "They predicted the exact atomic weight of Radium before Marie Curie discovered it.",
      "They solved the issue of gravity, predicting exactly how rockets could escape Earth's atmosphere."
    ],
    explanation: "Maxwell's math forced the conclusion that EM waves must exist. They were discovered empirically years later based on his equations."
  },
  {
    title: "Chamber 5 — Measurement: The Bedrock of Reality",
    lecture: `To formulate laws, physics requires quantitative data. Qualitative statements ("it is fast") are useless. We need exact measurements. A measurement's quality is defined by its <span class="hl">accuracy</span> (how close it is to the absolute true value) and its <span class="hl">precision</span> (how consistently the measurement can be repeated). If data cannot be trusted, the laws built upon it will collapse.`,
    ytId: "2wUsdsae0ro", 
    question: "Why must physics rely on quantitative measurement rather than qualitative observation?",
    correct: "Because exact numerical data is required to formulate, test, and verify universal mathematical laws.",
    wrong: [
      "Because qualitative observations cannot be written down in laboratory notebooks.",
      "Because the true value of any physical property changes depending on the observer's emotional state.",
      "Because quantitative measurements completely eliminate the need for precision and accuracy."
    ],
    explanation: "Without quantitative numbers, you cannot build math. Without math, you cannot have physics."
  },
  {
    title: "Chamber 6 — The Mars Climate Orbiter Disaster",
    lecture: `In 1999, NASA lost the $327$ million <b>Mars Climate Orbiter</b>. The spacecraft burned up in the Martian atmosphere. The root cause was a devastating failure of unit standardization: one engineering team calculated thrust in English units (pound-seconds), while the navigation team assumed the data was in metric units (newton-seconds). Without unified metrics, engineering becomes lethal.`,
    ytId: "4DXFurrTM_g", 
    question: "What fundamental failure caused the destruction of the Mars Climate Orbiter?",
    correct: "A discrepancy in unit standardization between teams using metric and English systems.",
    wrong: [
      "A miscalculation of the gravitational constant by the mission's lead astrophysicist.",
      "A failure of Maxwell's equations to predict the communication delay between Earth and Mars.",
      "A systematic error caused by a poorly calibrated thermometer measuring the Martian atmosphere."
    ],
    explanation: "The orbiter was lost strictly because one team used imperial units and the other used metric units, causing wrong trajectory commands."
  },
  {
    title: "Chamber 7 — The Absolute Necessity of SI Units",
    lecture: `To prevent disasters like the Mars Orbiter, the global scientific community strictly adheres to the <span class="hl">International System of Units (SI)</span>. By universally agreeing on what constitutes a meter, a kilogram, or a second, scientists ensure that their experimental results are <b>reproducible</b>. If an experiment in Tokyo cannot be precisely replicated in Berlin due to confusing units, the science is invalid.`,
    ytId: "7bUVjJWA6Vw", 
    question: "What is the primary purpose of adopting a global standard like the SI unit system?",
    correct: "To ensure that experimental data is universally understood, verifiable, and strictly reproducible across the globe.",
    wrong: [
      "To force all countries to abandon their cultural measurement systems for civilian applications.",
      "To make physics calculations infinitely more precise than older measurement systems allowed.",
      "To eliminate random errors entirely from all laboratory environments."
    ],
    explanation: "SI units allow global collaboration and reproducibility, the cornerstone of the scientific method."
  },
  {
    title: "Chamber 8 — Accuracy vs. Precision: Conceptual",
    lecture: `Imagine an archer. <b>Accuracy</b> is hitting the bullseye (the true value). <b>Precision</b> is hitting the exact same spot on the target over and over again, regardless of where that spot is. An instrument with a <span class="hl">systematic error</span> (like a scale that starts at $2.0$ kg instead of $0.0$ kg) will give highly precise readings that are completely inaccurate.`,
    ytId: "hRAFPdDppzs", 
    question: "Which scenario describes a measurement system that is highly precise but highly inaccurate?",
    correct: "An archer who fires five arrows into a tightly packed cluster in the far upper-right corner of the target.",
    wrong: [
      "An archer who hits the absolute dead-center bullseye with a single, perfectly aimed arrow.",
      "An archer whose arrows scatter wildly all across the board, missing the bullseye completely.",
      "An archer who fires arrows that alternate evenly between hitting the bullseye and missing the target."
    ],
    explanation: "Tight clustering equals precision. Missing the bullseye entirely equals inaccuracy."
  },
  {
    title: "Chamber 9 — Accuracy vs. Precision: Mathematical",
    lecture: `Let's apply the concept to numbers. The true, verified mass of a platinum cylinder is exactly $5.00$ g. A student uses an uncalibrated digital scale and takes three measurements. The scale reads $7.11$ g, $7.12$ g, and $7.11$ g.`,
    ytId: "TzLnO04uO30", 
    question: "How would a physicist classify the student's mass measurements of the platinum cylinder?",
    correct: "The measurements are extremely precise, but severely inaccurate.",
    wrong: [
      "The measurements are highly accurate, but lack precision due to digital fluctuation.",
      "The measurements are both highly accurate and highly precise.",
      "The measurements are neither accurate nor precise."
    ],
    explanation: "The numbers are very close to each other (precise) but very far from the true value of $5.00$ g (inaccurate)."
  },
  {
    title: "Chamber 10 — The Foundation: SI Base Units",
    lecture: `The entire complexity of physics can be mapped back to just seven fundamental <b>SI Base Units</b>. Everything else is a combination of these seven. The critical three used in mechanics are the <b>meter (m)</b> for length, the <b>second (s)</b> for time, and the <span class="hl">kilogram (kg)</span> for mass. Notice that the kilogram is the only base unit that inherently includes a prefix ("kilo"). The "gram" is not the base unit.`,
    ytId: "O8oZFaaJTUc", 
    question: "Which of the following correctly identifies the SI Base Unit for mass?",
    correct: "The kilogram ($kg$)",
    wrong: [
      "The gram ($g$)",
      "The Newton ($N$)",
      "The pound ($lb$)"
    ],
    explanation: "The kilogram is uniquely the only SI base unit with a multiplier prefix already attached to it."
  },
  {
    title: "Chamber 11 — The Absolute Zero: Temperature",
    lecture: `For temperature, physics rarely uses Fahrenheit or Celsius in deep equations, because they have arbitrary zero points (based on water freezing/boiling). Physics demands an absolute scale. The SI base unit for thermodynamic temperature is the <span class="hl">Kelvin ($K$)</span>. Zero Kelvin ($0$ $K$) is absolute zero—the point where all thermal motion theoretically stops. There are no negative numbers in Kelvin.`,
    ytId: "TNUDBdv3jWI", 
    question: "Why is the Kelvin ($K$) scale preferred over Celsius as the SI Base Unit for temperature in physics?",
    correct: "It is an absolute scale starting at absolute zero, meaning it contains no arbitrary negative values.",
    wrong: [
      "It is exactly equal to the Celsius scale, just renamed to honor a famous physicist.",
      "It aligns perfectly with the imperial system, preventing calculation errors like the Mars Orbiter disaster.",
      "It is the only scale that can accurately measure the core temperature of a star."
    ],
    explanation: "Kelvin starts at absolute zero, meaning temperature is directly proportional to kinetic energy without weird negative offsets."
  },
  {
    title: "Chamber 12 — Derived Units: Building Complexity",
    lecture: `If a unit is not one of the seven base units, it is a <b>Derived Unit</b>. For example, velocity is a derived unit of length divided by time ($m/s$). Force is measured in Newtons ($N$). But what is a Newton? According to Newton's Second Law ($F = ma$), Force equals mass ($kg$) times acceleration ($m/s^2$). Therefore, $1$ Newton is exactly equal to $1$ <span class="hl">$kg \\cdot m/s^2$</span>.`,
    ytId: "8s1c1camxDA", 
    question: "The Newton ($N$) is a derived unit used to measure force. Which combination of SI base units constitutes one Newton?",
    correct: "$kg \\cdot m/s^2$",
    wrong: [
      "$kg \\cdot m/s$",
      "$m \\cdot s^2/kg$",
      "$kg^2 \\cdot m/s$"
    ],
    explanation: "Force is mass times acceleration. Mass is $kg$, acceleration is $m/s^2$. Multiply them together."
  },
  {
    title: "Chamber 13 — The Factor-Label Method",
    lecture: `Unit conversion is arguably the most essential math skill in introductory physics. The safest approach is the <span class="hl">factor-label method</span> (dimensional analysis). You multiply your starting value by a conversion factor that equals $1$ (e.g., $1000$ $m$ / $1$ $km$). By setting it up as fractions, you can visually cancel out the units you don't want, leaving only the units you need.`,
    ytId: "K33txxFsnrg", 
    question: "When using the factor-label method to convert $5.0$ kilometers to meters, which mathematical operation correctly cancels the original unit?",
    correct: "Multiply by the fraction ($1000$ $m$ / $1$ $km$)",
    wrong: [
      "Multiply by the fraction ($1$ $km$ / $1000$ $m$)",
      "Add $1000$ $m$ for every $1$ $km$ present.",
      "Divide by the fraction ($1000$ $m$ / $1$ $m$)"
    ],
    explanation: "To cancel $km$ (which is in the numerator), $km$ must be in the denominator of the multiplier fraction."
  },
  {
    title: "Chamber 14 — Applied Conversion: Density",
    lecture: `Let's increase the difficulty. Converting units with exponents requires you to apply the exponent to the conversion factor as well. For example, volume. If $1$ $m$ = $100$ $cm$, then $1$ $m^3$ does NOT equal $100$ $cm^3$. It equals $(100)^3$ $cm^3$, which is $1,000,000$ $cm^3$. Be extremely careful when dealing with areas and volumes.`,
    ytId: "3pXYcTHIwqQ", 
    question: "If the density of water is exactly $1.0$ $g/cm^3$, what is its density when converted to the standard SI units of $kg/m^3$?",
    correct: "$1000$ $kg/m^3$",
    wrong: [
      "$1.0$ $kg/m^3$",
      "$100$ $kg/m^3$",
      "$10,000$ $kg/m^3$"
    ],
    explanation: "To convert $g \\rightarrow kg$ is $1/1000$. To convert $cm^3 \\rightarrow m^3$ in the denominator is $1/1,000,000$. ($1/1000$) / ($1/1000000$) = $1000$."
  },
  {
    title: "Chamber 15 — Applied Conversion: Speed",
    lecture: `A classic physics scenario involves converting speed limits. To convert kilometers per hour ($km/h$) to meters per second ($m/s$), you must chain two conversion factors together. First, deal with distance ($1$ $km = 1000$ $m$). Second, deal with time ($1$ hour = $60$ minutes = $3600$ seconds). Thus, you multiply by $1000$ and divide by $3600$.`,
    ytId: "AnaRjRCAIfA", 
    question: "A car is moving at exactly $10.0$ $m/s$. What is its speed converted to $km/h$?",
    correct: "$36.0$ $km/h$",
    wrong: [
      "$3.6$ $km/h$",
      "$100$ $km/h$",
      "$360$ $km/h$"
    ],
    explanation: "$10.0$ $m/s \\times (3600$ $s / 1$ $hr) / (1000$ $m / 1$ $km) = 36.0$ $km/h$."
  }
];

// ===== UI LOGIC & STATE =====
const TOTAL = domainData.length;
let current = -1;
let score = 0;

const container = document.getElementById('stage-container');
const intro = document.getElementById('introStage');
const shell = document.getElementById('progressShell');
const fill = document.getElementById('progressFill');
const hudSec = document.getElementById('hudSector');
const hudScr = document.getElementById('hudScore');

// Video Tracking state
let accumulatedVideoTime = 0;

// ===== YT MODAL LOGIC =====
const ytModal = document.getElementById('yt-modal');
const ytIframe = document.getElementById('yt-iframe');
const ytFallbackLink = document.getElementById('yt-fallback-link');
const closeYt = document.getElementById('close-yt');

closeYt.addEventListener('click', () => {
  ytModal.style.display = 'none';
  ytIframe.src = ""; 
  
  if (_TR.currentVideoOpenTime > 0) {
    let watchTime = Date.now() - _TR.currentVideoOpenTime;
    _TR.currentVideoWatchTime = (_TR.currentVideoWatchTime || 0) + watchTime;
    accumulatedVideoTime += watchTime; 
    _TR.currentVideoOpenTime = 0;
  }
  
  _TR.lastVideoCloseTime = Date.now();
  _TR.phase = 'reading'; 
  _touchActivity(); 
  
  const activeTrialBlock = container.querySelector('.trial-block');
  const ytBtn = container.querySelector('.yt-btn');
  if (activeTrialBlock) {
    activeTrialBlock.style.display = 'block';
    if(ytBtn) ytBtn.style.display = 'none';
  }
});

function shuffleArray(array) {
  let curId = array.length;
  while (0 !== curId) {
    let randId = Math.floor(Math.random() * curId);
    curId -= 1;
    let tmp = array[curId];
    array[curId] = array[randId];
    array[randId] = tmp;
  }
  return array;
}

function renderStage(index) {
  const data = domainData[index];
  
  // Prep choices
  let options = data.wrong.map(txt => ({ text: txt, isCorrect: false }));
  options.push({ text: data.correct, isCorrect: true });
  options = shuffleArray(options);
  const letters = ['A', 'B', 'C', 'D'];

  let html = `
    <div class="card stage active">
      <div class="guide-head"><span class="chip" style="color:var(--accent-cyan); border-color:var(--accent-cyan);">Abyssal Guide</span></div>
      <div class="lecture">
        <h3>${data.title}</h3>
        <p>${data.lecture}</p>
      </div>
      <div class="trial">
        <div class="trial-tag">Trial ${index + 1}</div>
        <button class="btn yt-btn" style="width:100%; margin-bottom:20px;">🔍 VIEW ARCHIVE FOOTAGE TO UNLOCK TRIAL</button>
        
        <div class="trial-block" style="display:none;">
          <div class="trial-q">${data.question}</div>
          <div class="choices">
            ${options.map((opt, i) => `
              <button class="choice" data-idx="${i}">
                <span class="key">${letters[i]}</span>
                <span class="text">${opt.text}</span>
              </button>
            `).join('')}
          </div>
          <div class="feedback"></div>
          <div class="next-row"><button class="btn">PROCEED TO NEXT CHAMBER ▸</button></div>
        </div>
      </div>
    </div>
  `;
  
  container.innerHTML = html;
  
  renderMathInElement(container, { delimiters: [ {left: "$", right: "$", display: false} ] });

  const ytBtn = container.querySelector('.yt-btn');
  ytBtn.addEventListener('click', () => {
    ytIframe.src = `https://www.youtube-nocookie.com/embed/${data.ytId}?rel=0`;
    ytFallbackLink.href = `https://www.youtube.com/watch?v=${data.ytId}`;
    ytModal.style.display = 'flex';
    
    if (_TR.currentVideoClickDelay === -1) {
      _TR.currentVideoClickDelay = Date.now() - _TR.sectorStartTime;
    }
    _TR.currentVideoOpenTime = Date.now();
    _TR.phase = 'watching'; 
  });

  const choices = container.querySelectorAll('.choice');
  const feedback = container.querySelector('.feedback');
  const nextBtn = container.querySelector('.next-row .btn');
  const nextRow = container.querySelector('.next-row');
  
  let answered = false;

  choices.forEach(btn => {
    btn.addEventListener('click', function() {
      if (answered) return;
      answered = true;
      
      const optIdx = this.getAttribute('data-idx');
      const isCorrect = options[optIdx].isCorrect;
      
      choices.forEach(c => {
        const cIdx = c.getAttribute('data-idx');
        if(options[cIdx].isCorrect) c.classList.add('correct');
        c.disabled = true;
      });
      
      if (!isCorrect) this.classList.add('wrong');

      _recordAnswer(index, isCorrect);

      if (isCorrect) {
        score++;
        feedback.className = 'feedback show ok';
        feedback.innerHTML = `<span class="fb-title">✔ CORRECT</span>${data.explanation}`;
      } else {
        feedback.className = 'feedback show no';
        feedback.innerHTML = `<span class="fb-title">✘ INCORRECT</span>${data.explanation}`;
      }
      
      renderMathInElement(feedback, { delimiters: [ {left: "$", right: "$", display: false} ] });
      hudScr.textContent = score;
      nextRow.classList.add('show');
    });
  });

  nextBtn.addEventListener('click', () => {
    _recordNext(index);
    current++;
    if (current >= TOTAL) {
      finish();
    } else {
      updateHUD();
      renderStage(current);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  });
}

function startQuest() {
  intro.classList.remove('active');
  setTimeout(() => intro.style.display = 'none', 600);
  shell.style.display = 'block';
  document.getElementById('main-wrap').style.minHeight = 'auto'; 
  
  _TR.startTime = Date.now();
  _TR.currentSector = 0;
  _TR.sectorStartTime = Date.now();
  _TR.phase = 'reading';

  current = 0;
  updateHUD();
  renderStage(0);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function updateHUD() {
  hudSec.textContent = 'CHAMBER ' + (current + 1) + '/' + TOTAL;
  fill.style.width = ((current) / TOTAL * 100) + '%';
  hudScr.textContent = score;
}

function finish() {
  shell.style.display = 'none';
  container.innerHTML = '';
  _TR.totalTime = Date.now() - _TR.startTime;
  _TR.score = score;
  document.getElementById('tracker-overlay').classList.add('show');
  document.getElementById('tr-name-input').focus();
}

// ===== TRACKER LOGIC =====
var _TR = {
  startTime: null, sectorStartTime: null, currentSector: -1, sectorData: [],
  tabSwitches: 0, copyPasteCount: 0, scrollJumps: 0,
  lastScrollY: 0, lastScrollTime: Date.now(), idlePauses: 0,
  lastActivityTime: Date.now(), idleTimer: null, phase: 'intro',
  currentVideoOpenTime: 0, currentVideoWatchTime: 0, currentVideoClickDelay: -1, lastVideoCloseTime: 0
};

// Only penalize tab switches if they aren't safely watching a video
document.addEventListener('visibilitychange', () => { 
  if (document.hidden && _TR.phase !== 'watching') {
    _TR.tabSwitches++; 
  }
});

function _touchActivity() {
  _TR.lastActivityTime = Date.now();
  clearTimeout(_TR.idleTimer);
  _TR.idleTimer = setTimeout(() => { 
    if (_TR.phase === 'reading') _TR.idlePauses++; 
  }, 30000);
}
['mousemove', 'mousedown', 'keydown', 'touchstart', 'scroll'].forEach(ev => {
  document.addEventListener(ev, _touchActivity, { passive: true });
});

document.addEventListener('scroll', () => {
  var now = Date.now();
  var dy = Math.abs(window.scrollY - _TR.lastScrollY);
  var dt = now - _TR.lastScrollTime;
  if (dy > 500 && dt < 400 && _TR.phase !== 'watching') _TR.scrollJumps++;
  _TR.lastScrollY = window.scrollY;
  _TR.lastScrollTime = now;
}, { passive: true });

function _recordAnswer(sec, isCorrect) {
  var now = Date.now();
  var rawReadTime = now - (_TR.sectorStartTime || now);
  var adjustedReadTime = Math.max(0, rawReadTime - accumulatedVideoTime);
  var ansDelay = _TR.lastVideoCloseTime ? (now - _TR.lastVideoCloseTime) : rawReadTime;
  
  if (!_TR.sectorData[sec]) {
    _TR.sectorData[sec] = {
      sector: sec + 1,
      readTime: adjustedReadTime,
      watchTime: _TR.currentVideoWatchTime,
      clickDelay: _TR.currentVideoClickDelay,
      ansDelay: ansDelay,
      answerTime: now,
      correct: isCorrect,
    };
  }
  _TR.phase = 'answered';
  _TR.currentVideoWatchTime = 0;
  _TR.currentVideoClickDelay = -1;
  _TR.lastVideoCloseTime = 0;
  accumulatedVideoTime = 0; 
}

function _recordNext(sec) {
  var now = Date.now();
  var sd = _TR.sectorData[sec];
  if (sd && !sd.continueTime) {
    sd.continueTime = now;
    sd.reviewTime = now - (sd.answerTime || now);
  }
  _TR.currentSector++;
  _TR.sectorStartTime = Date.now();
  _TR.phase = 'reading';
}

// SEAL RECORD BUTTON
const _nameInput = document.getElementById('tr-name-input');
const _submitBtn = document.getElementById('tr-submit');

_nameInput.addEventListener('input', (e) => {
  _submitBtn.disabled = e.target.value.trim().length === 0;
});

_nameInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' && !_submitBtn.disabled) {
    _runAnalysis();
  }
});

_submitBtn.addEventListener('click', () => {
  if (!_submitBtn.disabled) _runAnalysis();
});

function _runAnalysis() {
  var name = _nameInput.value.trim();
  if (!name) return;
  document.getElementById('name-phase').style.display = 'none';
  document.getElementById('result-phase').style.display = 'block';
  document.getElementById('tracker-overlay').scrollTo({top: 0, behavior: 'smooth'});
  
  let attempts = parseInt(localStorage.getItem('physics_domain_attempts') || '0', 10);
  attempts++;
  localStorage.setItem('physics_domain_attempts', attempts);
  
  _renderResult(name, _analyzeNation(name), attempts);
}

// ===== ANALYSIS ENGINE =====
function _analyzeNation(name) {
  var t = _TR;
  var totalSec = (t.totalTime || 1) / 1000;
  var numSectors = 15;
  var correct = t.score;
  var tabs = t.tabSwitches;
  var cpCount = t.copyPasteCount;
  var idles = t.idlePauses;

  var validSectors = t.sectorData.filter(s => s != null);
  var avgRead = validSectors.reduce((a, s) => a + (s.readTime || 30000), 0) / numSectors / 1000;
  var avgWatch = validSectors.reduce((a, s) => a + (s.watchTime || 0), 0) / numSectors;
  var avgAnsDelay = validSectors.reduce((a, s) => a + (s.ansDelay || 0), 0) / numSectors;
  var avgClickDelay = validSectors.reduce((a, s) => a + (s.clickDelay > -1 ? s.clickDelay : 10000), 0) / numSectors;

  var isCheater = (tabs >= 3 || cpCount >= 2 || (tabs >= 2 && avgAnsDelay < 3000));
  var isImpulsive = (avgWatch < 15000 && correct < 10);
  var isMethodical = (avgWatch > 45000 && avgAnsDelay > 10000);
  var isFocused = (tabs === 0 && cpCount === 0);
  var isPerfect = (correct === 15);
  var isFast = (totalSec < 600); 

  var sc = { Mondstadt:0, Liyue:0, Inazuma:0, Sumeru:0, Fontaine:0, Natlan:0, Snezhnaya:0, NodKrai:0 };

  if (isCheater) {
      sc.Fontaine += 100;
  } else if (isImpulsive) {
      sc.Natlan += 50;
  } else if (isPerfect && isFocused && avgWatch > 20000) {
      sc.Snezhnaya += 50;
  } else if (isMethodical && correct >= 12) {
      sc.Liyue += 50;
  } else if (isFocused && correct >= 10 && !isMethodical) {
      sc.Inazuma += 50;
  } else if (isFast && correct >= 12) {
      sc.Sumeru += 50;
  } else if (correct < 7 && avgWatch < 20000) {
      sc.NodKrai += 50;
  } else {
      sc.Mondstadt += 50;
  }

  sc.Mondstadt += (totalSec < 900 ? 5 : 0);
  sc.Liyue += (avgAnsDelay > 15000 ? 10 : 0);
  sc.Inazuma += (tabs === 0 ? 10 : 0);
  sc.Sumeru += (avgClickDelay < 5000 && correct >= 12 ? 10 : 0);
  sc.Fontaine += (tabs * 5) + (cpCount * 10);
  sc.Natlan += (totalSec < 500 && correct < 10 ? 15 : 0);
  sc.Snezhnaya += (correct === 15 ? 10 : 0);
  sc.NodKrai += (idles > 3 ? 10 : 0);

  var best = Object.keys(sc).reduce((a, b) => sc[a] >= sc[b] ? a : b);
  return { nation: best, stats: { totalSec, avgRead, correct, tabs, cpCount, idles, avgWatch, avgAnsDelay } };
}

// ===== LORE & IMAGES =====
var _NATIONS = {
  Mondstadt: { 
    emoji: '🌬', element: 'Anemo', color: '#7ed6f5', 
    image: 'https://static0.fextralifeimages.com/file/genshinimpact/5/5d/Anemo-element-genshin-impact-wiki-guide.png', 
    desc: (s, name) => [
      `Like a glider riding the wind, you moved through the modules at a brisk and unburdened pace. The logs show a smooth journey free from overthinking.`,
      `You allowed your natural curiosity to guide you rather than getting bogged down in the heavy details. May the Anemo Archon always guide your free-spirited path.`
    ]
  },
  Liyue: { 
    emoji: '⚖', element: 'Geo', color: '#ffc94d', 
    image: 'https://static0.fextralifeimages.com/file/genshinimpact/5/51/Geo-element-genshin-impact-wiki-guide.png',
    desc: (s, name) => [
      `Methodical, grounded, and rock solid. The data indicates you reviewed the material with the careful scrutiny of a master appraiser evaluating rare jade.`,
      `You took your time, ensuring your foundation was completely unshakable before proceeding. The Lord of Geo respects those who honor the contract of thorough learning.`
    ]
  },
  Inazuma: { 
    emoji: '⚡', element: 'Electro', color: '#c39dff', 
    image: 'https://static0.fextralifeimages.com/file/genshinimpact/5/53/Electro-element-genshin-impact-wiki-guide.png',
    desc: (s, name) => [
      `You struck through these trials with the focused intensity of a drawn blade. Zero distractions, minimal hesitation, and a sharply efficient pace defined your session.`,
      `You closed off the outside world to achieve a state of absolute concentration. The Raiden Shogun would commend your pursuit of eternity through unwavering discipline.`
    ]
  },
  Sumeru: { 
    emoji: '🌿', element: 'Dendro', color: '#3ddc84', 
    image: 'https://static0.fextralifeimages.com/file/genshinimpact/1/18/Dendro-element-genshin-impact-wiki-guide.png', 
    desc: (s, name) => [
      `Your mastery of the material suggests a brilliant connection to the Akasha. Whether you possessed innate genius or cleverly referenced external archives, you synthesized the correct answers with terrifying speed.`,
      `The God of Wisdom knows that true intellect is about finding the right answers by any means necessary.`
    ]
  },
  Fontaine: { 
    emoji: '💧', element: 'Hydro', color: '#5bb8ff', 
    image: 'https://static0.fextralifeimages.com/file/genshinimpact/d/db/Hydro-element-genshin-impact-wiki-guide.png', 
    desc: (s, name) => [
      `A spectacle from start to finish. The telemetry highlights your dramatic pauses, theatrical window switching, and highly suspicious pacing.`,
      `The Oratrice Mecanique d'Analyse Cardinale has weighed your chaotic methods and deemed you guilty of attempting to manipulate the laws of physics. The Hydro Archon watches your performance with great amusement.`
    ]
  },
  Natlan: { 
    emoji: '🔥', element: 'Pyro', color: '#ff8c42', 
    image: 'https://static0.fextralifeimages.com/file/genshinimpact/2/2c/Pyro-element-genshin-impact-wiki-guide.png', 
    desc: (s, name) => [
      `Bold, impulsive, and burning with sheer momentum. You charged ahead before the dust even settled, choosing swift action over careful deliberation.`,
      `This aggressive pacing left little room for second thoughts. The Pyro Archon favors the brave who leap into the fire without looking back.`
    ]
  },
  Snezhnaya: { 
    emoji: '❄️', element: 'Cryo', color: '#a0d4ff', 
    image: 'https://static0.fextralifeimages.com/file/genshinimpact/f/fc/Cryo-element-genshin-impact-wiki-guide.png', 
    desc: (s, name) => [
      `Clinical, calculating, and coldly efficient. You treated this assignment as a strict objective to be executed flawlessly.`,
      `Every click was deliberate, yielding high marks with zero wasted motion or unnecessary sentimentality. The Tsaritsa demands absolute perfection, and you delivered a chillingly competent result.`
    ]
  },
  NodKrai: { 
    emoji: '🌨️', element: 'Abyssal Frost', color: '#8b9bb4', 
    image: 'https://static.wikia.nocookie.net/gensin-impact/images/3/37/Talent_Law_of_the_New_Moon.png/revision/latest?cb=20260115185658',
    desc: (s, name) => [
      `Lost in the dark depths of complex variables, your traversal was marked by long silences and fragmented focus. The fundamental truths remained elusive, leading to a session consumed by the void.`,
      `Yet, surviving the abyssal corruption and reaching the end is a victory on its own. The Sinner welcomes those who stumble in the dark.`
    ]
  }
};

// ===== RENDER & IMAGE EXPORT =====
function _renderResult(name, analysis, attempts) {
  var n = analysis.nation;
  var info = _NATIONS[n];
  var s = analysis.stats;
  var paras = info.desc(s, name);
  var col = info.color;

  // Play Background Music
  const bgm = document.getElementById('nation-bgm');
  if (bgm) bgm.play().catch(e => console.log('Audio autoplay prevented by browser.'));

  // Update Nation Glow
  document.documentElement.style.setProperty('--nation-tint', col);

  var minsTotal = Math.floor(s.totalSec / 60);
  var secsTotal = Math.round(s.totalSec % 60);
  var avgStr = s.avgRead >= 60 ? Math.floor(s.avgRead/60) + 'm ' + Math.round(s.avgRead%60) + 's' : Math.round(s.avgRead) + 's';
  
  var scoreClass = s.correct >= 12 ? 'color: var(--accent-green)' : s.correct >= 8 ? 'color: var(--border-gold)' : 'color: var(--accent-red)';
  var displayNation = n === 'NodKrai' ? "Nod'Krai" : n;
  
  var sigilHTML = info.image 
      ? `<img class="tr-nation-img" src="${info.image}" alt="${displayNation}">`
      : `<span class="tr-sigil" style="color: ${col}">${info.emoji}</span>`;

  // Inject Screenshot HTML with specific container for HTML2Canvas to capture stars
  var html = `
    <div id="screenshot-container" style="position: relative; overflow: hidden; background-color: var(--bg-base); border: 1px solid var(--border-glow); border-radius: 12px; padding: 40px; margin-bottom: 24px;">
      
      <!-- Centralized Elemental Glow - Fixed legibility -->
      <div style="position: absolute; inset: 0; background: radial-gradient(circle at 50% 50%, var(--nation-tint) 0%, transparent 60%); opacity: 0.15; z-index: 1;"></div>
      
      <!-- Captured Stars -->
      <div class="stars"></div><div class="stars stars2"></div>
      
      <!-- Attempt Stamp -->
      <div class="attempt-stamp">Attempt: #${attempts}</div>

      <!-- Main Result Content -->
      <div class="rc-inner">
        <div class="tr-traveler">Abyssal Record Verified</div>
        <div class="tr-name-display">${_esc(name)}</div>
        <div class="tr-verdict">By observing your navigation of the physical laws,<br>the land of Teyvat resonates to you with the element of</div>
        <span class="tr-nation-name" style="color: ${col}">${_esc(displayNation)}</span>
        
        <div class="tr-sigil-container">${sigilHTML}</div>
        <span class="tr-element" style="color: ${col}">${info.element}</span>
        
        <div class="tr-stats">
          <div class="tr-stat"><span class="sv" style="color: ${col}">${minsTotal}m ${secsTotal}s</span><span class="sl">Clear Time</span></div>
          <div class="tr-stat"><span class="sv" style="${scoreClass}">${s.correct} / 15</span><span class="sl">Stars Collected</span></div>
          <div class="tr-stat"><span class="sv" style="color: var(--accent-cyan)">${avgStr}</span><span class="sl">Avg Read Pace</span></div>
          <div class="tr-stat"><span class="sv" style="color: ${s.tabs > 0 ? 'var(--border-gold)' : 'var(--accent-green)'}">${s.tabs}</span><span class="sl">Focus Breaks</span></div>
        </div>
        
        <div class="tr-lore-card">
          <span class="tr-section-label" style="color: ${col}">Mona's Astrological Reading</span>
          ${paras.map(p => `<p>${_esc(p)}</p>`).join('')}
        </div>
      </div>
    </div>
  `;

  document.getElementById('result-content').innerHTML = html;
}

function saveResultImage() {
  const target = document.getElementById('screenshot-container');
  html2canvas(target, {
    backgroundColor: '#0a0e1c',
    scale: 2,
    useCORS: true,
    allowTaint: true,
    logging: false
  }).then(canvas => {
    let link = document.createElement('a');
    link.download = 'abyssal_physics_record.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
  });
}

function _esc(str) {
  return String(str).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;');
}