    
    let dataplayer ;
    if(localStorage.product != null){
      dataplayer = JSON.parse(localStorage.product);
  }else{
    dataplayer = [
        {
          name: "Messi",
          photo: "../img/img-joueurs/messi.avif",
          position: "RWF",
          nationality: "../img/nationality/argentina.png",
          club: "../img/clop/Inter_Miami-removebg-preview.png",
          league: "../img/league/Major League Soccer.jpg",
          rating: 93,
          pace: 85,
          shooting: 92,
          passing: 91,
          dribbling: 95,
          defending: 35,
          physical: 65
        },
        {
          name: "Ronaldo",
          photo: "../img/img-joueurs/ronaldo.avif",
          position: "CF",
          nationality: "../img/nationality/portugal.png",
          club: "../img/clop/Al_Nassr-removebg-preview.png",
          league: "../img/league/saudi.jpg",
          rating: 91,
          pace: 84,
          shooting: 94,
          passing: 82,
          dribbling: 87,
          defending: 34,
          physical: 77
        },
        {
          name: "Bruyne",
          photo: "../img/img-joueurs/de bruyne.avif",
          position: "CMF",
          nationality: "../img/nationality/Belgium.png",
          club: "../img/clop/city-removebg-preview.png",
          league: "../img/league/premier leaghe.jpg",
          rating: 91,
          pace: 74,
          shooting: 86,
          passing: 93,
          dribbling: 88,
          defending: 64,
          physical: 78
        },
        {
          name: "Mbappé",
          photo: "../img/img-joueurs/mbappé.avif",
          position: "CF",
          nationality: "../img/nationality/france.png",
          club: "../img/clop/real_madrid-removebg-preview.png",
          league: "../img/league/la liga.png",
          rating: 92,
          pace: 97,
          shooting: 89,
          passing: 80,
          dribbling: 92,
          defending: 39,
          physical: 77
        },
        {
          name: "konte",
          photo: "../img/img-joueurs/konte.avif",
          position: "CA",
          nationality: "../img/nationality/Netherlands.png",
          club: "../img/clop/liverpool-removebg-preview.png",
          league: "../img/league/premier leaghe.jpg",
          rating: 90,
          pace: 75,
          shooting: 60,
          passing: 70,
          dribbling: 72,
          defending: 92,
          physical: 86
        },
        {
          name: "Rudiger",
          photo: "../img/img-joueurs/rudiger.avif",
          position: "CB",
          nationality: "../img/nationality/almania.png",
          club: "../img/clop/real_madrid-removebg-preview.png",
          league: "../img/league/la liga.png",
          rating: 88,
          pace: 82,
          shooting: 55,
          passing: 73,
          dribbling: 70,
          defending: 86,
          physical: 86
        },
        {
          name: "Neymar",
          photo: "../img/img-joueurs/neymar.avif",
          position: "LWF",
          nationality: "../img/nationality/Brazil.png",
          club: "../img/clop/Al-Hilal-removebg-preview.png",
          league: "../img/league/saudi.jpg",
          rating: 90,
          pace: 91,
          shooting: 83,
          passing: 86,
          dribbling: 94,
          defending: 37,
          physical: 61
        },
        {
          name: "Salah",
          photo: "../img/img-joueurs/salah.avif",
          position: "RWR",
          nationality: "../img/nationality/Egypt.png",
          club: "../img/clop/liverpool-removebg-preview.png",
          league: "../img/league/premier leaghe.jpg",
          rating: 89,
          pace: 93,
          shooting: 87,
          passing: 81,
          dribbling: 90,
          defending: 45,
          physical: 75
        },
        {
          name: "Kimmich",
          photo: "../img/img-joueurs/kimmich.avif",
          position: "CMD",
          nationality: "../img/nationality/almania.png",
          club: "../img/clop/bayern-removebg-preview.png",
          league: "../img/league/eredivisie.png",
          rating: 89,
          pace: 70,
          shooting: 75,
          passing: 88,
          dribbling: 84,
          defending: 84,
          physical: 81
        },
        {
          name: "Oblak",
          photo: "../img/img-joueurs/oblak.avif",
          position: "GB",
          nationality: "../img/nationality/Slovenia.png",
          club: "../img/clop/Atletico_Madrid-removebg-preview.png",
          league: "../img/league/la liga.png",
          rating: 91,
          diving: 89,
          handling: 90,
          kicking: 78,
          reflexes: 92,
          speed: 50,
          positioning: 88
        },
        {
          name: "Modrić",
          photo: "../img/img-joueurs/modric.avif",
          position: "CMA",
          nationality: "../img/nationality/Croatia.png",
          club: "../img/clop/real_madrid-removebg-preview.png",
          league: "../img/league/la liga.png",
          rating: 88,
          pace: 74,
          shooting: 78,
          passing: 89,
          dribbling: 90,
          defending: 72,
          physical: 65
        },
        {
          name: "Vinicius",
          photo: "../img/img-joueurs/vini.avif",
          position: "LWF",
          nationality: "../img/nationality/Brazil.png",
          club: "../img/clop/real_madrid-removebg-preview.png",
          league: "../img/league/la liga.png",
          rating: 89,
          pace: 91,
          shooting: 88,
          passing: 85,
          dribbling: 94,
          defending: 39,
          physical: 61
        },
        {
          name: "Brahim",
          photo: "../img/img-joueurs/brahim.avif",
          position: "LWR",
          nationality: "../img/nationality/moroco.jpg",
          club: "../img/clop/real_madrid-removebg-preview.png",
          league: "../img/league/la liga.png",
          rating: 82,
          pace: 85,
          shooting: 74,
          passing: 78,
          dribbling: 85,
          defending: 31,
          physical: 56
        },
        {
          name: "Benzema",
          photo: "../img/img-joueurs/brnzema.avif",
          position: "CF",
          nationality: "../img/nationality/france.png",
          club: "../img/clop/Al-Ittihad-removebg-preview.png",
          league: "../img/league/saudi.jpg",
          rating: 90,
          pace: 80,
          shooting: 87,
          passing: 82,
          dribbling: 83,
          defending: 35,
          physical: 82
        },
        {
            name: "Coman",
            photo: "../img/img-joueurs/coman.avif",
            position: "LWR",
            nationality: "../img/nationality/france.png",
            club: "../img/clop/bayern-removebg-preview.png",
            league: "../img/league/eredivisie.png",
            rating: 85,
            pace: 92,
            shooting: 72,
            passing: 78,
            dribbling: 88,
            defending: 34,
            physical: 72
          },
          {
            name: "Dier",
            photo: "../img/img-joueurs/dier.avif",
            position: "LWF",
            nationality: "../img/nationality/England.png",
            club: "../img/clop/Tottenham_Hotspur-removebg-preview.png",
            league: "../img/league/premier leaghe.jpg",
            rating: 81,
            pace: 60,
            shooting: 50,
            passing: 65,
            dribbling: 55,
            defending: 85,
            physical: 79
          },
          {
            name: "Guirassy",
            photo: "../img/img-joueurs/guirassy.avif",
            position: "LWF",
            nationality: "../img/nationality/france.png",
            club: "../img/clop/Stade_Rennais-removebg-preview.png",
            league: "../img/league/Ligue 1.png",
            rating: 80,
            pace: 80,
            shooting: 85,
            passing: 70,
            dribbling: 76,
            defending: 40,
            physical: 78
          },
          {
            name: "Konte",
            photo: "../img/img-joueurs/konte.avif",
            position: "LWR",
            nationality: "../img/nationality/france.png",
            club: "../img/clop/Chelsea-removebg-preview.png",
            league: "../img/league/premier leaghe.jpg",
            rating: 85,
            pace: 75,
            shooting: 65,
            passing: 80,
            dribbling: 85,
            defending: 82,
            physical: 88
          },
          {
            name: "Maignan",
            photo: "../img/img-joueurs/maignan.avif",
            position: "LWF",
            nationality: "../img/nationality/france.png",
            club: "../img/clop/AC_Milan-removebg-preview.png",
            league: "../img/league/Serie A.png",
            rating: 87,
            pace: 50,
            shooting: 30,
            passing: 60,
            dribbling: 65,
            defending: 90,
            physical: 82
          },
          {
            name: "Martinili",
            photo: "../img/img-joueurs/martinili.avif",
            position: "LWF",
            nationality: "../img/nationality/Brazil.png",
            club: "../img/clop/arsenal-removebg-preview.png",
            league: "../img/league/premier leaghe.jpg",
            rating: 82,
            pace: 80,
            shooting: 45,
            passing: 70,
            dribbling: 75,
            defending: 82,
            physical: 78
          },
          {
            name: "Thuram",
            photo: "../img/img-joueurs/thuram.avif",
            position: "LWR",
            nationality: "../img/nationality/france.png",
            club: "./img/clop/Borussia_Monchengladbach-removebg-preview.png",
            league: "../img/league/bundesliga.png",
            rating: 83,
            pace: 84,
            shooting: 76,
            passing: 70,
            dribbling: 80,
            defending: 40,
            physical: 82
          },
          {
            name: "White",
            photo: "../img/img-joueurs/white.avif",
            position: "LB",
            nationality: "../img/nationality/England.png",
            club: "../img/clop/arsenal-removebg-preview.png",
            league: "../img/league/premier leaghe.jpg",
            rating: 83,
            pace: 75,
            shooting: 60,
            passing: 70,
            dribbling: 65,
            defending: 85,
            physical: 79
          },
          {
            name: "Wirtz",
            photo: "../img/img-joueurs/wirtz.avif",
            position: "CMF",
            nationality: "../img/nationality/almania.png",
            club: "../img/clop/leverkusen-removebg-preview.png",
            league: "../img/league/eredivisie.png",
            rating: 85,
            pace: 78,
            shooting: 75,
            passing: 85,
            dribbling: 90,
            defending: 45,
            physical: 68
          },
          {
            name: "Walker",
            photo: "../img/img-joueurs/wolker.avif",
            position: "RB",
            nationality: "../img/nationality/England.png",
            club: "../img/clop/city-removebg-preview.png",
            league: "../img/league/premier leaghe.jpg",
            rating: 84,
            pace: 86,
            shooting: 60,
            passing: 70,
            dribbling: 65,
            defending: 82,
            physical: 78
          },
      ];
    }

