let money = 0;
let pizzas = 0;
let moneyPerPizza = 1;
let workers = 0;

let ovenCost = 25;
let workerCost = 50;
let shopCost = 100;

let shopLevel = 0;
let pizzaType = "Cheese";
let customerBonusChance = 5;
let customerRating = 0;

let lives = 3;

let deliveryDrivers = 0;
let marketingLevel = 0;
let managers = 0;
let ingredientsLevel = 0;

let deliveryCost = 200;
let marketingCost = 300;
let managerCost = 500;
let ingredientsCost = 750;

let researchLevel = 0;
let researchCost = 10000;

let rebirths = 0;
let rebirthCost = 1e50;
let reputation = 0;
let badgeTitle = "Pizza Rookie";
let autoOrdersUnlocked = false;

let rebirthTokens = 0;
let permClickBoost = 0;
let permWorkerBoost = 0;
let permOrderBoost = 0;
let permLuckBoost = 0;
let autoBuyerUnlocked = false;

let autoRebirthUnlocked = false;
let autoRebirthActive = false;

let prestigeRushLevel = 0;
let prestigeCheapLevel = 0;
let prestigeOrderLevel = 0;

let totalMoneyEarned = 0;
let totalPizzasMade = 0;
let ordersCompleted = 0;
let highestCombo = 0;
let timePlayed = 0;

let selectedPizzaSkin = "🏪";
let usingCustomPizzaSkin = false;

let bossEventActive = false;
let bossEventName = "";
let bossEventTimeLeft = 0;
let bossEventMultiplier = 1;

let noWorkerChallengeActive = false;
let oneLifeChallengeActive = false;
let noOrderChallengeActive = false;

let unlockedPizzaTypes = ["Cheese"];
let achievements = [];

let currentOrder = null;
let orderProgress = 0;
let orderTimeLeft = 0;
let orderTimerRunning = false;
let orderIsBoss = false;

let combo = 0;
let comboMultiplier = 1;
let lastClickTime = 0;
let comboResetTime = 1200;

let floatingTextCount = 0;
let maxFloatingTexts = 15;

let buyAmount = 1;
let gameWon = false;
let gameLost = false;
let muted = false;
let resetConfirm = false;

let purchaseLocked = false;

let pizzaRushActive = false;
let pizzaRushTimeLeft = 0;
let secretCode = "";

let adminModeActive = false;
let adminCanWin = false;

const GOD_NUMBER = 1e308;
const MAX_BUY_AMOUNT = 1e200;

const moneyText = document.getElementById("money");
const upgradeMoneyText = document.getElementById("upgradeMoney");
const pizzasText = document.getElementById("pizzas");
const perPizzaText = document.getElementById("perPizza");
const pizzaTypeText = document.getElementById("pizzaType");
const ratingText = document.getElementById("rating");
const livesText = document.getElementById("lives");
const achievementCountText = document.getElementById("achievementCount");
const achievementsBox = document.getElementById("achievementsBox");
const messageText = document.getElementById("message");

const rebirthText = document.getElementById("rebirths");
const rebirthTokensText = document.getElementById("rebirthTokens");
const reputationText = document.getElementById("reputation");
const badgeTitleText = document.getElementById("badgeTitle");
const autoBuyerText = document.getElementById("autoBuyerText");

const upgradeLevelsText = document.getElementById("upgradeLevelsText");
const orderText = document.getElementById("orderText");
const orderTimerText = document.getElementById("orderTimerText");
const newOrderButton = document.getElementById("newOrderButton");
const bossOrderButton = document.getElementById("bossOrderButton");
const vipOrderButton = document.getElementById("vipOrderButton");
const megaOrderButton = document.getElementById("megaOrderButton");
const comboText = document.getElementById("comboText");
const rushText = document.getElementById("rushText");
const bossEventText = document.getElementById("bossEventText");

const pizzaVisual = document.getElementById("pizzaVisual");
const makePizzaButton = document.getElementById("pizzaVisual");

const ovenButton = document.getElementById("ovenUpgrade");
const workerButton = document.getElementById("hireWorker");
const shopButton = document.getElementById("shopUpgrade");
const deliveryButton = document.getElementById("deliveryUpgrade");
const marketingButton = document.getElementById("marketingUpgrade");
const managerButton = document.getElementById("managerUpgrade");
const ingredientsButton = document.getElementById("ingredientsUpgrade");
const researchButton = document.getElementById("researchUpgrade");
const rebirthButton = document.getElementById("rebirthButton");
const buyAmountInput = document.getElementById("buyAmountInput");

const permClickButton = document.getElementById("permClickButton");
const permWorkerButton = document.getElementById("permWorkerButton");
const permOrderButton = document.getElementById("permOrderButton");
const permLuckButton = document.getElementById("permLuckButton");

const autoRebirthButton = document.getElementById("autoRebirthButton");
const prestigeRushButton = document.getElementById("prestigeRushButton");
const prestigeCheapButton = document.getElementById("prestigeCheapButton");
const prestigeOrderButton = document.getElementById("prestigeOrderButton");

const totalMoneyEarnedText = document.getElementById("totalMoneyEarnedText");
const totalPizzasMadeText = document.getElementById("totalPizzasMadeText");
const ordersCompletedText = document.getElementById("ordersCompletedText");
const highestComboText = document.getElementById("highestComboText");
const timePlayedText = document.getElementById("timePlayedText");

const noWorkerChallenge = document.getElementById("noWorkerChallenge");
const oneLifeChallenge = document.getElementById("oneLifeChallenge");
const noOrderChallenge = document.getElementById("noOrderChallenge");

const pizzaCollectionBox = document.getElementById("pizzaCollectionBox");

const mainMenu = document.getElementById("mainMenu");
const menuStartButton = document.getElementById("menuStartButton");
const menuTutorialButton = document.getElementById("menuTutorialButton");
const menuCreditsButton = document.getElementById("menuCreditsButton");
const creditsText = document.getElementById("creditsText");

const tutorialScreen = document.getElementById("tutorialScreen");
const tutorialTitle = document.getElementById("tutorialTitle");
const tutorialText = document.getElementById("tutorialText");
const tutorialNextButton = document.getElementById("tutorialNextButton");
const tutorialSkipButton = document.getElementById("tutorialSkipButton");

const settingsButton = document.getElementById("settingsButton");
const settingsMenu = document.getElementById("settingsMenu");
const muteButton = document.getElementById("muteButton");
const returnMenuButton = document.getElementById("returnMenuButton");
const saveButton = document.getElementById("saveButton");
const resetButton = document.getElementById("resetButton");
const closeSettingsButton = document.getElementById("closeSettingsButton");

const adminPanel = document.getElementById("adminPanel");
const adminAddMoney = document.getElementById("adminAddMoney");
const adminSetMoneyMax = document.getElementById("adminSetMoneyMax");
const adminMaxRating = document.getElementById("adminMaxRating");
const adminStartRush = document.getElementById("adminStartRush");
const adminHealLives = document.getElementById("adminHealLives");
const adminUnlockEverything = document.getElementById("adminUnlockEverything");
const adminUpgradeSelect = document.getElementById("adminUpgradeSelect");
const adminUpgradeAmount = document.getElementById("adminUpgradeAmount");
const adminApplyUpgrade = document.getElementById("adminApplyUpgrade");
const adminWinGame = document.getElementById("adminWinGame");
const adminClose = document.getElementById("adminClose");

let tutorialStep = 0;

const tutorialSteps = [
  {
    title: "🍕 Welcome to Pizza Shop Tycoon!",
    text: "Your goal is to build the biggest pizza shop, earn money, complete orders, unlock upgrades, and survive events.",
    highlight: null
  },
  {
    title: "📊 Stats",
    text: "This shows your money, pizzas, pizza power, rating, lives, rebirths, tokens, reputation, badge, auto buyer, and achievements.",
    highlight: "statsPanel"
  },
  {
    title: "🏪 Make Pizza",
    text: "Click the big shop icon to make pizza and earn money.",
    highlight: "pizzaVisual"
  },
  {
    title: "⚡ Combo",
    text: "Click fast to build a combo. Higher combos give more money per click.",
    highlight: "comboBox"
  },
  {
    title: "🍕 Pizza Rush",
    text: "Pizza Rush is a timed event that gives extra money for a short time.",
    highlight: "rushBox"
  },
  {
    title: "👑 Boss Event",
    text: "Boss Events can help or hurt your shop. Some give huge money boosts, but some make money weaker or cost lives.",
    highlight: "bossEventBox"
  },
  {
    title: "📦 Orders",
    text: "Use this section to start normal, boss, VIP, and mega orders. Finish them before time runs out to earn rewards and reputation.",
    highlight: "orderBox"
  },
  {
    title: "🛒 Upgrades Panel",
    text: "Open this panel to change buy amount and buy upgrades like ovens, workers, shop levels, delivery drivers, marketing, managers, ingredients, research, and rebirth.",
    highlight: "openUpgradesButton"
  },
  {
    title: "🌟 Permanent Panel",
    text: "Open this panel to spend rebirth tokens on permanent boosts, auto rebirth, and prestige upgrades.",
    highlight: "openPermanentButton"
  },
  {
    title: "📈 Stats Screen",
    text: "Open this panel to see total money earned, total pizzas made, orders completed, highest combo, and time played.",
    highlight: "openStatsScreenButton"
  },
  {
    title: "🏁 Challenges",
    text: "Open this panel to turn on challenge modes like No Worker, One Life, and No Order.",
    highlight: "openChallengesButton"
  },
  {
    title: "🍕 Collection",
    text: "Open this panel to see unlocked pizza skins. You can click a skin to use it.",
    highlight: "openCollectionButton"
  },
  {
    title: "🏆 Achievements",
    text: "Open this panel to see achievements you unlocked by reaching goals.",
    highlight: "openAchievementsButton"
  },
  {
    title: "⚙️ Settings",
    text: "Use settings to mute, return to menu, save the game, or reset your save.",
    highlight: "settingsButton"
  },
  {
    title: "✅ Ready!",
    text: "You are ready to run your pizza shop. Good luck!",
    highlight: null
  }
];

function openGamePanel(panelId) {
  closeGamePanels();

  let panel = document.getElementById(panelId);

  if (panel) {
    panel.style.display = "flex";
  }
}

function closeGamePanels() {
  let panels = document.querySelectorAll(".gamePanelPopup");

  panels.forEach(function(panel) {
    panel.style.display = "none";
  });
}

function lockPurchase() {
  purchaseLocked = true;

  setTimeout(function() {
    purchaseLocked = false;
  }, 120);
}

function earnMoney(amount) {
  money += amount;
  totalMoneyEarned += amount;

  if (!isFinite(money)) {
    if (adminModeActive && !adminCanWin) {
      money = GOD_NUMBER;
      return;
    }

    winGame();
  }

  if (!isFinite(totalMoneyEarned)) {
    totalMoneyEarned = GOD_NUMBER;
  }
}

function fixNumber(value, fallback) {
  if (value === "Infinity") return Infinity;
  if (value === null || value === undefined) return fallback;

  let numberValue = Number(value);

  if (isNaN(numberValue)) return fallback;

  return numberValue;
}

