package com.bookworld.bookStore.controller;

import com.bookworld.bookStore.config.JwtUtil;
import com.bookworld.bookStore.dto.BookReviewDto;
import com.bookworld.bookStore.service.BookReviewService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@CrossOrigin
@RequestMapping("api/v1/")
public class BookReviewController {


    private final BookReviewService bookReviewService;
    private final JwtUtil jwtUtil;

    public BookReviewController(BookReviewService bookReviewService, JwtUtil jwtUtil) {
        this.bookReviewService = bookReviewService;
        this.jwtUtil = jwtUtil;
    }

    @PostMapping("books/{bookId}/book-reviews")
    public ResponseEntity<BookReviewDto> postReview(@RequestHeader("Authorization") String token, @PathVariable String bookId, @RequestBody BookReviewDto bookReviewDto) {
        String username = jwtUtil.extractUserEmailFromToken(token);
        BookReviewDto reviewDto = bookReviewService.addBookReviewToBookByUser(bookReviewDto, bookId, username );
        return ResponseEntity.status(HttpStatus.CREATED).body(reviewDto);
    }

    @GetMapping("books/{bookId}/book-reviews")
    public ResponseEntity<List<BookReviewDto>> getReviews(@PathVariable String bookId) {

        return ResponseEntity.ok(bookReviewService.getBookReviewsByBook(UUID.fromString(bookId)));
    }
}
