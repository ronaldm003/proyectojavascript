function cargarPost(root) {
    $.ajax({
        url: root + '/posts',
        method: 'GET'
    }).then(function (data) {
        let localStorage = window.localStorage;
        let favPost = {};
        let dbFavPost = localStorage.getItem('favPost');
        if (dbFavPost != null) {
            favPost = JSON.parse(dbFavPost);
        }
        $.each(data, function (i, postData) {
            let existe = postData.id in favPost;
            let post = "<div class='row'>" +
                "<div class='col-sm-10'>" +
                "<h2>" + postData.title + "</h2>" + "</div>" + "</div>" +
                "<div class='row'>" +
                "<div class='col-sm-10 '" +
                "<a class='publicador text-right' href='#>" +
                "<span class='glyphicon glyphicon-user '></span>Ronald Marmol @hotmail.com</a>" +
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
            console.log(post);
            $('#post').append(post);
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
    });

}

function cargarUsuarios(root) {
    $.ajax({
        url: root + '/users',
        method: 'GET'
    }).then(function (data) {
        let localStorage = window.localStorage;
        let users = [];
        let dbUsers = localStorage.getItem('users');
        if (dbUsers != null) {
            console.log("La db local no esta nula");
            users = JSON.parse(dbUsers);
            for (let j = 0; j < users.length; j++) {
                console.log(users);
                addUsersToDb(users)
            }
        } else {
            console.log("La db local ESTA NULA Y RECORRO PARA AGREGAR");
            if (data.length > 1) {
                $.each(data, function (i, userData) {
                    let user = new User();
                    user.id = userData.id;
                    user.name = userData.name;
                    user.username = userData.username;
                    user.email = userData.email;
                    user.phone = userData.phone;
                    user.website = userData.website;
                    users.push(user);
                });
            }
            console.log(users.length);
            for (let user of users) {
                if (user instanceof User) {
                    addUsersToDb(users)
                }
            }
        }
    });
}

function addUsersToDb(userResponse) {
    let lsUsers = window.localStorage;
    let userToUpdate = [];
    let dbUsers = lsUsers.getItem('users');
    if (dbUsers != null) {
        userToUpdate = JSON.parse(dbUsers);
        for (let i = 0; i < userToUpdate; i++) {
            if (!userResponse.id in userToUpdate[i].id) {
                delete  userToUpdate[i];
            } else {
                userToUpdate[i].push(userResponse)
            }
        }
    } else {
        userToUpdate.push(userResponse)
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

var User = function () {
    let self = this;
    self.id;
    self.name;
    self.username;
    self.email;
    self.phone;
    self.website;

    function toString() {
        self.id + " " + self.name + " " + self.email;
    }
};