function saveNumber(value) {
  if (value === Infinity) return "Infinity";
  return value;
}

function formatNumber(num) {
  if (num === Infinity) return "∞";
  if (!isFinite(num)) return "MAX";

  if (Math.abs(num) >= 1000000) {
    return Number(num).toExponential(2);
  }

  return Math.floor(num);
}

function showBuyAmount(num) {
  if (num === Infinity) return "∞";
  if (!isFinite(num)) return "MAX";

  if (Math.abs(num) >= 1000000) {
    return Number(num).toExponential(2);
  }

  return Math.floor(num);
}

function parseBuyAmount(value) {
  let text = String(value).trim().toLowerCase();
  text = text.replaceAll(",", "");

  if (text === "") return buyAmount;
  if (text.includes("e")) return Number(text);

  if (text.includes("googol")) return Number(text.replace("googol", "").trim()) * 1e100;
  if (text.includes("duodecillion")) return Number(text.replace("duodecillion", "").trim()) * 1e39;
  if (text.includes("undecillion")) return Number(text.replace("undecillion", "").trim()) * 1e36;
  if (text.includes("tredecillion")) return Number(text.replace("tredecillion", "").trim()) * 1e42;
  if (text.includes("decillion")) return Number(text.replace("decillion", "").trim()) * 1e33;
  if (text.includes("nonillion")) return Number(text.replace("nonillion", "").trim()) * 1e30;
  if (text.includes("octillion")) return Number(text.replace("octillion", "").trim()) * 1e27;
  if (text.includes("septillion")) return Number(text.replace("septillion", "").trim()) * 1e24;
  if (text.includes("sextillion")) return Number(text.replace("sextillion", "").trim()) * 1e21;
  if (text.includes("quintillion")) return Number(text.replace("quintillion", "").trim()) * 1e18;
  if (text.includes("quadrillion")) return Number(text.replace("quadrillion", "").trim()) * 1e15;
  if (text.includes("trillion")) return Number(text.replace("trillion", "").trim()) * 1e12;
  if (text.includes("billion")) return Number(text.replace("billion", "").trim()) * 1e9;
  if (text.includes("million")) return Number(text.replace("million", "").trim()) * 1e6;

  return Number(text);
}

function cleanBuyAmount(value) {
  let amount = parseBuyAmount(value);

  if (!isFinite(amount) || isNaN(amount)) {
    amount = buyAmount;
  }

  amount = Math.floor(amount);

  if (amount < 1) {
    amount = 1;
  }

  if (amount > MAX_BUY_AMOUNT) {
    amount = MAX_BUY_AMOUNT;
  }

  return amount;
}

function setBuyAmount(amount) {
  if (gameWon || gameLost) return;

  buyAmount = cleanBuyAmount(amount);
  buyAmountInput.value = showBuyAmount(buyAmount);

  messageText.textContent = "Buy amount set to x" + formatNumber(buyAmount);

  updateScreen();
  saveGame();
}

function changeBuyAmount(amount) {
  if (gameWon || gameLost) return;

  buyAmount = cleanBuyAmount(buyAmount + amount);
  buyAmountInput.value = showBuyAmount(buyAmount);

  messageText.textContent = "Buy amount set to x" + formatNumber(buyAmount);

  updateScreen();
  saveGame();
}

buyAmountInput.addEventListener("change", function() {
  setBuyAmount(buyAmountInput.value);
});

buyAmountInput.addEventListener("blur", function() {
  setBuyAmount(buyAmountInput.value);
});

function clearTutorialHighlights() {
  let highlighted = document.querySelectorAll(".tutorial-highlight");

  highlighted.forEach(function(element) {
    element.classList.remove("tutorial-highlight");
  });
}

function isElementVisible(element) {
  let rect = element.getBoundingClientRect();

  return rect.top >= 120 && rect.bottom <= window.innerHeight - 160;
}

function showTutorialStep() {
  clearTutorialHighlights();

  let step = tutorialSteps[tutorialStep];

  tutorialTitle.textContent = step.title;
  tutorialText.textContent = step.text;

  let tutorialBox = document.querySelector(".tutorial-box");

  tutorialBox.style.left = "50%";
  tutorialBox.style.right = "auto";
  tutorialBox.style.transform = "translateX(-50%)";

  let target = null;

  if (step.highlight !== null) {
    target = document.getElementById(step.highlight);
  }

  if (target) {
    target.classList.add("tutorial-highlight");

    target.scrollIntoView({
      behavior: "auto",
      block: "center"
    });
  }

  if (step.highlight === "statsPanel") {
    tutorialBox.style.top = "auto";
    tutorialBox.style.bottom = "25px";
  } else {
    tutorialBox.style.top = "25px";
    tutorialBox.style.bottom = "auto";
  }

  if (tutorialStep === tutorialSteps.length - 1) {
    tutorialNextButton.textContent = "Start Game";
  } else {
    tutorialNextButton.textContent = "Next";
  }
}

function startTutorial() {
  tutorialStep = 0;
  tutorialScreen.style.display = "block";
  showTutorialStep();
}

function endTutorial() {
  clearTutorialHighlights();
  tutorialScreen.style.display = "none";
  mainMenu.style.display = "none";
  messageText.textContent = "Tutorial complete! Start making pizzas!";
}

tutorialNextButton.onclick = function() {
  if (tutorialStep < tutorialSteps.length - 1) {
    tutorialStep++;
    showTutorialStep();
  } else {
    endTutorial();
  }
};

tutorialSkipButton.onclick = function() {
  endTutorial();
};

function saveGame() {
  let saveData = {
    money: saveNumber(money),
    pizzas: saveNumber(pizzas),
    moneyPerPizza: saveNumber(moneyPerPizza),
    workers: saveNumber(workers),
    ovenCost: saveNumber(ovenCost),
    workerCost: saveNumber(workerCost),
    shopCost: saveNumber(shopCost),
    shopLevel: saveNumber(shopLevel),
    pizzaType: pizzaType,
    customerBonusChance: saveNumber(customerBonusChance),
    customerRating: customerRating,
    lives: lives,
    deliveryDrivers: saveNumber(deliveryDrivers),
    marketingLevel: saveNumber(marketingLevel),
    managers: saveNumber(managers),
    ingredientsLevel: saveNumber(ingredientsLevel),
    deliveryCost: saveNumber(deliveryCost),
    marketingCost: saveNumber(marketingCost),
    managerCost: saveNumber(managerCost),
    ingredientsCost: saveNumber(ingredientsCost),
    researchLevel: saveNumber(researchLevel),
    researchCost: saveNumber(researchCost),
    rebirths: saveNumber(rebirths),
    rebirthCost: saveNumber(rebirthCost),
    reputation: saveNumber(reputation),
    badgeTitle: badgeTitle,
    autoOrdersUnlocked: autoOrdersUnlocked,
    rebirthTokens: saveNumber(rebirthTokens),
    permClickBoost: saveNumber(permClickBoost),
    permWorkerBoost: saveNumber(permWorkerBoost),
    permOrderBoost: saveNumber(permOrderBoost),
    permLuckBoost: saveNumber(permLuckBoost),
    autoBuyerUnlocked: autoBuyerUnlocked,
    autoRebirthUnlocked: autoRebirthUnlocked,
    autoRebirthActive: autoRebirthActive,
    prestigeRushLevel: saveNumber(prestigeRushLevel),
    prestigeCheapLevel: saveNumber(prestigeCheapLevel),
    prestigeOrderLevel: saveNumber(prestigeOrderLevel),
    totalMoneyEarned: saveNumber(totalMoneyEarned),
    totalPizzasMade: saveNumber(totalPizzasMade),
    ordersCompleted: saveNumber(ordersCompleted),
    highestCombo: saveNumber(highestCombo),
    timePlayed: saveNumber(timePlayed),
    selectedPizzaSkin: selectedPizzaSkin,
    usingCustomPizzaSkin: usingCustomPizzaSkin,
    bossEventActive: bossEventActive,
    bossEventName: bossEventName,
    bossEventTimeLeft: bossEventTimeLeft,
    bossEventMultiplier: bossEventMultiplier,
    noWorkerChallengeActive: noWorkerChallengeActive,
    oneLifeChallengeActive: oneLifeChallengeActive,
    noOrderChallengeActive: noOrderChallengeActive,
    unlockedPizzaTypes: unlockedPizzaTypes,
    achievements: achievements,
    currentOrder: currentOrder,
    orderProgress: orderProgress,
    orderTimeLeft: orderTimeLeft,
    orderTimerRunning: orderTimerRunning,
    orderIsBoss: orderIsBoss,
    combo: combo,
    comboMultiplier: comboMultiplier,
    lastClickTime: lastClickTime,
    buyAmount: buyAmount,
    gameWon: gameWon,
    gameLost: gameLost,
    muted: muted,
    adminModeActive: adminModeActive,
    adminCanWin: adminCanWin
  };

  localStorage.setItem("pizzaShopSave", JSON.stringify(saveData));
}

