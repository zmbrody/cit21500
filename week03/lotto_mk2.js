function lotteryNumber() 
{
    /* 
    Returns a number between 1 and 49, inclusive
    */
    let FoundNum = (1 + Math.floor(Math.random() * 49));
    return(FoundNum);
}

const getSixNumbers = function ()
{
    let TheNumbers = "";
    for (let i = 0; i < 6; i++)
    {
        let RandNum = lotteryNumber();
        console.log(RandNum);
    }
    return;
}
