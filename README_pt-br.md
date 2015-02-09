Zapt App
========

Simples app PhoneGap para o grupo Zapt Arteatral (www.zaptarteatral.com.br).

# Planejamento / especificação

## Funcionalidades - Fase 1

O básico das funcionalidades estarão descritos aqui. O detalhamento, bem como o andamento, estarão nas "issues" do GitHub. O link para as respectivas issues estão na frente dos itens a seguir.

// TODO: criar issues no GitHub e linkar aqui

* Login "automático" baseado no número de celular (estilo WhatsApp)
* Super Admin:
  * Habilidade de definir qual(is) membros será(ão) admin
  * Todas as ações de um admin
* Admin:
  * CRUD (CReate, Update, Delete) de usuários
  * CRUD de notificações
  * Todas as ações dos coordenadores de área
* Coordenadores de área:
  * CRUD de tarefas ou atividades
  * Todas as ações dos demais usuários
* Demais membros:
  * Recebem notificações.

## Funcionalidades - Fase 2

* Definir imagens de templates e auto-gerá-las (ex: lanche da semana)
* Confirmação de recebimento/leitura das notificações
* Texto rico nas notificações (negrito, itálico, etc)
* Imagens e outros anexos nos eventos/tarefas

# Desenvolvimento

## Preparando o ambiente de desenvolvimento

Você precisará de: `git`, `node`, `npm` (vem com o Node), e dependendo da plataforma desejada, o SDK correspondente (veja abaixo):

1. Clone esse repositório
2. Rode: `npm i` (ou `npm install`)
3. Instale o cliente Browserify para conveniência: `npm i -g browserify`
4. Para o desenvolvmento Android, siga [estas instruções](http://docs.phonegap.com/en/edge/guide_platforms_android_index.md.html#Android%20Platform%20Guide).
5. Para o desenvolvmento iOS, siga [estas instruções](http://docs.phonegap.com/en/edge/guide_platforms_ios_index.md.html#iOS%20Platform%20Guide).

## Cordova - caminho de desenvolvimento

Cordova te permite escolher dois diferentes estilos de caminhos para desenvolver. O recomendado e adotado nesse projeto foi o `command line interface`.
Veja [aqui](http://docs.phonegap.com/en/edge/guide_overview_index.md.html#Overview) para uma explicação dos dois. Você pode optar pelo outro caminho, mas não tenho certeza das implicações / compatibilidade disso.

## Desenvolvendo

Configurei alguns commandos dentro da seção `scripts` no [package.json](package.json).
Estes lhe darão uma breve ideia de como construir / iniciar o projeto.

Todas as automações de tasks serão via `npm scripts`. Sem gulp, grunt e etc por enquanto.

## Convenções

* `resources/` → pasta onde recursos específicos de plataforma (por exemplo, ícones) são armazenados.
* Escrita do código: inglês.
* Fim de linha: padrão Unix (LF)
* Whitespaces:
  * Espaços e não tabs.
  * Sem "trailing whitespaces"
* Indentação: 4 espaços
* Codificação UTF-8 para tudo que possível

*Nota: já há um [`.editorconfig`](.editorconfig) disponível pra você.