function loadGame() {
  let saved = localStorage.getItem("pizzaShopSave");

  if (saved === null) {
    renderPizzaCollection();
    return;
  }

  let saveData = JSON.parse(saved);

  money = fixNumber(saveData.money, 0);
  pizzas = fixNumber(saveData.pizzas, 0);
  moneyPerPizza = fixNumber(saveData.moneyPerPizza, 1);
  workers = fixNumber(saveData.workers, 0);

  ovenCost = fixNumber(saveData.ovenCost, 25);
  workerCost = fixNumber(saveData.workerCost, 50);
  shopCost = fixNumber(saveData.shopCost, 100);

  shopLevel = fixNumber(saveData.shopLevel, 0);
  pizzaType = saveData.pizzaType ?? "Cheese";
  customerBonusChance = fixNumber(saveData.customerBonusChance, 5);
  customerRating = saveData.customerRating ?? 0;
  lives = saveData.lives ?? 3;

  deliveryDrivers = fixNumber(saveData.deliveryDrivers, 0);
  marketingLevel = fixNumber(saveData.marketingLevel, 0);
  managers = fixNumber(saveData.managers, 0);
  ingredientsLevel = fixNumber(saveData.ingredientsLevel, 0);

  deliveryCost = fixNumber(saveData.deliveryCost, 200);
  marketingCost = fixNumber(saveData.marketingCost, 300);
  managerCost = fixNumber(saveData.managerCost, 500);
  ingredientsCost = fixNumber(saveData.ingredientsCost, 750);

  researchLevel = fixNumber(saveData.researchLevel, 0);
  researchCost = fixNumber(saveData.researchCost, 10000);

  rebirths = fixNumber(saveData.rebirths, 0);
  rebirthCost = fixNumber(saveData.rebirthCost, 1e50);
  reputation = fixNumber(saveData.reputation, 0);
  badgeTitle = saveData.badgeTitle ?? "Pizza Rookie";
  autoOrdersUnlocked = saveData.autoOrdersUnlocked ?? false;

  rebirthTokens = fixNumber(saveData.rebirthTokens, 0);
  permClickBoost = fixNumber(saveData.permClickBoost, 0);
  permWorkerBoost = fixNumber(saveData.permWorkerBoost, 0);
  permOrderBoost = fixNumber(saveData.permOrderBoost, 0);
  permLuckBoost = fixNumber(saveData.permLuckBoost, 0);
  autoBuyerUnlocked = saveData.autoBuyerUnlocked ?? false;

  autoRebirthUnlocked = saveData.autoRebirthUnlocked ?? false;
  autoRebirthActive = saveData.autoRebirthActive ?? false;

  prestigeRushLevel = fixNumber(saveData.prestigeRushLevel, 0);
  prestigeCheapLevel = fixNumber(saveData.prestigeCheapLevel, 0);
  prestigeOrderLevel = fixNumber(saveData.prestigeOrderLevel, 0);

  totalMoneyEarned = fixNumber(saveData.totalMoneyEarned, 0);
  totalPizzasMade = fixNumber(saveData.totalPizzasMade, 0);
  ordersCompleted = fixNumber(saveData.ordersCompleted, 0);
  highestCombo = fixNumber(saveData.highestCombo, 0);
  timePlayed = fixNumber(saveData.timePlayed, 0);

  selectedPizzaSkin = saveData.selectedPizzaSkin ?? "🏪";
  usingCustomPizzaSkin = saveData.usingCustomPizzaSkin ?? false;

  bossEventActive = false;
  bossEventName = "";
  bossEventTimeLeft = 0;
  bossEventMultiplier = 1;

  noWorkerChallengeActive = saveData.noWorkerChallengeActive ?? false;
  oneLifeChallengeActive = saveData.oneLifeChallengeActive ?? false;
  noOrderChallengeActive = saveData.noOrderChallengeActive ?? false;
  unlockedPizzaTypes = saveData.unlockedPizzaTypes ?? ["Cheese"];

  achievements = saveData.achievements ?? [];

  currentOrder = saveData.currentOrder ?? null;
  orderProgress = saveData.orderProgress ?? 0;
  orderTimeLeft = saveData.orderTimeLeft ?? 0;
  orderTimerRunning = saveData.orderTimerRunning ?? false;
  orderIsBoss = saveData.orderIsBoss ?? false;

  combo = saveData.combo ?? 0;
  comboMultiplier = saveData.comboMultiplier ?? 1;
  lastClickTime = saveData.lastClickTime ?? 0;

  buyAmount = cleanBuyAmount(saveData.buyAmount ?? 1);
  buyAmountInput.value = showBuyAmount(buyAmount);

  gameWon = saveData.gameWon ?? false;
  gameLost = saveData.gameLost ?? false;
  muted = saveData.muted ?? false;
  adminModeActive = saveData.adminModeActive ?? false;
  adminCanWin = saveData.adminCanWin ?? false;

  pizzaRushActive = false;
  pizzaRushTimeLeft = 0;
  document.body.classList.remove("rush-active");

  muteButton.textContent = muted ? "Mute: On" : "Mute: Off";

  if (adminWinGame) {
    adminWinGame.style.display = "none";
  }

  renderAchievements();
  renderPizzaCollection();
  updateOrderText();

  if (gameWon) {
    winGame();
  }

  if (gameLost) {
    gameOver();
  }
}

function resetSave() {
  localStorage.removeItem("pizzaShopSave");

  money = 0;
  pizzas = 0;
  moneyPerPizza = 1;
  workers = 0;

  ovenCost = 25;
  workerCost = 50;
  shopCost = 100;

  shopLevel = 0;
  pizzaType = "Cheese";
  customerBonusChance = 5;
  customerRating = 0;

  lives = 3;

  deliveryDrivers = 0;
  marketingLevel = 0;
  managers = 0;
  ingredientsLevel = 0;

  deliveryCost = 200;
  marketingCost = 300;
  managerCost = 500;
  ingredientsCost = 750;

  researchLevel = 0;
  researchCost = 10000;

  rebirths = 0;
  rebirthCost = 1e50;
  reputation = 0;
  badgeTitle = "Pizza Rookie";
  autoOrdersUnlocked = false;

  rebirthTokens = 0;
  permClickBoost = 0;
  permWorkerBoost = 0;
  permOrderBoost = 0;
  permLuckBoost = 0;
  autoBuyerUnlocked = false;

  autoRebirthUnlocked = false;
  autoRebirthActive = false;

  prestigeRushLevel = 0;
  prestigeCheapLevel = 0;
  prestigeOrderLevel = 0;

  totalMoneyEarned = 0;
  totalPizzasMade = 0;
  ordersCompleted = 0;
  highestCombo = 0;
  timePlayed = 0;

  selectedPizzaSkin = "🏪";
  usingCustomPizzaSkin = false;

  bossEventActive = false;
  bossEventName = "";
  bossEventTimeLeft = 0;
  bossEventMultiplier = 1;

  noWorkerChallengeActive = false;
  oneLifeChallengeActive = false;
  noOrderChallengeActive = false;

  unlockedPizzaTypes = ["Cheese"];
  achievements = [];

  currentOrder = null;
  orderProgress = 0;
  orderTimeLeft = 0;
  orderTimerRunning = false;
  orderIsBoss = false;

  combo = 0;
  comboMultiplier = 1;
  lastClickTime = 0;

  buyAmount = 1;
  gameWon = false;
  gameLost = false;
  muted = false;
  resetConfirm = false;

  purchaseLocked = false;

  pizzaRushActive = false;
  pizzaRushTimeLeft = 0;
  secretCode = "";

  adminModeActive = false;
  adminCanWin = false;

  document.body.classList.remove("rush-active", "light-text");
  document.body.classList.add("dark-text");

  for (let i = 1; i <= 50; i++) {
    document.body.classList.remove("level" + i);
  }

  document.body.classList.add("level1");

  let oldGameOver = document.querySelector(".game-over-screen");

  if (oldGameOver) {
    oldGameOver.remove();
  }

  closeGamePanels();

  settingsMenu.style.display = "none";
  adminPanel.style.display = "none";
  mainMenu.style.display = "flex";
  tutorialScreen.style.display = "none";

  buyAmountInput.value = "1";
  muteButton.textContent = "Mute: Off";
  resetButton.textContent = "Reset Save";

  makePizzaButton.style.pointerEvents = "auto";
  makePizzaButton.style.opacity = "1";

  enableGameButtons();

  achievementsBox.innerHTML = "";
  pizzaCollectionBox.innerHTML = "";

  orderText.textContent = "No order yet.";
  orderTimerText.textContent = "Timer: --";
  comboText.textContent = "1";
  rushText.textContent = "Off";
  bossEventText.textContent = "None";
  messageText.textContent = "Save reset! Everything is back to zero.";

  updateShopVisual();
  renderAchievements();
  renderPizzaCollection();
  updateOrderText();
  updateScreen();

  saveGame();
}

function updateBadgeTitle() {
  if (reputation >= 10000) {
    badgeTitle = "Pizza God";
  } else if (reputation >= 5000) {
    badgeTitle = "Pizza Legend";
  } else if (reputation >= 1000) {
    badgeTitle = "Pizza Boss";
  } else if (reputation >= 500) {
    badgeTitle = "Pizza Pro";
  } else if (reputation >= 100) {
    badgeTitle = "Pizza Maker";
  } else {
    badgeTitle = "Pizza Rookie";
  }

  if (reputation >= 1000) {
    autoOrdersUnlocked = true;
  }

  if (reputation >= 5000) {
    autoBuyerUnlocked = true;
  }
}

function updateUpgradeLevels() {
  let ovenLevel = moneyPerPizza - 1 - ingredientsLevel * 5 - researchLevel * 100;

  if (ovenLevel < 0) {
    ovenLevel = 0;
  }

  upgradeLevelsText.innerHTML =
    "🔥 Oven Level: " + formatNumber(ovenLevel) +
    " | 👨‍🍳 Workers: " + formatNumber(workers) +
    " | 🏪 Shop Level: " + formatNumber(shopLevel) +
    "<br>🚗 Drivers: " + formatNumber(deliveryDrivers) +
    " | 📢 Marketing Level: " + formatNumber(marketingLevel) +
    " | 🧑‍💼 Managers: " + formatNumber(managers) +
    " | ⭐ Ingredients Level: " + formatNumber(ingredientsLevel) +
    " | 🔬 Research Level: " + formatNumber(researchLevel);
}

function getUpgradeDiscountMultiplier() {
  let discount = prestigeCheapLevel * 0.03;

  if (discount > 0.5) {
    discount = 0.5;
  }

  return 1 - discount;
}

function getRushTime() {
  return 30 + prestigeRushLevel * 10;
}

function getPrestigeOrderMultiplier() {
  return 1 + prestigeOrderLevel * 0.25;
}

function formatTime(seconds) {
  let minutes = Math.floor(seconds / 60);
  let hours = Math.floor(minutes / 60);

  seconds = seconds % 60;
  minutes = minutes % 60;

  if (hours > 0) {
    return hours + "h " + minutes + "m " + seconds + "s";
  }

  if (minutes > 0) {
    return minutes + "m " + seconds + "s";
  }

  return seconds + "s";
}

function getTotalCost(startCost, increase) {
  buyAmount = cleanBuyAmount(buyAmount);

  let total = (buyAmount / 2) * (2 * startCost + (buyAmount - 1) * increase);

  if (!isFinite(total)) {
    return GOD_NUMBER;
  }

  return Math.floor(total * getUpgradeDiscountMultiplier());
}

