function calculateLove() {
  const name1 = document.getElementById('name1').value.trim();
  const name2 = document.getElementById('name2').value.trim();
  const result = document.getElementById('result');

  if (name1 === "" || name2 === "") {
    result.textContent = "Please enter both names!";
    return;
  }

  const lovePercent = Math.floor(Math.random() * 101); // 0 to 100

  let message = "";
  if (lovePercent > 80) message = "Perfect Match! ❤️🔥";
  else if (lovePercent > 50) message = "Cute Pair! 💕";
  else if (lovePercent > 30) message = "Hmm... Possible! 🌸";
  else message = "Friend Zone Alert! 😅";

  result.innerHTML = `${lovePercent}% Love<br>${message}`;
}
