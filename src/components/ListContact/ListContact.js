import ListModule from './ListContact.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { removeContacts } from 'components/redux/sliceContacts';
import AddIcon from 'components/Icons/AddIcon';
import { getFiltered } from 'components/redux/contactsSelector';

export const ListContact = () => {
  const contacts = useSelector(getFiltered);
  const dispatch = useDispatch();

  return (
    <ul className={ListModule.list}>
      {contacts && contacts.length > 0 ? (
        contacts.map(({ id, name, number }) => (
          <li key={id} className={ListModule.item}>
            <button
              type="button"
              className={ListModule.removeButton}
              onClick={() => dispatch(removeContacts(id))}
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
