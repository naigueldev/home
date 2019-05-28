webpackJsonp([7],{

/***/ 136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_auth__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_fire_database__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__helper_helper__ = __webpack_require__(41);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the ProductsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ProductsProvider = /** @class */ (function () {
    function ProductsProvider(authProvider, db, helper) {
        this.authProvider = authProvider;
        this.db = db;
        this.helper = helper;
        console.log('Hello ProductsProvider Provider');
    }
    ProductsProvider.prototype.getPath = function () {
        return this.PATH;
    };
    ProductsProvider.prototype.setPath = function (list_id) {
        this.PATH = 'list/' + list_id + "/products";
        var user_profile_path = this.authProvider.PATH;
        var user_id = localStorage.getItem("user_id");
        this.PATH = user_profile_path + "/" + user_id + "/" + this.PATH;
        console.log("this PATH = " + this.PATH);
    };
    ProductsProvider.prototype.getAllById = function (list_id) {
        this.setPath(list_id);
        return this.db.list(this.PATH, function (ref) { return ref.orderByChild('id'); })
            .snapshotChanges()
            .map(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        });
    };
    ProductsProvider.prototype.remove = function (key) {
        return this.db.list(this.PATH).remove(key);
    };
    ProductsProvider.prototype.save = function (list) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (list.key) {
                _this.db.list(_this.PATH)
                    .update(list.key, list)
                    .then(function () { return resolve(); })
                    .catch(function (e) { return reject(e); });
            }
            else {
                _this.db.list(_this.PATH)
                    .push(list)
                    .then(function () { return resolve(); });
            }
        });
    };
    ProductsProvider.prototype.setTotalPrice = function (products) {
        var total = 0;
        var total_numbers = 0.00;
        for (var product in products) {
            var price_numbers = this.helper.getMoney(product);
            total += parseFloat(this.helper.formatDollarStr(price_numbers));
            console.log("TOTAL = " + total);
        }
        total_numbers = this.helper.getMoney(total);
        return this.helper.formatReal(total_numbers);
    };
    ProductsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__auth_auth__["a" /* AuthProvider */], __WEBPACK_IMPORTED_MODULE_2__angular_fire_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_3__helper_helper__["a" /* HelperProvider */]])
    ], ProductsProvider);
    return ProductsProvider;
}());

//# sourceMappingURL=products.js.map

/***/ }),

/***/ 137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailValidator; });
var EmailValidator = /** @class */ (function () {
    function EmailValidator() {
    }
    EmailValidator.isValid = function (control) {
        var re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(control.value);
        if (re) {
            return null;
        }
        return {
            invalidEmail: true,
        };
    };
    return EmailValidator;
}());

//# sourceMappingURL=email.js.map

/***/ }),

