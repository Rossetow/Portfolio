//Script veja mais

var btnVejaMais = document.getElementById("btn-veja-mais")
var verMaisOpen = 0
var setaVejaMais = document.getElementById("seta-veja-mais")
var btnVejaMenos = document.getElementById("btn-veja-menos")
var setaVejaMenos = document.getElementById("seta-veja-menos")


btnVejaMais.onmouseover = function(){
    setaVejaMais.style.transform = "rotate(0deg)"
}

btnVejaMais.onmouseout = function(){
    setaVejaMais.style.transform = "rotate(-90deg)"
}

btnVejaMenos.onmouseover = function(){
    setaVejaMenos.style.transform = "rotate(-180deg)"
}

btnVejaMenos.onmouseout = function(){
    setaVejaMenos.style.transform = "rotate(0deg)"
}


btnVejaMais.onclick = function(){
        var gridBoxes = document.getElementById("grid-boxes")
        var boxDisplay = document.getElementsByClassName("veja-mais-div")

        for (i =0; i < boxDisplay.length; i++)    {
        boxDisplay[i].style.display = "flex"
        console.log("foi 1")
        }

        gridBoxes.style.gridTemplateRows = "1fr 1fr"

        btnVejaMais.style.display = "none"
        btnVejaMenos.style.display = "flex"

        verMaisOpen = 1
}

btnVejaMenos.onclick = function(){
    var gridBoxes = document.getElementById("grid-boxes")
        var boxDisplay = document.getElementsByClassName("veja-mais-div")

        for (i =0; i < boxDisplay.length; i++)    {
        boxDisplay[i].style.display = "none"
        console.log("foi 1")
        }

        gridBoxes.style.gridTemplateRows = "none"

        btnVejaMais.style.display = "flex"
        btnVejaMenos.style.display = "none"
        
        setaVejaMais.style.transform = "rotate(-90deg)"

        verMaisOpen=0
}