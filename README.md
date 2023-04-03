---
title: Workflow
description: Application created in order to control the company's workflow
tags:
  - React
  - Vite
  - Typescript
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
## Entrada de notas pelo Compras|Fiscal

| title        | obs | sim       | Não |
| --------------| ------ | -------------- |-----|
| Entrada de notas pelo Compras|Fiscal     | Pergunta se deseja seguir para o workflow ou não   | Gera um relatório que vai para a coordenação informando que um compromisso foi lançado    |

## Entrada de títuloa pelo Financeiro

|title|obs|Sim|Não|
|-----|----|----|---|
|Entrada de títuloa pelo Financeiro|Pergunta se deseja seguir para o workflow ou não|Vai para o Workflow|Gera um relatório que vai para a coordenação informando que um compromisso foi lançado|


## Alçadas de Aprovação

|Fiscal|Financeiro|Centro de Custos|CEO|Compromissos|CNAB|
|------|----------|----------------|---|------------|----|
|Aprova todos os Compromissos: Verifica coerência de naturezas, centro de custos e dados de atributos|Aprova todos os Compromissos: Verifica e acompanha o fluxo de caixas da empresa|Cada gestor aprova os seis compromissos entre: 0,01 até 20K|Aprova a partir de 20.000,01|Vão para o banco com antecedência de até 01 dia. Ex.: Hoje seguem para o banco compromissos de hoje de manhã (03 e 04 de abril)|Os Títulos seguem como arquivo CNAB para o banco


```
  - Os arquivos são gravados numa pasta do servidor
  - O programa da VAN pega esses arquivos e envia para o banco, e também retorna com os arquivos de retorno
  - Os arquivos de retorno são processados e dado baixa automatica em cada título do arquivo
  - No arquivo de retorno sempre deve vir a linha "segmento Z" (contém Autenticação Eletrõnica de Pgto)
  - Quando o título é baixado, gera um relatório informando que o título foi baixado.

```