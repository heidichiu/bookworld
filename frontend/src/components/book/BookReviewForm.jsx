import { Box, Link } from "@material-ui/core";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import { getBookSelector } from "../../module/book/bookSelector";

const BookReviewForm = () => {
  const { bookId } = useParams();
  const book = useSelector(getBookSelector);
  const history = useHistory();

  const handleReturnLink = () => {
    history.push(`books/${bookId}`);
  };

  return (
    <Box>
      <Box>
        <Link onClick={handleReturnLink} variant="body2">
          Return to {book.title}
        </Link>
      </Box>
    </Box>
  );
};

export default BookReviewForm;