const Modal=document.getElementById("addModal");
const jour=document.getElementById("addJour");
const joueurs=document.getElementById("addtoutmodel");
const ditayJour=document.getElementById("ditayJour");
const addmodal=document.getElementById("task-modal");

const name=document.getElementById("name");
const rating=document.getElementById("rating");
const pace=document.getElementById("pace");
const shooting=document.getElementById("shooting");
const passing=document.getElementById("passing");
const dribbling=document.getElementById("dribbling");
const defending=document.getElementById("defending");
const physical=document.getElementById("physical");
const position=document.getElementById("position");
const club=document.getElementById("club");



function toggleModalajout(){
  jour.classList.remove("hidden");
  jour.classList.add("show");
}
function returnPageajout(){
  jour.classList.add("hidden");
}


const form = document.querySelector("form"); 
form.addEventListener("submit", (event) => {
  event.preventDefault(); 
console.log(position)
 
  let newplayer = {
      name:name.value,
      rating:rating.value,
      pace:pace.value,
      shooting:shooting.value, 
      passing:passing.value,
      dribbling:dribbling.value,
      defending:defending.value,
      physical:physical.value,
      position:position.value,
      club:club.value
  };

  clearContent();
  dataplayer.push(newplayer);
  localStorage.setItem('product', JSON.stringify(dataplayer));
  console.log(localStorage.getItem('product'));
  document.getElementById('addJour').classList.add('hidden');
});


