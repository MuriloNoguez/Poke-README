const PROD_API = 'https://pokereadme.murilonoguez.com.br/api';
const API_BASE = window.location.hostname === 'localhost' ? '/api' : PROD_API;
const GITHUB_RAW_BASE = 'https://raw.githubusercontent.com/MuriloNoguez/Poke-README/main';
const MAX_TEAM = 6;
const LEGENDARY_COMMITS = 1000;
const DITTO = '132';
const EEVEE = '133';
const EEVEE_ITEMS = { water: '134', thunder: '135', fire: '136', sun: '196', moon: '197', leaf: '470', ice: '471' };
const GENS = { gen1: 'Kanto', gen2: 'Johto', gen3: 'Hoenn', gen4: 'Sinnoh', gen5: 'Unova', gen6: 'Kalos', gen7: 'Alola', gen8: 'Galar', gen9: 'Paldea' };
// Keys accepted by the API's bg param (api/index.js BACKGROUNDS)
const BACKGROUNDS = ['classic', 'sunset', 'night', 'snow', 'desert', 'beach', 'autumn', 'sakura', 'rain', 'volcano',
  'space', 'none'];
const CATEGORIES = ['base', 'middle', 'final', 'legendary'];
const TYPES = ['normal', 'fire', 'water', 'grass', 'electric', 'ice', 'fighting', 'poison', 'ground',
  'flying', 'psychic', 'bug', 'rock', 'ghost', 'dragon', 'dark', 'steel', 'fairy'];

// ---------- i18n ----------
const LANGS = {
  en: 'English', pt: 'Português', es: 'Español', fr: 'Français', de: 'Deutsch',
  it: 'Italiano', ja: '日本語', ko: '한국어', zh: '中文',
};

const TYPE_NAMES = {
  en: 'Normal Fire Water Grass Electric Ice Fighting Poison Ground Flying Psychic Bug Rock Ghost Dragon Dark Steel Fairy',
  pt: 'Normal Fogo Água Planta Elétrico Gelo Lutador Venenoso Terra Voador Psíquico Inseto Pedra Fantasma Dragão Sombrio Aço Fada',
  es: 'Normal Fuego Agua Planta Eléctrico Hielo Lucha Veneno Tierra Volador Psíquico Bicho Roca Fantasma Dragón Siniestro Acero Hada',
  fr: 'Normal Feu Eau Plante Électrik Glace Combat Poison Sol Vol Psy Insecte Roche Spectre Dragon Ténèbres Acier Fée',
  de: 'Normal Feuer Wasser Pflanze Elektro Eis Kampf Gift Boden Flug Psycho Käfer Gestein Geist Drache Unlicht Stahl Fee',
  it: 'Normale Fuoco Acqua Erba Elettro Ghiaccio Lotta Veleno Terra Volante Psico Coleottero Roccia Spettro Drago Buio Acciaio Folletto',
  ja: 'ノーマル ほのお みず くさ でんき こおり かくとう どく じめん ひこう エスパー むし いわ ゴースト ドラゴン あく はがね フェアリー',
  ko: '노말 불꽃 물 풀 전기 얼음 격투 독 땅 비행 에스퍼 벌레 바위 고스트 드래곤 악 강철 페어리',
  zh: '一般 火 水 草 电 冰 格斗 毒 地面 飞行 超能力 虫 岩石 幽灵 龙 恶 钢 妖精',
};

const KEYS = ['trainer', 'usernamePh', 'commits', 'useMine', 'scrubHint', 'language', 'pickTitle', 'pickHint',
  'searchPh', 'generation', 'category', 'type', 'all', 'cat_base', 'cat_middle', 'cat_final', 'cat_legendary',
  'results', 'clearFilters', 'legendFar', 'legendNear', 'noResults', 'preview', 'previewEmpty', 'previewNote',
  'previewAlt', 'team', 'teamEmpty', 'teamFull', 'nickPh', 'moveUp', 'moveDown', 'remove', 'eeveeItem',
  'itemNone', 'copyTitle', 'format', 'copy', 'copied', 'legal', 'statusLoading', 'statusOk', 'statusError',
  'reachesAt', 'lvl', 'background', 'bgClassic', 'bgNone', 'statusBusy'];

