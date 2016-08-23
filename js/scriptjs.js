/**
 * Created By Ankit Yadav
 */


/*
*

 var card1 =   $('<div></div>')
 .addClass("card sticky-action")
 .append('<div></div>')
 .addClass("card-image waves-effect waves-block waves-light")
 .append("<img>")
 .attr("src","")
 .end()
 .end()

 .append("<div></div>")
 .addClass("card-content")
 .append("<span></span>")
 .addClass("card-title activator grey-text text-darken-4")
 .text(result.message)
 .end()
 .append("<p></p>")
 .append("<a></a>")
 .attr('href','#')
 .text("Account Doesn't exist")
 .end()
 .end()
 .end()

 .append('<div></div>')
 .addClass('card-reveal')
 .append('<span></span>')
 .addClass('card-title')
 .text(result.message)
 .end()
 .append("<p></p>")
 .text("Account Doesn't exist")
 .end()
 .end()
 .end()
 console.log(card1);
 //$("#content").append(card1);

 }

 $.each(result.query.pages , function(key,value){
 var divRow =$('<div></div>',{class:'row'});
 var divCol=$('<div></div>',{class:'col s6 offset-s2 z-depth-1 resultcol'});
 var h4 = $('<h4></h4>',{class:'pageTitle'});
 var a = $('<a></a>',{class:'pageLink', href:"http://en.wikipedia.org/?curid="+value.pageid, text:value.title});
 var p = $('<p></p>',{text:value.extract, class:'pageExtract'});
 var h4a = h4.append(a);
 divCol.append(h4a , p);
 divRow.append(divCol);
 resultArea.append(divRow);
 })


 function newCard(user) {
 var out = '<div class="col s12 m4 l3" id="card-' + user + '">' +
 '<div class="card" style="overflow: hidden;">' +
 '<div class="card-image waves-effect waves-block waves-light">' +
 '<img class="activator" id="logo-' + user + '" src="' + defaultLogo + '">' +
 '</div><div class="card-content">' +
 '<span class="card-title activator grey-text text-darken-4" id="name-' + user + '"></span>' +
 '<div id="status-' + user + '"></div>' +
 '</div><div class="card-action">' +
 '<a href="#" class="btn btn-block" id="profile-' + user + '" target="_blank">Profile</a>' +
 '</div>' +
 '<div class="card-reveal" style="display: none; transform: translateY(0px);">' +
 '<span class="card-title grey-text text-darken-4" id="name2-' + user + '"><i class="fa fa-times right"></i></span>' +
 '<strong>About:</strong><p id="bio-' + user + '"></p>' +
 '</div>' +
 '</div></div>';
 $('#results').append(out);

 <p><a href="#">This is a link</a></p>
 }

 */