/***/ 138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__list_list__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(70);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, authProvider) {
        this.navCtrl = navCtrl;
        this.authProvider = authProvider;
        this.page_title = localStorage.getItem("user_email");
    }
    HomePage.prototype.goToList = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__list_list__["a" /* ListPage */], {});
    };
    HomePage.prototype.logout = function () {
        var _this = this;
        this.authProvider.logoutUser()
            .then(function (authData) {
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */]);
        }, function (error) { });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/naiguelsantos/Documents/PROGRAMMING/IONIC/projects/applistadecompras.com.br/applistadecompras/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Lista de Compras\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="logout()">\n        <ion-icon name="power"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n\n    <button ion-button (click)="goToList()" class="col-12">Minhas listas</button>\n\n\n  \n</ion-content>\n'/*ion-inline-end:"/Users/naiguelsantos/Documents/PROGRAMMING/IONIC/projects/applistadecompras.com.br/applistadecompras/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_list_list__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__products_products__ = __webpack_require__(163);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ListPage = /** @class */ (function () {
    function ListPage(navCtrl, navParams, alertCtrl, provider, toast) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.provider = provider;
        this.toast = toast;
    }
    ListPage_1 = ListPage;
    ListPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ListPage');
        this.lists = this.provider.getAll();
    };
    ListPage.prototype.newList = function () {
        var _this = this;
        console.log("createList function");
        var prompt = this.alertCtrl.create({
            title: 'Nova Lista',
            message: "Digite o nome da nova lista que você deseja criar",
            inputs: [
                {
                    name: 'name',
                    placeholder: 'Nome da lista'
                },
            ],
            buttons: [
                {
                    text: 'Cancelar',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Salvar',
                    handler: function (data) {
                        console.log('Saved clicked');
                        if (data.name) {
                            console.log('Nome = ' + data.name);
                            _this.onSubmit(data);
                        }
                        else {
                            _this.presentAlert();
                        }
                    }
                }
            ]
        });
        prompt.present();
        this.navCtrl.push(ListPage_1, {});
    };
    ListPage.prototype.presentAlert = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Insira um nome',
            subTitle: 'Campo obrigatório',
            buttons: [{
                    text: 'Ok',
                    handler: function (data) {
                        _this.newList();
                    }
                }]
        });
        alert.present();
    };
    ListPage.prototype.editList = function (List) {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: 'Editar Lista',
            message: "Digite o nome da lista que você deseja editar",
            inputs: [
                {
                    name: 'name',
                    placeholder: 'Nome da lista',
                    value: List.name
                },
            ],
            buttons: [
                {
                    text: 'Cancelar',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Editar',
                    handler: function (data) {
                        data.key = (List.key) ? (List.key) : null;
                        if (data.name) {
                            console.log('Nome = ' + data.name);
                            _this.onSubmit(data);
                        }
                        else {
                            _this.presentAlert();
                        }
                    }
                }
            ]
        });
        prompt.present();
        this.navCtrl.push(ListPage_1, {});
    };
    ListPage.prototype.removeList = function (key) {
        var _this = this;
        if (key) {
            this.provider.remove(key)
                .then(function () {
                _this.toast.create({ message: 'Lista removida com sucesso.', duration: 3000 }).present();
            })
                .catch(function () {
                _this.toast.create({ message: 'Erro ao remover a lista.', duration: 3000 }).present();
            });
        }
    };
    ListPage.prototype.onSubmit = function (data) {
        var _this = this;
        if (data) {
            this.provider.save(data)
                .then(function () {
                _this.toast.create({ message: 'Lista salva com sucesso.', duration: 3000 }).present();
                _this.navCtrl.pop();
            })
                .catch(function (e) {
                _this.toast.create({ message: 'Erro ao salvar a lista.', duration: 3000 }).present();
                console.error(e);
            });
        }
    };
    ListPage.prototype.openList = function (list_key) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__products_products__["a" /* ProductsPage */], { list_key: list_key });
    };
    ListPage = ListPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"/Users/naiguelsantos/Documents/PROGRAMMING/IONIC/projects/applistadecompras.com.br/applistadecompras/src/pages/list/list.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>\n      Minhas listas\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n    <ion-list>\n        <ion-item-sliding *ngFor="let list of lists | async">\n          <ion-item (click)="openList(list.key)">\n            <h1>{{ list.name }}</h1>\n          </ion-item>\n          <ion-item-options side="left">\n            <button ion-button color="secondary" (click)="editList(list)">\n              <ion-icon name="create"></ion-icon>\n            </button>\n          </ion-item-options>\n\n          <ion-item-options side="right">\n            <button ion-button color="danger" (click)="removeList(list.key)">\n              <ion-icon name="trash"></ion-icon>\n            </button>\n          </ion-item-options>\n        </ion-item-sliding>\n      </ion-list>\n  \n  \n  <!-- fab placed to the top end -->\n  <ion-fab right bottom fixed>\n    <button ion-fab (click)="newList()">\n      <ion-icon name="add"></ion-icon>\n    </button>\n  </ion-fab>\n</ion-content>\n'/*ion-inline-end:"/Users/naiguelsantos/Documents/PROGRAMMING/IONIC/projects/applistadecompras.com.br/applistadecompras/src/pages/list/list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__providers_list_list__["a" /* ListProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]])
    ], ListPage);
    return ListPage;
    var ListPage_1;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_products_products__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__product_create_product_create__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_helper_helper__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_fire_database__ = __webpack_require__(85);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
* Generated class for the ProductsPage page.
*
* See https://ionicframework.com/docs/components/#navigation for more info on
* Ionic pages and navigation.
*/
var ProductsPage = /** @class */ (function () {
    function ProductsPage(navCtrl, navParams, provider, modalCtrl, helper, db, toast) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.provider = provider;
        this.modalCtrl = modalCtrl;
        this.helper = helper;
        this.db = db;
        this.toast = toast;
        this.total_price = 0.00;
        this.list_id = this.navParams.get('list_key');
        console.log("this.list_id =" + this.list_id);
    }
    ProductsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProductsPage');
        this.products = this.provider.getAllById(this.list_id);
        this.getTotalPrice();
    };
    ProductsPage.prototype.newProduct = function () {
        var _this = this;
        var productModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__product_create_product_create__["a" /* ProductCreatePage */], { list_id: this.list_id });
        productModal.present();
        productModal.onDidDismiss(function () {
            console.log("onDidDismiss productModal");
            _this.getTotalPrice();
        });
    };
    ProductsPage.prototype.editProduct = function (product_obj) {
        var _this = this;
        var productModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__product_create_product_create__["a" /* ProductCreatePage */], { list_id: this.list_id, product: product_obj });
        productModal.present();
        productModal.onDidDismiss(function () {
            console.log("onDidDismiss productModal");
            _this.getTotalPrice();
        });
    };
    ProductsPage.prototype.removeProduct = function (key) {
        var _this = this;
        if (key) {
            this.provider.remove(key)
                .then(function () {
                _this.toast.create({ message: 'Produto removido com sucesso.', duration: 3000 }).present();
            })
                .catch(function () {
                _this.toast.create({ message: 'Erro ao remover o produto.', duration: 3000 }).present();
            });
        }
        this.getTotalPrice();
    };
    ProductsPage.prototype.getTotalPrice = function () {
        var _this = this;
        var total = 0.00;
        var PATH = this.provider.getPath();
        return this.db.list(PATH).valueChanges().subscribe(function (items) {
            console.log("res" + JSON.stringify(items));
            items.forEach(function (item) {
                console.log("ITEM:", item['total']);
                var money = _this.helper.getMoney(item['total']);
                console.log("GET MONEY = " + money);
                var float_calc = item['total'].replace(/,/g, '.');
                var dollar_float = parseFloat(_this.helper.formatMoney(float_calc));
                console.log("DOLLAR_FLOAT = " + dollar_float);
                total += parseFloat(dollar_float.toFixed(2));
                console.log("TOTAL = " + total);
            });
            _this.total_price = total;
        });
    };
    ProductsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-products',template:/*ion-inline-start:"/Users/naiguelsantos/Documents/PROGRAMMING/IONIC/projects/applistadecompras.com.br/applistadecompras/src/pages/products/products.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>\n      Meus Produtos\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n    <ion-list>\n        <ion-item-sliding *ngFor="let product of products | async">\n          <button ion-item (click)="editProduct(product)" class="pl-0">\n            <ion-grid>\n              <ion-row class="m-0">\n                <ion-col col-8 class="text-truncate">\n                  <h1 class="product-name">{{ product.name }}</h1>\n                </ion-col>\n                <ion-col col-4>\n                  <div class="pull-right col-prices text-center">\n                    <p class="m-0 prod-total mb-1">R$ {{ product.total }}</p>\n                    <p class="m-0 prod-calc" *ngIf="product.quantity > 1">R$ {{ product.price }} <span class="multiply">*</span> {{ product.quantity }}</p>\n                  </div>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </button>\n          <ion-item-options side="left">\n            <button ion-button color="secondary" class="success" (click)="editProduct(product)">\n              <ion-icon name="create"></ion-icon>\n            </button>\n          </ion-item-options>\n\n          <ion-item-options side="right">\n            <button ion-button color="danger" class="danger" (click)="removeProduct(product.key)">\n              <ion-icon name="trash"></ion-icon>\n            </button>\n          </ion-item-options>\n\n\n        </ion-item-sliding>\n      </ion-list>\n  \n  \n  <!-- fab placed to the top end -->\n  <ion-fab right bottom fixed>\n    <button ion-fab (click)="newProduct()">\n      <ion-icon name="add"></ion-icon>\n    </button>\n  </ion-fab>\n</ion-content>\n\n<ion-footer>\n    <ion-toolbar>\n      <ion-title>Total: {{total_price | currency:\'BRL\':2 }}</ion-title>\n    </ion-toolbar>\n  </ion-footer>\n'/*ion-inline-end:"/Users/naiguelsantos/Documents/PROGRAMMING/IONIC/projects/applistadecompras.com.br/applistadecompras/src/pages/products/products.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_products_products__["a" /* ProductsProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_helper_helper__["a" /* HelperProvider */], __WEBPACK_IMPORTED_MODULE_5__angular_fire_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]])
    ], ProductsPage);
    return ProductsPage;
}());

