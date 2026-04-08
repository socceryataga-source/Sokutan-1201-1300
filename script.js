let mode = "order";
let fullQuiz = [];
let currentIndex = 0;
let score = 0;
let answeredMap = new Map();
let lastSettings = { start: 1201, end: 1300, mode: "order" };

const menuEl = document.getElementById("menu");
const quizEl = document.getElementById("quiz");
const resultEl = document.getElementById("result");

const startInput = document.getElementById("start");
const endInput = document.getElementById("end");
const progressText = document.getElementById("progressText");
const progressFill = document.getElementById("progressFill");
const wordEl = document.getElementById("word");
const choicesEl = document.getElementById("choices");
const feedbackEl = document.getElementById("feedback");
const scoreText = document.getElementById("scoreText");

document.querySelectorAll(".mode-btn").forEach(btn => {
  btn.addEventListener("click", () => setMode(btn.dataset.mode));
});

document.getElementById("startBtn").addEventListener("click", startQuiz);
document.getElementById("prevBtn").addEventListener("click", prevQuestion);
document.getElementById("nextBtn").addEventListener("click", nextQuestion);
document.getElementById("restartBtn").addEventListener("click", restartSameSettings);
document.getElementById("resetBtn").addEventListener("click", resetRange);
document.getElementById("menuBackTop").addEventListener("click", goMenu);
document.getElementById("menuBackBottom").addEventListener("click", goMenu);
document.getElementById("restartFromResult").addEventListener("click", restartSameSettings);
document.getElementById("resetFromResult").addEventListener("click", resetRange);
document.getElementById("menuFromResult").addEventListener("click", goMenu);
document.getElementById("speakBtn").addEventListener("click", speakWord);

function normalizeData(raw){
  return raw.map(item => {
    const correct = Array.isArray(item.choices) ? item.choices.findIndex(c => c === item.meaning) : -1;
    return {
      id: item.id ?? item.no,
      word: item.word,
      choices: item.choices || [],
      correct,
      sentence: item.sentence || "",
      jp: item.jp || item.translation || ""
    };
  }).filter(item => item.id != null && item.correct >= 0);
}

const dataset = normalizeData(typeof quizData !== "undefined" ? quizData : []);

function setMode(nextMode){
  mode = nextMode;
  document.querySelectorAll(".mode-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.mode === nextMode);
  });
}

function startQuiz(){
  const start = Number(startInput.value);
  const end = Number(endInput.value);

  if(Number.isNaN(start) || Number.isNaN(end) || start > end){
    alert("開始番号と終了番号を正しく入力してください。");
    return;
  }

  const pool = dataset.filter(item => item.id >= start && item.id <= end);
  if(pool.length === 0){
    alert("その範囲にはデータがありません。");
    return;
  }

  lastSettings = { start, end, mode };
  fullQuiz = [...pool];
  if(mode === "random") shuffle(fullQuiz);

  currentIndex = 0;
  score = 0;
  answeredMap = new Map();

  menuEl.classList.add("hidden");
  resultEl.classList.add("hidden");
  quizEl.classList.remove("hidden");
  renderQuestion();
}

function renderQuestion(){
  const item = fullQuiz[currentIndex];
  if(!item) return;

  progressText.textContent = `${currentIndex + 1} / ${fullQuiz.length}`;
  progressFill.style.width = `${((currentIndex + 1) / fullQuiz.length) * 100}%`;
  wordEl.textContent = item.word;
  feedbackEl.classList.add("hidden");
  feedbackEl.innerHTML = "";

  choicesEl.innerHTML = "";
  const saved = answeredMap.get(item.id);

  item.choices.forEach((choice, index) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "choice-btn";
    btn.textContent = choice;

    if(saved){
      btn.disabled = true;
      if(index === item.correct) btn.classList.add("correct");
      if(index === saved.selected && saved.selected !== item.correct) btn.classList.add("wrong");
    } else {
      btn.addEventListener("click", () => answerQuestion(index));
    }
    choicesEl.appendChild(btn);
  });

  if(saved){
    showFeedback(saved.correct, item);
  }
}

function answerQuestion(selectedIndex){
  const item = fullQuiz[currentIndex];
  if(!item || answeredMap.has(item.id)) return;

  const isCorrect = selectedIndex === item.correct;
  answeredMap.set(item.id, { selected: selectedIndex, correct: isCorrect });

  if(isCorrect) score += 1;
  renderQuestion();
}

function showFeedback(isCorrect, item){
  feedbackEl.classList.remove("hidden");
  feedbackEl.innerHTML = `
    <div class="feedback-status">${isCorrect ? "⭕ 正解！" : "❌ 不正解"}</div>
    <div class="feedback-answer">正解：${item.choices[item.correct]}</div>
    <div>${item.sentence}</div>
    <div>${item.jp}</div>
  `;
}

function prevQuestion(){
  if(currentIndex > 0){
    currentIndex -= 1;
    renderQuestion();
  }
}

function nextQuestion(){
  if(currentIndex < fullQuiz.length - 1){
    currentIndex += 1;
    renderQuestion();
  } else {
    showResult();
  }
}

function showResult(){
  quizEl.classList.add("hidden");
  resultEl.classList.remove("hidden");
  const total = fullQuiz.length;
  const rate = total ? Math.round((score / total) * 100) : 0;
  scoreText.textContent = `${score} / ${total}（正答率 ${rate}%）`;
}

function restartSameSettings(){
  startInput.value = lastSettings.start;
  endInput.value = lastSettings.end;
  setMode(lastSettings.mode);
  startQuiz();
}

function resetRange(){
  quizEl.classList.add("hidden");
  resultEl.classList.add("hidden");
  menuEl.classList.remove("hidden");
}

function goMenu(){
  quizEl.classList.add("hidden");
  resultEl.classList.add("hidden");
  menuEl.classList.remove("hidden");
}

function speakWord(){
  const item = fullQuiz[currentIndex];
  if(!item) return;
  const utterance = new SpeechSynthesisUtterance(item.word);
  utterance.lang = "en-US";
  speechSynthesis.cancel();
  speechSynthesis.speak(utterance);
}

function shuffle(array){
  for(let i = array.length - 1; i > 0; i--){
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
