import { async, ComponentFixture, TestBed } from '@angular/core/testing';

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

  it('should snap', () => {
    expect(fixture).toMatchSnapshot();
  });
});
