const mutualFundEl = document.getElementById('mutual-funds')
async function getchar() {

    let url = await fetch("https://api.mfapi.in/mf")
    let res = await url.json();
    console.log(res);
    display(res)
}
getchar()

function display(MF) {
    const funds = MF.map((MF) => {
        return `
        <div class="card m-3 bg-secondary text-light shw" style="width: 18rem;">
  <div class="card-body">
  <h4>Fund Name</h4>
    <p class="card-text">${MF.schemeName}</p>
  </div>
</div>
        `
    })
    console.log(MF.schemeName);
    mutualFundEl.innerHTML = funds;

}