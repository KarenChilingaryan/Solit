import { IconWrapper } from '../../components/atoms';

const StaticPages = () => (
  <svg width='150' height='150' viewBox='0 0 20 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M21.3,6.2l-4.5-4.5l-0.1,0.1l0.1-0.1c-0.1-0.1-0.3-0.2-0.4-0.2h-6.3c-1.3,0-2.3,1.1-2.3,2.3v0.8H4.9
	C3.6,4.7,2.5,5.7,2.5,7v13.1c0,1.3,1.1,2.3,2.3,2.3h9c1.3,0,2.3-1.1,2.3-2.3v-0.8h2.8c1.3,0,2.3-1.1,2.3-2.3V6.6
	C21.5,6.4,21.4,6.3,21.3,6.2z M3.7,7c0-0.7,0.5-1.2,1.2-1.2h5.8V8c0,1.3,1.1,2.3,2.3,2.3h2.2v9.8c0,0.7-0.5,1.2-1.2,1.2h-9
	c-0.7,0-1.2-0.5-1.2-1.2V7z M11.8,8V6.6l2.6,2.6H13C12.3,9.2,11.8,8.6,11.8,8z M16.1,9.3l-4.5-4.5c-0.1-0.1-0.3-0.2-0.4-0.2
	c0,0,0,0,0,0H8.9V3.9c0-0.7,0.5-1.2,1.2-1.2h5.8v2.2c0,1.3,1.1,2.3,2.3,2.3h2.1V17c0,0.7-0.5,1.2-1.2,1.2h-2.8V9.7
	C16.3,9.6,16.2,9.4,16.1,9.3z M17,4.8V3.5L19.5,6h-1.4C17.5,6,17,5.5,17,4.8z'
    />
  </svg>
);

const StaticPagesIcon = props => <IconWrapper component={StaticPages} {...props} />;

export default StaticPagesIcon;
