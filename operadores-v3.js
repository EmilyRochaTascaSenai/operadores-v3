function somar(){
    //Armazenar o valor que o usuário irá digitar no campo do formulario
    //Para validar se o campo não está em branco
    const verificaValor01= document.getElementById('valor01').value;
    const verificaValor02 = document.getElementById('valor02').value;
    //Teste de verificação ===(compara tipo e )
   if(verificaValor01===''||verificaValor02===''){
    alert('Valor 01 ou Valor 02 branco,digite um numero')
   }
   else{
    let valor1 = parseFloat(document.getElementById('valor01').value)
    let valor2 = parseFloat(document.getElementById(valor02).value)
    document.getElementById('resultado').style.display='flex'

    const resultado = document.getElementById('resultado')
    resultado.innerHTML =
    <ul>
                    <li>Operação: <span>SOMA</span> </li>
                    <li>Valor 01 digitado pelo usuário: <span> ${v1} </span> </li>
                    <li>Valor 02 digitado pelo usuário: <span>${v2}</span> </li>       
                    <li>O resultado da operação é ${v1} + ${v2} = <span>${v1 + v2}</span> </li>
                </ul> 
}
}



function limpar(){
    document.getElementById('resultado').style.display='none'
    document.getElementById('valor01').value='';
    document.getElementById('valor02') .value=''

}