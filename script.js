var cafe_texto = ['Panqueca de Banana</a> <strong> R$ 15.99</strong></div><br>Feita com apenas 5 ingredientes, a panqueca de banana é um lanche completo, pois traz saciedade e possui todos os grupos essenciais para uma refeição bem estruturada. “Ela tem carboidratos complexos, proteínas, gorduras boas, vitaminas e minerais, além de grande quantidade de fibras solúveis e insolúveis, o que ajuda na saciedade e na saúde do intestino”</span>',
'Tapiovo   <strong>R$ 7.99</strong></div><br>Essa combinação, além de espantar a fome com mais facilidade, ajuda na recuperação dos músculos que foram trabalhados no treino!</span>']
var cafe_img = ['https://areademulher.r7.com/wp-content/uploads/2022/03/panqueca-de-banana-receita-doce-deliciosa-e-rapida-1-1200x900.jpg',
'https://receitasdetudo.blog.br/wp-content/uploads/2022/04/receita-de-tapiovo.jpg'];
var cafe_titulo = ['Panqueca de Banana', 'Tapiovo']
var cafe_preco = [15.99, 7.99]

var almoco_texto = ['Macarrão com linguiça<strong> R$ 24.99</strong></div><br>Se você está buscando uma receita com sabores marcantes é provável que vá se apaixonar por esse macarrão. Com uma mistura de bacon e linguiça, tem toques levemente picantes e é uma delícia para almoços de domingo.</span>',
'Bife a cavalo<strong> R$ 27.99</strong></div><br>Bife a cavalo é um prato da culinária portuguesa e brasileira, composto basicamente por um bife, com um ovo em cima, tipicamente acompanhado de batatas fritas e, por vezes, de salada.</span>']
var almoco_img = ['https://naminhapanela.com/wp-content/uploads/2016/12/macarra-amatriciana.jpg',
'https://www.sabornamesa.com.br/media/k2/items/cache/8d00d7ae4f3b1af3be8d6d077cf2f6c4_XL.jpg']
var almoco_titulo = ['Macarrão com linguiça', 'Bife a cavalo']
var almoco_preco = [24.99, 27.99]

var sobremesa_texto = ['Pavê<strong> R$ 6.99</strong></div><br>Apesar de soarem simples, os pavês são um tipo de sobremesa cuja apresentação desconstruída pode ser executada de maneira ainda mais fácil do que a versão original na travessa. Para isso, basta escolher uma louça bonita e servir as porções organizando as camadas cremosas e crocantes e elementos decorativos em pratos ou em copos.</span>',
'Petit gateau<strong> R$ 8.99</strong></div><br>Há quem afirme que essa história de servir o petit gateau com chocolate é coisa de brasileiro. Fato é que essa receita francesa costuma fazer o maior sucesso e pode ser reproduzida em versões mais simples.</span>']
var sobremesa_img = ['https://cdn0.tudoreceitas.com/pt/posts/9/6/0/_10069_6_600.webp',
'https://cdn0.tudoreceitas.com/pt/posts/9/6/0/sobremesas_chiques_e_faceis_internacionais_10069_11_600.webp']
var sobremesa_titulo = ['Pavê', 'Petit gateau']
var sobremesa_preco = [6.99, 8.99]

var titulo = document.getElementById('text')
var qtd = document.getElementById('divti')
var cont = 0
var frame = document.getElementById('frame')
var carrinho = []
var resultado = document.getElementById('resultado')

function carregar2(){
	for (var i = 1; i <= 6; i++) {
		var img = document.getElementById(`img${i}`)
		var txt = document.getElementById(`text${i}`)
		if (i < 3 ) {
			img.innerHTML = `<img src="${cafe_img[i-1]}">`
			var texto = cafe_titulo[i-1]
			var imagem = cafe_img[i-1]
			var preco = cafe_preco[i-1]
			txt.innerHTML = `<span><a><div id="nome_produto" onclick="adicionar('${texto}', '${imagem}', '${preco}')">${cafe_texto[i-1]}`
		}
		if (i > 2 && i < 5){
			img.innerHTML = `<img src="${almoco_img[i-3]}">`
			var texto = almoco_titulo[i-3]
			var imagem = almoco_img[i-3]
			var preco = almoco_preco[i-3]
			txt.innerHTML = `<span><a><div id="nome_produto" onclick="adicionar('${texto}', '${imagem}', '${preco}')">${almoco_texto[i-3]}`
		}
		if (i > 4 && i < 7){
			img.innerHTML = `<img src="${sobremesa_img[i-5]}">`
			var texto = sobremesa_titulo[i-5]
			var imagem = sobremesa_img[i-5]
			var preco = sobremesa_preco[i-5]
			txt.innerHTML = `<span><a><div id="nome_produto" onclick="adicionar('${texto}', '${imagem}', '${preco}')">${sobremesa_texto[i-5]}`
		}
	}
	titulo.innerHTML = 'Menu completo'
}

