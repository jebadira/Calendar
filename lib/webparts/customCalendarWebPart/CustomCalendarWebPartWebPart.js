"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ReactDom = require("react-dom");
var sp_core_library_1 = require("@microsoft/sp-core-library");
var sp_webpart_base_1 = require("@microsoft/sp-webpart-base");
var strings = require("customCalendarWebPartStrings");
var CalendarContainer = require("./dist/scripts/c72cc6e78fbc47a8895f1b531093ffac.js");
var CustomCalendarWebPartWebPart = (function (_super) {
    __extends(CustomCalendarWebPartWebPart, _super);
    function CustomCalendarWebPartWebPart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CustomCalendarWebPartWebPart.prototype.render = function () {
        var element = React.createElement(CalendarContainer.default, {});
        ReactDom.render(element, this.domElement);
    };
    Object.defineProperty(CustomCalendarWebPartWebPart.prototype, "dataVersion", {
        get: function () {
            return sp_core_library_1.Version.parse('1.0');
        },
        enumerable: true,
        configurable: true
    });
    CustomCalendarWebPartWebPart.prototype.getPropertyPaneConfiguration = function () {
        return {
            pages: [
                {
                    header: {
                        description: strings.PropertyPaneDescription
                    },
                    groups: [
                        {
                            groupName: strings.BasicGroupName,
                            groupFields: [
                                sp_webpart_base_1.PropertyPaneTextField('description', {
                                    label: strings.DescriptionFieldLabel
                                })
                            ]
                        }
                    ]
                }
            ]
        };
    };
    return CustomCalendarWebPartWebPart;
}(sp_webpart_base_1.BaseClientSideWebPart));
exports.default = CustomCalendarWebPartWebPart;

//# sourceMappingURL=CustomCalendarWebPartWebPart.js.map
