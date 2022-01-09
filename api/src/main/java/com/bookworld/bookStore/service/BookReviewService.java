package com.bookworld.bookStore.service;

import com.bookworld.bookStore.dto.BookReviewDto;
import com.bookworld.bookStore.model.Book;
import com.bookworld.bookStore.model.BookReview;
import com.bookworld.bookStore.model.User;
import com.bookworld.bookStore.repository.BookRepository;
import com.bookworld.bookStore.repository.BookReviewRepository;
import com.bookworld.bookStore.repository.UserRepository;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;


@Service
public class BookReviewService {
    private final BookReviewRepository bookReviewRepository;
    private final BookRepository bookRepository;
    private final ModelMapper modelMapper;
    private final UserRepository userRepository;


    public BookReviewService(BookReviewRepository bookReviewRepository, BookRepository bookRepository, ModelMapper modelMapper, UserRepository userRepository) {
        this.bookReviewRepository = bookReviewRepository;
        this.bookRepository = bookRepository;
        this.modelMapper = modelMapper;
        this.userRepository = userRepository;
    }

    public BookReviewDto addBookReviewToBookByUser(BookReviewDto bookReviewDto, UUID bookId, String userEmail) {
        User user = userRepository.findUserByEmail(userEmail);
        bookReviewDto.setBookId(bookId);
        bookReviewDto.setUserId(user.getId());
        BookReview bookReview = modelMapper.map(bookReviewDto, BookReview.class);
        BookReview savedReview = bookReviewRepository.saveAndFlush(bookReview);

        return modelMapper.map(savedReview, BookReviewDto.class);
    }

    public BookReviewDto addBookReviewToBookByUser(BookReviewDto bookReviewDto, String bookId, String userEmail) {

        return addBookReviewToBookByUser(bookReviewDto, UUID.fromString(bookId), userEmail);
    }

    public List<BookReviewDto> getBookReviewsByBook(UUID bookId) {
        Book book = bookRepository.findBookById(bookId);
        List<BookReview> bookReviews = bookReviewRepository.findByBook(book);

        return bookReviews.stream()
                .map(review -> modelMapper.map(review, BookReviewDto.class))
                .collect(Collectors.toList());

    }
}
