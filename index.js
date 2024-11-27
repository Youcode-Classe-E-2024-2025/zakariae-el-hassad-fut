    const players = [
        {
          name: "Messi",
          photo: "../img/img-joueurs/messi.avif",
          position: "RW",
          nationality: "Argentina",
          flag: "https://cdn.sofifa.net/flags/ar.png",
          club: "Inter Miami",
          logo: "https://cdn.sofifa.net/meta/team/239235/120.png",
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
          position: "ST",
          nationality: "Portugal",
          flag: "https://cdn.sofifa.net/flags/pt.png",
          club: "Al Nassr",
          logo: "https://cdn.sofifa.net/meta/team/2506/120.png",
          rating: 91,
          pace: 84,
          shooting: 94,
          passing: 82,
          dribbling: 87,
          defending: 34,
          physical: 77
        },
        {
          name: "De Bruyne",
          photo: "../img/img-joueurs/de bruyne.avif",
          position: "CM",
          nationality: "Belgium",
          flag: "https://cdn.sofifa.net/flags/be.png",
          club: "Manchester City",
          logo: "https://cdn.sofifa.net/players/239/085/25_120.png",
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
          position: "ST",
          nationality: "France",
          flag: "https://cdn.sofifa.net/flags/fr.png",
          club: "Real Madrid",
          logo: "https://cdn.sofifa.net/meta/team/3468/120.png",
          rating: 92,
          pace: 97,
          shooting: 89,
          passing: 80,
          dribbling: 92,
          defending: 39,
          physical: 77
        },
        {
          name: "van Dijk",
          photo: "../img/img-joueurs/konte.avif",
          position: "CB",
          nationality: "Netherlands",
          flag: "https://cdn.sofifa.net/flags/nl.png",
          club: "Liverpool",
          logo: "https://cdn.sofifa.net/meta/team/8/120.png",
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
          nationality: "Germany",
          flag: "https://cdn.sofifa.net/flags/de.png",
          club: "Real Madrid",
          logo: "https://cdn.sofifa.net/meta/team/3468/120.png",
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
          position: "LW",
          nationality: "Brazil",
          flag: "https://cdn.sofifa.net/flags/br.png",
          club: "Al-Hilal",
          logo: "https://cdn.sofifa.net/meta/team/7011/120.png",
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
          position: "RW",
          nationality: "Egypt",
          flag: "https://cdn.sofifa.net/flags/eg.png",
          club: "Liverpool",
          logo: "https://cdn.sofifa.net/meta/team/8/120.png",
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
          position: "CM",
          nationality: "Germany",
          flag: "https://cdn.sofifa.net/flags/de.png",
          club: "Bayern Munich",
          logo: "https://cdn.sofifa.net/meta/team/503/120.png",
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
          position: "GK",
          nationality: "Slovenia",
          flag: "https://cdn.sofifa.net/flags/si.png",
          club: "Atletico Madrid",
          logo: "https://cdn.sofifa.net/meta/team/7980/120.png",
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
          position: "CM",
          nationality: "Croatia",
          flag: "https://cdn.sofifa.net/flags/hr.png",
          club: "Real Madrid",
          logo: "https://cdn.sofifa.net/meta/team/3468/120.png",
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
          position: "LW",
          nationality: "Brazil",
          flag: "https://cdn.sofifa.net/flags/br.png",
          club: "Real Madrid",
          logo: "https://cdn.sofifa.net/meta/team/3468/120.png",
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
          position: "LW",
          nationality: "Morocco",
          flag: "https://cdn.sofifa.net/flags/ma.png",
          club: "Real Madrid",
          logo: "https://cdn.sofifa.net/meta/team/3468/120.png",
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
          position: "ST",
          nationality: "France",
          flag: "https://cdn.sofifa.net/flags/fr.png",
          club: "Al-Ittihad",
          logo: "https://cdn.sofifa.net/meta/team/7023/120.png",
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
            position: "LW",
            nationality: "France",
            flag: "https://cdn.sofifa.net/flags/fr.png",
            club: "Bayern Munich",
            logo: "https://cdn.sofifa.net/meta/team/120.png",
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
            position: "LW",
            nationality: "England",
            flag: "https://cdn.sofifa.net/flags/gb.png",
            club: "Tottenham Hotspur",
            logo: "https://cdn.sofifa.net/meta/team/120.png",
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
            position: "LW",
            nationality: "France",
            flag: "https://cdn.sofifa.net/flags/fr.png",
            club: "Stade Rennais",
            logo: "https://cdn.sofifa.net/meta/team/120.png",
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
            position: "LW",
            nationality: "France",
            flag: "https://cdn.sofifa.net/flags/fr.png",
            club: "Chelsea",
            logo: "https://cdn.sofifa.net/meta/team/120.png",
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
            position: "LW",
            nationality: "France",
            flag: "https://cdn.sofifa.net/flags/fr.png",
            club: "AC Milan",
            logo: "https://cdn.sofifa.net/meta/team/120.png",
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
            position: "LW",
            nationality: "Brazil",
            flag: "https://cdn.sofifa.net/flags/br.png",
            club: "Arsenal",
            logo: "https://cdn.sofifa.net/meta/team/120.png",
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
            position: "LW",
            nationality: "France",
            flag: "https://cdn.sofifa.net/flags/fr.png",
            club: "Borussia Monchengladbach",
            logo: "https://cdn.sofifa.net/meta/team/120.png",
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
            position: "LW",
            nationality: "England",
            flag: "https://cdn.sofifa.net/flags/gb.png",
            club: "Arsenal",
            logo: "https://cdn.sofifa.net/meta/team/120.png",
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
            position: "LW",
            nationality: "Germany",
            flag: "https://cdn.sofifa.net/flags/de.png",
            club: "Bayer Leverkusen",
            logo: "https://cdn.sofifa.net/meta/team/120.png",
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
            position: "LW",
            nationality: "England",
            flag: "https://cdn.sofifa.net/flags/gb.png",
            club: "Manchester City",
            logo: "https://cdn.sofifa.net/meta/team/120.png",
            rating: 84,
            pace: 86,
            shooting: 60,
            passing: 70,
            dribbling: 65,
            defending: 82,
            physical: 78
          }
      ];