function clearContent(){
      name.value = '';
      rating.value = '';
      pace.value = '' ;
      shooting.value = '';
      passing.value = '';
      dribbling.value= '';
      defending.value= '';
      physical.value= '';
      position.value='';
      club.value='';
}




function toggleModaljour(position){
    Modal.classList.remove("hidden");
    Modal.classList.add("show");
    carte(position)
}

function returnPagejour(){
    Modal.classList.add("hidden");
}


function carte(position) {
    const playList = document.getElementById("carte1");
    let playHTML = '';

    const filteredPlayers = dataplayer.filter(player => player.position === position);

    filteredPlayers.forEach(play => {
        playHTML += `
    <div class="relative min-w-[200px] max-w-[200px] h-[300px] bg-gray-800 rounded-md overflow-hidden border shadow-lg">
        <img class="w-full h-auto" src="../img/carte2.png" alt="large image">
        <img id="playerPhoto" class="absolute bottom-9 left-6 w-[85px] h-auto" src="${play.photo}" alt="small image">
        <p id="score" class="absolute bottom-32 left-9 font-bold text-[10px]">${(((play.rating)+(play.pace)+(play.shooting)+(play.passing)+(play.dribbling)+(play.defending)+(play.physical))/7).toFixed(2)}</p>
        <p id="playerPosition" class="absolute bottom-28 left-9 font-bold text-[10px]">${play.position}</p>
        <p id="playerName" class="absolute bottom-[70px] left-10 text-[15px] text-white">${play.name}</p>
        <img id="playerNationality" class="absolute left-9 bottom-14 w-[20px] h-auto" src="${play.nationality}" alt="flag">
        <img id="playerLeague" class="absolute left-[60px] bottom-9 w-[20px] h-auto rounded-3xl" src="${play.league}" alt="league">
        <img id="playerClub" class="absolute left-[75px] bottom-12 w-[20px] h-auto" src="${play.club}" alt="clob">
        <button onclick="carte()">
            <img onclick="addPlayer(this)" class="absolute w-[30%] left-12 bottom-1 h-auto" src="../img/chenge.png" alt="change">
        </button>
    </div>`;
    });

    playList.innerHTML = playHTML;
}


