 //STEP 1: TÜM DOM ELEMANLARINI JS de SEÇ 
    const container=document.querySelector('.container');
    const counter =document.getElementById('counter');

    const increase=document.getElementById('increase');
    const decrease=document.getElementById('decrease');
    const reset=document.getElementById('reset');

    const goalBox=document.getElementById('goal-box');

    const goalInput=document.getElementById('goalInput');
    const setGoal=document.getElementById('setGoal');

    const goalText=document.getElementById('goalText');

   



    // STEP 1.5: Sayfa açılırken localStorage’daki hedefi yükle
     let goal = Number(localStorage.getItem("goal")) || 0;

    // Hedef varsa ekranda göster
   if (goal > 0) {
    goalText.textContent = "Hedef: " + goal;
   }



    //STEP 2: COUNT DEĞİŞKENİNİ OLUŞTURMA

    // a) localStorage’da 'count' adında veri var mı yok mu kontrol ediyoruz.
    const savedCount =localStorage.getItem('count');

   // b) Eğer savedCount null ise (yani hiç kayıt yoksa), varsayılan değer 0 olsun.
   //    Eğer kayıt varsa, string olarak gelirdi → Number() ile sayıya çeviriyoruz.
    let count = savedCount ? Number(savedCount): 0;

    // c) Bu count değerini ekrana yazıyoruz.
    counter.textContent =count;




    //STEP 3: İNCREASE BUTONU MANTIĞI

    increase.addEventListener('click', function() {

      count += 1;


      counter.textContent =count

      //localstorage güncelle 
      localStorage.setItem('count',count)

      //artış animasyonunu başlat
      counter.classList.add('increase-anim');

      setTimeout(() => {
        counter.classList.remove('increase-anim');
      },300)


      //Sayaç değiştiğinde, yeni değerin hedefe eşit olup olmadığını kontrol etmek için.confetti
     if (count === goal) {
      startConfetti();

    }

  
    })


    //STEP 4: DECREASE BUTONU MANTIĞI

    decrease.addEventListener('click', function() {
      
      count -= 1


      counter.textContent =count

      localStorage.setItem('count',count)

      counter.classList.add('decrease-anim');

      setTimeout(() => {
        counter.classList.remove('decrease-anim');
      },300)


      //Sayaç değiştiğinde, yeni değerin hedefe eşit olup olmadığını kontrol etmek için.confetti
      if (count === goal) {
       startConfetti();
      }
    })




    //STEP 5: RESET BUTONU
    reset.addEventListener('click', function() {

      count=0

      

      counter.textContent=count

      localStorage.setItem('count',count)

      counter.classList.add('reset-anim');

      setTimeout(() => {
        counter.classList.remove('reset-anim');
      },300)
    })


    //STEP 6: HEDEF OLUŞTURMA(goal)

    //a) setGoal butonuna tıklama olayı ekle
    setGoal.addEventListener('click', function() {

      //b)input'taki değeri al
      let hedef= goalInput.value;
      goal = Number(goalInput.value)

      //c)localstorage'a kaydet
      localStorage.setItem('goal',goal)

      //d)ekrana kaydet
      goalText.textContent= 'Hedef:' + goal
    
    })



    //STEP 7:HEDEFE ULAŞINCA CONFETTİ PATLATMA

    function startConfetti() {
      confetti ({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6}
      });
    }

   




