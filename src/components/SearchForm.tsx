import "../styles/search.css"
type Props = {};

function SearchForm({}: Props) {
  return (
    <form className="form">
      <input type="text" name="search" />
      <button>Go</button>
    </form>
  );
}

export default SearchForm;