function cafe() {
	for (var i = 1; i <= 6; i++) {
		var img = document.getElementById(`img${i}`)
		var txt = document.getElementById(`text${i}`)
		img.innerHTML = ``
		txt.innerHTML = ``
	}

	for (var i = 1; i <= 2; i++){
		var img = document.getElementById(`img${i}`)
		var txt = document.getElementById(`text${i}`)
		var texto = cafe_titulo[i-1]
		var imagem = cafe_img[i-1]
		var preco = cafe_preco[i-1]
		img.innerHTML = `<img src="${cafe_img[i-1]}">`
		txt.innerHTML = `<span><a><div id="nome_produto" onclick="adicionar('${texto}', '${imagem}', '${preco}')">${cafe_texto[i-1]}`
	}
	titulo.innerHTML = 'Café'
	var qtd = qtd + 1
	qtd.innerHTML = qtd
}

function almoco(){
	for (var i = 1; i <= 6; i++) {
		var img = document.getElementById(`img${i}`)
		var txt = document.getElementById(`text${i}`)
		img.innerHTML = ``
		txt.innerHTML = ``
	}

	for (var i = 1; i <= 2; i++){
		var img = document.getElementById(`img${i}`)
		var txt = document.getElementById(`text${i}`)
		var texto = almoco_titulo[i-1]
		var imagem = almoco_img[i-1]
		var preco = almoco_preco[i-1]
		img.innerHTML = `<img src="${almoco_img[i-1]}">`
		txt.innerHTML = `<span><a><div id="nome_produto" onclick="adicionar('${texto}', '${imagem}', '${preco}')">${almoco_texto[i-1]}`
	}
	titulo.innerHTML = 'Almoço'
}

function sobremesa() {
	for (var i = 1; i <= 6; i++) {
		var img = document.getElementById(`img${i}`)
		var txt = document.getElementById(`text${i}`)
		img.innerHTML = ``
		txt.innerHTML = ``
	}

	for (var i = 1; i <= 2; i++){
		var img = document.getElementById(`img${i}`)
		var txt = document.getElementById(`text${i}`)
		var texto = sobremesa_titulo[i-1]
		var imagem = sobremesa_img[i-1]
		var preco = sobremesa_preco[i-1]
		img.innerHTML = `<img src="${sobremesa_img[i-1]}">`
		txt.innerHTML = `<span><a><div id="nome_produto" onclick="adicionar('${texto}', '${imagem}', '${preco}')">${sobremesa_texto[i-1]}`
	}
	titulo.innerHTML = 'Sobremesa'
}

function adicionar(element, element2, element3) {
	cont = cont + 1
	qtd.innerHTML = cont
	localStorage.setItem(`value${cont}`, element)
	localStorage.setItem(`valor${cont}`, element2)
	localStorage.setItem(`preco${cont}`, element3)
	localStorage.setItem('cont', cont)
}

function carregar(){
	var carrinho_nova = document.getElementById('carrinho_nova')
	var soma = 0
	for (var i = 1; i <= localStorage.getItem('cont'); i++) {
		var texto = localStorage.getItem(`value${i}`)
		var imagem = localStorage.getItem(`valor${i}`)
		var preco = parseFloat(localStorage.getItem(`preco${i}`))
		soma = soma + preco
		carrinho_nova.innerHTML += `<tr>
		<td height="50px" id="carrinho"><img src="${imagem}"></td>
		<td width="60%" id="carrinho">${texto} - ${preco} <br><br>x1</td>
		</tr>`
	}
	carrinho_nova.innerHTML += `<tr><td>Total a pagar: R$${soma}</td></tr>`
	}

function carro() {	
	var frame = document.getElementById('frame')
	localStorage.setItem('frame', frame)
	frame.classList.add('dim')
	frame.style.cssText = 'pointer-events: auto;'
	frame.innerHTML = '<iframe width="400px" height="500px" src="carrinho.html"></iframe>'
}

function pagar() {
	var carrinho_nova = document.getElementById('carrinho_nova')
	var botao = document.getElementById('botao_pagamento')
	botao.setAttribute('type', 'hidden')
	carrinho_nova.innerHTML = `
	<tr>
	<td><p>Numero do Cartao:</p>
	<p><input type="text" id="cartao">
	<p>Data de validade do cartao</p>
	<p><input type="date" id="cartao"></p>
	<p>Codigo de seguranca</p>
	<p><input type="number" id="cartao"></p>
	<p><input type="button" id="botao_pagamento" value="Pagar" onclick="Pagar()"> 
	<input type="button" id="pix" value="Pagar com pix" onclick="pix_chave()"></p>
	<p id="pix_chave"></p>
	</td>
	</tr>
	`
	}

function pix_chave() {
	var chave = document.getElementById('pix_chave')
	chave.innerHTML = 'Chave pix:<br>iBHYTCVRC7@6V76C_tr6dx756456TRFXC7.dxc5dsx4w<br>trcfd57D6RDR5XE75esjbhUG7vygt8vI77CT75EX'
}

function Pagar(){
	var carrinho_nova = document.getElementById('carrinho_nova')
	setTimeout(function(){
		carrinho_nova.innerHTML = `<tr>
		<td>PAGAMENTO REALIZADO COM SUCESSO</td>
		</tr>`
	}, 7000)
	window.location.href = 'exercicio14.html'
}






