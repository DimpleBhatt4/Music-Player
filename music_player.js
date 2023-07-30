let songs = [
  {
    name: "Closer",
    singer: "The Chainsmokers",
    length: "04:05",
    img_src: "https://i1.sndcdn.com/artworks-000179073287-3ur3or-t500x500.jpg",
    song:'/songs/Closer (The Chainsmokers) Ft.Halsey 320Kbps(Gomirchi.in).mp3'

  },
  {
    name: "Blank Space",
    singer: "Taylor Swift",
    length: "03:51",
    img_src: "https://i1.sndcdn.com/artworks-000131714331-p1sy5c-t500x500.jpg",
    song:'/songs/Blank Space.mp3'
  },
  {
    name: "Cheap Thrills",
    singer: "Sia ft. Sean Paul",
    length: "03:44",
    img_src: "https://i1.sndcdn.com/artworks-000174898618-vsdrz9-t500x500.jpg",
    song:'/songs/Cheap_Thrills_-_(TopJatt.Com).mp3'
  },
  {
    name: "Drag Me Down",
    singer: "One Direction",
    length: "03:12",
    img_src:
      "https://upload.wikimedia.org/wikipedia/en/3/34/One_Direction_-_Drag_Me_Down_%28Official_Single_Cover%29.png",
    song:'/songs/One Direction - Drag Me Down(VipMusic.In).mp3'

  },
  {
    name: "Love Story",
    singer: "Taylor Swift",
    length: "03:53",
    img_src:
      "https://upload.wikimedia.org/wikipedia/en/thumb/0/01/Taylor_Swift_-_Love_Story.png/220px-Taylor_Swift_-_Love_Story.png",
    song:'/songs/taylor swift-love story.mp3'
  },
  {
    name: "Same Old Love",
    singer: "Selena Gomez",
    length: "03:48",
    img_src:
      "https://upload.wikimedia.org/wikipedia/en/thumb/b/b3/Same_Old_Love_by_Selena_Gomez.png/220px-Same_Old_Love_by_Selena_Gomez.png",
    song:'/songs/Same Old Love (Selena Gomez) - 320 Kbps(MajMasti.in).mp3'
  },
  {
    name: "Shape of You",
    singer: "Ed Sheeran",
    length: "03:51",
    img_src:
      "https://upload.wikimedia.org/wikipedia/en/thumb/b/b4/Shape_Of_You_%28Official_Single_Cover%29_by_Ed_Sheeran.png/220px-Shape_Of_You_%28Official_Single_Cover%29_by_Ed_Sheeran.png",
    song:'/songs/Shape of You - Ed Sheeran (DJJOhAL.Com).mp3'
  },
];
// song details variable
let song_name=document.querySelector('.song-detail .detail-name');
let singer_name=document.querySelector('.song-detail .detail-singer');
let img_container=document.querySelector('.img-container img');
let total_time=document.querySelector('.timing-wrapper .total-time');
let audio = document.querySelector(".audio-box audio");
let audio_song=document.querySelector('.audio-src');

// Buttons
let shuffle_btn=document.querySelector('.shuffle-btn');
let pause_play_btn = document.querySelector(".pause-play");
let time_spent = document.querySelector(".time-spent");
let next_btn=document.querySelector('.next-btn');
let prev_btn=document.querySelector('.previous-btn');
let loop_btn=document.querySelector('.loop-btn');