//# sourceMappingURL=products.js.map

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductCreatePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_products_products__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_helper_helper__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
* Generated class for the ProductCreatePage page.
*
* See https://ionicframework.com/docs/components/#navigation for more info on
* Ionic pages and navigation.
*/
var ProductCreatePage = /** @class */ (function () {
    function ProductCreatePage(navCtrl, navParams, formBuilder, provider, toast, helper) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.provider = provider;
        this.toast = toast;
        this.helper = helper;
        this.product = {
            quantity: 1,
            price: "",
            total: ""
        };
        this.list_id = this.navParams.get('list_id');
        if (this.navParams.get('product')) {
            console.log("PRODUCT OBJECT EXISTS (Y) ");
            this.product = this.navParams.get('product');
        }
        console.log("THIS.LIST_ID = " + this.list_id);
    }
    ProductCreatePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProductCreatePage');
    };
    ProductCreatePage.prototype.addProduct = function () {
        var _this = this;
        console.log("addProduct = " + JSON.stringify(this.product));
        var data = this.product;
        if (data) {
            this.provider.save(data)
                .then(function () {
                // this.toast.create({ message: 'Produto salvo com sucesso.', duration: 3000 }).present();
                _this.navCtrl.pop();
            })
                .catch(function (e) {
                _this.toast.create({ message: 'Erro ao salvar o produto.', duration: 3000 }).present();
                console.error(e);
            });
        }
    };
    ProductCreatePage.prototype.sub = function () {
        if (this.product.quantity > 1)
            this.product.quantity--;
        this.calc_prices();
    };
    ProductCreatePage.prototype.calc_prices = function () {
        var price_dollar = this.product.price.replace(',', '.');
        console.log("number replace = " + price_dollar);
        var multiplication = this.product.quantity * parseFloat(price_dollar);
        console.log("number requantity x parse float dollar = " + multiplication);
        var multiplication_num = multiplication.toFixed(2);
        console.log("number fixed 2 = " + multiplication_num);
        var multiplication_str = (multiplication_num.toString() == "NaN") ? "0,00" : multiplication_num.toString();
        console.log("number string = " + multiplication_str);
        var total_real = this.getMoney(multiplication_str);
        console.log("number get Money = " + total_real);
        var total_real_format = this.formatReal(total_real);
        console.log("number format real = " + total_real_format);
        this.product.total = total_real_format.toString();
        console.log("total_real_format to string = " + this.product.total);
    };
    ProductCreatePage.prototype.add = function () {
        this.product.quantity++;
        this.calc_prices();
    };
    ProductCreatePage.prototype.getMoney = function (str) {
        return str.replace(/[\D]+/g, '');
    };
    ProductCreatePage.prototype.formatReal = function (int) {
        var tmp = int + '';
        tmp = tmp.replace(/([0-9]{2})$/g, ",$1");
        if (tmp.length > 6)
            tmp = tmp.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2");
        return tmp;
    };
    ProductCreatePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-product-create',template:/*ion-inline-start:"/Users/naiguelsantos/Documents/PROGRAMMING/IONIC/projects/applistadecompras.com.br/applistadecompras/src/pages/product-create/product-create.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-buttons left>\n      <button navPop ion-button icon-only class="arrow-back-btn">\n        <ion-icon color="light" name="arrow-back"></ion-icon>\n      </button>\n    </ion-buttons>\n    \n    <ion-title>\n      Adicionar Produto\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <form (ngSubmit)="addProduct()">\n    \n    <ion-item>\n      <ion-label stacked>Nome</ion-label>\n      <ion-input type="text" [(ngModel)]="product.name" name="name" placeholder="Nome do produto"></ion-input>\n    </ion-item>\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <ion-item>\n            <ion-label stacked>Preço</ion-label>\n            <ion-input type="text" placeholder="0,00" [(ngModel)]="product.price" name="price" [brmasker]="{money: true, thousand: \'.\',  decimalCaracter: \',\', decimal: \'2\'}" (keyup)="calc_prices()" (keypress)="calc_prices()" (ionBlur)="calc_prices()"></ion-input>\n          </ion-item>\n        </ion-col>\n        <ion-col class="d-flex align-items-center">\n          <ion-icon name="remove-circle" (click)="sub()"></ion-icon>\n          <ion-item>\n            <ion-label stacked>Qtd</ion-label>\n            <ion-input type="number" [(ngModel)]="product.quantity" name="quantity" class="text-center" (keyup)="calc_prices()" (ionBlur)="calc_prices()"></ion-input>\n          </ion-item>\n          <ion-icon name="add-circle" (click)="add()"></ion-icon>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-item>\n            <ion-label stacked>Total</ion-label>\n            <ion-input [disabled]="true" type="text" placeholder="0,00" [(ngModel)]="product.total" name="total" class="text-center" [brmasker]="{money: true, thousand: \'.\',  decimalCaracter: \',\', decimal: \'2\'}"></ion-input>\n          </ion-item>\n          \n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    <button ion-button block type="submit">\n      Adicionar\n    </button>\n    \n  </form>\n  \n</ion-content>\n'/*ion-inline-end:"/Users/naiguelsantos/Documents/PROGRAMMING/IONIC/projects/applistadecompras.com.br/applistadecompras/src/pages/product-create/product-create.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3__providers_products_products__["a" /* ProductsProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_helper_helper__["a" /* HelperProvider */]])
    ], ProductCreatePage);
    return ProductCreatePage;
}());

