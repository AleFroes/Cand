window.addEventListener("load", () => {
  // (PART A) GET TABLE & ATTACH CUSTOM PROPERTIES
  var stable = document.getElementById("itemList");
  stable.sortBy = null;  // sort by this column
  stable.sortAsc = null; // sort in ascending order
  stable.data = {};      // table data

  // (PART B) SORT MECHANISM
  stable.sort = by => {
    // (B1) SORT BY & DIRECTION
    if (stable.sortBy == by) { stable.sortAsc = !stable.sortAsc; }
    else { stable.sortBy = by; stable.sortAsc = true; }

    // (B2) UPDATE HTML TABLE HEADER
    for (let th of stable.getElementsByTagName("th")) {
      if (th == by) { th.className = stable.sortAsc ? "asc" : "desc"; }
      else { th.className = ""; }
    }

    // (B3) CREATE A "SORT ORDER MAP"
    let map = stable.data[by.innerHTML].map((v, i) => { return { i: i, v: v }; });

    // (B4) SORT ROWS IN ASCENDING/DESCENDING ORDER
    if (stable.sortAsc) {
      map.sort((a, b) => a.v > b.v ? 1 : (a.v < b.v ? -1 : 0));
    } else {
      map.sort((a, b) => a.v < b.v ? 1 : (a.v > b.v ? -1 : 0));
    }

    // (B5) UPDATE HTML TABLE BODY
    let tbody = stable.getElementsByTagName("tbody")[0];
    tbody.innerHTML = "";
    for (let m of map) {
      let row = tbody.insertRow();
      for (let col of Object.keys(stable.data)) {
        let cell = row.insertCell();
        cell.innerHTML = stable.data[col][m.i];
      }
    }
  };

  // (PART C) INIT SORTABLE TABLE
  let i = 1;
  for (let th of stable.getElementsByTagName("th")) {
    // (C1) "CLICK TO SORT"
    th.addEventListener("click", () => stable.sort(th));

    // (C2) GET TABLE DATA
    stable.data[th.innerHTML] = [];
    for (let td of stable.querySelectorAll(`td:nth-child(${i})`)) {
      stable.data[th.innerHTML].push(td.innerHTML);
    }
    i++;
  }
});