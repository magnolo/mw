'use strict';

/**
 * @ngdoc function
 * @name mwApp.controller:WorksCtrl
 * @description
 * # WorksCtrl
 * Controller of the mwApp
 */
angular.module('mwApp')
  .controller('WorksCtrl', function($scope, $timeout) {
    $scope.works = [];
    $timeout(function() {
      $scope.works = [{
        title: 'We Feel The World',
        subtitle: 'Gute Architektur kann man kaufen.',
        text: 'Die Sammlung Lenikus umfasst vornehmlich Werke junger österreichischer und internationaler Künstler/innen. Die umfangreichen Inhalte und indiviuellen Vernetzungen der Werke und Künstler untereindander, erforderten ein eigens an diese Anforderungen angepasstes System zur intuitiven Bedienung und flexiblen Handhabung. Die Wartung bietet eine direkte Vernetzung mit Services von Mailchimp sowie Facebook um Aufgaben aus einer Hand erledigen zu können. Ein Benutzersystem nur für die Künstler ermöglicht einen Ausstausch untereeindander.',
        blank: true,
        image: {
          src: 'images/wftw.jpg'
        },
        features: [],
        links: [{
          url: 'http://www.wefeeltheworld.org',
          icon: 'fa-globe',
          type: 'web'
        }]
      }, {
        title: 'Talente Akademie Kärnten',
        subtitle: 'Gute Architektur kann man kaufen.',
        text: 'Die Sammlung Lenikus umfasst vornehmlich Werke junger österreichischer und internationaler Künstler/innen. Die umfangreichen Inhalte und indiviuellen Vernetzungen der Werke und Künstler untereindander, erforderten ein eigens an diese Anforderungen angepasstes System zur intuitiven Bedienung und flexiblen Handhabung. Die Wartung bietet eine direkte Vernetzung mit Services von Mailchimp sowie Facebook um Aufgaben aus einer Hand erledigen zu können. Ein Benutzersystem nur für die Künstler ermöglicht einen Ausstausch untereeindander.',
        image: {
          src: 'images/ta.jpg'
        },
        features: [],
        links: [{
          url: '',
          icon: 'fa-video-camera',
          type: 'video',
          id: 118232950
        }]
      }, {
        title: 'Mascha & Seethaler',
        subtitle: 'Gute Architektur kann man kaufen.',
        text: 'Die Sammlung Lenikus umfasst vornehmlich Werke junger österreichischer und internationaler Künstler/innen. Die umfangreichen Inhalte und indiviuellen Vernetzungen der Werke und Künstler untereindander, erforderten ein eigens an diese Anforderungen angepasstes System zur intuitiven Bedienung und flexiblen Handhabung. Die Wartung bietet eine direkte Vernetzung mit Services von Mailchimp sowie Facebook um Aufgaben aus einer Hand erledigen zu können. Ein Benutzersystem nur für die Künstler ermöglicht einen Ausstausch untereeindander.',
        image: {
          src: 'images/ms.jpg'
        },
        features: [],
        links: [{
          url: 'http://www.architects.co.at',
          icon: 'fa-globe',
          type: 'web'
        }, {
          url: 'https://www.facebook.com/pages/Mascha-Seethaler/678185975581197?fref=ts',
          icon: 'fa-facebook',
          type: 'facebook'
        }]
      }, {
        title: 'Sammlung Lenikus',
        subtitle: 'Sammeln ist noch keine Kunst',
        text: 'Die Sammlung Lenikus umfasst vornehmlich Werke junger österreichischer und internationaler Künstler/innen. Die umfangreichen Inhalte und indiviuellen Vernetzungen der Werke und Künstler untereindander, erforderten ein eigens an diese Anforderungen angepasstes System zur intuitiven Bedienung und flexiblen Handhabung. Die Wartung bietet eine direkte Vernetzung mit Services von Mailchimp sowie Facebook um Aufgaben aus einer Hand erledigen zu können. Ein Benutzersystem nur für die Künstler ermöglicht einen Ausstausch untereeindander.',
        image: {
          src: 'images/sl.jpg'
        },
        features: [],
        links: [{
          url: 'http://www.sammlunglenikus.at',
          icon: 'fa-globe',
          type: 'web'
        }, {
          url: 'https://www.facebook.com/SammlungLenikus?fref=ts',
          icon: 'fa-facebook',
          type: 'facebook'
        }]
      }, {
        title: 'Sostaric Photography',
        subtitle: 'Sammeln ist noch keine Kunst',
        text: 'Die Sammlung Lenikus umfasst vornehmlich Werke junger österreichischer und internationaler Künstler/innen. Die umfangreichen Inhalte und indiviuellen Vernetzungen der Werke und Künstler untereindander, erforderten ein eigens an diese Anforderungen angepasstes System zur intuitiven Bedienung und flexiblen Handhabung. Die Wartung bietet eine direkte Vernetzung mit Services von Mailchimp sowie Facebook um Aufgaben aus einer Hand erledigen zu können. Ein Benutzersystem nur für die Künstler ermöglicht einen Ausstausch untereeindander.',
        image: {
          src: 'images/sostaric.jpg'
        },
        features: [],
        links: [{
          url: 'http://www.sostaric.com',
          icon: 'fa-globe',
          type: 'web'
        }, {
          url: 'https://www.facebook.com/pages/Daniel-Sostaric-Photografie/101584836548809?fref=ts',
          icon: 'fa-facebook',
          type: 'facebook'
        }, {
          url: 'http://danielsostaric.tumblr.com/',
          icon: 'fa-tumblr',
          type: 'tumblr'
        }]
      }, {
        title: 'Open Science',
        subtitle: 'dialog<>gentechnik trifft vienna open lab',
        text: 'Open Science steht für den Dialog zwischen Wissenschaft und Öffentlichkeit. Der gemeinnützige, wissenschaftliche Verein setzt sich dafür ein, Lebenswissenschaften sichtbar, erlebbar und verständlich zu machen. In Fusion mit dem Vienna Open Lab ergab sich eine Onlineplattform welche neben umfangreicher Aufklärung zu aktuellen wissenschaftlichen Themen, ein große Auswahl an Kursen und Fortbildungen anbietet. Diese sind über die Plattform openscience.or.at einseh- und buchbar.',
        image: {
          src: 'images/os.jpg'
        },
        features: [],
        links: [{
          url: 'http://www.openscience.or.at',
          icon: 'fa-globe',
          type: 'web'
        }, {
          url: 'https://www.facebook.com/OpenScience.or.at?fref=ts',
          icon: 'fa-facebook',
          type: 'facebook'
        }, {
          url: 'https://www.facebook.com/ViennaOpenLab?fref=ts',
          icon: 'fa-facebook-square',
          type: 'facebook'
        }]
      }, {
        title: 'Bei Mir',
        subtitle: 'Sammeln ist noch keine Kunst',
        text: 'Die Sammlung Lenikus umfasst vornehmlich Werke junger österreichischer und internationaler Künstler/innen. Die umfangreichen Inhalte und indiviuellen Vernetzungen der Werke und Künstler untereindander, erforderten ein eigens an diese Anforderungen angepasstes System zur intuitiven Bedienung und flexiblen Handhabung. Die Wartung bietet eine direkte Vernetzung mit Services von Mailchimp sowie Facebook um Aufgaben aus einer Hand erledigen zu können. Ein Benutzersystem nur für die Künstler ermöglicht einen Ausstausch untereeindander.',
        image: {
          src: 'images/bm.jpg'
        },
        features: [],
        links: [{
          url: 'http://www.bei-mir.at',
          icon: 'fa-globe',
          type: 'web'
        }, {
          url: 'https://www.facebook.com/BeiMirTrageberatung?fref=ts',
          icon: 'fa-facebook',
          type: 'facebook'
        }]
      }, {
        title: 'Finanza',
        subtitle: 'Online Finanzcheck',
        text: 'Für viele Selbständige und kleine Betriebe ist es aufwändig die ganzen Zahlungen und Beläge im Auge zu behalten. Wenn dann der Jahresabschluss oder Zwischenbilanzen nötig sind muss der Steuerberater her oder die unüberschaubare Buchhaltungssoftware gefragt werden. Nicht so beim Finanza. Finanza ist ein einfaches, leicht zu bedienendes Onlinetool, welches es ermöglicht alle ein und Ausgänge erfassen und der Überlick niemals verloren geht. Die zu erfassenden Eingaben werden von der CWO-Kanzlei Villach gewartet und zur Verfügung gestellt. ',
        image: {
          src: 'images/finanza.jpg'
        },
        features: [],
        links: [{
          url: 'http://www.cwo-kanzlei.at',
          icon: 'fa-globe',
          type: 'web'
        }]
      }, {
        title: 'Lenikus',
        subtitle: 'Online Finanzcheck',
        text: 'Für viele Selbständige und kleine Betriebe ist es aufwändig die ganzen Zahlungen und Beläge im Auge zu behalten. Wenn dann der Jahresabschluss oder Zwischenbilanzen nötig sind muss der Steuerberater her oder die unüberschaubare Buchhaltungssoftware gefragt werden. Nicht so beim Finanza. Finanza ist ein einfaches, leicht zu bedienendes Onlinetool, welches es ermöglicht alle ein und Ausgänge erfassen und der Überlick niemals verloren geht. Die zu erfassenden Eingaben werden von der CWO-Kanzlei Villach gewartet und zur Verfügung gestellt. ',
        image: {
          src: 'images/lenikus.jpg'
        },
        features: [],
        links: [{
          url: 'http://www.lenikus.at',
          icon: 'fa-globe',
          type: 'web'
        }]
      }, {
        title: 'CWO Kanzlei',
        subtitle: 'Online Finanzcheck',
        text: 'Für viele Selbständige und kleine Betriebe ist es aufwändig die ganzen Zahlungen und Beläge im Auge zu behalten. Wenn dann der Jahresabschluss oder Zwischenbilanzen nötig sind muss der Steuerberater her oder die unüberschaubare Buchhaltungssoftware gefragt werden. Nicht so beim Finanza. Finanza ist ein einfaches, leicht zu bedienendes Onlinetool, welches es ermöglicht alle ein und Ausgänge erfassen und der Überlick niemals verloren geht. Die zu erfassenden Eingaben werden von der CWO-Kanzlei Villach gewartet und zur Verfügung gestellt. ',
        image: {
          src: 'images/cwo.jpg'
        },
        features: [],
        links: [{
          url: 'http://www.cwo-kanzlei.at',
          icon: 'fa-globe',
          type: 'web'
        }]
      }, {
        title: 'Sinus Pro',
        subtitle: 'Solving problems is our profession',
        text: 'Für viele Selbständige und kleine Betriebe ist es aufwändig die ganzen Zahlungen und Beläge im Auge zu behalten. Wenn dann der Jahresabschluss oder Zwischenbilanzen nötig sind muss der Steuerberater her oder die unüberschaubare Buchhaltungssoftware gefragt werden. Nicht so beim Finanza. Finanza ist ein einfaches, leicht zu bedienendes Onlinetool, welches es ermöglicht alle ein und Ausgänge erfassen und der Überlick niemals verloren geht. Die zu erfassenden Eingaben werden von der CWO-Kanzlei Villach gewartet und zur Verfügung gestellt. ',
        image: {
          src: 'images/sp.jpg'
        },
        features: [],
        links: [{

          url: 'http://www.sinuspro.at',
          icon: 'fa-globe',
          type: 'web'
        }, {
          url: 'https://www.facebook.com/pages/SinusPro-GmbH/131591833565977?fref=ts',
          icon: 'fa-facebook',
          type: 'facebook'
        }]
      }, {
        title: 'Muchogusto',
        subtitle: 'So viele Kurven und ich keine Bremsen!',
        text: 'Die Geschichte des größten Frauenhelden aller Zeiten – verpackt in eine Oper voller heissblütiger Rumba- Klänge, verführerischem Jazz und leidenschaftlicher Surf-Rock Musik der 50er Jahre. Eine schlicht, überschaubare aber sehr anreizende Webpräsentation um einen Überblick erschaffen zu können, welchen Reiz „Una Ópera tragi-erótico“ zu bieten hat.',
        image: {
          src: 'images/mg.jpg'
        },
        features: [],
        links: [{
          url: 'http://www.muchogusto.at',
          icon: 'fa-globe',
          type: 'web'
        }, {
          url: 'https://www.facebook.com/muchogusto.una.opera.tragi.erotico?fref=ts',
          icon: 'fa-facebook',
          type: 'facebook'
        }]
      }, {
        title: 'rockocco',
        subtitle: 'pipifeine wäsche für kleine',
        text: 'Für einen Schritt zur Nachhaltigkeit unseres Konsum, das wohlbefinden kindlichen Auslebens und auch ein Weiter(er)leben von so manchen Lieblingsstücken bietet rockocco für unsere Kleinen, recyclete Mode für Bewegungsdrang. Die Einfachheit der Bedienung von Inhalten ist ein Hauptaugenmerk von rockocco.at. Inhalte werden aus der Fanseite von Facebook übernommen und optisch aufbereitet in die Webseite integriert. Somit ist der Bedienungsaufwand minimiert und auch nicht Facebook-Benutzer versäumen nichts mehr.',
        image: {
          src: 'images/rockocco.jpg'
        },
        features: [],
        links: [{
          url: 'http://www.rockocco.at',
          icon: 'fa-globe',
          type: 'web'
        }, {
          url: 'https://www.facebook.com/rockocco.at?fref=ts',
          icon: 'fa-facebook',
          type: 'facebook'
        }]
      }, {
        title: 'Flowmotion',
        subtitle: 'Illustion happening',
        text: 'Ich habe schon viele Bröschüren bzw. Heftlan gestaltet, aber was diese hier, zumindest für mich, so besonders macht, ist der Umschlag. Hier wurden ungefähr ein Duzent Landschaften übereinander gelegt, zusammengschnitten, farblich angepasst und gestückelt, um ein farbenfrohes, vielfältiges, sehnsüchtiges Land zu erschaffen.',
        image: {
          src: 'images/fm.jpg'
        },
        features: [],
        links: []
      }];
    }, 750);

    $scope.showVideo = function(link) {

    };
  });