//# sourceMappingURL=product-create.js.map

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__validators_email__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_helper_helper__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login__ = __webpack_require__(70);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// import { HomePage } from '../home/home';


var SignupPage = /** @class */ (function () {
    function SignupPage(navCtrl, authProvider, formBuilder, loadingCtrl, alertCtrl, helper) {
        this.navCtrl = navCtrl;
        this.authProvider = authProvider;
        this.formBuilder = formBuilder;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.helper = helper;
        this.signupForm = formBuilder.group({
            email: ['',
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__validators_email__["a" /* EmailValidator */].isValid])],
            password: ['',
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(6), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])]
        });
    }
    SignupPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SignupPage');
    };
    SignupPage.prototype.signupUser = function () {
        var _this = this;
        if (!this.signupForm.valid) {
            console.log(this.signupForm.value);
        }
        else {
            this.authProvider.signupUser(this.signupForm.value.email, this.signupForm.value.password)
                .then(function () {
                var alert = _this.alertCtrl.create({
                    message: "Obrigado por se cadastrar. Efetue o login e aproveite.",
                    buttons: [
                        {
                            text: "Ok",
                            role: 'cancel'
                        }
                    ]
                });
                alert.present();
                _this.loading.dismiss().then(function () {
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__login_login__["a" /* LoginPage */]);
                });
            }, function (error) {
                _this.loading.dismiss().then(function () {
                    var alert = _this.alertCtrl.create({
                        message: _this.helper.getFirebaseMessage(error.code),
                        buttons: [
                            {
                                text: "Ok",
                                role: 'cancel'
                            }
                        ]
                    });
                    alert.present();
                });
            });
            this.loading = this.loadingCtrl.create();
            this.loading.present();
        }
    };
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-signup',template:/*ion-inline-start:"/Users/naiguelsantos/Documents/PROGRAMMING/IONIC/projects/applistadecompras.com.br/applistadecompras/src/pages/signup/signup.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>\n      Criar nova conta\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <form [formGroup]="signupForm" (submit)="signupUser()" novalidate>\n    \n    <ion-item>\n      <ion-label stacked>E-mail</ion-label>\n      <ion-input formControlName="email" type="email" placeholder="Seu e-mail"\n      [class.invalid]="!signupForm.controls.email.valid && blur">\n    </ion-input>\n  </ion-item>\n  \n  <ion-item>\n    <ion-label stacked>Password</ion-label>\n    <ion-input formControlName="password" type="password" placeholder="Sua senha"\n    [class.invalid]="!signupForm.controls.password.valid && blur">\n  </ion-input>\n</ion-item>\n\n<button ion-button block type="submit" [disabled]="!signupForm.valid">\n  Criar\n</button>\n</form>\n</ion-content>'/*ion-inline-end:"/Users/naiguelsantos/Documents/PROGRAMMING/IONIC/projects/applistadecompras.com.br/applistadecompras/src/pages/signup/signup.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_helper_helper__["a" /* HelperProvider */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResetPasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__validators_email__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_helper_helper__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ResetPasswordPage = /** @class */ (function () {
    function ResetPasswordPage(navCtrl, authProvider, formBuilder, alertCtrl, helper) {
        this.navCtrl = navCtrl;
        this.authProvider = authProvider;
        this.formBuilder = formBuilder;
        this.alertCtrl = alertCtrl;
        this.helper = helper;
        this.resetPasswordForm = formBuilder.group({
            email: ['',
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__validators_email__["a" /* EmailValidator */].isValid])],
        });
    }
    ResetPasswordPage.prototype.resetPassword = function () {
        var _this = this;
        if (!this.resetPasswordForm.valid) {
            console.log(this.resetPasswordForm.value);
        }
        else {
            this.authProvider.resetPassword(this.resetPasswordForm.value.email)
                .then(function (user) {
                var alert = _this.alertCtrl.create({
                    message: "Enviamos por e-mail um link para redefinir sua senha.",
                    buttons: [
                        {
                            text: "Ok",
                            role: 'cancel',
                            handler: function () { _this.navCtrl.pop(); }
                        }
                    ]
                });
                alert.present();
            }, function (error) {
                var errorAlert = _this.alertCtrl.create({
                    message: _this.helper.getFirebaseMessage(error.code),
                    buttons: [{ text: "Ok", role: 'cancel' }]
                });
                errorAlert.present();
            });
        }
    };
    ResetPasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-reset-password',template:/*ion-inline-start:"/Users/naiguelsantos/Documents/PROGRAMMING/IONIC/projects/applistadecompras.com.br/applistadecompras/src/pages/reset-password/reset-password.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>\n      Recuperar senha\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <form [formGroup]="resetPasswordForm" (submit)="resetPassword()" novalidate>\n    \n    <ion-item>\n      <ion-label stacked>E-mail</ion-label>\n      <ion-input formControlName="email" type="email" placeholder="Seu e-mail cadastrado"\n      [class.invalid]="!resetPasswordForm.controls.email.valid && blur">\n    </ion-input>\n  </ion-item>\n  \n  <button ion-button block type="submit" [disabled]="!resetPasswordForm.valid">\n    Recuperar\n  </button>\n  \n</form>\n\n</ion-content>'/*ion-inline-end:"/Users/naiguelsantos/Documents/PROGRAMMING/IONIC/projects/applistadecompras.com.br/applistadecompras/src/pages/reset-password/reset-password.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_helper_helper__["a" /* HelperProvider */]])
    ], ResetPasswordPage);
    return ResetPasswordPage;
}());

