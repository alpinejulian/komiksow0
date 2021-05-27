var visited = sessionStorage.getItem('visited');
if (visited != 'true') {
    var numVisits = parseInt(localStorage.getItem('numVisits') || 0);
    localStorage.setItem('numVisits', numVisits + 1);
    sessionStorage.setItem('visited', 'true');
}

document.getElementById("visit_count").value = localStorage.getItem('numVisits') || 0;