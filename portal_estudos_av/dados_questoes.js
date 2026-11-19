// Banco de questões completo separado por matéria
const BANCO_AV = [
  {
    "id": "bd",
    "icone": "🗄️",
    "titulo": "Banco de Dados, SQL e Modelagem",
    "descricao": "Resumo AV, Prova Corrigida e Questionário Completo: DDL/DML, JOINs, GROUP BY/HAVING, MER/DER, Hierarquias e Formas Normais.",
    "questoes": [
      {
        "topico": "Arquitetura e Independência",
        "pergunta": "Qual propriedade permite alterar o esquema conceitual lógico de um banco de dados sem modificar o esquema conceitual externo (visão das aplicações e usuários)?",
        "opcoes": [
          "Independência lógica de dados.",
          "Independência física de hardware.",
          "Redundância controlada de tuplas.",
          "Normalização transitiva."
        ],
        "correta": 0,
        "dica": "Refere-se à camada entre o nível lógico e as aplicações.",
        "explicacao": "A independência lógica de dados garante que mudanças na estrutura lógica não quebrem as visões externas usadas pelas aplicações."
      },
      {
        "topico": "Modelagem Conceitual",
        "pergunta": "Qual é a finalidade principal da modelagem conceitual de dados?",
        "opcoes": [
          "Representar, de forma abstrata e independente da implementação, as entidades, seus atributos e os relacionamentos do domínio de negócio.",
          "Definir índices físicos em disco e parâmetros de memória do SGBD.",
          "Criar triggers e procedimentos armazenados específicos do PostgreSQL.",
          "Comprimir arquivos de log de transações."
        ],
        "correta": 0,
        "dica": "Pense na fase independente de SGBD.",
        "explicacao": "A modelagem conceitual abstrai regras de negócio sem depender da tecnologia de implementação."
      },
      {
        "topico": "Modelo Relacional",
        "pergunta": "No modelo relacional, quais características obrigatórias definem as colunas (atributos) de uma tabela?",
        "opcoes": [
          "Devem ter nomes únicos na tabela, tipos de dados definidos e conter valores atômicos e monovalorados.",
          "Podem ter nomes repetidos na mesma tabela e armazenar listas multivaloradas.",
          "Não possuem domínio definido e aceitam tabelas aninhadas.",
          "São sempre chaves estrangeiras obrigatórias."
        ],
        "correta": 0,
        "dica": "Lembre-se da atomicidade e unicidade do nome da coluna.",
        "explicacao": "Atributos possuem nomes únicos por tabela, domínio definido e valores atômicos e monovalorados."
      },
      {
        "topico": "Mapeamento de Hierarquias",
        "pergunta": "Na estratégia de Tabela Única para mapear hierarquias (especialização/generalização), qual característica e desvantagem ocorrem?",
        "opcoes": [
          "Consolida atributos da entidade genérica e das especializadas em uma única tabela (com coluna discriminadora TIPO), gerando valores nulos e redundância quando há atributos exclusivos.",
          "Cria uma tabela separada para cada subtipo sem qualquer coluna discriminadora.",
          "Elimina totalmente a possibilidade de valores nulos no banco.",
          "Impede o uso de chaves primárias."
        ],
        "correta": 0,
        "dica": "Tudo fica concentrado em uma tabela só com coluna TIPO.",
        "explicacao": "A Tabela Única junta tudo em uma tabela com discriminador (TIPO), mas gera nulos nas colunas exclusivas de cada subtipo."
      },
      {
        "topico": "Mapeamento de Hierarquias",
        "pergunta": "Na estratégia 'Uma Tabela por Entidade' para mapear hierarquias, como funciona a chave primária das tabelas especializadas?",
        "opcoes": [
          "A chave primária de cada tabela especializada também funciona como chave estrangeira referenciando a chave primária da entidade genérica.",
          "Cada tabela especializada gera um código independente sem vínculo com a genérica.",
          "A entidade genérica não possui chave primária.",
          "As tabelas especializadas não têm chave primária."
        ],
        "correta": 0,
        "dica": "Há uma tabela para a genérica e uma para cada subclasse.",
        "explicacao": "Nessa abordagem, a PK de cada subclasse é simultaneamente FK apontando para a PK da tabela genérica."
      },
      {
        "topico": "Mapeamento de Hierarquias",
        "pergunta": "O que ocorre na estratégia de 'Subdivisão da Entidade Genérica' ao mapear hierarquias para o modelo relacional?",
        "opcoes": [
          "Não cria tabela para a entidade genérica e replica seus atributos nas tabelas especializadas (exigindo controle de unicidade/redundância em hierarquias sobrepostas e tabela extra para casos parciais).",
          "Cria apenas uma tabela para a entidade genérica e ignora os atributos das especializações.",
          "Usa exclusivamente visões (VIEW) sem tabelas físicas.",
          "Converte todas as colunas em tipo JSON."
        ],
        "correta": 0,
        "dica": "Os atributos do pai descem para cada filho.",
        "explicacao": "A entidade genérica não vira tabela; seus atributos são replicados nas tabelas especializadas."
      },
      {
        "topico": "DDL PostgreSQL",
        "pergunta": "No PostgreSQL, qual comando DDL renomeia uma tabela existente?",
        "opcoes": [
          "ALTER TABLE nome_antigo RENAME TO nome_novo;",
          "RENAME TABLE nome_antigo AS nome_novo;",
          "UPDATE TABLE nome_antigo SET NAME = nome_novo;",
          "MODIFY TABLE nome_antigo TO nome_novo;"
        ],
        "correta": 0,
        "dica": "Usa ALTER TABLE seguido de RENAME TO.",
        "explicacao": "No PostgreSQL, a sintaxe correta é ALTER TABLE nome_antigo RENAME TO nome_novo;."
      },
      {
        "topico": "Consultas SQL / Nulos",
        "pergunta": "Em SQL, qual é a forma correta de verificar se uma coluna possui ou não valor nulo?",
        "opcoes": [
          "Utilizar os operadores IS NULL ou IS NOT NULL (e não comparações de igualdade como = NULL).",
          "Utilizar coluna = NULL ou coluna != NULL.",
          "Utilizar coluna == 'NULL'.",
          "Utilizar COUNT(NULL) no WHERE."
        ],
        "correta": 0,
        "dica": "NULL não é um valor comum, por isso não usa '='.",
        "explicacao": "Em SQL, a verificação de nulidade exige IS NULL ou IS NOT NULL."
      },
      {
        "topico": "Consultas SQL / Datas",
        "pergunta": "Como filtrar intervalos de datas ou extrair o ano de uma coluna de data em SQL (PostgreSQL)?",
        "opcoes": [
          "Usando BETWEEN para intervalos e EXTRACT(YEAR FROM coluna) para extrair o ano.",
          "Usando HAVING YEAR(coluna) sem FROM.",
          "Usando LIKE '%YEAR%' na cláusula ORDER BY.",
          "Usando TRUNCATE(coluna)."
        ],
        "correta": 0,
        "dica": "Pense em BETWEEN e EXTRACT(YEAR FROM ...).",
        "explicacao": "BETWEEN filtra faixas de datas e EXTRACT(YEAR FROM coluna) extrai o ano."
      },
      {
        "topico": "Junções SQL",
        "pergunta": "Qual é o comportamento do LEFT JOIN em uma consulta entre cursos (à esquerda) e níveis (à direita)?",
        "opcoes": [
          "Retorna todos os registros da tabela à esquerda (todos os cursos) mesmo sem correspondência na tabela à direita, exibindo NULL nas colunas do nível.",
          "Retorna apenas os cursos que possuem nível cadastrado.",
          "Retorna apenas os níveis sem cursos vinculados.",
          "Gera erro caso exista algum curso sem nível."
        ],
        "correta": 0,
        "dica": "Preserva integralmente a tabela da esquerda.",
        "explicacao": "O LEFT JOIN mantém todas as linhas da tabela à esquerda e preenche com NULL quando não há par à direita."
      },
      {
        "topico": "Subconsultas SQL",
        "pergunta": "Para que servem subconsultas correlacionadas com NOT EXISTS (ex.: identificar alunos sem telefone cadastrado)?",
        "opcoes": [
          "Filtrar registros da tabela principal quando não existe nenhuma correspondência relacionada na outra tabela.",
          "Apagar automaticamente registros duplicados.",
          "Ordenar resultados em ordem decrescente.",
          "Criar chaves estrangeiras temporárias."
        ],
        "correta": 0,
        "dica": "Verifica a ausência de registros vinculados na subconsulta.",
        "explicacao": "NOT EXISTS retorna verdadeiro quando a subconsulta não encontra nenhuma linha relacionada."
      },
      {
        "topico": "Agregação SQL",
        "pergunta": "Qual é a diferença fundamental entre as cláusulas WHERE e HAVING em consultas com agregação?",
        "opcoes": [
          "WHERE filtra linhas antes do agrupamento (GROUP BY), enquanto HAVING filtra os resultados agregados após o agrupamento (ex.: COUNT(*) >= 2).",
          "WHERE filtra grupos após o GROUP BY e HAVING filtra linhas individuais antes.",
          "Ambas são idênticas e podem ser trocadas em qualquer posição.",
          "HAVING só funciona sem GROUP BY."
        ],
        "correta": 0,
        "dica": "WHERE vem antes do GROUP BY; HAVING vem depois.",
        "explicacao": "WHERE atua sobre tuplas individuais antes do agrupamento; HAVING atua sobre os grupos já formados."
      },
      {
        "topico": "Prova AV — Modelo Relacional",
        "pergunta": "Em um modelo de dados relacional, o tipo de dado que descreve os tipos de valores que podem aparecer em cada coluna é chamado de:",
        "opcoes": [
          "domínio.",
          "relação.",
          "atributo.",
          "tupla."
        ],
        "correta": 0,
        "dica": "Define o conjunto de valores permitidos para um atributo.",
        "explicacao": "Domínio especifica o tipo e o conjunto de valores válidos que uma coluna pode assumir."
      },
      {
        "topico": "Prova AV — Arquitetura",
        "pergunta": "A independência lógica de dados consiste na capacidade dos sistemas de banco de dados de:",
        "opcoes": [
          "alterar o esquema conceitual lógico sem alterar o esquema conceitual externo.",
          "mudar o esquema interno sem alterar o esquema conceitual lógico.",
          "levar o banco de dados de um estado lógico consistente a outro consistente.",
          "garantir que o resultado de uma operação continue válido em falhas."
        ],
        "correta": 0,
        "dica": "Protege a visão externa contra mudanças no esquema lógico.",
        "explicacao": "Independência lógica permite modificar o esquema conceitual lógico sem afetar os esquemas externos."
      },
      {
        "topico": "Prova AV — SQL Agregação",
        "pergunta": "Considere uma tabela 'vendas' com as colunas: id, vendedor_id, data e valor. Qual consulta retorna o valor total vendido por cada vendedor?",
        "opcoes": [
          "SELECT vendedor_id, SUM(valor) FROM vendas GROUP BY vendedor_id;",
          "SELECT vendedor_id, SUM(valor) FROM vendas;",
          "SELECT vendedor_id, COUNT(valor) FROM vendas GROUP BY valor;",
          "SELECT vendedor_id, valor FROM vendas GROUP BY vendedor_id;"
        ],
        "correta": 0,
        "dica": "Soma de valor agrupada por vendedor_id.",
        "explicacao": "Usa-se SUM(valor) combinado com GROUP BY vendedor_id para totalizar por vendedor."
      },
      {
        "topico": "Prova AV — SQL HAVING",
        "pergunta": "Deseja-se listar os departamentos da empresa cuja média salarial seja maior que R$ 5.000,00. Qual consulta atende a esse requisito?",
        "opcoes": [
          "SELECT depto, AVG(salario) FROM func GROUP BY depto HAVING AVG(salario) > 5000;",
          "SELECT depto, AVG(salario) FROM func GROUP BY depto WHERE AVG(salario) > 5000;",
          "SELECT depto, AVG(salario) FROM func GROUP BY depto HAVING salario > 5000;",
          "SELECT depto FROM func HAVING AVG(salario) > 5000;"
        ],
        "correta": 0,
        "dica": "Filtro sobre AVG(salario) exige HAVING.",
        "explicacao": "AVG(salario) > 5000 filtra grupos agregados, devendo ficar na cláusula HAVING após GROUP BY depto."
      },
      {
        "topico": "Prova AV — Atributos",
        "pergunta": "Considere os exemplos de atributos: I. Rua das Rosas, 505... II. Parafuso. III. Masculino. Constitui(em) exemplo(s) de atributo(s) composto(s):",
        "opcoes": [
          "I, apenas.",
          "I e II, apenas.",
          "I e III, apenas.",
          "II e III, apenas."
        ],
        "correta": 0,
        "dica": "Endereço pode ser subdividido em logradouro, número, etc.",
        "explicacao": "Apenas o item I (endereço) é um atributo composto."
      },
      {
        "topico": "Prova AV — INNER JOIN",
        "pergunta": "Na consulta 'SELECT f.nome, d.nome_depto FROM funcionarios f INNER JOIN departamentos d ON f.id_depto = d.id;', o que acontece com funcionários que possuem id_depto vazia (NULL)?",
        "opcoes": [
          "Eles são completamente omitidos (não aparecem) no resultado da consulta.",
          "Eles aparecem listados com o nome do departamento como NULL.",
          "O PostgreSQL interrompe a execução e exibe erro de chave estrangeira.",
          "Eles são duplicados para cada departamento existente."
        ],
        "correta": 0,
        "dica": "INNER JOIN exige correspondência válida em ambas as tabelas.",
        "explicacao": "Como NULL não casa com nenhum d.id, o INNER JOIN omite esses funcionários do resultado."
      },
      {
        "topico": "Prova AV — Mapeamento ER",
        "pergunta": "Com relação à elaboração e implantação de projeto de banco de dados relacional utilizando mapeamento ER, assinale a opção correta:",
        "opcoes": [
          "Para cada entidade forte X no esquema ER, deve ser criada uma relação que inclua todos os atributos simples de X.",
          "Todas as entidades fracas Y no esquema ER devem ser ignoradas na modelagem.",
          "Todos os relacionamentos binários 1:1 devem ser ignorados.",
          "Para os relacionamentos binários N:M, deve ser escolhida apenas uma das entidades."
        ],
        "correta": 0,
        "dica": "Primeiro passo clássico do mapeamento ER-Relacional.",
        "explicacao": "Cada entidade forte X origina uma tabela (relação) contendo seus atributos simples e sua chave primária."
      },
      {
        "topico": "Prova AV — Integridade Referencial",
        "pergunta": "No comando 'ALTER TABLE Funcionario ADD CONSTRAINT fk_depto FOREIGN KEY (id_depto) REFERENCES Departamento(id_depto) ON DELETE CASCADE;', o que acontece se um Departamento for excluído?",
        "opcoes": [
          "O banco de dados apagará automaticamente todos os funcionários vinculados àquele departamento excluído.",
          "O comando de exclusão do departamento será bloqueado pelo SGBD.",
          "O campo id_depto de todos os funcionários afetados será alterado para NULL.",
          "Todos os funcionários da empresa serão apagados, independente do departamento."
        ],
        "correta": 0,
        "dica": "ON DELETE CASCADE propaga a exclusão do pai para os filhos.",
        "explicacao": "Com ON DELETE CASCADE, excluir um registro pai exclui em cascata os registros filhos referenciados."
      },
      {
        "topico": "Prova AV — Subconsulta NOT EXISTS",
        "pergunta": "Dadas ALUNO(CODIGOALUNO, NOME, CPF) e FONEALUNO(CODIGOALUNO, NUMERO, TIPO), o que retorna 'SELECT CODIGOALUNO, NOME FROM ALUNO WHERE NOT EXISTS (SELECT CODIGOALUNO FROM FONEALUNO WHERE FONEALUNO.CODIGOALUNO = ALUNO.CODIGOALUNO);'?",
        "opcoes": [
          "Somente o(s) registro(s) de aluno(s) sem telefone.",
          "O(s) registro(s) de aluno(s) com pelo menos um telefone.",
          "Somente os registros de alunos com dois ou mais telefones.",
          "Todos os telefones sem aluno vinculado."
        ],
        "correta": 0,
        "dica": "NOT EXISTS filtra quem não tem linha correspondente na tabela de telefones.",
        "explicacao": "A consulta retorna exclusivamente os alunos que não possuem nenhum telefone cadastrado em FONEALUNO."
      },
      {
        "topico": "Prova AV — WHERE IN e BETWEEN",
        "pergunta": "O comando 'SELECT nome, salario, departamento_id FROM funcionarios WHERE departamento_id IN (1, 2, 3) AND salario BETWEEN 3000 AND 5000;' retornará quais funcionários?",
        "opcoes": [
          "Funcionários dos departamentos 1, 2 ou 3, cujos salários estão na faixa de 3000 até 5000, incluindo de forma inclusiva os valores 3000 e 5000.",
          "Apenas funcionários com salários exatamente iguais a 3000 ou 5000.",
          "Funcionários com salários entre 3001 e 4999 (excluindo os extremos).",
          "Todos os funcionários ordenados pelo ID do departamento."
        ],
        "correta": 0,
        "dica": "BETWEEN é inclusivo nas duas pontas.",
        "explicacao": "IN (1,2,3) filtra esses departamentos e BETWEEN 3000 AND 5000 inclui os extremos 3000 e 5000."
      },
      {
        "topico": "SQL — DDL vs DML",
        "pergunta": "Qual é a distinção principal entre os comandos DDL (Data Definition Language) e DML (Data Manipulation Language)?",
        "opcoes": [
          "DDL gerencia a estrutura do banco (CREATE, ALTER, DROP), enquanto DML manipula os registros armazenados (SELECT, INSERT, UPDATE, DELETE).",
          "DDL insere registros nas tabelas e DML cria bancos de dados.",
          "DDL controla permissões de usuários e DML define chaves primárias.",
          "Não há diferença; ambos servem apenas para consultas."
        ],
        "correta": 0,
        "dica": "Definition = estrutura; Manipulation = dados.",
        "explicacao": "DDL define objetos e estruturas; DML manipula os dados contidos nas tabelas."
      },
      {
        "topico": "Modelagem Relacional — Chaves",
        "pergunta": "Qual é a utilidade das restrições de integridade PRIMARY KEY e FOREIGN KEY em um modelo relacional?",
        "opcoes": [
          "PRIMARY KEY identifica unicamente cada linha (sem duplicatas ou nulos); FOREIGN KEY aponta para a PK de outra tabela garantindo integridade referencial.",
          "PRIMARY KEY permite valores nulos; FOREIGN KEY impede relacionamentos entre tabelas.",
          "Ambas servem apenas para acelerar ordenações alfabéticas.",
          "FOREIGN KEY substitui a necessidade de chave primária em todas as tabelas."
        ],
        "correta": 0,
        "dica": "PK identifica o registro; FK conecta tabelas.",
        "explicacao": "PK garante unicidade e não-nulidade da linha; FK estabelece o vínculo e a integridade referencial."
      },
      {
        "topico": "Mini Mundo — Relacionamento 1:N",
        "pergunta": "No Mini Mundo da Plataforma de Jogos, uma desenvolvedora cadastra vários jogos, mas cada jogo pertence a uma única desenvolvedora (1:N). Como isso é implementado?",
        "opcoes": [
          "Inserindo a chave primária da desenvolvedora (id_desenvolvedora) como chave estrangeira na tabela JOGO.",
          "Inserindo id_jogo como chave primária na tabela DESENVOLVEDORA.",
          "Criando três tabelas associativas intermediárias.",
          "Armazenando todos os jogos em uma única célula de texto na desenvolvedora."
        ],
        "correta": 0,
        "dica": "No relacionamento 1:N, a chave estrangeira vai para o lado N.",
        "explicacao": "Em relacionamentos 1:N, a PK do lado 1 migra como FK para a tabela do lado N."
      },
      {
        "topico": "Mini Mundo — Relacionamento N:N",
        "pergunta": "Na Plataforma de Jogos, o relacionamento entre JOGADOR e JOGO é Muitos para Muitos (N:N). Como o Mini Mundo resolve essa modelagem?",
        "opcoes": [
          "Criando uma tabela associativa chamada COMPRA com as chaves estrangeiras (id_jogador e id_jogo) e atributos próprios como data_compra e valor_pago.",
          "Colocando uma lista de IDs de jogos dentro da coluna da tabela JOGADOR.",
          "Ignorando a tabela JOGADOR na implementação física.",
          "Usando apenas um relacionamento 1:1 simples."
        ],
        "correta": 0,
        "dica": "Relacionamentos N:N viram uma tabela associativa.",
        "explicacao": "A tabela associativa COMPRA decompõe o N:N e guarda as FKs e atributos próprios."
      },
      {
        "topico": "SQL — Comandos DML",
        "pergunta": "Quais são as funções básicas dos comandos DML INSERT INTO, UPDATE e DELETE FROM?",
        "opcoes": [
          "INSERT INTO cadastra nova linha; UPDATE (com SET) altera linhas existentes; DELETE FROM apaga linhas específicas.",
          "INSERT INTO cria tabelas; UPDATE apaga colunas; DELETE FROM remove o banco.",
          "INSERT INTO consulta dados; UPDATE cria índices; DELETE FROM revoga permissões.",
          "Todos os três servem apenas para alterar nomes de colunas."
        ],
        "correta": 0,
        "dica": "Inserir, atualizar e remover registros.",
        "explicacao": "INSERT INTO insere registros, UPDATE modifica valores existentes e DELETE FROM exclui registros."
      },
      {
        "topico": "SQL — INNER JOIN e ON",
        "pergunta": "Qual é a finalidade do uso conjunto de INNER JOIN e ON em consultas SQL?",
        "opcoes": [
          "INNER JOIN une tabelas retornando apenas registros com correspondência em ambas, e ON define a condição de igualdade entre chave estrangeira e chave primária.",
          "INNER JOIN retorna todos os registros sem filtro e ON ordena alfabeticamente.",
          "ON define quantas linhas serão apagadas após a junção.",
          "INNER JOIN cria uma nova tabela permanente no disco."
        ],
        "correta": 0,
        "dica": "ON especifica qual coluna liga uma tabela à outra.",
        "explicacao": "INNER JOIN combina linhas correspondentes e ON especifica a expressão lógica de ligação."
      },
      {
        "topico": "SQL — Funções de Agregação",
        "pergunta": "Para que servem as funções de agregação COUNT(), SUM() e AVG() em consultas SQL?",
        "opcoes": [
          "COUNT() conta linhas; SUM() soma valores numéricos; AVG() calcula a média aritmética.",
          "COUNT() soma valores; SUM() calcula média; AVG() conta texto.",
          "Todas retornam apenas o maior valor encontrado.",
          "Servem para alterar o tipo de dado das colunas."
        ],
        "correta": 0,
        "dica": "Count = contagem, Sum = soma, Avg = média.",
        "explicacao": "COUNT conta registros, SUM totaliza números e AVG calcula a média."
      },
      {
        "topico": "SQL — Constraints de Coluna",
        "pergunta": "Qual é a diferença no comportamento das restrições NOT NULL, UNIQUE e DEFAULT?",
        "opcoes": [
          "NOT NULL torna o preenchimento obrigatório; UNIQUE impede valores duplicados; DEFAULT define um valor padrão automático quando nenhum é informado.",
          "NOT NULL permite vazio; UNIQUE permite repetição; DEFAULT apaga o valor inserido.",
          "NOT NULL cria chave estrangeira; UNIQUE cria tabela; DEFAULT cria índice.",
          "Todas têm exatamente o mesmo efeito."
        ],
        "correta": 0,
        "dica": "Obrigatório, exclusivo e valor padrão.",
        "explicacao": "NOT NULL proíbe nulos, UNIQUE garante exclusividade e DEFAULT preenche um valor padrão automático."
      },
      {
        "topico": "SQL — TRUNCATE vs DROP",
        "pergunta": "Qual é a principal diferença operacional entre os comandos DDL TRUNCATE TABLE e DROP TABLE?",
        "opcoes": [
          "TRUNCATE TABLE esvazia todos os registros preservando a estrutura da tabela; DROP TABLE elimina permanentemente tanto os dados quanto a estrutura.",
          "TRUNCATE TABLE apaga o banco inteiro; DROP TABLE apaga apenas uma linha.",
          "DROP TABLE preserva as colunas e restrições; TRUNCATE TABLE remove a tabela do catálogo.",
          "Não há diferença entre os dois comandos."
        ],
        "correta": 0,
        "dica": "Truncate limpa o conteúdo; Drop derruba a tabela inteira.",
        "explicacao": "TRUNCATE remove todas as linhas mantendo o esquema; DROP destrói a tabela completa."
      },
      {
        "topico": "PostgreSQL — TIMESTAMP",
        "pergunta": "No PostgreSQL, para que serve a combinação TIMESTAMP DEFAULT CURRENT_TIMESTAMP em uma coluna?",
        "opcoes": [
          "Armazena data e hora e grava automaticamente a data e hora exatas do servidor no momento da inserção quando nenhum valor é informado.",
          "Armazena apenas o ano em formato texto.",
          "Impede que registros sejam inseridos fora do horário comercial.",
          "Apaga registros antigos automaticamente após 24 horas."
        ],
        "correta": 0,
        "dica": "Captura automática do momento em que o registro nasce.",
        "explicacao": "TIMESTAMP guarda data/hora e DEFAULT CURRENT_TIMESTAMP preenche automaticamente com o relógio do servidor."
      },
      {
        "topico": "SQL — 5 Classificações",
        "pergunta": "Quais são as cinco classificações principais dos comandos SQL e suas respectivas funções?",
        "opcoes": [
          "DDL (estrutura), DML (manipulação), DTL (transações), DCL (controle/permissões) e DQL (consultas).",
          "HTML, CSS, JS, PHP e JSON.",
          "TCP, UDP, IP, ARP e ICMP.",
          "1FN, 2FN, 3FN, BCNF e 4FN."
        ],
        "correta": 0,
        "dica": "Definition, Manipulation, Transaction, Control e Query.",
        "explicacao": "Os 5 subconjuntos são DDL, DML, DTL, DCL e DQL."
      },
      {
        "topico": "SQL — Índices",
        "pergunta": "Qual é a finalidade da criação de um Índice (CREATE INDEX) em uma tabela de banco de dados?",
        "opcoes": [
          "Otimizar e acelerar a busca e a recuperação de informações nas consultas em colunas específicas.",
          "Impedir que qualquer usuário faça SELECT na tabela.",
          "Substituir a necessidade de chaves primárias.",
          "Reduzir o tamanho da tela do sistema."
        ],
        "correta": 0,
        "dica": "Funciona como o índice remissivo de um livro.",
        "explicacao": "Índices aceleram operações de busca e filtragem em colunas frequentemente consultadas."
      },
      {
        "topico": "SQL — Operador LIKE",
        "pergunta": "Como funciona o operador LIKE combinado com o caractere curinga '%' (ex.: LIKE '%Apple%') e por que usá-lo no lugar de '='?",
        "opcoes": [
          "Realiza buscas por padrões parciais em strings em qualquer posição do texto, enquanto '=' exige correspondência exata e completa.",
          "Calcula porcentagens matemáticas sobre colunas numéricas.",
          "Ordena textos ignorando acentos.",
          "Apaga registros que contenham a palavra informada."
        ],
        "correta": 0,
        "dica": "O '%' representa zero ou mais caracteres quaisquer.",
        "explicacao": "LIKE com '%' permite busca por substring parcial, diferentemente da igualdade exata '='."
      },
      {
        "topico": "SQL — Tipos de JOIN",
        "pergunta": "Quais são as diferenças fundamentais entre INNER JOIN, LEFT JOIN e RIGHT JOIN?",
        "opcoes": [
          "INNER retorna apenas correspondências em ambas; LEFT retorna todas da esquerda (com NULL à direita se não houver par); RIGHT retorna todas da direita.",
          "INNER retorna tudo sem filtro; LEFT apaga a tabela esquerda; RIGHT apaga a tabela direita.",
          "LEFT e RIGHT são idênticos em qualquer ordem de tabelas.",
          "INNER JOIN funciona apenas com 3 ou mais tabelas."
        ],
        "correta": 0,
        "dica": "Interseção vs preservação da esquerda vs preservação da direita.",
        "explicacao": "INNER traz a interseção; LEFT preserva a tabela à esquerda; RIGHT preserva a tabela à direita."
      },
      {
        "topico": "SQL — CRUD",
        "pergunta": "Quais são as quatro operações básicas que compõem o acrônimo CRUD no contexto de banco de dados?",
        "opcoes": [
          "Create (INSERT), Read (SELECT), Update (UPDATE) e Delete (DELETE).",
          "Connect, Route, Upload e Download.",
          "Compile, Run, Undo e Debug.",
          "Copy, Rename, Unlink e Drop."
        ],
        "correta": 0,
        "dica": "As quatro operações essenciais de persistência.",
        "explicacao": "CRUD corresponde a Criar, Ler, Atualizar e Excluir."
      },
      {
        "topico": "SGBDs — SQLite vs Servidores",
        "pergunta": "Como o SQLite se diferencia de SGBDs como PostgreSQL, MySQL, SQL Server e Oracle?",
        "opcoes": [
          "O SQLite roda localmente em arquivo no dispositivo sem necessidade de servidor dedicado, sendo muito usado em apps mobile e jogos.",
          "O SQLite exige um cluster de servidores Linux dedicados.",
          "O SQLite não suporta linguagem SQL.",
          "PostgreSQL e MySQL só funcionam em celulares."
        ],
        "correta": 0,
        "dica": "Banco embutido (serverless) em arquivo local.",
        "explicacao": "SQLite é embarcado e dispensa servidor dedicado."
      },
      {
        "topico": "Fases de Projeto de BD",
        "pergunta": "Quais são as principais diferenças entre projeto conceitual, projeto lógico e projeto físico?",
        "opcoes": [
          "Conceitual mapeia entidades/relacionamentos independente do SGBD; Lógico traduz para tabelas/colunas/chaves relacionais; Físico trata do armazenamento no SGBD.",
          "Conceitual cria índices; Lógico desenha telas; Físico compra cabos de rede.",
          "Todos os três são feitos diretamente com comandos INSERT.",
          "O projeto físico vem sempre antes do levantamento de requisitos."
        ],
        "correta": 0,
        "dica": "Abstração -> Modelo Relacional -> Implementação no SGBD.",
        "explicacao": "O projeto evolui do conceitual ao lógico e por fim ao físico."
      },
      {
        "topico": "MER — Cardinalidades",
        "pergunta": "Como se diferenciam a cardinalidade máxima (1:1, 1:N, N:N) e a cardinalidade mínima (opcionalidade) na modelagem conceitual?",
        "opcoes": [
          "A máxima define quantas instâncias podem se associar no limite; a mínima define se a participação é obrigatória (1) ou opcional (0).",
          "A máxima define o tamanho do disco; a mínima define a quantidade de colunas.",
          "Cardinalidade mínima só pode ser N.",
          "Não existe diferença entre mínima e máxima."
        ],
        "correta": 0,
        "dica": "Limite superior vs obrigatoriedade (0 ou 1).",
        "explicacao": "Máxima estabelece a proporção limite e mínima indica obrigatoriedade ou opcionalidade."
      },
      {
        "topico": "MER — Entidade Forte vs Fraca",
        "pergunta": "Qual é a diferença fundamental entre uma entidade forte e uma entidade fraca?",
        "opcoes": [
          "Entidade forte tem existência independente e chave própria; entidade fraca depende de uma entidade proprietária e usa a chave dela combinada com atributo parcial.",
          "Entidade forte não tem atributos; entidade fraca tem mais de 50 colunas.",
          "Entidade fraca nunca possui relacionamento.",
          "Entidade forte não pode ter chave primária."
        ],
        "correta": 0,
        "dica": "Dependência de existência e identificação.",
        "explicacao": "A entidade fraca depende da entidade proprietária para identificação e existência."
      },
      {
        "topico": "Normalização — 1NF e 2NF",
        "pergunta": "O que estabelecem a Primeira Forma Normal (1NF) e a Segunda Forma Normal (2NF)?",
        "opcoes": [
          "1NF exige valores atômicos (sem listas/grupos repetitivos); 2NF exige 1NF e elimina dependências parciais em chaves compostas.",
          "1NF cria chaves estrangeiras; 2NF apaga todas as chaves primárias.",
          "1NF permite múltiplos valores por célula; 2NF cria redundância proposital.",
          "Ambas tratam apenas da cor da interface."
        ],
        "correta": 0,
        "dica": "1NF = atomicidade; 2NF = dependência total da chave.",
        "explicacao": "1NF garante atomicidade; 2NF garante que atributos não-chave dependam da chave primária inteira."
      },
      {
        "topico": "MER — Grau e Auto-relacionamento",
        "pergunta": "O que caracteriza o grau de um relacionamento e o que é um auto-relacionamento (recursivo)?",
        "opcoes": [
          "Grau é a quantidade de entidades participantes; auto-relacionamento ocorre quando uma entidade se relaciona consigo mesma em papéis diferentes (ex.: gerente e subordinado).",
          "Grau é o número de linhas; auto-relacionamento é um backup automático.",
          "Auto-relacionamento é proibido no modelo ER.",
          "Grau define a versão do PostgreSQL."
        ],
        "correta": 0,
        "dica": "Ex.: FUNCIONÁRIO gerencia FUNCIONÁRIO.",
        "explicacao": "O grau conta quantas entidades participam; no recursivo, a mesma entidade participa em dois papéis."
      },
      {
        "topico": "UML — Diagrama de Atividades",
        "pergunta": "Qual é o objetivo principal do Diagrama de Atividades na UML e como ele difere do Diagrama de Classes?",
        "opcoes": [
          "Modela o fluxo dinâmico de ações, decisões e processos, enquanto o Diagrama de Classes descreve a estrutura estática do sistema.",
          "Modela apenas tabelas SQL; Classes modela cabos de rede.",
          "São exatamente o mesmo diagrama com nomes diferentes.",
          "Serve apenas para estilizar CSS."
        ],
        "correta": 0,
        "dica": "Fluxo comportamental vs estrutura estática.",
        "explicacao": "Diagrama de Atividades representa fluxos dinâmicos; Diagrama de Classes representa estrutura estática."
      },
      {
        "topico": "Arquitetura ANSI/SPARC",
        "pergunta": "Como se diferenciam os três níveis da Arquitetura ANSI/SPARC (Externo, Conceitual e Interno)?",
        "opcoes": [
          "Externo = visões de usuários/aplicações; Conceitual = estrutura lógica global; Interno = armazenamento físico em hardware/disco.",
          "Externo = disco rígido; Conceitual = monitor; Interno = teclado.",
          "Todos os três níveis armazenam arquivos HTML.",
          "ANSI/SPARC é um protocolo de roteamento."
        ],
        "correta": 0,
        "dica": "Visão do usuário -> Esquema Lógico Global -> Armazenamento Físico.",
        "explicacao": "Os três níveis separam as visões externas, o esquema lógico global e a organização física."
      },
      {
        "topico": "Normalização — 3NF",
        "pergunta": "O que caracteriza uma dependência transitiva e qual é a condição para uma tabela estar na Terceira Forma Normal (3NF)?",
        "opcoes": [
          "Dependência transitiva ocorre quando um atributo não-chave depende de outro atributo não-chave; a 3NF exige estar na 2NF e eliminar dependências transitivas.",
          "Dependência transitiva é quando a chave primária é numérica; 3NF proíbe números.",
          "3NF exige que todas as tabelas sejam unidas em uma só.",
          "Dependência transitiva ocorre apenas em consultas SELECT."
        ],
        "correta": 0,
        "dica": "Chave -> Não-Chave A -> Não-Chave B.",
        "explicacao": "Na 3NF, nenhum atributo não-chave pode depender funcionalmente de outro atributo não-chave."
      },
      {
        "topico": "Normalização — Anomalias",
        "pergunta": "Quais são os três principais tipos de anomalias decorrentes de uma modelagem inadequada?",
        "opcoes": [
          "Anomalias de inserção, exclusão e atualização.",
          "Anomalias de compilação, roteamento e criptografia.",
          "Anomalias de CSS, HTML e DNS.",
          "Anomalias de memória RAM, CPU e GPU."
        ],
        "correta": 0,
        "dica": "Inserir, excluir e atualizar com problemas por redundância.",
        "explicacao": "Tabelas mal normalizadas sofrem anomalias de inserção, exclusão e atualização."
      },
      {
        "topico": "Normalização — Atributos Compostos e Multivalorados",
        "pergunta": "Como devem ser tratados atributos compostos (ex.: endereço) e multivalorados (ex.: vários telefones) para atingir a 1FN?",
        "opcoes": [
          "Compostos são desmembrados em colunas atômicas (rua, número, cidade) e multivalorados são movidos para uma nova tabela ligada por chave estrangeira.",
          "Ambos devem ser concatenados em uma única coluna VARCHAR.",
          "Ambos devem ser excluídos do sistema.",
          "Multivalorados ficam na mesma célula separados por ponto e vírgula."
        ],
        "correta": 0,
        "dica": "Desmembrar compostos e criar tabela filha para multivalorados.",
        "explicacao": "A 1FN exige valores atômicos: compostos viram colunas simples e multivalorados viram tabela própria com FK."
      },
      {
        "topico": "MER — Notações Chen vs Pé de Galinha",
        "pergunta": "Como as cardinalidades mínima e máxima são representadas na notação estendida de Peter Chen e na notação pé de galinha (Crow's Foot)?",
        "opcoes": [
          "Chen usa pares entre parênteses como (1,N) ou (0,1); Pé de Galinha usa símbolos gráficos nos extremos (barra para 1, círculo para 0 e ramificação para muitos).",
          "Chen usa apenas cores; Pé de Galinha usa código SQL puro.",
          "Ambas usam exclusivamente setas tracejadas sem símbolos.",
          "Não representam cardinalidade mínima."
        ],
        "correta": 0,
        "dica": "(min, max) em Chen vs símbolos gráficos no Pé de Galinha.",
        "explicacao": "Chen anota (min, max) nas linhas; Crow's Foot desenha barra (1), círculo (0) e tridente (N)."
      },
      {
        "topico": "MER vs DER",
        "pergunta": "Qual é a diferença conceitual e prática entre MER e DER?",
        "opcoes": [
          "MER é o modelo conceitual abstrato (regras, entidades, atributos e restrições); DER é a representação gráfica visual desse modelo.",
          "MER é linguagem de programação e DER é servidor web.",
          "DER é banco NoSQL e MER é planilha Excel.",
          "Não existe relação entre MER e DER."
        ],
        "correta": 0,
        "dica": "Modelo abstrato vs Diagrama visual.",
        "explicacao": "O MER é a abstração conceitual; o DER é o diagrama gráfico que representa o MER."
      },
      {
        "topico": "SQL — Ordem de Criação de Tabelas",
        "pergunta": "Por que a ordem de criação das tabelas em um script SQL relacional (ex.: criar 'autores' e 'clientes' antes de 'livros' e 'vendas') é obrigatória?",
        "opcoes": [
          "Devido à integridade referencial: as tabelas pais referenciadas por FOREIGN KEY precisam existir antes das tabelas filhas dependentes.",
          "Porque o SQL exige ordem alfabética obrigatória nos nomes das tabelas.",
          "Porque tabelas com mais colunas devem vir sempre por último.",
          "A ordem nunca importa em scripts com chaves estrangeiras."
        ],
        "correta": 0,
        "dica": "Não dá para referenciar uma tabela que ainda não existe.",
        "explicacao": "A tabela referenciada na cláusula REFERENCES precisa existir previamente no banco."
      },
      {
        "topico": "SQL — DECIMAL(10,2)",
        "pergunta": "Qual é a justificativa técnica para escolher DECIMAL(10,2) em colunas de preço monetário no lugar de tipos de ponto flutuante?",
        "opcoes": [
          "Garante precisão exata nas casas decimais (centavos) e evita erros de arredondamento típicos de ponto flutuante.",
          "Ocupa zero bytes no disco.",
          "Permite armazenar texto junto com números.",
          "Converte automaticamente moedas estrangeiras."
        ],
        "correta": 0,
        "dica": "Dinheiro exige aritmética exata.",
        "explicacao": "DECIMAL(10,2) armazena valores numéricos exatos sem imprecisões binárias de float/double."
      },
      {
        "topico": "SQL — Sintaxe FOREIGN KEY",
        "pergunta": "Como deve ser estruturada sintaticamente a declaração de uma Chave Estrangeira dentro de um comando CREATE TABLE?",
        "opcoes": [
          "CONSTRAINT nome_fk FOREIGN KEY (coluna_local) REFERENCES tabela_externa(coluna_referenciada)",
          "FOREIGN KEY tabela_externa LINK coluna_local",
          "ADD PRIMARY KEY REFERENCES tabela_externa",
          "JOIN FOREIGN KEY ON coluna_local"
        ],
        "correta": 0,
        "dica": "FOREIGN KEY (local) REFERENCES externa(pk).",
        "explicacao": "A cláusula padrão usa CONSTRAINT nome FOREIGN KEY (col) REFERENCES tabela(col)."
      },
      {
        "topico": "Modelo Relacional — PK e FK",
        "pergunta": "Qual é a função de uma Chave Primária (Primary Key) e de uma Chave Estrangeira (Foreign Key) em um banco de dados relacional?",
        "opcoes": [
          "PK identifica de forma única cada linha impedindo repetições; FK relaciona dados entre duas tabelas garantindo integridade referencial.",
          "PK permite linhas duplicadas; FK apaga índices automaticamente.",
          "PK conecta ao servidor web; FK estiliza colunas.",
          "Ambas servem apenas para ordenação alfabética."
        ],
        "correta": 0,
        "dica": "Unicidade na própria tabela vs referência entre tabelas.",
        "explicacao": "PK garante identidade única da tupla e FK mantém o vínculo referencial válido."
      },
      {
        "topico": "Conceito SQL",
        "pergunta": "Como o SQL (Structured Query Language) é definido e qual é o seu papel fundamental na era dos dados?",
        "opcoes": [
          "É a linguagem estruturada padrão para interagir com SGBDs relacionais, permitindo manipular, organizar, estruturar e extrair dados de tabelas.",
          "É um sistema operacional exclusivo para servidores de e-mail.",
          "É um protocolo de camada física para fibra óptica.",
          "É um editor de imagens vetoriais."
        ],
        "correta": 0,
        "dica": "Linguagem padrão de SGBDs relacionais.",
        "explicacao": "SQL permite definir esquemas, manipular dados e consultar informações com eficiência."
      },
      {
        "topico": "Independência ANSI/SPARC",
        "pergunta": "Por que a separação em camadas promovida pela Arquitetura ANSI/SPARC é importante para a independência de dados?",
        "opcoes": [
          "Garante que alterações no nível físico ou lógico não exijam reescrever as visões e aplicações do nível externo, facilitando a manutenção.",
          "Obriga a reinstalar o sistema operacional a cada nova tabela.",
          "Elimina a necessidade de chaves primárias.",
          "Impede qualquer atualização de esquema."
        ],
        "correta": 0,
        "dica": "Isolamento entre camadas de abstração.",
        "explicacao": "A arquitetura em 3 níveis isola impactos de mudanças físicas e lógicas."
      },
      {
        "topico": "Fases de Projeto e Modelagem Lógica",
        "pergunta": "Qual é a importância de separar o desenvolvimento em projeto conceitual, lógico e físico, e como a modelagem lógica atua nessa transição?",
        "opcoes": [
          "Gerencia a complexidade: a modelagem lógica traduz o modelo conceitual abstrato para tabelas, colunas, tipos e chaves do modelo relacional antes da implementação física.",
          "A modelagem lógica desenha interfaces CSS antes de criar o banco.",
          "Todas as etapas são feitas simultaneamente sem planejamento.",
          "A modelagem física vem antes do levantamento de regras de negócio."
        ],
        "correta": 0,
        "dica": "Ponte entre o conceito abstrato e o SGBD específico.",
        "explicacao": "A modelagem lógica converte entidades e relacionamentos em estruturas relacionais."
      },
      {
        "topico": "MER e Regras de Negócio",
        "pergunta": "De que maneira as regras de negócio de uma organização moldam a identificação de entidades, atributos e relacionamentos no MER?",
        "opcoes": [
          "Determinam o escopo e comportamento do sistema, ditando quais objetos viram entidades, quais dados viram atributos e como interagem nos relacionamentos.",
          "Definem apenas a cor do logotipo da empresa.",
          "Substituem completamente a normalização.",
          "Impedem que duas entidades se relacionem."
        ],
        "correta": 0,
        "dica": "O banco reflete a realidade operacional do negócio.",
        "explicacao": "Regras de negócio guiam toda a modelagem conceitual do domínio."
      },
      {
        "topico": "Cardinalidade Máxima e Mínima",
        "pergunta": "Como a análise conjunta de cardinalidade máxima e mínima reflete com precisão as restrições de um negócio?",
        "opcoes": [
          "A máxima define a proporção quantitativa limite (1:1, 1:N, N:N) e a mínima especifica obrigatoriedade (1) ou opcionalidade (0), evitando ambiguidades.",
          "Define apenas o tamanho máximo em megabytes do banco.",
          "Cardinalidade mínima só existe em bancos NoSQL.",
          "Ambas indicam o número de colunas da tabela."
        ],
        "correta": 0,
        "dica": "Quantidade limite + obrigatoriedade.",
        "explicacao": "Juntas, cardinalidade máxima e mínima garantem que o banco respeite as restrições reais."
      },
      {
        "topico": "Entidade Fraca",
        "pergunta": "O que caracteriza conceitualmente uma entidade fraca e por que ela depende de uma entidade proprietária?",
        "opcoes": [
          "Não possui atributos próprios suficientes para formar chave primária completa, dependendo da entidade forte para existir e ser identificada.",
          "Possui mais de 100 chaves primárias independentes.",
          "Nunca possui nenhum atributo.",
          "É uma tabela temporária apagada a cada segundo."
        ],
        "correta": 0,
        "dica": "Ex.: Dependente de um Funcionário.",
        "explicacao": "Sua identificação combina atributo parcial próprio com a chave da entidade proprietária."
      },
      {
        "topico": "Normalização e Prevenção de Anomalias",
        "pergunta": "Qual é o papel da normalização (1NF e 2NF) na prevenção de anomalias de inserção, alteração e exclusão?",
        "opcoes": [
          "Organiza dados eliminando redundâncias, grupos repetitivos (1NF) e dependências parciais em chaves compostas (2NF), evitando inconsistências ao manipular registros.",
          "Duplica todas as colunas para aumentar segurança.",
          "Apaga chaves estrangeiras para acelerar INSERT.",
          "Converte todas as tabelas em texto livre."
        ],
        "correta": 0,
        "dica": "Menos redundância = menos anomalias operacionais.",
        "explicacao": "Normalizar evita que alterar ou excluir uma linha corrompa dados repetidos."
      },
      {
        "topico": "Integridade Referencial",
        "pergunta": "Como a Chave Estrangeira (FK) e as regras de integridade referencial atuam para manter a consistência entre tabelas?",
        "opcoes": [
          "Proíbem inserir chaves estrangeiras que não existam na tabela pai e impedem exclusões órfãs sem tratamento adequado.",
          "Permitem apontar para registros inexistentes livremente.",
          "Convertem nulos em zeros automaticamente.",
          "Apagam a tabela pai sempre que um filho é inserido."
        ],
        "correta": 0,
        "dica": "Consistência entre tabela pai e tabela filha.",
        "explicacao": "A integridade referencial garante que toda FK válida corresponda a uma PK existente."
      },
      {
        "topico": "Atributos em Relacionamentos",
        "pergunta": "Em que situação um relacionamento pode conter atributos próprios no modelo conceitual?",
        "opcoes": [
          "Quando a informação pertence exclusivamente à associação entre as entidades e não a uma delas isoladamente (ex.: data_matricula ou nota entre ALUNO e DISCIPLINA).",
          "Nunca; relacionamentos não podem ter atributos em hipótese alguma.",
          "Apenas quando o relacionamento é 1:1.",
          "Apenas em bancos sem chave primária."
        ],
        "correta": 0,
        "dica": "A nota não é só do aluno nem só da disciplina, é da matrícula entre ambos.",
        "explicacao": "Atributos descritivos da interação pertencem ao relacionamento (e migram para a tabela associativa em N:N)."
      },
      {
        "topico": "UML — Diagrama de Atividades vs Classes",
        "pergunta": "Como o Diagrama de Atividades da UML se diferencia de diagramas estruturais como o Diagrama de Classes?",
        "opcoes": [
          "Atividades modela o fluxo dinâmico de tarefas, decisões e caminhos de execução; Classes descreve a estrutura estática (atributos, métodos e associações).",
          "Atividades desenha telas HTML e Classes configura roteadores.",
          "Ambos mostram apenas consultas SQL.",
          "Não há diferença entre diagramas comportamentais e estruturais."
        ],
        "correta": 0,
        "dica": "Dinâmico (processo) vs Estático (estrutura).",
        "explicacao": "Diagramas comportamentais focam em fluxo de execução; estruturais focam na organização estática."
      },
      {
        "topico": "ANSI/SPARC — Isolamento de Manutenção",
        "pergunta": "De que maneira a Arquitetura ANSI/SPARC isola os impactos de manutenção em um SGBD?",
        "opcoes": [
          "Mudanças no armazenamento físico (nível interno) não afetam o esquema lógico (conceitual), e ajustes conceituais não exigem reescrever aplicações (nível externo).",
          "Exige reescrever todo o código-fonte quando se troca o disco rígido.",
          "Une todas as aplicações diretamente aos setores físicos do HD.",
          "Bloqueia alterações no banco após a criação."
        ],
        "correta": 0,
        "dica": "Independência física + independência lógica.",
        "explicacao": "A separação em 3 camadas protege níveis superiores contra alterações nos níveis inferiores."
      },
      {
        "topico": "Anomalias de Inserção e Exclusão",
        "pergunta": "No exemplo de empregados e departamentos em uma única tabela desnormalizada, como ocorrem as anomalias de inserção e exclusão?",
        "opcoes": [
          "Inserção: não dá para cadastrar departamento sem empregado (ou vice-versa); Exclusão: apagar o último empregado remove também os dados do departamento.",
          "Inserção apaga o banco; Exclusão cria novos departamentos.",
          "Ocorrem apenas quando há índices criados.",
          "São causadas exclusivamente por falta de espaço em disco."
        ],
        "correta": 0,
        "dica": "Entidades diferentes misturadas na mesma tabela.",
        "explicacao": "Misturar entidades na mesma relação acopla indevidamente seus ciclos de vida."
      },
      {
        "topico": "2NF — Resolução no Exemplo de Projetos",
        "pergunta": "No exemplo da tabela de projetos com membros, tarefas e 'horas alocadas' (dependência parcial em chave composta), como o modelo conceitual resolve o problema?",
        "opcoes": [
          "Desmembrando em duas entidades principais (MEMBRO e TAREFA) com relacionamento N:N e alocando 'horas alocadas' como atributo da tabela associativa.",
          "Apagando a coluna 'horas alocadas' e os membros.",
          "Unindo todos os projetos em uma linha só.",
          "Transformando 'horas alocadas' em chave primária."
        ],
        "correta": 0,
        "dica": "Cada atributo deve depender da chave completa.",
        "explicacao": "Separar MEMBRO e TAREFA e deixar horas alocadas na associação N:N elimina dependências parciais."
      },
      {
        "topico": "Objetivo da Normalização",
        "pergunta": "Qual é o principal objetivo do processo de normalização aplicado às tabelas de um banco relacional?",
        "opcoes": [
          "Minimizar redundância de dados e evitar anomalias de inserção, atualização e exclusão, mantendo consistência e eficiência.",
          "Aumentar propositalmente a duplicação de dados.",
          "Eliminar todas as chaves estrangeiras do banco.",
          "Converter tabelas relacionais em páginas web."
        ],
        "correta": 0,
        "dica": "Integridade e eliminação de redundância.",
        "explicacao": "A normalização organiza relações para evitar inconsistências e redundâncias."
      },
      {
        "topico": "1FN — Valores Atômicos",
        "pergunta": "O que estabelece a Primeira Forma Normal (1FN) sobre os valores armazenados nos campos de uma tabela?",
        "opcoes": [
          "A tabela deve possuir apenas valores atômicos e indivisíveis, contendo um único dado elementar por célula, sem grupos repetitivos.",
          "Cada célula deve armazenar uma lista separada por vírgulas.",
          "A tabela não pode ter chave primária.",
          "Permite tabelas aninhadas dentro de colunas."
        ],
        "correta": 0,
        "dica": "Atomicidade = dado indivisível.",
        "explicacao": "Na 1FN, cada atributo contém um único valor atômico."
      },
      {
        "topico": "1FN — Tratamento de Endereço",
        "pergunta": "Como um atributo composto como endereço deve ser tratado para atender à 1FN?",
        "opcoes": [
          "Desmembrado em colunas menores e atômicas, como rua, número, bairro, cidade, estado e CEP.",
          "Mantido em uma única string longa separada por barras.",
          "Removido da tabela de clientes.",
          "Convertido em chave estrangeira para si mesmo."
        ],
        "correta": 0,
        "dica": "Subdividir em atributos simples.",
        "explicacao": "Atributos compostos são divididos em colunas individuais atômicas."
      },
      {
        "topico": "1FN — Tratamento de Telefones",
        "pergunta": "De que maneira um atributo multivalorado (como vários números de telefone de um cliente) deve ser modelado na 1FN?",
        "opcoes": [
          "Retirado da tabela principal e alocado em uma nova tabela dedicada (ex.: TELEFONES) vinculada por chave estrangeira.",
          "Concatenado na mesma coluna de telefone separado por hífen.",
          "Criando colunas telefone1, telefone2, telefone3 fixas.",
          "Ignorando todos os telefones secundários."
        ],
        "correta": 0,
        "dica": "Nova tabela ligada por FK.",
        "explicacao": "Atributos multivalorados originam uma nova relação com FK referenciando a entidade principal."
      },
      {
        "topico": "1FN — Requisito de Chave Primária",
        "pergunta": "Além de valores atômicos e ausência de atributos compostos/multivalorados, qual requisito estrutural toda tabela relacional deve cumprir?",
        "opcoes": [
          "Possuir uma chave primária (PRIMARY KEY) claramente definida para identificar unicamente cada registro.",
          "Ter no mínimo 20 colunas.",
          "Ser ordenada alfabeticamente no disco.",
          "Não possuir chaves estrangeiras."
        ],
        "correta": 0,
        "dica": "Identificação única obrigatória de cada tupla.",
        "explicacao": "Toda relação bem formada exige uma chave primária definida."
      },
      {
        "topico": "Cardinalidade — Definição",
        "pergunta": "O que é cardinalidade em modelagem de dados e qual a distinção entre máxima e mínima?",
        "opcoes": [
          "Define quantas instâncias de uma entidade se relacionam com outra; máxima indica o teto (1 ou N) e mínima indica o piso obrigatório (0 opcional, 1+ obrigatório).",
          "Define a velocidade de consulta em milissegundos.",
          "Indica apenas o número de tabelas do banco.",
          "Refere-se ao tamanho da fonte no diagrama."
        ],
        "correta": 0,
        "dica": "Proporção quantitativa entre entidades.",
        "explicacao": "Cardinalidade expressa limites mínimo e máximo de associações entre instâncias."
      },
      {
        "topico": "Análise Prática de Cardinalidade",
        "pergunta": "Como deve ser feita a análise prática para determinar a cardinalidade entre CLIENTE e ENCOMENDA?",
        "opcoes": [
          "Fazendo perguntas nos dois sentidos: quantas encomendas um cliente faz (mínimo/máximo) e quantos clientes fazem uma encomenda (mínimo/máximo).",
          "Contando quantas letras tem o nome de cada tabela.",
          "Escolhendo sempre N:N para todas as tabelas.",
          "Verificando apenas o lado esquerdo da relação."
        ],
        "correta": 0,
        "dica": "Leitura bidirecional (ida e volta).",
        "explicacao": "Analisar ambos os sentidos revela com precisão os pares (min, max) de cada lado."
      },
      {
        "topico": "Relacionamentos 1:1 e 1:N",
        "pergunta": "O que caracteriza um relacionamento 1:1 e um relacionamento 1:N com exemplos práticos?",
        "opcoes": [
          "1:1 liga uma instância única a outra única (ex.: Professor e Armário exclusivo); 1:N liga uma instância a várias do outro lado (ex.: Departamento e Funcionários).",
          "1:1 liga vários a vários; 1:N não permite nenhum vínculo.",
          "Ambos exigem obrigatoriamente uma terceira tabela associativa.",
          "1:N significa que um funcionário trabalha em N departamentos simultaneamente."
        ],
        "correta": 0,
        "dica": "Exclusividade mútua (1:1) vs um-para-muitos (1:N).",
        "explicacao": "1:1 é associação um-a-um; 1:N associa um registro pai a múltiplos registros filhos."
      },
      {
        "topico": "Relacionamento N:N e Tabela Associativa",
        "pergunta": "Por que um relacionamento Muitos para Muitos (N:N) exige uma tabela associativa na implementação relacional?",
        "opcoes": [
          "Porque bancos relacionais não implementam diretamente N:N entre duas tabelas, sendo necessário decompô-lo em dois relacionamentos 1:N via tabela intermediária.",
          "Porque SQL não suporta chaves estrangeiras.",
          "Para duplicar os dados dos clientes em todas as linhas.",
          "Apenas por estética visual do diagrama."
        ],
        "correta": 0,
        "dica": "N:N se transforma em dois relacionamentos 1:N.",
        "explicacao": "A tabela associativa armazena as chaves estrangeiras de ambos os lados formando a ligação."
      },
      {
        "topico": "MER — Origem e Fase",
        "pergunta": "O que é o Modelo Entidade-Relacionamento (MER) e em qual fase do projeto é primordialmente utilizado?",
        "opcoes": [
          "Modelo conceitual criado por Peter Chen na década de 1970 para descrever abstratamente objetos e regras de negócio na fase de projeto conceitual.",
          "Linguagem física criada nos anos 2000 para configurar servidores cloud.",
          "Ferramenta de backup usada apenas após o sistema ir ao ar.",
          "Protocolo de transferência de arquivos."
        ],
        "correta": 0,
        "dica": "Peter Chen, anos 1970, projeto conceitual.",
        "explicacao": "O MER é o modelo conceitual padrão utilizado antes do projeto lógico e físico."
      },
      {
        "topico": "Objetos Básicos do MER",
        "pergunta": "Quais são os três tipos de objetos básicos que compõem a estrutura fundamental de um MER?",
        "opcoes": [
          "Entidades, Atributos e Relacionamentos.",
          "Tabelas, Índices e Triggers.",
          "Servidores, Roteadores e Switches.",
          "Tags, Classes e IDs."
        ],
        "correta": 0,
        "dica": "A tríade fundamental da modelagem ER.",
        "explicacao": "Todo MER é construído sobre Entidades, Atributos e Relacionamentos."
      },
      {
        "topico": "Notação Gráfica de Peter Chen",
        "pergunta": "Como entidades, atributos e relacionamentos são representados graficamente na notação tradicional de Peter Chen?",
        "opcoes": [
          "Entidades por retângulos, Atributos por elipses/círculos e Relacionamentos por losangos ligados por linhas.",
          "Entidades por círculos, Atributos por triângulos e Relacionamentos por estrelas.",
          "Tudo é representado apenas por texto sem formas geométricas.",
          "Entidades por losangos e Relacionamentos por retângulos."
        ],
        "correta": 0,
        "dica": "Retângulo = Entidade; Elipse = Atributo; Losango = Relacionamento.",
        "explicacao": "Essa é a simbologia clássica definida por Peter Chen para o DER."
      },
      {
        "topico": "Importância da Modelagem Conceitual",
        "pergunta": "Por que é importante realizar a modelagem conceitual (MER/DER) antes de criar tabelas diretamente no SGBD?",
        "opcoes": [
          "Permite compreender regras de negócio livre de restrições técnicas, evitando falhas de projeto, redundâncias e retrabalho nas etapas seguintes.",
          "Porque o PostgreSQL bloqueia comandos CREATE TABLE sem um arquivo PDF anexado.",
          "Para aumentar o consumo de memória RAM do servidor.",
          "Não há vantagem prática em modelar antes."
        ],
        "correta": 0,
        "dica": "Planejar antes evita retrabalho estrutural.",
        "explicacao": "Modelar conceitualmente previne erros estruturais caros de corrigir depois."
      },
      {
        "topico": "Erros de Sintaxe em Scripts SQL",
        "pergunta": "Qual o impacto de erros de digitação e sintaxe (como 'PIMARY', 'FOREING KEY' ou vírgulas sobrando) em scripts CREATE TABLE?",
        "opcoes": [
          "Impedem que o SGBD interprete o comando, gerando erro de sintaxe e abortando a criação da tabela.",
          "O SGBD corrige automaticamente todas as palavras erradas.",
          "Apenas muda a cor da tabela no pgAdmin.",
          "Cria a tabela sem colunas."
        ],
        "correta": 0,
        "dica": "O parser SQL exige palavras-chave e pontuação exatas.",
        "explicacao": "Qualquer erro léxico ou sintático interrompe a execução do DDL."
      },
      {
        "topico": "Mini Roteiro da Livraria — Entidades",
        "pergunta": "No Mini Roteiro da Livraria, quais são as quatro entidades mapeadas e como autores e livros se relacionam?",
        "opcoes": [
          "Autores, Livros, Clientes e Vendas; entre autores e livros há relacionamento 1:N implementado com autor_id como FK em livros.",
          "Produtos, Fornecedores, Estoque e Notas; relacionamento 1:1.",
          "Alunos, Professores, Salas e Cursos; sem chaves estrangeiras.",
          "Apenas uma tabela chamada Livraria."
        ],
        "correta": 0,
        "dica": "Um autor escreve vários livros (1:N).",
        "explicacao": "Autores (1) para Livros (N) usa autor_id como FK na tabela livros."
      },
      {
        "topico": "Mini Roteiro da Livraria — Vendas N:N",
        "pergunta": "Como o Mini Roteiro da Livraria solucionou o relacionamento N:N entre clientes e livros nas compras?",
        "opcoes": [
          "Criando a tabela associativa 'vendas' com as chaves estrangeiras cliente_id e livro_id, além de atributo próprio como data_venda.",
          "Colocando o nome de todos os livros na tabela clientes.",
          "Criando uma chave estrangeira dentro da tabela autores.",
          "Ignorando o histórico de compras."
        ],
        "correta": 0,
        "dica": "Tabela intermediária 'vendas'.",
        "explicacao": "A tabela vendas resolve o N:N entre clientes e livros."
      }
    ]
  },
  {
    "id": "redes",
    "icone": "🌐",
    "titulo": "Redes de Computadores e Segurança",
    "descricao": "Resumo AV e Questionário Consolidado: IPv4/IPv6, Subnetting, Stop-and-Wait, Go-Back-N, OSI/TCP-IP, TCP/UDP, DNS, VPN, Firewall, IDS/IPS e AAA.",
    "questoes": [
      {
        "topico": "IPv4 e Subnetting",
        "pergunta": "Em endereçamento IPv4 (32 bits em quatro octetos), uma sub-rede com máscara 255.255.255.248 (/29) possui quantos endereços totais no bloco e quantos utilizáveis para hosts?",
        "opcoes": [
          "8 endereços no bloco, sendo 6 utilizáveis para dispositivos (1 identifica a rede e 1 é reservado para broadcast).",
          "8 endereços no bloco, todos os 8 utilizáveis para dispositivos.",
          "16 endereços no bloco, sendo 14 utilizáveis.",
          "4 endereços no bloco, sendo 2 utilizáveis."
        ],
        "correta": 0,
        "dica": "Sobram 3 bits de host: 2³ = 8, menos rede e broadcast.",
        "explicacao": "Com /29 restam 3 bits para hosts (2³ = 8 endereços); descontando rede e broadcast, restam 6 hosts úteis."
      },
      {
        "topico": "Controle de Transmissão",
        "pergunta": "Como funciona o protocolo Stop-and-Wait e qual é sua principal limitação?",
        "opcoes": [
          "Envia um quadro por vez e aguarda confirmação antes de transmitir o próximo; é simples, mas tem baixo desempenho em redes com grande atraso.",
          "Envia milhares de quadros sem confirmação e nunca retransmite.",
          "Opera apenas na camada de aplicação para envio de e-mails.",
          "Converte fibra óptica em cabo coaxial."
        ],
        "correta": 0,
        "dica": "Para e espera o ACK de cada quadro individual.",
        "explicacao": "Stop-and-Wait envia 1 quadro por vez e espera ACK, sofrendo queda de vazão quando a latência é alta."
      },
      {
        "topico": "Controle de Transmissão",
        "pergunta": "Como opera o protocolo Go-Back-N ARQ quando ocorre perda ou erro de quadro?",
        "opcoes": [
          "Usa janela deslizante, confirmações e temporizadores (timeout); em caso de erro/perda, pode retransmitir o quadro perdido e os seguintes.",
          "Descarta toda a conexão TCP e reinicia o roteador.",
          "Ignora temporizadores e nunca retransmite quadros perdidos.",
          "Envia apenas um bit por segundo."
        ],
        "correta": 0,
        "dica": "Janela deslizante que volta ao ponto do erro (Go-Back-N).",
        "explicacao": "Go-Back-N transmite vários quadros dentro da janela e retransmite a partir do quadro perdido em caso de falha."
      },
      {
        "topico": "Web — Cliente-Servidor",
        "pergunta": "Na comunicação web cliente-servidor, qual é a diferença entre HTTP e HTTPS e suas portas padrão?",
        "opcoes": [
          "HTTP (porta 80) transmite dados sem criptografia; HTTPS (porta 443) acrescenta criptografia para proteger os dados transmitidos.",
          "HTTP (porta 443) é criptografado; HTTPS (porta 80) é em texto claro.",
          "Ambos utilizam a porta 25 e servem apenas para e-mail.",
          "HTTPS substitui o protocolo IP na camada de rede."
        ],
        "correta": 0,
        "dica": "80 = HTTP; 443 = HTTPS (seguro).",
        "explicacao": "HTTP usa porta 80 sem criptografia; HTTPS usa porta 443 com TLS/SSL."
      },
      {
        "topico": "Correio Eletrônico e DNS",
        "pergunta": "Qual é a função de SMTP, POP3, IMAP e DNS?",
        "opcoes": [
          "SMTP envia e-mails; POP3 baixa mensagens do servidor; IMAP sincroniza mensagens diretamente no servidor; DNS traduz nomes de domínio em endereços IP.",
          "SMTP traduz domínios; DNS envia e-mails; POP3 criptografa túneis VPN.",
          "IMAP envia e-mails e SMTP apaga mensagens do servidor.",
          "Todos são protocolos de camada física."
        ],
        "correta": 0,
        "dica": "Envio (SMTP), download (POP3), sincronização (IMAP) e resolução de nomes (DNS).",
        "explicacao": "SMTP realiza envio; POP3 faz download local; IMAP mantém sincronizado no servidor; DNS resolve nomes em IPs."
      },
      {
        "topico": "Meios Físicos",
        "pergunta": "Compare par trançado, cabo coaxial e fibra óptica quanto ao meio de transmissão e características:",
        "opcoes": [
          "Par trançado usa fios entrelaçados contra interferência (comum em LANs); coaxial tem blindagem; fibra óptica usa pulsos luminosos com alta capacidade e imunidade eletromagnética.",
          "Fibra óptica transmite sinais elétricos em cobre e sofre muita interferência eletromagnética.",
          "Par trançado usa feixes de laser para longas distâncias intercontinentais.",
          "Cabo coaxial não possui qualquer camada isolante ou blindagem."
        ],
        "correta": 0,
        "dica": "Luz na fibra óptica = imunidade eletromagnética e longa distância.",
        "explicacao": "A fibra óptica usa luz, garantindo imunidade a ruídos eletromagnéticos e altíssima capacidade."
      },
      {
        "topico": "Modelos OSI e TCP/IP",
        "pergunta": "Quais são as 7 camadas do modelo OSI e como as camadas superiores são agrupadas na arquitetura TCP/IP (4 camadas)?",
        "opcoes": [
          "OSI: Física, Enlace, Rede, Transporte, Sessão, Apresentação e Aplicação. No TCP/IP, Aplicação, Apresentação e Sessão são agrupadas na camada de Aplicação.",
          "OSI tem 4 camadas e TCP/IP tem 7 camadas.",
          "No TCP/IP, Física, Enlace e Rede viram a camada de Sessão.",
          "O modelo OSI não possui camada de Transporte."
        ],
        "correta": 0,
        "dica": "As 3 camadas do topo do OSI viram 1 no TCP/IP.",
        "explicacao": "TCP/IP possui Acesso à Rede, Internet, Transporte e Aplicação (que absorve Sessão e Apresentação do OSI)."
      },
      {
        "topico": "Protocolos TCP, IP, HTTP e UDP",
        "pergunta": "Qual é a diferença fundamental entre TCP e UDP na camada de Transporte?",
        "opcoes": [
          "TCP estabelece conexão e oferece entrega confiável, ordenada e com controle de fluxo; UDP não estabelece conexão nem garante entrega, tendo menor sobrecarga (ideal para streaming e VoIP).",
          "UDP é orientado à conexão e mais lento; TCP não garante entrega.",
          "TCP atua na camada de Rede e UDP na camada Física.",
          "Ambos garantem entrega ordenada com retransmissão."
        ],
        "correta": 0,
        "dica": "TCP = confiabilidade; UDP = baixa latência sem conexão.",
        "explicacao": "TCP garante entrega ordenada e controle de fluxo; UDP prioriza rapidez sem conexão para tempo real."
      },
      {
        "topico": "Camadas Física e de Enlace",
        "pergunta": "Como se dividem as responsabilidades entre Camada Física e Camada de Enlace?",
        "opcoes": [
          "Física transmite bits convertidos em sinais elétricos, ópticos ou eletromagnéticos; Enlace organiza dados em quadros (frames), usa endereços MAC, detecta erros e controla acesso ao meio.",
          "Física gerencia endereços IP e Enlace traduz nomes DNS.",
          "Física monta páginas HTML e Enlace faz roteamento BGP.",
          "Ambas atuam apenas na camada de Aplicação."
        ],
        "correta": 0,
        "dica": "Bits e sinais (Física) vs Quadros e MAC (Enlace).",
        "explicacao": "A Camada Física lida com sinais e bits; a de Enlace trata quadros, endereçamento MAC, erros e acesso ao meio."
      },
      {
        "topico": "Segurança — VPN e Firewall Stateful",
        "pergunta": "Qual é a função de uma VPN e de um Firewall Stateful?",
        "opcoes": [
          "VPN cria túneis criptografados sobre redes públicas para acesso remoto seguro; Firewall Stateful inspeciona o estado das conexões verificando se pacotes pertencem a sessões legítimas.",
          "VPN desativa a criptografia da rede; Firewall Stateful apenas traduz nomes DNS.",
          "VPN substitui o cabo de rede; Firewall apaga e-mails antigos.",
          "Ambos servem apenas para aumentar a velocidade do Wi-Fi."
        ],
        "correta": 0,
        "dica": "Túnel criptografado vs inspeção de estado de sessão.",
        "explicacao": "VPN encapsula tráfego em túnel criptografado; Firewall Stateful monitora o estado das sessões de rede."
      },
      {
        "topico": "Segurança — IDS vs IPS",
        "pergunta": "Qual é a diferença entre os sistemas IDS (Intrusion Detection System) e IPS (Intrusion Prevention System)?",
        "opcoes": [
          "IDS identifica atividades suspeitas e gera alertas; IPS também atua preventivamente, bloqueando atividades maliciosas em tempo real.",
          "IDS bloqueia pacotes ativamente e IPS apenas envia e-mails de boas-vindas.",
          "IDS funciona apenas em impressoras e IPS apenas em bancos SQL.",
          "Não existe diferença entre detecção e prevenção."
        ],
        "correta": 0,
        "dica": "Detection = alerta; Prevention = bloqueio preventivo.",
        "explicacao": "IDS detecta e alerta passivamente; IPS intervém ativamente bloqueando ameaças."
      },
      {
        "topico": "Arquitetura AAA — RADIUS e TACACS+",
        "pergunta": "O que significa a sigla AAA e qual é a diferença entre RADIUS e TACACS+?",
        "opcoes": [
          "Authentication, Authorization and Accounting. RADIUS usa UDP; TACACS+ usa TCP e separa de forma independente autenticação, autorização e contabilização com maior granularidade.",
          "Access, Address and Allocation. Ambos usam apenas ICMP.",
          "RADIUS usa TCP e TACACS+ não faz autenticação.",
          "AAA é um padrão de cabos coaxiais."
        ],
        "correta": 0,
        "dica": "Autenticação, Autorização e Contabilização; UDP vs TCP.",
        "explicacao": "AAA controla acesso e auditoria; RADIUS roda sobre UDP, enquanto TACACS+ roda sobre TCP separando os três processos."
      },
      {
        "topico": "IPv4 vs IPv6",
        "pergunta": "Quais são as diferenças fundamentais entre os protocolos IPv4 e IPv6?",
        "opcoes": [
          "IPv4 usa endereços de 32 bits e depende de NAT; IPv6 usa 128 bits, oferecendo espaço de endereçamento praticamente ilimitado e eliminando a necessidade de NAT.",
          "IPv4 usa 128 bits e IPv6 usa 32 bits.",
          "IPv6 não realiza roteamento de pacotes.",
          "IPv4 é exclusivo para fibra óptica e IPv6 exclusivo para cabo coaxial."
        ],
        "correta": 0,
        "dica": "32 bits vs 128 bits.",
        "explicacao": "IPv4 possui 32 bits (escasso, exige NAT); IPv6 possui 128 bits com espaço gigantesco."
      },
      {
        "topico": "Protocolo DHCP",
        "pergunta": "Como opera o protocolo DHCP e quais informações ele entrega automaticamente aos dispositivos?",
        "opcoes": [
          "Opera pelo processo DORA (Discover, Offer, Request, Acknowledge) fornecendo endereço IP, máscara de sub-rede, gateway padrão e servidores DNS.",
          "Opera traduzindo nomes de sites em endereços MAC.",
          "Opera apenas bloqueando portas TCP.",
          "Fornece exclusivamente senhas de e-mail."
        ],
        "correta": 0,
        "dica": "Lembre-se do ciclo DORA.",
        "explicacao": "O DHCP automatiza a configuração de rede via DORA entregando IP, máscara, gateway e DNS."
      },
      {
        "topico": "Protocolo ARP",
        "pergunta": "Qual é a função do protocolo ARP em redes IPv4 e como ele descobre o destino?",
        "opcoes": [
          "Mapeia um endereço IP lógico em endereço físico MAC na rede local enviando um ARP Request em broadcast, respondido por um ARP Reply unicast.",
          "Traduz nomes de domínio na internet global.",
          "Criptografa sessões SSH.",
          "Calcula rotas entre sistemas autônomos."
        ],
        "correta": 0,
        "dica": "Descobre o MAC a partir do IP na LAN.",
        "explicacao": "ARP resolve IP para MAC na rede local usando broadcast ARP Request e resposta unicast ARP Reply."
      },
      {
        "topico": "Protocolo ICMP",
        "pergunta": "Qual é a finalidade do protocolo ICMP e como os comandos ping e traceroute o utilizam?",
        "opcoes": [
          "Envia mensagens de controle e erro; ping testa conectividade/latência com Echo Request/Reply, e traceroute rastreia saltos manipulando o TTL.",
          "Transfere arquivos grandes entre servidores web.",
          "Gerencia tabelas de bancos de dados relacionais.",
          "Substitui o protocolo HTTP na porta 80."
        ],
        "correta": 0,
        "dica": "Diagnóstico de rede: ping e traceroute.",
        "explicacao": "ICMP transporta mensagens de diagnóstico e erro usadas por ping e traceroute."
      },
      {
        "topico": "Roteamento — RIP, OSPF e BGP",
        "pergunta": "Como se comparam os protocolos de roteamento RIP, OSPF e BGP quanto a métricas e ambiente de uso?",
        "opcoes": [
          "RIP usa contagem de saltos (máx. 15) para redes pequenas; OSPF usa custo/estado de link para redes internas médias/grandes; BGP usa vetor de caminho entre Sistemas Autônomos (internet).",
          "RIP é usado no backbone da internet global e BGP apenas em redes domésticas.",
          "OSPF limita-se a no máximo 2 saltos.",
          "Todos utilizam apenas endereços MAC."
        ],
        "correta": 0,
        "dica": "Saltos (RIP), Estado de Link interno (OSPF) e Internet entre AS (BGP).",
        "explicacao": "RIP e OSPF são IGPs (internos); BGP é o EGP padrão que interliga Sistemas Autônomos na internet."
      },
      {
        "topico": "Acesso Remoto — SSH, Telnet e FTP",
        "pergunta": "Quais são os riscos de usar Telnet e FTP tradicionais e quais são suas alternativas seguras?",
        "opcoes": [
          "Transmitem dados e credenciais em texto claro, ficando vulneráveis a sniffing; as alternativas seguras são SSH (console) e SFTP/FTPS (arquivos).",
          "São lentos porque usam criptografia pesada demais.",
          "Não funcionam em redes TCP/IP.",
          "Alternativas seguras são HTTP e POP3."
        ],
        "correta": 0,
        "dica": "Texto claro expõe senhas na captura de pacotes.",
        "explicacao": "Telnet e FTP não criptografam o tráfego; SSH e SFTP/FTPS garantem confidencialidade."
      },
      {
        "topico": "Segurança — Footprint",
        "pergunta": "O que é a técnica de Footprint em segurança da informação?",
        "opcoes": [
          "Reconhecimento inicial não intrusivo para levantar informações públicas sobre o alvo (sites, DNS, redes sociais) antes de um teste ou ataque.",
          "Destruição física dos discos rígidos do servidor.",
          "Instalação de um firewall de borda.",
          "Criptografia de banco de dados."
        ],
        "correta": 0,
        "dica": "Coleta passiva de pegadas digitais públicas.",
        "explicacao": "Footprinting mapeia informações públicas da organização alvo de forma passiva."
      },
      {
        "topico": "Segurança — Port Scan vs Scan de Vulnerabilidades",
        "pergunta": "Qual é a diferença prática entre Port Scan e Scan de Vulnerabilidades?",
        "opcoes": [
          "Port Scan verifica portas abertas e serviços ativos (ex.: via handshake SYN); Scan de Vulnerabilidades identifica versões de software e cruza com bases de falhas conhecidas.",
          "Port Scan corrige falhas automaticamente; Scan de Vulnerabilidades apenas testa cabos.",
          "Ambos são sinônimos de antivírus.",
          "Port Scan só funciona desligado da rede."
        ],
        "correta": 0,
        "dica": "Descobrir portas abertas vs buscar falhas catalogadas.",
        "explicacao": "Port Scan mapeia portas/serviços; o Scan de Vulnerabilidades audita falhas conhecidas nas versões detectadas."
      },
      {
        "topico": "Ataques Web — Defacement",
        "pergunta": "O que caracteriza um ataque de Defacement em servidores web?",
        "opcoes": [
          "Alteração ou pichação não autorizada da página de um site após comprometimento do servidor, geralmente com motivação ideológica ou política.",
          "Cópia silenciosa de backups para fita magnética.",
          "Aumento legítimo de largura de banda.",
          "Atualização automática de certificado TLS."
        ],
        "correta": 0,
        "dica": "Desfiguração visual da página inicial do site.",
        "explicacao": "Defacement consiste em modificar o conteúdo visual de páginas web invadidas."
      },
      {
        "topico": "Ataques — DoS vs DDoS",
        "pergunta": "Qual é a principal diferença entre ataques DoS e DDoS?",
        "opcoes": [
          "DoS tenta tornar um serviço indisponível a partir de uma ou poucas fontes; DDoS distribui o ataque usando milhares de máquinas comprometidas (botnet).",
          "DoS usa botnets globais e DDoS usa apenas um pendrive.",
          "DoS rouba senhas e DDoS envia spam.",
          "Não há diferença entre ataque único e distribuído."
        ],
        "correta": 0,
        "dica": "O 'D' extra significa Distributed (Distribuído).",
        "explicacao": "No DDoS, múltiplos dispositivos zumbis (botnet) atacam simultaneamente o alvo."
      },
      {
        "topico": "Malware — Trojan, Buffer Overflow, Keylogger e Sniffer",
        "pergunta": "Qual alternativa associa corretamente Trojan, Buffer Overflow, Keylogger e Sniffer?",
        "opcoes": [
          "Trojan disfarça-se de software legítimo; Buffer Overflow invade memória adjacente por excesso de dados; Keylogger registra teclas digitadas; Sniffer intercepta pacotes na rede.",
          "Trojan é hardware de teclado; Sniffer é protocolo de e-mail; Keylogger é cabo de fibra.",
          "Buffer Overflow é um antivírus; Trojan é um firewall.",
          "Todos são protocolos oficiais da camada de transporte."
        ],
        "correta": 0,
        "dica": "Cada termo tem um mecanismo clássico distinto.",
        "explicacao": "Trojan engana o usuário, Buffer Overflow estoura limites de memória, Keylogger captura digitação e Sniffer captura tráfego."
      },
      {
        "topico": "Segurança — Tríade CID e Não Repúdio",
        "pergunta": "O que representam os três pilares da Tríade CID e o princípio do Não Repúdio?",
        "opcoes": [
          "Confidencialidade (sigilo), Integridade (exatidão sem adulteração), Disponibilidade (acesso sob demanda); Não Repúdio impede que o autor negue ter realizado uma ação.",
          "Conexão, Indexação e Roteamento; Não Repúdio apaga logs.",
          "Criptografia, Internet e Domínio; Não Repúdio bloqueia portas.",
          "Compressão, Isolamento e Backup."
        ],
        "correta": 0,
        "dica": "CID = Confidencialidade, Integridade e Disponibilidade.",
        "explicacao": "A Tríade CID fundamenta a segurança da informação e o Não Repúdio garante autoria irretratável."
      },
      {
        "topico": "Anatomia de Ataques e Zero-Day",
        "pergunta": "O que caracteriza um ataque do tipo Zero-Day?",
        "opcoes": [
          "Exploração de uma vulnerabilidade ainda desconhecida pelos desenvolvedores e sem correção (patch) disponível.",
          "Ataque que dura exatamente 24 horas e depois se apaga.",
          "Falha causada apenas por falta de energia elétrica.",
          "Teste autorizado realizado após a publicação de atualização."
        ],
        "correta": 0,
        "dica": "Zero dias de preparo/correção por parte do fabricante.",
        "explicacao": "Ataques Zero-Day exploram falhas inéditas antes que exista correção oficial."
      },
      {
        "topico": "Gerenciamento FCAPS",
        "pergunta": "Quais são as cinco áreas funcionais do modelo padrão ISO FCAPS?",
        "opcoes": [
          "Falhas (Fault), Configuração (Configuration), Contabilização (Accounting), Desempenho (Performance) e Segurança (Security).",
          "Firewall, Cabo, Antivírus, Porta e Servidor.",
          "Física, Conceitual, Aplicação, Sessão e Transporte.",
          "FTP, CIDR, ARP, POP3 e SMTP."
        ],
        "correta": 0,
        "dica": "F-C-A-P-S em inglês.",
        "explicacao": "FCAPS organiza o gerenciamento de redes em Falhas, Configuração, Contabilização, Desempenho e Segurança."
      },
      {
        "topico": "Camada de Transporte — Portas e Sockets",
        "pergunta": "Como funcionam as portas de comunicação e o que compõe um socket?",
        "opcoes": [
          "Portas são identificadores de 16 bits (0 a 65535) que viabilizam a multiplexação entre aplicações; um socket combina protocolo de transporte, endereço IP e número da porta.",
          "Portas são conectores físicos RJ-45; socket é o cabo coaxial.",
          "Portas vão de 1 a 10; socket é apenas o endereço MAC.",
          "Portas servem apenas para desligar o computador."
        ],
        "correta": 0,
        "dica": "16 bits (0-65535) + IP + Protocolo.",
        "explicacao": "Portas identificam processos (0-65535) e o socket une protocolo, IP e porta para comunicação."
      },
      {
        "topico": "Roteamento — RIB vs FIB",
        "pergunta": "Qual é a diferença entre RIB e FIB em um roteador?",
        "opcoes": [
          "RIB (Routing Information Base) armazena todas as rotas conhecidas; FIB (Forwarding Information Base) mantém apenas as melhores rotas e interfaces de saída para encaminhamento rápido.",
          "RIB é usada para IPv4 e FIB exclusivamente para e-mails.",
          "RIB fica na placa de vídeo e FIB no teclado.",
          "Não existe diferença entre tabela de rotas e tabela de encaminhamento."
        ],
        "correta": 0,
        "dica": "Tabela completa de controle vs tabela otimizada de encaminhamento.",
        "explicacao": "A RIB reúne o conhecimento de roteamento; a FIB é otimizada para encaminhar pacotes na prática."
      },
      {
        "topico": "Sinais e Degradação Física",
        "pergunta": "Quais são os dois principais problemas físicos que degradam sinais durante a transmissão?",
        "opcoes": [
          "Atenuação (perda gradual de potência ao longo da distância) e ruído (sinais indesejados que distorcem a informação).",
          "SQL Injection e Cross-Site Scripting.",
          "Deadlock e dependência transitiva.",
          "Overflow de pilha e loop infinito."
        ],
        "correta": 0,
        "dica": "Enfraquecimento do sinal e interferência externa.",
        "explicacao": "Atenuação reduz a amplitude do sinal e o ruído interfere na correta decodificação dos bits."
      },
      {
        "topico": "Enlace — Quadros, MAC e CRC",
        "pergunta": "Como a camada de enlace estrutura os dados e detecta erros na transmissão local?",
        "opcoes": [
          "Organiza bits em quadros (frames) com endereços físicos MAC de fábrica e usa bits redundantes verificados por algoritmos como CRC.",
          "Usa endereços IPv6 de 128 bits e protocolos BGP.",
          "Divide páginas HTML em tags semânticas.",
          "Não realiza qualquer verificação de integridade."
        ],
        "correta": 0,
        "dica": "Frame, MAC e Cyclic Redundancy Check.",
        "explicacao": "Quadros carregam cabeçalho MAC e trailer de detecção de erros (como CRC)."
      },
      {
        "topico": "Redes de Datagramas e Encapsulamento",
        "pergunta": "Quais são as PDUs das camadas de Transporte, Rede e Enlace durante o encapsulamento?",
        "opcoes": [
          "Segmento (Transporte), Datagrama/Pacote (Rede) e Quadro/Frame (Enlace).",
          "Bit (Transporte), Byte (Rede) e Pixel (Enlace).",
          "Tabela (Transporte), Coluna (Rede) e Linha (Enlace).",
          "Cookie (Transporte), Token (Rede) e Sessão (Enlace)."
        ],
        "correta": 0,
        "dica": "Descendo as camadas: Segmento -> Datagrama -> Quadro.",
        "explicacao": "Cada camada adiciona seu cabeçalho formando Segmento (L4), Datagrama (L3) e Quadro (L2)."
      },
      {
        "topico": "NAT e Atraso de Fila",
        "pergunta": "Qual é a finalidade do NAT em redes IPv4 e por que o atraso de fila (queuing delay) é o mais variável?",
        "opcoes": [
          "NAT mapeia IPs privados em públicos contornando o esgotamento do IPv4; o atraso de fila varia conforme o volume aleatório e instantâneo de tráfego nos roteadores.",
          "NAT aumenta o tamanho do IPv4 para 256 bits; atraso de fila é sempre constante em zero.",
          "NAT substitui a fibra óptica; atraso de fila depende apenas da cor do cabo.",
          "NAT apaga endereços MAC."
        ],
        "correta": 0,
        "dica": "Tradução de endereços na borda e variação de tráfego no buffer.",
        "explicacao": "NAT traduz endereços privados/públicos e o queuing delay oscila conforme rajadas de tráfego."
      },
      {
        "topico": "Comutação de Circuitos vs Pacotes",
        "pergunta": "Qual é a diferença fundamental entre comutação de circuitos e comutação de pacotes?",
        "opcoes": [
          "Comutação de circuitos reserva um canal dedicado durante toda a sessão (gerando ociosidade); comutação de pacotes usa multiplexação estatística sob demanda.",
          "Comutação de pacotes exige fio exclusivo ponto a ponto para cada usuário.",
          "Comutação de circuitos é usada apenas em redes Wi-Fi modernas.",
          "Não há diferença entre ambas."
        ],
        "correta": 0,
        "dica": "Reserva dedicada vs compartilhamento dinâmico em pacotes.",
        "explicacao": "Circuitos alocam recursos fixos; pacotes compartilham links dinamicamente com alta eficiência."
      },
      {
        "topico": "DNS — Resolução Hierárquica",
        "pergunta": "Qual é a finalidade do DNS e como ele localiza o servidor correspondente a um site?",
        "opcoes": [
          "Traduz nomes de domínio em endereços IP consultando servidores recursivos, raiz (root), TLD e autoritativos até obter o IP final.",
          "Criptografa pacotes HTTP na camada física.",
          "Distribui endereços IP privados via broadcast DORA.",
          "Detecta intrusões e bloqueia malwares."
        ],
        "correta": 0,
        "dica": "Recursivo -> Root -> TLD -> Autoritativo.",
        "explicacao": "A hierarquia DNS resolve nomes legíveis em endereços IP roteáveis."
      },
      {
        "topico": "E-mail — IMAP vs POP3",
        "pergunta": "Qual a função de SMTP, POP3 e IMAP, e quando o IMAP é vantajoso sobre o POP3?",
        "opcoes": [
          "SMTP envia e-mails; POP3 baixa mensagens (geralmente apagando do servidor); IMAP mantém sincronizado no servidor, sendo ideal para acesso em múltiplos dispositivos.",
          "POP3 envia e-mails e SMTP sincroniza pastas.",
          "IMAP funciona apenas sem internet.",
          "Não há diferença entre POP3 e IMAP."
        ],
        "correta": 0,
        "dica": "Acesso multiplataforma sincronizado = IMAP.",
        "explicacao": "IMAP mantém mensagens e pastas sincronizadas no servidor entre celular, PC e webmail."
      },
      {
        "topico": "TCP — Varredura de Portas (Port Scanning)",
        "pergunta": "Qual o objetivo da Varredura de Portas (Port Scanning) e como ela opera no protocolo TCP?",
        "opcoes": [
          "Descobre portas abertas e serviços ativos usando o three-way handshake (pacote SYN), analisando respostas SYN-ACK (aberta) ou RST (fechada) com ferramentas como nmap.",
          "Apaga arquivos do servidor web automaticamente.",
          "Converte sinais analógicos em digitais.",
          "Configura rotas estáticas no roteador."
        ],
        "correta": 0,
        "dica": "Handshake TCP (SYN / SYN-ACK / RST) com Nmap.",
        "explicacao": "Port scanning sonda portas TCP/UDP para mapear serviços expostos."
      },
      {
        "topico": "Malware — Cavalo de Troia (Trojan)",
        "pergunta": "Como funciona o mecanismo de infecção de um Cavalo de Troia (Trojan)?",
        "opcoes": [
          "Disfarça-se de programa legítimo ou útil para induzir o usuário a executá-lo voluntariamente, instalando backdoors ou códigos maliciosos ocultos.",
          "Propaga-se sozinho pela rede sem nenhuma ação do usuário.",
          "Atua exclusivamente queimando a placa de rede.",
          "É um protocolo de roteamento dinâmico."
        ],
        "correta": 0,
        "dica": "Engana o usuário parecendo um arquivo/software confiável.",
        "explicacao": "O Trojan depende de engenharia social para ser executado pelo usuário."
      },
      {
        "topico": "Malware — Buffer Overflow",
        "pergunta": "O que é uma vulnerabilidade de Buffer Overflow e como ela é aproveitada em ataques?",
        "opcoes": [
          "Ocorre quando um programa recebe mais dados do que o espaço reservado em memória (buffer) suporta, sobrescrevendo áreas adjacentes para executar código arbitrário.",
          "É a falta de espaço no HD para salvar fotos.",
          "É um excesso de cabos conectados no switch.",
          "Ocorre quando o servidor DNS demora para responder."
        ],
        "correta": 0,
        "dica": "Estouro de limite de memória adjacente.",
        "explicacao": "Buffer overflow corrompe a memória vizinha podendo desviar o fluxo de execução."
      },
      {
        "topico": "Segurança — Keylogger e Sniffer",
        "pergunta": "Qual a diferença entre Keylogger e Sniffer, e quando o uso de um Sniffer torna-se criminoso?",
        "opcoes": [
          "Keylogger captura teclas digitadas (lógico ou físico); Sniffer intercepta pacotes na rede (modo promíscuo) e torna-se crime quando usado sem autorização em redes alheias.",
          "Keylogger captura pacotes Wi-Fi e Sniffer grava a tela.",
          "Ambos são antivírus nativos do Windows.",
          "Sniffer nunca pode ser usado por administradores de rede."
        ],
        "correta": 0,
        "dica": "Teclado vs captura de pacotes na rede.",
        "explicacao": "Sniffers são ferramentas de diagnóstico legítimas quando autorizadas, mas ilegais na espionagem clandestina."
      },
      {
        "topico": "Segurança — Ativos Humanos",
        "pergunta": "O que é um ativo em segurança da informação e por que os colaboradores entram nessa classificação?",
        "opcoes": [
          "Ativo é tudo que possui valor para a organização; colaboradores são ativos humanos pois detêm conhecimentos, credenciais e acessos críticos (sendo alvo de engenharia social).",
          "Ativo é apenas dinheiro em caixa.",
          "Colaboradores não fazem parte da segurança da informação.",
          "Ativos são exclusivamente cabos de fibra óptica."
        ],
        "correta": 0,
        "dica": "Pessoas também têm valor e risco na segurança.",
        "explicacao": "Informações, sistemas, infraestrutura e pessoas (ativos humanos) compõem os ativos organizacionais."
      },
      {
        "topico": "Ataques — Ativos vs Passivos e Diretos vs Indiretos",
        "pergunta": "Como se diferenciam ataques ativos de passivos, e ataques diretos de indiretos?",
        "opcoes": [
          "Ativos alteram sistemas/dados; Passivos apenas monitoram/escutam silenciosamente. Diretos partem do atacante ao alvo; Indiretos usam máquinas intermediárias/zumbis.",
          "Ativos são sempre legais; Passivos são feitos sem computador.",
          "Diretos usam botnets; Indiretos usam cabo USB.",
          "Não há distinção entre essas classificações."
        ],
        "correta": 0,
        "dica": "Alteração vs escuta; origem direta vs intermediários.",
        "explicacao": "Ataques passivos buscam sigilo na escuta, enquanto ativos modificam recursos."
      },
      {
        "topico": "Anatomia de um Ataque Cibernético",
        "pergunta": "Quais são as sete etapas da anatomia de um ataque cibernético estruturado (Cyber Kill Chain)?",
        "opcoes": [
          "Reconhecimento, Armamento, Entrega, Exploração, Instalação, Comando e Controle (C2) e Ações no Objetivo.",
          "HTML, CSS, JS, PHP, SQL, XML e JSON.",
          "Física, Enlace, Rede, Transporte, Sessão, Apresentação e Aplicação.",
          "Discover, Offer, Request, Acknowledge, SYN, ACK e FIN."
        ],
        "correta": 0,
        "dica": "Do reconhecimento inicial até as ações no objetivo.",
        "explicacao": "As 7 fases descrevem o ciclo completo de uma intrusão estruturada."
      },
      {
        "topico": "Instalação e Comando e Controle (C2)",
        "pergunta": "Qual a finalidade das fases de Instalação e Comando e Controle (C2) em uma invasão?",
        "opcoes": [
          "Instalação cria backdoors para manter persistência no alvo; Comando e Controle estabelece um canal bidirecional para o invasor controlar a máquina remotamente.",
          "Instalação atualiza o sistema operacional e C2 desliga o firewall.",
          "Servem apenas para formatar o disco imediatamente.",
          "São etapas da configuração de um servidor DHCP."
        ],
        "correta": 0,
        "dica": "Persistência + controle remoto.",
        "explicacao": "A instalação garante acesso contínuo e o C2 permite enviar comandos ao host comprometido."
      },
      {
        "topico": "Antivírus Modernos (Endpoints)",
        "pergunta": "Como os antivírus modernos atuam na proteção dos endpoints?",
        "opcoes": [
          "Detectam e bloqueiam malwares combinando assinaturas conhecidas, análise heurística e monitoramento comportamental em tempo de execução.",
          "Verificam apenas a data de criação dos arquivos .txt.",
          "Substituem completamente a necessidade de firewall e backups.",
          "Atuam apenas quando o computador está desligado."
        ],
        "correta": 0,
        "dica": "Assinaturas + heurística + comportamento.",
        "explicacao": "Soluções modernas de endpoint vão além de assinaturas estáticas usando análise comportamental."
      },
      {
        "topico": "FCAPS — Falhas e Configuração",
        "pergunta": "No modelo FCAPS, quais são os objetivos do Gerenciamento de Falhas e do Gerenciamento de Configuração?",
        "opcoes": [
          "Falhas detecta, isola e corrige problemas minimizando downtime; Configuração rastreia parâmetros de hardware/software, inventário e backups.",
          "Falhas apaga backups; Configuração bloqueia usuários.",
          "Ambos servem apenas para medir faturamento de provedores.",
          "São protocolos de camada física."
        ],
        "correta": 0,
        "dica": "Disponibilidade (Falhas) + Controle de inventário/parâmetros (Configuração).",
        "explicacao": "Fault Management reduz indisponibilidade e Configuration Management controla mudanças e backups."
      },
      {
        "topico": "FCAPS — Desempenho, Contabilização e Segurança",
        "pergunta": "Como atuam Desempenho, Contabilização e Segurança no modelo FCAPS?",
        "opcoes": [
          "Desempenho monitora banda, latência, jitter e perda de pacotes; Contabilização mede uso de recursos/cotas; Segurança controla acessos e políticas transversalmente.",
          "Desempenho troca cabos; Contabilização escreve código HTML; Segurança formata discos.",
          "Contabilização calcula apenas impostos estaduais.",
          "Segurança não se relaciona com as demais áreas."
        ],
        "correta": 0,
        "dica": "Métricas de rede, medição de consumo e proteção transversal.",
        "explicacao": "Essas três áreas completam as cinco funções ISO de gerenciamento de redes."
      },
      {
        "topico": "Camada de Transporte — Serviços",
        "pergunta": "Qual a posição da Camada de Transporte no modelo OSI e quais serviços principais ela fornece?",
        "opcoes": [
          "Camada 4; fornece comunicação processo-a-processo/host-a-host, multiplexação por portas, controle de fluxo, entrega ordenada e confiabilidade (no TCP).",
          "Camada 1; converte bits em luz.",
          "Camada 7; renderiza páginas web.",
          "Camada 3; calcula tabelas BGP."
        ],
        "correta": 0,
        "dica": "Camada 4 do modelo OSI.",
        "explicacao": "A Camada 4 conecta aplicações entre hosts finais."
      },
      {
        "topico": "Protocolos de Transporte — TCP, UDP e SCTP",
        "pergunta": "Como se diferenciam os protocolos de transporte TCP, UDP e SCTP?",
        "opcoes": [
          "TCP é orientado à conexão e confiável; UDP é rápido e sem conexão; SCTP combina controle de fluxo/congestionamento com suporte a múltiplos fluxos e caminhos redundantes (multihoming).",
          "SCTP é um protocolo de e-mail.",
          "UDP é mais lento que TCP por fazer três handshakes.",
          "TCP não utiliza números de porta."
        ],
        "correta": 0,
        "dica": "SCTP une confiabilidade com multi-streaming/multihoming.",
        "explicacao": "TCP, UDP e SCTP atendem a diferentes requisitos de confiabilidade e latência na Camada 4."
      },
      {
        "topico": "Roteamento — Aprendizado de Rotas e Pilha Dupla",
        "pergunta": "Quais são as três maneiras de um roteador aprender rotas e como o IPv6 afeta suas tabelas?",
        "opcoes": [
          "Rotas estáticas (manuais), redes diretamente conectadas e protocolos dinâmicos; com IPv6 em pilha dupla, o roteador mantém tabelas RIB e FIB separadas para IPv4 e IPv6.",
          "Roteadores aprendem rotas apenas via DNS.",
          "IPv6 apaga todas as rotas IPv4 automaticamente.",
          "Roteadores não usam tabelas para encaminhar pacotes."
        ],
        "correta": 0,
        "dica": "Estática, conectada e dinâmica + Dual Stack.",
        "explicacao": "Em pilha dupla (Dual Stack), o roteador opera tabelas independentes para IPv4 e IPv6."
      },
      {
        "topico": "Roteamento — IGP vs EGP",
        "pergunta": "Qual é a diferença entre protocolos de roteamento interno (IGP) e externo (EGP)?",
        "opcoes": [
          "IGP (como OSPF e RIP) opera dentro de um mesmo Sistema Autônomo (AS); EGP (como BGP) opera externamente interligando diferentes Sistemas Autônomos na internet.",
          "IGP funciona apenas sem fio; EGP apenas em cabos coaxiais.",
          "BGP é usado apenas dentro de casas.",
          "Não existe diferença entre roteamento interno e externo."
        ],
        "correta": 0,
        "dica": "Intra-AS (IGP) vs Inter-AS (EGP/BGP).",
        "explicacao": "Sistemas Autônomos usam IGPs internamente e BGP na fronteira entre ASs."
      },
      {
        "topico": "Camada Física — Sinais e Largura de Banda",
        "pergunta": "Qual a diferença entre sinais analógicos e digitais, e por que maior largura de banda nem sempre garante comunicação mais rápida?",
        "opcoes": [
          "Analógicos são ondas contínuas e digitais são níveis discretos (0 e 1); a velocidade real também depende de latência, congestionamento e capacidade do servidor.",
          "Digitais são ondas contínuas; largura de banda é a espessura física do cabo.",
          "Maior banda sempre zera a latência da luz.",
          "Sinais digitais não sofrem qualquer atenuação."
        ],
        "correta": 0,
        "dica": "Banda = capacidade do cano; Latência = tempo de viagem.",
        "explicacao": "Banda alta não elimina atrasos de propagação, fila ou lentidão do servidor."
      },
      {
        "topico": "Interferências e Proteção nos Meios Físicos",
        "pergunta": "Por que os fios do par trançado são enrolados em espiral e como cabo coaxial e fibra óptica protegem contra interferências?",
        "opcoes": [
          "O trançamento cancela campos eletromagnéticos; o coaxial usa malha metálica de blindagem; a fibra óptica usa reflexão interna total da luz, sendo 100% imune a ruído eletromagnético.",
          "O par trançado é enrolado apenas para caber na caixa.",
          "A fibra óptica usa blindagem de cobre contra raios.",
          "Cabo coaxial não possui isolamento."
        ],
        "correta": 0,
        "dica": "Cancelamento magnético, blindagem metálica e imunidade óptica.",
        "explicacao": "Cada meio físico emprega uma técnica própria para preservar a integridade do sinal."
      },
      {
        "topico": "Camada Física — Especificações e Camadas Inferiores",
        "pergunta": "Qual a distinção operacional entre camadas superiores e inferiores no modelo OSI, e quais especificações a camada física define?",
        "opcoes": [
          "Superiores operam via software abstrato e inferiores (Física/Enlace) lidam com hardware e sinais; a Física define voltagens, conectores, temporização de bits e taxas de transmissão.",
          "Camadas superiores lidam com cabos e inferiores com HTML.",
          "A camada física define chaves estrangeiras SQL.",
          "Não há diferença operacional entre camadas."
        ],
        "correta": 0,
        "dica": "Software abstrato vs hardware e sinais físicos.",
        "explicacao": "As camadas 1 e 2 interagem diretamente com o meio físico e interfaces de rede."
      },
      {
        "topico": "Redes de Datagramas",
        "pergunta": "Como operam as redes de datagramas e por que pacotes de um mesmo fluxo podem chegar fora de ordem?",
        "opcoes": [
          "Cada pacote carrega o endereço de destino completo e é roteado independentemente, podendo seguir caminhos com atrasos diferentes (exigindo reordenação pelo TCP).",
          "Todos os pacotes seguem obrigatoriamente por um trilho fixo sem desvio.",
          "Pacotes nunca chegam fora de ordem na internet.",
          "O roteador apaga o endereço de destino após o primeiro salto."
        ],
        "correta": 0,
        "dica": "Roteamento independente por pacote.",
        "explicacao": "Rotas dinâmicas e filas variáveis fazem datagramas chegarem em tempos distintos."
      },
      {
        "topico": "Princípio das Redes em Camadas",
        "pergunta": "Qual o princípio de engenharia por trás da arquitetura em camadas e qual sua principal vantagem?",
        "opcoes": [
          "Princípio 'divisão e conquista': alterar a implementação ou protocolo de uma camada não afeta as demais, desde que as interfaces entre elas sejam mantidas.",
          "Impedir que computadores de fabricantes diferentes se comuniquem.",
          "Concentrar todas as funções de rede em um único programa monolítico.",
          "Eliminar a necessidade de protocolos."
        ],
        "correta": 0,
        "dica": "Modularidade e independência entre camadas.",
        "explicacao": "A modularização facilita evolução tecnológica e interoperabilidade."
      },
      {
        "topico": "Classificação de Redes e Segmentação",
        "pergunta": "Quais são os três pilares de classificação formal de redes e qual camada realiza a segmentação para respeitar a MTU?",
        "opcoes": [
          "Meio de Transmissão, Arquitetura de Rede (Cliente-Servidor/P2P) e Arquitetura de Sistemas (OSI/TCP-IP); a segmentação é feita pela Camada de Transporte.",
          "Cabo, Roteador e Monitor; segmentação feita pela Camada Física.",
          "HTML, CSS e JS; segmentação feita pelo DNS.",
          "IPv4, IPv6 e MAC; segmentação feita pelo ARP."
        ],
        "correta": 0,
        "dica": "Transporte quebra blocos grandes em segmentos menores.",
        "explicacao": "A Camada de Transporte segmenta os dados da aplicação antes do envio à rede."
      },
      {
        "topico": "PDU da Camada de Transporte",
        "pergunta": "Qual é a PDU da Camada de Transporte e quais identificadores ela usa para comunicação processo a processo?",
        "opcoes": [
          "A PDU é o Segmento, utilizando portas lógicas (como 80 e 443 para Web) para multiplexar e entregar dados aos processos corretos.",
          "A PDU é o Quadro, utilizando endereços MAC.",
          "A PDU é o Bit, utilizando voltagens elétricas.",
          "A PDU é o Pacote, utilizando endereços IP."
        ],
        "correta": 0,
        "dica": "Segmento + Portas Lógicas.",
        "explicacao": "Segmentos carregam portas de origem e destino para direcionar dados às aplicações."
      },
      {
        "topico": "Protocolos de Rede",
        "pergunta": "Protocolo TCP e UDP: Explique as principais diferenças entre os protocolos TCP e UDP quanto à confiabilidade, conexão, controle de erros e velocidade.",
        "opcoes": [
          "O TCP é orientado à conexão, confiável, ordenado e com controle rigoroso de erros. O UDP é não orientado, sem garantia de entrega ou ordenação, priorizando alta velocidade.",
          "Portas são identificadores de 16 bits (0 a 65535) que viabilizam a multiplexação entre aplicações; um socket combina protocolo de transporte, endereço IP e número da porta.",
          "Port Scan verifica portas abertas e serviços ativos (ex.: via handshake SYN); Scan de Vulnerabilidades identifica versões de software e cruza com bases de falhas conhecidas.",
          "Keylogger captura teclas digitadas (lógico ou físico); Sniffer intercepta pacotes na rede (modo promíscuo) e torna-se crime quando usado sem autorização em redes alheias."
        ],
        "correta": 0,
        "dica": "Revise o tópico de Protocolos de Rede.",
        "explicacao": "O TCP é orientado à conexão, confiável, ordenado e com controle rigoroso de erros. O UDP é não orientado, sem garantia de entrega ou ordenação, priorizando alta velocidade."
      },
      {
        "topico": "Protocolos de Rede",
        "pergunta": "Protocolo IP: Descreva a função do IP e explique as diferenças fundamentais entre o IPv4 e o IPv6.",
        "opcoes": [
          "O IP realiza endereçamento e roteamento. O IPv4 usa 32 bits e depende de NAT; o IPv6 usa 128 bits, oferecendo espaço quase ilimitado e eliminando o NAT.",
          "Traduz nomes de domínio em endereços IP. Consulta servidores recursivos, raiz, TLD e autoritativos até obter o IP final para estabelecer conexão direta.",
          "Meio de Transmissão, Arquitetura de Rede (Cliente-Servidor/P2P) e Arquitetura de Sistemas (OSI/TCP-IP); a segmentação é feita pela Camada de Transporte.",
          "Princípio \"divisão e conquista\". A vantagem é que alterar um protocolo em uma camada não afeta as demais, desde que as interfaces permaneçam inalteradas."
        ],
        "correta": 0,
        "dica": "Revise o tópico de Protocolos de Rede.",
        "explicacao": "O IP realiza endereçamento e roteamento. O IPv4 usa 32 bits e depende de NAT; o IPv6 usa 128 bits, oferecendo espaço quase ilimitado e eliminando o NAT."
      },
      {
        "topico": "Protocolos de Rede",
        "pergunta": "Protocolo HTTP e HTTPS: Explique como funcionam e qual é a importância da criptografia no HTTPS.",
        "opcoes": [
          "Fazem a troca de dados entre navegador e servidor web. O HTTPS usa criptografia (TLS/SSL) para proteger dados contra interceptações, garantindo confidencialidade e integridade.",
          "Authentication, Authorization and Accounting. RADIUS usa UDP; TACACS+ usa TCP e separa de forma independente autenticação, autorização e contabilização com maior granularidade.",
          "Trojan disfarça-se de software legítimo; Buffer Overflow invade memória adjacente por excesso de dados; Keylogger registra teclas digitadas; Sniffer intercepta pacotes na rede.",
          "No FEC, o receptor corrige falhas de forma autônoma utilizando códigos redundantes embutidos nos dados, dispensando a necessidade de um canal de retorno para solicitar reenvios."
        ],
        "correta": 0,
        "dica": "Revise o tópico de Protocolos de Rede.",
        "explicacao": "Fazem a troca de dados entre navegador e servidor web. O HTTPS usa criptografia (TLS/SSL) para proteger dados contra interceptações, garantindo confidencialidade e integridade."
      },
      {
        "topico": "Protocolos de Rede",
        "pergunta": "Protocolo DHCP: Descreva o funcionamento do DHCP e quais informações ele fornece automaticamente aos dispositivos.",
        "opcoes": [
          "Opera pelo processo DORA para configurar redes automaticamente, fornecendo IP, máscara de sub- rede, gateway e servidores DNS.",
          "Interface de programação para serviços de rede, composta pelo protocolo de transporte, endereço IP do host e número da porta.",
          "Banda é a capacidade máxima teórica. A velocidade real também depende de latência, congestionamento e desempenho do servidor.",
          "Meio de Transmissão (guiadas/não guiadas), Arquitetura de Rede (Cliente-Servidor/P2P) e Arquitetura de Sistemas (OSI/TCP-IP)."
        ],
        "correta": 0,
        "dica": "Revise o tópico de Protocolos de Rede.",
        "explicacao": "Opera pelo processo DORA para configurar redes automaticamente, fornecendo IP, máscara de sub- rede, gateway e servidores DNS."
      },
      {
        "topico": "Protocolos de Rede",
        "pergunta": "Protocolo ARP: Explique a função do ARP em redes IPv4 e como ele descobre o endereço MAC de destino.",
        "opcoes": [
          "Mapeia IP em endereço MAC na rede local enviando uma mensagem broadcast ARP Request, respondida com um ARP Reply pelo dono do IP.",
          "Ameaça é a probabilidade ou causa potencial de um incidente (intenção); ataque é a ação efetiva acontecendo e causando dano real.",
          "IDS monitora passivamente o tráfego e gera alertas de intrusão; IPS atua ativamente bloqueando o tráfego malicioso em tempo real.",
          "Traduz nomes de domínio em endereços IP consultando servidores recursivos, raiz (root), TLD e autoritativos até obter o IP final."
        ],
        "correta": 0,
        "dica": "Revise o tópico de Protocolos de Rede.",
        "explicacao": "Mapeia IP em endereço MAC na rede local enviando uma mensagem broadcast ARP Request, respondida com um ARP Reply pelo dono do IP."
      },
      {
        "topico": "Protocolos de Rede",
        "pergunta": "Protocolos de roteamento RIP, OSPF e BGP: Compare esses protocolos quanto ao funcionamento, métricas e ambientes de uso.",
        "opcoes": [
          "O RIP usa número de saltos (máx 15) para redes pequenas; OSPF usa custo e estado de link para redes internas médias/grandes; BGP usa vetor de caminho entre Sistemas Autônomos (internet global).",
          "TCP estabelece conexão e oferece entrega confiável, ordenada e com controle de fluxo; UDP não estabelece conexão nem garante entrega, tendo menor sobrecarga (ideal para streaming e VoIP).",
          "Física transmite bits convertidos em sinais elétricos, ópticos ou eletromagnéticos; Enlace organiza dados em quadros (frames), usa endereços MAC, detecta erros e controla acesso ao meio.",
          "VPN cria túneis criptografados sobre redes públicas para acesso remoto seguro; Firewall Stateful inspeciona o estado das conexões verificando se pacotes pertencem a sessões legítimas."
        ],
        "correta": 0,
        "dica": "Revise o tópico de Protocolos de Rede.",
        "explicacao": "O RIP usa número de saltos (máx 15) para redes pequenas; OSPF usa custo e estado de link para redes internas médias/grandes; BGP usa vetor de caminho entre Sistemas Autônomos (internet global)."
      },
      {
        "topico": "Protocolos de Rede",
        "pergunta": "Protocolos SMTP, POP3 e IMAP: Qual a função de cada um e quando o IMAP é vantajoso sobre o POP3?",
        "opcoes": [
          "SMTP envia e-mails; POP3 baixa e apaga do servidor; IMAP sincroniza e mantém no servidor. IMAP é ideal para acesso multiplataforma.",
          "Monitorar e filtrar o tráfego de entrada e saída com base em regras, bloqueando conexões suspeitas entre redes internas e externas.",
          "IGP (OSPF) opera dentro de um mesmo Sistema Autônomo; BGP opera externamente entre diferentes Sistemas Autônomos (internet global).",
          "Comunicação host-a-host, controle de fluxo, conexão orientada, entrega ordenada, confiabilidade com retransmissão e multiplexação."
        ],
        "correta": 0,
        "dica": "Revise o tópico de Protocolos de Rede.",
        "explicacao": "SMTP envia e-mails; POP3 baixa e apaga do servidor; IMAP sincroniza e mantém no servidor. IMAP é ideal para acesso multiplataforma."
      },
      {
        "topico": "Protocolos de Rede",
        "pergunta": "Protocolos de segurança e acesso remoto (SSH, Telnet, FTP): Quais os riscos de protocolos sem criptografia e quais as alternativas?",
        "opcoes": [
          "Estão vulneráveis a sniffing e roubo de credenciais. Alternativas seguras são SSH para console e SFTP/FTPS para arquivos.",
          "MAC é identificador físico de fábrica (Camada 2) para rede local; IP é endereço lógico (Camada 3) para roteamento global.",
          "Adiciona cabeçalhos à carga útil nas camadas inferiores. PDUs: Segmento (Transporte), Datagrama (Rede) e Quadro (Enlace).",
          "Unidade de dados da camada de enlace contendo cabeçalho (endereços físicos), payload e trailer com verificação de erros."
        ],
        "correta": 0,
        "dica": "Revise o tópico de Protocolos de Rede.",
        "explicacao": "Estão vulneráveis a sniffing e roubo de credenciais. Alternativas seguras são SSH para console e SFTP/FTPS para arquivos."
      },
      {
        "topico": "Segurança da Informação",
        "pergunta": "Diferencie ataques DoS e DDoS.",
        "opcoes": [
          "DoS tenta derrubar um serviço a partir de poucas fontes; DDoS distribui a carga maliciosa usando milhões de máquinas infectadas em uma botnet, dificultando o bloqueio.",
          "Worms propagam-se de forma autônoma pela rede sem precisar de intervenção humana ou arquivos hospedeiros; vírus dependem de anexos ou arquivos executados pelo usuário.",
          "Confidencialidade (sigilo), Integridade (exatidão sem adulteração), Disponibilidade (acesso sob demanda); Não Repúdio impede que o autor negue ter realizado uma ação.",
          "Descobre portas abertas e serviços ativos usando o three-way handshake (pacote SYN), analisando respostas SYN-ACK (aberta) ou RST (fechada) com ferramentas como nmap."
        ],
        "correta": 0,
        "dica": "Revise o tópico de Segurança da Informação.",
        "explicacao": "DoS tenta derrubar um serviço a partir de poucas fontes; DDoS distribui a carga maliciosa usando milhões de máquinas infectadas em uma botnet, dificultando o bloqueio."
      },
      {
        "topico": "Segurança da Informação",
        "pergunta": "O que são Worms e como se diferenciam dos vírus tradicionais?",
        "opcoes": [
          "Worms propagam-se de forma autônoma pela rede sem precisar de intervenção humana ou arquivos hospedeiros; vírus dependem de anexos ou arquivos executados pelo usuário.",
          "DoS tenta derrubar um serviço a partir de poucas fontes; DDoS distribui a carga maliciosa usando milhões de máquinas infectadas em uma botnet, dificultando o bloqueio.",
          "Confidencialidade (sigilo), Integridade (exatidão sem adulteração), Disponibilidade (acesso sob demanda); Não Repúdio impede que o autor negue ter realizado uma ação.",
          "Descobre portas abertas e serviços ativos usando o three-way handshake (pacote SYN), analisando respostas SYN-ACK (aberta) ou RST (fechada) com ferramentas como nmap."
        ],
        "correta": 0,
        "dica": "Revise o tópico de Segurança da Informação.",
        "explicacao": "Worms propagam-se de forma autônoma pela rede sem precisar de intervenção humana ou arquivos hospedeiros; vírus dependem de anexos ou arquivos executados pelo usuário."
      },
      {
        "topico": "Segurança da Informação",
        "pergunta": "Quais as formas de atuação e o objetivo central de um Keylogger?",
        "opcoes": [
          "Monitorar e registrar o que é digitado para capturar senhas. Pode ser lógico (software malicioso) ou físico (hardware intermediário no teclado).",
          "Analógicos são contínuos; digitais são discretos (0 e 1). Amplitude é potência; frequência é taxa de ciclos por segundo; fase é posição da onda.",
          "Transmitem dados e credenciais em texto claro, ficando vulneráveis a sniffing; as alternativas seguras são SSH (console) e SFTP/FTPS (arquivos).",
          "Alteração ou pichação não autorizada da página inicial de um site após comprometimento do servidor, geralmente com viés ideológico ou político."
        ],
        "correta": 0,
        "dica": "Revise o tópico de Segurança da Informação.",
        "explicacao": "Monitorar e registrar o que é digitado para capturar senhas. Pode ser lógico (software malicioso) ou físico (hardware intermediário no teclado)."
      },
      {
        "topico": "Segurança da Informação",
        "pergunta": "Qual a função de um Sniffer e quando seu uso se torna criminoso?",
        "opcoes": [
          "Intercepta e analisa pacotes de dados na rede (modo promíscuo). Torna-se criminoso quando usado sem autorização em redes alheias (interceptação clandestina).",
          "Descobre portas abertas e serviços usando o three-way handshake (pacote SYN), analisando respostas ACK (aberta) ou RESET (fechada) com ferramentas como nmap.",
          "Reconhecimento inicial não intrusivo para levantar informações públicas sobre o alvo (sites, DNS, redes sociais) usando métodos lícitos e engenharia social.",
          "Comutação de circuitos reserva um canal dedicado durante toda a sessão (gerando ociosidade); comutação de pacotes usa multiplexação estatística sob demanda."
        ],
        "correta": 0,
        "dica": "Revise o tópico de Segurança da Informação.",
        "explicacao": "Intercepta e analisa pacotes de dados na rede (modo promíscuo). Torna-se criminoso quando usado sem autorização em redes alheias (interceptação clandestina)."
      },
      {
        "topico": "Segurança da Informação",
        "pergunta": "Qual a diferença conceitual entre ameaça e ataque?",
        "opcoes": [
          "Ameaça é a probabilidade ou causa potencial de um incidente (intenção); ataque é a ação efetiva acontecendo e causando dano real.",
          "Mapeia IP em endereço MAC na rede local enviando uma mensagem broadcast ARP Request, respondida com um ARP Reply pelo dono do IP.",
          "IDS monitora passivamente o tráfego e gera alertas de intrusão; IPS atua ativamente bloqueando o tráfego malicioso em tempo real.",
          "Traduz nomes de domínio em endereços IP consultando servidores recursivos, raiz (root), TLD e autoritativos até obter o IP final."
        ],
        "correta": 0,
        "dica": "Revise o tópico de Segurança da Informação.",
        "explicacao": "Ameaça é a probabilidade ou causa potencial de um incidente (intenção); ataque é a ação efetiva acontecendo e causando dano real."
      },
      {
        "topico": "Segurança da Informação",
        "pergunta": "Defina os três pilares da Tríade CID.",
        "opcoes": [
          "Confidencialidade (sigilo contra não autorizados), Integridade (exatidão sem adulterações) e Disponibilidade (acessibilidade sob demanda).",
          "Envia mensagens de controle e erro. O ping testa conectividade e latência com Echo Request/Reply; o traceroute rastreia saltos usando TTL.",
          "Ativo é qualquer coisa com valor para a organização. Colaboradores são ativos humanos pois detêm conhecimentos, senhas e acessos críticos.",
          "Disfarça-se de programa legítimo para induzir o usuário a executá-lo voluntariamente, instalando backdoors ou códigos maliciosos ocultos."
        ],
        "correta": 0,
        "dica": "Revise o tópico de Segurança da Informação.",
        "explicacao": "Confidencialidade (sigilo contra não autorizados), Integridade (exatidão sem adulterações) e Disponibilidade (acessibilidade sob demanda)."
      },
      {
        "topico": "Segurança da Informação",
        "pergunta": "O que significa o princípio do Não Repúdio e qual sua importância jurídica?",
        "opcoes": [
          "Impede que um usuário negue ter executado uma ação, garantindo autoria irretratável para auditorias e fins legais.",
          "Avalia a eficiência da rede monitorando largura de banda, perda de pacotes, latência, jitter e uso de CPU/memória.",
          "8 endereços no bloco, sendo 6 utilizáveis para dispositivos (1 identifica a rede e 1 é reservado para broadcast).",
          "Detectar e remover malwares usando assinaturas conhecidas, análise heurística e comportamental em tempo de execução."
        ],
        "correta": 0,
        "dica": "Revise o tópico de Segurança da Informação.",
        "explicacao": "Impede que um usuário negue ter executado uma ação, garantindo autoria irretratável para auditorias e fins legais."
      },
      {
        "topico": "Segurança da Informação",
        "pergunta": "Diferencie ataques ativos e passivos quanto ao comportamento e impacto.",
        "opcoes": [
          "Ataques ativos alteram sistemas ou corrompem dados barulhentamente; ataques passivos são silenciosos, focados apenas em escuta e monitoramento.",
          "Alteração ou pichação não autorizada da página inicial de um site após comprometimento do servidor, geralmente com viés ideológico ou político.",
          "Monitorar e registrar o que é digitado para capturar senhas. Pode ser lógico (software malicioso) ou físico (hardware intermediário no teclado).",
          "Analógicos são contínuos; digitais são discretos (0 e 1). Amplitude é potência; frequência é taxa de ciclos por segundo; fase é posição da onda."
        ],
        "correta": 0,
        "dica": "Revise o tópico de Segurança da Informação.",
        "explicacao": "Ataques ativos alteram sistemas ou corrompem dados barulhentamente; ataques passivos são silenciosos, focados apenas em escuta e monitoramento."
      },
      {
        "topico": "Segurança da Informação",
        "pergunta": "Qual a diferença entre ataque direto e ataque indireto?",
        "opcoes": [
          "Ataque direto atinge a vítima diretamente; ataque indireto usa máquinas zumbis (botnets) para disparar o ataque em massa ocultando a origem.",
          "Instalação cria backdoors para garantir persistência; Comando e Controle estabelece canal bidirecional para gerenciar a máquina remotamente.",
          "Estende uma rede privada pela internet pública criando um túnel criptografado seguro que encapsula e protege os dados contra interceptações.",
          "Par trançado é barato para LANs; fibra óptica usa luz, alta largura de banda e longa distância; coaxial possui blindagem e uso antiquado/TV."
        ],
        "correta": 0,
        "dica": "Revise o tópico de Segurança da Informação.",
        "explicacao": "Ataque direto atinge a vítima diretamente; ataque indireto usa máquinas zumbis (botnets) para disparar o ataque em massa ocultando a origem."
      },
      {
        "topico": "Segurança da Informação",
        "pergunta": "O que ocorre na fase de Reconhecimento de um ataque?",
        "opcoes": [
          "Coleta meticulosa de dados públicos e redes sociais para mapear o perfil da organização e o elo mais fraco antes da invasão.",
          "Configuração manual (rotas estáticas), redes diretamente conectadas, e troca de rotas com vizinhos via protocolos dinâmicos.",
          "Interface de programação para serviços de rede, composta pelo protocolo de transporte, endereço IP do host e número da porta.",
          "Banda é a capacidade máxima teórica. A velocidade real também depende de latência, congestionamento e desempenho do servidor."
        ],
        "correta": 0,
        "dica": "Revise o tópico de Segurança da Informação.",
        "explicacao": "Coleta meticulosa de dados públicos e redes sociais para mapear o perfil da organização e o elo mais fraco antes da invasão."
      },
      {
        "topico": "Segurança da Informação",
        "pergunta": "Qual a principal função de um Firewall em uma rede de computadores?",
        "opcoes": [
          "Monitorar e filtrar o tráfego de entrada e saída com base em regras, bloqueando conexões suspeitas entre redes internas e externas.",
          "SMTP envia e-mails; POP3 baixa e apaga do servidor; IMAP sincroniza e mantém no servidor. IMAP é ideal para acesso multiplataforma.",
          "IGP (OSPF) opera dentro de um mesmo Sistema Autônomo; BGP opera externamente entre diferentes Sistemas Autônomos (internet global).",
          "Comunicação host-a-host, controle de fluxo, conexão orientada, entrega ordenada, confiabilidade com retransmissão e multiplexação."
        ],
        "correta": 0,
        "dica": "Revise o tópico de Segurança da Informação.",
        "explicacao": "Monitorar e filtrar o tráfego de entrada e saída com base em regras, bloqueando conexões suspeitas entre redes internas e externas."
      },
      {
        "topico": "Segurança da Informação",
        "pergunta": "Explique a diferença entre IDS e IPS.",
        "opcoes": [
          "IDS monitora passivamente o tráfego e gera alertas de intrusão; IPS atua ativamente bloqueando o tráfego malicioso em tempo real.",
          "Mapeia IP em endereço MAC na rede local enviando uma mensagem broadcast ARP Request, respondida com um ARP Reply pelo dono do IP.",
          "Ameaça é a probabilidade ou causa potencial de um incidente (intenção); ataque é a ação efetiva acontecendo e causando dano real.",
          "Traduz nomes de domínio em endereços IP consultando servidores recursivos, raiz (root), TLD e autoritativos até obter o IP final."
        ],
        "correta": 0,
        "dica": "Revise o tópico de Segurança da Informação.",
        "explicacao": "IDS monitora passivamente o tráfego e gera alertas de intrusão; IPS atua ativamente bloqueando o tráfego malicioso em tempo real."
      },
      {
        "topico": "Segurança da Informação",
        "pergunta": "Qual a finalidade de uma VPN e como a criptografia atua nela?",
        "opcoes": [
          "Estende uma rede privada pela internet pública criando um túnel criptografado seguro que encapsula e protege os dados contra interceptações.",
          "Ataque direto atinge a vítima diretamente; ataque indireto usa máquinas zumbis (botnets) para disparar o ataque em massa ocultando a origem.",
          "Instalação cria backdoors para garantir persistência; Comando e Controle estabelece canal bidirecional para gerenciar a máquina remotamente.",
          "Par trançado é barato para LANs; fibra óptica usa luz, alta largura de banda e longa distância; coaxial possui blindagem e uso antiquado/TV."
        ],
        "correta": 0,
        "dica": "Revise o tópico de Segurança da Informação.",
        "explicacao": "Estende uma rede privada pela internet pública criando um túnel criptografado seguro que encapsula e protege os dados contra interceptações."
      },
      {
        "topico": "Gerenciamento FCAPS",
        "pergunta": "O que é o modelo FCAPS e quais suas cinco áreas funcionais?",
        "opcoes": [
          "Estrutura padrão ISO de gerenciamento dividida em: Falhas, Configuração, Contabilização, Desempenho e Segurança.",
          "8 endereços no bloco, sendo 6 utilizáveis para dispositivos (1 identifica a rede e 1 é reservado para broadcast).",
          "Impede que um usuário negue ter executado uma ação, garantindo autoria irretratável para auditorias e fins legais.",
          "Rastrear, registrar e controlar parâmetros de hardware/software, backups de configuração e inventário de rede."
        ],
        "correta": 0,
        "dica": "Revise o tópico de Gerenciamento FCAPS.",
        "explicacao": "Estrutura padrão ISO de gerenciamento dividida em: Falhas, Configuração, Contabilização, Desempenho e Segurança."
      },
      {
        "topico": "Gerenciamento FCAPS",
        "pergunta": "Descreva a área de Gerenciamento de Falhas (Fault Management) no FCAPS.",
        "opcoes": [
          "Detecta, isola e corrige problemas na rede rapidamente para minimizar o tempo de inatividade (downtime).",
          "Distorcem sinais e corrompem bits. Mitigados por trançamento de cabos, blindagem ou uso de fibra óptica.",
          "Reconhecimento, Armamento, Entrega, Exploração, Instalação, Comando e Controle (C2) e Ações no Objetivo.",
          "Especificações elétricas (voltagens), mecânicas (conectores), tempo de pulsos e taxas máximas de dados."
        ],
        "correta": 0,
        "dica": "Revise o tópico de Gerenciamento FCAPS.",
        "explicacao": "Detecta, isola e corrige problemas na rede rapidamente para minimizar o tempo de inatividade (downtime)."
      },
      {
        "topico": "Gerenciamento FCAPS",
        "pergunta": "Qual a finalidade do Gerenciamento de Configuração no FCAPS?",
        "opcoes": [
          "Rastrear, registrar e controlar parâmetros de hardware/software, backups de configuração e inventário de rede.",
          "Fornecem o mapa e calculam rotas para pacotes chegarem ao destino através de redes complexas, tal qual um GPS.",
          "Exploração de uma vulnerabilidade ainda desconhecida pelos desenvolvedores e sem correção (patch) disponível.",
          "Estrutura padrão ISO de gerenciamento dividida em: Falhas, Configuração, Contabilização, Desempenho e Segurança."
        ],
        "correta": 0,
        "dica": "Revise o tópico de Gerenciamento FCAPS.",
        "explicacao": "Rastrear, registrar e controlar parâmetros de hardware/software, backups de configuração e inventário de rede."
      },
      {
        "topico": "Gerenciamento FCAPS",
        "pergunta": "Explique o Gerenciamento de Desempenho e métricas monitoradas.",
        "opcoes": [
          "Avalia a eficiência da rede monitorando largura de banda, perda de pacotes, latência, jitter e uso de CPU/memória.",
          "Impede que um usuário negue ter executado uma ação, garantindo autoria irretratável para auditorias e fins legais.",
          "8 endereços no bloco, sendo 6 utilizáveis para dispositivos (1 identifica a rede e 1 é reservado para broadcast).",
          "Detectar e remover malwares usando assinaturas conhecidas, análise heurística e comportamental em tempo de execução."
        ],
        "correta": 0,
        "dica": "Revise o tópico de Gerenciamento FCAPS.",
        "explicacao": "Avalia a eficiência da rede monitorando largura de banda, perda de pacotes, latência, jitter e uso de CPU/memória."
      },
      {
        "topico": "Gerenciamento FCAPS",
        "pergunta": "Qual o objetivo do Gerenciamento de Contabilização (Accounting Management)?",
        "opcoes": [
          "Mede o uso de recursos da rede para controle de cotas, faturamento em ISPs e auditoria de consumo.",
          "Transmite fluxo bruto de bits convertendo em sinais físicos. Exemplos: par trançado e fibra óptica.",
          "Organiza bits em quadros, controla acesso ao meio e garante transferência confiável node-to-node.",
          "Atenuação (perda gradual de potência) e ruído (sinais indesejados que corrompem a decodificação)."
        ],
        "correta": 0,
        "dica": "Revise o tópico de Gerenciamento FCAPS.",
        "explicacao": "Mede o uso de recursos da rede para controle de cotas, faturamento em ISPs e auditoria de consumo."
      },
      {
        "topico": "Gerenciamento FCAPS",
        "pergunta": "Como o Gerenciamento de Segurança se integra às demais áreas do FCAPS?",
        "opcoes": [
          "Controla acessos, políticas e logs de forma transversal, garantindo que falhas, configurações e dados de desempenho estejam protegidos.",
          "Uso de uma arma digital que explora vulnerabilidades desconhecidas pelos desenvolvedores, pegando antivírus tradicionais desprevenidos.",
          "Circuitos reservam canal dedicado (gerando ociosidade); pacotes usam multiplexação estatística e compartilhamento dinâmico sob demanda.",
          "TCP é confiável e orientado à conexão; UDP é rápido e sem conexão; SCTP combina controle de congestionamento com caminhos redundantes."
        ],
        "correta": 0,
        "dica": "Revise o tópico de Gerenciamento FCAPS.",
        "explicacao": "Controla acessos, políticas e logs de forma transversal, garantindo que falhas, configurações e dados de desempenho estejam protegidos."
      },
      {
        "topico": "Camadas OSI e Roteamento",
        "pergunta": "Qual a função e posição da Camada de Transporte no modelo OSI?",
        "opcoes": [
          "Camada 4 do modelo OSI, fornece fluxo de dados host-a-host, atendendo à aplicação e interagindo com a rede.",
          "Exploração de uma vulnerabilidade ainda desconhecida pelos desenvolvedores e sem correção (patch) disponível.",
          "Detecta, isola e corrige problemas na rede rapidamente para minimizar o tempo de inatividade (downtime).",
          "Rastrear, registrar e controlar parâmetros de hardware/software, backups de configuração e inventário de rede."
        ],
        "correta": 0,
        "dica": "Revise o tópico de Camadas OSI e Roteamento.",
        "explicacao": "Camada 4 do modelo OSI, fornece fluxo de dados host-a-host, atendendo à aplicação e interagindo com a rede."
      },
      {
        "topico": "Camadas OSI e Roteamento",
        "pergunta": "Quais os principais serviços fornecidos pela Camada de Transporte?",
        "opcoes": [
          "Comunicação host-a-host, controle de fluxo, conexão orientada, entrega ordenada, confiabilidade com retransmissão e multiplexação.",
          "Organiza bits em quadros (frames) com endereços físicos MAC de fábrica e usa bits redundantes verificados por algoritmos como CRC.",
          "Mapeia IP em endereço MAC na rede local enviando uma mensagem broadcast ARP Request, respondida com um ARP Reply pelo dono do IP.",
          "SMTP envia e-mails; POP3 baixa e apaga do servidor; IMAP sincroniza e mantém no servidor. IMAP é ideal para acesso multiplataforma."
        ],
        "correta": 0,
        "dica": "Revise o tópico de Camadas OSI e Roteamento.",
        "explicacao": "Comunicação host-a-host, controle de fluxo, conexão orientada, entrega ordenada, confiabilidade com retransmissão e multiplexação."
      },
      {
        "topico": "Camadas OSI e Roteamento",
        "pergunta": "O que são as portas de comunicação e como viabilizam a multiplexação?",
        "opcoes": [
          "Identificadores de 16 bits (0-65535) que direcionam pacotes às aplicações correspondentes, permitindo múltiplos programas acessando a rede simultaneamente.",
          "Princípio 'divisão e conquista': alterar a implementação ou protocolo de uma camada não afeta as demais, desde que as interfaces entre elas sejam mantidas.",
          "Reconhecimento inicial não intrusivo para levantar informações públicas sobre o alvo (sites, DNS, redes sociais) usando métodos lícitos e engenharia social.",
          "OSI: Física, Enlace, Rede, Transporte, Sessão, Apresentação e Aplicação. No TCP/IP, Aplicação, Apresentação e Sessão são agrupadas na camada de Aplicação."
        ],
        "correta": 0,
        "dica": "Revise o tópico de Camadas OSI e Roteamento.",
        "explicacao": "Identificadores de 16 bits (0-65535) que direcionam pacotes às aplicações correspondentes, permitindo múltiplos programas acessando a rede simultaneamente."
      },
      {
        "topico": "Camadas OSI e Roteamento",
        "pergunta": "O que é um socket e quais seus elementos constituintes?",
        "opcoes": [
          "Interface de programação para serviços de rede, composta pelo protocolo de transporte, endereço IP do host e número da porta.",
          "Banda é a capacidade máxima teórica. A velocidade real também depende de latência, congestionamento e desempenho do servidor.",
          "Meio de Transmissão (guiadas/não guiadas), Arquitetura de Rede (Cliente-Servidor/P2P) e Arquitetura de Sistemas (OSI/TCP-IP).",
          "Opera pelo processo DORA para configurar redes automaticamente, fornecendo IP, máscara de sub- rede, gateway e servidores DNS."
        ],
        "correta": 0,
        "dica": "Revise o tópico de Camadas OSI e Roteamento.",
        "explicacao": "Interface de programação para serviços de rede, composta pelo protocolo de transporte, endereço IP do host e número da porta."
      },
      {
        "topico": "Camadas OSI e Roteamento",
        "pergunta": "Quais os principais protocolos de transporte (TCP, UDP, SCTP) e suas diferenças?",
        "opcoes": [
          "TCP é confiável e orientado à conexão; UDP é rápido e sem conexão; SCTP combina controle de congestionamento com caminhos redundantes.",
          "Uso de uma arma digital que explora vulnerabilidades desconhecidas pelos desenvolvedores, pegando antivírus tradicionais desprevenidos.",
          "Controla acessos, políticas e logs de forma transversal, garantindo que falhas, configurações e dados de desempenho estejam protegidos.",
          "Circuitos reservam canal dedicado (gerando ociosidade); pacotes usam multiplexação estatística e compartilhamento dinâmico sob demanda."
        ],
        "correta": 0,
        "dica": "Revise o tópico de Camadas OSI e Roteamento.",
        "explicacao": "TCP é confiável e orientado à conexão; UDP é rápido e sem conexão; SCTP combina controle de congestionamento com caminhos redundantes."
      },
      {
        "topico": "Camadas OSI e Roteamento",
        "pergunta": "Como atuam o roteamento e encaminhamento na internet (analogia com GPS)?",
        "opcoes": [
          "Fornecem o mapa e calculam rotas para pacotes chegarem ao destino através de redes complexas, tal qual um GPS.",
          "Rastrear, registrar e controlar parâmetros de hardware/software, backups de configuração e inventário de rede.",
          "Exploração de uma vulnerabilidade ainda desconhecida pelos desenvolvedores e sem correção (patch) disponível.",
          "Estrutura padrão ISO de gerenciamento dividida em: Falhas, Configuração, Contabilização, Desempenho e Segurança."
        ],
        "correta": 0,
        "dica": "Revise o tópico de Camadas OSI e Roteamento.",
        "explicacao": "Fornecem o mapa e calculam rotas para pacotes chegarem ao destino através de redes complexas, tal qual um GPS."
      },
      {
        "topico": "Camadas OSI e Roteamento",
        "pergunta": "Qual critério o roteador usa quando um destino se encaixa em múltiplos prefixos na tabela?",
        "opcoes": [
          "Escolhe sempre a rota mais específica, ou seja, o prefixo mais longo.",
          "Segmento (Transporte), Datagrama/Pacote (Rede) e Quadro/Frame (Enlace).",
          "Para criar campos magnéticos que cancelam e reduzem interferências eletromagnéticas externas.",
          "Organiza bits em quadros, controla acesso ao meio e garante transferência confiável node-to-node."
        ],
        "correta": 0,
        "dica": "Revise o tópico de Camadas OSI e Roteamento.",
        "explicacao": "Escolhe sempre a rota mais específica, ou seja, o prefixo mais longo."
      },
      {
        "topico": "Camadas OSI e Roteamento",
        "pergunta": "Como a adoção do IPv6 afeta as tabelas mantidas pelos roteadores?",
        "opcoes": [
          "Roteadores passam a manter simultaneamente tabelas RIB e FIB separadas para IPv4 e IPv6 (pilha dupla).",
          "Especificações elétricas (voltagens), mecânicas (conectores), tempo de pulsos e taxas máximas de dados.",
          "Reconhecimento, Armamento, Entrega, Exploração, Instalação, Comando e Controle, e Ações no Objetivo.",
          "Detecta, isola e corrige problemas na rede rapidamente para minimizar o tempo de inatividade (downtime)."
        ],
        "correta": 0,
        "dica": "Revise o tópico de Camadas OSI e Roteamento.",
        "explicacao": "Roteadores passam a manter simultaneamente tabelas RIB e FIB separadas para IPv4 e IPv6 (pilha dupla)."
      },
      {
        "topico": "Camada Física e Enlace",
        "pergunta": "Camada Física: Qual sua função e exemplos de meios físicos?",
        "opcoes": [
          "Transmite fluxo bruto de bits convertendo em sinais físicos. Exemplos: par trançado e fibra óptica.",
          "Reconhecimento, Armamento, Entrega, Exploração, Instalação, Comando e Controle, e Ações no Objetivo.",
          "Mede o uso de recursos da rede para controle de cotas, faturamento em ISPs e auditoria de consumo.",
          "Organiza bits em quadros, controla acesso ao meio e garante transferência confiável node-to-node."
        ],
        "correta": 0,
        "dica": "Revise o tópico de Camada Física e Enlace.",
        "explicacao": "Transmite fluxo bruto de bits convertendo em sinais físicos. Exemplos: par trançado e fibra óptica."
      },
      {
        "topico": "Camada Física e Enlace",
        "pergunta": "Sinais de transmissão: Diferencie sinais analógicos e digitais e explique amplitude, frequência e fase.",
        "opcoes": [
          "Analógicos são contínuos; digitais são discretos (0 e 1). Amplitude é potência; frequência é taxa de ciclos por segundo; fase é posição da onda.",
          "Monitorar e registrar o que é digitado para capturar senhas. Pode ser lógico (software malicioso) ou físico (hardware intermediário no teclado).",
          "Transmitem dados e credenciais em texto claro, ficando vulneráveis a sniffing; as alternativas seguras são SSH (console) e SFTP/FTPS (arquivos).",
          "Alteração ou pichação não autorizada da página inicial de um site após comprometimento do servidor, geralmente com viés ideológico ou político."
        ],
        "correta": 0,
        "dica": "Revise o tópico de Camada Física e Enlace.",
        "explicacao": "Analógicos são contínuos; digitais são discretos (0 e 1). Amplitude é potência; frequência é taxa de ciclos por segundo; fase é posição da onda."
      },
      {
        "topico": "Camada Física e Enlace",
        "pergunta": "Meios de transmissão: Compare par trançado, fibra óptica e cabo coaxial.",
        "opcoes": [
          "Par trançado é barato para LANs; fibra óptica usa luz, alta largura de banda e longa distância; coaxial possui blindagem e uso antiquado/TV.",
          "Ataque direto atinge a vítima diretamente; ataque indireto usa máquinas zumbis (botnets) para disparar o ataque em massa ocultando a origem.",
          "Instalação cria backdoors para garantir persistência; Comando e Controle estabelece canal bidirecional para gerenciar a máquina remotamente.",
          "Estende uma rede privada pela internet pública criando um túnel criptografado seguro que encapsula e protege os dados contra interceptações."
        ],
        "correta": 0,
        "dica": "Revise o tópico de Camada Física e Enlace.",
        "explicacao": "Par trançado é barato para LANs; fibra óptica usa luz, alta largura de banda e longa distância; coaxial possui blindagem e uso antiquado/TV."
      },
      {
        "topico": "Camada Física e Enlace",
        "pergunta": "Largura de banda: Explique o conceito e por que maior banda não significa comunicação mais rápida em todas situações.",
        "opcoes": [
          "Banda é a capacidade máxima teórica. A velocidade real também depende de latência, congestionamento e desempenho do servidor.",
          "Interface de programação para serviços de rede, composta pelo protocolo de transporte, endereço IP do host e número da porta.",
          "Meio de Transmissão (guiadas/não guiadas), Arquitetura de Rede (Cliente-Servidor/P2P) e Arquitetura de Sistemas (OSI/TCP-IP).",
          "Opera pelo processo DORA para configurar redes automaticamente, fornecendo IP, máscara de sub- rede, gateway e servidores DNS."
        ],
        "correta": 0,
        "dica": "Revise o tópico de Camada Física e Enlace.",
        "explicacao": "Banda é a capacidade máxima teórica. A velocidade real também depende de latência, congestionamento e desempenho do servidor."
      },
      {
        "topico": "Camada Física e Enlace",
        "pergunta": "Interferências e Ruídos: Como afetam a comunicação e como mitigá-los?",
        "opcoes": [
          "Distorcem sinais e corrompem bits. Mitigados por trançamento de cabos, blindagem ou uso de fibra óptica.",
          "Detecta, isola e corrige problemas na rede rapidamente para minimizar o tempo de inatividade (downtime).",
          "Reconhecimento, Armamento, Entrega, Exploração, Instalação, Comando e Controle (C2) e Ações no Objetivo.",
          "Especificações elétricas (voltagens), mecânicas (conectores), tempo de pulsos e taxas máximas de dados."
        ],
        "correta": 0,
        "dica": "Revise o tópico de Camada Física e Enlace.",
        "explicacao": "Distorcem sinais e corrompem bits. Mitigados por trançamento de cabos, blindagem ou uso de fibra óptica."
      },
      {
        "topico": "Camada Física e Enlace",
        "pergunta": "Camada de Enlace: Qual sua função na entrega de dados entre dispositivos diretos?",
        "opcoes": [
          "Organiza bits em quadros, controla acesso ao meio e garante transferência confiável node-to-node.",
          "Atenuação (perda gradual de potência) e ruído (sinais indesejados que corrompem a decodificação).",
          "Mede o uso de recursos da rede para controle de cotas, faturamento em ISPs e auditoria de consumo.",
          "Transmite fluxo bruto de bits convertendo em sinais físicos. Exemplos: par trançado e fibra óptica."
        ],
        "correta": 0,
        "dica": "Revise o tópico de Camada Física e Enlace.",
        "explicacao": "Organiza bits em quadros, controla acesso ao meio e garante transferência confiável node-to-node."
      },
      {
        "topico": "Camada Física e Enlace",
        "pergunta": "Quadros (Frames): O que são e quais informações contêm?",
        "opcoes": [
          "Unidade de dados da camada de enlace contendo cabeçalho (endereços físicos), payload e trailer com verificação de erros.",
          "Estão vulneráveis a sniffing e roubo de credenciais. Alternativas seguras são SSH para console e SFTP/FTPS para arquivos.",
          "MAC é identificador físico de fábrica (Camada 2) para rede local; IP é endereço lógico (Camada 3) para roteamento global.",
          "Adiciona cabeçalhos à carga útil nas camadas inferiores. PDUs: Segmento (Transporte), Datagrama (Rede) e Quadro (Enlace)."
        ],
        "correta": 0,
        "dica": "Revise o tópico de Camada Física e Enlace.",
        "explicacao": "Unidade de dados da camada de enlace contendo cabeçalho (endereços físicos), payload e trailer com verificação de erros."
      },
      {
        "topico": "Camada Física e Enlace",
        "pergunta": "Endereço MAC: O que é e qual sua diferença para o endereço IP?",
        "opcoes": [
          "MAC é identificador físico de fábrica (Camada 2) para rede local; IP é endereço lógico (Camada 3) para roteamento global.",
          "Estão vulneráveis a sniffing e roubo de credenciais. Alternativas seguras são SSH para console e SFTP/FTPS para arquivos.",
          "Adiciona cabeçalhos à carga útil nas camadas inferiores. PDUs: Segmento (Transporte), Datagrama (Rede) e Quadro (Enlace).",
          "Unidade de dados da camada de enlace contendo cabeçalho (endereços físicos), payload e trailer com verificação de erros."
        ],
        "correta": 0,
        "dica": "Revise o tópico de Camada Física e Enlace.",
        "explicacao": "MAC é identificador físico de fábrica (Camada 2) para rede local; IP é endereço lógico (Camada 3) para roteamento global."
      },
      {
        "topico": "Camada Física e Enlace",
        "pergunta": "Detecção de erros: Como a camada de enlace identifica erros e cite um mecanismo.",
        "opcoes": [
          "Adiciona bits redundantes verificados por algoritmos no receptor. Mecanismo clássico: CRC (Cyclic Redundancy Check).",
          "Detectar e remover malwares usando assinaturas conhecidas, análise heurística e comportamental em tempo de execução.",
          "Atenuação (perda gradual de potência ao longo da distância) e ruído (sinais indesejados que distorcem a informação).",
          "Impede que um usuário negue ter executado uma ação, garantindo autoria irretratável para auditorias e fins legais."
        ],
        "correta": 0,
        "dica": "Revise o tópico de Camada Física e Enlace.",
        "explicacao": "Adiciona bits redundantes verificados por algoritmos no receptor. Mecanismo clássico: CRC (Cyclic Redundancy Check)."
      },
      {
        "topico": "Camada Física e Enlace",
        "pergunta": "Quais especificações a camada física define para garantir o enlace?",
        "opcoes": [
          "Especificações elétricas (voltagens), mecânicas (conectores), tempo de pulsos e taxas máximas de dados.",
          "Detecta, isola e corrige problemas na rede rapidamente para minimizar o tempo de inatividade (downtime).",
          "Roteadores passam a manter simultaneamente tabelas RIB e FIB separadas para IPv4 e IPv6 (pilha dupla).",
          "Distorcem sinais e corrompem bits. Mitigados por trançamento de cabos, blindagem ou uso de fibra óptica."
        ],
        "correta": 0,
        "dica": "Revise o tópico de Camada Física e Enlace.",
        "explicacao": "Especificações elétricas (voltagens), mecânicas (conectores), tempo de pulsos e taxas máximas de dados."
      },
      {
        "topico": "Camada Física e Enlace",
        "pergunta": "Por que os fios do par trançado são enrolados em espiral?",
        "opcoes": [
          "Para criar campos magnéticos que cancelam e reduzem interferências eletromagnéticas externas.",
          "Organiza bits em quadros, controla acesso ao meio e garante transferência confiável node-to-node.",
          "Atenuação (perda gradual de potência) e ruído (sinais indesejados que corrompem a decodificação).",
          "Mede o uso de recursos da rede para controle de cotas, faturamento em ISPs e auditoria de consumo."
        ],
        "correta": 0,
        "dica": "Revise o tópico de Camada Física e Enlace.",
        "explicacao": "Para criar campos magnéticos que cancelam e reduzem interferências eletromagnéticas externas."
      },
      {
        "topico": "Camada Física e Enlace",
        "pergunta": "Como cabo coaxial e fibra óptica protegem contra interferências?",
        "opcoes": [
          "Coaxial usa malha metálica de blindagem; fibra óptica usa reflexão interna total de luz no vidro, sendo 100% imune a eletricidade e ruídos.",
          "Camadas superiores operam por software abstrato; camadas inferiores (Física/Enlace) lidam diretamente com hardware, cabos e sinais físicos.",
          "Envia mensagens de controle e erro. O ping testa conectividade e latência com Echo Request/Reply; o traceroute rastreia saltos usando TTL.",
          "Ativo é qualquer coisa com valor para a organização. Colaboradores são ativos humanos pois detêm conhecimentos, senhas e acessos críticos."
        ],
        "correta": 0,
        "dica": "Revise o tópico de Camada Física e Enlace.",
        "explicacao": "Coaxial usa malha metálica de blindagem; fibra óptica usa reflexão interna total de luz no vidro, sendo 100% imune a eletricidade e ruídos."
      },
      {
        "topico": "Camada Física e Enlace",
        "pergunta": "NAT: Qual sua finalidade em redes IPv4 e como atua na fronteira?",
        "opcoes": [
          "Contorna o esgotamento do IPv4 mapeando IPs privados em públicos (PAT), ocultando a topologia interna para aumentar a segurança.",
          "HTTP (porta 80) transmite dados sem criptografia; HTTPS (porta 443) acrescenta criptografia para proteger os dados transmitidos.",
          "A PDU é o Segmento, utilizando portas lógicas (como 80 e 443 para Web) para multiplexar e entregar dados aos processos corretos.",
          "Mapeia IP em endereço MAC na rede local enviando uma mensagem broadcast ARP Request, respondida com um ARP Reply pelo dono do IP."
        ],
        "correta": 0,
        "dica": "Revise o tópico de Camada Física e Enlace.",
        "explicacao": "Contorna o esgotamento do IPv4 mapeando IPs privados em públicos (PAT), ocultando a topologia interna para aumentar a segurança."
      },
      {
        "topico": "Camada Física e Enlace",
        "pergunta": "Atraso de fila (queuing delay): O que o causa e por que é o mais variável?",
        "opcoes": [
          "Ocorre quando pacotes chegam mais rápido que a capacidade de saída do enlace. Varia conforme o volume aleatório e instantâneo de tráfego.",
          "Disfarça-se de programa legítimo para induzir o usuário a executá-lo voluntariamente, instalando backdoors ou códigos maliciosos ocultos.",
          "Usa janela deslizante, confirmações e temporizadores (timeout); em caso de erro/perda, pode retransmitir o quadro perdido e os seguintes.",
          "Envia mensagens de controle e erro. O ping testa conectividade e latência com Echo Request/Reply; o traceroute rastreia saltos usando TTL."
        ],
        "correta": 0,
        "dica": "Revise o tópico de Camada Física e Enlace.",
        "explicacao": "Ocorre quando pacotes chegam mais rápido que a capacidade de saída do enlace. Varia conforme o volume aleatório e instantâneo de tráfego."
      },
      {
        "topico": "Camada Física e Enlace",
        "pergunta": "Encapsulamento: Descreva o processo e cite as PDUs das camadas de Transporte, Rede e Enlace.",
        "opcoes": [
          "Adiciona cabeçalhos à carga útil nas camadas inferiores. PDUs: Segmento (Transporte), Datagrama (Rede) e Quadro (Enlace).",
          "Estão vulneráveis a sniffing e roubo de credenciais. Alternativas seguras são SSH para console e SFTP/FTPS para arquivos.",
          "MAC é identificador físico de fábrica (Camada 2) para rede local; IP é endereço lógico (Camada 3) para roteamento global.",
          "Unidade de dados da camada de enlace contendo cabeçalho (endereços físicos), payload e trailer com verificação de erros."
        ],
        "correta": 0,
        "dica": "Revise o tópico de Camada Física e Enlace.",
        "explicacao": "Adiciona cabeçalhos à carga útil nas camadas inferiores. PDUs: Segmento (Transporte), Datagrama (Rede) e Quadro (Enlace)."
      },
      {
        "topico": "Camada Física e Enlace",
        "pergunta": "Quais são os três pilares estruturais para a classificação formal de redes?",
        "opcoes": [
          "Meio de Transmissão (guiadas/não guiadas), Arquitetura de Rede (Cliente-Servidor/P2P) e Arquitetura de Sistemas (OSI/TCP-IP).",
          "Interface de programação para serviços de rede, composta pelo protocolo de transporte, endereço IP do host e número da porta.",
          "Banda é a capacidade máxima teórica. A velocidade real também depende de latência, congestionamento e desempenho do servidor.",
          "Opera pelo processo DORA para configurar redes automaticamente, fornecendo IP, máscara de sub- rede, gateway e servidores DNS."
        ],
        "correta": 0,
        "dica": "Revise o tópico de Camada Física e Enlace.",
        "explicacao": "Meio de Transmissão (guiadas/não guiadas), Arquitetura de Rede (Cliente-Servidor/P2P) e Arquitetura de Sistemas (OSI/TCP-IP)."
      },
      {
        "topico": "Camada Física e Enlace",
        "pergunta": "O que é segmentação de dados e qual camada a realiza?",
        "opcoes": [
          "Divisão de blocos grandes em pedaços menores para respeitar a MTU. Realizada pela Camada de Transporte em ambos os modelos.",
          "Absorveu suas funções (diálogos, compressão, criptografia) diretamente na Camada de Aplicação, simplificando a arquitetura.",
          "Falhas (Fault), Configuração (Configuration), Contabilização (Accounting), Desempenho (Performance) e Segurança (Security).",
          "Coleta meticulosa de dados públicos e redes sociais para mapear o perfil da organização e o elo mais fraco antes da invasão."
        ],
        "correta": 0,
        "dica": "Revise o tópico de Camada Física e Enlace.",
        "explicacao": "Divisão de blocos grandes em pedaços menores para respeitar a MTU. Realizada pela Camada de Transporte em ambos os modelos."
      },
      {
        "topico": "Camada Física e Enlace",
        "pergunta": "Como o TCP/IP lidou com as camadas de Sessão e Apresentação do OSI?",
        "opcoes": [
          "Absorveu suas funções (diálogos, compressão, criptografia) diretamente na Camada de Aplicação, simplificando a arquitetura.",
          "Divisão de blocos grandes em pedaços menores para respeitar a MTU. Realizada pela Camada de Transporte em ambos os modelos.",
          "Falhas (Fault), Configuração (Configuration), Contabilização (Accounting), Desempenho (Performance) e Segurança (Security).",
          "Coleta meticulosa de dados públicos e redes sociais para mapear o perfil da organização e o elo mais fraco antes da invasão."
        ],
        "correta": 0,
        "dica": "Revise o tópico de Camada Física e Enlace.",
        "explicacao": "Absorveu suas funções (diálogos, compressão, criptografia) diretamente na Camada de Aplicação, simplificando a arquitetura."
      },
      {
        "topico": "Camada Física e Enlace",
        "pergunta": "Compare comutação de circuitos com comutação de pacotes.",
        "opcoes": [
          "Circuitos reservam canal dedicado (gerando ociosidade); pacotes usam multiplexação estatística e compartilhamento dinâmico sob demanda.",
          "Uso de uma arma digital que explora vulnerabilidades desconhecidas pelos desenvolvedores, pegando antivírus tradicionais desprevenidos.",
          "Controla acessos, políticas e logs de forma transversal, garantindo que falhas, configurações e dados de desempenho estejam protegidos.",
          "TCP é confiável e orientado à conexão; UDP é rápido e sem conexão; SCTP combina controle de congestionamento com caminhos redundantes."
        ],
        "correta": 0,
        "dica": "Revise o tópico de Camada Física e Enlace.",
        "explicacao": "Circuitos reservam canal dedicado (gerando ociosidade); pacotes usam multiplexação estatística e compartilhamento dinâmico sob demanda."
      },
      {
        "topico": "Protocolos de Transporte (UDP vs. TCP)",
        "pergunta": "Por que o protocolo UDP é considerado a escolha ideal para aplicações em tempo real, como streaming de vídeo e videoconferências, em detrimento do TCP?",
        "opcoes": [
          "Porque o UDP prioriza a alta velocidade e a baixa latência, permitindo que pequenas perdas de pacotes passem sem comprometer drasticamente a experiência interativa, evitando o atraso imposto pelas retransmissões complexas do TCP.",
          "Ele resolve ambiguidades com delimitadores duplicados. Se o caractere de controle (DLE) aparece acidentalmente nos dados, o transmissor insere um DLE extra para mascará-lo, e o receptor remove essa duplicação com segurança.",
          "É ideal para arquivos, e-mails e páginas web, onde a entrega deve ser 100% confiável. A compensação é aceitar uma maior latência e overhead no tempo de resposta em troca de segurança na entrega e controle rigoroso de fluxo e congestionamento.",
          "O RIP usa número de saltos (máx 15) para redes pequenas; OSPF usa custo e estado de link para redes internas médias/grandes; BGP usa vetor de caminho entre Sistemas Autônomos (internet global)."
        ],
        "correta": 0,
        "dica": "Revise o tópico de Protocolos de Transporte (UDP vs. TCP).",
        "explicacao": "Porque o UDP prioriza a alta velocidade e a baixa latência, permitindo que pequenas perdas de pacotes passem sem comprometer drasticamente a experiência interativa, evitando o atraso imposto pelas retransmissões complexas do TCP."
      },
      {
        "topico": "Protocolos de Transporte (UDP vs. TCP)",
        "pergunta": "Em quais cenários o uso do protocolo TCP é obrigatório e qual é a principal compensação que ele faz em relação ao desempenho?",
        "opcoes": [
          "É ideal para arquivos, e-mails e páginas web, onde a entrega deve ser 100% confiável. A compensação é aceitar uma maior latência e overhead no tempo de resposta em troca de segurança na entrega e controle rigoroso de fluxo e congestionamento.",
          "Porque o UDP prioriza a alta velocidade e a baixa latência, permitindo que pequenas perdas de pacotes passem sem comprometer drasticamente a experiência interativa, evitando o atraso imposto pelas retransmissões complexas do TCP.",
          "Ele resolve ambiguidades com delimitadores duplicados. Se o caractere de controle (DLE) aparece acidentalmente nos dados, o transmissor insere um DLE extra para mascará-lo, e o receptor remove essa duplicação com segurança.",
          "A divisão isola falhas e organiza o fluxo de dados. A Camada Física transmite sinais elétricos/bits; a Camada de Enlace usa endereços MAC e switches para quadros locais e controle de colisões; a Camada de Rede conecta redes distintas usando endereços IP e roteadores."
        ],
        "correta": 0,
        "dica": "Revise o tópico de Protocolos de Transporte (UDP vs. TCP).",
        "explicacao": "É ideal para arquivos, e-mails e páginas web, onde a entrega deve ser 100% confiável. A compensação é aceitar uma maior latência e overhead no tempo de resposta em troca de segurança na entrega e controle rigoroso de fluxo e congestionamento."
      },
      {
        "topico": "Modelo OSI",
        "pergunta": "Qual é o principal benefício da divisão de redes em camadas e quais são as funções básicas das camadas Física, de Enlace e de Rede?",
        "opcoes": [
          "A divisão isola falhas e organiza o fluxo de dados. A Camada Física transmite sinais elétricos/bits; a Camada de Enlace usa endereços MAC e switches para quadros locais e controle de colisões; a Camada de Rede conecta redes distintas usando endereços IP e roteadores.",
          "É ideal para arquivos, e-mails e páginas web, onde a entrega deve ser 100% confiável. A compensação é aceitar uma maior latência e overhead no tempo de resposta em troca de segurança na entrega e controle rigoroso de fluxo e congestionamento.",
          "Porque o UDP prioriza a alta velocidade e a baixa latência, permitindo que pequenas perdas de pacotes passem sem comprometer drasticamente a experiência interativa, evitando o atraso imposto pelas retransmissões complexas do TCP.",
          "Ele resolve ambiguidades com delimitadores duplicados. Se o caractere de controle (DLE) aparece acidentalmente nos dados, o transmissor insere um DLE extra para mascará-lo, e o receptor remove essa duplicação com segurança."
        ],
        "correta": 0,
        "dica": "Revise o tópico de Modelo OSI.",
        "explicacao": "A divisão isola falhas e organiza o fluxo de dados. A Camada Física transmite sinais elétricos/bits; a Camada de Enlace usa endereços MAC e switches para quadros locais e controle de colisões; a Camada de Rede conecta redes distintas usando endereços IP e roteadores."
      },
      {
        "topico": "Segurança e VLANs",
        "pergunta": "Qual é o principal objetivo da implementação de VLANs (Redes Virtuais Locais) em uma infraestrutura corporativa?",
        "opcoes": [
          "Segmentar e isolar diferentes setores da empresa para mitigar riscos de invasão interna e aplicar políticas rígidas de segurança por departamento.",
          "RIB (tabela de rotas) guarda todas as redes conhecidas; FIB (tabela de encaminhamento) guarda apenas a melhor rota e a interface física de saída.",
          "Cada pacote carrega endereço completo e segue rotas independentes, sofrendo atrasos variados e chegando fora de ordem, exigindo reordenação no TCP.",
          "Disfarça-se de programa legítimo ou útil para induzir o usuário a executá-lo voluntariamente, instalando backdoors ou códigos maliciosos ocultos."
        ],
        "correta": 0,
        "dica": "Revise o tópico de Segurança e VLANs.",
        "explicacao": "Segmentar e isolar diferentes setores da empresa para mitigar riscos de invasão interna e aplicar políticas rígidas de segurança por departamento."
      },
      {
        "topico": "Segurança e VPNs",
        "pergunta": "De que maneira as VPNs (Redes Virtuais Privadas) protegem os dados de colaboradores que acessam a rede corporativa a partir de ambientes públicos?",
        "opcoes": [
          "A VPN encapsula e criptografa os dados que trafegam por redes públicas, criando um túnel seguro que impede interceptações externas maliciosas.",
          "Opera pelo processo DORA (Discover, Offer, Request, Acknowledge) fornecendo endereço IP, máscara de sub-rede, gateway padrão e servidores DNS.",
          "Alteração ou pichação não autorizada da página inicial de um site após comprometimento do servidor, geralmente com viés ideológico ou político.",
          "Ataques ativos alteram sistemas ou corrompem dados barulhentamente; ataques passivos são silenciosos, focados apenas em escuta e monitoramento."
        ],
        "correta": 0,
        "dica": "Revise o tópico de Segurança e VPNs.",
        "explicacao": "A VPN encapsula e criptografa os dados que trafegam por redes públicas, criando um túnel seguro que impede interceptações externas maliciosas."
      },
      {
        "topico": "Controle de Erros (FEC)",
        "pergunta": "Como opera o controle de erros por malha aberta (FEC - Forward Error Correction) e qual sua grande vantagem?",
        "opcoes": [
          "No FEC, o receptor corrige falhas de forma autônoma utilizando códigos redundantes embutidos nos dados, dispensando a necessidade de um canal de retorno para solicitar reenvios.",
          "Fazem a troca de dados entre navegador e servidor web. O HTTPS usa criptografia (TLS/SSL) para proteger dados contra interceptações, garantindo confidencialidade e integridade.",
          "Par trançado usa fios entrelaçados contra interferência (comum em LANs); coaxial tem blindagem; fibra óptica usa pulsos luminosos com alta capacidade e imunidade eletromagnética.",
          "Authentication, Authorization and Accounting. RADIUS usa UDP; TACACS+ usa TCP e separa de forma independente autenticação, autorização e contabilização com maior granularidade."
        ],
        "correta": 0,
        "dica": "Revise o tópico de Controle de Erros (FEC).",
        "explicacao": "No FEC, o receptor corrige falhas de forma autônoma utilizando códigos redundantes embutidos nos dados, dispensando a necessidade de um canal de retorno para solicitar reenvios."
      },
      {
        "topico": "Enquadramento e Character Stuffing",
        "pergunta": "Explique o problema resolvido pelo Character Stuffing (Preenchimento de Caracteres) no enquadramento orientado a caractere.",
        "opcoes": [
          "Ele resolve ambiguidades com delimitadores duplicados. Se o caractere de controle (DLE) aparece acidentalmente nos dados, o transmissor insere um DLE extra para mascará-lo, e o receptor remove essa duplicação com segurança.",
          "Porque o UDP prioriza a alta velocidade e a baixa latência, permitindo que pequenas perdas de pacotes passem sem comprometer drasticamente a experiência interativa, evitando o atraso imposto pelas retransmissões complexas do TCP.",
          "É ideal para arquivos, e-mails e páginas web, onde a entrega deve ser 100% confiável. A compensação é aceitar uma maior latência e overhead no tempo de resposta em troca de segurança na entrega e controle rigoroso de fluxo e congestionamento.",
          "O RIP usa número de saltos (máx 15) para redes pequenas; OSPF usa custo e estado de link para redes internas médias/grandes; BGP usa vetor de caminho entre Sistemas Autônomos (internet global)."
        ],
        "correta": 0,
        "dica": "Revise o tópico de Enquadramento e Character Stuffing.",
        "explicacao": "Ele resolve ambiguidades com delimitadores duplicados. Se o caractere de controle (DLE) aparece acidentalmente nos dados, o transmissor insere um DLE extra para mascará-lo, e o receptor remove essa duplicação com segurança."
      }
    ]
  },
  {
    "id": "web",
    "icone": "💻",
    "titulo": "Desenvolvimento Web (HTML, CSS, JS e PHP)",
    "descricao": "Guia de Revisão e Questionário SM2: HTML5 Semântico, Acessibilidade, Flexbox, DOM, Recursividade JS, Sintaxe PHP e PDO/SQL Injection.",
    "questoes": [
      {
        "topico": "PHP e PDO — Segurança",
        "pergunta": "Qual é o propósito da utilização de instruções preparadas (prepared statements) por meio do PDO em aplicações PHP?",
        "opcoes": [
          "Separar rigidamente a estrutura do código SQL dos dados do usuário, tratando entradas exclusivamente como valores literais e prevenindo SQL Injection.",
          "Aumentar o brilho das imagens carregadas no navegador.",
          "Converter código PHP diretamente em folhas de estilo CSS.",
          "Permitir concatenação direta de variáveis sem validação."
        ],
        "correta": 0,
        "dica": "Protege contra injeção de comandos SQL maliciosos.",
        "explicacao": "Prepared statements no PDO isolam o comando SQL dos parâmetros fornecidos pelo usuário, bloqueando SQL Injection."
      },
      {
        "topico": "PHP e PDO — Vulnerabilidades",
        "pergunta": "O que ocorre quando há concatenação direta de variáveis de entrada do usuário em consultas SQL?",
        "opcoes": [
          "O sistema fica exposto a manipulações maliciosas na instrução SQL (SQL Injection).",
          "A consulta torna-se automaticamente mais segura e criptografada.",
          "O navegador bloqueia o carregamento do arquivo CSS.",
          "O PHP converte a consulta em array associativo."
        ],
        "correta": 0,
        "dica": "Risco clássico de segurança em aplicações web.",
        "explicacao": "Concatenar strings diretamente permite que caracteres especiais alterem a lógica da query SQL."
      },
      {
        "topico": "CSS — Separação de Camadas",
        "pergunta": "Qual é o propósito principal da linguagem Cascading Style Sheets (CSS)?",
        "opcoes": [
          "Garantir a separação entre a estrutura do documento (definida em HTML) e sua camada de apresentação visual.",
          "Gerenciar conexões com bancos de dados PostgreSQL.",
          "Executar loops recursivos no servidor back-end.",
          "Substituir o protocolo HTTP."
        ],
        "correta": 0,
        "dica": "Estrutura (HTML) separada da estética (CSS).",
        "explicacao": "CSS separa o conteúdo estrutural HTML da estilização visual, facilitando manutenção e responsividade."
      },
      {
        "topico": "CSS — Seletores de Classe",
        "pergunta": "Como são indicados os seletores de classe no CSS e qual é a vantagem de utilizá-los?",
        "opcoes": [
          "São indicados por um ponto (.) antes do nome e permitem aplicar estilos a múltiplos elementos HTML simultaneamente com código limpo e reutilizável.",
          "São indicados por cerquilha (#) e só podem ser usados uma única vez na página.",
          "São indicados por cifrão ($) e funcionam apenas em PHP.",
          "Aplicam estilos exclusivamente na tag <body>."
        ],
        "correta": 0,
        "dica": "Ex.: .contact-form { ... }",
        "explicacao": "Seletores de classe iniciam com ponto (.) e permitem reutilizar regras visuais em vários elementos."
      },
      {
        "topico": "PHP — Sintaxe de Variáveis",
        "pergunta": "Quais são as regras sintáticas fundamentais para a declaração de variáveis no PHP?",
        "opcoes": [
          "Toda variável inicia com cifrão ($) e a linguagem diferencia estritamente letras maiúsculas de minúsculas (case-sensitive).",
          "Variáveis iniciam com @ e não diferenciam maiúsculas de minúsculas.",
          "Variáveis são declaradas com a palavra-chave let como no JavaScript.",
          "Não é permitido usar números no nome de variáveis PHP."
        ],
        "correta": 0,
        "dica": "Ex.: $nomeUsuario != $nomeusuario.",
        "explicacao": "No PHP, variáveis começam com $ e são case-sensitive."
      },
      {
        "topico": "PHP — Estruturas de Repetição",
        "pergunta": "Qual estrutura de repetição é apontada como a escolha padrão e mais eficiente para iterar coleções e arrays no PHP?",
        "opcoes": [
          "A estrutura de repetição foreach.",
          "A instrução switch-case.",
          "O comando TRUNCATE.",
          "A tag <section>."
        ],
        "correta": 0,
        "dica": "Percorre cada chave/valor do array diretamente.",
        "explicacao": "O laço foreach é projetado especificamente para percorrer arrays e coleções no PHP de forma limpa."
      },
      {
        "topico": "JavaScript — DOM",
        "pergunta": "Como o Document Object Model (DOM) representa um documento HTML no desenvolvimento client-side?",
        "opcoes": [
          "Como uma estrutura em árvore composta por nós e objetos programáveis, permitindo alterar dinamicamente a interface e validar entradas.",
          "Como uma tabela relacional armazenada no servidor.",
          "Como um protocolo de rede da camada física.",
          "Como um arquivo binário não editável."
        ],
        "correta": 0,
        "dica": "Árvore de nós manipulada pelo JavaScript no navegador.",
        "explicacao": "O DOM modela o HTML como uma árvore de objetos acessível e modificável via JavaScript."
      },
      {
        "topico": "JavaScript — Recursividade",
        "pergunta": "Qual é a utilidade das funções recursivas no contexto de validação de formulários em JavaScript?",
        "opcoes": [
          "Encadear validações repetitivas, invocando a si mesmas até que o usuário forneça dados válidos que satisfaçam a condição de parada.",
          "Apagar o histórico do navegador automaticamente.",
          "Substituir o servidor Apache/Nginx.",
          "Criar conexões TCP sem porta."
        ],
        "correta": 0,
        "dica": "Função que chama a si mesma até atingir a condição válida.",
        "explicacao": "A recursividade repete a verificação de entrada até que o critério válido interrompa o ciclo."
      },
      {
        "topico": "PHP e PDO — Portabilidade",
        "pergunta": "Quais SGBDs podem ser operados com PDO e qual grande facilidade ele proporciona na arquitetura do sistema?",
        "opcoes": [
          "Opera múltiplos SGBDs (MySQL, PostgreSQL, SQLite) e simplifica a migração entre eles sem precisar reescrever chamadas estruturais da aplicação.",
          "Funciona exclusivamente com arquivos Excel (.xlsx).",
          "Exige reescrever todo o HTML quando o banco muda.",
          "Funciona apenas sem senha e sem autenticação."
        ],
        "correta": 0,
        "dica": "Camada de abstração de acesso a dados em PHP.",
        "explicacao": "O PDO abstrai a conexão com vários SGBDs relacionais, aumentando portabilidade e segurança."
      },
      {
        "topico": "Formulários HTML — FormSubmit",
        "pergunta": "Qual serviço externo permite enviar e-mails diretamente pelo formulário HTML sem precisar programar um backend?",
        "opcoes": [
          "FormSubmit (informando o e-mail no atributo action e confirmando o e-mail de ativação no primeiro envio).",
          "Live Server.",
          "PostgreSQL.",
          "Wireshark."
        ],
        "correta": 0,
        "dica": "Inclui recurso de input oculto _next para Thank You Page.",
        "explicacao": "O FormSubmit recebe submissões de formulários HTML estáticos e encaminha por e-mail após ativação."
      },
      {
        "topico": "Ambiente Dev — Live Server",
        "pergunta": "Qual extensão do editor de código cria um servidor local e atualiza a página automaticamente ao salvar (Ctrl + S)?",
        "opcoes": [
          "Live Server.",
          "pgAdmin 4.",
          "Packet Tracer.",
          "PuTTY."
        ],
        "correta": 0,
        "dica": "Recarregamento automático (live reload) no navegador.",
        "explicacao": "A extensão Live Server sobe um servidor local de desenvolvimento com atualização instantânea."
      },
      {
        "topico": "Acessibilidade HTML — Label e Input",
        "pergunta": "Como deve ser feita a associação formal entre <label> e <input> para acessibilidade e usabilidade?",
        "opcoes": [
          "O atributo for da tag <label> deve ter o mesmo valor exato do atributo id do <input> correspondente.",
          "O atributo class do <label> deve ser igual ao placeholder do <input>.",
          "Basta colocar o <label> no rodapé da página.",
          "Usa-se o atributo href no <input>."
        ],
        "correta": 0,
        "dica": "for='email' ligado a id='email'.",
        "explicacao": "A correspondência for ↔ id vincula o rótulo ao campo para leitores de tela e amplia a área de clique."
      },
      {
        "topico": "HTML5 — Navegação e Links",
        "pergunta": "Qual tag estrutura a barra de navegação principal e qual é a função de target='_blank' com rel='noopener noreferrer'?",
        "opcoes": [
          "<nav> estrutura a barra de navegação; target='_blank' abre em nova aba e rel='noopener noreferrer' protege contra acesso ao objeto window da página original.",
          "<footer> cria a barra superior e rel='noopener' bloqueia o CSS.",
          "<nav> cria tabelas e target='_blank' fecha o navegador.",
          "São tags exclusivas de PHP."
        ],
        "correta": 0,
        "dica": "Semântica de navegação + segurança em links externos.",
        "explicacao": "<nav> marca links de navegação e rel='noopener noreferrer' evita vulnerabilidades de tabnabbing."
      },
      {
        "topico": "CSS — Flexbox",
        "pergunta": "No CSS, quais propriedades Flexbox alinham elementos filhos lado a lado e os centralizam tanto horizontal quanto verticalmente?",
        "opcoes": [
          "display: flex; justify-content: center; align-items: center;",
          "display: block; float: left; text-align: right;",
          "position: fixed; top: 0; left: 0;",
          "display: none; visibility: hidden;"
        ],
        "correta": 0,
        "dica": "justify-content (eixo principal) e align-items (eixo transversal).",
        "explicacao": "display: flex ativa o Flexbox; justify-content centraliza na horizontal e align-items na vertical."
      },
      {
        "topico": "HTML e CSS — Conexão e Seletor Descendente",
        "pergunta": "Como conectar um arquivo index.css no <head> do HTML e qual a vantagem de usar o seletor 'header img' em vez de 'img' global?",
        "opcoes": [
          "Usa-se <link rel='stylesheet' href='index.css'>; o seletor 'header img' aplica estilo apenas às imagens dentro do cabeçalho sem afetar ícones do rodapé.",
          "Usa-se <script src='index.css'>; 'header img' apaga todas as imagens da página.",
          "Usa-se <style href='index.css'>; não há diferença entre os seletores.",
          "CSS é importado dentro da tag <footer>."
        ],
        "correta": 0,
        "dica": "Especificidade de seletor evita efeitos colaterais globais.",
        "explicacao": "<link rel='stylesheet'> importa o CSS e 'header img' restringe a regra aos descendentes de <header>."
      },
      {
        "topico": "CSS — Pseudo-classe :hover",
        "pergunta": "Qual pseudo-classe CSS altera a aparência de um link do menu (nav a) quando o usuário passa o cursor do mouse sobre ele?",
        "opcoes": [
          ":hover (ex.: nav a:hover).",
          ":focus-within.",
          ":first-child.",
          ":disabled."
        ],
        "correta": 0,
        "dica": "Ativada ao sobrepor o ponteiro do mouse.",
        "explicacao": "A pseudo-classe :hover aplica estilos dinâmicos durante o movimento do mouse sobre o elemento."
      },
      {
        "topico": "HTML5 Semântico e DOCTYPE",
        "pergunta": "Qual é a função de <!DOCTYPE html> na primeira linha e o objetivo das tags semânticas (<main>, <article>, <section>)?",
        "opcoes": [
          "<!DOCTYPE html> ativa o padrão moderno HTML5 evitando Quirks Mode; tags semânticas dão significado ao conteúdo para SEO e leitores de tela.",
          "<!DOCTYPE html> importa o JavaScript; tags semânticas servem apenas para mudar cores.",
          "<!DOCTYPE html> conecta ao MySQL; tags semânticas substituem o CSS.",
          "São comentários ignorados pelo navegador."
        ],
        "correta": 0,
        "dica": "Padrão de renderização + significado estrutural.",
        "explicacao": "DOCTYPE previne o modo de compatibilidade antigo e a semântica melhora acessibilidade e indexação."
      },
      {
        "topico": "Front-End vs Back-End",
        "pergunta": "Quais são os três pilares do Front-End e por que a camada de Back-End é indispensável?",
        "opcoes": [
          "Front-End: HTML (estrutura), CSS (estilo) e JS (comportamento). Back-End centraliza persistência segura em banco, protege credenciais e executa regras no servidor.",
          "Front-End: SQL, PHP e Linux. Back-End cuida apenas da cor dos botões.",
          "Não existe diferença entre execução no navegador e no servidor.",
          "Back-End roda dentro do arquivo CSS."
        ],
        "correta": 0,
        "dica": "Cliente (interface) vs Servidor (lógica e segurança).",
        "explicacao": "O navegador é exposto ao usuário; por isso segurança, banco de dados e regras críticas ficam no Back-End."
      },
      {
        "topico": "HTML5 — Validação e ARIA",
        "pergunta": "Qual é a função dos atributos required, pattern e aria-label em elementos HTML5?",
        "opcoes": [
          "required torna o campo obrigatório; pattern valida formato via expressão regular (Regex); aria-label fornece nome acessível para leitores de tela.",
          "required apaga o campo; pattern cria tabelas; aria-label envia e-mails.",
          "Todos servem para conectar ao PostgreSQL.",
          "São atributos exclusivos da tag <head>."
        ],
        "correta": 0,
        "dica": "Obrigatoriedade, Regex e Acessibilidade ARIA.",
        "explicacao": "required exige preenchimento, pattern valida máscaras via Regex e aria-label melhora acessibilidade."
      },
      {
        "topico": "Arquitetura Web e HTTP GET",
        "pergunta": "Quais são as quatro camadas de uma arquitetura web desacoplada e por que HTTP GET é perigoso para dados sensíveis?",
        "opcoes": [
          "Cliente, Servidor Web, Servidor de Aplicação e Banco de Dados. O GET anexa dados na URL (query string), expondo senhas no histórico, logs e proxies.",
          "HTML, CSS, JS e SQL. O GET criptografa os dados na URL.",
          "Roteador, Switch, Cabo e Placa. O GET não funciona em formulários.",
          "Cliente e Monitor apenas."
        ],
        "correta": 0,
        "dica": "Dados no GET ficam visíveis na barra de endereços.",
        "explicacao": "Parâmetros GET ficam expostos na URL e registrados em logs; dados sensíveis devem usar POST sobre HTTPS."
      },
      {
        "topico": "DOM e Tabelas HTML",
        "pergunta": "O que ocorre ao chamar document.getElementById() com IDs duplicados no HTML e quais tags montam uma tabela básica?",
        "opcoes": [
          "getElementById retorna apenas a primeira ocorrência no DOM; tabelas usam <table>, <tr> (linha), <th> (cabeçalho) e <td> (célula de dado).",
          "getElementById apaga toda a página; tabelas usam apenas <div> e <span>.",
          "getElementById retorna todas as ocorrências em um array; tabelas usam <nav> e <ul>.",
          "O navegador trava imediatamente."
        ],
        "correta": 0,
        "dica": "IDs devem ser únicos; table -> tr -> th/td.",
        "explicacao": "Por tolerância a falhas, getElementById devolve o primeiro nó encontrado; tabelas estruturam-se com table, tr, th e td."
      },
      {
        "topico": "JavaScript — Manipulação de Texto",
        "pergunta": "Em JavaScript, qual é a sintaxe correta para selecionar um elemento pelo seu id e alterar o seu texto interno dinamicamente?",
        "opcoes": [
          "document.getElementById('id-do-elemento').textContent = 'Novo texto'; (ou .innerText).",
          "document.selectClass('id-do-elemento').css = 'Novo texto';",
          "window.alterarHtml('id-do-elemento');",
          "SELECT text FROM document WHERE id = 'id-do-elemento';"
        ],
        "correta": 0,
        "dica": "getElementById + textContent ou innerText.",
        "explicacao": "Usa-se document.getElementById('id') combinado com .textContent ou .innerText."
      },
      {
        "topico": "CSS — Classes Específicas vs Tag Global",
        "pergunta": "Qual é a vantagem de criar uma classe específica (como .contact-form) para estilizar elementos em vez de aplicar regras diretamente na tag global input?",
        "opcoes": [
          "Restringe a estilização apenas àquele formulário específico, evitando afetar outros inputs em outras áreas ou páginas do site.",
          "Faz o formulário enviar e-mails sem internet.",
          "Apaga todos os outros inputs da página.",
          "Não há diferença entre seletor de classe e seletor de tag."
        ],
        "correta": 0,
        "dica": "Evita vazar estilos para toda a aplicação.",
        "explicacao": "Classes específicas garantem escopo controlado de estilização."
      },
      {
        "topico": "FormSubmit — Ativação e Thank You Page",
        "pergunta": "O que acontece no primeiro envio de teste com FormSubmit e como implementar uma página de agradecimento personalizada?",
        "opcoes": [
          "O serviço envia um e-mail de ativação para confirmar o endereço; a página de agradecimento é configurada com <input type='hidden' name='_next' value='...'>.",
          "O formulário é apagado após o primeiro envio.",
          "Usa-se a tag <table> para redirecionar o usuário.",
          "Não é possível redirecionar após o envio."
        ],
        "correta": 0,
        "dica": "Ativação por e-mail + campo oculto _next.",
        "explicacao": "A ativação previne spam e o campo _next define a URL de redirecionamento pós-envio."
      },
      {
        "topico": "CSS — Alinhamento de Lista Horizontal",
        "pergunta": "No arquivo index.css, quais propriedades aplicadas à tag <ul> alinham os itens do menu lado a lado e os distribuem uniformemente?",
        "opcoes": [
          "display: flex; e justify-content: space-between;",
          "display: inline; e color: red;",
          "float: none; e margin: 0;",
          "position: absolute; e z-index: 1;"
        ],
        "correta": 0,
        "dica": "Flexbox com espaçamento igual entre itens.",
        "explicacao": "display: flex coloca em linha e justify-content: space-between distribui o espaço entre os itens."
      },
      {
        "topico": "HTTP — Ciclo Request/Response",
        "pergunta": "Como opera o ciclo de Requisição e Resposta (Request/Response) na arquitetura cliente-servidor mediada pelo HTTP?",
        "opcoes": [
          "O cliente envia uma requisição solicitando um recurso; o servidor processa a lógica e devolve uma resposta com código de status e o conteúdo.",
          "O servidor envia páginas aleatórias sem o cliente pedir.",
          "O navegador executa SQL diretamente no disco do servidor sem HTTP.",
          "Request e Response ocorrem apenas na camada física."
        ],
        "correta": 0,
        "dica": "Cliente pede (Request) -> Servidor responde (Response).",
        "explicacao": "Toda navegação web baseia-se no modelo requisição-resposta HTTP."
      },
      {
        "topico": "Servidor Web — Estático vs Dinâmico",
        "pergunta": "Qual é a diferença no tratamento de requisições de arquivos estáticos versus recursos dinâmicos pelo servidor web?",
        "opcoes": [
          "Arquivos estáticos (HTML, CSS, imagens) são devolvidos diretamente do disco; recursos dinâmicos exigem processamento no backend e consulta a banco de dados.",
          "Arquivos estáticos exigem consulta SQL e dinâmicos não usam servidor.",
          "Não existe diferença no processamento.",
          "Recursos dinâmicos são enviados apenas via FTP."
        ],
        "correta": 0,
        "dica": "Entrega direta vs processamento server-side.",
        "explicacao": "Conteúdo dinâmico é gerado sob demanda pelo backend antes de ser enviado ao cliente."
      },
      {
        "topico": "HTML5 — Input de E-mail Obrigatório",
        "pergunta": "Como criar um campo de entrada em HTML5 que seja obrigatório e valide automaticamente o formato de um endereço de e-mail?",
        "opcoes": [
          "<input type='email' required>",
          "<input type='text' email='true'>",
          "<email mandatory>",
          "<input type='password' valid>"
        ],
        "correta": 0,
        "dica": "Tipo semântico email + atributo booleano required.",
        "explicacao": "O navegador valida nativamente a sintaxe de e-mail quando type='email' e required são usados."
      },
      {
        "topico": "Formulários e HTML5",
        "pergunta": "Qual ferramenta ou serviço externo é utilizado no vídeo para permitir o envio de e-mails diretamente pelo HTML, sem a necessidade de programar um backend ou integração complexa?",
        "opcoes": [
          "É utilizado o FormSubmit, que permite receber os e-mails informando apenas o seu endereço de e-mail no atributo do formulário.",
          "Restringe a estilização apenas àquele formulário específico, evitando afetar outros inputs em outras áreas ou páginas do site.",
          "Utiliza-se a tag <input> definindo o atributo type=\"email\" (que valida o formato automaticamente) e o atributo booleano required.",
          "Toda variável inicia com cifrão ($) e a linguagem diferencia estritamente letras maiúsculas de minúsculas (case-sensitive)."
        ],
        "correta": 0,
        "dica": "Revise o tópico de Formulários e HTML5.",
        "explicacao": "É utilizado o FormSubmit, que permite receber os e-mails informando apenas o seu endereço de e-mail no atributo do formulário."
      },
      {
        "topico": "Formulários e HTML5",
        "pergunta": "Como deve ser feita a correta associação entre a tag <label> e a tag <input> para acessibilidade e identificação correta dos campos do formulário?",
        "opcoes": [
          "O atributo for da tag <label> deve possuir o mesmo valor exato que o atributo id do <input> correspondente (por exemplo, for=\"email\" ligado a id=\"email\").",
          "Usa-se <link rel='stylesheet' href='index.css'>; o seletor 'header img' aplica estilo apenas às imagens dentro do cabeçalho sem afetar ícones do rodapé.",
          "O serviço envia um e-mail de ativação para confirmar o endereço; a página de agradecimento é configurada com <input type='hidden' name='_next' value='...'>.",
          "Arquivos estáticos (HTML, CSS, imagens) são devolvidos diretamente do disco; recursos dinâmicos exigem processamento no backend e consulta a banco de dados."
        ],
        "correta": 0,
        "dica": "Revise o tópico de Formulários e HTML5.",
        "explicacao": "O atributo for da tag <label> deve possuir o mesmo valor exato que o atributo id do <input> correspondente (por exemplo, for=\"email\" ligado a id=\"email\")."
      },
      {
        "topico": "Formulários e HTML5",
        "pergunta": "O que acontece logo após o primeiro envio de teste realizado no formulário recém-criado através do FormSubmit?",
        "opcoes": [
          "O serviço envia um e-mail de ativação para o endereço cadastrado (activation), exigindo que você clique para confirmar e ativar o formulário, garantindo segurança contra spam.",
          "Simplifica a migração entre diferentes SGBDs sem a necessidade de reescrever chamadas estruturais do código da aplicação, reforçando a portabilidade e a segurança do software.",
          "Atribuir um nome acessível e legível por leitores de tela a elementos interativos que não possuem texto visível explícito no layout (como botões formados apenas por ícones).",
          "Permitir separar rigidamente a estrutura do código SQL dos dados fornecidos pelo usuário, tratando as entradas exclusivamente como valores literais e prevenindo injeções de SQL."
        ],
        "correta": 0,
        "dica": "Revise o tópico de Formulários e HTML5.",
        "explicacao": "O serviço envia um e-mail de ativação para o endereço cadastrado (activation), exigindo que você clique para confirmar e ativar o formulário, garantindo segurança contra spam."
      },
      {
        "topico": "Formulários e HTML5",
        "pergunta": "Como é implementada uma página de agradecimento personalizada (Thank You Page) para onde o usuário é redirecionado após enviar o formulário com sucesso?",
        "opcoes": [
          "Adicionando um input oculto (<input type=\"hidden\" name=\"_next\" value=\"...\">) contendo o link da página de agradecimento correspondente.",
          "Toda variável é iniciada com o caractere de cifrão ($) e a linguagem segue estritamente a diferenciação entre maiúsculas e minúsculas.",
          "Como uma estrutura em árvore composta por nós e objetos programáveis, permitindo alterar dinamicamente a interface e validar entradas.",
          "getElementById retorna apenas a primeira ocorrência no DOM; tabelas usam <table>, <tr> (linha), <th> (cabeçalho) e <td> (célula de dado)."
        ],
        "correta": 0,
        "dica": "Revise o tópico de Formulários e HTML5.",
        "explicacao": "Adicionando um input oculto (<input type=\"hidden\" name=\"_next\" value=\"...\">) contendo o link da página de agradecimento correspondente."
      },
      {
        "topico": "CSS e Layout",
        "pergunta": "Qual elemento HTML é utilizado para estruturar a barra de navegação principal (navbar) no código do site?",
        "opcoes": [
          "O elemento <nav>, que envolve a lista não ordenada (<ul>) com os links de navegação.",
          "O sistema fica exposto a manipulações maliciosas na instrução SQL (SQL Injection).",
          "document.getElementById('id-do-elemento').textContent = 'Novo texto'; (ou .innerText).",
          "Múltiplos sistemas gerenciadores de banco de dados, tais como MySQL, PostgreSQL e SQLite."
        ],
        "correta": 0,
        "dica": "Revise o tópico de CSS e Layout.",
        "explicacao": "O elemento <nav>, que envolve a lista não ordenada (<ul>) com os links de navegação."
      },
      {
        "topico": "CSS e Layout",
        "pergunta": "Como é feita a conexão entre o documento HTML e a folha de estilos index.css?",
        "opcoes": [
          "Através da tag <link> inserida dentro do <head> do HTML, utilizando os atributos rel=\"stylesheet\" (que indica a relação de folha de estilos) e href=\"index.css\" (que aponta para o arquivo correspondente).",
          "Representam uma técnica estruturada para encadear validações repetitivas, invocando a si mesmas continuamente até que o usuário forneça dados válidos que satisfaçam a condição final de interrupção do laço.",
          "Conferir significado explícito ao conteúdo, permitindo que mecanismos de busca (algoritmos de SEO) e tecnologias assistivas (leitores de tela) interpretem com precisão a estrutura e a hierarquia do documento.",
          "São indicados por um ponto (.) antes do nome do seletor e permitem aplicar regras de estilo a múltiplos elementos HTML simultaneamente, assegurando um código mais limpo, sustentável e com manutenção simplificada."
        ],
        "correta": 0,
        "dica": "Revise o tópico de CSS e Layout.",
        "explicacao": "Através da tag <link> inserida dentro do <head> do HTML, utilizando os atributos rel=\"stylesheet\" (que indica a relação de folha de estilos) e href=\"index.css\" (que aponta para o arquivo correspondente)."
      },
      {
        "topico": "CSS e Layout",
        "pergunta": "No arquivo CSS, qual é a diferença prática entre estilizar a tag img de forma global e utilizar o seletor específico header img?",
        "opcoes": [
          "O uso de header img (seletor descendente) garante que as regras de estilização — como a largura de 150px, o formato circular (border-radius: 50%) e a borda verde — sejam aplicadas exclusivamente à foto de perfil dentro do cabeçalho, impedindo que os ícones do rodapé recebam formatações indesejadas.",
          "Arquivos estáticos (como imagens e CSS) são simplesmente localizados e devolvidos ao cliente, enquanto recursos dinâmicos exigem que o servidor repasse a execução a um interpretador de backend para processar regras de negócio, consultar o banco de dados e gerar a resposta dinamicamente.",
          "O Front-End foca no lado do cliente (HTML, CSS, JavaScript, frameworks de interface, UX/UI, acessibilidade e performance no navegador), enquanto o Back-End foca no lado do servidor (linguagens server-side, segurança, modelagem de dados, escalabilidade e desenvolvimento de APIs).",
          "O cliente (navegador/Front-End) envia mensagens de requisição solicitando recursos ou ações, enquanto o servidor (Back-End) intercepta o pedido, processa a lógica de negócios e os dados, e devolve uma resposta contendo o status e os dados ou marcação prontos para renderização."
        ],
        "correta": 0,
        "dica": "Revise o tópico de CSS e Layout.",
        "explicacao": "O uso de header img (seletor descendente) garante que as regras de estilização — como a largura de 150px, o formato circular (border-radius: 50%) e a borda verde — sejam aplicadas exclusivamente à foto de perfil dentro do cabeçalho, impedindo que os ícones do rodapé recebam formatações indesejadas."
      },
      {
        "topico": "HTML Semântico e Arquitetura",
        "pergunta": "Qual é a finalidade dos atributos target=\"_blank\" e rel=\"noopener noreferrer\" presentes nos links de redes sociais no rodapé (<footer>)?",
        "opcoes": [
          "O target=\"_blank\" faz com que o link seja aberto em uma nova aba do navegador, enquanto o rel=\"noopener noreferrer\" é uma diretiva de segurança e desempenho que impede que a nova página aberta tenha acesso ao objeto window da página original.",
          "Porque o navegador do cliente é um ambiente exposto a inspeções; o Back-End centraliza a persistência segura em bancos de dados, protege dados sensíveis (senhas, tokens e chaves) e executa a lógica de negócios da aplicação no servidor.",
          "A Chave Primária é um atributo exclusivo que identifica de forma única cada registro em uma tabela, enquanto a Chave Estrangeira é um campo em uma tabela que aponta para a chave primária de outra tabela, estabelecendo o vínculo relacional entre elas.",
          "Informar ao motor de renderização do navegador que o documento utiliza o padrão moderno do HTML5, evitando que o navegador entre em modo de compatibilidade retrógrada (Quirks Mode) e apresente falhas graves de exibição e layout."
        ],
        "correta": 0,
        "dica": "Revise o tópico de HTML Semântico e Arquitetura.",
        "explicacao": "O target=\"_blank\" faz com que o link seja aberto em uma nova aba do navegador, enquanto o rel=\"noopener noreferrer\" é uma diretiva de segurança e desempenho que impede que a nova página aberta tenha acesso ao objeto window da página original."
      },
      {
        "topico": "HTML Semântico e Arquitetura",
        "pergunta": "Qual é o principal propósito da introdução de elementos semânticos no HTML5 (como <main>, <article> e <section>) em substituição ao uso indiscriminado de blocos genéricos como <div>?",
        "opcoes": [
          "Conferir significado explícito ao conteúdo, permitindo que mecanismos de busca (algoritmos de SEO) e tecnologias assistivas (leitores de tela) interpretem com precisão a estrutura e a hierarquia do documento.",
          "Representam uma técnica estruturada para encadear validações repetitivas, invocando a si mesmas continuamente até que o usuário forneça dados válidos que satisfaçam a condição final de interrupção do laço.",
          "São indicados por um ponto (.) antes do nome do seletor e permitem aplicar regras de estilo a múltiplos elementos HTML simultaneamente, assegurando um código mais limpo, sustentável e com manutenção simplificada.",
          "Através da tag <link> inserida dentro do <head> do HTML, utilizando os atributos rel=\"stylesheet\" (que indica a relação de folha de estilos) e href=\"index.css\" (que aponta para o arquivo correspondente)."
        ],
        "correta": 0,
        "dica": "Revise o tópico de HTML Semântico e Arquitetura.",
        "explicacao": "Conferir significado explícito ao conteúdo, permitindo que mecanismos de busca (algoritmos de SEO) e tecnologias assistivas (leitores de tela) interpretem com precisão a estrutura e a hierarquia do documento."
      },
      {
        "topico": "HTML Semântico e Arquitetura",
        "pergunta": "Qual é a função da declaração obrigatória <!DOCTYPE html> inserida na primeira linha de um documento web?",
        "opcoes": [
          "Informar ao motor de renderização do navegador que o documento utiliza o padrão moderno do HTML5, evitando que o navegador entre em modo de compatibilidade retrógrada (Quirks Mode) e apresente falhas graves de exibição e layout.",
          "O HTML (responsável pela estrutura e significado), o CSS (responsável pela estética, apresentação visual e layouts responsivos) e o JavaScript (responsável pelo comportamento, interatividade e manipulação dinâmica do DOM).",
          "Porque o navegador do cliente é um ambiente exposto a inspeções; o Back-End centraliza a persistência segura em bancos de dados, protege dados sensíveis (senhas, tokens e chaves) e executa a lógica de negócios da aplicação no servidor.",
          "A estrutura é feita utilizando a tag <table> como contêiner principal, a tag <tr> (table row) para as linhas, a tag <th> (table header) para os títulos das colunas e a tag <td> (table data) para as células de conteúdo."
        ],
        "correta": 0,
        "dica": "Revise o tópico de HTML Semântico e Arquitetura.",
        "explicacao": "Informar ao motor de renderização do navegador que o documento utiliza o padrão moderno do HTML5, evitando que o navegador entre em modo de compatibilidade retrógrada (Quirks Mode) e apresente falhas graves de exibição e layout."
      },
      {
        "topico": "HTML Semântico e Arquitetura",
        "pergunta": "Qual tag HTML tradicional desempenha um papel crítico de usabilidade e acessibilidade ao rotular campos de entrada em formulários?",
        "opcoes": [
          "A tag <label>, que explicita o significado do campo para o usuário e amplia a área de interação.",
          "O atributo for da tag <label> deve ter o mesmo valor exato do atributo id do <input> correspondente.",
          "Múltiplos sistemas gerenciadores de banco de dados, tais como MySQL, PostgreSQL e SQLite.",
          "Utiliza-se a tag <link> com os atributos rel=\"stylesheet\" e href apontando para o caminho do arquivo CSS."
        ],
        "correta": 0,
        "dica": "Revise o tópico de HTML Semântico e Arquitetura.",
        "explicacao": "A tag <label>, que explicita o significado do campo para o usuário e amplia a área de interação."
      },
      {
        "topico": "HTML Semântico e Arquitetura",
        "pergunta": "Quais são os três pilares fundamentais do desenvolvimento Front-End e quais as responsabilidades gerais de cada um?",
        "opcoes": [
          "O HTML (responsável pela estrutura e significado), o CSS (responsável pela estética, apresentação visual e layouts responsivos) e o JavaScript (responsável pelo comportamento, interatividade e manipulação dinâmica do DOM).",
          "A estrutura é feita utilizando a tag <table> como contêiner principal, a tag <tr> (table row) para as linhas, a tag <th> (table header) para os títulos das colunas e a tag <td> (table data) para as células de conteúdo.",
          "Isso garante que as estilizações aplicadas fiquem restritas apenas àquele formulário de contato específico, evitando alterações indesejadas em outros inputs ou formulários que possam existir em outras páginas do site.",
          "Informar ao motor de renderização do navegador que o documento utiliza o padrão moderno do HTML5, evitando que o navegador entre em modo de compatibilidade retrógrada (Quirks Mode) e apresente falhas graves de exibição e layout."
        ],
        "correta": 0,
        "dica": "Revise o tópico de HTML Semântico e Arquitetura.",
        "explicacao": "O HTML (responsável pela estrutura e significado), o CSS (responsável pela estética, apresentação visual e layouts responsivos) e o JavaScript (responsável pelo comportamento, interatividade e manipulação dinâmica do DOM)."
      },
      {
        "topico": "HTML Semântico e Arquitetura",
        "pergunta": "Por que a camada de Back-End é indispensável em arquiteturas web em termos de segurança e persistência de dados?",
        "opcoes": [
          "Porque o navegador do cliente é um ambiente exposto a inspeções; o Back-End centraliza a persistência segura em bancos de dados, protege dados sensíveis (senhas, tokens e chaves) e executa a lógica de negócios da aplicação no servidor.",
          "O target=\"_blank\" faz com que o link seja aberto em uma nova aba do navegador, enquanto o rel=\"noopener noreferrer\" é uma diretiva de segurança e desempenho que impede que a nova página aberta tenha acesso ao objeto window da página original.",
          "Informar ao motor de renderização do navegador que o documento utiliza o padrão moderno do HTML5, evitando que o navegador entre em modo de compatibilidade retrógrada (Quirks Mode) e apresente falhas graves de exibição e layout.",
          "O HTML (responsável pela estrutura e significado), o CSS (responsável pela estética, apresentação visual e layouts responsivos) e o JavaScript (responsável pelo comportamento, interatividade e manipulação dinâmica do DOM)."
        ],
        "correta": 0,
        "dica": "Revise o tópico de HTML Semântico e Arquitetura.",
        "explicacao": "Porque o navegador do cliente é um ambiente exposto a inspeções; o Back-End centraliza a persistência segura em bancos de dados, protege dados sensíveis (senhas, tokens e chaves) e executa a lógica de negócios da aplicação no servidor."
      },
      {
        "topico": "HTML Semântico e Arquitetura",
        "pergunta": "Na modelagem relacional de banco de dados, qual é a diferença entre a Chave Primária (Primary Key) e a Chave Estrangeira (Foreign Key)?",
        "opcoes": [
          "A Chave Primária é um atributo exclusivo que identifica de forma única cada registro em uma tabela, enquanto a Chave Estrangeira é um campo em uma tabela que aponta para a chave primária de outra tabela, estabelecendo o vínculo relacional entre elas.",
          "O target=\"_blank\" faz com que o link seja aberto em uma nova aba do navegador, enquanto o rel=\"noopener noreferrer\" é uma diretiva de segurança e desempenho que impede que a nova página aberta tenha acesso ao objeto window da página original.",
          "Porque o método GET anexa os dados preenchidos diretamente na barra de endereços da URL como parâmetros de consulta (query strings), fazendo com que fiquem permanentemente registrados no histórico do navegador, arquivos de log do servidor e servidores proxy.",
          "Porque o navegador do cliente é um ambiente exposto a inspeções; o Back-End centraliza a persistência segura em bancos de dados, protege dados sensíveis (senhas, tokens e chaves) e executa a lógica de negócios da aplicação no servidor."
        ],
        "correta": 0,
        "dica": "Revise o tópico de HTML Semântico e Arquitetura.",
        "explicacao": "A Chave Primária é um atributo exclusivo que identifica de forma única cada registro em uma tabela, enquanto a Chave Estrangeira é um campo em uma tabela que aponta para a chave primária de outra tabela, estabelecendo o vínculo relacional entre elas."
      },
      {
        "topico": "HTML Semântico e Arquitetura",
        "pergunta": "Como deve ser realizada a associação formal entre uma tag <label> e um campo <input> para garantir suporte adequado a tecnologias assistivas?",
        "opcoes": [
          "Configurando o atributo for=\"\" no rótulo com o exato valor do atributo id=\"\" correspondente no campo de entrada.",
          "Utiliza-se o método document.getElementById('id-do-elemento') combinado com a propriedade .innerText ou .textContent.",
          "Garantir a separação entre a estrutura do documento (definida em HTML) e sua camada de apresentação visual.",
          "display: flex; para habilitar o layout flexível e justify-content: space-between; para espaçar os itens uniformemente."
        ],
        "correta": 0,
        "dica": "Revise o tópico de HTML Semântico e Arquitetura.",
        "explicacao": "Configurando o atributo for=\"\" no rótulo com o exato valor do atributo id=\"\" correspondente no campo de entrada."
      },
      {
        "topico": "HTML Semântico e Arquitetura",
        "pergunta": "Qual é a utilidade do atributo aria-label pertencente à especificação ARIA no HTML5?",
        "opcoes": [
          "Atribuir um nome acessível e legível por leitores de tela a elementos interativos que não possuem texto visível explícito no layout (como botões formados apenas por ícones).",
          "O serviço envia um e-mail de ativação para o endereço cadastrado (activation), exigindo que você clique para confirmar e ativar o formulário, garantindo segurança contra spam.",
          "Simplifica a migração entre diferentes SGBDs sem a necessidade de reescrever chamadas estruturais do código da aplicação, reforçando a portabilidade e a segurança do software.",
          "Permitir separar rigidamente a estrutura do código SQL dos dados fornecidos pelo usuário, tratando as entradas exclusivamente como valores literais e prevenindo injeções de SQL."
        ],
        "correta": 0,
        "dica": "Revise o tópico de HTML Semântico e Arquitetura.",
        "explicacao": "Atribuir um nome acessível e legível por leitores de tela a elementos interativos que não possuem texto visível explícito no layout (como botões formados apenas por ícones)."
      },
      {
        "topico": "HTML Semântico e Arquitetura",
        "pergunta": "Quais são os focos de atuação distintos entre um desenvolvedor Front-End e um desenvolvedor Back- End?",
        "opcoes": [
          "O Front-End foca no lado do cliente (HTML, CSS, JavaScript, frameworks de interface, UX/UI, acessibilidade e performance no navegador), enquanto o Back-End foca no lado do servidor (linguagens server-side, segurança, modelagem de dados, escalabilidade e desenvolvimento de APIs).",
          "O cliente (navegador/Front-End) envia mensagens de requisição solicitando recursos ou ações, enquanto o servidor (Back-End) intercepta o pedido, processa a lógica de negócios e os dados, e devolve uma resposta contendo o status e os dados ou marcação prontos para renderização.",
          "Arquivos estáticos (como imagens e CSS) são simplesmente localizados e devolvidos ao cliente, enquanto recursos dinâmicos exigem que o servidor repasse a execução a um interpretador de backend para processar regras de negócio, consultar o banco de dados e gerar a resposta dinamicamente.",
          "O uso de header img (seletor descendente) garante que as regras de estilização — como a largura de 150px, o formato circular (border-radius: 50%) e a borda verde — sejam aplicadas exclusivamente à foto de perfil dentro do cabeçalho, impedindo que os ícones do rodapé recebam formatações indesejadas."
        ],
        "correta": 0,
        "dica": "Revise o tópico de HTML Semântico e Arquitetura.",
        "explicacao": "O Front-End foca no lado do cliente (HTML, CSS, JavaScript, frameworks de interface, UX/UI, acessibilidade e performance no navegador), enquanto o Back-End foca no lado do servidor (linguagens server-side, segurança, modelagem de dados, escalabilidade e desenvolvimento de APIs)."
      },
      {
        "topico": "HTML Semântico e Arquitetura",
        "pergunta": "Qual atributo booleano do HTML5 torna obrigatório o preenchimento de um campo de formulário antes de permitir a submissão?",
        "opcoes": [
          "O atributo required.",
          "A extensão Live Server.",
          ":hover (ex.: nav a:hover).",
          "<input type='email' required>"
        ],
        "correta": 0,
        "dica": "Revise o tópico de HTML Semântico e Arquitetura.",
        "explicacao": "O atributo required."
      },
      {
        "topico": "HTML Semântico e Arquitetura",
        "pergunta": "Para validar dados textuais que precisam obedecer a um formato de máscara rígido (como um telefone no formato DDD-9XXXX-XXXX), qual atributo avançado o HTML5 disponibiliza no <input>?",
        "opcoes": [
          "O atributo pattern, que aceita uma expressão regular (Regex) testada pelo navegador antes de autorizar o envio dos dados.",
          "Toda variável inicia com cifrão ($) e a linguagem diferencia estritamente letras maiúsculas de minúsculas (case-sensitive).",
          "display: flex; para habilitar o layout flexível e justify-content: space-between; para espaçar os itens uniformemente.",
          "Utiliza-se o método document.getElementById('id-do-elemento') combinado com a propriedade .innerText ou .textContent."
        ],
        "correta": 0,
        "dica": "Revise o tópico de HTML Semântico e Arquitetura.",
        "explicacao": "O atributo pattern, que aceita uma expressão regular (Regex) testada pelo navegador antes de autorizar o envio dos dados."
      },
      {
        "topico": "HTML Semântico e Arquitetura",
        "pergunta": "O que ocorre quando o JavaScript executa métodos de seleção baseados em identificadores únicos (como document.getElementById()) em um documento HTML com duplicidade de id?",
        "opcoes": [
          "O navegador retorna apenas a primeira ocorrência localizada no escaneamento da árvore do DOM, ignorando as demais, sem interromper a renderização devido à tolerância a falhas da web.",
          "Aplica-se a propriedade display: flex; para habilitar o Flexbox, justify-content: center; para centralizar no eixo horizontal e align-items: center; para centralizar no eixo vertical.",
          "A camada de Cliente (navegador), a camada do Servidor Web de Apresentação, a camada do Servidor de Aplicação (lógica de negócios) e a camada do Servidor de Banco de Dados (persistência).",
          "Permitir separar rigidamente a estrutura do código SQL dos dados fornecidos pelo usuário, tratando as entradas exclusivamente como valores literais e prevenindo injeções de SQL."
        ],
        "correta": 0,
        "dica": "Revise o tópico de HTML Semântico e Arquitetura.",
        "explicacao": "O navegador retorna apenas a primeira ocorrência localizada no escaneamento da árvore do DOM, ignorando as demais, sem interromper a renderização devido à tolerância a falhas da web."
      },
      {
        "topico": "HTML Semântico e Arquitetura",
        "pergunta": "Quais são as quatro camadas distintas que estruturam uma arquitetura web moderna desacoplada?",
        "opcoes": [
          "A camada de Cliente (navegador), a camada do Servidor Web de Apresentação, a camada do Servidor de Aplicação (lógica de negócios) e a camada do Servidor de Banco de Dados (persistência).",
          "Aplica-se a propriedade display: flex; para habilitar o Flexbox, justify-content: center; para centralizar no eixo horizontal e align-items: center; para centralizar no eixo vertical.",
          "O navegador retorna apenas a primeira ocorrência localizada no escaneamento da árvore do DOM, ignorando as demais, sem interromper a renderização devido à tolerância a falhas da web.",
          "Permitir separar rigidamente a estrutura do código SQL dos dados fornecidos pelo usuário, tratando as entradas exclusivamente como valores literais e prevenindo injeções de SQL."
        ],
        "correta": 0,
        "dica": "Revise o tópico de HTML Semântico e Arquitetura.",
        "explicacao": "A camada de Cliente (navegador), a camada do Servidor Web de Apresentação, a camada do Servidor de Aplicação (lógica de negócios) e a camada do Servidor de Banco de Dados (persistência)."
      },
      {
        "topico": "HTML Semântico e Arquitetura",
        "pergunta": "Por que o método HTTP GET é inadequado e perigoso para o envio de dados sensíveis em formulários web?",
        "opcoes": [
          "Porque o método GET anexa os dados preenchidos diretamente na barra de endereços da URL como parâmetros de consulta (query strings), fazendo com que fiquem permanentemente registrados no histórico do navegador, arquivos de log do servidor e servidores proxy.",
          "A Chave Primária é um atributo exclusivo que identifica de forma única cada registro em uma tabela, enquanto a Chave Estrangeira é um campo em uma tabela que aponta para a chave primária de outra tabela, estabelecendo o vínculo relacional entre elas.",
          "O target=\"_blank\" faz com que o link seja aberto em uma nova aba do navegador, enquanto o rel=\"noopener noreferrer\" é uma diretiva de segurança e desempenho que impede que a nova página aberta tenha acesso ao objeto window da página original.",
          "O cliente (navegador/Front-End) envia mensagens de requisição solicitando recursos ou ações, enquanto o servidor (Back-End) intercepta o pedido, processa a lógica de negócios e os dados, e devolve uma resposta contendo o status e os dados ou marcação prontos para renderização."
        ],
        "correta": 0,
        "dica": "Revise o tópico de HTML Semântico e Arquitetura.",
        "explicacao": "Porque o método GET anexa os dados preenchidos diretamente na barra de endereços da URL como parâmetros de consulta (query strings), fazendo com que fiquem permanentemente registrados no histórico do navegador, arquivos de log do servidor e servidores proxy."
      },
      {
        "topico": "Tabelas, Flexbox e DOM",
        "pergunta": "Como estruturar uma tabela básica em HTML utilizando as tags corretas para a linha de cabeçalho e as linhas de dados?",
        "opcoes": [
          "A estrutura é feita utilizando a tag <table> como contêiner principal, a tag <tr> (table row) para as linhas, a tag <th> (table header) para os títulos das colunas e a tag <td> (table data) para as células de conteúdo.",
          "Isso garante que as estilizações aplicadas fiquem restritas apenas àquele formulário de contato específico, evitando alterações indesejadas em outros inputs ou formulários que possam existir em outras páginas do site.",
          "O HTML (responsável pela estrutura e significado), o CSS (responsável pela estética, apresentação visual e layouts responsivos) e o JavaScript (responsável pelo comportamento, interatividade e manipulação dinâmica do DOM).",
          "São indicados por um ponto (.) antes do nome do seletor e permitem aplicar regras de estilo a múltiplos elementos HTML simultaneamente, assegurando um código mais limpo, sustentável e com manutenção simplificada."
        ],
        "correta": 0,
        "dica": "Revise o tópico de Tabelas, Flexbox e DOM.",
        "explicacao": "A estrutura é feita utilizando a tag <table> como contêiner principal, a tag <tr> (table row) para as linhas, a tag <th> (table header) para os títulos das colunas e a tag <td> (table data) para as células de conteúdo."
      },
      {
        "topico": "Tabelas, Flexbox e DOM",
        "pergunta": "No CSS, como utilizar o modelo Flexbox para alinhar os elementos filhos horizontalmente lado a lado e centralizados tanto na horizontal quanto na vertical dentro de um contêiner?",
        "opcoes": [
          "Aplica-se a propriedade display: flex; para habilitar o Flexbox, justify-content: center; para centralizar no eixo horizontal e align-items: center; para centralizar no eixo vertical.",
          "O navegador retorna apenas a primeira ocorrência localizada no escaneamento da árvore do DOM, ignorando as demais, sem interromper a renderização devido à tolerância a falhas da web.",
          "A camada de Cliente (navegador), a camada do Servidor Web de Apresentação, a camada do Servidor de Aplicação (lógica de negócios) e a camada do Servidor de Banco de Dados (persistência).",
          "Permitir separar rigidamente a estrutura do código SQL dos dados fornecidos pelo usuário, tratando as entradas exclusivamente como valores literais e prevenindo injeções de SQL."
        ],
        "correta": 0,
        "dica": "Revise o tópico de Tabelas, Flexbox e DOM.",
        "explicacao": "Aplica-se a propriedade display: flex; para habilitar o Flexbox, justify-content: center; para centralizar no eixo horizontal e align-items: center; para centralizar no eixo vertical."
      },
      {
        "topico": "Tabelas, Flexbox e DOM",
        "pergunta": "Como fazer a importação de uma folha de estilos externa (index.css) dentro da seção de cabeçalho (<head>) de um arquivo HTML?",
        "opcoes": [
          "Utiliza-se a tag <link> com os atributos rel=\"stylesheet\" e href apontando para o caminho do arquivo CSS.",
          "FormSubmit (informando o e-mail no atributo action e confirmando o e-mail de ativação no primeiro envio).",
          "Garantir a separação entre a estrutura do documento (definida em HTML) e sua camada de apresentação visual.",
          "O atributo for da tag <label> deve ter o mesmo valor exato do atributo id do <input> correspondente."
        ],
        "correta": 0,
        "dica": "Revise o tópico de Tabelas, Flexbox e DOM.",
        "explicacao": "Utiliza-se a tag <link> com os atributos rel=\"stylesheet\" e href apontando para o caminho do arquivo CSS."
      },
      {
        "topico": "Banco de Dados e PDO",
        "pergunta": "Quais sistemas gerenciadores de banco de dados (SGBDs) podem ser operados de forma consistente utilizando o PDO?",
        "opcoes": [
          "Múltiplos sistemas gerenciadores de banco de dados, tais como MySQL, PostgreSQL e SQLite.",
          "document.getElementById('id-do-elemento').textContent = 'Novo texto'; (ou .innerText).",
          "O elemento <nav>, que envolve a lista não ordenada (<ul>) com os links de navegação.",
          "A tag <label>, que explicita o significado do campo para o usuário e amplia a área de interação."
        ],
        "correta": 0,
        "dica": "Revise o tópico de Banco de Dados e PDO.",
        "explicacao": "Múltiplos sistemas gerenciadores de banco de dados, tais como MySQL, PostgreSQL e SQLite."
      },
      {
        "topico": "Banco de Dados e PDO",
        "pergunta": "Além de padronizar comandos de leitura e escrita e substituir extensões legadas inseguras, qual outra grande facilidade o PDO proporciona?",
        "opcoes": [
          "Simplifica a migração entre diferentes SGBDs sem a necessidade de reescrever chamadas estruturais do código da aplicação, reforçando a portabilidade e a segurança do software.",
          "O serviço envia um e-mail de ativação para o endereço cadastrado (activation), exigindo que você clique para confirmar e ativar o formulário, garantindo segurança contra spam.",
          "Atribuir um nome acessível e legível por leitores de tela a elementos interativos que não possuem texto visível explícito no layout (como botões formados apenas por ícones).",
          "Permitir separar rigidamente a estrutura do código SQL dos dados fornecidos pelo usuário, tratando as entradas exclusivamente como valores literais e prevenindo injeções de SQL."
        ],
        "correta": 0,
        "dica": "Revise o tópico de Banco de Dados e PDO.",
        "explicacao": "Simplifica a migração entre diferentes SGBDs sem a necessidade de reescrever chamadas estruturais do código da aplicação, reforçando a portabilidade e a segurança do software."
      }
    ]
  }
];
