function cargarPost(root) {

    $.ajax({
        url: root + '/posts',
        method: 'GET'
    }).then(function (data) {
        let localStorage = window.localStorage;
        let favPost = [];
        let dbFavPost = localStorage.getItem('favPost');
        if (dbFavPost != null) {
            favPost = JSON.parse(dbFavPost);
        }
        let lsUsers = window.localStorage;
        let userList = {};
        let dbUsers = lsUsers.getItem('users');
        if (dbUsers != null) {
            console.log("esto entra encuentra la db:" + dbUsers);
            userList = JSON.parse(dbUsers);
            console.log("esto es el user list:" + userList[1].length);
        }
        console.log("tamañó del user list :" + userList.length);
        for (let j = 0; j <= userList.length; j++) {

            console.log("Estoy en el for de los usuarios ? :" + j);
            $.each(data, function (i, postData) {
                let userEmail = " todavia nada";
                console.log("yo entro a esta mierda? :" + i);
                if (postData.userId in userList[j]) {
                    userEmail = userList[j].email;
                }

                let existe = postData.id in favPost;
                let post = "<div class='row'>" +
                    "<div class='col-sm-10'>" +
                    "<h2>" + postData.title + "</h2>" + "</div>" + "</div>" +
                    "<div class='row'>" +
                    "<div class='col-sm-10 '" +
                    "<a class='publicador text-right' href='#>" +
                    "<span class='glyphicon glyphicon-user '></span>" + userEmail + "" + "</a>" +
                    "</div>" +
                    "<div class='col-sm-2'>" +
                    "<button class='btn glyphicon " + (existe ? 'glyphicon-star' : 'glyphicon-star-empty') + " post_button' data-postid='" + postData.id + "'></button>" +
                    "</div>" +
                    "</div>" +
                    "<div class='row'>" +
                    "<div class='col-md-12'>" +
                    "<p>" + postData.body + "</p>" +
                    "</div>" +
                    "</div>";
                $('#post').append(post);
            });
        }

    });

    $('.post_button').click(function () {
        let postId = $(this).data('postid');
        let existe = agregarPostFavorito(postId);

        $(this).removeClass(existe ? 'glyphicon-star-empty' : 'glyphicon-star');
        $(this).addClass(existe ? 'glyphicon-star' : 'glyphicon-star-empty');
        /*if(existe){
           $(this).removeClass('glyphicon-star-empty');
           $(this).addClass('glyphicon-star');
        }else{
            $(this).addClass('glyphicon-star');
            $(this).removeClass('glyphicon-star-empty');
        }*/

    });

}

function cargarUsuarios(root) {
    let users = {};
    $.ajax({
        url: root + '/users',
        method: 'GET'
    }).then(function (data) {
        let localStorage = window.localStorage;
        let dbUsers = localStorage.getItem('users');
        if (dbUsers != null) {
            console.log("La db local no esta nula");
            users = JSON.parse(dbUsers);
            for (let j = 1; j <= users.length; j++) {
                addUsersToDb(users)
            }
        } else {
            console.log("La db local ESTA NULA Y RECORRO PARA AGREGAR");
            if (data.length > 1) {
                $.each(data, function (i, userData) {
                    let user = new User();
                    user.id = userData.id;
                    user.name = userData.name;
                    user.email = userData.email;
                    user.phone = userData.phone;
                    user.website = userData.website;
                    user.username = userData.username;
                    users.push(user)
                });
                addUsersToDb(users)
            }
        }
    });
}

function addUsersToDb(userResponses) {
    console.log("entra a agregar en la db");
    console.log(userResponses);
    console.log("-------------------------------------------------------------");
    let lsUsers = window.localStorage;
    let userToUpdate = {};
    let dbUsers = lsUsers.getItem('users');
    if (dbUsers != null) {
        userToUpdate = JSON.parse(dbUsers);
        for (let i = 1; i <= userToUpdate.length; i++) {
            if (!userResponses[i].id in userToUpdate[i].id) {
                console.log("que esto ?: " + userToUpdate);
                delete  userToUpdate[i];
            } else {
                console.log("que esto ?: " + userToUpdate);
                userToUpdate[i] += userResponses
            }
        }
    } else {
        console.log("guarda en el arreglo de que se va a agregar en la db");
        userToUpdate = userResponses
    }
    lsUsers.setItem('users', JSON.stringify(userToUpdate));
}

function agregarPostFavorito(postId) {
    let localStorage = window.localStorage;
    let favPost = {};
    let dbFavPost = localStorage.getItem('favPost');
    if (dbFavPost != null) {
        favPost = JSON.parse(dbFavPost);
    }
    let existe = false;
    if (postId in favPost) {
        delete favPost[postId];
    } else {
        existe = true;
        favPost[postId] = true;
    }

    localStorage.setItem('favPost', JSON.stringify(favPost));
    return existe;
}

$(document).ready(function () {
    let root = 'https://jsonplaceholder.typicode.com';
    cargarUsuarios(root);
    cargarPost(root);

});