function updateScreen() {
  updateBadgeTitle();

  if (rebirths >= 5) {
    autoRebirthUnlocked = true;
  }

  if (!isFinite(money)) {
    if (adminModeActive && !adminCanWin) {
      money = GOD_NUMBER;
    } else {
      winGame();
      return;
    }
  }

  if (!isFinite(moneyPerPizza)) moneyPerPizza = GOD_NUMBER;
  if (!isFinite(workers)) workers = GOD_NUMBER;
  if (!isFinite(shopLevel)) shopLevel = GOD_NUMBER;

  moneyText.textContent = formatNumber(money);
  upgradeMoneyText.textContent = formatNumber(money);
  pizzasText.textContent = formatNumber(pizzas);
  perPizzaText.textContent = formatNumber(moneyPerPizza);
  pizzaTypeText.textContent = pizzaType;
  ratingText.textContent = customerRating + "⭐ (" + getRatingMultiplier() + "x, " + getRatingBonusText() + ")";
  livesText.textContent = lives;
  achievementCountText.textContent = achievements.length;

  rebirthText.textContent = formatNumber(rebirths);
  rebirthTokensText.textContent = formatNumber(rebirthTokens);
  reputationText.textContent = formatNumber(reputation);
  badgeTitleText.textContent = badgeTitle;
  autoBuyerText.textContent = autoBuyerUnlocked ? "Unlocked" : "Locked";

  if (pizzaRushActive) {
    rushText.textContent = pizzaRushTimeLeft + "s left";
  } else {
    rushText.textContent = "Off";
  }

  bossEventText.textContent = bossEventActive
    ? bossEventName + " - " + bossEventTimeLeft + "s"
    : "None";

  ovenButton.textContent = "🔥 Upgrade Oven x" + formatNumber(buyAmount) + " $" + formatNumber(getTotalCost(ovenCost, 25));
  workerButton.textContent = "👨‍🍳 Hire Worker x" + formatNumber(buyAmount) + " $" + formatNumber(getTotalCost(workerCost, 50));
  shopButton.textContent = "🏪 Upgrade Shop x" + formatNumber(buyAmount) + " $" + formatNumber(getTotalCost(shopCost, 100));
  deliveryButton.textContent = "🚗 Delivery Driver x" + formatNumber(buyAmount) + " $" + formatNumber(getTotalCost(deliveryCost, 75));
  marketingButton.textContent = "📢 Marketing x" + formatNumber(buyAmount) + " $" + formatNumber(getTotalCost(marketingCost, 100));
  managerButton.textContent = "🧑‍💼 Manager x" + formatNumber(buyAmount) + " $" + formatNumber(getTotalCost(managerCost, 150));
  ingredientsButton.textContent = "⭐ Better Ingredients x" + formatNumber(buyAmount) + " $" + formatNumber(getTotalCost(ingredientsCost, 200));
  researchButton.textContent = "🔬 Research Lab x" + formatNumber(buyAmount) + " $" + formatNumber(getTotalCost(researchCost, 5000));
  rebirthButton.textContent = "🌟 Rebirth $" + formatNumber(rebirthCost);

  permClickButton.textContent = "🖱️ Click Boost Lv." + permClickBoost + " - 1 Token";
  permWorkerButton.textContent = "👨‍🍳 Worker Boost Lv." + permWorkerBoost + " - 1 Token";
  permOrderButton.textContent = "📦 Order Boost Lv." + permOrderBoost + " - 1 Token";
  permLuckButton.textContent = "🍀 Luck Boost Lv." + permLuckBoost + " - 1 Token";

  autoRebirthButton.textContent = autoRebirthUnlocked
    ? autoRebirthActive ? "🔁 Auto Rebirth: ON" : "🔁 Auto Rebirth: OFF"
    : "🔁 Auto Rebirth: Locked";

  prestigeRushButton.textContent = "🍕 Longer Rush Lv." + prestigeRushLevel + " - 2 Tokens";
  prestigeCheapButton.textContent = "💸 Cheaper Upgrades Lv." + prestigeCheapLevel + " - 2 Tokens";
  prestigeOrderButton.textContent = "📦 Better Orders Lv." + prestigeOrderLevel + " - 2 Tokens";

  totalMoneyEarnedText.textContent = formatNumber(totalMoneyEarned);
  totalPizzasMadeText.textContent = formatNumber(totalPizzasMade);
  ordersCompletedText.textContent = formatNumber(ordersCompleted);
  highestComboText.textContent = formatNumber(highestCombo);
  timePlayedText.textContent = formatTime(timePlayed);

  noWorkerChallenge.textContent = noWorkerChallengeActive ? "🚫 No Worker: ON" : "🚫 No Worker Challenge";
  oneLifeChallenge.textContent = oneLifeChallengeActive ? "❤️ One Life: ON" : "❤️ One Life Challenge";
  noOrderChallenge.textContent = noOrderChallengeActive ? "📦 No Order: ON" : "📦 No Order Challenge";

  megaOrderButton.disabled = shopLevel < 1000 || currentOrder !== null || noOrderChallengeActive;
  megaOrderButton.textContent = shopLevel >= 1000 ? "Mega Order" : "Mega Locked";

  updateUpgradeLevels();
  comboText.textContent = comboMultiplier;
}

function updateShopVisual() {
  for (let i = 1; i <= 50; i++) {
    document.body.classList.remove("level" + i);
  }

  let visualLevel = Math.floor(shopLevel / 50) + 1;

  if (visualLevel > 50) {
    visualLevel = 50;
  }

  let stages = [
    ["Cheese", "🏪"], ["Pepperoni", "🍕"], ["Supreme", "🍽️"], ["Golden", "👑"], ["Diamond", "💎"],
    ["Robot", "🤖"], ["Space", "🚀"], ["Alien", "👽"], ["Galaxy", "🌌"], ["Infinite", "♾️"],
    ["Fire", "🔥"], ["Ice", "❄️"], ["Lightning", "⚡"], ["Royal", "🏰"], ["Dragon", "🐉"],
    ["Ocean", "🌊"], ["Jungle", "🌴"], ["Volcano", "🌋"], ["Cloud", "☁️"], ["Moon", "🌙"],
    ["Sun", "☀️"], ["Star", "⭐"], ["Crystal", "🔮"], ["Ghost", "👻"], ["Zombie", "🧟"],
    ["Cyber", "💻"], ["Neon", "🟣"], ["Gold Rush", "🪙"], ["Mega", "🏢"], ["Factory", "🏭"],
    ["Airport", "✈️"], ["Train", "🚆"], ["Pirate", "🏴‍☠️"], ["Ninja", "🥷"], ["Samurai", "🗡️"],
    ["Wizard", "🧙"], ["Candy", "🍬"], ["Rainbow", "🌈"], ["Time", "⏰"], ["Portal", "🌀"],
    ["UFO", "🛸"], ["Mars", "🔴"], ["Saturn", "🪐"], ["Black Hole", "⚫"], ["Multiverse", "🌠"],
    ["Mythic", "🧿"], ["Godly", "✨"], ["Omega", "Ω"], ["Legend", "🏆"], ["Final", "👑"]
  ];

  let stage = stages[visualLevel - 1];

  pizzaType = stage[0];
  unlockPizzaType(pizzaType);

  if (usingCustomPizzaSkin) {
    pizzaVisual.textContent = selectedPizzaSkin;
  } else {
    pizzaVisual.textContent = stage[1];
  }

  document.body.classList.add("level" + visualLevel);

  document.body.classList.remove("light-text");
  document.body.classList.remove("dark-text");

  let darkTextLevels = [
    1, 2, 4, 5, 12, 13, 14, 19, 21, 22,
    26, 28, 29, 31, 37, 38, 39, 47, 49, 50
  ];

  if (darkTextLevels.includes(visualLevel)) {
    document.body.classList.add("dark-text");
  } else {
    document.body.classList.add("light-text");
  }

  pizzaTypeText.textContent = pizzaType;
}

function getPizzaBonus() {
  if (pizzaType === "Pepperoni") return 1.1;
  if (pizzaType === "Supreme") return 1.25;
  if (pizzaType === "Golden") return 1.5;
  if (pizzaType === "Diamond") return 2;
  if (pizzaType === "Robot") return 2.5;
  if (pizzaType === "Space") return 3;
  if (pizzaType === "Alien") return 3.5;
  if (pizzaType === "Galaxy") return 4;
  if (pizzaType === "Godly") return 10;
  if (pizzaType === "Final") return 25;

  return 1;
}

function getRatingMultiplier() {
  if (customerRating === 0) return 1;
  if (customerRating === 1) return 1;
  if (customerRating === 2) return 1.1;
  if (customerRating === 3) return 1.25;
  if (customerRating === 4) return 1.4;
  if (customerRating >= 5) return 1.5;

  return 1;
}

function getRatingBonusText() {
  if (customerRating === 0) return "Weak Shop";
  if (customerRating === 1) return "Small Tips";
  if (customerRating === 2) return "Normal Tips";
  if (customerRating === 3) return "Better Orders";
  if (customerRating === 4) return "Safer Shop";
  if (customerRating >= 5) return "VIP Customers";

  return "Weak Shop";
}

function getMilestoneMultiplier() {
  let multiplier = 1;

  if (workers >= 100) multiplier += 0.1;
  if (workers >= 1000) multiplier += 0.25;
  if (shopLevel >= 10000) multiplier += 0.5;
  if (moneyPerPizza >= 1000000) multiplier += 0.25;
  if (researchLevel >= 10) multiplier += 0.5;
  if (researchLevel >= 100) multiplier += 1;

  return multiplier;
}

function getRebirthMultiplier() {
  return 1 + rebirths;
}

function getPermanentClickMultiplier() {
  return 1 + permClickBoost * 0.1;
}

function getPermanentWorkerMultiplier() {
  return 1 + permWorkerBoost * 0.1;
}

function getPermanentOrderMultiplier() {
  return 1 + permOrderBoost * 0.1;
}

function getPermanentLuckBonus() {
  return permLuckBoost * 2;
}

function getPizzaSkinIcon(type) {
  let skins = {
    Cheese: "🏪",
    Pepperoni: "🍕",
    Supreme: "🍽️",
    Golden: "👑",
    Diamond: "💎",
    Robot: "🤖",
    Space: "🚀",
    Alien: "👽",
    Galaxy: "🌌",
    Infinite: "♾️",
    Fire: "🔥",
    Ice: "❄️",
    Lightning: "⚡",
    Royal: "🏰",
    Dragon: "🐉",
    Ocean: "🌊",
    Jungle: "🌴",
    Volcano: "🌋",
    Cloud: "☁️",
    Moon: "🌙",
    Sun: "☀️",
    Star: "⭐",
    Crystal: "🔮",
    Ghost: "👻",
    Zombie: "🧟",
    Cyber: "💻",
    Neon: "🟣",
    "Gold Rush": "🪙",
    Mega: "🏢",
    Factory: "🏭",
    Airport: "✈️",
    Train: "🚆",
    Pirate: "🏴‍☠️",
    Ninja: "🥷",
    Samurai: "🗡️",
    Wizard: "🧙",
    Candy: "🍬",
    Rainbow: "🌈",
    Time: "⏰",
    Portal: "🌀",
    UFO: "🛸",
    Mars: "🔴",
    Saturn: "🪐",
    "Black Hole": "⚫",
    Multiverse: "🌠",
    Mythic: "🧿",
    Godly: "✨",
    Omega: "Ω",
    Legend: "🏆",
    Final: "👑"
  };

  return skins[type] ?? "🍕";
}

function unlockPizzaType(type) {
  if (!unlockedPizzaTypes.includes(type)) {
    unlockedPizzaTypes.push(type);
    renderPizzaCollection();
    unlockAchievement(type + " Pizza Unlocked");
  }
}

function renderPizzaCollection() {
  pizzaCollectionBox.innerHTML = "";

  for (let i = 0; i < unlockedPizzaTypes.length; i++) {
    let type = unlockedPizzaTypes[i];

    let pizzaBadge = document.createElement("button");
    pizzaBadge.className = "achievement pizza-skin-button";
    pizzaBadge.textContent = getPizzaSkinIcon(type) + " " + type;

    pizzaBadge.onclick = function() {
      selectedPizzaSkin = getPizzaSkinIcon(type);
      usingCustomPizzaSkin = true;
      pizzaVisual.textContent = selectedPizzaSkin;
      messageText.textContent = "Pizza skin changed to " + type + "!";
      saveGame();
      renderPizzaCollection();
    };

    if (usingCustomPizzaSkin && selectedPizzaSkin === getPizzaSkinIcon(type)) {
      pizzaBadge.classList.add("selected-skin");
    }

    pizzaCollectionBox.appendChild(pizzaBadge);
  }

  let resetButton = document.createElement("button");
  resetButton.className = "achievement pizza-skin-button";
  resetButton.textContent = "🔄 Auto Skin";

  resetButton.onclick = function() {
    usingCustomPizzaSkin = false;
    updateShopVisual();
    messageText.textContent = "Pizza skin set back to auto.";
    saveGame();
    renderPizzaCollection();
  };

  pizzaCollectionBox.appendChild(resetButton);
}