// Ham burger
let ham_btn_wrapper=document.querySelector('.hamburger');
let side_menu=document.querySelector('.side-menu');
let ham_btn=document.querySelector('.ham-btn');
let cross_btn= document.querySelector('.cross-btn');
ham_btn_wrapper.addEventListener('click',(e)=>{
    side_menu.innerHTML='';
    ham_btn.classList.toggle('disp-none');
   cross_btn.classList.toggle('disp-none');
    side_menu.classList.toggle('disp-none');

    if(ham_btn.classList.contains('disp-none')){
        songs.forEach((song)=>{
            let div=document.createElement('div');
            div.className='songs-playlist';
            div.innerHTML+=`
                <div class='side-wrapper d-flex' data-num-val=${songs.indexOf(song)}>
                    <div class='side-img'>
                        <img src="${song.img_src}">
                    </div>
                    <div class='side-detail'>
                        <div class='side-name'>${song.name}</div>
                        <div class='side-singer'>${song.singer}</div>
                    </div>
                </div>
            `;
            side_menu.append(div);
        })
        // Selecting songs from side menu
       //  setTimeout(() => {
            document.querySelectorAll('.side-wrapper').forEach((item)=>{
               item.addEventListener('click',(e)=>{
                   let curr_ind=item.dataset.numVal; //yha uthari hu vo num undefined ara hai reason coulve be? kra toj shi h :(lemme seeok lagaook
                   console.log(curr_ind);//workedddddd let me check one thingok
                   setSongDetail(curr_ind);
               })
           })
           
       //  }, 2000);
    }
})
//dikhau?ya thk hai? ye created hai shi se parrr jab mein
song_name.innerHTML=songs[0].name;
singer_name.innerHTML=songs[0].singer;
total_time.innerHTML=songs[0].length;
img_container.src=songs[0].img_src;
audio_song.src=songs[0].song;
audio.load();
audio.pause();

function setSongDetail(i=0){
    song_name.innerHTML=songs[i].name;
    singer_name.innerHTML=songs[i].singer;
    total_time.innerHTML=songs[i].length;
    img_container.src=songs[i].img_src;
    audio.pause();
    audio_song.src=songs[i].song;
    audio.load();
}


// Shuffle song button
let shuffle_val=false;
shuffle_btn.addEventListener('click',(e)=>{
    e.target.classList.toggle('shuffle_reset_prop');
    if(e.target.classList.contains('shuffle_reset_prop')){
        shuffle_val=true;
    }
    else{
        shuffle_val=false;
    }
})

// Loop button
let loop_val=false;
loop_btn.addEventListener('click',(e)=>{
    e.target.classList.toggle('shuffle_reset_prop');
    if(e.target.classList.contains('shuffle_reset_prop')){
        loop_val=true;
    }
    else{
        loop_val=false;
    }
   
})
// Pause play button

pause_play_btn.addEventListener("click", () => {
  let pause_btn = pause_play_btn.querySelector(".pause-btn");
  let play_btn = pause_play_btn.querySelector(".play-btn");

  play_btn.classList.toggle("disp-none");
  pause_btn.classList.toggle("disp-none");
  if (play_btn.classList.contains("disp-none")) {
    audio.play();
    let x = setInterval(()=>{
        console.log(audio.currentTime);
        let min=Math.floor(audio.currentTime/60).toString().padStart(2,0);
        let sec=Math.floor(audio.currentTime%60).toString().padStart(2,0);
        time_spent.innerHTML=`${min}:${sec}`;
    }, 1000);
  } else {
    audio.pause();
    audio.autoplay = false;

  }
});

// Next song button
let temp_next=0;
next_btn.addEventListener('click',(e)=>{
    audio.pause();
    audio.autoplay = false;
    prev_btn.querySelector('i').classList.remove('disp-blur');
    prev_btn.classList.remove('disp-blur');
    prev_btn.querySelector('i').style.color='#13131e';
    if(shuffle_val){
        let rand_num=Math.floor(Math.random()*7);
        setSongDetail(rand_num);
    }
    else if(loop_val){
        setSongDetail(temp_next);
    }
    else if(shuffle_val===false && temp_next>=songs.length-1){
        e.target.classList.add('disp-blur');
    }
    else{
        temp_next+=1;
        setSongDetail(temp_next);
    }
})

// Previous song button
let temp_prev=songs.length;
prev_btn.addEventListener('click',(e)=>{
    next_btn.querySelector('i').classList.remove('disp-blur');
    next_btn.classList.remove('disp-blur');
    next_btn.querySelector('i').style.color='#13131e';

    if(shuffle_val){
        let rand_num=Math.floor(Math.random()*7);
        setSongDetail(rand_num);
    }
    else if(loop_val){
        setSongDetail(temp_next);
    }
    else if(shuffle_val===false && temp_next<=0){
        e.target.classList.add('disp-blur');
    }
    else{
        temp_next-=1;
        setSongDetail(temp_next);
    }
})

