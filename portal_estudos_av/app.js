// Lógica completa do Quiz Interativo por Matéria (app.js)
// Requer que dados_questoes.js seja carregado antes no index.html

let materiaAtual = null;
let filaQuestoes = [];
let indiceAtual = 0;
let acertos = 0;
let streak = 0;
let maxStreak = 0;
let historicoRodada = [];
let respondeuAtual = false;
let somAtivo = true;
let mostrarGabaritoBanco = true;

// Embaralhamento Fisher-Yates real
function embaralhar(lista) {
  const arr = [...lista];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// Efeitos sonoros leves com Web Audio API (sem arquivos externos)
function tocarSom(tipo) {
  if (!somAtivo) return;
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);

    if (tipo === 'acerto') {
      osc.type = 'sine';
      osc.frequency.setValueAtTime(523.25, ctx.currentTime);
      osc.frequency.setValueAtTime(659.25, ctx.currentTime + 0.08);
      gain.gain.setValueAtTime(0.12, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.25);
      osc.start();
      osc.stop(ctx.currentTime + 0.25);
    } else if (tipo === 'erro') {
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(220, ctx.currentTime);
      osc.frequency.setValueAtTime(175, ctx.currentTime + 0.12);
      gain.gain.setValueAtTime(0.12, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.28);
      osc.start();
      osc.stop(ctx.currentTime + 0.28);
    }
  } catch (e) {}
}

function alternarSom() {
  somAtivo = !somAtivo;
  document.getElementById('btnSom').textContent = somAtivo ? '🔊 Som: ON' : '🔇 Som: OFF';
}

function mostrarToast(msg) {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.classList.remove('hidden');
  clearTimeout(window._toastTimer);
  window._toastTimer = setTimeout(() => toast.classList.add('hidden'), 3000);
}

function compartilharSite() {
  const texto = 'Bora estudar para a AV! Fizemos um Quiz Interativo com todas as questões de Banco de Dados, Redes e Desenvolvimento Web.';
  if (navigator.share) {
    navigator.share({ title: 'Portal de Estudos AV', text: texto, url: window.location.href }).catch(() => {});
  } else if (navigator.clipboard) {
    navigator.clipboard.writeText(window.location.href).then(() => {
      mostrarToast('Link copiado! Agora é só colar e mandar para os amigos.');
    });
  } else {
    mostrarToast('Envie a pasta ou os arquivos do site para seus amigos abrirem no navegador!');
  }
}

