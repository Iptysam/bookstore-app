import { useDispatch, useSelector } from 'react-redux';
import { CheckStatus } from '../redux/categories/categories';

const Categories = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories);

  return (
    <>
      <h1>{categories}</h1>
      <button onClick={() => dispatch(CheckStatus())} className="check-status" type="button">Check Status</button>
    </>
  );
};

export default Categories;
