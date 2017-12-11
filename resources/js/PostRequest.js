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
                "<button class=" + (existe ? 'glyphicon-star' : ' glyphicon-star-empty') + ""btn glyphicon  post_button" data-post_id='" + postData.id + "'></button>" +
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
        $('.post_boton').click(function () {
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
        let users = {};
        let dbUsers = localStorage.getItem('users');
        if (dbUsers != null) {
            users = JSON.parse(dbUsers);
        }
        console.log(data)
    });

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