function addPlayer(tes) {
    const carde = tes.closest(".relative");

    let playerName = carde.querySelector("#playerName").innerHTML;
    let score = carde.querySelector("#score").innerHTML;
    let playerPhoto = carde.querySelector("#playerPhoto").src;
    let playerPosition = carde.querySelector("#playerPosition").innerHTML;
    let playerNationality = carde.querySelector("#playerNationality").src;
    let playerClub = carde.querySelector("#playerClub").src;
    let playerLeague = carde.querySelector("#playerLeague").src;

    let targetElement;
    if (playerPosition === "GB") {
        targetElement = document.getElementById("GB");
    } else if (playerPosition === "LB") {
        targetElement = document.getElementById("LB");
    } else if (playerPosition === "CA") {
        targetElement = document.getElementById("CA");
    } else if (playerPosition === "CB") {
        targetElement = document.getElementById("CB");
    } else if (playerPosition === "RB") {
        targetElement = document.getElementById("RB");
    } else if (playerPosition === "CMF") {
        targetElement = document.getElementById("CMF");
    } else if (playerPosition === "CMA") {
        targetElement = document.getElementById("CMA");
    } else if (playerPosition === "CMD") {
        targetElement = document.getElementById("CMD");
    } else if (playerPosition === "LWF") {
        targetElement = document.getElementById("LWF");
    } else if (playerPosition === "CF") {
        targetElement = document.getElementById("CF");
    } else if (playerPosition === "RWF") {
        targetElement = document.getElementById("RWF");
    }

    if (targetElement) {
        targetElement.innerHTML = `
        <div id="div1">
            <img class="absolute top-[45%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80px] h-auto" src="${playerPhoto}" alt="player image">
            <p class="absolute top-[5%] left-1/3 transform -translate-x-1/2 text-white font-bold text-[10px]">${score}</p>
            <p class="absolute top-[15%] left-1/3 transform -translate-x-1/2 text-white font-bold text-[10px]">${playerPosition}</p>
            <p class="absolute top-[45%] left-1/2 transform -translate-x-1/2 text-white font-bold text-[10px]">${playerName}</p>
            <img class="absolute top-[60%] left-1/3 transform -translate-x-1/2 -translate-y-1/2 w-[12px] h-auto" src="${playerNationality}" alt="flag">
            <img class="absolute top-[65%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[15px] h-auto rounded-3xl" src="${playerLeague}" alt="league">
            <img class="absolute top-[60%] left-[65px] transform -translate-x-1/2 -translate-y-1/2 w-[15px] h-auto" src="${playerClub}" alt="club logo">
            </div>
        `;
    }
    Modal.classList.add("hidden");
}