function showTutorialStep() {
  clearTutorialHighlights();

  let step = tutorialSteps[tutorialStep];

  tutorialTitle.textContent = step.title;
  tutorialText.textContent = step.text;

  let tutorialBox = document.querySelector(".tutorial-box");

  tutorialBox.style.left = "50%";
  tutorialBox.style.right = "auto";
  tutorialBox.style.transform = "translateX(-50%)";

  let target = null;

  if (step.highlight !== null) {
    target = document.getElementById(step.highlight);
  }

  if (target) {
    target.classList.add("tutorial-highlight");

    target.scrollIntoView({
      behavior: "auto",
      block: "center"
    });
  }

  if (step.highlight === "statsPanel" || step.highlight === "settingsButton") {
    tutorialBox.style.top = "auto";
    tutorialBox.style.bottom = "25px";
  } else {
    tutorialBox.style.top = "25px";
    tutorialBox.style.bottom = "auto";
  }

  if (tutorialStep === tutorialSteps.length - 1) {
    tutorialNextButton.textContent = "Start Game";
  } else {
    tutorialNextButton.textContent = "Next";
  }
}

function createNewOrder(isBoss, isVIP, isMega) {
  if (currentOrder !== null) {
    messageText.textContent = "Finish your current order first!";
    return;
  }

  if (noOrderChallengeActive) {
    messageText.textContent = "Orders are disabled in No Order Challenge.";
    return;
  }

  if (isVIP && customerRating < 5) {
    messageText.textContent = "VIP Orders unlock at 5-star rating!";
    return;
  }

  if (isMega && shopLevel < 1000) {
    messageText.textContent = "Mega Orders unlock at Shop Level 1000!";
    return;
  }

  let required;
  let reward;
  let time;

  if (isMega) {
    required = Math.floor(Math.random() * 1000) + 1000;
    reward = required * moneyPerPizza * 100 * Math.max(customerRating, 1);
    time = 180;
    orderIsBoss = false;
  } else if (isBoss) {
    required = Math.floor(Math.random() * 300) + 200;
    reward = required * moneyPerPizza * 20 * Math.max(customerRating, 1);
    time = 90;
    orderIsBoss = true;
  } else if (isVIP) {
    required = Math.floor(Math.random() * 150) + 80;
    reward = required * moneyPerPizza * 35 * Math.max(customerRating, 1);
    time = 75;
    orderIsBoss = false;
  } else {
    required = Math.floor(Math.random() * 50) + 10;
    reward = required * moneyPerPizza * 8 * Math.max(customerRating, 1);
    time = 45;
    orderIsBoss = false;
  }

  reward *= getPermanentOrderMultiplier() * getPrestigeOrderMultiplier();

  currentOrder = {
    required: required,
    reward: reward,
    vip: isVIP,
    mega: isMega
  };

  orderProgress = 0;
  orderTimeLeft = time;
  orderTimerRunning = true;

  updateOrderText();
  saveGame();
}

function updateOrderText() {
  if (currentOrder === null) {
    orderText.textContent = "No order yet.";
    orderTimerText.textContent = "Timer: --";

    newOrderButton.disabled = noOrderChallengeActive;
    bossOrderButton.disabled = noOrderChallengeActive;
    vipOrderButton.disabled = customerRating < 5 || noOrderChallengeActive;
    megaOrderButton.disabled = shopLevel < 1000 || noOrderChallengeActive;

    newOrderButton.textContent = "Get New Order";
    bossOrderButton.textContent = "Boss Order";
    vipOrderButton.textContent = customerRating >= 5 ? "VIP Order" : "VIP Locked";
    megaOrderButton.textContent = shopLevel >= 1000 ? "Mega Order" : "Mega Locked";
    return;
  }

  let typeText = "Order";

  if (orderIsBoss) {
    typeText = "BOSS ORDER";
  }

  if (currentOrder.vip) {
    typeText = "VIP ORDER";
  }

  if (currentOrder.mega) {
    typeText = "MEGA ORDER";
  }

  orderText.textContent =
    typeText +
    ": " +
    Math.floor(orderProgress) +
    "/" +
    currentOrder.required +
    " pizzas. Reward: $" +
    formatNumber(currentOrder.reward);

  orderTimerText.textContent = "Timer: " + orderTimeLeft + "s";

  newOrderButton.disabled = true;
  bossOrderButton.disabled = true;
  vipOrderButton.disabled = true;
  megaOrderButton.disabled = true;

  newOrderButton.textContent = "Finish Current Order";
  bossOrderButton.textContent = "Locked";
  vipOrderButton.textContent = "Locked";
  megaOrderButton.textContent = "Locked";
}

function updateOrderProgress(amount) {
  if (currentOrder === null) return;

  orderProgress += amount;

  if (orderProgress >= currentOrder.required) {
    customerRating++;
    ordersCompleted++;

    if (customerRating > 5) {
      customerRating = 5;
    }

    reputation += 25;

    if (orderIsBoss) {
      reputation += 100;
    }

    if (currentOrder.vip) {
      reputation += 250;
    }

    if (currentOrder.mega) {
      reputation += 1000;
    }

    earnMoney(currentOrder.reward);

    messageText.textContent =
      "Order complete! Rating and reputation increased! You earned $" + formatNumber(currentOrder.reward) + "!";

    showFloatingMoney(currentOrder.reward);

    if (orderIsBoss) {
      unlockAchievement("Boss Order Complete");
    } else if (currentOrder.vip) {
      unlockAchievement("VIP Order Complete");
    } else if (currentOrder.mega) {
      unlockAchievement("Mega Order Complete");
    } else {
      unlockAchievement("Order Complete");
    }

    currentOrder = null;
    orderProgress = 0;
    orderTimeLeft = 0;
    orderTimerRunning = false;
    orderIsBoss = false;

    updateOrderText();
  } else {
    updateOrderText();
  }
}

newOrderButton.onclick = function() {
  if (gameWon || gameLost) return;

  if (noOrderChallengeActive) {
    messageText.textContent = "Orders are disabled in No Order Challenge.";
    return;
  }

  createNewOrder(false, false, false);

  if (currentOrder !== null) {
    messageText.textContent = "New pizza order received!";
  }
};

bossOrderButton.onclick = function() {
  if (gameWon || gameLost) return;

  if (noOrderChallengeActive) {
    messageText.textContent = "Orders are disabled in No Order Challenge.";
    return;
  }

  createNewOrder(true, false, false);

  if (currentOrder !== null) {
    messageText.textContent = "Boss order received!";
  }
};

vipOrderButton.onclick = function() {
  if (gameWon || gameLost) return;

  if (noOrderChallengeActive) {
    messageText.textContent = "Orders are disabled in No Order Challenge.";
    return;
  }

  createNewOrder(false, true, false);

  if (currentOrder !== null) {
    messageText.textContent = "VIP order received!";
  }
};

megaOrderButton.onclick = function() {
  if (gameWon || gameLost) return;

  if (noOrderChallengeActive) {
    messageText.textContent = "Orders are disabled in No Order Challenge.";
    return;
  }

  createNewOrder(false, false, true);

  if (currentOrder !== null) {
    messageText.textContent = "Mega order received!";
  }
};

function checkCustomerTip() {
  let randomChance = Math.floor(Math.random() * 100) + 1;

  if (randomChance <= customerBonusChance + getPermanentLuckBonus()) {
    let tip = shopLevel * 10 + marketingLevel * 20 + Math.max(customerRating, 1) * 25;
    earnMoney(tip);
    messageText.textContent = "A customer tipped you $" + formatNumber(tip) + "!";
    showFloatingMoney(tip);
  }
}

function loseLife(reason) {
  if (gameWon || gameLost) return;

  lives--;
  messageText.textContent = reason + " You lost 1 life!";

  if (lives <= 0) {
    gameOver();
    return;
  }

  updateScreen();
  saveGame();
}

function disableGameButtons() {
  makePizzaButton.style.pointerEvents = "none";
  makePizzaButton.style.opacity = "0.5";

  ovenButton.disabled = true;
  workerButton.disabled = true;
  shopButton.disabled = true;
  deliveryButton.disabled = true;
  marketingButton.disabled = true;
  managerButton.disabled = true;
  ingredientsButton.disabled = true;
  researchButton.disabled = true;
  rebirthButton.disabled = true;
  newOrderButton.disabled = true;
  bossOrderButton.disabled = true;
  vipOrderButton.disabled = true;
  megaOrderButton.disabled = true;
}

function enableGameButtons() {
  makePizzaButton.style.pointerEvents = "auto";
  makePizzaButton.style.opacity = "1";

  ovenButton.disabled = false;
  workerButton.disabled = false;
  shopButton.disabled = false;
  deliveryButton.disabled = false;
  marketingButton.disabled = false;
  managerButton.disabled = false;
  ingredientsButton.disabled = false;
  researchButton.disabled = false;
  rebirthButton.disabled = false;
  newOrderButton.disabled = noOrderChallengeActive;
  bossOrderButton.disabled = noOrderChallengeActive;
  vipOrderButton.disabled = customerRating < 5 || noOrderChallengeActive;
  megaOrderButton.disabled = shopLevel < 1000 || noOrderChallengeActive;
}

function gameOver() {
  if (gameLost) return;

  gameLost = true;
  disableGameButtons();

  let oldScreen = document.querySelector(".game-over-screen");

  if (oldScreen) {
    oldScreen.remove();
  }

  let screen = document.createElement("div");
  screen.className = "game-over-screen";
  screen.innerHTML = `
    <div>
      <h1>💀 Game Over</h1>
      <p>Your pizza shop failed!</p>
      <button onclick="resetSave();">Restart</button>
    </div>
  `;

  document.body.appendChild(screen);
  saveGame();
}

function winGame() {
  if (gameWon) return;

  if (adminModeActive && !adminCanWin) {
    money = GOD_NUMBER;
    updateScreen();
    return;
  }

  gameWon = true;

  moneyText.textContent = "∞";
  pizzasText.textContent = "∞";
  perPizzaText.textContent = "∞";
  pizzaTypeText.textContent = "Infinite";
  livesText.textContent = "∞";

  pizzaVisual.textContent = "♾️";

  messageText.textContent = "YOU WIN! Your pizza shop reached infinite money!";

  disableGameButtons();
  saveGame();
}

function unlockAchievement(name) {
  if (!achievements.includes(name)) {
    achievements.push(name);
    renderAchievements();
    messageText.textContent = "Achievement unlocked: " + name + "!";
    saveGame();
  }
}

