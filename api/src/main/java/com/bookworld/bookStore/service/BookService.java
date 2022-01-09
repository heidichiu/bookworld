package com.bookworld.bookStore.service;

import com.bookworld.bookStore.dto.BookDto;
import com.bookworld.bookStore.model.Book;
import com.bookworld.bookStore.repository.BookRepository;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;
import java.util.function.Function;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

@Service
public class BookService {

    private final BookRepository bookRepository;
    private final ModelMapper modelMapper;

    public BookService(BookRepository bookRepository, ModelMapper modelMapper) {
        this.bookRepository = bookRepository;
        this.modelMapper = modelMapper;
    }

    public BookDto getBookById(UUID id) {
        Book book = bookRepository.findBookById(id);
        return modelMapper.map(book, BookDto.class);
    }

    public List<BookDto> getBooks() {
        Iterable<Book> all = bookRepository.findAll();
        return StreamSupport.stream(all.spliterator(), false)
                .map(convertBookModelToBookDto())
                .collect(Collectors.toList());

    }

    private Function<Book, BookDto> convertBookModelToBookDto() {
        return book -> modelMapper.map(book, BookDto.class);
    }

    public List<BookDto> getBooksByTitle(String title) {

        List<Book> booksByTitleIgnoreCase = bookRepository.findBooksByTitleIgnoreCase(title);

        return booksByTitleIgnoreCase.stream()
                .map(convertBookModelToBookDto())
                .collect(Collectors.toList());
    }
}
