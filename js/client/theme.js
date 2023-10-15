import dayjs from 'dayjs';
import './navigation';
import { someDependency } from './some-dependency';

var now = dayjs()

console.log({now})
someDependency();
