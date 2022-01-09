package com.bookworld.bookStore.service;

import com.bookworld.bookStore.dto.BookReviewDto;
import com.bookworld.bookStore.model.Book;
import com.bookworld.bookStore.model.BookReview;
import com.bookworld.bookStore.model.User;
import com.bookworld.bookStore.repository.BookRepository;
import com.bookworld.bookStore.repository.BookReviewRepository;
import com.bookworld.bookStore.repository.UserRepository;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.ArgumentCaptor;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.modelmapper.ModelMapper;

import java.lang.reflect.Array;
import java.util.Arrays;
import java.util.List;
import java.util.UUID;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
public class BookReviewServiceTest {
    @InjectMocks
    BookReviewService bookReviewService;
    @Mock
    BookReviewRepository bookReviewRepository;
    @Mock
    BookRepository bookRepository;

    @Mock
    ModelMapper modelMapper;
    @Mock
    UserRepository userRepository;

    @Test
    void whenAddBookReviewToBookByUser_callRepositoryToSave() {
        UUID uuid = UUID.randomUUID();
        UUID bookId = UUID.randomUUID();
        when(userRepository.findUserByEmail(anyString())).thenReturn(new User(uuid, "name", "email", "password", null));

        BookReviewDto reviewDto = BookReviewDto.builder().build();

        bookReviewService.addBookReviewToBookByUser(reviewDto, bookId, "userEmail");


        reviewDto.setUserId(uuid);
        reviewDto.setBookId(bookId);
        ArgumentCaptor<BookReview> argument = ArgumentCaptor.forClass(BookReview.class);
        verify(bookReviewRepository).saveAndFlush(argument.capture());
        assertThat(reviewDto).isEqualTo(reviewDto);
    }

    @Test
    void whenGetBookReviewsByBookId_returnReviews() {
        UUID bookId = UUID.randomUUID();
        when(bookReviewRepository.findReviewsByBook(any())).thenReturn(
                Arrays.asList(
                        BookReview.builder()
                                .book(Book.builder().id(bookId).build())
                                .build(),
                        BookReview.builder()
                                .book(Book.builder().id(bookId).build())
                                .build()
                )
        );

        List<BookReviewDto> results = bookReviewService.getBookReviewsByBookId(bookId);
        assertThat(results.size()).isEqualTo(2);

    }
}
