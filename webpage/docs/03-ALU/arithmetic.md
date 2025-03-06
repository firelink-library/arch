---
title: Operações aritméticas
sidebar_position: 2
slug: /arithmetic
---

# Operações aritméticas (parte 1)

A unidade de lógica e aritmética é a parte da CPU que de fato *executa* as
operações. Lembre-se sempre: por trás de toda a complexidade de um computador
está somente a necessidade de realizar operações com valores numéricos. O que
há dentro de uma ALU? Bom, operações. Por isso mesmo que essa seção é pra
**você** trabalhar! Isso mesmo, você vai pensar um pouco e implementar a versão
de 4 bits de algumas operações clássicas de uma CPU.

## 1. Somador

Já vimos em sala de aula o meio somador, mas vamos lá. Será que você lembra?

:::tip Exercício 8.01

Crie o circuito lógico de um meio somador de 1 bit

:::

Vimos, também, que o meio somador não é o suficiente para fazer somadores de 4
ou 8 bits. Para isso, precisamos de um **somador completo**.

:::tip Exercício 8.02

Esse não resolvemos em sala. Crie a tabela verdade e implemente um somador
completo de 1 bit.

:::

:::tip Exercício 8.03

Utilizando o somador completo de 1 bit, crie um somador de 4 bits.

:::

## 2. Subtração

:::tip Exercício 8.04

Crie um circuito subtrator de 1 bit. Para isso, crie uma tabela verdade
considerando duas entradas, A e B, e duas saídas, S e Cout.

:::

:::tip Exercício 8.05

Crie um circuito subtrator de 4 bits. Há duas formas para fazer isso:

1. Utilizando vários subtratores de 1 bit. Assim como no caso do somador, você
   precisará de um "subtrator completo"; ou
2. Utilizando somadores de 4 bits. A dica é: lembre-se do funcionamento do
   complemento de 2.

:::

## 3. Comparador

Outra das operações básicas de uma ALU é a comparação. Nele, é possível
comparar dois valores numéricos e indicar se o os números são iguais ou se um é
maior que o outro.

:::tip Exercício 8.06

Crie um comparador de 1 bit. Considere as entradas como A e B e as saídas
necessárias são EQ, GT e LT. EQ é verdadeiro quando A e B são *iguais*. GT é
verdadeiro quando A é *maior* que B. LT é verdadeiro quando A é *menor* que B.

:::

:::tip Exercício 8.07

Crie um comparador de 4 bits.

:::

## 4. Escolhendo operações

Legal, agora você tem três operações distintas! Mas tem um problema: um
computador é capaz de realizar essas operações de acordo com a *escolha do
usuário*. Chegou a hora de você considerar como fazer isso. Vou buscar um vídeo
de um autoestudo anterior para te ajudar:

:::info Autoestudo obrigatório

O trecho a partir de 10 minutos até o fim do vídeo vai te ajudar a pensar no
exercício a seguir.

<div style={{ textAlign: 'center' }}>
    <iframe 
        style={{
            display: 'block',
            margin: 'auto',
            width: '100%',
            height: '50vh',
        }}
        src="https://www.youtube.com/embed/HjneAhCy2N4" 
        frameborder="0" 
        allowFullScreen>
    </iframe>
</div>

:::

:::tip Exercício 8.08

Crie um seletor para as operações da sua ALU de três operações. Para fazer isso, considere os seguintes *op codes*:

* 00 - Operação de adição entre A e B
* 01 - Operação de subtração de A por B
* 10 - Operação de comparação entre A e B
* 11 - Operação inválida

:::

## 5. Operações sequenciais

Algumas das operações básicas da ALU envolvem circuitos lógicos sequenciais e
não apenas puramente combinacionais. Por enquanto, vamos apenas considerar a
sua operação e a lógica por trás da sua execução.

### 5.1. Multiplicação

Incrivelmente, uma das melhores explicações que vi sobre multiplicação binária
foi de um vídeo de *Minecraft*. Segue:

:::info Autoestudo obrigatório

<div style={{ textAlign: 'center' }}>
    <iframe 
        style={{
            display: 'block',
            margin: 'auto',
            width: '100%',
            height: '50vh',
        }}
        src="https://www.youtube.com/embed/hif-FueLM8M" 
        frameborder="0" 
        allowFullScreen>
    </iframe>
</div>

:::

:::tip Exercício 8.09

Crie um fluxograma que represente o algoritmo necessário para multiplicar dois
números binários. Não precisa considerar números negativos.

:::

### 5.2. Divisão

:::info Autoestudo obrigatório

<div style={{ textAlign: 'center' }}>
    <iframe 
        style={{
            display: 'block',
            margin: 'auto',
            width: '100%',
            height: '50vh',
        }}
        src="https://www.youtube.com/embed/QTO9msstzaw" 
        frameborder="0" 
        allowFullScreen>
    </iframe>
</div>

:::

:::tip Exercício 8.10

Crie um fluxograma que represente o algoritmo necessário para dividir dois
números binários. Não precisa considerar números negativos.

:::

Agora, já estamos começando a vislumbrar a operação de um processador. No
entanto, estamos bem no começo ainda. Precisamos, ainda, discutir uma das peças
fundamentais tanto para desbloquear a lógica sequencial como permitir o
*armazenamento* de informação dentro de um processador. Estamos falando da
**memória**. Aguarde o próximo capítulo...