// One row per language, values in KEYS order
const STRINGS = {
  en: ['Trainer', 'your-username', 'Commits', 'Use mine', 'Drag to see your team at any commit count.', 'Language',
    'Pick your team', 'Pick the form you want to reach. It starts at its first stage and evolves as you commit.',
    'Search name or number', 'Generation', 'Category', 'Type', 'All', 'Basic', 'Middle', 'Final', 'Legendary',
    '{n} of {total}', 'Clear filters', 'Far', 'Reached', 'No Pokémon match these filters.', 'Preview',
    'Your card appears here once you pick a Pokémon.', 'Preview uses your real count. The card refreshes once a day.',
    'Live preview of your Poke-README card', 'Team', 'Pick up to six Pokémon from the Pokédex.',
    'Team is full. Remove one to add another.', 'Nickname', 'Move up', 'Move down', 'Remove', 'Eevee evolves into',
    "Don't evolve", 'Copy', 'Code format', 'Copy code', 'Copied',
    'Pokémon and all associated names and sprites are trademarks of Nintendo, Creatures Inc. and GAME FREAK inc. Non-profit fan project.',
    'Counting contributions…', '{n} contributions on GitHub', "Couldn't read that user. Check the spelling.",
    'reaches at {n} commits', 'Lv.', 'Background', 'Classic', 'Solid', 'GitHub is busy right now. Try again in a few minutes.'],
  pt: ['Treinador', 'seu-usuario', 'Commits', 'Usar o meu', 'Arraste para ver seu time em qualquer número de commits.',
    'Idioma', 'Escolha seu time',
    'Escolha a forma que quer alcançar. Ela começa no primeiro estágio e evolui conforme você faz commits.',
    'Buscar nome ou número', 'Geração', 'Categoria', 'Tipo', 'Todas', 'Básico', 'Intermediário', 'Final', 'Lendário',
    '{n} de {total}', 'Limpar filtros', 'Longe', 'Alcançado', 'Nenhum Pokémon com esses filtros.', 'Prévia',
    'Seu card aparece aqui quando você escolher um Pokémon.',
    'A prévia usa sua contagem real. O card atualiza uma vez por dia.', 'Prévia do card Poke-README', 'Time',
    'Escolha até seis Pokémon no Pokédex.', 'Time cheio. Remova um para adicionar outro.', 'Apelido', 'Subir',
    'Descer', 'Remover', 'Eevee evolui para', 'Não evoluir', 'Copiar', 'Formato do código', 'Copiar código', 'Copiado',
    'Pokémon e todos os nomes e sprites associados são marcas da Nintendo, Creatures Inc. e GAME FREAK inc. Projeto de fã, sem fins lucrativos.',
    'Contando contribuições…', '{n} contribuições no GitHub', 'Não foi possível ler esse usuário. Confira o nome.',
    'alcança com {n} commits', 'Nv.', 'Fundo', 'Clássico', 'Sólido', 'O GitHub está ocupado agora. Tente de novo em alguns minutos.'],
  es: ['Entrenador', 'tu-usuario', 'Commits', 'Usar el mío',
    'Arrastra para ver tu equipo con cualquier cantidad de commits.', 'Idioma', 'Elige tu equipo',
    'Elige la forma que quieres alcanzar. Empieza en su primera etapa y evoluciona con tus commits.',
    'Buscar nombre o número', 'Generación', 'Categoría', 'Tipo', 'Todas', 'Básico', 'Intermedio', 'Final',
    'Legendario', '{n} de {total}', 'Limpiar filtros', 'Lejos', 'Alcanzado',
    'Ningún Pokémon coincide con estos filtros.', 'Vista previa', 'Tu tarjeta aparece aquí cuando elijas un Pokémon.',
    'La vista previa usa tu conteo real. La tarjeta se actualiza una vez al día.',
    'Vista previa de tu tarjeta Poke-README', 'Equipo', 'Elige hasta seis Pokémon de la Pokédex.',
    'Equipo completo. Quita uno para añadir otro.', 'Apodo', 'Subir', 'Bajar', 'Quitar', 'Eevee evoluciona a',
    'No evolucionar', 'Copiar', 'Formato del código', 'Copiar código', 'Copiado',
    'Pokémon y todos los nombres y sprites asociados son marcas de Nintendo, Creatures Inc. y GAME FREAK inc. Proyecto de fans sin fines de lucro.',
    'Contando contribuciones…', '{n} contribuciones en GitHub', 'No se pudo leer ese usuario. Revisa el nombre.',
    'se alcanza con {n} commits', 'Nv.', 'Fondo', 'Clásico', 'Sólido', 'GitHub está ocupado ahora. Inténtalo de nuevo en unos minutos.'],
  fr: ['Dresseur', 'votre-pseudo', 'Commits', 'Utiliser le mien',
    "Faites glisser pour voir votre équipe à n'importe quel nombre de commits.", 'Langue', 'Choisissez votre équipe',
    'Choisissez la forme à atteindre. Elle commence à son premier stade et évolue avec vos commits.',
    'Rechercher nom ou numéro', 'Génération', 'Catégorie', 'Type', 'Toutes', 'Base', 'Intermédiaire', 'Final',
    'Légendaire', '{n} sur {total}', 'Effacer les filtres', 'Loin', 'Atteint',
    'Aucun Pokémon ne correspond à ces filtres.', 'Aperçu',
    'Votre carte apparaît ici dès que vous choisissez un Pokémon.',
    "L'aperçu utilise votre vrai total. La carte se met à jour une fois par jour.",
    'Aperçu de votre carte Poke-README', 'Équipe', "Choisissez jusqu'à six Pokémon dans le Pokédex.",
    'Équipe complète. Retirez-en un pour en ajouter un autre.', 'Surnom', 'Monter', 'Descendre', 'Retirer',
    'Évoli évolue en', 'Ne pas évoluer', 'Copier', 'Format du code', 'Copier le code', 'Copié',
    'Pokémon et tous les noms et sprites associés sont des marques de Nintendo, Creatures Inc. et GAME FREAK inc. Projet de fan à but non lucratif.',
    'Comptage des contributions…', '{n} contributions sur GitHub',
    "Impossible de lire cet utilisateur. Vérifiez l'orthographe.", 'atteint à {n} commits', 'N.', 'Fond', 'Classique', 'Uni', 'GitHub est occupé. Réessayez dans quelques minutes.'],
  de: ['Trainer', 'dein-name', 'Commits', 'Meine nutzen', 'Ziehen, um dein Team bei jeder Commit-Zahl zu sehen.',
    'Sprache', 'Stell dein Team zusammen',
    'Wähle die Form, die du erreichen willst. Sie startet in der ersten Stufe und entwickelt sich mit deinen Commits.',
    'Name oder Nummer suchen', 'Generation', 'Kategorie', 'Typ', 'Alle', 'Basis', 'Mittel', 'Final', 'Legendär',
    '{n} von {total}', 'Filter zurücksetzen', 'Fern', 'Erreicht', 'Kein Pokémon passt zu diesen Filtern.',
    'Vorschau', 'Deine Karte erscheint hier, sobald du ein Pokémon wählst.',
    'Die Vorschau nutzt deine echte Zahl. Die Karte aktualisiert sich einmal am Tag.',
    'Live-Vorschau deiner Poke-README-Karte', 'Team', 'Wähle bis zu sechs Pokémon aus dem Pokédex.',
    'Team ist voll. Entferne eins, um ein anderes hinzuzufügen.', 'Spitzname', 'Nach oben', 'Nach unten',
    'Entfernen', 'Evoli entwickelt sich zu', 'Nicht entwickeln', 'Kopieren', 'Codeformat', 'Code kopieren',
    'Kopiert',
    'Pokémon und alle zugehörigen Namen und Sprites sind Marken von Nintendo, Creatures Inc. und GAME FREAK inc. Nicht-kommerzielles Fanprojekt.',
    'Beiträge werden gezählt…', '{n} Beiträge auf GitHub',
    'Benutzer konnte nicht gelesen werden. Prüfe die Schreibweise.', 'erreicht bei {n} Commits', 'Lv.', 'Hintergrund', 'Klassisch', 'Einfarbig', 'GitHub ist gerade ausgelastet. Versuch es in ein paar Minuten erneut.'],
  it: ['Allenatore', 'tuo-utente', 'Commit', 'Usa il mio',
    'Trascina per vedere la tua squadra con qualsiasi numero di commit.', 'Lingua', 'Scegli la tua squadra',
    'Scegli la forma da raggiungere. Parte dal primo stadio ed evolve con i tuoi commit.', 'Cerca nome o numero',
    'Generazione', 'Categoria', 'Tipo', 'Tutte', 'Base', 'Intermedio', 'Finale', 'Leggendario', '{n} di {total}',
    'Azzera filtri', 'Lontano', 'Raggiunto', 'Nessun Pokémon corrisponde a questi filtri.', 'Anteprima',
    'La tua scheda appare qui quando scegli un Pokémon.',
    "L'anteprima usa il tuo conteggio reale. La scheda si aggiorna una volta al giorno.",
    'Anteprima della scheda Poke-README', 'Squadra', 'Scegli fino a sei Pokémon dal Pokédex.',
    'Squadra completa. Rimuovine uno per aggiungerne un altro.', 'Soprannome', 'Su', 'Giù', 'Rimuovi',
    'Eevee si evolve in', 'Non evolvere', 'Copia', 'Formato del codice', 'Copia codice', 'Copiato',
    'Pokémon e tutti i nomi e sprite associati sono marchi di Nintendo, Creatures Inc. e GAME FREAK inc. Progetto amatoriale senza scopo di lucro.',
    'Conteggio contributi…', '{n} contributi su GitHub', 'Impossibile leggere questo utente. Controlla il nome.',
    'si raggiunge a {n} commit', 'Lv.', 'Sfondo', 'Classico', 'Tinta unita', 'GitHub è occupato ora. Riprova tra qualche minuto.'],
  ja: ['トレーナー', 'ユーザー名', 'コミット', '自分の数に戻す', 'ドラッグして、任意のコミット数でのチームを確認。', '言語',
    'チームを選ぶ', '目指す姿を選んでください。最初の段階から始まり、コミットで進化します。', '名前か番号で検索', '世代', '分類',
    'タイプ', 'すべて', 'たね', '1進化', '最終', '伝説', '{n} / {total}', 'フィルターをクリア', '遠い', '到達',
    '条件に合うポケモンはいません。', 'プレビュー', 'ポケモンを選ぶとここにカードが表示されます。',
    'プレビューは実際のコミット数を使います。カードは1日1回更新されます。', 'Poke-READMEカードのプレビュー', 'チーム',
    'ポケモン図鑑から最大6匹まで選べます。', 'チームがいっぱいです。1匹外してから追加してください。', 'ニックネーム', '上へ',
    '下へ', '外す', 'イーブイの進化先', '進化しない', 'コピー', 'コード形式', 'コードをコピー', 'コピーしました',
    'ポケモンおよび関連する名称・スプライトは任天堂、クリーチャーズ、ゲームフリークの商標です。非営利のファンプロジェクトです。',
    'コントリビューションを集計中…', 'GitHubのコントリビューション {n}件', 'このユーザーを読み込めません。綴りを確認してください。',
    '{n}コミットで到達', 'Lv.', '背景', 'クラシック', '単色', 'GitHubが混み合っています。数分後にもう一度お試しください。'],
  ko: ['트레이너', '사용자명', '커밋', '내 커밋 수로', '드래그해서 원하는 커밋 수의 팀을 확인하세요.', '언어', '팀 고르기',
    '도달하고 싶은 모습을 고르세요. 첫 단계에서 시작해 커밋할수록 진화합니다.', '이름 또는 번호 검색', '세대', '분류', '타입',
    '전체', '기본', '중간', '최종', '전설', '{n} / {total}', '필터 초기화', '멀다', '도달', '조건에 맞는 포켓몬이 없습니다.',
    '미리보기', '포켓몬을 고르면 여기에 카드가 나타납니다.', '미리보기는 실제 커밋 수를 사용합니다. 카드는 하루 한 번 갱신됩니다.',
    'Poke-README 카드 미리보기', '팀', '도감에서 최대 6마리를 고르세요.', '팀이 가득 찼습니다. 하나를 빼고 추가하세요.',
    '별명', '위로', '아래로', '빼기', '이브이 진화 대상', '진화 안 함', '복사', '코드 형식', '코드 복사', '복사됨',
    '포켓몬과 관련 이름 및 스프라이트는 Nintendo, Creatures Inc., GAME FREAK inc.의 상표입니다. 비영리 팬 프로젝트입니다.',
    '기여 수 세는 중…', 'GitHub 기여 {n}회', '이 사용자를 읽을 수 없습니다. 철자를 확인하세요.', '{n}커밋에 도달', 'Lv.', '배경', '클래식', '단색', '지금 GitHub가 혼잡합니다. 몇 분 후 다시 시도하세요.'],
  zh: ['训练家', '用户名', '提交', '用我的数', '拖动查看任意提交数下的队伍。', '语言', '选择你的队伍',
    '选择你想达到的形态。它从第一阶段开始，随提交进化。', '搜索名称或编号', '世代', '分类', '属性', '全部', '基础', '中间',
    '最终', '传说', '{n} / {total}', '清除筛选', '远', '已达成', '没有符合这些条件的宝可梦。', '预览',
    '选择宝可梦后，你的卡片会显示在这里。', '预览使用你的真实提交数。卡片每天更新一次。', 'Poke-README 卡片预览', '队伍',
    '从图鉴中最多选择六只宝可梦。', '队伍已满。移除一只后再添加。', '昵称', '上移', '下移', '移除', '伊布进化为', '不进化',
    '复制', '代码格式', '复制代码', '已复制',
    '宝可梦及相关名称和精灵图是任天堂、Creatures Inc. 和 GAME FREAK inc. 的商标。非营利粉丝项目。', '正在统计贡献…',
    'GitHub 上 {n} 次贡献', '无法读取该用户，请检查拼写。', '{n} 次提交时达成', 'Lv.', '背景', '经典', '纯色', 'GitHub 当前繁忙，请几分钟后再试。'],
};

