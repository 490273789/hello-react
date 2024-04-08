import cs from 'classnames';
import style from './index.module.scss';
import useAnimation from '@/hooks/useAnimation';

export default function Animation() {
  const [className, toggle] = useAnimation('active');

  return (
    <div
      className={cs(style['circle'], style[className])}
      onClick={toggle}
    ></div>
  );
}
