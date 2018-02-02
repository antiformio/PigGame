    /*
    GAME RULES:

    - The game has 2 players, playing in rounds
    - In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
    - BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
    - The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
    - The first player to reach 100 points on GLOBAL score wins the game

    */

    var scores, roundScore, activePlayer;

    init();


    document.querySelector('.btn-roll').addEventListener('click', function() {

            // Random number 1-6
            var dice = Math.floor(Math.random() * 6) + 1;

            // Display the result
            var diceDOM = document.querySelector('.dice');



            // Gif de rodar os dados/explosao
            show();
            function show() {
                if(dice == 1){
                    diceDOM.src = 'explosao.gif';
                }else{
                    diceDOM.src = 'giphy.gif';
                }
                
                
                diceDOM.style.display='block';
                setTimeout(hide, 1000);  // 3 seconds
            }

            function hide() {

                diceDOM.src = 'dice-'+ dice + '.png';
                // Update round score (only if the random number is not 1)
                // !== não faz type cohersion, podem ser de tipos diferentes
                if(dice !== 1 ){
                    roundScore += dice;
                    document.getElementById('current-' + activePlayer).textContent =roundScore;

                }else{
                    
                    
                    //diceDOM.style.display = 'block';
                    // RoundScore passa a zero , porque lhe saíu 1 nos dados
                    roundScore = 0;
                    // Display de 0 no Ronda do activePlayer
                    document.getElementById('current-' + activePlayer).textContent = '0';
                    
                    
                    nextPlayer();
                    


                }
            }




    });

        document.querySelector('.btn-hold').addEventListener('click', function(){


                scores[activePlayer] += roundScore;
                if(scores[activePlayer] >= 20){
                    document.getElementById('name-'+activePlayer).textContent = 'Ganhou !'
                    // Esconde dado
                    document.querySelector('.dice').style.display = 'none';
                    // Aplica a classe winner do css, e remove a classe active 
                    document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
                    document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
                    // Esconde Butoes e rondas
                    document.querySelector('.btn-roll').style.display = 'none';
                    document.querySelector('.btn-hold').style.display = 'none';
                    
                }else{
                    document.getElementById('score-'+activePlayer).textContent = scores[activePlayer];
                    nextPlayer();
                }
                




        });

        function nextPlayer(){

            // Mudar o activePlayer
                        

                        // Mudar o css do activePlayer
                        //      Toggle remove ou adiciona a palavra active à classe actual. Se ele está active, remove, se não está adiciona.
                        document.querySelector('.player-0-panel').classList.toggle('active');
                        document.querySelector('.player-1-panel').classList.toggle('active');

                        // Se não quisesse fazer toggle, podia usar os métodos add e remove da classList:
                        // document.querySelector('.player-1-panel).classList.remove('active);
                        // document.querySelector('.player-1-panel).classList.add('active);

                        // Esconder o dado no final
                        document.querySelector('.dice').style.display = 'none';
                        roundScore= 0;
                        document.getElementById('current-'+activePlayer).textContent = 0;
                        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;


        };

        function init(){
            
            scores = [0,0];
            roundScore = 0;
            activePlayer = 0; // 0 -> player1 1 -> player2

            document.getElementById('score-0').textContent = '0';
            document.getElementById('score-1').textContent = '0';
            document.getElementById('current-0').textContent = '0';
            document.getElementById('current-1').textContent = '0';



            // Se quisesse acrescentar codigo html...
                // document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';

            // Ler do DOM
                //var x = document.querySelector('#score-0').textContent;

            // Mudar o CSS de um elemento
                // Esconder uma imagem
                // O querySelector aqui vai buscar a classe da imagem, ou seja '.dice' depois aceder à propriedade display e mudar para none
            document.querySelector('.dice').style.display = 'none';
            
        };

        document.querySelector('.btn-new').addEventListener('click', function() {
          
           init();
        });














