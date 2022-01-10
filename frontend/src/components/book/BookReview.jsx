import { Box, Typography } from "@material-ui/core";

const BookReview = ({ review }) => {
  return (
    <Box display="flex" flexDirection="row" alignItems="center" mt={3}>
      <Box height="60px" width="60px" display="flex" justifyContent="center" alignItems="center" mr={3}>
        <Typography variant="h3">{review.score}</Typography>
        <Typography variant="body2" style={{ marginLeft: "5px", alignSelf: "flex-end" }}>
          /10
        </Typography>
      </Box>
      <Box width="100%">
        <Typography variant="h6">{review.title}</Typography>
        <Typography variant="body2">{review.content}</Typography>
        <Box display="flex" justifyContent="flex-end" mt={3}>
          <Typography variant="caption" align="right">
            {review.user.name} - {new Date(review.createdAt).toLocaleString()}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default BookReview;
