---
title: Circuitos sequênciais
sidebar_position: 5
slug: /sequential
---

# 1. Para começarmos - De onde vem os elementos sequenciais?

Pessoal vamos analisar agora como podemos utilizar os circuitos eletrônicos de forma sequencial. Como assim sequencia? Vamos lá! Até aqui, podemos avaliar alguns circuitos utilizando as funções combinacionais. 


<img 
  src="https://computerengineeringforbabies.com/cdn/shop/articles/Logic_Gate_reference_sheet.jpg"
  alt="Circuitos Digitais"
  style={{ 
    display: 'block',
    marginLeft: 'auto',
    maxHeight: '80vh',
    marginRight: 'auto'
  }} 
/>

<p style={{textAlign:'center'}}>Retirado de (https://computerengineeringforbabies.com/)</p>


Essas funções lógicas podem ser combinadas para executar comportamentos sequenciais, formando os `flip-flops`.

<img 
  src="https://www.hackatronic.com/wp-content/uploads/2021/11/Types-of-flip-flop-and-their-working.webp"
  alt="Elementos discretos combinacionais e sua composição como flip-flops"
  style={{ 
    display: 'block',
    marginLeft: 'auto',
    maxHeight: '80vh',
    marginRight: 'auto'
  }} 
/>

<p style={{textAlign:'center'}}>Retirado de (https://www.hackatronic.com/)</p>

:::tip[Para saber mais sobre o funcionamento de Flip-Flops]

Pessoal, sugiro fortemente ver esse vídeo para saber mais sobre o funcionamento dos flip-flops e ler esse [artigo](https://firelink-library.github.io/arch/flipflop) também.

<iframe width="560" height="315" src="https://www.youtube.com/embed/Hi7rK0hZnfc?si=hHMUTedJFZcBhiE9" title="Video de descrição do funcionamento de flipflops" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen style={{display:"block", marginLeft:"auto", marginRight:"auto", marginBottom:"8px"}}></iframe>

:::


Legal, agora temos quase tudo que precisamos para iniciar o estudo dos nossos circuitos sequenciais. Precisamos apenas de mais um elemento, o `gerador de clock`. Por que o clock é importante? Essa é um pergunta muito válida e muito boa!

Os geradores de clock são responsáveis por gerar uma onda quadrada em uma frequência conhecida e pré-determinada. Essa onda quadrada é utilizada para marcar um sinal de sincronização e operação para os dispositivos. Ele pode ser gerado de algumas formas, vamos avaliar algumas delas.

<img 
  src="https://lh4.googleusercontent.com/proxy/0iHnsgJsIIBXA5qjH9QosFOy6kINz1ouC1jNkOdsTvPxQhsmnuG_VUf-_AAlLomkfdHtjZ53xaqMOCztrQDs7TbKLFjW"
  alt="Onda quadrada gerada por um circuito de clock"
  style={{ 
    display: 'block',
    marginLeft: 'auto',
    maxHeight: '80vh',
    marginRight: 'auto'
  }} 
/>

Um sinal de clock possui algumas características:
- `tcyc`: é o intervalo de um período de clock. A frequência de clock é calculada invertendo esse valor (1/tcyc).
- `Falling Edge`: é a borda de descida do sinal. Ela caracteriza o instante que o sinal de clock vai do nível alto para o nível baixo. É importante conhecer essa característica do sinal, pois alguns circuitos são sensíveis a ele (respondem a esse comportamento do sistema).
- `Rising Edge`: é a borda de subida do clock. Quando o sinal vai de nível baixo para alto.

Mas porque as bordas são importante? Pois elas trazem a informações do momento de transição apenas e não do estado que o sinal se encontra. Pode ser bastante útil quando esta informação pode ser utilizada no sistema.

Mas como podemos gerar este tipo de sinal? É uma ótima pergunta! Vamos verificar um circuito gerador de clock.

<img 
  src="https://4.bp.blogspot.com/-gY1NLHuD038/V_crudEEKPI/AAAAAAAAOzo/5xWJUfqQYlUs95R5WusxHoBKwVS6usMVACLcB/s640/output_WAI0Ba.gif"
  alt="Oscilador astável"
  style={{ 
    display: 'block',
    marginLeft: 'auto',
    maxHeight: '80vh',
    marginRight: 'auto'
  }} 
/>
<br/>

Este circuito é um dos mais simples para geração do sinal de uma onda quadrada, o oscilador astável. Ele funciona da seguinte maneira: enquanto um dos transistores está conduzindo, o outro está bloqueando. Está configuração permite que o capacitor ligado ao transistor que está bloqueado carregue-se e faça com que o estado dos transistores mude. Então, o outro capacitor começa a se carregar e todo o ciclo se repete.

Uma outra forma de gerar esse o sinal de clock pode ser utilizando uma porta NAND.

<img 
  src="https://www.incbtech.com/images/sampledata/artigo2020/art0537e_0001.jpg"
  alt="Oscilador monoestável"
  style={{ 
    display: 'block',
    marginLeft: 'auto',
    maxHeight: '80vh',
    marginRight: 'auto'
  }} 
/>
<br/>

Este circuito tem um funcionamento similar. Quando é iniciado o sistema, todos estão desenergizados. O capacitor começa a se carregar por R. Pessoal, aqui acho que já conseguimos ver como estes circuitos geram nossas ondas quadradas. Agora vamos utilizar elas! 


:::tip[Para conhecer como gerar uma onda quadrada]

Pessoal, além do formato que vimos para gerar uma onda quadrada, um circuito bastante comum para sua geração é o [CI 555](https://www.ti.com/lit/ds/symlink/lm555.pdf?ts=1738616909851&ref_url=https%253A%252F%252Fwww.google.com%252F). O vídeo abaixo apresenta o funcionamento do circuito.

<iframe width="560" height="315" src="https://www.youtube.com/embed/VWKbQE5k89Y?si=CZipBVx7uyqbPvUW" title="Video de descrição do 555 como oscilador" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen style={{display:"block", marginLeft:"auto", marginRight:"auto", marginBottom:"8px"}}></iframe>

:::

