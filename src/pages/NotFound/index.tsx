import stylesTema from 'styles/Tema.module.scss';
import styles from './NotFound.module.scss';
import { useNavigate } from 'react-router-dom';
import classNames from 'classnames';
import { ReactComponent as NotFoundImage } from 'assets/not_found.svg';

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <div className={classNames({
      [styles.container]:true,
      [stylesTema.container]:true
    })}>
      <div className={styles.voltar}>
        <button onClick={() => navigate(-1)}>
          {'< Voltar'}
        </button>
      </div>
      <NotFoundImage />
    </div>

  );
}