let lang = 'en';
const t = (key, vars = {}) => {
  const row = STRINGS[lang] || STRINGS.en;
  const s = row[KEYS.indexOf(key)] ?? STRINGS.en[KEYS.indexOf(key)];
  return s.replace(/\{(\w+)\}/g, (_, k) => vars[k] ?? '');
};
const fmt = n => new Intl.NumberFormat(lang).format(n);
const typeName = type => TYPE_NAMES[lang].split(' ')[TYPES.indexOf(type)];

function pickLang() {
  try {
    const saved = localStorage.getItem('lang');
    if (LANGS[saved]) return saved;
  } catch {}
  const match = (navigator.languages || [navigator.language]).map(l => l.slice(0, 2)).find(l => LANGS[l]);
  return match || 'en';
}

// ---------- state ----------
let pokedex = {};
const preEvolution = {}; // childId -> parentId
const state = {
  user: '',
  realCommits: null,
  commits: 0,
  team: [], // [{ id, nick }]
  item: '',
  bg: 'classic',
  format: 'md',
  filters: { q: '', gen: '', cat: '', types: new Set() },
};

const $ = id => document.getElementById(id);
const els = {
  username: $('username'), userStatus: $('user-status'), commits: $('commits'), readout: $('commit-readout'),
  resetCommits: $('reset-commits'), lang: $('lang'), search: $('search'), genFilter: $('gen-filter'),
  catFilter: $('cat-filter'), typeFilter: $('type-filter'), resultCount: $('result-count'), grid: $('grid'),
  gridEmpty: $('grid-empty'), previewImg: $('preview-img'), previewEmpty: $('preview-empty'),
  teamList: $('team-list'), teamCount: $('team-count'), teamMsg: $('team-msg'), eeveeField: $('eevee-field'),
  eeveeItem: $('eevee-item'), formatTabs: $('format-tabs'), code: $('output-code'), copyBtn: $('copy-btn'),
  copyLabel: $('copy-label'), bgPicker: $('bg-picker'), jump: $('jump'), jumpCount: $('jump-count'),
};

