const videos = document.querySelectorAll('.video');

videos.forEach(video => {
  video.addEventListener('mouseenter', () => {
    video.play();
  });
  
  video.addEventListener('mouseleave', () => {
    video.pause();
    video.currentTime = 0;
  });
});


function filterContent() {
    var selectedSponsor = document.getElementById('sponsorFilter').value;
    var selectedDate = document.getElementById('postedDateFilter').value;
    var selectedCategory = document.getElementById('categoryFilter').value;
    
    var cards = document.querySelectorAll('.custom-card');



    cards.forEach(function(card) {
        var sponsorName = card.querySelector('.sponsor').innerHTML; 
        var date = card.querySelector('.date').textContent.trim(); 
        var category = card.getAttribute('data-category'); 
  
   
   
        var showCard = true;
        var isSponsorNotSelected = selectedSponsor !== "Sponsor" && selectedSponsor !== sponsorName;
        var isCategoryNotSelected = selectedCategory !== "Category" && selectedCategory !== category;
        var isPostedDateNotSelected = selectedDate !== "Posted Date" && selectedDate !== date;
        
        if (isSponsorNotSelected ||   isCategoryNotSelected || isPostedDateNotSelected) {
          showCard = false;
        }
      
  
        if (showCard) {
         // Show the card
          card.style.display = "block"; 
        } else {
       // Hide the card
          card.style.display = "none"; 
        }
      });
    
  }



  document.getElementById('sponsorFilter').addEventListener('change', filterContent);
  document.getElementById('postedDateFilter').addEventListener('change', filterContent);
  document.getElementById('categoryFilter').addEventListener('change', filterContent);
