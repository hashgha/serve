function sortTable(columnIndex) {
    var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
    table = document.getElementById("pipelineTable");
    if (!table) return;
    switching = true;
    dir = "asc";
    while (switching) {
        switching = false;
        rows = table.rows;
        for (i = 1; i < (rows.length - 1); i++) {
            shouldSwitch = false;
            x = rows[i].getElementsByTagName("TD")[columnIndex];
            y = rows[i + 1].getElementsByTagName("TD")[columnIndex];
            if (dir == "asc") {
                if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                    shouldSwitch = true;
                    break;
                }
            } else if (dir == "desc") {
                if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                    shouldSwitch = true;
                    break;
                }
            }
        }
        if (shouldSwitch) {
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
            switchcount++;
        } else {
            if (switchcount == 0 && dir == "asc") {
                dir = "desc";
                switching = true;
            }
        }
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const headers = document.querySelectorAll('#pipelineTable th');
    if (headers) {
        headers.forEach((header, index) => {
            header.addEventListener('click', () => {
                sortTable(index);
            });
        });
    }

    const currentLocation = window.location.href;
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        if(link.href === currentLocation) {
            link.classList.add('active');
        }
    });
});
