import * as React from "react";

interface ISearchBox {
  searchChange: React.ChangeEventHandler;
}

const SearchBox = ({ searchChange }: ISearchBox) => {
  return (
    <div className='pa2'>
      <input
        className='pa3 ba b--green bg-lightest-blue'
        type='search'
        placeholder='search robots'
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