const Modal=document.getElementById("addModal");


function toggleModal(){
    Modal.classList.remove("hidden");
    Modal.classList.add("show");
}

function returnPage(){
    Modal.classList.add("hidden");
}


function carte() {
    const playList = document.getElementById("carte1");
    let playHTML = '';

    players.forEach(play => {
        playHTML += `
    <div class="relative w-[200px] h-[300px] bg-gray-800 rounded-md overflow-hidden border shadow-lg">
        <img class="w-full h-auto" src="../img/carte2.png" alt="large image">
        <img class="absolute bottom-9 left-6 w-[85px] h-auto" src="${play.photo}" alt="small image">
        <p class="absolute bottom-32 left-9 font-bold text-[10px]">123</p>
        <p class="absolute bottom-28 left-9 font-bold text-[10px]">${play.position}</p>
        <p class="absolute bottom-[70px] left-10 text-[15px] text-white">${play.name}</p>
        <img class="absolute left-9 bottom-14 w-[20px] h-auto" src="../img/espagne.png" alt="flag">
        <img class="absolute left-[60px] bottom-9 w-[20px] h-auto rounded-3xl" src="../img/laliga1.png" alt="league">
        <img class="absolute left-[75px] bottom-12 w-[40px] h-auto" src="../img/barcelone.png" alt="club logo">
        <button onclick="carte()">
            <img class="absolute w-[30%] left-12 bottom-1 h-auto" src="../img/chenge.png" alt="change">
        </button>
    </div>`;
    });

    playList.innerHTML = playHTML;
}

carte();
