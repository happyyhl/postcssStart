angular.module("starter",["ionic.contrib.drawer","ionic","starter.controllers","starter.services","nvd3ChartDirectives","starter.autocomplete","ngCookies","pascalprecht.translate","angular-progress-arc","AutoFontSize"]).run(function(t){t.ready(function(){window.cordova&&window.cordova.plugins.Keyboard,window.StatusBar&&StatusBar.styleDefault()})}).config(function(t,e){t.state("app",{url:"/app","abstract":!0,templateUrl:"templates/menu.html",controller:"AppCtrl"}).state("app.home",{url:"/home",views:{menuContent:{templateUrl:"templates/home.html",controller:"HomeCtrl"}}}).state("app.workout-category",{url:"/home/:categoryId",views:{menuContent:{templateUrl:"templates/category.html",controller:"WorkoutCategoryCtrl"}}}).state("app.workout-custom",{url:"/custom",views:{menuContent:{templateUrl:"templates/custom.html",controller:"WorkoutCustomCtrl"}}}).state("app.workout-custom2",{url:"/custom/featured",views:{menuContent:{templateUrl:"templates/custom2.html",controller:"WorkoutCustom2Ctrl"}}}).state("app.workout-length",{url:"/home/:categoryId/:typeId",views:{menuContent:{templateUrl:"templates/time.html",controller:"WorkoutTimeCtrl"}}}).state("app.workout",{url:"/home/:categoryId/:typeId/:timeId/workout",views:{menuContent:{templateUrl:"templates/workout.html",controller:"WorkoutCtrl"}}}).state("app.timing",{url:"/timing",views:{menuContent:{templateUrl:"templates/timing.html",controller:"TimingCtrl"}}}).state("app.progress",{url:"/progress",views:{menuContent:{templateUrl:"templates/progress.html",controller:"ProgressCtrl"}}}).state("app.log",{url:"/progress/log",views:{menuContent:{templateUrl:"templates/logs.html",controller:"LogCtrl"}}}).state("app.settings",{url:"/settings",views:{menuContent:{templateUrl:"templates/settings.html",controller:"SettingsCtrl"}}}).state("app.settings-audio",{url:"/settings/audio",views:{menuContent:{templateUrl:"templates/settings-audio.html",controller:"SettingsAudioCtrl"}}}).state("app.rewards",{url:"/rewards",views:{menuContent:{templateUrl:"templates/rewards.html",controller:"RewardsCtrl"}}}).state("app.reminders",{url:"/reminders",views:{menuContent:{templateUrl:"templates/reminders.html",controller:"RemindersCtrl"}}}).state("app.exercises",{url:"/exercises",views:{menuContent:{templateUrl:"templates/exercises.html",controller:"ExerciseListCtrl"}}}).state("app.apps",{url:"/apps",views:{menuContent:{templateUrl:"templates/apps.html",controller:"PartnerAppsCtrl"}}}).state("app.nexercise",{url:"/nexercise",views:{menuContent:{templateUrl:"templates/nexercise.html",controller:"NexerciseAppCtrl"}}}).state("app.sworkitpro",{url:"/sworkitpro",views:{menuContent:{templateUrl:"templates/sworkitpro.html",controller:"SworkitProAppCtrl"}}}).state("app.help",{url:"/help",views:{menuContent:{templateUrl:"templates/help.html",controller:"HelpCtrl"}}}),e.otherwise("/app/home")}).config(function(t,e,r){for(lang in translations)r.translations(lang,translations[lang]);if(void 0!=window.localStorage.NG_TRANSLATE_LANG_KEY&&window.localStorage.NG_TRANSLATE_LANG_KEY)r.preferredLanguage("EN"),r.useLocalStorage();else{var l,o,a="EN",s=window.navigator,n=["language","browserLanguage","systemLanguage","userLanguage"];if(angular.isArray(s.languages))for(l=0;l<s.languages.length;l++)o=s.languages[l],o&&o.length&&(a=o);for(l=0;l<n.length;l++)o=s[n[l]],o&&o.length&&(a=o);var p="EN",m=a.substring(0,2).toUpperCase();"ES"==m&&a.length>2?p="ESLA":"DE"!=m&&"RU"!=m&&"TR"!=m&&"FR"!=m&&"PT"!=m&&"IT"!=m&&"ES"!=m&&"HI"!=m&&"JA"!=m&&"ZH"!=m&&"KO"!=m||(p=m),r.preferredLanguage(p),r.useLocalStorage()}});