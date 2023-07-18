import "../styles/search.css";

type Props = {
  search: string;
  submitHandler: React.FormEventHandler<HTMLFormElement> | undefined;
  onChange : React.ChangeEventHandler<HTMLInputElement> | undefined
};

function SearchForm({ search, submitHandler,onChange }: Props) {

  return (
    <form className="form" onSubmit={submitHandler}>
      <input onChange={onChange} placeholder="Search for a product here..." type="text" name="search" value={search} />
      <button>Go</button>
    </form>
  );
}

export default SearchForm;
