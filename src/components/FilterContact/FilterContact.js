// import { filterContacts } from 'components/redux/sliceContacts';
import { useDispatch, useSelector } from 'react-redux';
import FilterModule from './FilterContact.module.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getFilter } from 'components/redux/contactsSelector';

export const FilterContact = () => {
  const dispatch = useDispatch();
  const filtered = useSelector(getFilter);

  // const onChange = event => {
  //   const { value } = event.target;
  //   toast.info(`Searched for "${value}" `);
  //   dispatch(filterContacts(value.trim()));
  // };

  const onChange = event => {
    dispatch(getFilter(event.target.value));
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

//q. is it correct?
