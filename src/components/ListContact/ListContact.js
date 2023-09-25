import ListModule from './ListContact.module.css';
import { useDispatch, useSelector } from 'react-redux';
import AddIcon from 'components/Icons/AddIcon';
import { getFiltered } from 'components/redux/contactsSelector';
import { deleteContact } from 'components/redux/backendAPI';

export const ListContact = () => {
  const contacts = useSelector(getFiltered);
  const dispatch = useDispatch();

  const handleDelete = id => {
    dispatch(deleteContact(id));
  };

  return (
    <ul className={ListModule.list}>
      {contacts && contacts.length > 0 ? (
        contacts.map(({ id, name, number }) => (
          <li key={id} className={ListModule.item}>
            <button
              type="button"
              className={ListModule.removeButton}
              onClick={() => handleDelete(id)}
              aria-label="Delete contact"
            >
              <AddIcon width="45" height="45" />
            </button>
            {name + ': ' + number}
          </li>
        ))
      ) : (
        <p className={ListModule.alert}>Sorry! You have no contacts created.</p>
      )}
    </ul>
  );
};
