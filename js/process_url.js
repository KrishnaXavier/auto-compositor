function hash_to_array(){
	// file:///F:/Projetos/Auto%20Compositor/index.html#10,20,30,40,50,1#10,20,30,40,50,2

	/* 
	* m = minimo
	* a = maximo
	* c = acorde-inical
	* i = maior-salto
	* e = menor-salvo
	* o = contadorCanal
	*/

	let d = location.hash.split("#")
	d.shift()

	let out = []
	for (i = 0; i < d.length; i++) {
		let p =  d[i].split(",")		
		out.push({'m':p[0], 'a':p[1], 'c':p[2], 'i':p[3], 'e':p[4], 'id':p[5]})
	}

	console.log(out)

	return out
}