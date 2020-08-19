import { InfinityScrollDemo } from './demo';
import { CommonModule } from '@angular/common'
import { moduleMetadata } from '@storybook/angular';
import {InfinityScroll} from './index'

export default {
  title: 'InfinityScroll',
  decorators: [
    moduleMetadata({
      declarations: [InfinityScrollDemo, InfinityScroll],
      imports: [CommonModule],
    }),
  ],
};

export const Sample = () => ({
  component: InfinityScrollDemo,
});