player1_name =localStorage.getItem("player1");
player2_name =localStorage.getItem("player2");

player1_score =0;
player2_score =0;

document.getElementById("player_1").innerHTML = player1_name;
document.getElementById("player_2").innerHTML = player2_name;

document.getElementById("score").innerHTML = player1_score;
document.getElementById("score2").innerHTML = player2_score;

document.getElementById("turno_para_preguntar").innerHTML = "turno para preguntar "+ player1_name;
document.getElementById("turno_para_responder").innerHTML ="turno para responder "+ player2_name;

question_turn ="player1";
answer_turn ="player2";
   
function enviar() {
   number1 =document.getElementById("numero_1").value;
   number2 =document.getElementById("numero_2").value;
   actual_answer = parseInt(number1) * parseInt(number2);
    console.log(actual_answer);
    question_number = "<h4>" + number1 + " X "+ number2 +"</h4>";
    input_box = "<br>Respuesta : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Comprobar</button>";
    row =  question_number + input_box + check_button ;
    document.getElementById("salida").innerHTML = row;
    document.getElementById("numero_1").value = "";
    document.getElementById("numero_2").value = "";

}

function check() {
  get_answer =document.getElementById("input_check_box").value;
  answer =get_answer.toLowerCase();
  console.log("repuesta "+answer)
  if ( word == answer ) {
     if (answer_turn =="player1") {
        player1_score = player1_score + 1;
        document.getElementById("score").innerHTML =player1_score;
     }else {
        player2_score = player2_score + 1;
        document.getElementById("score2").innerHTML =player2_score;
     }
  }
  if (question_turn == "player1") {
     question_turn ="player2";
     document.getElementById("turno_para_preguntar").innerHTML ="turno para preguntar -"+ player2_name;
  }else {
     question_turn ="player1";
     document.getElementById("turno_para_preguntar").innerHTML ="turno para preguntar -"+ player1_name;
  }
  if (answer_turn == "player1") {
     answer_turn ="player2"
     document.getElementById("turno_para_responder").innerHTML ="turno para responder -"+ player2_name;
  }else {
   answer_turn="player1";
   document.getElementById("turno_para_responder").innerHTML ="turno para responder -"+ player1_name;
  }
  document.getElementById("salida").innerHTML ="";
}