function renderAchievements() {
  achievementsBox.innerHTML = "";

  for (let i = 0; i < achievements.length; i++) {
    let badge = document.createElement("div");
    badge.className = "achievement";
    badge.textContent = "🏆 " + achievements[i];
    achievementsBox.appendChild(badge);
  }

  achievementCountText.textContent = achievements.length;
}

function checkAchievements() {
  if (pizzas >= 1) unlockAchievement("First Pizza");
  if (workers >= 1) unlockAchievement("First Worker");
  if (money >= 1000) unlockAchievement("Thousandaire");
  if (money >= 1000000) unlockAchievement("Millionaire");
  if (shopLevel >= 50) unlockAchievement("Shop Level 50");
  if (shopLevel >= 500) unlockAchievement("Shop Level 500");
  if (deliveryDrivers >= 1) unlockAchievement("First Delivery");
  if (marketingLevel >= 1) unlockAchievement("Advertiser");
  if (managers >= 1) unlockAchievement("Manager Boss");
  if (ingredientsLevel >= 1) unlockAchievement("Better Pizza");
  if (researchLevel >= 1) unlockAchievement("Research Started");
  if (researchLevel >= 100) unlockAchievement("Pizza Scientist");
  if (rebirths >= 1) unlockAchievement("Reborn Shop");
  if (rebirths >= 5) unlockAchievement("Auto Rebirth Unlocked");
  if (reputation >= 1000) unlockAchievement("Famous Pizza Shop");
  if (rebirthTokens >= 1) unlockAchievement("Token Collector");
  if (prestigeRushLevel + prestigeCheapLevel + prestigeOrderLevel >= 1) unlockAchievement("Prestige Power");
  if (permClickBoost + permWorkerBoost + permOrderBoost + permLuckBoost >= 1) unlockAchievement("Permanent Power");
  if (unlockedPizzaTypes.length >= 10) unlockAchievement("Pizza Collector");
  if (ordersCompleted >= 10) unlockAchievement("10 Orders Complete");
  if (timePlayed >= 600) unlockAchievement("Played 10 Minutes");
  if (lives === 1) unlockAchievement("Last Life");
  if (combo >= 10) unlockAchievement("10 Combo");
  if (combo >= 50) unlockAchievement("50 Combo");
  if (combo >= 100) unlockAchievement("100 Combo");
  if (customerRating >= 5) unlockAchievement("Five Star Shop");
}

function startPizzaRush() {
  if (pizzaRushActive || gameWon || gameLost) return;

  pizzaRushActive = true;
  pizzaRushTimeLeft = getRushTime();

  document.body.classList.add("rush-active");

  messageText.textContent = "🍕 Pizza Rush started! 2x money for " + pizzaRushTimeLeft + " seconds!";
  unlockAchievement("Pizza Rush");

  updateScreen();
  saveGame();

  let rushTimer = setInterval(function() {
    if (gameLost || gameWon) {
      document.body.classList.remove("rush-active");
      clearInterval(rushTimer);
      return;
    }

    pizzaRushTimeLeft--;

    if (pizzaRushTimeLeft <= 0) {
      pizzaRushActive = false;
      pizzaRushTimeLeft = 0;

      document.body.classList.remove("rush-active");

      clearInterval(rushTimer);

      messageText.textContent = "Pizza Rush ended.";
      updateScreen();
      saveGame();
      return;
    }

    updateScreen();
  }, 1000);
}

function startBossEvent() {
  if (bossEventActive || gameWon || gameLost) return;

  let event = Math.floor(Math.random() * 4) + 1;

  bossEventActive = true;
  bossEventTimeLeft = 45;

  if (event === 1) {
    bossEventName = "🍕 Pizza Inspector";
    bossEventMultiplier = 0.5;
    messageText.textContent = "Boss Event: Pizza Inspector! Money is weaker for 45 seconds.";
  }

  if (event === 2) {
    bossEventName = "💰 Rich Customer";
    bossEventMultiplier = 3;
    messageText.textContent = "Boss Event: Rich Customer! Money is 3x for 45 seconds.";
  }

  if (event === 3) {
    bossEventName = "🔥 Kitchen Fire";
    bossEventMultiplier = 0.75;
    lives--;

    if (lives <= 0) {
      gameOver();
      return;
    }

    messageText.textContent = "Boss Event: Kitchen Fire! You lost 1 life and money is weaker.";
  }

  if (event === 4) {
    bossEventName = "⚡ Mega Rush";
    bossEventMultiplier = 5;
    messageText.textContent = "Boss Event: Mega Rush! Money is 5x for 45 seconds.";
  }

  updateScreen();
  saveGame();

  let bossTimer = setInterval(function() {
    if (gameWon || gameLost) {
      clearInterval(bossTimer);
      return;
    }

    bossEventTimeLeft--;

    if (bossEventTimeLeft <= 0) {
      bossEventActive = false;
      bossEventName = "";
      bossEventTimeLeft = 0;
      bossEventMultiplier = 1;

      messageText.textContent = "Boss Event ended.";

      clearInterval(bossTimer);
      updateScreen();
      saveGame();
      return;
    }

    updateScreen();
  }, 1000);
}

function adminAction(message) {
  if (!isFinite(money)) money = GOD_NUMBER;
  if (!isFinite(moneyPerPizza)) moneyPerPizza = GOD_NUMBER;
  if (!isFinite(workers)) workers = GOD_NUMBER;
  if (!isFinite(shopLevel)) shopLevel = GOD_NUMBER;
  if (!isFinite(reputation)) reputation = GOD_NUMBER;
  if (!isFinite(rebirthTokens)) rebirthTokens = GOD_NUMBER;

  messageText.textContent = message;

  updateShopVisual();
  updateOrderText();
  updateScreen();
  checkAchievements();
  saveGame();
}

function activateGodMode() {
  adminModeActive = true;
  adminCanWin = false;

  settingsMenu.style.display = "none";
  adminPanel.style.display = "flex";

  if (adminWinGame) {
    adminWinGame.style.display = "none";
  }

  adminAction("Admin Panel unlocked! You cannot win while normal Admin Mode is active.");
}

function activateAdminWinMode() {
  adminModeActive = true;
  adminCanWin = true;

  settingsMenu.style.display = "none";
  adminPanel.style.display = "flex";

  if (adminWinGame) {
    adminWinGame.style.display = "block";
  }

  adminAction("Admin Win Mode unlocked! Force Win is available.");
}

document.addEventListener("keydown", function(event) {
  secretCode += event.key.toLowerCase();

  if (secretCode.length > 20) {
    secretCode = secretCode.slice(-20);
  }

  if (secretCode.includes("winrain")) {
    activateAdminWinMode();
    secretCode = "";
    return;
  }

  if (secretCode.includes("rain")) {
    activateGodMode();
    secretCode = "";
  }
});

function parseAdminAmount(value) {
  let text = String(value).trim().toLowerCase();
  text = text.replaceAll(",", "");

  if (text === "") return 0;

  let amount = Number(text);

  if (isNaN(amount)) {
    return 0;
  }

  if (!isFinite(amount)) {
    return GOD_NUMBER;
  }

  return amount;
}

adminAddMoney.onclick = function() {
  money += 1e30;

  if (!isFinite(money)) {
    if (adminCanWin) {
      winGame();
      return;
    }

    money = GOD_NUMBER;
  }

  adminAction("Admin added $1e30!");
};

adminSetMoneyMax.onclick = function() {
  money = GOD_NUMBER;

  adminAction("Admin set money to MAX!");
};

adminMaxRating.onclick = function() {
  customerRating = 5;

  adminAction("Admin set rating to 5 stars!");
};

adminStartRush.onclick = function() {
  startPizzaRush();

  adminAction("Admin started Pizza Rush!");
};

adminHealLives.onclick = function() {
  lives = 3;
  gameLost = false;

  enableGameButtons();

  let oldGameOver = document.querySelector(".game-over-screen");

  if (oldGameOver) {
    oldGameOver.remove();
  }

  adminAction("Admin restored lives!");
};

adminUnlockEverything.onclick = function() {
  customerRating = 5;
  reputation += 100000;
  rebirthTokens += 100;
  rebirths += 10;

  autoOrdersUnlocked = true;
  autoBuyerUnlocked = true;
  autoRebirthUnlocked = true;

  permClickBoost += 10;
  permWorkerBoost += 10;
  permOrderBoost += 10;
  permLuckBoost += 10;

  prestigeRushLevel += 5;
  prestigeCheapLevel += 5;
  prestigeOrderLevel += 5;

  shopLevel += 2500;
  moneyPerPizza += 1e20;
  workers += 100000;
  managers += 1000;
  deliveryDrivers += 1000;
  marketingLevel += 1000;
  ingredientsLevel += 1000;
  researchLevel += 1000;

  unlockPizzaType("Cheese");
  unlockPizzaType("Pepperoni");
  unlockPizzaType("Supreme");
  unlockPizzaType("Golden");
  unlockPizzaType("Diamond");
  unlockPizzaType("Robot");
  unlockPizzaType("Space");
  unlockPizzaType("Alien");
  unlockPizzaType("Galaxy");
  unlockPizzaType("Infinite");
  unlockPizzaType("Final");

  adminAction("Admin unlocked almost everything!");
};

adminApplyUpgrade.onclick = function() {
  let type = adminUpgradeSelect.value;
  let amount = parseAdminAmount(adminUpgradeAmount.value);

  if (amount <= 0) {
    messageText.textContent = "Type a valid amount first.";
    return;
  }

  if (type === "money") money += amount;
  if (type === "moneyPerPizza") moneyPerPizza += amount;
  if (type === "workers") workers += amount;
  if (type === "shopLevel") {
    shopLevel += amount;
    moneyPerPizza += amount * 2;
  }
  if (type === "deliveryDrivers") deliveryDrivers += amount;
  if (type === "marketingLevel") {
    marketingLevel += amount;
    customerBonusChance += amount * 2;

    if (customerBonusChance > 90) {
      customerBonusChance = 90;
    }
  }
  if (type === "managers") managers += amount;
  if (type === "ingredientsLevel") {
    ingredientsLevel += amount;
    moneyPerPizza += amount * 5;
  }
  if (type === "researchLevel") {
    researchLevel += amount;
    moneyPerPizza += amount * 100;
  }
  if (type === "reputation") reputation += amount;
  if (type === "rebirthTokens") rebirthTokens += amount;
  if (type === "rebirths") rebirths += amount;
  if (type === "lives") lives += amount;
  if (type === "rating") {
    customerRating += amount;

    if (customerRating > 5) {
      customerRating = 5;
    }
  }

  adminAction("Admin added " + formatNumber(amount) + " to " + type + ".");
};

adminWinGame.onclick = function() {
  if (!adminCanWin) {
    messageText.textContent = "Force Win only works in Admin Win Mode.";
    return;
  }

  winGame();
};

adminClose.onclick = function() {
  adminPanel.style.display = "none";
};

menuStartButton.onclick = function() {
  mainMenu.style.display = "none";
  tutorialScreen.style.display = "none";
  messageText.textContent = "Game started!";
};

