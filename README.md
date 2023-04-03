---
title: Workflow
description: Application created in order to control the company's workflow
tags:
  - React
  - Vite
  - Typescript
---

# FLUXO 

## Entrada de notas pelo Compras|Fiscal
---
title: Entrada de notas pelo Compras|Fiscal
obs: Pergunta se deseja seguir para o workflow ou não
sim: Vai para o Workflow
não: Gera um relatório que vai para a coordenação informando que um compromisso foi lançado
---

## Entrada de títuloa pelo Financeiro
---
title: Entrada de títuloa pelo Financeiro
obs: Pergunta se deseja seguir para o workflow ou não
sim: Vai para o Workflow
não: Gera um relatório que vai para a coordenação informando que um compromisso foi lançado
---

## Alçadas de Aprovação
---
fiscal: Aprova todos os Compromissos: Verifica coerência de naturezas, centro de custos e dados de atributos
Financeiro: Aprova todos os Compromissos: Verifica e acompanha o fluxo de caixas da empresa
Centro de Custos: Cada gestor aprova os seis compromissos entre: 0,01 até 20K
CEO: Aprova a partir de 20.000,01
Compromissos: Vão para o banco com antecedência de até 01 dia. Ex.: Hoje seguem para o banco compromissos de hoje de manhã (03 e 04 de abril)
CNAB: Os Títulos seguem como arquivo CNAB para o banco
---

# Vite
This example utilises vite for static site generation

[[Access Deploy]](https://workflow-app-production.up.railway.app/)

## Participants

[<img src="https://avatars.githubusercontent.com/u/69186374?v=4" width="75px;"/>](https://github.com/setxpro)

[Patrick Anjos](https://github.com/setxpro)

## ✨ Features

- Vite
- React
- Typescript

## 💁‍♀️ How to use

- Install dependencies `yarn`
- Connect to your Railway project `railway link`

## 📝 Notes

The project is directly derived from the standard creation with some extra configuration to make sure it is quick and easy.


# FLUXO 
---
title: Workflow
description: Application created in order to control the company's workflow
---

## Entrada de notas pelo Compras|Fiscal
---
title: Entrada de notas pelo Compras|Fiscal
obs: Pergunta se deseja seguir para o workflow ou não
sim: Vai para o Workflow
não: Gera um relatório que vai para a coordenação informando que um compromisso foi lançado
---

## Entrada de títuloa pelo Financeiro
---
title: Entrada de títuloa pelo Financeiro
obs: Pergunta se deseja seguir para o workflow ou não
sim: Vai para o Workflow
não: Gera um relatório que vai para a coordenação informando que um compromisso foi lançado
---

## Alçadas de Aprovação
---
fiscal: Aprova todos os Compromissos: Verifica coerência de naturezas, centro de custos e dados de atributos
Financeiro: Aprova todos os Compromissos: Verifica e acompanha o fluxo de caixas da empresa
Centro de Custos: Cada gestor aprova os seis compromissos entre: 0,01 até 20K
CEO: Aprova a partir de 20.000,01
Compromissos: Vão para o banco com antecedência de até 01 dia. Ex.: Hoje seguem para o banco compromissos de hoje de manhã (03 e 04 de abril)
CNAB: Os Títulos seguem como arquivo CNAB para o banco
---