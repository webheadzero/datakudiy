// Initialize your app
var myApp = new Framework7({
    material : true,
    hideNavbarOnPageScroll : true,
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

myApp.onPageInit('home', function (page) {
    url = base_url + '/api/home';

    $$.getJSON(url, {}, function (data) {          
        var context = data;

        var template = $$('#home_template').html();
        var compiledTemplate = Template7.compile(template);

        var html = compiledTemplate(context);
        
        $$('#home').html(html);
    });


}).trigger();

myApp.onPageInit('publikasi', function (page) {
    loadPage();

    // Pull to refresh content
    var ptrContent = $$('.pull-to-refresh-content');
     
    // Add 'refresh' listener on it
    ptrContent.on('refresh', function (e) {
        // Emulate 2s loading
        setTimeout(function () {
            loadPage();
            myApp.pullToRefreshDone();
        }, 2000);
    });
    function loadPage(){
        url = base_url + '/api/publikasi/index';

        $$.getJSON(url, {}, function (data) {          
            var context = data;

            var template = $$('#publikasi_template').html();
            var compiledTemplate = Template7.compile(template);

            var html = compiledTemplate(context);
            $$('#publikasi').html(html);
        });
    }

});
myApp.onPageInit('publikasi_detail', function (page) {
        url = base_url + '/api/publikasi/detail/'+ page.query.id;

        $$.getJSON(url, {}, function (data) {          
            var context = data;

            var template = $$('#publikasi_detail_template').html();
            var compiledTemplate = Template7.compile(template);

            var html = compiledTemplate(context);
            $$('#publikasi_detail').html(html);
        });
});

myApp.onPageInit('indikator_kinerja_utama', function (page) {
        url = base_url + '/api/page/indikator_kinerja_utama';

        $$.getJSON(url, {}, function (data) {          
            var context = data;

            var template = $$('#indikator_kinerja_utama_template').html();
            var compiledTemplate = Template7.compile(template);

            var html = compiledTemplate(context);
            $$('#indikator_kinerja_utama').html(html);
        });
});

myApp.onPageInit('kinerja_pemda', function (page) {
    loadPage();

    // Pull to refresh content
    var ptrContent = $$('.pull-to-refresh-content');
     
    // Add 'refresh' listener on it
    ptrContent.on('refresh', function (e) {
        // Emulate 2s loading
        setTimeout(function () {
            loadPage();
            myApp.pullToRefreshDone();
        }, 2000);
    });
    function loadPage(){
        url = base_url + '/api/kinerja_pemda';

        $$.getJSON(url, {}, function (data) {          
            var context = data;

            var template = $$('#kinerja_pemda_template').html();
            var compiledTemplate = Template7.compile(template);

            var html = compiledTemplate(context);
            
            $$('#kinerja_pemda').html(html);
        });
    }

});
myApp.onPageInit('kinerja_pemda_detail', function (page) {
        url = base_url + '/api/kinerja_pemda/detail/'+ page.query.id;

        $$.getJSON(url, {}, function (data) {          
            var context = data;

            var template = $$('#kinerja_pemda_detail_template').html();
            var compiledTemplate = Template7.compile(template);

            var html = compiledTemplate(context);
            $$('#kinerja_pemda_detail').html(html);
        });
});

myApp.onPageInit('peta', function (page) {
    loadPage();

    // Pull to refresh content
    var ptrContent = $$('.pull-to-refresh-content');
     
    // Add 'refresh' listener on it
    ptrContent.on('refresh', function (e) {
        // Emulate 2s loading
        setTimeout(function () {
            loadPage();
            myApp.pullToRefreshDone();
        }, 2000);
    });
    function loadPage(){
        url = base_url + '/api/peta';

        $$.getJSON(url, {}, function (data) {          
            var context = data;

            var template = $$('#peta_template').html();
            var compiledTemplate = Template7.compile(template);

            var html = compiledTemplate(context);
            
            $$('#peta').html(html);
        });
    }

});
myApp.onPageInit('peta_detail', function (page) {
        url = base_url + '/api/peta/detail/'+ page.query.id;

        $$.getJSON(url, {}, function (data) {          
            var context = data;

            var template = $$('#peta_detail_template').html();
            var compiledTemplate = Template7.compile(template);

            var html = compiledTemplate(context);
            $$('#peta_detail').html(html);
        });
});

myApp.onPageInit('informasi_statistik', function (page) {
    loadPage();

    // Pull to refresh content
    var ptrContent = $$('.pull-to-refresh-content');
     
    // Add 'refresh' listener on it
    ptrContent.on('refresh', function (e) {
        // Emulate 2s loading
        setTimeout(function () {
            loadPage();
            myApp.pullToRefreshDone();
        }, 2000);
    });
    function loadPage(){
        url = base_url + '/api/informasi_statistik';

        $$.getJSON(url, {}, function (data) {          
            var context = data;

            var template = $$('#informasi_statistik_template').html();
            var compiledTemplate = Template7.compile(template);

            var html = compiledTemplate(context);
            
            $$('#informasi_statistik').html(html);
        });
    }

});
myApp.onPageInit('informasi_statistik_detail', function (page) {
        url = base_url + '/api/informasi_statistik/detail/'+ page.query.id;

        $$.getJSON(url, {}, function (data) {          
            var context = data;

            var template = $$('#informasi_statistik_detail_template').html();
            var compiledTemplate = Template7.compile(template);

            var html = compiledTemplate(context);
            $$('#informasi_statistik_detail').html(html);
        });
});

myApp.onPageInit('video', function (page) {
    loadPage();

    // Pull to refresh content
    var ptrContent = $$('.pull-to-refresh-content');
     
    // Add 'refresh' listener on it
    ptrContent.on('refresh', function (e) {
        // Emulate 2s loading
        setTimeout(function () {
            loadPage();
            myApp.pullToRefreshDone();
        }, 2000);
    });
    function loadPage(){
        url = base_url + '/api/video';

        $$.getJSON(url, {}, function (data) {          
            var context = data;

            var template = $$('#video_template').html();
            var compiledTemplate = Template7.compile(template);

            var html = compiledTemplate(context);
            
            $$('#video').html(html);
        });
    }

});

myApp.onPageInit('about', function (page) {
        url = base_url + '/api/page/tentang_kami';

        $$.getJSON(url, {}, function (data) {          
            var context = data;

            var template = $$('#about_template').html();
            var compiledTemplate = Template7.compile(template);

            var html = compiledTemplate(context);
            $$('#about').html(html);
        });
});

function youtubePlay(id){
    console.log(id);
    $$('.video-container').html('<iframe width="100%" height="300" src="https://www.youtube.com/embed/'+id+'" frameborder="0" allowfullscreen=""></iframe>');
}