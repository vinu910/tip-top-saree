// JSON payload for your categorized products!
const products = {
  saree: {
    red: ["https://m.media-amazon.com/images/I/71zD6LNDRdL._SX679_.jpg","https://m.media-amazon.com/images/I/61t5Rq80yeL._SY741_.jpg","https://m.media-amazon.com/images/I/617d9lB90xL._SY741_.jpg","https://m.media-amazon.com/images/I/617YAcTci7L._SX569_.jpg"],
    blue: ["https://m.media-amazon.com/images/I/61oBB8q1FlL._SY741_.jpg","https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSuLzUWa6UZDrT1vSRgt68CZSVOYIxuAl9Pd18p8MiNsuqPUuL2MhlgdDnbNcJeQPxFaPzDoLWQSpuCYAUzM-UAN0NKEuPhS1HM3nlEVOvG0my6nkLFSJK86A&usqp=Cac","https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSKqdcCBX0hTNNGopmqocLnZlvrFgX11rVh3xEltUKbhDzjeoEASJ8027p01x14UpqGwD2hQLlkuEzEaCKQESYMj9rcxCx9yTM4IL-ZtLplq2n-y93RCrBjEig&usqp=Cac"],
    green: ["https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQ1rc2-j46Ngbxfk6Zeat8fbXeRiJ2bzbI1zpYkwtGx8ELNgPnf0BlWMTY6ddwqNzVYVR5xo4r99aANJb5UaW6lP4wpNv1pQKU5ilbGLJokiYO9eDcrMMPQ57A&usqp=Cac","https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQ7-fB61n5mIOIqHgEBO80EaSs3HAc0Hm_fHAIOVKTZP_IURtR1n1IqnW7iscE0KYBRMkvnxx_futbiW4smjOGVRTFM9BVFLpQqlq49VU8m8EU--qflBGnXCdE&usqp=Cac"],
    purple: ["https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQn0YKzQmeA_j1oZP1hNI5x0tOPGWgC5slQ0Pcs2CDMSCnddNWFsQOXBTVgrgrGdqMMFu9PGKWL6SQEPBrNYGPmzopAO20dAuQniIOE0n3SmPoN-EbVfGGayA","https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTnBPqcGSFb9irSUMS29pQXkdk2kgj_mtpTECnYE-YC5ROg5rlEcHyYwLWe9r8Hdm9lUmVH3z8SndcLhcDDx-W-O9WhLAF2o2i5CATd_xn8"],
    white: ["https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRhnW4FrjWuro8m8gM2DieLOfBrZ9EjBAbjTqg-DScuC3Gfgu7Ah1vuSDCggE9d1GXAIM3f_WFnk__-9BqoM4nF9A-CEwM5IAd9u6b6akU","https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTUE7P705DfU8dstxUdlH_37GS53xmdlhvxbPvG01vUraqurAYHuhptFo7X9R6n3yfA0Lcgd3VbBKJY4dRlvVBgD_lOW0cbi4De2-Z-QxlfvkQd49tNqi4s"],
    mehroon: ["https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTyw9IAMFb1KO_KpFYdfgrquuTG87hstelDi8bna9clB3dxztNBUA2_iDZQNlM-d-NycPsJJlfkGX6BF5vhXIYhT8qT1TjfpR7K4po6TO43RbsoHKg-hxtN","https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcT3loEHjEpuPgfp7OsRYEGZDYg62e6d3VuOoh8qelZd14-9bM3TcblM5FSz3w1JfPW0c6QKUanCpjEVm-XSRf-UmOWNIChlTp3BpLyrLZCet54v7t2Dk0ej"],
    pink: ["https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRH3_5Rxop6uGzHqhGbTUw9GmLQbr2qmR6w9L4NqCoI62ksAhCAzXjCv8-VbVTRSrYDzIKdoM267TOIq8QJUYrrXjnfKgY9C5HTTwBeZ2M","https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTW_x8396sLohnxfsbuhLYS6sheUsG_ffzEe7jjE_W2WBIgVU4QvFhVsIbqm7iUnmK3YHncLUOPnnPw7V3eGXiA7MtD3URBmoIxiyMzM1LnQ61IEqgUej3b6A"]
  },
  gown: {
    red: ["https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQ7eddXEMS_NAa7XN82UtXXtRivyGjYUlJ9gJ9dnWss1xS9ueQ-Jid_mpbOhWjoklgvoNm00h_0ODrSfQbmgbOxpL7Vgx-zr3wTJo6WgJ4","https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQrNZ1bE0Bb4W0bZLEgmmt2Cy97dBkqykSNe_7yFNXpPdv4mpdCOqqhAic8vFOJpZLNM2R-JwX9_0pCed18jQ6VXf6JUbl9dgwVQ95WUDRw"],
    blue: ["https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSnByft7BUOIvgXrlnTqZt9p_dEPAT8_JARqG6V-xbw9kLI0jwxTpEMfUZvf_WR6VNlZa5vhEMm7s_bEhqaG5VERE1-4ks3WHBMK8i3FrdHQn8OTNn6gVU-TQY","https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRmOEKb9lNJAhK5hIcZEGsksQ-M2l31LJ4HoxFVjeId4AG2_tDeAc1EvYLusKa1bM8snYti29OPUtu8Fo9v71gIqssCC_XfOEqqKeQ4E3qm"],
    green: ["https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTvorGasWcf640SCH29PIJdqrXkgNPLbUt8rklxaCX0UbheyY61ImtJydBvYOsTXFu3_M_O4uQNfPoPZv_ibj_zHFnBZZBrJlwqRvV7jaQ","https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRd6bFMP-ny6MppD6EHB04x4e6muashuIxRXX90ykYBbHfNffTfxwyEyjYp2cYztqDF0yqhd6TcPUSMonAQ6n-sgj52190ZQw"],
    purple: ["https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSoCqtsJFRLRYKUdK_TJYTwokHCd2JttwSlGlEB442kWqbfD_T9J83Oyi06MgbYjeR4jRmb08dVHLz_1-G-3lt8tGAtFa_WgGXIOL6Tueve","https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSQeKtef7E8TX2r8QWpxX70fKxNyPwDdepFBXKVHuuM0Gbz9PP0vYLFXKwKAOKJMiDchRcHi7LsXtP6wpCJ1D_85-4i5Ryy1DruBdHjjCqZpC1SbD-Pi7RR"],
    orange: ["https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQn1wQ-JBilqo4aPQP4iccLJaUrTwlufGeCanE8KcUYrlB94z5axAiNz4YR8KRz_sfR9t1McBRqonupioZl5uz3xLj2GG4Ay6jtxiISesM","https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSXvMawH8hb06Rcj0BjHBYA3ufuKZa5283q4HGS96YBkzmFnmalNPzll1qIAjDNBTVWxAaW2JtcVorC_cS_g29TR-0CfjsJ6h5JSLQkQZyDhK2ND5Sm3xj22g"]
  },
  lehenga: {
    red: ["https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTh5-xcy2WvZE6ZCcvIi6daVYlwmJ7fq2sSSBiqlkcFWTecpkTZG9ByfliKremTmgvvI6xWDu-mTbU8GHsney7Dg02UHdr4wPpFMd6lMshB","https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQ-anMfPf4J0zPKsgyIREUYOJuBLn9Z7yy2aHa-dedWWNujfY6AXEoo3C-bGM5mH5SiV5qje82HxlMc9_jJb1GNmyK2_oCd"],
    blue: ["https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRv23QTmi58SdH8T06SUShFsvX5hk3rHUfst-7Gz2uyfaK2Z8SE5w_oK2IN4I81os7w-3PwKqtcB0RsoY-k_Xl0eOT6JewBOC0GnNBpMGoqW_ovdW6DNav2Tw","https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTDv_OQIt-M-d7B6JC3SkHYKhnx4ettYXOi3rRYct1k7gHeadgWp4H3136DG2phK0qQGqJ58qCe7gD9pUimlw2uYxT6Sec7Jw"],
    green: ["https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTKV5eG9JkaD4506x3Sp-axOOISPmBoM45-gJIUGnCu11xfYpU3y2m15El7USvWvx917TNfHE66SQLkkpWg8HqJ98sYpV7K8k-ZgfcO4w4A6gxFIfM21de4LA","https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQtSBPO5RQG9vAwF5RJImYhLmHfGNQ-LBaGfrisWOMAvoLlh9cu4V-_-5ksyyD6db9-O2ShLGpWrD5Pw7uily76AyVdD6_uApj2jQWJaEBDulcukBN5KL1vNA"],
    purple: ["https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSIGzt9ZOXGx5OkbdBbimawb62JZpq4A1sEC_kOzWf9hMTiGXR1Y3XfIcsZ61NN0qqpDO4AQpaXj8HGT7NMzGu3EwOFxKSzfmrEKdcdTrJZReIcSc3WbtIshg","https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSAyZFYsMUFJWWc4kDaeZM1jGo8Ksy6APII7mfDEv7tf3OeinuK_380_7cUdkyuEbFSNxZW65Jwm6EDfg0kmig_y3GZn8bhXXAT6ORDtWBK"]
  }
};

