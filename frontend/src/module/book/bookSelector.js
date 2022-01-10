export const getBooksSelector = (rootReducer) => rootReducer.bookReducer.books;
export const getBookSelector = (rootReducer) => rootReducer.bookReducer.book;
export const getSingleBookPromiseSelector = (rootReducer) => rootReducer.bookReducer.bookPromise;
export const getBookListPromiseSelector = (rootReducer) => rootReducer.bookReducer.promise;
export const postBookReviewPromiseSelector = (rootReducer) => rootReducer.bookReducer.postBookReviewPromise;
