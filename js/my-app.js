// Initialize your app
var myApp = new Framework7({
    material : true,
    //hideNavbarOnPageScroll : true,
    swipePanel: 'left',
    cache:true,
    precompileTemplates: true
});

var mySwiper = myApp.swiper('.swiper-container', {
    pagination:'.swiper-pagination',
    paginationClickable: true
});

// Export selectors engine
var $$ = Dom7;

var base_url = 'http://produksi.jmc.co.id/2016/dataku_diy';

// Add view
var mainView = myApp.addView('.view-main', {
});

function AjaxPage(url,id_page){
    $$.ajax({
        url: url,
        type: "post",
        data: {'api_key' : '1f69c3d19d24780583a95be95d61ad29b417e6dd'},
        async: true,
        dataType: "json",
        success: function(data) {
            var context = data;

            var template = $$(id_page+'_template').html();
            var compiledTemplate = Template7.compile(template);

            var html = compiledTemplate(context);
            
            $$(id_page).html(html);
        },
        error: function (textStatus, errorThrown) {
            
        }
    });
}

myApp.onPageInit('publikasi', function (page) {
    url = base_url + '/api/publikasi/index';
    AjaxPage(url,'#publikasi');

    var ptrContent = $$('.pull-to-refresh-content');
    ptrContent.on('refresh', function (e) {
        setTimeout(function () {
            AjaxPage(url,'#publikasi');
            myApp.pullToRefreshDone();
        }, 2000);
    });

});
myApp.onPageInit('publikasi_detail', function (page) {
        url = base_url + '/api/publikasi/detail/'+ page.query.id;
        AjaxPage(url,'#publikasi_detail');
});

myApp.onPageInit('indikator_kinerja_utama', function (page) {
        url = base_url + '/api/page/indikator_kinerja_utama';
        AjaxPage(url,'#indikator_kinerja_utama');
});

myApp.onPageInit('kinerja_pemda', function (page) {
    url = base_url + '/api/kinerja_pemda';
    AjaxPage(url,'#kinerja_pemda');

    var ptrContent = $$('.pull-to-refresh-content');
    ptrContent.on('refresh', function (e) {
        setTimeout(function () {
            AjaxPage(url,'#kinerja_pemda');
            myApp.pullToRefreshDone();
        }, 2000);
    });

});
myApp.onPageInit('kinerja_pemda_detail', function (page) {
    url = base_url + '/api/kinerja_pemda/detail/'+ page.query.id;
    AjaxPage(url,'#kinerja_pemda_detail');
});

myApp.onPageInit('peta', function (page) {
    url = base_url + '/api/peta';
    AjaxPage(url,'#peta');

    var ptrContent = $$('.pull-to-refresh-content');
    ptrContent.on('refresh', function (e) {
        setTimeout(function () {
            AjaxPage(url,'#peta');
            myApp.pullToRefreshDone();
        }, 2000);
    });
});
myApp.onPageInit('peta_detail', function (page) {
    url = base_url + '/api/peta/detail/'+ page.query.id;
    AjaxPage(url,'#peta_detail');
});

myApp.onPageInit('informasi_statistik', function (page) {
    url = base_url + '/api/informasi_statistik';
    AjaxPage(url,'#informasi_statistik');

    var ptrContent = $$('.pull-to-refresh-content');
    ptrContent.on('refresh', function (e) {
        setTimeout(function () {
            AjaxPage(url,'#informasi_statistik');
            myApp.pullToRefreshDone();
        }, 2000);
    });

});
myApp.onPageInit('informasi_statistik_detail', function (page) {
    url = base_url + '/api/informasi_statistik/detail/'+ page.query.id;
    AjaxPage(url,'#informasi_statistik_detail');
});

myApp.onPageInit('video', function (page) {
    url = base_url + '/api/video';
    AjaxPage(url,'#video');

    var ptrContent = $$('.pull-to-refresh-content');
    ptrContent.on('refresh', function (e) {
        setTimeout(function () {
            AjaxPage(url,'#video');
            myApp.pullToRefreshDone();
        }, 2000);
    });
});

myApp.onPageInit('about', function (page) {
    url = base_url + '/api/page/tentang_kami';
    AjaxPage(url,'#about');
});

function youtubePlay(id){
    console.log(id);
    $$('.video-container').html('<iframe width="100%" height="300" src="https://www.youtube.com/embed/'+id+'" frameborder="0" allowfullscreen=""></iframe>');
}