menuTutorialButton.onclick = function() {
  mainMenu.style.display = "none";
  startTutorial();
};

menuCreditsButton.onclick = function() {
  if (creditsText.style.display === "none" || creditsText.style.display === "") {
    creditsText.style.display = "block";
  } else {
    creditsText.style.display = "none";
  }
};

settingsButton.onclick = function() {
  settingsMenu.style.display = "flex";
};

closeSettingsButton.onclick = function() {
  settingsMenu.style.display = "none";
};

muteButton.onclick = function() {
  muted = !muted;
  muteButton.textContent = muted ? "Mute: On" : "Mute: Off";
  saveGame();
};

returnMenuButton.onclick = function() {
  settingsMenu.style.display = "none";
  mainMenu.style.display = "flex";
  tutorialScreen.style.display = "none";
  adminPanel.style.display = "none";
  adminWinGame.style.display = "none";
  saveGame();

  document.querySelectorAll(".floating-money").forEach(function(text) {
    text.remove();
  });

  floatingTextCount = 0;

  resetConfirm = false;
  resetButton.textContent = "Reset Save";
};

saveButton.onclick = function() {
  saveGame();
  messageText.textContent = "Game saved!";
};

resetButton.onclick = function() {
  if (!resetConfirm) {
    resetConfirm = true;
    resetButton.textContent = "Click Again to Reset";
    messageText.textContent = "Click Reset again to confirm.";

    setTimeout(function() {
      resetConfirm = false;
      resetButton.textContent = "Reset Save";
    }, 3000);

    return;
  }

  resetConfirm = false;
  resetButton.textContent = "Reset Save";
  resetSave();
};

makePizzaButton.onclick = function() {
  if (gameWon || gameLost) return;

  let now = Date.now();

  if (now - lastClickTime <= comboResetTime) {
    combo++;
  } else {
    combo = 1;
  }

  lastClickTime = now;

  if (combo > highestCombo) {
    highestCombo = combo;
  }

  if (combo >= 100) {
    comboMultiplier = 5;
  } else if (combo >= 50) {
    comboMultiplier = 4;
  } else if (combo >= 25) {
    comboMultiplier = 3;
  } else if (combo >= 10) {
    comboMultiplier = 2;
  } else {
    comboMultiplier = 1;
  }

  let earned =
  moneyPerPizza *
  comboMultiplier *
  getPizzaBonus() *
  getRatingMultiplier() *
  getMilestoneMultiplier() *
  getRebirthMultiplier() *
  getPermanentClickMultiplier();

if (pizzaRushActive) {
  earned *= 2;
  combo++;
}

if (bossEventActive) {
  earned *= bossEventMultiplier;
}

earned = Math.floor(earned);

if (earned < 1) {
  earned = 1;
}

  pizzas++;
  totalPizzasMade++;

  earnMoney(earned);
  showFloatingMoney(earned);
  updateOrderProgress(1);

  messageText.textContent =
    "You made a " + pizzaType + " pizza! Combo x" + comboMultiplier;

  checkCustomerTip();
  checkAchievements();
  updateScreen();
};

ovenButton.onclick = function() {
  if (gameWon || gameLost || purchaseLocked) return;
  lockPurchase();

  let totalCost = getTotalCost(ovenCost, 25);

  if (money >= totalCost) {
    money -= totalCost;
    moneyPerPizza += buyAmount;
    ovenCost += 25 * buyAmount;
    messageText.textContent = "You upgraded the oven x" + formatNumber(buyAmount) + "!";
  } else {
    messageText.textContent = "Not enough money for oven upgrades.";
  }

  checkAchievements();
  updateScreen();
  saveGame();
};

workerButton.onclick = function() {
  if (gameWon || gameLost || purchaseLocked) return;

  if (noWorkerChallengeActive) {
    messageText.textContent = "Workers are disabled in No Worker Challenge.";
    return;
  }

  lockPurchase();

  let totalCost = getTotalCost(workerCost, 50);

  if (money >= totalCost) {
    money -= totalCost;
    workers += buyAmount;
    workerCost += 50 * buyAmount;
    messageText.textContent = "You hired " + formatNumber(buyAmount) + " worker(s)!";
  } else {
    messageText.textContent = "Not enough money to hire workers.";
  }

  checkAchievements();
  updateScreen();
  saveGame();
};

shopButton.onclick = function() {
  if (gameWon || gameLost || purchaseLocked) return;
  lockPurchase();

  let totalCost = getTotalCost(shopCost, 100);

  if (money >= totalCost) {
    money -= totalCost;

    let oldShopLevel = shopLevel;
    let amount = buyAmount;

    shopLevel += amount;
    customerBonusChance += 3 * amount;

    if (customerBonusChance > 80) {
      customerBonusChance = 80;
    }

    let oldBonusLevel = Math.floor(oldShopLevel / 5);
    let newBonusLevel = Math.floor(shopLevel / 5);

    let bonusGain = 0;

    if (newBonusLevel > oldBonusLevel) {
      bonusGain = (newBonusLevel - oldBonusLevel) * 2;
    }

    moneyPerPizza += amount * 2 + bonusGain;
    shopCost += 100 * amount;

    updateShopVisual();
    messageText.textContent = "Shop upgraded to Level " + formatNumber(shopLevel) + "!";
  } else {
    messageText.textContent = "Not enough money for shop upgrades.";
  }

  checkAchievements();
  updateScreen();
  saveGame();
};

deliveryButton.onclick = function() {
  if (gameWon || gameLost || purchaseLocked) return;
  lockPurchase();

  let totalCost = getTotalCost(deliveryCost, 75);

  if (money >= totalCost) {
    money -= totalCost;
    deliveryDrivers += buyAmount;
    deliveryCost += 75 * buyAmount;
    messageText.textContent = "You bought delivery drivers x" + formatNumber(buyAmount) + "!";
  } else {
    messageText.textContent = "Not enough money for delivery drivers.";
  }

  checkAchievements();
  updateScreen();
  saveGame();
};

marketingButton.onclick = function() {
  if (gameWon || gameLost || purchaseLocked) return;
  lockPurchase();

  let totalCost = getTotalCost(marketingCost, 100);

  if (money >= totalCost) {
    money -= totalCost;
    marketingLevel += buyAmount;
    customerBonusChance += 2 * buyAmount;
    marketingCost += 100 * buyAmount;

    if (customerBonusChance > 90) {
      customerBonusChance = 90;
    }

    messageText.textContent = "Marketing upgraded x" + formatNumber(buyAmount) + "!";
  } else {
    messageText.textContent = "Not enough money for marketing.";
  }

  checkAchievements();
  updateScreen();
  saveGame();
};

managerButton.onclick = function() {
  if (gameWon || gameLost || purchaseLocked) return;
  lockPurchase();

  let totalCost = getTotalCost(managerCost, 150);

  if (money >= totalCost) {
    money -= totalCost;
    managers += buyAmount;
    managerCost += 150 * buyAmount;
    messageText.textContent = "You hired managers x" + formatNumber(buyAmount) + "!";
  } else {
    messageText.textContent = "Not enough money for managers.";
  }

  checkAchievements();
  updateScreen();
  saveGame();
};

ingredientsButton.onclick = function() {
  if (gameWon || gameLost || purchaseLocked) return;
  lockPurchase();

  let totalCost = getTotalCost(ingredientsCost, 200);

  if (money >= totalCost) {
    money -= totalCost;
    ingredientsLevel += buyAmount;
    moneyPerPizza += 5 * buyAmount;
    ingredientsCost += 200 * buyAmount;
    messageText.textContent = "Better ingredients upgraded x" + formatNumber(buyAmount) + "!";
  } else {
    messageText.textContent = "Not enough money for better ingredients.";
  }

  checkAchievements();
  updateScreen();
  saveGame();
};

researchButton.onclick = function() {
  if (gameWon || gameLost || purchaseLocked) return;
  lockPurchase();

  let totalCost = getTotalCost(researchCost, 5000);

  if (money >= totalCost) {
    money -= totalCost;
    researchLevel += buyAmount;
    researchCost += 5000 * buyAmount;
    moneyPerPizza += 100 * buyAmount;
    messageText.textContent = "Research Lab upgraded x" + formatNumber(buyAmount) + "!";
  } else {
    messageText.textContent = "Not enough money for Research Lab.";
  }

  checkAchievements();
  updateScreen();
  saveGame();
};

rebirthButton.onclick = function() {
  if (gameWon || gameLost) return;

  if (money < rebirthCost) {
    messageText.textContent = "You need $" + formatNumber(rebirthCost) + " to rebirth.";
    return;
  }

  rebirths++;
  rebirthTokens++;
  rebirthCost *= 1000;

  money = 0;
  pizzas = 0;
  moneyPerPizza = 1;
  workers = 0;

  ovenCost = 25;
  workerCost = 50;
  shopCost = 100;

  shopLevel = 0;
  pizzaType = "Cheese";
  customerBonusChance = 5;
  customerRating = 0;

  deliveryDrivers = 0;
  marketingLevel = 0;
  managers = 0;
  ingredientsLevel = 0;
  researchLevel = 0;

  deliveryCost = 200;
  marketingCost = 300;
  managerCost = 500;
  ingredientsCost = 750;
  researchCost = 10000;

  currentOrder = null;
  orderProgress = 0;
  orderTimeLeft = 0;
  orderTimerRunning = false;
  orderIsBoss = false;

  reputation += 100;

  if (rebirths >= 5) {
    autoRebirthUnlocked = true;
  }

  messageText.textContent =
    "🌟 Rebirth complete! You gained 1 token and now have x" + getRebirthMultiplier() + " permanent money.";

  updateShopVisual();
  updateOrderText();
  updateScreen();
  saveGame();
};

function buyPermanentUpgrade(type) {
  if (rebirthTokens < 1) {
    messageText.textContent = "You need 1 rebirth token.";
    return;
  }

  rebirthTokens--;

  if (type === "click") {
    permClickBoost++;
    messageText.textContent = "Permanent Click Boost upgraded!";
  }

  if (type === "worker") {
    permWorkerBoost++;
    messageText.textContent = "Permanent Worker Boost upgraded!";
  }

  if (type === "order") {
    permOrderBoost++;
    messageText.textContent = "Permanent Order Boost upgraded!";
  }

  if (type === "luck") {
    permLuckBoost++;
    messageText.textContent = "Permanent Luck Boost upgraded!";
  }

  updateScreen();
  saveGame();
}

permClickButton.onclick = function() {
  buyPermanentUpgrade("click");
};

permWorkerButton.onclick = function() {
  buyPermanentUpgrade("worker");
};

permOrderButton.onclick = function() {
  buyPermanentUpgrade("order");
};

permLuckButton.onclick = function() {
  buyPermanentUpgrade("luck");
};

autoRebirthButton.onclick = function() {
  if (!autoRebirthUnlocked) {
    messageText.textContent = "Auto Rebirth unlocks after 5 rebirths.";
    return;
  }

  autoRebirthActive = !autoRebirthActive;

  if (autoRebirthActive) {
    messageText.textContent = "Auto Rebirth turned ON.";
  } else {
    messageText.textContent = "Auto Rebirth turned OFF.";
  }

  updateScreen();
  saveGame();
};