// ---------- evolution rules (mirror of lib/pokemon.js getEvolution + legendary rule in api/index.js) ----------
function rootOf(id) {
  while (preEvolution[id]) id = preEvolution[id];
  return id;
}

function evolveAt(targetId, commits, item, ditto = true) {
  let id = rootOf(targetId);
  let poke = pokedex[id];
  if (id === EEVEE && item && commits >= (poke.commitsRequired || 0) && EEVEE_ITEMS[item]) {
    id = EEVEE_ITEMS[item];
    poke = pokedex[id];
  }
  while (poke.evolution && commits >= (poke.commitsRequired || 0) && id !== targetId) {
    id = poke.evolution;
    poke = pokedex[id];
  }
  if (ditto && poke.isLegendary && commits < LEGENDARY_COMMITS) id = DITTO;
  return id;
}

// Commit count at which a selected form shows up as itself
function threshold(targetId) {
  let need = pokedex[targetId].isLegendary ? LEGENDARY_COMMITS : 0;
  for (let id = preEvolution[targetId]; id; id = preEvolution[id]) need = Math.max(need, pokedex[id].commitsRequired || 0);
  return need;
}

function category(id) {
  const p = pokedex[id];
  if (p.isLegendary) return 'legendary';
  if (!p.evolution) return 'final';
  return preEvolution[id] ? 'middle' : 'base';
}

