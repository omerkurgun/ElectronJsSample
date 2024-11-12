//Saat fonksiyonu
function updateClock() {
    let now = new Date();
    let hours = String(now.getHours()).padStart(2, '0');
    let minutes = String(now.getMinutes()).padStart(2, '0');
    let seconds = String(now.getSeconds()).padStart(2, '0');
    let timeString = `${hours}:${minutes}:${seconds}`;
    
    document.getElementById('timeArea').textContent = timeString;
}

//Html tamamen yüklendiğinde çalışacak kod
document.addEventListener('DOMContentLoaded', () => {
  
    // Saatin her saniye güncellenmesi için setInterval
    setInterval(updateClock, 1000);
    
    // Sayfa yüklendiğinde bir defa saati göster
    updateClock()
    
});