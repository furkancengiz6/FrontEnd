// Tüm butonları seç
const keys = document.querySelectorAll('.key');

// Klavyeye basıldığında çalışacak
window.addEventListener('keydown', playSound);

// Butona tıklanırsa çalışacak
keys.forEach((key) => {
  key.addEventListener('click', () => {
    const keyText = key.textContent.trim()[0].toUpperCase(); // Örn: "A"
    playSound({ key: keyText });
  });
});

// Ses oynatma ve animasyon fonksiyonu
function playSound(e) {
  const key = e.key ? e.key.toUpperCase() : e.keyCode;

  const audioMap = {
    A: 'clap',
    S: 'hihat',
    D: 'kick',
    F: 'openhat',
    G: 'boom',
    H: 'ride',
    J: 'snare',
    K: 'tom',
    L: 'tink',
  };

  const soundName = audioMap[key];
  if (!soundName) return;

  const audio = new Audio(`sounds/${soundName}.wav`);
  audio.currentTime = 0; // Her seferinde sıfırdan başlasın
  audio.play();

  // Butonu bul ve animasyon ekle
  const button = document.querySelector(`.key:has(:first-child:contains("${key}"))`) ||
                 Array.from(keys).find(btn => btn.textContent.trim().startsWith(key));

  if (button) {
    button.classList.add('playing');
    setTimeout(() => button.classList.remove('playing'), 100);
  }
}
