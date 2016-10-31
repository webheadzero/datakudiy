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

$$(document).on('click', '.btn-download-file', function (e) {
    var file = this.getAttribute('data-file');
    window.openFileNative.open(file);
});

var base_url = 'http://bappeda.jogjaprov.go.id/dataku/2016';

// Add view
var mainView = myApp.addView('.view-main', {
});

$$(document).on('submit','.data-search.ajax-submit', function (e) {
    var keyword = $$('.search-value').val();
    mainView.router.load({
        url : 'search.html?keyword='+keyword+'',
    });
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

myApp.onPageInit('search', function (page) {
    url = base_url + '/api/home/search/';
    keyword = page.query.keyword;
    key = keyword.replace(/\s+/g,"_");

    if(keyword != ''){
        search(url+key,keyword,0);
    } else {
        $$('#search').html('<div class="card"><div class="card-content"><div class="card-content-inner">Anda Belum Memasukkan Kata Kunci</div></div></div>');
    }

    $$(document).on('click', '.search-paging a.page-next', function (e) {
        var url = this.getAttribute('data-url');
        var keyword = this.getAttribute('data-keyword');
        var offset = this.getAttribute('data-offset');
        offset = parseInt(offset)+10;

        search(url,keyword,offset);
    });
    $$(document).on('click', '.search-paging a.page-prev', function (e) {
        var url = this.getAttribute('data-url');
        var keyword = this.getAttribute('data-keyword');
        var offset = this.getAttribute('data-offset');
        offset = parseInt(offset)-10;

        search(url,keyword,offset);
    });
    function search(url,keyword,offset){
        $$('.search-paging').hide();
        $$('#search').html('');
        $$('.preloader').show();
        $$('.search-info').html('<div class="card bg-red color-white" style="margin:-8px -8px 8px;padding:8px"><div class="card-content"><div class="card-content-inner">Menampilkan Data Dengan Kata Kunci : <strong>'+keyword+'</strong></div></div></div>');
        $$.ajax({
            url: url+'/'+offset,
            type: "post",
            data: {'api_key' : '1f69c3d19d24780583a95be95d61ad29b417e6dd'},
            async: true,
            dataType: "json",
            success: function(data) {
                var context = data;

                var template = $$('#search_template').html();
                var compiledTemplate = Template7.compile(template);

                var html = compiledTemplate(context);

                var total = context.total_rows;
                
                $$('#search').html(html);
                $$('.search-paging').show();
                $$('.preloader').hide();
                if(total == 0){
                   $$('#search').html('<div class="card"><div class="card-content"><div class="card-content-inner">Data Tidak Ditemukan</div></div></div>');
                }
                else if(total > 10){
                    $$('.search-paging').html('<div class="button button-fill button-raised color-white" style="margin:8px;color:#aaa;"><a href="#" class="page-prev" data-keyword="'+keyword+'" data-url="'+url+'" data-offset="'+offset+'"><i class="ion-ios-arrow-left"></i> Sebelumnya</a> <a class="page-next" href="#" data-keyword="'+keyword+'" data-url="'+url+'" data-offset="'+offset+'">Berikutnya <i class="ion-ios-arrow-right"></i></a></div>');
                    $$('.search-paging .page-next').show();

                    if(offset > 9){
                        $$('.search-paging .page-prev').show();
                    } 
                    if((parseInt(offset)+10) > total){
                        $$('.search-paging .page-next').hide();
                    }
                }

                console.log(total+','+offset);
                console.log(context);
            },
            error: function (textStatus, errorThrown) {
                
            }
        });
    }
});

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