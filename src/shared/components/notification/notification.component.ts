import { Component, OnInit } from "@angular/core";
import { LayoutManageService } from "src/app/services/layout-manage.service";

@Component({
  selector: "app-notification",
  templateUrl: "./notification.component.html",
  styleUrls: ["./notification.component.css"],
})
export class NotificationComponent implements OnInit {
  public vissible = false;

  private time = null;

  constructor(private layoutManageService: LayoutManageService) {}

  ngOnInit() {
    this.layoutManageService.notification.subscribe(() => {
      if (this.time) {
        return;
      }
      this.vissible = true;
      this.time = setTimeout(() => {
        this.vissible = false;
        this.time = null;
      }, 5000);
    });
  }
}