//# sourceMappingURL=reset-password.js.map

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SplashPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_splash_screen__ = __webpack_require__(139);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SplashPage = /** @class */ (function () {
    function SplashPage(navCtrl, navParams, splashScreen, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.splashScreen = splashScreen;
        this.viewCtrl = viewCtrl;
        this.splash = "assets/icon/splashscreen.png";
    }
    SplashPage.prototype.ionViewDidLoad = function () {
        // console.log('ionViewDidLoad SplashPage');
    };
    SplashPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.splashScreen.hide();
        setTimeout(function () {
            _this.viewCtrl.dismiss();
        }, 4000);
    };
    SplashPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-splash',template:/*ion-inline-start:"/Users/naiguelsantos/Documents/PROGRAMMING/IONIC/projects/applistadecompras.com.br/applistadecompras/src/pages/splash/splash.html"*/'<ion-content>\n  <!-- <div id="bars">\n    <div class="cls-1">SUA</div>\n    <div class="cls-2">LISTA</div>\n    <div class="cls-3">DE</div>\n    <div class="cls-4">COMPRAS</div>\n    <div class="cls-5">Por: Naiguel Santos</div>\n  </div> -->\n\n  <div id="bars" class="d-flex align-items-center justify-content-center">\n    <div class="cls-1">\n      <img src="{{splash}}" alt="splash">\n    </div>\n  </div>\n\n\n  <!-- <svg id="bars" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 63.15 224.35">\n      <defs>\n          <style>.cls-1{fill:#dd238c;}.cls-2{fill:#ef4328;}.cls-3{fill:#7dd0df;}.cls-4{fill:#febf12;}.cls-5{fill:#282828;}</style>\n      </defs>\n      <title>jmlogo</title>\n      <rect class="cls-1" x="27.22" width="20.06" height="163.78"/>\n      <rect class="cls-2" y="4" width="20.06" height="163.78"/>\n      <rect class="cls-3" x="13.9" y="13.1" width="20.06" height="163.78"/>\n      <rect class="cls-4" x="43.1" y="7.45" width="20.06" height="163.78"/>\n      <path class="cls-5" d="M243.5,323a12,12,0,0,1-.5,3.43,8.88,8.88,0,0,1-1.63,3.1,8.24,8.24,0,0,1-3,2.26,10.8,10.8,0,0,1-4.58.86,9.63,9.63,0,0,1-6-1.82,8.48,8.48,0,0,1-3.07-5.47l4-.82a5.64,5.64,0,0,0,1.66,3.19,4.86,4.86,0,0,0,3.43,1.18,5.71,5.71,0,0,0,2.83-.62,4.53,4.53,0,0,0,1.7-1.63,7,7,0,0,0,.84-2.33,15.15,15.15,0,0,0,.24-2.71V297.82h4V323Z" transform="translate(-224.04 -108.31)"/>\n      <path class="cls-5" d="M252,297.82h6l11.52,26.64h0.1l11.62-26.64H287v34h-4V303.29h-0.1L270.72,331.8h-2.45l-12.19-28.51H256V331.8h-4v-34Z" transform="translate(-224.04 -108.31)"/>\n  </svg> -->\n\n</ion-content>\n'/*ion-inline-end:"/Users/naiguelsantos/Documents/PROGRAMMING/IONIC/projects/applistadecompras.com.br/applistadecompras/src/pages/splash/splash.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */]])
    ], SplashPage);
    return SplashPage;
}());

