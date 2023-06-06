import useAnimation from '@/hooks/useAnimation';
import style from './index.module.scss';
import cs from 'classnames';

export default function Animation() {
  const [className, toggle] = useAnimation('active');

  return (
    <div
      className={cs(style['circle'], style[className])}
      onClick={toggle}
    ></div>
  );
}
