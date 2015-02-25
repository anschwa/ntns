/*
  title: nths.js
  author: Adam Schwartz
  date: 2015-02-18

  description:
  Attempt to make New Trier's new website more manageable.
  Firstly, by making the "Upcoming" sidebar hidden by default.
*/

add_toggle();
toggle_sidebar();

$('.sidebar-button').click(function(){toggle_sidebar();});

var hidden = false;

function toggle_sidebar(){
    if (!hidden){
        $('#right-menu').css("display", "none");
        $('.primary-content').css({"float" : "none", "width": "auto"});
        hidden = true;
    } else{
        $('#right-menu').css("display", "block");
        // This is a bug, as toggling the sidebar will not function correctly during "responsiveness".
        hidden = false;
    }
}

function add_toggle(){
    var toggle_sidebar = document.createElement('div');
    var toggle_sidebar_before = document.createElement('div');
    var toggle_sidebar_after = document.createElement('div');

    toggle_sidebar.className = "sidebar-button";
    toggle_sidebar_before.className = "sidebar-button-before";
    toggle_sidebar_after.className = "sidebar-button-after";

    toggle_sidebar.appendChild(toggle_sidebar_before);
    toggle_sidebar.appendChild(toggle_sidebar_after);
    document.body.appendChild(toggle_sidebar);

    $('.sidebar-button').css({
        'position' : 'absolute',
        'font-size' : '10px',
        'width' : '3.3em',
        'height' : '3.3em',
        'background' : '#009C6D',
        'border-radius' : '0.3em',
        'top' : '4px',
        'right' : '20px',
        'z-index' : '9999',
    })

    $('.sidebar-button-before').css({
        'border-top' : '0.3em solid #efefef',
        'position' : 'absolute',
        'width' : '1.9em',
        'height' : '1em',
        'margin' : 'auto',
        'border-bottom' : '0.3em solid #efefef',
        'top' : '1em',
        'left' : '0.7em',
        'border-radius' : '0.1em',
    })

    $('.sidebar-button-after').css({
        'display' : 'block',
        'position' : 'absolute',
        'top' : '1.6em',
        'width' : '1.9em',
        'height' : '0.3em',
        'background' : '#efefef',
        'left' : '0.7em',
        'border-radius' : '0.1em',
    })
}