const hexColors = { red:'#d32f2f', blue:'#1976d2', green:'#388e3c', purple:'#7b1fa2', orange:'#f57c00', white:'#f5f5f5', mehroon:'#800000', pink:'#d81b60', grey:'#757575'};

let currentCat = 'saree';
let currentColor = 'all';

function setCategory(cat) {
  currentCat = cat; currentColor = 'all';
  document.getElementById('categoryTitle').innerText = 'Exquisite ' + cat.charAt(0).toUpperCase() + cat.slice(1) + 's';
  
  document.querySelectorAll('.nav-btn').forEach(b => {
    b.classList.remove('active');
    if(b.dataset.cat === cat) b.classList.add('active');
  });
  renderFilters();
  renderGrid();
}

function setColor(col) {
  currentColor = col;
  document.querySelectorAll('.color-btn').forEach(b => {
    b.classList.remove('active');
    if(b.dataset.color === col) b.classList.add('active');
  });
  renderGrid();
}

function renderFilters() {
  const filterDiv = document.getElementById('colorFilters');
  const catData = products[currentCat] || {};
  const colors = Object.keys(catData);
  
  let html = `<button class="color-btn ${currentColor==='all'?'active':''}" data-color="all" onclick="setColor('all')" style="--dot-color:#222">All Collections</button>`;
  
  colors.forEach(c => {
    let hex = hexColors[c] || '#ccc';
    let label = c;
    html += `<button class="color-btn ${currentColor===c?'active':''}" data-color="${c}" onclick="setColor('${c}')" style="--dot-color:${hex}">${label}</button>`;
  });
  filterDiv.innerHTML = html;
}

function renderGrid() {
  const grid = document.getElementById('galleryGrid');
  const catData = products[currentCat] || {};
  let html = '';
  
  for(const [col, items] of Object.entries(catData)) {
    if(currentColor !== 'all' && currentColor !== col) continue;
    items.forEach(src => {
      html += `
        <div class="gallery-card" onclick="openModal('${src}')">
          <img src="${src}" loading="lazy" alt="${col} ${currentCat}">
          <div class="card-overlay">
            <h3>${col} ${currentCat}</h3>
            <p>Click to zoom securely</p>
          </div>
        </div>
      `;
    });
  }
  grid.innerHTML = html;
  if(html === '') grid.innerHTML = '<p style="grid-column: 1/-1; text-align:center; font-size:1.2rem; margin:50px 0;">No items found securely in this collection.</p>';
}

function openModal(src) {
  const m = document.getElementById('imageModal');
  document.getElementById('modalImg').src = src;
  m.classList.add('show');
}
function closeModal(e) {
  if (e.target.id === 'imageModal' || e.target.classList.contains('close-modal')) {
    document.getElementById('imageModal').classList.remove('show');
    document.getElementById('modalImg').src = '';
  }
}

// Initial
setCategory('saree');
