// --------------------------------------------------------------fatah shows me
// var hhiden = document.querySelector('.th2');
// var rhiden = document.querySelector('th1');
// var btn = document.querySelector('button');
// btn.addEventListener('click', () => {
//     hhiden.classList.toggle("hide");
//     rhiden.style.display = 'none';

// }
// )
document.getElementById('man').addEventListener('click',tmg_change);
function tmg_change(){
    document.getElementById('tmg').innerHTML = "En tant que gérant d’une PME j'ai été agréablement surpris par le temps que l’on m’a accordé. La Conseillère Clientèle et le Directeur d’agence, se sont déplacés jusqu'à la société pour se charger de la paperasse.";
    document.getElementById('man').style="margin-top:-20px;transition:all 0.5s; font-size: 24px;background: rgba(255, 255, 255, 0.13);border-radius: 16px;box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);backdrop-filter: blur(2.9px); -webkit-backdrop-filter: blur(2.9px);border: 6px solid rgba(255, 255, 255, 0.3);";
    document.getElementById('wam').style="transition:all 0,6s;";
}
document.getElementById('wam').addEventListener('click',tmg_wam);
function tmg_wam(){
    document.getElementById('tmg').innerHTML = "J’ai été reçue à l’heure par la Conseillère qui m’a écouté puis donné dans les détails toutes les infos demandées. Elle m’a rappelée dans la semaine pour l’ouverture d’un compte pour mon entreprise et pour mes employés.";
    document.getElementById('wam').style="margin-top:-20px;transition:all 0.5s; font-size: 24px;background: rgba(255, 255, 255, 0.13);border-radius: 16px;box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);backdrop-filter: blur(2.9px); -webkit-backdrop-filter: blur(2.9px);border: 6px solid rgba(255, 255, 255, 0.3);";
    document.getElementById('man').style="transition: all 0.6s;";
}