

//localStorage'da kullanıcı adını istiyoruz
let userName = localStorage.getItem("userName"); // Kullanıcı adını localStorage'dan al

if(!userName){
    userName =prompt("Enter your name:"); // Eğer yoksa kullanıcıdan ismini al
    localStorage.setItem("userName", userName); // Kullanıcı adını localStorage'a kaydet
}
document.getElementById("myName").innerText = userName;
/* prompt = kullanıcı adı istendi 
innerText ile bu ismi HTML'de id'si myName olan yere yazdık.*/

/* Saati göstmek için fonkisyon:*/

function showTime(){
    let now = new Date(); // Şu anki zamanı al
    let hours = now.getHours(); // Saat
    let minutes = now.getMinutes(); // Dakika
    let seconds = now.getSeconds(); // Saniye
    let day = now.getDay(); // Gün

    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]; // Gün isimleri
    let dayName = days[day]; // Gün ismini al

    // Saat, dakika ve saniyeyi iki haneli hale getir

    hours =(hours < 10 ? "0" : "") + hours;
    minutes = (minutes < 10 ? "0" : "") + minutes;
    seconds = (seconds < 10 ? "0" : "") + seconds;

     let time = `${hours}:${minutes}:${seconds} ${dayName}`;
    document.getElementById("myClock").innerText = time;

    setTimeout(showTime, 1000);

}

showTime(); // Fonksiyonu çağır