function rampLevel(remaining) {
  if (remaining <= 0) return 4;
  if (remaining <= 100) return 3;
  if (remaining <= 300) return 2;
  if (remaining <= 600) return 1;
  return 0;
}

const level = commits => Math.min(100, Math.max(1, Math.floor(commits / 10)));
const dexNo = id => '#' + String(id).padStart(3, '0');
// PMD canvases vary (≈16-110px): show up to 2x native, capped to the 64px slot
function fitSprite(img) {
  img.addEventListener('load', () => {
    const scale = Math.min(2, 64 / Math.max(img.naturalWidth, img.naturalHeight));
    img.style.width = `${Math.round(img.naturalWidth * scale)}px`;
    img.style.height = `${Math.round(img.naturalHeight * scale)}px`;
  });
}
const spriteUrl = id => `./media/sprites/${id}/default_front.gif`;
const bgUrl = key => `./media/backgrounds/thumbs/${key}.png`; // static thumbs; the card itself uses the animated GIF

const displayName = id => pokedex[id].display || pokedex[id].name;

// ---------- grid ----------
const cells = {}; // id -> { el, img, shown }

function buildGrid() {
  const frag = document.createDocumentFragment();
  let currentGen = '';
  for (const id of Object.keys(pokedex)) {
    const p = pokedex[id];
    if (p.gen !== currentGen) {
      currentGen = p.gen;
      const h = document.createElement('h3');
      h.className = 'gen-label';
      h.dataset.gen = p.gen;
      h.innerHTML = `<span class="mono">${p.gen.replace('gen', 'Gen ')}</span> ${GENS[p.gen]}`;
      frag.appendChild(h);
    }
    const el = document.createElement('button');
    el.type = 'button';
    el.className = 'cell';
    el.dataset.id = id;
    if (p.isLegendary) el.classList.add('is-legendary');
    const img = document.createElement('img');
    img.loading = 'lazy';
    img.decoding = 'async';
    img.alt = '';
    fitSprite(img);
    img.onerror = () => { if (!img.src.startsWith(GITHUB_RAW_BASE)) img.src = img.src.replace(/^.*?\/media\//, `${GITHUB_RAW_BASE}/media/`); };
    const no = document.createElement('span');
    no.className = 'cell-no';
    no.textContent = id;
    el.append(img, no);
    el.addEventListener('click', () => togglePoke(id));
    frag.appendChild(el);
    cells[id] = { el, img, shown: null };
  }
  els.grid.appendChild(frag);
}

function paintGrid() {
  const full = state.team.length >= MAX_TEAM;
  for (const id in cells) {
    const c = cells[id];
    const shown = evolveAt(id, state.commits, state.item, false); // grid keeps the real legendary; Ditto only on team/card
    if (shown !== c.shown) {
      c.shown = shown;
      c.img.src = spriteUrl(shown);
    }
    const need = threshold(id);
    c.el.dataset.level = rampLevel(need - state.commits);
    const selected = state.team.some(m => m.id === id);
    c.el.setAttribute('aria-pressed', selected);
    c.el.classList.toggle('is-blocked', full && !selected);
    const label = `${displayName(id)} ${dexNo(id)}${need ? `, ${t('reachesAt', { n: fmt(need) })}` : ''}`;
    c.el.setAttribute('aria-label', label);
    c.el.title = label;
  }
}

function applyFilters() {
  const { q, gen, cat, types } = state.filters;
  const term = q.trim().toLowerCase().replace(/^#0*/, '');
  let visible = 0;
  const gensWithHits = new Set();
  for (const id in cells) {
    const p = pokedex[id];
    const show = (!term || p.name.toLowerCase().includes(term) || id === term || displayName(id).toLowerCase().includes(term))
      && (!gen || p.gen === gen)
      && (!cat || category(id) === cat)
      && (!types.size || p.types.some(tp => types.has(tp)));
    cells[id].el.hidden = !show;
    if (show) { visible++; gensWithHits.add(p.gen); }
  }
  els.grid.querySelectorAll('.gen-label').forEach(h => { h.hidden = !gensWithHits.has(h.dataset.gen); });
  const total = Object.keys(pokedex).length;
  els.resultCount.textContent = t('results', { n: fmt(visible), total: fmt(total) });
  els.gridEmpty.hidden = visible > 0;
  const active = term || gen || cat || types.size;
  document.querySelectorAll('.dex-meta [data-action="clear-filters"]').forEach(b => { b.hidden = !active; });
}

// ---------- filters ----------
function segButton(group, value, label) {
  const b = document.createElement('button');
  b.type = 'button';
  b.textContent = label;
  b.dataset.value = value;
  b.setAttribute('aria-pressed', state.filters[group] === value);
  b.addEventListener('click', () => {
    state.filters[group] = value;
    renderFilters();
    applyFilters();
  });
  return b;
}

function renderFilters() {
  els.genFilter.replaceChildren(segButton('gen', '', t('all')),
    ...Object.keys(GENS).map(g => {
      const b = segButton('gen', g, g.replace('gen', ''));
      b.setAttribute('aria-label', `${t('generation')} ${g.replace('gen', '')} · ${GENS[g]}`);
      b.title = GENS[g];
      return b;
    }));
  els.catFilter.replaceChildren(segButton('cat', '', t('all')),
    ...CATEGORIES.map(c => segButton('cat', c, t('cat_' + c))));
  els.typeFilter.replaceChildren(...TYPES.map(tp => {
    const b = document.createElement('button');
    b.type = 'button';
    b.className = `chip t-${tp}`;
    b.textContent = typeName(tp);
    b.setAttribute('aria-pressed', state.filters.types.has(tp));
    b.addEventListener('click', () => {
      const s = state.filters.types;
      s.has(tp) ? s.delete(tp) : s.add(tp);
      b.setAttribute('aria-pressed', s.has(tp));
      applyFilters();
    });
    return b;
  }));
}

function clearFilters() {
  state.filters = { q: '', gen: '', cat: '', types: new Set() };
  els.search.value = '';
  renderFilters();
  applyFilters();
}

// ---------- team ----------
function togglePoke(id) {
  const index = state.team.findIndex(m => m.id === id);
  if (index > -1) {
    state.team.splice(index, 1);
    els.teamMsg.textContent = '';
  } else if (state.team.length >= MAX_TEAM) {
    els.teamMsg.textContent = t('teamFull');
    return;
  } else {
    state.team.push({ id, nick: '' });
  }
  update();
}

function move(from, to) {
  if (to < 0 || to >= state.team.length) return;
  const [m] = state.team.splice(from, 1);
  state.team.splice(to, 0, m);
  update();
  els.teamList.children[to]?.querySelector(from < to ? '[data-move="down"]' : '[data-move="up"]')?.focus();
}

function iconButton(icon, label, onClick) {
  const b = document.createElement('button');
  b.type = 'button';
  b.className = 'btn-icon';
  b.setAttribute('aria-label', label);
  b.title = label;
  b.innerHTML = `<svg class="icon" aria-hidden="true"><use href="#i-${icon}"/></svg>`;
  b.addEventListener('click', onClick);
  return b;
}

let dragFrom = null;

function renderTeam() {
  els.teamCount.textContent = els.jumpCount.textContent = `${state.team.length}/${MAX_TEAM}`;
  els.jump.hidden = !state.team.length;
  if (!state.team.length) {
    els.teamList.innerHTML = `<li class="log-empty">${t('teamEmpty')}</li>`;
    return;
  }
  els.teamList.replaceChildren(...state.team.map((m, i) => {
    const li = document.createElement('li');
    li.className = 'log-line';
    li.draggable = true;
    const shown = evolveAt(m.id, state.commits, state.item);

    const img = document.createElement('img');
    img.src = spriteUrl(shown);
    img.alt = '';
    fitSprite(img);

    const meta = document.createElement('div');
    meta.className = 'log-meta';
    meta.innerHTML = `<span class="mono log-no">${dexNo(m.id)}</span>
      <span class="log-name">${displayName(shown)}</span>
      <span class="mono log-lvl">${t('lvl')} ${level(state.commits)}</span>`;

    const nick = document.createElement('input');
    nick.type = 'text';
    nick.className = 'log-nick';
    nick.maxLength = 10;
    nick.placeholder = t('nickPh');
    nick.setAttribute('aria-label', `${t('nickPh')}: ${displayName(m.id)}`);
    nick.value = m.nick;
    nick.addEventListener('input', () => {
      m.nick = nick.value.replace(/,/g, '').slice(0, 10);
      if (nick.value !== m.nick) nick.value = m.nick;
      updateOutput();
    });

    const up = iconButton('up', t('moveUp'), () => move(i, i - 1));
    up.dataset.move = 'up';
    up.disabled = i === 0;
    const down = iconButton('down', t('moveDown'), () => move(i, i + 1));
    down.dataset.move = 'down';
    down.disabled = i === state.team.length - 1;
    const remove = iconButton('x', t('remove'), () => togglePoke(m.id));
    remove.classList.add('btn-remove');

    const actions = document.createElement('div');
    actions.className = 'log-actions';
    actions.append(up, down, remove);

    li.addEventListener('dragstart', e => { dragFrom = i; li.classList.add('is-dragging'); e.dataTransfer.effectAllowed = 'move'; });
    li.addEventListener('dragend', () => li.classList.remove('is-dragging'));
    li.addEventListener('dragover', e => { e.preventDefault(); li.classList.add('is-over'); });
    li.addEventListener('dragleave', () => li.classList.remove('is-over'));
    li.addEventListener('drop', e => { e.preventDefault(); li.classList.remove('is-over'); if (dragFrom !== null) move(dragFrom, i); dragFrom = null; });
    // Typing in the nickname must not start a drag
    nick.addEventListener('pointerdown', () => { li.draggable = false; });
    nick.addEventListener('blur', () => { li.draggable = true; });

    li.append(img, meta, nick, actions);
    return li;
  }));
}

function renderEevee() {
  const hasEevee = state.team.some(m => m.id === EEVEE);
  els.eeveeField.hidden = !hasEevee;
  if (!hasEevee) state.item = '';
  els.eeveeItem.replaceChildren(new Option(t('itemNone'), ''),
    ...Object.entries(EEVEE_ITEMS).map(([item, id]) => new Option(displayName(id), item)));
  els.eeveeItem.value = state.item;
}

// ---------- background ----------
function renderBackgrounds() {
  els.bgPicker.replaceChildren(...BACKGROUNDS.map(key => {
    const b = document.createElement('button');
    b.type = 'button';
    b.className = `bg-swatch${key === 'none' ? ' is-none' : ''}`;
    b.setAttribute('aria-pressed', state.bg === key);
    const label = key === 'classic' ? t('bgClassic') : key === 'none' ? t('bgNone') : key.charAt(0).toUpperCase() + key.slice(1);
    b.setAttribute('aria-label', label);
    b.title = label;
    if (key !== 'none') b.style.backgroundImage = `url(${bgUrl(key)})`;
    b.addEventListener('click', () => {
      state.bg = key;
      els.bgPicker.querySelectorAll('.bg-swatch').forEach(x => x.setAttribute('aria-pressed', x === b));
      updateOutput();
    });
    return b;
  }));
}

// ---------- output ----------
function cardUrl(base) {
  const params = new URLSearchParams({ user: state.user || 'YOUR_USERNAME', pokes: state.team.map(m => m.id).join(',') });
  const names = state.team.map(m => m.nick).join(',');
  if (names.replace(/,/g, '')) params.set('names', names);
  if (state.item) params.set('item', state.item);
  if (state.bg !== 'classic') params.set('bg', state.bg);
  return `${base}?${params.toString().replace(/%2C/g, ',')}`;
}

let previewTimer;
function updateOutput() {
  const has = state.team.length > 0;
  els.copyBtn.disabled = !has;
  if (!has) {
    els.code.textContent = '';
    els.previewImg.hidden = true;
    els.previewEmpty.hidden = false;
    return;
  }
  const url = cardUrl(PROD_API);
  els.code.textContent = {
    md: `![${t('previewAlt')}](${url})`,
    html: `<div align="center">\n  <img src="${url}" alt="${t('previewAlt')}" />\n</div>`,
    url,
  }[state.format];

  clearTimeout(previewTimer);
  previewTimer = setTimeout(() => {
    const src = cardUrl(API_BASE);
    if (els.previewImg.getAttribute('src') === src) return;
    els.previewImg.closest('.preview-frame').classList.add('is-loading');
    els.previewImg.src = src;
  }, 400);
}

els.previewImg.addEventListener('load', () => {
  els.previewImg.hidden = false;
  els.previewEmpty.hidden = true;
  els.previewImg.closest('.preview-frame').classList.remove('is-loading');
});
els.previewImg.addEventListener('error', () => els.previewImg.closest('.preview-frame').classList.remove('is-loading'));

function updateSteps() {
  const done = { 1: state.realCommits !== null, 2: state.team.length > 0, 3: els.copyBtn.dataset.copied === 'true' };
  const current = [1, 2, 3].find(n => !done[n]);
  document.querySelectorAll('.step').forEach(s => {
    const n = Number(s.dataset.step);
    s.classList.toggle('is-done', done[n]);
    s.classList.toggle('is-current', n === current);
  });
}

function update() {
  renderTeam();
  renderEevee();
  paintGrid();
  updateOutput();
  updateSteps();
}

// ---------- commits ----------
function setCommits(n) {
  state.commits = n;
  els.commits.value = Math.min(n, Number(els.commits.max));
  els.readout.textContent = fmt(n);
  els.resetCommits.hidden = state.realCommits === null || n === state.realCommits;
  paintGrid();
  renderTeam();
}

let userTimer;
let userRequest = 0;
function onUserInput() {
  state.user = els.username.value.trim().replace(/^@/, '');
  updateOutput();
  clearTimeout(userTimer);
  if (!state.user) {
    state.realCommits = null;
    els.userStatus.textContent = '';
    els.userStatus.className = 'field-status';
    updateSteps();
    return;
  }
  userTimer = setTimeout(async () => {
    const req = ++userRequest;
    els.userStatus.textContent = t('statusLoading');
    els.userStatus.className = 'field-status';
    try {
      const res = await fetch(`${API_BASE}?user=${encodeURIComponent(state.user)}&stats=1`);
      if (!res.ok) throw new Error(res.status);
      const { commits } = await res.json();
      if (req !== userRequest) return;
      state.realCommits = commits;
      els.userStatus.textContent = t('statusOk', { n: fmt(commits) });
      els.userStatus.className = 'field-status is-ok';
      setCommits(commits);
    } catch (err) {
      if (req !== userRequest) return;
      state.realCommits = null;
      els.userStatus.textContent = t(err.message === '503' ? 'statusBusy' : 'statusError');
      els.userStatus.className = 'field-status is-error';
    }
    updateSteps();
  }, 500);
}

// ---------- language ----------
function applyLang(next) {
  lang = next;
  document.documentElement.lang = lang;
  try { localStorage.setItem('lang', lang); } catch {}
  document.querySelectorAll('[data-i18n]').forEach(el => { el.textContent = t(el.dataset.i18n); });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => { el.placeholder = t(el.dataset.i18nPlaceholder); });
  document.querySelectorAll('[data-i18n-aria]').forEach(el => { el.setAttribute('aria-label', t(el.dataset.i18nAria)); });
  els.previewImg.alt = t('previewAlt');
  els.readout.textContent = fmt(state.commits);
  if (state.realCommits !== null) els.userStatus.textContent = t('statusOk', { n: fmt(state.realCommits) });
  renderFilters();
  renderBackgrounds();
  applyFilters();
  update();
}

// ---------- events ----------
els.username.addEventListener('input', onUserInput);
els.commits.addEventListener('input', () => setCommits(Number(els.commits.value)));
els.resetCommits.addEventListener('click', () => setCommits(state.realCommits));
els.search.addEventListener('input', () => { state.filters.q = els.search.value; applyFilters(); });
document.querySelectorAll('[data-action="clear-filters"]').forEach(b => b.addEventListener('click', clearFilters));
els.eeveeItem.addEventListener('change', () => { state.item = els.eeveeItem.value; update(); });
els.lang.addEventListener('change', () => applyLang(els.lang.value));

els.formatTabs.addEventListener('click', e => {
  const tab = e.target.closest('[data-format]');
  if (!tab) return;
  state.format = tab.dataset.format;
  els.formatTabs.querySelectorAll('[data-format]').forEach(b => b.setAttribute('aria-selected', b === tab));
  updateOutput();
});

let copyTimer;
els.copyBtn.addEventListener('click', async () => {
  const text = els.code.textContent;
  try {
    await navigator.clipboard.writeText(text);
  } catch {
    const range = document.createRange();
    range.selectNodeContents(els.code);
    getSelection().removeAllRanges();
    getSelection().addRange(range);
    document.execCommand('copy');
  }
  els.copyBtn.dataset.copied = 'true';
  els.copyBtn.querySelector('use').setAttribute('href', '#i-check');
  els.copyLabel.textContent = t('copied');
  updateSteps();
  clearTimeout(copyTimer);
  copyTimer = setTimeout(() => {
    els.copyBtn.querySelector('use').setAttribute('href', '#i-copy');
    els.copyLabel.textContent = t('copy');
  }, 2000);
});

// ---------- init ----------
async function init() {
  els.lang.replaceChildren(...Object.entries(LANGS).map(([code, name]) => new Option(name, code)));
  lang = pickLang();
  els.lang.value = lang;
  try {
    let res = await fetch('./lib/pokedex.json');
    if (!res.ok) res = await fetch(`${GITHUB_RAW_BASE}/lib/pokedex.json`);
    if (!res.ok) throw new Error('pokedex');
    pokedex = await res.json();
  } catch {
    els.grid.innerHTML = '<p class="empty">Could not load lib/pokedex.json.</p>';
    return;
  }
  for (const [id, p] of Object.entries(pokedex)) if (p.evolution) preEvolution[p.evolution] ??= id; // first match wins, like the API
  buildGrid();
  applyLang(lang);
}

init();
