const ValidateCredentials = function (userId, password)
{
    let RealUsername = "admin";
    let RealPassword = "secret";
    if ( userId == RealUsername && password == RealPassword )
    {
        return true;
    }
    else
    {
        return false;
    }
}

function main ()
{
    let username = prompt("Username:");
    let password = prompt("Password:");
    let IsValid = ValidateCredentials(username,password);
    let ResultHTML = document.querySelector("#login_result");
    let ResultText;

    if (IsValid)
    {
        ResultText = "Welcome admin!";
    }
    else
    {
        ResultText = "BAD LOGIN CREDENTIALS";
    }

    console.log(ResultText);

    if (IsValid)
    {
        // don't want the italics in the console, since they won't italicize there
        ResultHTML.innerHTML = `<i>${ResultText}</i>`;
    }
    else
    {
        ResultHTML.innerHTML = ResultText;
    }

}



main()