(function(){
    var twitchUsernames = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas","brunofin" , "comster404"];
    var cardImage,divCardContent,cardContentSpan,cardContentP,cardContentPLink,divCardReveal,cardRevealSpan,divCol, divCard,divCardImage,cardRevealP ;

    twitchUsernames.forEach(function getData(twitchUserName){
        $.getJSON('https://api.twitch.tv/kraken/streams/'+twitchUserName +'?callback=?', function(result) {


            if (result.hasOwnProperty("error")) {
                divCol = $('<div></div>', {class: 'col s12 m4 l3 z-depth-1'});
                divCard = $('<div></div>', {class: 'card offline'});
                divCardImage = $('<div></div>',{class:'card-image waves-effect waves-block waves-light'});
                cardImage = $('<img>',{src:'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Antu_emblem-unavailable.svg/2000px-Antu_emblem-unavailable.svg.png'});
                divCardContent = $('<div></div>', {class: 'card-content'});
                cardContentSpan = $('<span></span>', {class: 'card-title grey-text text-darken-4' , text : twitchUserName });
                cardContentP = $('<p></p>', {class: 'unknown ' , text : 'Channel Unavailable'});
                divCardImage.append(cardImage);
                divCardContent.append(cardContentSpan,cardContentP);
                divCard.append(divCardImage,divCardContent);
                divCol.append(divCard);

                $('#content').append(divCol);

                }
            else if(result.stream == null){
                $.getJSON('https://api.twitch.tv/kraken/users/'+ twitchUserName + '?callback=?', function(userData) {

                    divCol = $('<div></div>', {class: 'col s12 m4 l3 z-depth-1'});
                    divCard = $('<div></div>', {class: 'card offline'});
                    divCardImage = $('<div></div>', {class: 'card-image waves-effect waves-block waves-light'});
                    cardImage = $('<img>', {class: 'activator', src: userData.logo});
                    divCardContent = $('<div></div>', {class: 'card-content'});
                    cardContentSpan = $('<span></span>', {
                        class: 'card-title activator grey-text text-darken-4',
                        text: userData.display_name
                    });
                    cardContentP = $('<p></p>', {class: 'offlineP '});
                    cardContentPLink = $('<a></a>', {
                        href: 'https://www.twitch.tv/'+twitchUserName,
                        target: "_blank",
                        text: 'Offline '
                    });
                    divCardReveal = $('<div></div>', {class: 'card-reveal'});
                    cardRevealSpan = $('<span></span>', {
                        class: 'card-title grey-text text-darken-4',
                        text: userData.display_name
                    });
                    cardRevealP = $('<p></p>', {text: userData.bio});

                    divCardReveal.append(cardRevealSpan, cardRevealP);
                    cardContentP.append(cardContentPLink);
                    divCardContent.append(cardContentSpan, cardContentP);
                    divCardImage.append(cardImage);
                    divCard.append(divCardImage, divCardContent, divCardReveal);
                    divCol.append(divCard);

                    $('#content').append(divCol);

                });
                }
            else {
                $.getJSON('https://api.twitch.tv/kraken/users/' + twitchUserName + '?callback=?', function (userData) {

                    divCol = $('<div></div>', {class: 'col s12 m4 l3 z-depth-1'});
                    divCard = $('<div></div>', {class: 'card online'});
                    divCardImage = $('<div></div>', {class: 'card-image waves-effect waves-block waves-light'});
                    cardImage = $('<img>', {class: 'activator', src: result.stream.channel.logo});
                    divCardContent = $('<div></div>', {class: 'card-content'});
                    cardContentSpan = $('<span></span>', {
                        class: 'card-title activator grey-text text-darken-4',
                        text: result.stream.channel.display_name
                    });
                    cardContentP = $('<p></p>', {class: 'onlineP '});
                    cardContentPLink = $('<a></a>', {
                        href: result.stream.channel.url,
                        target: "_blank",
                        text: result.stream.channel.game
                    });
                    divCardReveal = $('<div></div>', {class: 'card-reveal'});
                    cardRevealSpan = $('<span></span>', {
                        class: 'card-title grey-text text-darken-4',
                        text: result.stream.channel.display_name
                    });
                    cardRevealP = $('<p></p>', {text: userData.bio});

                    divCardReveal.append(cardRevealSpan, cardRevealP);
                    cardContentP.append(cardContentPLink);
                    divCardContent.append(cardContentSpan, cardContentP);
                    divCardImage.append(cardImage);
                    divCard.append(divCardImage, divCardContent, divCardReveal);
                    divCol.append(divCard);

                    $('#content').append(divCol);
                });
            }

        });
    });

    $('.tab a').on('click', function () {
        if(this.text === 'Offline'){
            $('.online').addClass('hidden');
            $('.offline').removeClass('hidden');
        }
        else if(this.text ==='Online'){
            $('.online').removeClass('hidden');
            $('.offline').addClass('hidden');
        }else{
            $('.online').removeClass('hidden');
            $('.offline').removeClass('hidden');
        }

    })


})();