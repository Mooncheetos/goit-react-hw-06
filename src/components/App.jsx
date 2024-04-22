import css from "../components/App.module.css";
import SearchBox from "./SearchBox/SearchBox";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";

function App() {
  return (
    <>
    <div className={css.phoneBookContainer} >
      <h1 className={css.phoneBookTitle}>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
      </div>
      </>
  );
}

export default App;