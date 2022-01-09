package com.bookworld.bookStore.controller;

import com.bookworld.bookStore.dto.BookDto;
import com.bookworld.bookStore.service.BookService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Api(value = "Book Api", tags = "Book Api", produces = "application/json")
@RestController
@CrossOrigin
@RequestMapping("api/v1/books")
public class BookController {

    @Autowired
    private BookService bookService;

    @ApiOperation(value = "Get list of books", response = BookDto[].class, produces = "application/json")
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "Successfully retrieved list of books"),
            @ApiResponse(code = 403, message = "The resource is forbidden"),
            @ApiResponse(code = 404, message = "The resource is not found")
    })
    @GetMapping
    public ResponseEntity<List<BookDto>> getBooks(@RequestParam("title") Optional<String> title) {
        List<BookDto> books;
        if (title.isPresent()) {
            List<BookDto> booksByTitle = bookService.getBooksByTitle(title.get());
            return ResponseEntity.ok(booksByTitle);
        }

        books = bookService.getBooks();
        return ResponseEntity.ok(books);
    }

    @GetMapping("/{id}")
    public ResponseEntity<BookDto> getBookById(@PathVariable("id") String id) {
        BookDto book = bookService.getBookById(UUID.fromString(id));
        return ResponseEntity.ok(book);
    }
}
