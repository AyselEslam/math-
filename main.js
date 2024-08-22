function login()
{
    name1 = document.getElementById("input_for_user_1").value
    name2 = document.getElementById("input_for_user_2").value

    localStorage.setItem("user1", name1);
    localStorage.setItem("user2", name2);

    window.location="math.html"
}