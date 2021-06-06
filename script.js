function adicao(){
    let num = document.getElementById('num')
    let tabu = document.getElementById('tabu1')
    let num2 = document.getElementById('num2')
    
    if(num.value.length == 0){
        alert('erro')
    }else{
        let n = Number(num.value)
        let n2 = Number(num2.value)
         let c = 1
         tabu.innerHTML = ''
        while(c <= n2){  
        let item = document.createElement('option')
        item.text = `${n} + ${c} = ${n+c}`
        tabu.appendChild(item)
        c++
         } 
    }
}
function subitrair(){
    let num = document.getElementById('num')
    let num2 = document.getElementById('num2')
    let tabu2 = document.getElementById('tabu2')
    if(num.value.length == 0){
        alert('erro')
    }else{
        let n = Number(num.value)
        let n2 = Number(num2.value)
         let c = 1
         tabu2.innerHTML = ''
        while(c <= n2){  
        let item = document.createElement('option')
        item.text = `${n} - ${c} = ${n-c}`
        tabu2.appendChild(item)
        c++
         } 
    }
    
}
function divisao(){
    let num = document.getElementById('num')
    let num2 = document.getElementById('num2')
    let tabu3 = document.getElementById('tabu3')
    if(num.value.length == 0){
        alert('erro')
    }else{
        let n = Number(num.value)
        let n2 = Number(num2.value)
        //let tabu33 = Number.parseInt(tabu3)
         let c = 1
         tabu3.innerHTML = ''
        while(c <= n2){  
        let item = document.createElement('option')
        item.text = `${n} / ${c} = ${n/c}`
        tabu3.appendChild(item)
        c++
         } 
    }
    
}
function multiplicacao(){
    let num = document.getElementById('num')
    let num2 = document.getElementById('num2')
    let tabu4 = document.getElementById('tabu4')
    if(num.value.length == 0){
        alert('erro')
    }else{
        let n = Number(num.value)
        let n2 = Number(num2.value)
         let c = 1
         tabu4.innerHTML = ''
        while(c <= n2){  
        let item = document.createElement('option')
        item.text = `${n} x ${c} = ${n*c}`
        tabu4.appendChild(item)
        c++
         } 
    }
    
}



