import { Component, OnInit, ViewChild, AfterViewInit, OnDestroy, ViewEncapsulation  } from '@angular/core';
import { ProgressBarOrientation } from '@progress/kendo-angular-progressbar';
import { FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-other',
  templateUrl: './other.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./other.component.css']
})
export class OtherComponent implements OnInit {

  constructor() { }

  public opened1 = false;

    public close1(status) {
      console.log(`Dialog result: ${status}`);
      this.opened1 = false;
    }

    public open1() {
      this.opened1 = true;
    }

    public opened = false;
    public dataSaved = false;

    public close() {
      this.opened = false;
    }

    public open() {
      this.opened = true;
    }

    public submit() {
        this.dataSaved = true;
        this.close();
    }

  private toggleText: string = "Show";
  private show: boolean = false;

  public onToggle(): void {
      this.show = !this.show;
      this.toggleText = this.show ? "Hidе" : "Show";
  }

  public value = `
        <p>
            The Kendo Angular UI Editor allows your users to edit HTML in a familiar, user-friendly way.<br />
            In this version, the Editor provides the core HTML editing engine, which includes basic text formatting, hyperlinks and lists.
            The widget <strong>outputs identical HTML</strong> across all major browsers, follows
            accessibility standards, and provides API for content manipulation.
        </p>
        <p>Features include:</p>
        <ul>
            <li>Text formatting</li>
            <li>Bulleted and numbered lists</li>
            <li>Hyperlinks</li>
            <li>Cross-browser support</li>
            <li>Identical HTML output across browsers</li>
        </ul>
    `;

  ngOnInit() {
  }

}
