import { async, ComponentFixture } from '@angular/core/testing';

import { configureTests, ConfigureFn } from '../../../jest/testing';

import { Button } from './index';

describe('Button', () => {
  let component: Button;
  let fixture: ComponentFixture<Button>;

  beforeEach(
    async(() => {
      const configure: ConfigureFn = testBed => {
        testBed.configureTestingModule({
          declarations: [Button]
        });
      };

      configureTests(configure).then(testBed => {
        fixture = testBed.createComponent(Button);
        component = fixture.componentInstance;
        fixture.detectChanges();
      });
    })
  );

  it('snap native with text', () => {
    component.text = "56" 
    fixture.detectChanges();
    expect(fixture.nativeElement).toMatchSnapshot();
  });

  it('click should not fire without action', () => {
    component.text = "56" 
    spyOn(component.onClick, 'emit');
    fixture.detectChanges();
    expect(component.onClick.emit).not.toHaveBeenCalled();
  });

  it('click should fire with action', () => {
    component.text = "56" 
    spyOn(component.onClick, 'emit');
    let button = fixture.debugElement.nativeElement.querySelector('button');
    button.click();
    fixture.whenStable().then(() => {
        expect(component.onClick.emit).toHaveBeenCalled();
    });
  });
});
