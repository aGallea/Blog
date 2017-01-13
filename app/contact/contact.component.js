"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var contact_model_1 = require('./contact.model');
var page_header_service_1 = require('../page-header/page-header.service');
var page_header_model_1 = require('../page-header/page-header.model');
var ContactComponent = (function () {
    function ContactComponent(pageHeaderService) {
        this.pageHeaderService = pageHeaderService;
        this.submitted = false;
        this.model = new contact_model_1.Contact();
    }
    ContactComponent.prototype.ngOnInit = function () {
        var header = new page_header_model_1.PageHeader();
        header.title = "צרו קשר";
        header.description = "כל מה שעולה לכם בראש";
        header.backgroundImage = "app/images/contact-bg.jpg";
        this.pageHeaderService.setTitle(header);
    };
    ContactComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'kresh-contact',
            templateUrl: 'contact.component.html',
            styleUrls: ['contact.component.css']
        }), 
        __metadata('design:paramtypes', [page_header_service_1.PageHeaderService])
    ], ContactComponent);
    return ContactComponent;
}());
exports.ContactComponent = ContactComponent;
//# sourceMappingURL=contact.component.js.map