function buyPrestigeUpgrade(type) {
  if (rebirthTokens < 2) {
    messageText.textContent = "You need 2 rebirth tokens.";
    return;
  }

  rebirthTokens -= 2;

  if (type === "rush") {
    prestigeRushLevel++;
    messageText.textContent = "Pizza Rush lasts longer!";
  }

  if (type === "cheap") {
    prestigeCheapLevel++;
    messageText.textContent = "Upgrades are cheaper!";
  }

  if (type === "order") {
    prestigeOrderLevel++;
    messageText.textContent = "Orders give more money!";
  }

  updateScreen();
  saveGame();
}

prestigeRushButton.onclick = function() {
  buyPrestigeUpgrade("rush");
};

prestigeCheapButton.onclick = function() {
  buyPrestigeUpgrade("cheap");
};

prestigeOrderButton.onclick = function() {
  buyPrestigeUpgrade("order");
};

noWorkerChallenge.onclick = function() {
  noWorkerChallengeActive = !noWorkerChallengeActive;

  if (noWorkerChallengeActive) {
    workers = 0;
    messageText.textContent = "No Worker Challenge active!";
  } else {
    messageText.textContent = "No Worker Challenge off.";
  }

  updateScreen();
  saveGame();
};

oneLifeChallenge.onclick = function() {
  oneLifeChallengeActive = !oneLifeChallengeActive;

  if (oneLifeChallengeActive) {
    lives = 1;
    messageText.textContent = "One Life Challenge active!";
  } else {
    lives = 3;
    messageText.textContent = "One Life Challenge off.";
  }

  updateScreen();
  saveGame();
};

noOrderChallenge.onclick = function() {
  noOrderChallengeActive = !noOrderChallengeActive;

  if (noOrderChallengeActive) {
    currentOrder = null;
    orderProgress = 0;
    orderTimerRunning = false;
    messageText.textContent = "No Order Challenge active!";
  } else {
    messageText.textContent = "No Order Challenge off.";
  }

  updateOrderText();
  updateScreen();
  saveGame();
};

setInterval(function() {
  if (gameWon || gameLost) return;

  if (workers > 0) {
    let pizzasMade = workers;
    pizzas += pizzasMade;
    totalPizzasMade += pizzasMade;

    updateOrderProgress(pizzasMade);

    let earned =
      pizzasMade *
      moneyPerPizza *
      (1 + shopLevel * 0.02) *
      getPizzaBonus() *
      getRatingMultiplier() *
      getMilestoneMultiplier() *
      getRebirthMultiplier() *
      getPermanentWorkerMultiplier();

    if (pizzaRushActive) {
      earned *= 2;
    }

    if (bossEventActive) {
      earned *= bossEventMultiplier;
    }

    earnMoney(earned);

    if (deliveryDrivers > 0) {
      let deliveryMoney = deliveryDrivers * (10 + shopLevel * 2) * getRebirthMultiplier();
      earnMoney(deliveryMoney);
    }

    if (managers > 0) {
      let managerMoney = managers * workers * (2 + Math.floor(shopLevel / 25)) * getRebirthMultiplier();
      earnMoney(managerMoney);
    }

    messageText.textContent = "Workers made " + formatNumber(pizzasMade) + " pizza(s)!";

    checkCustomerTip();
    checkAchievements();
    updateScreen();
    saveGame();
  }
}, 1000);

setInterval(function() {
  if (gameWon || gameLost) return;
  if (!orderTimerRunning || currentOrder === null) return;

  orderTimeLeft--;

  if (orderTimeLeft <= 0) {
    currentOrder = null;
    orderProgress = 0;
    orderTimerRunning = false;

    customerRating--;

    if (customerRating < 0) {
      customerRating = 0;
    }

    if (orderIsBoss) {
      loseLife("⏰ Boss order failed!");
    } else {
      messageText.textContent = "⏰ Order failed! Your rating went down.";
    }

    orderIsBoss = false;
    updateOrderText();
    updateScreen();
    saveGame();
    return;
  }

  updateOrderText();
  saveGame();
}, 1000);

setInterval(function() {
  if (gameWon || gameLost) return;

  let now = Date.now();

  if (now - lastClickTime > comboResetTime) {
    combo = 0;
    comboMultiplier = 1;
    comboText.textContent = comboMultiplier;
  }
}, 300);

setInterval(function() {
  if (gameWon || gameLost) return;

  let chance = Math.floor(Math.random() * 100) + 1;
  let dangerChance = 10 - customerRating;

  if (oneLifeChallengeActive) {
    dangerChance += 2;
  }

  if (dangerChance < 3) {
    dangerChance = 3;
  }

  if (chance <= dangerChance) {
    let event = Math.floor(Math.random() * 4) + 1;

    if (event === 1) {
      let loss = Math.floor(money * 0.15);
      money -= loss;
      messageText.textContent = "🔥 Burnt pizzas! You lost $" + formatNumber(loss) + "!";
    } else if (event === 2) {
      loseLife("😡 Angry customer!");
    } else if (event === 3) {
      let loss = Math.floor(money * 0.1);
      money -= loss;
      messageText.textContent = "🐀 Rats attacked the kitchen! You lost $" + formatNumber(loss) + "!";
    } else if (event === 4) {
      let bonus = Math.floor(moneyPerPizza * 20 + shopLevel * 5);
      earnMoney(bonus);
      messageText.textContent = "🌟 Food critic loved your pizza! Bonus $" + formatNumber(bonus) + "!";
      showFloatingMoney(bonus);
    }

    if (money < 0) {
      money = 0;
      loseLife("💸 You went bankrupt!");
    }

    checkAchievements();
    updateScreen();
    saveGame();
  }
}, 15000);

setInterval(function() {
  if (gameWon || gameLost) return;

  let chance = Math.floor(Math.random() * 100) + 1;

  if (chance <= 25) {
    startPizzaRush();
    messageText.textContent = "🍕 Pizza Rush event started!";
    updateScreen();
    saveGame();
    return;
  }

  if (chance <= 35) {
    let bonus = moneyPerPizza * 100 + Math.max(customerRating, 1) * 100;
    earnMoney(bonus);
    messageText.textContent = "🌟 Celebrity visit! You earned $" + formatNumber(bonus) + "!";
    showFloatingMoney(bonus);
    updateScreen();
    saveGame();
    return;
  }

  if (chance <= 45) {
    customerRating++;

    if (customerRating > 5) {
      customerRating = 5;
    }

    messageText.textContent = "😊 Happy customers! Rating increased!";
    updateScreen();
    updateOrderText();
    saveGame();
  }
}, 30000);

setInterval(function() {
  if (gameWon || gameLost) return;

  let chance = Math.floor(Math.random() * 100) + 1;

  if (chance <= 20) {
    startBossEvent();
  }
}, 60000);

setInterval(function() {
  if (gameWon || gameLost) return;
  if (!autoOrdersUnlocked) return;
  if (noOrderChallengeActive) return;
  if (currentOrder !== null) return;
  if (workers < 100) return;

  let bossChance = 10 + Math.floor(reputation / 500) + Math.floor(workers / 500);
  let vipChance = 5 + Math.floor(reputation / 1000) + Math.floor(workers / 1000);
  let megaChance = 1 + Math.floor(reputation / 2500) + Math.floor(workers / 2500);

  if (bossChance > 35) bossChance = 35;
  if (vipChance > 25) vipChance = 25;
  if (megaChance > 15) megaChance = 15;

  if (customerRating < 5) vipChance = 0;
  if (shopLevel < 1000) megaChance = 0;

  let randomOrder = Math.floor(Math.random() * 100) + 1;

  if (randomOrder <= megaChance) {
    createNewOrder(false, false, true);
    messageText.textContent = "🤖 Auto Order started a MEGA order! Chance: " + megaChance + "%";
  } else if (randomOrder <= megaChance + vipChance) {
    createNewOrder(false, true, false);
    messageText.textContent = "🤖 Auto Order started a VIP order! Chance: " + vipChance + "%";
  } else if (randomOrder <= megaChance + vipChance + bossChance) {
    createNewOrder(true, false, false);
    messageText.textContent = "🤖 Auto Order started a boss order! Chance: " + bossChance + "%";
  } else {
    createNewOrder(false, false, false);
    messageText.textContent = "🤖 Auto Order started a normal order!";
  }

  saveGame();
}, 20000);

setInterval(function() {
  if (gameWon || gameLost) return;

  if (reputation >= 5000) {
    autoBuyerUnlocked = true;
  }

  if (!autoBuyerUnlocked) return;
  if (managers < 1) return;

  let oldBuyAmount = buyAmount;
  buyAmount = 1;

  let upgrades = [
    { cost: getTotalCost(ovenCost, 25), buy: function() { ovenButton.onclick(); } },
    { cost: getTotalCost(workerCost, 50), buy: function() { workerButton.onclick(); } },
    { cost: getTotalCost(shopCost, 100), buy: function() { shopButton.onclick(); } },
    { cost: getTotalCost(deliveryCost, 75), buy: function() { deliveryButton.onclick(); } },
    { cost: getTotalCost(marketingCost, 100), buy: function() { marketingButton.onclick(); } },
    { cost: getTotalCost(managerCost, 150), buy: function() { managerButton.onclick(); } },
    { cost: getTotalCost(ingredientsCost, 200), buy: function() { ingredientsButton.onclick(); } },
    { cost: getTotalCost(researchCost, 5000), buy: function() { researchButton.onclick(); } }
  ];

  upgrades.sort(function(a, b) {
    return a.cost - b.cost;
  });

  if (money >= upgrades[0].cost) {
    upgrades[0].buy();
    messageText.textContent = "🤖 Auto Buyer bought the cheapest upgrade.";
  }

  buyAmount = oldBuyAmount;
  buyAmountInput.value = showBuyAmount(buyAmount);

  updateScreen();
  saveGame();
}, 10000);

setInterval(function() {
  if (gameWon || gameLost) return;
  if (!autoRebirthActive) return;
  if (!autoRebirthUnlocked) return;

  if (money >= rebirthCost) {
    rebirthButton.onclick();
    messageText.textContent = "🔁 Auto Rebirth activated!";
  }
}, 2000);

setInterval(function() {
  if (gameWon || gameLost) return;

  timePlayed++;
  updateScreen();
}, 1000);

setInterval(saveGame, 2000);

window.addEventListener("beforeunload", function() {
  saveGame();
});

function showFloatingMoney(amount) {
  if (floatingTextCount >= maxFloatingTexts) return;

  floatingTextCount++;

  let text = document.createElement("div");
  text.className = "floating-money";
  text.textContent = "+$" + formatNumber(amount);

  let rect = pizzaVisual.getBoundingClientRect();

  text.style.left = rect.left + rect.width / 2 + "px";
  text.style.top = rect.top + "px";

  document.body.appendChild(text);

  setTimeout(function() {
    text.remove();
    floatingTextCount--;
  }, 900);
}

loadGame();
updateShopVisual();
updateScreen();
updateOrderText();