import { Component, OnInit } from "@angular/core";

import { locale as en } from "./i18n/en";
import { locale as id } from "./i18n/id";

import { CoreTranslationService } from "@core/services/translation.service";

@Component({
  selector: "app-sample",
  templateUrl: "./sample.component.html",
  styleUrls: ["./sample.component.scss"],
})
export class SampleComponent implements OnInit {
  public contentHeader: object;

  /**
   *
   * @param {CoreTranslationService} _coreTranslationService
   */
  constructor(private _coreTranslationService: CoreTranslationService) {
    this._coreTranslationService.translate(id, en);
  }

  // Lifecycle Hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit() {
    this.contentHeader = {
      headerTitle: "Home",
      actionButton: true,
      breadcrumb: {
        type: "",
        links: [
          {
            name: "Home",
            isLink: true,
            link: "/",
          },
          {
            name: "Sample",
            isLink: false,
          },
        ],
      },
    };
  }
}
