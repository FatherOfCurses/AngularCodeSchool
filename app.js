(function () {
    var app = angular.module('store', []);

    app.controller('StoreController', function () {
        this.products = gems;
    });

    app.controller('PanelController', function () {
        this.tab = 1;
        this.selectTab = function (setTab) {
            this.tab = setTab;
        };
        this.isSelected = function (checkTab) {
            return this.tab === checkTab;
        };
    });

    app.controller("ReviewController", function(){
        this.review ={};

        this.addReview = function(product) {
            // push the review onto this product's reviews array
            product.reviews.push(this.review);
            // clear the form
            this.review = {};
        };
    });
    
    var gems = [
        {
            name: "Dodecahedron Gem",
            price: 2,
            description: "Some gems have hidden qualities beyond their luster, beyond their shine... Dodeca is one of those gems.",
            images: [
                {
                    full: 'gem-04.gif',
                    thumb: 'gem-02.gif'
                }

            ],
            reviews: [
                {
                    stars: 5,
                    body: "I love this product!",
                    author: "joe@thomas.com"
                },
                {
                    stars: 1,
                    body: "This product sucks!",
                    author: "tim@hater.com"
                },
            ],
        canPurchase: true,
            soldOut: false,
        },
        {
            name: "Pentagonal Gem",
            price: 5.95,
            description: ". . . ",
            canPurchase: false,
            soldOut: false,
        }
    ]
})();

