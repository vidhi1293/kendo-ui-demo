import { Component, OnInit, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { ProgressBarOrientation } from '@progress/kendo-angular-progressbar';
import { LabelSettings } from '@progress/kendo-angular-progressbar';
import { FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnInit, AfterViewInit, OnDestroy {

  constructor() { }
  
  public value1 = 50;
  public chunks = 5;

  public label: LabelSettings = {
      visible: true,
      format: 'percent',
      position: 'start'
  };

  public value2 = 0;
  public max2 = 9;
  public labelText = 'Empty';

  public progressStyles: {[key: string]: any} = {
    color: '',
    background: ''
  };

  public emptyStyles: {[key: string]: any} = {
    background: ''
  };

  public labelSettings: LabelSettings = {
    position: 'end',
    format: () => this.labelText
  };

  public onInput(e: any): void {
    this.value = e.target.value.length;

    switch (this.value) {
    case 0:
        this.updateAppearance('Empty', '', '');
        break;
    case 1:
    case 2:
    case 3:
        this.updateAppearance('Weak', '#ee9f05', 'red');
        break;
    case 4:
    case 5:
    case 6:
        this.updateAppearance('Good', '#428bca', '#428bca');
        break;
    case 7:
    case 8:
    case 9:
        this.updateAppearance('Strong', '#8EBC00', '#8EBC00');
        break;
    default:
    }
  }

  public resetPassword(inputElement: any): void {
    this.value = 0;
    inputElement.value = '';
  }

  private updateAppearance(text: string, background: string, color: string): void {
    this.labelText = text;
    this.progressStyles.background = background;
    this.emptyStyles.color = color;
  }


  public reverse = true;
  public orientation: ProgressBarOrientation = 'horizontal';

  @ViewChild('profileForm', {static: false}) public form: FormGroup;
    public genders = [{
        text: 'Male',
        value: 'male'
    }, {
        text: 'Female',
        value: 'female'
    }, {
        text: 'Rather not say',
        value: 'notsay'
    }];
    public person = {
        firstName: '',
        lastName: '',
        gender: 'male',
        occupation: 'Software Developer'
    };

    public value = 2;
    public min = 0;
    public max = 4;
    //public chunks = 4;

    public completeness = '50%';

    public progressStyle: {[key: string]: any} = {
        background: 'lightgreen'
    };

    public emptyStyle: {[key: string]: any} = {
        background: 'pink'
    };

    private formSubscription: Subscription;

    public ngAfterViewInit(): void {
        this.formSubscription = this.form.valueChanges.subscribe(x => {
           const completed = Object.keys(this.form.value).reduce((acc, curr) => this.form.value[curr] ? acc + 1 : acc, 0);
           this.value = completed;
           this.completeness = (completed * 25) + '%';
        });
    }

    public ngOnDestroy(): void {
        this.formSubscription.unsubscribe();
    }

  ngOnInit() {
    
  }

}
