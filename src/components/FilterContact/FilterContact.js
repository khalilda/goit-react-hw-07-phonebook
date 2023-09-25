import { useDispatch, useSelector } from 'react-redux';
import FilterModule from './FilterContact.module.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { setFilter } from 'components/redux/filterSlice';
import { getFilter } from 'components/redux/contactsSelector';

export const FilterContact = () => {
  const dispatch = useDispatch();
  const filtered = useSelector(getFilter);

  const onChange = event => {
    dispatch(setFilter(event.target.value));
  };

  return (
    <label name="filter" className={FilterModule.label}>
      <input
        className={FilterModule.input}
        type="text"
        name="filter"
        placeholder="Find contacts by name"
        onChange={event => {
          onChange(event);
        }}
        value={filtered}
      />
      <ToastContainer />
    </label>
  );
};