function trocarTela(idTela) {
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  document.getElementById(idTela).classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function irParaInicio() {
  renderizarHome();
  trocarTela('telaInicio');
}

function confirmarSaida() {
  if (indiceAtual > 0 && indiceAtual < filaQuestoes.length) {
    if (!confirm('Deseja sair da rodada atual e voltar para a escolha de matérias?')) return;
  }
  irParaInicio();
}

function getRecorde(idMateria) {
  try {
    return JSON.parse(localStorage.getItem('av_recorde_' + idMateria) || 'null');
  } catch (e) {
    return null;
  }
}

function salvarRecorde(idMateria, acertosFeitos, totalFeito) {
  const pct = Math.round((acertosFeitos / totalFeito) * 100);
  const atual = getRecorde(idMateria);
  if (!atual || pct > atual.pct || (pct === atual.pct && totalFeito > atual.total)) {
    localStorage.setItem('av_recorde_' + idMateria, JSON.stringify({ acertos: acertosFeitos, total: totalFeito, pct }));
  }
}

function renderizarHome() {
  const grid = document.getElementById('gridMaterias');
  grid.innerHTML = '';
  let somaTotal = 0;

  BANCO_AV.forEach(mat => {
    somaTotal += mat.questoes.length;
    const rec = getRecorde(mat.id);
    const recTexto = rec
      ? `🏅 Melhor marca: ${rec.acertos}/${rec.total} (${rec.pct}%)`
      : '🎯 Nenhuma rodada concluída ainda';

    const card = document.createElement('div');
    card.className = 'materia-card';
    card.innerHTML = `
      <div>
        <div class="materia-top">
          <span class="materia-icon">${mat.icone}</span>
          <span class="materia-count">${mat.questoes.length} questões</span>
        </div>
        <h3>${mat.titulo}</h3>
        <p>${mat.descricao}</p>
        <div class="materia-record">${recTexto}</div>
      </div>
      <div class="materia-buttons">
        <button class="btn btn-primary btn-full" onclick="iniciarQuiz('${mat.id}', 'todas')">
          🚀 Jogar TODAS (${mat.questoes.length}) Embaralhadas
        </button>
        <button class="btn" onclick="iniciarQuiz('${mat.id}', 10)">⚡ 10 Questões</button>
        <button class="btn" onclick="iniciarQuiz('${mat.id}', 25)">🔥 25 Questões</button>
        <button class="btn btn-outline btn-full" onclick="abrirBanco('${mat.id}')">
          📖 Consultar Todas as Questões
        </button>
      </div>
    `;
    grid.appendChild(card);
  });

  document.getElementById('totalGeral').textContent = somaTotal;
}

function iniciarQuiz(idMateria, quantidade, listaCustomizada = null) {
  materiaAtual = BANCO_AV.find(m => m.id === idMateria);
  if (!materiaAtual) return;

  const base = listaCustomizada ? listaCustomizada : materiaAtual.questoes;
  const embaralhadas = embaralhar(base);
  filaQuestoes = (quantidade === 'todas' || quantidade >= embaralhadas.length)
    ? embaralhadas
    : embaralhadas.slice(0, quantidade);

  indiceAtual = 0;
  acertos = 0;
  streak = 0;
  maxStreak = 0;
  historicoRodada = [];

  document.getElementById('quizMateriaNome').textContent = materiaAtual.titulo;
  trocarTela('telaQuiz');
  renderizarQuestao();
}

function renderizarQuestao() {
  respondeuAtual = false;
  const q = filaQuestoes[indiceAtual];
  const total = filaQuestoes.length;

  document.getElementById('quizProgressoTexto').textContent = `Questão ${indiceAtual + 1} de ${total}`;
  document.getElementById('scoreAcertos').textContent = acertos;
  document.getElementById('scoreStreak').textContent = streak;
  document.getElementById('progressBar').style.width = `${((indiceAtual) / total) * 100}%`;

  document.getElementById('questionTopic').textContent = q.topico || 'Revisão AV';
  document.getElementById('questionText').textContent = q.pergunta;

  const hintBox = document.getElementById('hintBox');
  hintBox.classList.add('hidden');
  hintBox.textContent = q.dica ? `💡 Dica: ${q.dica}` : '💡 Releia os conceitos-chave do enunciado com calma.';

  const feedbackBox = document.getElementById('feedbackBox');
  feedbackBox.className = 'feedback-box hidden';
  document.getElementById('btnProxima').classList.add('hidden');

  // Embaralha também as alternativas (A, B, C, D) a cada vez!
  const opcoesEmbaralhadas = embaralhar(
    q.opcoes.map((texto, idx) => ({ texto, correta: idx === q.correta }))
  );

  const letras = ['A', 'B', 'C', 'D'];
  const container = document.getElementById('optionsContainer');
  container.innerHTML = '';

  opcoesEmbaralhadas.forEach((op, i) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.dataset.correta = op.correta ? '1' : '0';
    btn.innerHTML = `
      <span class="option-letter">${letras[i]}</span>
      <span>${escapeHtml(op.texto)}</span>
    `;
    btn.onclick = () => selecionarOpcao(btn, op.correta, q);
    container.appendChild(btn);
  });
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function mostrarDica() {
  document.getElementById('hintBox').classList.remove('hidden');
}

function selecionarOpcao(botaoClicado, acertou, questaoObj) {
  if (respondeuAtual) return;
  respondeuAtual = true;

  const botoes = document.querySelectorAll('.option-btn');
  botoes.forEach(b => {
    b.disabled = true;
    if (b.dataset.correta === '1') {
      b.classList.add('correct');
    }
  });

  const feedbackBox = document.getElementById('feedbackBox');
  const feedbackTitle = document.getElementById('feedbackTitle');
  const feedbackText = document.getElementById('feedbackText');

  if (acertou) {
    acertos++;
    streak++;
    if (streak > maxStreak) maxStreak = streak;
    tocarSom('acerto');
    feedbackBox.className = 'feedback-box ok';
    feedbackTitle.textContent = '✅ Resposta Correta!';
  } else {
    streak = 0;
    botaoClicado.classList.add('wrong');
    tocarSom('erro');
    feedbackBox.className = 'feedback-box err';
    feedbackTitle.textContent = '❌ Não foi dessa vez!';
  }

  feedbackText.textContent = questaoObj.explicacao || `Resposta certa: ${questaoObj.opcoes[questaoObj.correta]}`;
  document.getElementById('scoreAcertos').textContent = acertos;
  document.getElementById('scoreStreak').textContent = streak;

  historicoRodada.push({
    questao: questaoObj,
    acertou
  });

  const btnProxima = document.getElementById('btnProxima');
  btnProxima.textContent = (indiceAtual + 1 < filaQuestoes.length) ? 'Próxima Questão →' : 'Ver Resultado Final 🏆';
  btnProxima.classList.remove('hidden');
}

function proximaQuestao() {
  indiceAtual++;
  if (indiceAtual < filaQuestoes.length) {
    renderizarQuestao();
  } else {
    finalizarQuiz();
  }
}

function finalizarQuiz() {
  document.getElementById('progressBar').style.width = '100%';
  const total = filaQuestoes.length;
  const erros = total - acertos;
  const pct = Math.round((acertos / total) * 100);

  salvarRecorde(materiaAtual.id, acertos, total);

  document.getElementById('resAcertos').textContent = acertos;
  document.getElementById('resErros').textContent = erros;
  document.getElementById('resPercent').textContent = `${pct}%`;
  document.getElementById('resMaxStreak').textContent = maxStreak;
  document.getElementById('resultSubtitulo').textContent = `${materiaAtual.titulo} • ${total} questões respondidas`;

  if (pct >= 85) {
    document.getElementById('resultEmoji').textContent = '🏆';
    document.getElementById('resultTitulo').textContent = 'Mandou muito bem! Nível AV garantido!';
  } else if (pct >= 60) {
    document.getElementById('resultEmoji').textContent = '🎯';
    document.getElementById('resultTitulo').textContent = 'Bom desempenho! Vale revisar os erros.';
  } else {
    document.getElementById('resultEmoji').textContent = '📚';
    document.getElementById('resultTitulo').textContent = 'Continue treinando! Jogue novamente.';
  }

  const erradas = historicoRodada.filter(h => !h.acertou).map(h => h.questao);
  const btnRev = document.getElementById('btnRevisarErros');
  if (erradas.length > 0) {
    btnRev.classList.remove('hidden');
    btnRev.textContent = `📝 Revisar Apenas as ${erradas.length} Erradas`;
  } else {
    btnRev.classList.add('hidden');
  }

  const resumo = document.getElementById('resumoRevisao');
  resumo.innerHTML = '';
  historicoRodada.forEach((item, idx) => {
    const div = document.createElement('div');
    div.className = `review-item ${item.acertou ? '' : 'is-wrong'}`;
    div.innerHTML = `
      <strong>${idx + 1}. ${item.acertou ? '✅' : '❌'} ${escapeHtml(item.questao.pergunta)}</strong><br/>
      <span style="color: #86efac;">Resposta correta: ${escapeHtml(item.questao.opcoes[item.questao.correta])}</span>
    `;
    resumo.appendChild(div);
  });

  trocarTela('telaResultado');
}

function jogarNovamente() {
  iniciarQuiz(materiaAtual.id, filaQuestoes.length);
}

function revisarErradas() {
  const erradas = historicoRodada.filter(h => !h.acertou).map(h => h.questao);
  if (erradas.length > 0) {
    iniciarQuiz(materiaAtual.id, erradas.length, erradas);
  }
}

// BANCO DE QUESTÕES (CONSULTA E BUSCA)
function abrirBanco(idMateria) {
  materiaAtual = BANCO_AV.find(m => m.id === idMateria);
  if (!materiaAtual) return;
  document.getElementById('bancoTitulo').textContent = `${materiaAtual.icone} ${materiaAtual.titulo}`;
  document.getElementById('inputBusca').value = '';
  mostrarGabaritoBanco = true;
  document.getElementById('btnToggleGabarito').textContent = '👁️ Ocultar Respostas';
  filtrarBanco();
  trocarTela('telaBanco');
}

function toggleRespostasBanco() {
  mostrarGabaritoBanco = !mostrarGabaritoBanco;
  document.getElementById('btnToggleGabarito').textContent = mostrarGabaritoBanco
    ? '👁️ Ocultar Respostas'
    : '👁️ Mostrar Respostas';
  filtrarBanco();
}

function filtrarBanco() {
  const termo = document.getElementById('inputBusca').value.toLowerCase().trim();
  const filtradas = materiaAtual.questoes.filter(q =>
    q.pergunta.toLowerCase().includes(termo) ||
    (q.topico && q.topico.toLowerCase().includes(termo)) ||
    q.opcoes[q.correta].toLowerCase().includes(termo)
  );

  document.getElementById('bancoContador').textContent = `${filtradas.length} de ${materiaAtual.questoes.length} questões`;
  const lista = document.getElementById('listaBanco');
  lista.innerHTML = '';

  filtradas.forEach((q, idx) => {
    const card = document.createElement('div');
    card.className = 'banco-card';
    card.innerHTML = `
      <span class="topic-badge">#${idx + 1} • ${escapeHtml(q.topico || 'Geral')}</span>
      <h4>${escapeHtml(q.pergunta)}</h4>
      ${mostrarGabaritoBanco ? `
        <div class="banco-ans">✅ ${escapeHtml(q.opcoes[q.correta])}</div>
        <div class="banco-exp">${escapeHtml(q.explicacao || '')}</div>
      ` : ''}
    `;
    lista.appendChild(card);
  });
}

// Inicialização
document.addEventListener('DOMContentLoaded', renderizarHome);
