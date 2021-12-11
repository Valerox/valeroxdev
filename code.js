$('#increase2team1').on('click', function(e) {
    e.preventDefault();
    $('#countTeam1').text(parseInt($('#countTeam1').text()) + 2);
    checkCardGame()
});
$('#increase3team1').on('click', function(e) {
    e.preventDefault();
    $('#countTeam1').text(parseInt($('#countTeam1').text()) + 3);
    checkCardGame()
});
$('#increase2team2').on('click', function(e) {
    e.preventDefault();
    $('#countTeam2').text(parseInt($('#countTeam2').text()) + 2);
    checkCardGame()
});
$('#increase3team2').on('click', function(e) {
    e.preventDefault();
    $('#countTeam2').text(parseInt($('#countTeam2').text()) + 3);
    checkCardGame()
});
$('#btnCreateTeams').on('click', function(e) {
    e.preventDefault();
    createTeams();
});

function checkCardGame() {
    let team1 = $('#countTeam1');
    let team2 = $('#countTeam2');

    if(parseInt(team1.text()) > 12) {
        team1.addClass('cardGameRedBorder');
    }

    if(parseInt(team2.text()) > 12) {
        team2.addClass('cardGameRedBorder');
    }

    if(parseInt(team1.text()) >= 15) {
        resetCardGame();
    }

    if(parseInt(team2.text()) >= 15) {
        resetCardGame();
    }
}

function resetCardGame() {
    $('#countTeam1').removeClass('cardGameRedBorder');
    $('#countTeam2').removeClass('cardGameRedBorder');
    $('#countTeam1').text(0);
    $('#countTeam2').text(0);
}
$(window).on('scroll', function() {
    let header = $(document).find('header');
    if(window.scrollY > 0) {
        header.addClass('sticky');
    } else {
        header.removeClass('sticky');
    }
});
function toggleMenu() {
    let menuToggle = $(document).find('.toggle');
    let menu = $(document).find('.myMenu');
    menuToggle.toggleClass('active');
    menu.toggleClass('active');
}

function createTeams() {
    let players = [$('#player1').val(), $('#player2').val(), $('#player3').val(), $('#player4').val()];

    let shuffeledPlayers = players.sort((a, b) => 0.5 - Math.random());
    $('#player1').val(players[0]);
    $('#player2').val(players[1]);
    $('#player3').val(players[2]);
    $('#player4').val(players[3]);
}      