//# sourceMappingURL=splash.js.map

/***/ }),

/***/ 201:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 201;

/***/ }),

/***/ 243:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/list/list.module": [
		492,
		6
	],
	"../pages/login/login.module": [
		493,
		5
	],
	"../pages/product-create/product-create.module": [
		494,
		4
	],
	"../pages/products/products.module": [
		495,
		3
	],
	"../pages/reset-password/reset-password.module": [
		496,
		2
	],
	"../pages/signup/signup.module": [
		497,
		1
	],
	"../pages/splash/splash.module": [
		498,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 243;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 244:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_fire_database__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(454);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_auth__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__helper_helper__ = __webpack_require__(41);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ListProvider = /** @class */ (function () {
    function ListProvider(db, authProvider, helper) {
        this.db = db;
        this.authProvider = authProvider;
        this.helper = helper;
        console.log('Hello ListProvider Provider');
    }
    ListProvider.prototype.setPath = function () {
        this.PATH = 'list/';
        var user_profile_path = this.authProvider.PATH;
        var user_id = localStorage.getItem("user_id");
        this.PATH = user_profile_path + "/" + user_id + "/" + this.PATH;
        console.log("this PATH = " + this.PATH);
    };
    ListProvider.prototype.getAll = function () {
        this.setPath();
        return this.db.list(this.PATH, function (ref) { return ref.orderByChild('id'); })
            .snapshotChanges()
            .map(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        });
    };
    ListProvider.prototype.save = function (list) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (list.key) {
                _this.db.list(_this.PATH)
                    .update(list.key, { name: list.name })
                    .then(function () { return resolve(); })
                    .catch(function (e) { return reject(e); });
            }
            else {
                _this.db.list(_this.PATH)
                    .push({ name: list.name, })
                    .then(function () { return resolve(); });
            }
        });
    };
    ListProvider.prototype.remove = function (key) {
        return this.db.list(this.PATH).remove(key);
    };
    ListProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_fire_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_3__auth_auth__["a" /* AuthProvider */], __WEBPACK_IMPORTED_MODULE_4__helper_helper__["a" /* HelperProvider */]])
    ], ListProvider);
    return ListProvider;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(418);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelperProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HelperProvider = /** @class */ (function () {
    function HelperProvider() {
        console.log('Hello HelperProvider Provider');
    }
    HelperProvider.prototype.getFirebaseMessage = function (code) {
        var msg;
        switch (code) {
            case "auth/email-already-exists":
                msg = "Esse e-mail já está em uso.";
                break;
            case "auth/email-already-in-use":
                msg = "Esse e-mail já está em uso.";
                break;
            case "auth/user-not-found":
                msg = "E-mail ou Senha não encontrados.";
                break;
            case "auth/wrong-password":
                msg = "E-mail ou Senha não encontrados.";
                break;
            default:
                msg = code;
                break;
        }
        return msg;
    };
    HelperProvider.prototype.getMoney = function (str) {
        return parseInt(str.replace(/[\D]+/g, ''));
    };
    HelperProvider.prototype.formatRealPtBr = function (int) {
        return int.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    };
    HelperProvider.prototype.formatReal = function (int) {
        var tmp = int + '';
        tmp = tmp.replace(/([0-9]{2})$/g, ",$1");
        if (tmp.length > 6)
            tmp = tmp.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2");
        return tmp;
    };
    HelperProvider.prototype.formatDollarStr = function (number) {
        return number.toLocaleString('en-US');
    };
    HelperProvider.prototype.formatMoney = function (amount, decimalCount, decimal, thousands) {
        if (decimalCount === void 0) { decimalCount = 2; }
        if (decimal === void 0) { decimal = "."; }
        if (thousands === void 0) { thousands = ","; }
        decimalCount = Math.abs(decimalCount);
        decimalCount = isNaN(decimalCount) ? 2 : decimalCount;
        var negativeSign = amount < 0 ? "-" : "";
        var i = parseInt(amount = Math.abs(Number(amount) || 0).toFixed(decimalCount)).toString();
        var j = (i.length > 3) ? i.length % 3 : 0;
        return negativeSign + (j ? i.substr(0, j) + thousands : '') + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands) + (decimalCount ? decimal + Math.abs(amount - parseInt(i)).toFixed(decimalCount).slice(2) : "");
    };
    HelperProvider.prototype.created_at_date = function () {
        var date_now = new Date().toISOString();
        console.log("DATE NOW = " + date_now);
        return date_now;
    };
    HelperProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], HelperProvider);
    return HelperProvider;
}());

