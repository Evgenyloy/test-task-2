import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { useBooksQuery } from '../../hooks/useBooksQuery';
import Header from '../header/Header';
import Books from '../books/Books';
import MainLayout from '../mainLayout/MainLayout';
import Book from '../book/Book';

function App() {
  const { books, isFetching, isSuccess, isError, setSkip, skip } =
    useBooksQuery();

  return (
    <Router>
      <div className="app">
        <Header
          setSkip={setSkip}
          books={books}
          isSuccess={isSuccess}
          isFetching={isFetching}
          skip={skip}
        />
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route
              index
              element={
                <Books
                  books={books}
                  isSuccess={isSuccess}
                  isFetching={isFetching}
                  isError={isError}
                />
              }
            />
            <Route path="book" element={<Book />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
