const BIN_URL = "https://api.jsonbin.io/v3/b/6986252bae596e708f166e52";
const API_KEY = "$2a$10$TQoD.UgMkKWqpoX.y.Siue2MXbiRQgPpjBu7QFU0.b17Z5BNYly6.";
const output = document.getElementById("output");

async function getData() {
  const res = await fetch(BIN_URL, { headers: { "X-Master-Key": API_KEY } });

  const data = await res.json();

  const singleAffiliate = data.record.affiliates.map(
    (a) =>
      ` 
            <li> 
                ${a.fName} ${a.lName} (${a.isStudent ? "Student" : "Not Student"}) 
            </li> 
        `
  );

  output.innerHTML += singleAffiliate;
}
