let degrees = -45;
let menuDeg = -30;

updateRing('.ring-left', degrees);
updateRing('.ring-right', -degrees);
updateRing('.ring', menuDeg);


// $('.item-menu').on('click', function () {
//     let idx = $('.item-menu').index(this)
//     updateRing('.ring', (menuDeg + idx * 15));
//     updateMenu(this, idx)
// });


let counter = 0;
let imgarray = [{
    src: "zero-pollution",
    srcinv: "zero-pollution-inv"
}, {
    src: "zero-waste",
    srcinv: "zero-waste-inv"
}, {
    src: "zero-emission",
    srcinv: "zero-emission-inv"
}]

let textarray=[""]

let angarray = [-30, 0, 30]

function start() {
    setTimeout(function () {
        updateRing('.ring', angarray[counter]);
        let elm = $('.item-menu:nth-child(' + (counter+1) + ')')
        
        console.log(elm);
        updateMenu(elm, counter)

        start();
        if (counter < 2) {
            counter++;
        } else counter = 0
    }, 3000);
}

function updateMenu(elm, num) {
    // scale menu circle
    $('.item-menu').find('.menu-circle').removeClass('scale-menu').addClass('menu-bg-default');
    $(elm).find('.menu-circle').addClass('scale-menu').removeClass('menu-bg-default');

    //text colour
    //var str = new String("Demo Text");
    //document.write(str.fontcolor( "blue" ));
    //alert(str.fontcolor( "blue" ));

    // image flipping code based on the dark or light background
    $('.item-menu').each(function (idx, el) {
        $(el).find('img').attr('src', '../img/' + imgarray[idx].src + '.svg')
    })
    $(elm).find('img').attr('src', '../img/' + imgarray[num].srcinv + '.svg');
}

// Begins
start();

$(window).bind('mousewheel', function (e) {
    let dir = e.originalEvent.wheelDelta / 120;
    if (dir > 0) {
        degrees = -45
    } else {
        degrees = 45
    }

    if (window.scrollY > 1200 && window.scrollY < 1500) {
        // activate left ring when mouse cursor is between 1200 adn 1500 pixel
        updateRing('.ring-left', degrees);
    } else if (window.scrollY > 1500) {
        // activate right ring when mouse cursor beyong 1500 pixel
        updateRing('.ring-right', -(degrees + 30));
    }
});

function updateRing(el, ang) {
    $(el).css({
        // rotate the div on the border containing the image
        'transform': 'rotate(' + (ang) + 'deg)'
    }).find('.img-container').css({
        // rotate the image in the opposite direction to make it verticle 
        'transform': 'rotate(' + (-ang) + 'deg)'
    });
}
