/**
 * Created by jmeuriss on 16/12/13.
 */
(function () {
    'use strict';

    var collectionId;
    var route;

    $('.cobraCollection-delete-button').click(function () {
        collectionId = $(this).attr('btn-cobra-collection-id');
        var collectionElement = $(this).parent().parent();
        route = Routing.generate('unamur_cobra_unregister_collection', {'cobraCollectionId': collectionId});
        //alert(route);
        $('#unregister-collection-validation-box').modal('show');

    });

    $('#delete-confirm-ok').click(function () {
        $.ajax({
            url: route,//Routing.generate('unamur_cobra_unregister_collection', {'cobraCollectionId': collectionId}),
            type: 'DELETE',
            success: function () {
                $('#unregister-collection-validation-box').modal('hide');
                collectionElement.remove();
            }
        });
    });

    $('.cobraCollection-change-visibility').click(function () {

        collectionId = $(this).attr('btn-cobra-collection-id');
        var icon = $(this).children(':first');
        var setVisible = $(icon).hasClass('icon-eye-close') ? true : false;

        $.ajax({
            url: Routing.generate('unamur_cobra_change_collection_visibility', {'cobraCollectionId': collectionId}),
            type: 'POST',
            success: function () {
               if(setVisible)
               {
                   $(icon).removeClass('icon-eye-close').addClass('icon-eye-open');
               }
               else
               {
                   $(icon).removeClass('icon-eye-open').addClass('icon-eye-close');
               }
            },
            error: function () {
                alert('chiotte');
            }
        });


    });

    $('.cobraCollection-move-up').click(function (e) {
        e.preventDefault();
        e.stopPropagation();

        var currentElement = $(this).parent().parent();
        collectionId = $(this).attr('btn-cobra-collection-id');



        $.ajax({
            url: Routing.generate('unamur_cobra_move_collection', {'cobraCollectionId': collectionId, 'direction' : 'up'}),
            type: 'POST',
            success: function (data) {
                var previousSibling = currentElement.prev();
                previousSibling.before(currentElement);
                $('.cobraCollection-move-up').removeClass('disabled');
                $('.cobraCollection-move-down').removeClass('disabled');
                $('.cobraCollection-move-up').first().addClass('disabled');
                $('.cobraCollection-move-down').last().addClass('disabled');
            },
            error: function (data) {
                alert(data);
            }
        });


    });

    $('.cobraCollection-move-down').click(function (e) {
        e.preventDefault();
        e.stopPropagation();

        var currentElement = $(this).parent().parent();
        collectionId = $(this).attr('btn-cobra-collection-id');



        $.ajax({
            url: Routing.generate('unamur_cobra_move_collection', {'cobraCollectionId': collectionId, 'direction' : 'down'}),
            type: 'POST',
            success: function (data) {

                var nextSibling = currentElement.next();
                nextSibling.after(currentElement);
                $('.cobraCollection-move-up').removeClass('disabled');
                $('.cobraCollection-move-down').removeClass('disabled');
                $('.cobraCollection-move-up').first().addClass('disabled');
                $('.cobraCollection-move-down').last().addClass('disabled');
            },
            error: function (data) {
                alert(data);
            }
        });


    });

})();