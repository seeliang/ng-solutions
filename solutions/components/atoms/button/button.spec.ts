import {sum} from './functions';
import {Button} from './index';
import { async, ComponentFixture, TestBed } from '@angular/core/testing'

type CompilerOptions = Partial<{
  providers: any[]
  useJit: boolean
  preserveWhitespaces: boolean
}>
export type ConfigureFn = (testBed: typeof TestBed) => void

export const configureTests = (configure: ConfigureFn, compilerOptions: CompilerOptions = {}) => {
  const compilerConfig: CompilerOptions = {
    preserveWhitespaces: false,
    ...compilerOptions,
  }

  const configuredTestBed = TestBed.configureCompiler(compilerConfig)

  configure(configuredTestBed)

  return configuredTestBed.compileComponents().then(() => configuredTestBed)
}


test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});


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
