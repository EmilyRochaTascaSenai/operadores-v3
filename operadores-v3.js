function somar(){
    //Armazenar o valor que o usuário irá digitar no campo do formulario
    //Para validar se o campo não está em branco
    const verificaValor01= document.getElementById('valor01').value;
    const verificaValor02 = document.getElementById('valor02').value;
    //Teste de verificação ===(compara tipo e valor )
   if(verificaValor01===''||verificaValor02===''){
    alert('Valor 01 ou Valor 02 branco,digite um numero')
   }
   else{
    let valor1 = parseFloat(document.getElementById('valor01').value)
    let valor2 = parseFloat(document.getElementById('valor02').value)
    document.getElementById('resultado').style.display='flex'

    const resultado = document.getElementById('resultado');
    resultado.innerHTML =
    `<ul>
                    <li>Operação: <span>SOMA</span> </li>
                    <li>Valor 01 digitado pelo usuário: <span> ${valor1} </span> </li>
                    <li>Valor 02 digitado pelo usuário: <span>${valor2}</span> </li>       
                    <li>O resultado da operação é ${valor1} + ${valor2} = <span>${valor1 + valor2}</span> </li>
                </ul> 
    `
    
}
}

function subtrair(){
    //Armazenar o valor que o usuário irá digitar no campo do formulario
    //Para validar se o campo não está em branco
    const verificaValor01= document.getElementById('valor01').value;
    const verificaValor02 = document.getElementById('valor02').value;
    //Teste de verificação ===(compara tipo e valor )
    if(verificaValor01===''||verificaValor02===''){
        alert('Valor 01 ou Valor 02 branco,digite um numero')
       }
       else{
        let valor1 = parseFloat(document.getElementById('valor01').value)
        let valor2 = parseFloat(document.getElementById('valor02').value)
        document.getElementById('resultado').style.display='flex'
    
        const resultado = document.getElementById('resultado');
        resultado.innerHTML =
        `<ul>
                        <li>Operação: <span>SOMA</span> </li>
                        <li>Valor 01 digitado pelo usuário: <span> ${valor1} </span> </li>
                        <li>Valor 02 digitado pelo usuário: <span>${valor2}</span> </li>       
                        <li>O resultado da operação é ${valor1} - ${valor2} = <span>${valor1 - valor2}</span> </li>
                    </ul> 
        `
        
    }

}

function multiplicar(){
    //Armazenar o valor que o usuário irá digitar no campo do formulario
    //Para validar se o campo não está em branco
    const verificaValor01= document.getElementById('valor01').value;
    const verificaValor02 = document.getElementById('valor02').value;
    //Teste de verificação ===(compara tipo e valor )
    if(verificaValor01===''||verificaValor02===''){
        alert('Valor 01 ou Valor 02 branco,digite um numero')
       }
       else{
        let valor1 = parseFloat(document.getElementById('valor01').value)
        let valor2 = parseFloat(document.getElementById('valor02').value)
        document.getElementById('resultado').style.display='flex'
    
        const resultado = document.getElementById('resultado');
        resultado.innerHTML =
        `<ul>
                        <li>Operação: <span>SOMA</span> </li>
                        <li>Valor 01 digitado pelo usuário: <span> ${valor1} </span> </li>
                        <li>Valor 02 digitado pelo usuário: <span>${valor2}</span> </li>       
                        <li>O resultado da operação é ${valor1} * ${valor2} = <span>${valor1 * valor2}</span> </li>
                    </ul> 
        `
        
    }
}
function dividir(){
    //Armazenar o valor que o usuário irá digitar no campo do formulario
    //Para validar se o campo não está em branco
    const verificaValor01= document.getElementById('valor01').value;
    const verificaValor02 = document.getElementById('valor02').value;
    //Teste de verificação ===(compara tipo e valor )
    if(verificaValor01===''||verificaValor02===''){
        alert('Valor 01 ou Valor 02 branco,digite um numero')
       }
       else{
        let valor1 = parseFloat(document.getElementById('valor01').value)
        let valor2 = parseFloat(document.getElementById('valor02').value)
        document.getElementById('resultado').style.display='flex'
    
        const resultado = document.getElementById('resultado');
        resultado.innerHTML =
        `<ul>
                        <li>Operação: <span>SOMA</span> </li>
                        <li>Valor 01 digitado pelo usuário: <span> ${valor1} </span> </li>
                        <li>Valor 02 digitado pelo usuário: <span>${valor2}</span> </li>       
                        <li>O resultado da operação é ${valor1} / ${valor2} = <span>${valor1 / valor2}</span> </li>
                    </ul> 
        `
        
    }
}

function porcentagem(){
    //Armazenar o valor que o usuário irá digitar no campo do formulario
    //Para validar se o campo não está em branco
    const verificaValor01= document.getElementById('valor01').value;
    const verificaValor02 = document.getElementById('valor02').value;
    //Teste de verificação ===(compara tipo e valor )
    if(verificaValor01===''||verificaValor02===''){
        alert('Valor 01 ou Valor 02 branco,digite um numero')
       }
       else{
        let valor1 = parseFloat(document.getElementById('valor01').value)
        let valor2 = parseFloat(document.getElementById('valor02').value)
        document.getElementById('resultado').style.display='flex'
    
        const resultado = document.getElementById('resultado');
        resultado.innerHTML =
        `<ul>
                        <li>Operação: <span>SOMA</span> </li>
                        <li>Valor 01 digitado pelo usuário: <span> ${valor1} </span> </li>
                        <li>Valor 02 digitado pelo usuário: <span>${valor2}</span> </li>       
                        <li>O resultado da operação é ${valor1} * ${valor2}/100 = <span>${valor1 * valor2/100}</span> </li>
                    </ul> 
        `
        
    }
}

function calcPagVista(){
    // Armazenar os valores dos campos do formulário
    const verificaValor01 = document.getElementById('valor01').value;
    const verificaValor02 = document.getElementById('valor02').value;

// Teste de verificação (se algum campo estiver vazio)
if (verificaValor01 === '' || verificaValor02 === '') {
    alert('Valor 01 ou Valor 02 em branco, digite um número');
} else {
    let valor1 = parseFloat(document.getElementById('valor01').value); // Primeiro valor
    let valor2 = parseFloat(document.getElementById('valor02').value); // Percentual de desconto

    // Calcular o desconto (percentual)
    let valorDesconto = (valor1 * valor2) / 100;
    let valorComDesconto = valor1 - valorDesconto;

    document.getElementById('resultado').style.display = 'flex';

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `
        <ul>
            <li>Operação: <span>DESCONTO</span></li>
            <li>Valor 01 digitado pelo usuário: <span>${valor1}</span></li>
            <li>Percentual de Desconto (Valor 02): <span>${valor2}%</span></li>
            <li>Valor do desconto: <span>${valorDesconto}</span></li>
            <li>Valor com desconto: <span>${valorComDesconto}</span></li>
        </ul>
    `;
}

}
function limpar(){
    document.getElementById('resultado').style.display='none'
    document.getElementById('valor01').value='';
    document.getElementById('valor02') .value='';

}
