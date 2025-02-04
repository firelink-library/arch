--- 
title: Circuitos combinacionais
sidebar_position: 2
slug: /combinatory
---

import Ttable1 from '@site/static/img/ttable1.png';
import Ttable2 from '@site/static/img/ttable2.png';
import Ttable3 from '@site/static/img/ttable3.png';
import Grey from '@site/static/img/grey.png';

# Como criar (praticamente) qualquer circuito lógico

Criar circuitos lógicos é uma tarefa fundamental no projeto de
microprocessadores. Sendo assim, vamos conversar sobre como fazer isso? A má
notícia é que não existe atalhos para criar circuitos lógicos. A boa é que
existe uma ferramenta que gera (quase) sempre o circuito lógico mais otimizado
possível. O nome dessa ferramenta é o mapa de Karnaugh, mas, para entendê-lo
precisamos primeiro entender a tabela verdade.

## 1. A tabela verdade

:::info Autoestudo obrigatório

<div style={{ textAlign: 'center' }}>
    <iframe 
        style={{
            display: 'block',
            margin: 'auto',
            width: '100%',
            height: '50vh',
        }}
        src="https://www.youtube.com/embed/C4MdUQJIhSE" 
        frameborder="0" 
        allowFullScreen>
    </iframe>
</div>

:::

As tabelas verdade são uma ferramenta muito simples em sua essência: a sua
razão de existir é mapear todas as combinações de entrada possíveis de um
circuito lógico e obter a saída para cada uma delas. Para entender melhor como
isso pode ser feito, vamos olhar uma das tabelas verdades mais simples
possíveis, a do *XOR*:

<img 
  src="https://www.build-electronic-circuits.com/wp-content/uploads/2022/09/Truth-table-XOR-gate.png"
  alt="XOR"
  style={{ 
    display: 'block',
    marginLeft: 'auto',
    maxHeight: '40vh',
    marginRight: 'auto'
  }} 
/>
<br/>
<p><center>Fig 5.01 - A porta lógica *XOR* e sua tabela verdade.</center></p>

A primeira coisa que precisamos notar é a *quantidade de linhas* da tabela
verdade. Isso tem uma relação direta com a *quantidade de entradas do
circuito*. Essa relação se dá pela equação 2^n, onde n é a quantidade de
entradas do sistema.

A seguir, preenchemos essas linhas com todas as comutações possíveis das
entradas do circuito e, para cada uma dessas comutações, anotamos também se a
saída é 1 ou 0. Vamos ver a tabela verdade de um exemplo *um pouco* mais
complexo.

<img 
  src={Ttable1}
  alt="Tabela verdade 1"
  style={{ 
    display: 'block',
    marginLeft: 'auto',
    maxHeight: '40vh',
    marginRight: 'auto'
  }} 
/>
<br/>
<p><center>Fig 5.02 - Tabela verdade de um circuito lógico.</center></p>

Logo de cara, é muito difícil dizer qual é esse circuito lógico. A maneira como
você vai interagir com tabelas verdades é muito mais parecida com esse segundo
exemplo do que com o primeiro, pois essa é uma ferramenta geralmente utilizada
para a criação de circuitos lógicos que representam a lógica descrita pela
tabela verdade.

Beleza, mas como fazer isso? É **muito** simples. Está vendo todas as linhas em
que F3 é 1? Pegamos todas elas e "somamos" (leia-se, juntamos com portas *OR*).
Dá uma olhada como isso fica:

$$

F_3 = \bar{X} \cdot \bar{Y} \cdot Z + \bar{X} \cdot Y \cdot Z + X \cdot \bar{Y}
\cdot \bar{Z}

$$

:::info

Sim, eu notei que a equação está aparecendo duas vezes. É algum bug do katex
que eu ainda não consegui resolver. Se algum de vocês souber o que é, por favor
me avise.

:::

Pronto, temos nossa equação lógica. Olha, eu sei que ela não parece muito
otimizada e sei que você provavelmente já percebeu alguma forma de
simplificá-la, mas vamos praticar o desapego até que a gente aprenda a usar o
mapa de karnaugh? Beleza, boa. Mas antes disso, quero que você pratique com
mais duas tabelas verdade.

:::tip Exercício 5.01

Baseando-se na tabela verdade abaixo, crie uma equação lógica que a represente.

<img 
  src={Ttable2}
  alt="Tabela verdade 2"
  style={{ 
    display: 'block',
    marginLeft: 'auto',
    maxHeight: '40vh',
    marginRight: 'auto'
  }} 
/>

:::

:::tip Exercício 5.02

Baseando-se na tabela verdade abaixo, crie uma equação lógica que a represente.

<img 
  src={Ttable3}
  alt="Tabela verdade 3"
  style={{ 
    display: 'block',
    marginLeft: 'auto',
    maxHeight: '40vh',
    marginRight: 'auto'
  }} 
/>

:::
