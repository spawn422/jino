var app = new Vue ({
    el: '#Vue',
    data:{
        errors: [], 
        domen:'',
        val:'example.ru',
        currentView:'v1',

        
        },

    components:{
        v1: { template: '<div class="text"><p>Для любого вашего домена, зарегистрированного на «Джино», вы можете в несколько кликов создать простую страницу-визитку. Это удобно, если ваш основной сайт еще не готов, или если домен вам нужен только для почты.\
                            Вы можете разместить здесь краткую информацию о себе или вашем бизнесе, ссылки на аккаунты в соцсетях и любые другие сайты. Создание и поддержка базового варианта сайта-визитки абсолютно бесплатны.</p></div>' },
        v2: { template: '<div class="text"><p>Зарегистрировав домен через «Джино», вы бесплатно получаете постоянную возможность изменения NS-записей и направления домена туда, куда вам хочется.\
                            У вас несколько доменов? Мы предоставляем бесплатную поддержку DNS для всех доменов, зарегистрированных и поддерживаемых «Джино».</p></div>'},
        v3: { template: '<div class="text"><p>Подтвердите владение доменным именем с помощью официального сертификата «Джино». Вам достаточно распечатать документ в формате PDF, который будет доступен в панели управления сразу же после делегирования домена.</p></div>'},
        v4: { template: '<div class="text"><p>С помощью функции «Автопродление» больше не нужно беспокоиться о том, что ваш домен внезапно перестанет работать. «Джино» заблаговременно продлит регистрацию на следующий период и вышлет вам уведомление об этом.</p></div>'},
        v5: { template: '<div class="text"><p>Специально для своих клиентов «Джино» предлагает абсолютно бесплатный сервис — «Джино.Облако». Это надежное место для хранения файлов — здесь точно поместится всё. Вы получите постоянный доступ к своей музыке, фотографиям и документам и сможете без труда делиться данными с кем угодно.</p></div>'},
        v6: { template: '<div class="text"><p>Будучи клиентом «Джино», вы можете бесплатно получить SSL-сертификат от удостоверяющего центра Let’s Encrypt. Данный сертификат позволит вашим сайтам работать по безопасному протоколу HTTPS и избежать предупреждений браузера о том, что на сайте используется незашифрованное соединение.\
                            Вы можете легко обзавестись сертификатом: в разделе «Домены» вашего аккаунта выберите нужный домен и на странице его настроек перейдите во вкладку «SSL». Сертификат выдаётся по нажатию одной кнопки и продлевается автоматически.</p></div>'},
        v7: { template: '<div class="text"><p>С помощью технологии цифрового подписывания ответа DNS-сервера вы можете застраховаться от возможной его подмены и быть уверенными в том, что посетители вашего сайта не попали на замаскированный сайт злоумышленников.\
                            Для подключения DNSSEC необходимо перейти в соответствующую вкладку в настройках вашего домена и нажать кнопку «Включить».</p></div>'},
        v8: { template: '<div class="text"><p>Зарегистрировав домен на «Джино», вы сможете в любой момент просто и бесплатно перенаправить его на любую страницу любого сайта.\
                            вас есть своя группа в социальной сети? Дайте ей персональный домен и она сможет стать полноценным сайтом, а не только страницей соцсети! Персонифицирование при помощи перенаправления доменного имени от «Джино» — это дополнительный инструмент в продвижении и идентификации вашей деятельности.</p></div>'},
        

    },
    methods:{
        // domenSub: function() {

        //     console.log();
        //     this.domen = "Домен " + this.val + " свободен -<a href='#'> зарегестирровать за 39&#8381</a>";
        // },
		switchView: function(view) {
			this.currentView = view
		}



    },


 
     
    

});


