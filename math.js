document.getElementById("player1").innerHTML=localStorage.getItem("user1");

document.getElementById("player2").innerHTML=localStorage.getItem("user2");

document.getElementById("qplayer").innerHTML=localStorage.getItem("user1");

document.getElementById("aplayer").innerHTML=localStorage.getItem("user2");

function send()
{
    var number1= document.getElementById("number1").value;
    var number2= document.getElementById("number2").value;
    var actual_answer = parseInt("number1") * parseInt("number1");
    var question_number = "<h4>"+number1+"X"+number2+"</h4>";
    var input_box = "<br>Answer : <input type='text' id='input_check_box' class='form-control'>";
    var check_button = "<br><br><button class='btn btn-info' onclick='check()'>check</button>";
    var row = question_number + input_box + check_button ;
    document.getElementById("div_for_answer").innerHTML = row;
    document.getElementById("number1").value;
    document.getElementById("number2").value;
}

var player1 = 0;
var player2 = 0;

var question_turn = player1;
var answer_turn = player2;

function check()
{
    var get_answer = document.getElementById("input_check_box").value;
    if (get_answer == actual_answer)
    {
        if(answer_turn == "player1")
        {
            update_player1_score = score1 +1;
            document.getElementById("score1").innerHTML = update_player1_score;
        }
        else
        {
            update_player2_score = score2 +1;
            document.getElementById("score2").innerHTML = update_player2_score;
        }

        if(question_turn == "player1")
            {
                question_turn = "player2"
                document.getElementById("qplayer").innerHTML = update_player1_score;
            }
            else
            {
                question_turn = "player1"
                document.getElementById("qplayer").innerHTML = update_player2_score;
            }
    }
}