package com.bookworld.bookStore.service;

import com.bookworld.bookStore.repository.BookRepository;
import com.bookworld.bookStore.repository.BookReviewRepository;
import com.bookworld.bookStore.repository.UserRepository;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.modelmapper.ModelMapper;

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
    void addBookReviewToBookByUser_success(){

    }
}
