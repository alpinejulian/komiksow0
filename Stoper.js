var second = 0;
var mili = 0;
var timerID = null;

function TimerTick()
{
    localStorage.setItem('second', second);

    localStorage.setItem('mili', mili);


    if (mili >= 9)
    {
        mili = 0; second += 1;
    }
    else
    {
        mili += 1;
    }
    var timerElem = document.getElementById("myStoper");
    timerElem.value = second + '.' + mili;
}

function starttimer()
{
    second = parseInt(localStorage.getItem('second')) || 0;
    mili = parseInt(localStorage.getItem('mili')) || 0;
    timerID = setInterval(TimerTick, 100, null);
}

function stoptimer()
{
    if (timerID != null)
        clearInterval(timerID);
}