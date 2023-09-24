import AppStyle from './AppStyle.module.css';

import { FilterContact } from './FilterContact/FilterContact';
import { FormContact } from './FormContact/FormContact';
import { ListContact } from './ListContact/ListContact';

export const App = () => {
  return (
    <div className={AppStyle.container}>
      <h1 className={AppStyle.primeryTitle}>Phonebook</h1>
      <FormContact />
      <h2 className={AppStyle.secondaryTitle}>Contacts </h2>
      <FilterContact />
      <ListContact />
    </div>
  );
};