function toggleModalatoutjout(){
  joueurs.classList.remove("hidden");
  joueurs.classList.add("show");
  toutcarte(dataplayer)
}
function returnPageatoutjout(){
  joueurs.classList.add("hidden");
}
function toutcarte(dataplayer) {
  const playListContainer = document.getElementById("carte2");
  
  let playHTML = '';

  dataplayer.forEach(play => {
    playHTML += `
      <div class="relative min-w-[200px] max-w-[200px] h-[300px] bg-gray-800 rounded-md overflow-hidden border shadow-lg">
        <img class="w-full h-auto" src="../img/carte2.png" alt="large image">
        <img id="playerPhoto" class="absolute bottom-9 left-6 w-[85px] h-auto" src="${play.photo}" alt="small image">
        <p class="absolute bottom-32 left-9 font-bold text-[10px]">${(((play.rating)+(play.pace)+(play.shooting)+(play.passing)+(play.dribbling)+(play.defending)+(play.physical))/7).toFixed(2)}</p>
        <p id="playerPosition" class="absolute bottom-28 left-9 font-bold text-[10px]">${play.position}</p>
        <p id="playerName" class="absolute bottom-[70px] right-9 text-[15px] text-white">${play.name}</p>
        <img id="playerNationality" class="absolute left-9 bottom-14 w-[20px] h-auto" src="${play.nationality}" alt="flag">
        <img id="playerLeague" class="absolute left-[60px] bottom-9 w-[20px] h-auto rounded-3xl" src="${play.league}" alt="league">
        <img id="playerClub" class="absolute left-[75px] bottom-12 w-[20px] h-auto" src="${play.club}" alt="club logo">
        <button onclick="removeplaer('${play.name}')">
          <img class="absolute w-[30%] left-12 bottom-1 h-auto" src="../img/delete.webp" alt="change">
        </button>
      </div>`;
  });

  playListContainer.innerHTML = playHTML;
}

function removeplaer(playername){
  const playerToRemove = dataplayer.find(player => player.name === playername);
  if (playerToRemove) {
    const index = dataplayer.indexOf(playerToRemove);
    if(index > -1) {
      dataplayer.splice(index, 1);
      localStorage.setItem('product', JSON.stringify(dataplayer));
    }
  }
  toggleModalatoutjout();
}


function ggggg(){
  const div = document.getElementById('div1');
  const paragraphs = div.querySelectorAll('p');
  const image = div.querySelectorAll('img');

  paragraphs.forEach(p => p.remove());
  image.forEach(img => img.remove());
}


function toggleModaladitay(index){
  ditayJour.classList.remove("hidden");
  ditayJour.classList.add("show");
  information(index);
}
function returnPageditay(){
  ditayJour.classList.add("hidden");
}

function information(index) {
  const targetElement = document.getElementById('information');
  const player = dataplayer[index];

  if (targetElement && player) {
      targetElement.innerHTML = `
          <div class="grid grid-cols-2 gap-2 text-black bg-white p-4 rounded-lg">
              <p>Name:</p><p>${player.name}</p>
              <p>Rating:</p><p>${player.rating}</p>
              <p>Pace:</p><p>${player.pace}</p>
              <p>Shooting:</p><p>${player.shooting}</p>
              <p>Passing:</p><p>${player.passing}</p>
              <p>Dribbling:</p><p>${player.dribbling}</p>
              <p>Defending:</p><p>${player.defending}</p>
              <p>Physical:</p><p>${player.physical}</p>
              <p>Position:</p><p>${player.position}</p>
          </div>
      `;
  }
}