//# sourceMappingURL=helper.js.map

/***/ }),

/***/ 418:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(481);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_list_list__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_list_list__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_fire_database__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_login_login__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_auth_auth__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_fire_auth__ = __webpack_require__(482);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_firebase_app__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_firebase_auth__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_firebase_firestore__ = __webpack_require__(485);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_fire__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_signup_signup__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_reset_password_reset_password__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_helper_helper__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_products_products__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__providers_products_products__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_product_create_product_create__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_brmasker_ionic_3__ = __webpack_require__(488);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__angular_common__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__angular_common_locales_pt__ = __webpack_require__(491);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_splash_splash__ = __webpack_require__(167);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




























var firebaseConfig = {
    apiKey: "AIzaSyC_NW-kltN7kQiYllT8tKl1rpVWhbEiv5Q",
    authDomain: "listadecompras-57f68.firebaseapp.com",
    databaseURL: "https://listadecompras-57f68.firebaseio.com",
    projectId: "listadecompras-57f68",
    storageBucket: "listadecompras-57f68.appspot.com",
    messagingSenderId: "731232975029",
    appId: "1:731232975029:web:7e9273c1ba73b505"
};
__WEBPACK_IMPORTED_MODULE_13_firebase_app___default.a.initializeApp(firebaseConfig);
Object(__WEBPACK_IMPORTED_MODULE_24__angular_common__["j" /* registerLocaleData */])(__WEBPACK_IMPORTED_MODULE_25__angular_common_locales_pt__["a" /* default */], 'pt-BR');
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_reset_password_reset_password__["a" /* ResetPasswordPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_products_products__["a" /* ProductsPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_product_create_product_create__["a" /* ProductCreatePage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_splash_splash__["a" /* SplashPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_23_brmasker_ionic_3__["a" /* BrMaskerModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_fire_auth__["a" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_16__angular_fire__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {
                    backButtonText: '',
                    backButtonIcon: 'ios-arrow-back',
                    iconMode: 'md'
                }, {
                    links: [
                        { loadChildren: '../pages/list/list.module#ListPageModule', name: 'ListPage', segment: 'list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/product-create/product-create.module#ProductCreatePageModule', name: 'ProductCreatePage', segment: 'product-create', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/products/products.module#ProductsPageModule', name: 'ProductsPage', segment: 'products', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/reset-password/reset-password.module#ResetPasswordPageModule', name: 'ResetPasswordPage', segment: 'reset-password', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/splash/splash.module#SplashPageModule', name: 'SplashPage', segment: 'splash', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_9__angular_fire_database__["b" /* AngularFireDatabaseModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_reset_password_reset_password__["a" /* ResetPasswordPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_products_products__["a" /* ProductsPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_product_create_product_create__["a" /* ProductCreatePage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_splash_splash__["a" /* SplashPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_7__providers_list_list__["a" /* ListProvider */],
                __WEBPACK_IMPORTED_MODULE_11__providers_auth_auth__["a" /* AuthProvider */],
                __WEBPACK_IMPORTED_MODULE_19__providers_helper_helper__["a" /* HelperProvider */],
                __WEBPACK_IMPORTED_MODULE_21__providers_products_products__["a" /* ProductsProvider */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["H" /* LOCALE_ID */], useValue: "pt-BR" }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase_app__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_auth__ = __webpack_require__(87);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthProvider = /** @class */ (function () {
    function AuthProvider() {
        this.PATH = '/userProfile';
    }
    AuthProvider.prototype.loginUser = function (email, password) {
        return __WEBPACK_IMPORTED_MODULE_1_firebase_app___default.a.auth().signInWithEmailAndPassword(email, password);
    };
    AuthProvider.prototype.signupUser = function (email, password) {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_1_firebase_app___default.a
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then(function (newUser) {
            __WEBPACK_IMPORTED_MODULE_1_firebase_app___default.a
                .database()
                .ref(_this.PATH)
                .child(newUser.user.uid)
                .set({ email: email });
        });
    };
    AuthProvider.prototype.resetPassword = function (email) {
        return __WEBPACK_IMPORTED_MODULE_1_firebase_app___default.a.auth().sendPasswordResetEmail(email);
    };
    AuthProvider.prototype.logoutUser = function () {
        console.log("clear storage...");
        localStorage.clear();
        return __WEBPACK_IMPORTED_MODULE_1_firebase_app___default.a.auth().signOut();
    };
    AuthProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], AuthProvider);
    return AuthProvider;
}());

