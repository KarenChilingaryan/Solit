import { IconWrapper } from '../../components/atoms';

const Caret = () => (
  <svg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M10.9352 4.4433L7.05017 0.5583C6.46517 -0.0267 5.52017 -0.0267001 4.93517 0.5583L1.05017 4.4433C0.105167 5.3883 0.780167 7.0083 2.11517 7.0083L9.88517 7.0083C11.2202 7.0083 11.8802 5.3883 10.9352 4.4433Z'
      fill='#C8CBD8'
    />
  </svg>
);

const CaretIcon = props => <IconWrapper component={Caret} {...props} />;

export default CaretIcon;
