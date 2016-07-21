angular.module("movieFlixApp")
    .service("movieFlixService", function(){

        var id;

        var titles = [
            {
                name: 'Orange is the new Black',
                genre: 'Netflix Original',
                year: 2013,
                imdbRating: 6.4,
                actors: [],
                director: '',
                plot: '',
                id: 1
            },
            {
                name: 'House of Cards',
                genre: 'Netflix Original',
                year: 2013,
                imdbRating: 8.6,
                actors: [],
                director: '',
                plot: '',
                id: 2
            },
            {
                name: 'Arrested Developement',
                genre: 'Netflix Original',
                year: 2015,
                imdbRating: 4.0,
                actors: [],
                director: '',
                plot: '',
                id: 3
            },
            {
                name: 'Narcos',
                genre: 'Netflix Original',
                year: 2015,
                imdbRating: 8.2,
                actors: [],
                director: '',
                plot: '',
                id: 4
            },
            {
                name: 'Daredevil',
                genre: 'Netflix Original',
                year: 2014,
                imdbRating: 9.1,
                actors: [],
                director: '',
                plot: '',
                id: 5
            },
            {
                name: 'Friends',
                genre: 'Comedy',
                year: 1994,
                imdbRating: 9.8,
                actors: [],
                director: '',
                plot: '',
                id: 6

            },
            {
                name: 'The Office',
                genre: 'Comedy',
                year: 2005,
                imdbRating: 8.2,
                actors: [],
                director: '',
                plot: '',
                id: 7

            },
            {
                name: 'How I Met Your Mother',
                genre: 'Comedy',
                year: 2005,
                imdbRating: 7.4,
                actors: [],
                director: '',
                plot: '',
                id: 8

            },
            {
                name: 'Scrubs',
                genre: 'Comedy',
                year: 2000,
                imdbRating: 7.8,
                actors: [],
                director: '',
                plot: '',
                id: 9

            },
            {
                name: 'Bones',
                genre: 'Crime',
                year: 2005,
                imdbRating: 7.4,
                actors: [],
                director: '',
                plot: '',
                id: 10
            },
            {
                name: 'CSI',
                genre: 'Crime',
                year: 2007,
                imdbRating: 8.4,
                actors: [],
                director: '',
                plot: '',
                id: 11
            },
            {
                name: 'Castle',
                genre: 'Crime',
                year: 2010,
                imdbRating: 7.7,
                actors: [],
                director: '',
                plot: '',
                id: 12
            },

            {
                name: 'New Girl',
                genre: 'Comedy',
                year: 2012,
                imdbRating: 7.8,
                actors: [],
                director: '',
                plot: '',
                id: 13
            },
            {
                name: 'Kuch Kuch Hota Hai',
                genre: 'romance',
                year: 1996,
                imdbRating: 8.0,
                actors: [],
                director: '',
                plot: '',
                id: 14
            },
            {
                name: 'Kabhi khushi kabhi gham',
                genre: 'romance',
                year: 2001,
                imdbRating: 7.0,
                actors: [],
                director: '',
                plot: '',
                id: 15
            },
            {
                name: 'Kabhi alvida na kehna',
                genre: 'romance',
                year: 2005,
                imdbRating: 6.0,
                actors: [],
                director: '',
                plot: '',
                id: 16
            },
            {
                name: 'Kal ho na ho',
                genre: 'romance',
                year: 2003,
                imdbRating: 9.0,
                actors: [],
                director: '',
                plot: '',
                id: 17
            }
        ];

        this.getTitles = function(){
            return titles;
        };

        this.addNewTitle = function(vm){

            var newTitle = {
              name: vm.name,
                year: vm.year,
                imdbRating: vm.imdbRating,
                director: vm.director,
                plot: vm.plot,
                id: titles.length+1
            };

            titles.push(newTitle);
        };

        this.deleteTitle = function (index){
            titles.splice(index,1);
        };

        var search;

        this.getSearch = function(){
            return search;
        };

        this.setSearch = function(searchBar){
          search = searchBar;
        };

        function setTitleId(idToBeSet){
            id = idToBeSet;
        }

        function getTitleId(){
            return id;
        }

        this.getTitleById = function(id){
            setTitleId(id);
            return titles.find(matchId);
        };

        function matchId(title){
            console.log(title);
          return title.id == getTitleId();
        }

        function getIndexOfArrayToBeEdited(){
            return titles.findIndex(matchId);
        }

        this.editTitle = function(title){
            var index = getIndexOfArrayToBeEdited();
            titles[index] = title;
        };



        if (!Array.prototype.findIndex) {
            Array.prototype.findIndex = function(predicate) {
                if (this === null) {
                    throw new TypeError('Array.prototype.findIndex called on null or undefined');
                }
                if (typeof predicate !== 'function') {
                    throw new TypeError('predicate must be a function');
                }
                var list = Object(this);
                var length = list.length >>> 0;
                var thisArg = arguments[1];
                var value;

                for (var i = 0; i < length; i++) {
                    value = list[i];
                    if (predicate.call(thisArg, value, i, list)) {
                        return i;
                    }
                }
                return -1;
            };
        }






    });