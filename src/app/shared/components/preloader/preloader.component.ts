import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-preloader",
  templateUrl: "./preloader.component.html",
  styleUrls: ["./preloader.component.css"],
})
export class PreloaderComponent implements OnInit {
  @Input()
  loading: boolean;
  @Input()
  failed: string;
  constructor() {}

  ngOnInit(): void {}
}
