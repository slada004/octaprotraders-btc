const siteName = document.location.host;
if (document.getElementById('site-name') === null) {
  console.log('Nothing here');
} else {
  document.getElementById('site-name').textContent = siteName;
}

// (function blackList () {
//   const blackListed = localStorage.getItem('blackList');

//   // if (blackListed === null)

//   if (blackListed === 'true' || blackListed !== null) {
//     console.log(blackListed);
//     document.location.href = '/user.html';
//   }
// } ());


if (document.location.origin === 'https://platonicextrade.com') {
  console.log('LocalHost');

      // <script src="//code.tidio.co/q80hpvc9ytpns2itn9kyxwwbv7hvcztn.js" async></script>
} else if (document.location.origin === 'https://binarytrcrypt.com') {
  var script = document.createElement('script');
  script.src = "https://code.tidio.co/q80hpvc9ytpns2itn9kyxwwbv7hvcztn.js";
  document.head.appendChild(script);
} else {
  null;
}
