box_result = document.getElementById('result');
box_last_calc = document.getElementById('last-calc');

function button_calc(num){
  const numero = box_result.innerHTML;
  box_result.innerHTML = numero + num;
};

function calculate(){
  const resultado = box_result.innerHTML;
  if(resultado){
    box_last_calc.innerHTML = resultado;
    box_result.innerHTML = eval(resultado);
  } else {
    box_result.innerHTML = "Erro de Formatação";
  }
};

function clear_all(){
  window.location.reload()
}

function clear_entry(){
	box_result.innerHTML = "";
}

function backspace(){
  var last_num = box_result.innerText;
  last_num = last_num.slice(0, -1)
    
  box_result.innerText = last_num

  if (box_result.innerText.length == 0){
    box_result.innerText = ''
  }
}

function square_root(){
  var square_num = Math.sqrt(box_result.innerText)
  box_result.innerText = square_num
}

function division_one(){
  var square_num = 1/box_result.innerText
  box_result.innerText = square_num
}

function power_calc(){
  var square_num =Math.pow(box_result.innerText, 2)
  box_result.innerText = square_num
}

function calc_percentage(){
  var numbers = [];
  if (numbers.length > 0 && typeof last_operator != "undefined"){
    if (last_operator == "+" || last_operator == "-"){
      box_result.innerText = numbers*box_result.innerText/100
    }
    else {
      box_result.innerText = box_result.innerText/100
    }
  }
  else {
    box_result.innerText = box_result.innerText/100
  }
}

function plus_minus(){
  if (typeof last_operator != "undefined"){
    if (numbers.length>0){
      if (operators.includes(last_button)){
        if (box_result.innerText == "-"){
          box_result.innerText = 0
          return
        }
        else {
          box_result.innerText = "-"
        }
      }
      else {
        box_result.innerText = -box_result.innerText
        if (numbers.length==1){
          numbers[0] = box_result.innerText
        }
        else {
           numbers[1] = box_result.innerText
        }
      }
    }
    return
  }
  if (box_result.innerText == 0){
    box_result.innerText = "-"
    return
  }
  box_result.innerText = -box_result.innerText
}