//# sourceMappingURL=auth.js.map

/***/ }),

/***/ 481:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase_app__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_firebase_auth__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_splash_splash__ = __webpack_require__(167);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, modalCtrl) {
        var _this = this;
        platform.ready().then(function () {
            statusBar.styleDefault();
            // splashScreen.hide();
            var splash = modalCtrl.create(__WEBPACK_IMPORTED_MODULE_8__pages_splash_splash__["a" /* SplashPage */]);
            splash.present();
        });
        var unsubscribe = __WEBPACK_IMPORTED_MODULE_6_firebase_app___default.a.auth().onAuthStateChanged(function (user) {
            if (!user) {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */];
                unsubscribe();
            }
            else {
                console.log("authData UID = " + user.uid);
                localStorage.setItem("user_id", user.uid);
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
                unsubscribe();
            }
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/naiguelsantos/Documents/PROGRAMMING/IONIC/projects/applistadecompras.com.br/applistadecompras/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/naiguelsantos/Documents/PROGRAMMING/IONIC/projects/applistadecompras.com.br/applistadecompras/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__validators_email__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__signup_signup__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__reset_password_reset_password__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_helper_helper__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var LoginPage = /** @class */ (function () {
    function LoginPage(navParams, navCtrl, loadingCtrl, alertCtrl, authProvider, formBuilder, helper) {
        this.navParams = navParams;
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.authProvider = authProvider;
        this.formBuilder = formBuilder;
        this.helper = helper;
        this.loginForm = formBuilder.group({
            email: ['',
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__validators_email__["a" /* EmailValidator */].isValid])],
            password: ['',
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].minLength(6), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required])]
        });
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.loginUser = function () {
        var _this = this;
        if (!this.loginForm.valid) {
            console.log(this.loginForm.value);
        }
        else {
            this.authProvider.loginUser(this.loginForm.value.email, this.loginForm.value.password)
                .then(function (authData) {
                console.log("authData UID = " + authData.user.uid);
                localStorage.setItem("user_id", authData.user.uid);
                localStorage.setItem("user_email", authData.user.email);
                _this.loading.dismiss().then(function () {
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* HomePage */]);
                });
            }, function (error) {
                _this.loading.dismiss().then(function () {
                    var alert = _this.alertCtrl.create({
                        message: _this.helper.getFirebaseMessage(error.code),
                        buttons: [
                            {
                                text: "Ok",
                                role: 'cancel'
                            }
                        ]
                    });
                    alert.present();
                });
            });
            this.loading = this.loadingCtrl.create();
            this.loading.present();
        }
    };
    LoginPage.prototype.goToSignup = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__signup_signup__["a" /* SignupPage */]);
    };
    LoginPage.prototype.goToResetPassword = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__reset_password_reset_password__["a" /* ResetPasswordPage */]);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/naiguelsantos/Documents/PROGRAMMING/IONIC/projects/applistadecompras.com.br/applistadecompras/src/pages/login/login.html"*/'<ion-content padding>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col class="d-grid my-4">\n        <div id="brand-login" class="m-auto"></div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <form [formGroup]="loginForm" (submit)="loginUser()" novalidate>\n    \n    <ion-item>\n      <ion-label stacked>E-mail</ion-label>\n      <ion-input formControlName="email" type="email" placeholder="E-mail"\n      [class.invalid]="!loginForm.controls.email.valid && blur"></ion-input>\n    </ion-item>\n    \n    <ion-item>\n      <ion-label stacked>Senha</ion-label>\n      <ion-input formControlName="password" type="password" placeholder="Senha"\n      [class.invalid]="!loginForm.controls.password.valid && blur"></ion-input>\n    </ion-item>\n    \n    <button ion-button block type="submit" [disabled]="!loginForm.valid">\n      Entrar\n    </button>\n    \n  </form>\n  \n  <button ion-button block clear (click)="goToSignup()">\n    Criar nova conta\n  </button>\n  \n  <button ion-button block clear (click)="goToResetPassword()">\n    Esqueci minha senha\n  </button>\n  \n</ion-content>'/*ion-inline-end:"/Users/naiguelsantos/Documents/PROGRAMMING/IONIC/projects/applistadecompras.com.br/applistadecompras/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_8__providers_helper_helper__["a" /* HelperProvider */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ })

},[297]);
//# sourceMappingURL=main.js.map